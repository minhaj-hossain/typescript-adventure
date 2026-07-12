import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import QuestMode from "./components/QuestMode";
import Playground from "./components/Playground";
import ReferenceDocs from "./components/ReferenceDocs";
import { Sparkles, Award, Star, X } from "lucide-react";

// Firebase imports
import { User } from "firebase/auth";
import { auth, getWizardProgress, saveWizardProgress } from "./lib/firebase";
import WizardSanctum from "./components/WizardSanctum";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "quest" | "playground" | "docs">("home");
  const [xp, setXp] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [unlockedLevelIds, setUnlockedLevelIds] = useState<string[]>(["level-0-1-bootstrap"]);
  const [showCelebration, setShowCelebration] = useState<string | null>(null);
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);

  // Firebase auth & profile states
  const [user, setUser] = useState<User | null>(null);
  const [wizardTitle, setWizardTitle] = useState("Primitive Initiate");
  const [isSanctumOpen, setIsSanctumOpen] = useState(false);

  // Load user data on mount
  useEffect(() => {
    const savedXp = localStorage.getItem("wizard_xp");
    const savedBadges = localStorage.getItem("wizard_badges");
    const savedLevels = localStorage.getItem("unlocked_levels");
    if (savedXp) setXp(Number(savedXp));
    if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges));
    if (savedLevels) setUnlockedLevelIds(JSON.parse(savedLevels));

    // Monitor Firebase Auth state change
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        handleUserLogin(currentUser.uid);
      }
    });

    return unsubscribe;
  }, []);

  // Background Cloud Sync on progress change
  useEffect(() => {
    if (user) {
      const saveTimeout = setTimeout(() => {
        saveWizardProgress(user.uid, {
          xp,
          unlockedBadges,
          unlockedLevels: unlockedLevelIds,
          levelCodes: getLocalCodes(),
          wizardTitle
        }).catch((err) => console.warn("Background sync failed:", err));
      }, 1000); // Debounced save

      return () => clearTimeout(saveTimeout);
    }
  }, [user, xp, unlockedBadges, unlockedLevelIds, wizardTitle]);

  const handleUserLogin = async (uid: string) => {
    try {
      const cloudProgress = await getWizardProgress(uid);
      if (cloudProgress) {
        // Merge progress!
        const localXp = Number(localStorage.getItem("wizard_xp") || "0");
        const finalXp = Math.max(localXp, cloudProgress.xp);
        setXp(finalXp);
        localStorage.setItem("wizard_xp", String(finalXp));

        const localBadgesStr = localStorage.getItem("wizard_badges");
        const localBadges: string[] = localBadgesStr ? JSON.parse(localBadgesStr) : [];
        const mergedBadges = Array.from(new Set([...localBadges, ...cloudProgress.unlockedBadges]));
        setUnlockedBadges(mergedBadges);
        localStorage.setItem("wizard_badges", JSON.stringify(mergedBadges));

        const localLevelsStr = localStorage.getItem("unlocked_levels");
        const localLevels: string[] = localLevelsStr ? JSON.parse(localLevelsStr) : ["level-0-1-bootstrap"];
        const mergedLevels = Array.from(new Set([...localLevels, ...cloudProgress.unlockedLevels]));
        setUnlockedLevelIds(mergedLevels);
        localStorage.setItem("unlocked_levels", JSON.stringify(mergedLevels));

        // Sync local level codes from cloud
        if (cloudProgress.levelCodes) {
          Object.entries(cloudProgress.levelCodes).forEach(([levelId, cloudCode]) => {
            const localCode = localStorage.getItem(`code_${levelId}`);
            if (!localCode || localCode !== cloudCode) {
              localStorage.setItem(`code_${levelId}`, cloudCode);
            }
          });
        }

        if (cloudProgress.wizardTitle) {
          setWizardTitle(cloudProgress.wizardTitle);
        }

        // Save merged progress back to the cloud
        await saveWizardProgress(uid, {
          xp: finalXp,
          unlockedBadges: mergedBadges,
          unlockedLevels: mergedLevels,
          levelCodes: {
            ...cloudProgress.levelCodes,
            ...getLocalCodes()
          },
          wizardTitle: cloudProgress.wizardTitle || wizardTitle
        });
      } else {
        // Create new cloud progress document
        await saveWizardProgress(uid, {
          xp,
          unlockedBadges,
          unlockedLevels: unlockedLevelIds,
          levelCodes: getLocalCodes(),
          wizardTitle
        });
      }
    } catch (err) {
      console.warn("Could not sync profile during login:", err);
    }
  };

  const getLocalCodes = (): Record<string, string> => {
    const levelCodes: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("code_")) {
        const levelId = key.replace("code_", "");
        const codeVal = localStorage.getItem(key);
        if (codeVal) {
          levelCodes[levelId] = codeVal;
        }
      }
    }
    return levelCodes;
  };

  const handleXpAwarded = (points: number) => {
    setXp((prev) => {
      const nextXp = prev + points;
      localStorage.setItem("wizard_xp", String(nextXp));
      return nextXp;
    });
  };

  const handleBadgeUnlocked = (badgeId: string, badgeName: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      const nextBadges = [...unlockedBadges, badgeId];
      setUnlockedBadges(nextBadges);
      localStorage.setItem("wizard_badges", JSON.stringify(nextBadges));
      setShowCelebration(badgeName);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    setWizardTitle("Primitive Initiate");
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-sans" id="app-root">
      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" id="celebration-overlay">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full flex flex-col items-center text-center gap-4 relative shadow-2xl shadow-sky-500/10">
            <button
              onClick={() => setShowCelebration(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-8 h-8 animate-bounce" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 font-sans tracking-tight">
                New Badge Unlocked!
              </h3>
              <p className="text-sm text-sky-400 font-semibold font-sans mt-1">
                {showCelebration}
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-serif italic">
                Your mastery over TypeScript has reached a new milestone. Rebuilding the Event Kingdom draws ever closer!
              </p>
            </div>
            <button
              onClick={() => setShowCelebration(null)}
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-slate-950 rounded font-bold text-sm tracking-widest uppercase transition-colors cursor-pointer shadow-lg shadow-sky-900/20"
            >
              Continue Adventure
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        xp={xp}
        badgesCount={unlockedBadges.length}
        user={user}
        onOpenSanctum={() => setIsSanctumOpen(true)}
      />

      {/* Router Tabs */}
      <div className="flex-1 flex flex-col min-h-0">
        {activeTab === "home" && (
          <Home
            xp={xp}
            unlockedLevelIds={unlockedLevelIds}
            onTabChange={setActiveTab}
            onSelectLevel={setSelectedLevelId}
            wizardTitle={wizardTitle}
          />
        )}
        {activeTab === "quest" && (
          <QuestMode
            onXpAwarded={handleXpAwarded}
            onBadgeUnlocked={handleBadgeUnlocked}
            unlockedLevelIds={unlockedLevelIds}
            setUnlockedLevelIds={setUnlockedLevelIds}
            selectedLevelId={selectedLevelId}
            setSelectedLevelId={setSelectedLevelId}
            onTabChange={setActiveTab}
          />
        )}
        {activeTab === "playground" && <Playground />}
        {activeTab === "docs" && <ReferenceDocs />}
      </div>

      {/* Wizard Sanctum Portal Modal */}
      <WizardSanctum
        isOpen={isSanctumOpen}
        onClose={() => setIsSanctumOpen(false)}
        xp={xp}
        unlockedBadges={unlockedBadges}
        unlockedLevels={unlockedLevelIds}
        onAuthSuccess={(u) => setUser(u)}
        onSignOut={handleSignOut}
      />
    </div>
  );
}

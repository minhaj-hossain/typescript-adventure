import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  auth,
  WizardProgress,
  getWizardProgress,
  saveWizardProgress
} from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  updateProfile
} from "firebase/auth";
import {
  Sparkles,
  ShieldCheck,
  User as UserIcon,
  Mail,
  Lock,
  Loader2,
  X,
  Compass,
  Trophy,
  Activity,
  LogOut,
  Flame,
  AlertTriangle,
  Award,
  BookOpen
} from "lucide-react";

interface WizardSanctumProps {
  isOpen: boolean;
  onClose: () => void;
  xp: number;
  unlockedBadges: string[];
  unlockedLevels: string[];
  onAuthSuccess: (user: User) => void;
  onSignOut: () => void;
}

const WIZARD_TITLES = [
  "Primitive Initiate",
  "Type Apprentice",
  "Blueprint Scribe",
  "Union Conduiteer",
  "Compiler Alchemist",
  "Generics Sorcerer",
  "Strict Mode Archmage",
  "Infinite Type Transmuter"
];

export default function WizardSanctum({
  isOpen,
  onClose,
  xp,
  unlockedBadges,
  unlockedLevels,
  onAuthSuccess,
  onSignOut
}: WizardSanctumProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [wizardTitle, setWizardTitle] = useState(WIZARD_TITLES[0]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !displayName) {
      setError("Please fill all runes in the registration seal.");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 1. Create User
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      
      // 2. Update Auth Profile
      await updateProfile(credential.user, {
        displayName: displayName
      });

      // 3. Save initial merged profile in Firestore
      const initialProgress: WizardProgress = {
        xp,
        unlockedBadges,
        unlockedLevels,
        levelCodes: getLocalLevelCodes(),
        wizardTitle
      };
      await saveWizardProgress(credential.user.uid, initialProgress);

      setSuccess(`Your soul has been bound! Welcome, ${displayName} the ${wizardTitle}.`);
      onAuthSuccess(credential.user);
      setTimeout(() => {
        onClose();
        setSuccess(null);
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setError(translateAuthError(err.code || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password fields cannot be empty.");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      setSuccess(`Welcome back, ${credential.user.displayName || "Wizard"}!`);
      onAuthSuccess(credential.user);
      setTimeout(() => {
        onClose();
        setSuccess(null);
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setError(translateAuthError(err.code || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      onSignOut();
      setSuccess("Your soul has been unlinked safely from the cloud.");
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    } catch (err: any) {
      setError("Could not unlink: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const getLocalLevelCodes = (): Record<string, string> => {
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

  const translateAuthError = (code: string) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "This email is already bound to another wizard soul.";
      case "auth/invalid-email":
        return "The email layout is invalid. Check your characters.";
      case "auth/weak-password":
        return "Your password ward is too weak. Make it at least 6 characters.";
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "The login scrolls do not match our archive records.";
      default:
        return code;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" id="sanctum-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
        id="sanctum-modal"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="p-6 border-b border-slate-850 flex items-center justify-between relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <div>
              <h2 className="text-sm font-black uppercase text-slate-100 tracking-wider">
                Wizard Soul Sanctum
              </h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-0.5 text-sky-400">
                Cloud Sync & Soul Binding
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-950/50 hover:bg-slate-800 border border-slate-850 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            id="close-sanctum-btn"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Body */}
        <div className="flex-1 overflow-y-auto p-6 relative z-10 space-y-6">
          {/* Status Message banners */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-rose-950/20 border border-rose-900/40 text-rose-300 text-xs rounded-xl flex items-start gap-3"
            >
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Leyline Fracture:</span> {error}
              </div>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 text-xs rounded-xl flex items-start gap-3"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Incantation Sealed:</span> {success}
              </div>
            </motion.div>
          )}

          {currentUser ? (
            /* Logged In view */
            <div className="space-y-6" id="sanctum-profile-view">
              <div className="p-5 bg-slate-950/60 border border-slate-850 rounded-xl flex flex-col items-center text-center gap-4 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 text-2xl font-black font-mono shadow-lg relative">
                  <div className="absolute inset-0 rounded-full border border-sky-400/10 animate-ping" style={{ animationDuration: "3s" }}></div>
                  {currentUser.displayName?.substring(0, 2).toUpperCase() || "WZ"}
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-100 font-sans uppercase">
                    {currentUser.displayName}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 block w-max mx-auto mt-1">
                    {WIZARD_TITLES[Math.min(WIZARD_TITLES.length - 1, Math.floor(xp / 200))] || "Compiler Mage"}
                  </span>
                  <p className="text-[10px] text-slate-500 mt-2 font-mono">{currentUser.email}</p>
                </div>

                <div className="w-full h-px bg-slate-850"></div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Spell Power</span>
                    <span className="text-sky-400 font-black text-sm">{xp} XP</span>
                  </div>
                  <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Unlocked Seals</span>
                    <span className="text-amber-400 font-black text-sm">{unlockedBadges.length} Badges</span>
                  </div>
                </div>
              </div>

              {/* Connected details */}
              <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Leyline Connection Active
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Your wizard soul is bound to the cloud database. Any levels unlocked, XP earned, or sandbox custom spells created will automatically synchronise across all browsers and dimensions instantly.
                </p>
                <div className="flex gap-2">
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded">
                    Firestore Database Synced
                  </span>
                  <span className="text-[9px] font-mono font-bold text-sky-400 bg-sky-500/5 border border-sky-500/20 px-2 py-0.5 rounded">
                    Firebase Auth Shield active
                  </span>
                </div>
              </div>

              {/* Sign out actions */}
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="w-full py-3 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/30 text-rose-300 rounded-lg text-xs uppercase tracking-wider font-black transition-all cursor-pointer flex items-center justify-center gap-2"
                id="signout-btn"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <LogOut className="w-3.5 h-3.5" />}
                Unlink Soul (Sign Out)
              </button>
            </div>
          ) : (
            /* Auth Forms */
            <div className="space-y-5" id="sanctum-auth-forms">
              {/* Selector */}
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-850">
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`flex-1 py-2 text-xs uppercase tracking-wider font-black rounded cursor-pointer transition-all ${
                    activeTab === "signin"
                      ? "bg-sky-600 text-slate-950 font-bold shadow"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  id="tab-auth-signin"
                >
                  Recall Soul (Sign In)
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 py-2 text-xs uppercase tracking-wider font-black rounded cursor-pointer transition-all ${
                    activeTab === "register"
                      ? "bg-sky-600 text-slate-950 font-bold shadow"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  id="tab-auth-register"
                >
                  Bind Soul (Register)
                </button>
              </div>

              {activeTab === "signin" ? (
                /* SIGN IN FORM */
                <form onSubmit={handleSignIn} className="space-y-4" id="signin-form">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 pl-1">
                      Wizard Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="yourname@kingdom.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 pl-1">
                      Password Ward
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-slate-950 font-black rounded-lg text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-900/10 active:scale-95"
                    id="submit-signin"
                  >
                    {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" /> : <Sparkles className="w-3.5 h-3.5 text-slate-950" />}
                    Seals Correct! Recall Progress
                  </button>
                </form>
              ) : (
                /* REGISTER FORM */
                <form onSubmit={handleRegister} className="space-y-4" id="register-form">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 pl-1">
                      Wizard Coder Name
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alaric"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-slate-500 pl-1">
                        Wizard Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          required
                          placeholder="yourname@kingdom.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-slate-500 pl-1">
                        Select Academy Title
                      </label>
                      <select
                        value={wizardTitle}
                        onChange={(e) => setWizardTitle(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                      >
                        {WIZARD_TITLES.map((t) => (
                          <option key={t} value={t} className="bg-slate-900 text-slate-300">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-500 pl-1">
                      Secure Password Seal
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        minLength={6}
                        placeholder="Min 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                    <span className="text-[8px] font-mono font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
                      Cloud Merging Seal Active
                    </span>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                      Upon linking, your local progress ({xp} XP, {unlockedBadges.length} Badges) will automatically merge with this account cloud document, safe from browser cache cleanses.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-slate-950 font-black rounded-lg text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-900/10 active:scale-95"
                    id="submit-register"
                  >
                    {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" /> : <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />}
                    Bind Soul & Save Progress
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

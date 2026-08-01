"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "firebase/auth";
import { auth, getWizardProgress, saveWizardProgress } from "../lib/firebase";

interface GameContextType {
  xp: number;
  unlockedLevelIds: string[];
  setUnlockedLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
  unlockedBadges: string[];
  user: User | null;
  wizardTitle: string;
  isSanctumOpen: boolean;
  setIsSanctumOpen: (open: boolean) => void;
  showCelebration: string | null;
  setShowCelebration: (badgeName: string | null) => void;
  handleXpAwarded: (points: number) => void;
  handleBadgeUnlocked: (badgeId: string, badgeName: string) => void;
  handleSignOut: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [unlockedLevelIds, setUnlockedLevelIds] = useState<string[]>([
    "level-0-1-bootstrap",
  ]);
  const [user, setUser] = useState<User | null>(null);
  const [wizardTitle, setWizardTitle] = useState("Primitive Initiate");
  const [isSanctumOpen, setIsSanctumOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState<string | null>(null);

  useEffect(() => {
    const savedXp = localStorage.getItem("wizard_xp");
    const savedBadges = localStorage.getItem("wizard_badges");
    const savedLevels = localStorage.getItem("unlocked_levels");
    if (savedXp) setXp(Number(savedXp));
    if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges));
    if (savedLevels) setUnlockedLevelIds(JSON.parse(savedLevels));

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        handleUserLogin(currentUser.uid);
      }
    });

    return unsubscribe;
  }, []);

  const handleUserLogin = async (uid: string) => {
    try {
      const cloudProgress = await getWizardProgress(uid);
      if (cloudProgress) {
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
        const localLevels: string[] = localLevelsStr
          ? JSON.parse(localLevelsStr)
          : ["level-0-1-bootstrap"];
        const mergedLevels = Array.from(new Set([...localLevels, ...cloudProgress.unlockedLevels]));
        setUnlockedLevelIds(mergedLevels);
        localStorage.setItem("unlocked_levels", JSON.stringify(mergedLevels));

        if (cloudProgress.wizardTitle) {
          setWizardTitle(cloudProgress.wizardTitle);
        }
      }
    } catch (err) {
      console.warn("Could not sync profile during login:", err);
    }
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
    <GameContext.Provider
      value={{
        xp,
        unlockedLevelIds,
        setUnlockedLevelIds,
        unlockedBadges,
        user,
        wizardTitle,
        isSanctumOpen,
        setIsSanctumOpen,
        showCelebration,
        setShowCelebration,
        handleXpAwarded,
        handleBadgeUnlocked,
        handleSignOut,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface GameContextType {
  xp: number;
  unlockedLevelIds: string[];
  setUnlockedLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
  unlockedBadges: string[];
  wizardTitle: string;
  isSanctumOpen: boolean;
  setIsSanctumOpen: (open: boolean) => void;
  showCelebration: string | null;
  setShowCelebration: (badgeName: string | null) => void;
  handleXpAwarded: (points: number) => void;
  handleBadgeUnlocked: (badgeId: string, badgeName: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [unlockedLevelIds, setUnlockedLevelIds] = useState<string[]>([
    "level-0-1-bootstrap",
  ]);
  const [wizardTitle, setWizardTitle] = useState("Primitive Initiate");
  const [isSanctumOpen, setIsSanctumOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState<string | null>(null);

  useEffect(() => {
    const savedXp = localStorage.getItem("wizard_xp");
    const savedBadges = localStorage.getItem("wizard_badges");
    const savedLevels = localStorage.getItem("unlocked_levels");
    const savedTitle = localStorage.getItem("wizard_title");
    if (savedXp) setXp(Number(savedXp));
    if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges));
    if (savedLevels) setUnlockedLevelIds(JSON.parse(savedLevels));
    if (savedTitle) setWizardTitle(savedTitle);
  }, []);

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

  return (
    <GameContext.Provider
      value={{
        xp,
        unlockedLevelIds,
        setUnlockedLevelIds,
        unlockedBadges,
        wizardTitle,
        isSanctumOpen,
        setIsSanctumOpen,
        showCelebration,
        setShowCelebration,
        handleXpAwarded,
        handleBadgeUnlocked,
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
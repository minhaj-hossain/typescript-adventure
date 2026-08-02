"use client";

import React, { createContext, useContext, useCallback, useRef } from "react";
import { useLocalStorage } from "../lib/useLocalStorage";
import { LevelProgress, GameSettings } from "../types";

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
  
  // New: per-level analytics
  levelProgress: Record<string, LevelProgress>;
  trackLevelAttempt: (levelId: string) => void;
  trackLevelCompletion: (levelId: string, hintsUsed: number, errors: string[], timeSpentMs: number) => void;
  trackHintUsed: (levelId: string) => void;
  trackError: (levelId: string, error: string) => void;
  
  // New: settings
  settings: GameSettings;
  updateSettings: (settings: Partial<GameSettings>) => void;
  
  // New: reset
  resetAllProgress: () => void;
}

const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  animationsEnabled: true,
  showHints: true,
};

const WIZARD_TITLES = [
  { minXp: 0, title: "Primitive Initiate" },
  { minXp: 500, title: "Type Apprentice" },
  { minXp: 1500, title: "Interface Artisan" },
  { minXp: 3000, title: "Union Mage" },
  { minXp: 5000, title: "Generic Alchemist" },
  { minXp: 8000, title: "Type Grandmaster" },
  { minXp: 12000, title: "Architect of the Kingdom" },
];

function getWizardTitle(xp: number): string {
  let title = WIZARD_TITLES[0].title;
  for (const tier of WIZARD_TITLES) {
    if (xp >= tier.minXp) title = tier.title;
  }
  return title;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useLocalStorage("wizard_xp", 0);
  const [unlockedBadges, setUnlockedBadges] = useLocalStorage<string[]>("wizard_badges", []);
  const [unlockedLevelIds, setUnlockedLevelIds] = useLocalStorage<string[]>("unlocked_levels", [
    "level-0-1-bootstrap",
  ]);
  const [wizardTitle, setWizardTitle] = useLocalStorage("wizard_title", "Primitive Initiate");
  const [isSanctumOpen, setIsSanctumOpen] = useLocalStorage("wizard_sanctum_open", false);
  const [showCelebration, setShowCelebration] = useLocalStorage<string | null>("wizard_celebration", null);
  const [levelProgress, setLevelProgress] = useLocalStorage<Record<string, LevelProgress>>("level_progress", {});
  const [settings, setSettings] = useLocalStorage("game_settings", DEFAULT_SETTINGS);

  // Track level start time for accurate time measurement
  const levelStartTimes = useRef<Record<string, number>>({});

  const handleXpAwarded = useCallback((points: number) => {
    setXp((prev) => {
      const nextXp = prev + points;
      const newTitle = getWizardTitle(nextXp);
      setWizardTitle(newTitle);
      return nextXp;
    });
  }, [setXp, setWizardTitle]);

  const handleBadgeUnlocked = useCallback((badgeId: string, badgeName: string) => {
    setUnlockedBadges((prev) => {
      if (prev.includes(badgeId)) return prev;
      const next = [...prev, badgeId];
      setShowCelebration(badgeName);
      return next;
    });
  }, [setUnlockedBadges, setShowCelebration]);

  // Per-level analytics tracking
  const trackLevelAttempt = useCallback((levelId: string) => {
    levelStartTimes.current[levelId] = Date.now();
    setLevelProgress((prev) => {
      const existing = prev[levelId];
      return {
        ...prev,
        [levelId]: {
          levelId,
          attempts: (existing?.attempts ?? 0) + 1,
          startedAt: existing?.startedAt ?? new Date().toISOString(),
          hintsUsed: existing?.hintsUsed ?? 0,
          errorsEncountered: existing?.errorsEncountered ?? [],
          timeSpentMs: existing?.timeSpentMs ?? 0,
          completed: existing?.completed ?? false,
        },
      };
    });
  }, [setLevelProgress]);

  const trackLevelCompletion = useCallback(
    (levelId: string, hintsUsed: number, errors: string[], timeSpentMs: number) => {
      setLevelProgress((prev) => ({
        ...prev,
        [levelId]: {
          levelId,
          attempts: (prev[levelId]?.attempts ?? 0) + 1,
          startedAt: prev[levelId]?.startedAt ?? new Date().toISOString(),
          completedAt: new Date().toISOString(),
          hintsUsed,
          errorsEncountered: errors,
          timeSpentMs,
          completed: true,
        },
      }));
    },
    [setLevelProgress],
  );

  const trackHintUsed = useCallback((levelId: string) => {
    setLevelProgress((prev) => {
      const existing = prev[levelId];
      if (!existing) return prev;
      return {
        ...prev,
        [levelId]: {
          ...existing,
          hintsUsed: existing.hintsUsed + 1,
        },
      };
    });
  }, [setLevelProgress]);

  const trackError = useCallback((levelId: string, error: string) => {
    setLevelProgress((prev) => {
      const existing = prev[levelId];
      return {
        ...prev,
        [levelId]: {
          levelId,
          attempts: existing?.attempts ?? 0,
          startedAt: existing?.startedAt ?? new Date().toISOString(),
          hintsUsed: existing?.hintsUsed ?? 0,
          errorsEncountered: [...(existing?.errorsEncountered ?? []), error].slice(-20), // Keep last 20
          timeSpentMs: existing?.timeSpentMs ?? 0,
          completed: existing?.completed ?? false,
        },
      };
    });
  }, [setLevelProgress]);

  const updateSettings = useCallback((partial: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  }, [setSettings]);

  const resetAllProgress = useCallback(() => {
    setXp(0);
    setUnlockedBadges([]);
    setUnlockedLevelIds(["level-0-1-bootstrap"]);
    setWizardTitle("Primitive Initiate");
    setLevelProgress({});
    setSettings(DEFAULT_SETTINGS);
    setShowCelebration(null);
    levelStartTimes.current = {};
  }, [setXp, setUnlockedBadges, setUnlockedLevelIds, setWizardTitle, setLevelProgress, setSettings, setShowCelebration]);

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
        levelProgress,
        trackLevelAttempt,
        trackLevelCompletion,
        trackHintUsed,
        trackError,
        settings,
        updateSettings,
        resetAllProgress,
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
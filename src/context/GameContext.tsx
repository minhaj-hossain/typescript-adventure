"use client";

import React, { createContext, useContext, useCallback, useRef, useEffect, useState } from "react";
import { LevelProgress, GameSettings } from "../types";
import {
  loadProgress,
  saveProgress,
  exportProgressJSON,
  importProgressJSON,
  clearProgress,
  PlayerProgress,
} from "../lib/progressStore";

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

  // Level progress & code
  levelProgress: Record<string, LevelProgress>;
  trackLevelAttempt: (levelId: string) => void;
  trackLevelCompletion: (levelId: string, hintsUsed: number, errors: string[], timeSpentMs: number) => void;
  trackHintUsed: (levelId: string) => void;
  trackError: (levelId: string, error: string) => void;

  // Settings
  settings: GameSettings;
  updateSettings: (settings: Partial<GameSettings>) => void;

  // Export / Reset
  resetAllProgress: () => void;
  exportJSON: () => string;
  importJSON: (json: string) => boolean;
}

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
  const [progressState, setProgressState] = useState<PlayerProgress>(loadProgress);
  const [isSanctumOpen, setIsSanctumOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState<string | null>(null);

  const levelStartTimes = useRef<Record<string, number>>({});

  useEffect(() => {
    saveProgress(progressState);
  }, [progressState]);

  const setUnlockedLevelIds: React.Dispatch<React.SetStateAction<string[]>> = useCallback((action) => {
    setProgressState((prev) => {
      const nextUnlocked = typeof action === "function" ? action(prev.unlockedLevelIds) : action;
      return { ...prev, unlockedLevelIds: nextUnlocked };
    });
  }, []);

  const handleXpAwarded = useCallback((points: number) => {
    setProgressState((prev) => ({ ...prev, xp: prev.xp + points }));
  }, []);

  const handleBadgeUnlocked = useCallback((badgeId: string, badgeName: string) => {
    setProgressState((prev) => {
      if (prev.badges.includes(badgeId)) return prev;
      setShowCelebration(badgeName);
      return { ...prev, badges: [...prev.badges, badgeId] };
    });
  }, []);

  const trackLevelAttempt = useCallback((levelId: string) => {
    levelStartTimes.current[levelId] = Date.now();
    setProgressState((prev) => {
      const existing = prev.levelProgress[levelId];
      return {
        ...prev,
        levelProgress: {
          ...prev.levelProgress,
          [levelId]: {
            levelId,
            attempts: (existing?.attempts ?? 0) + 1,
            startedAt: existing?.startedAt ?? new Date().toISOString(),
            hintsUsed: existing?.hintsUsed ?? 0,
            errorsEncountered: existing?.errorsEncountered ?? [],
            timeSpentMs: existing?.timeSpentMs ?? 0,
            completed: existing?.completed ?? false,
          },
        },
      };
    });
  }, []);

  const trackLevelCompletion = useCallback(
    (levelId: string, hintsUsed: number, errors: string[], timeSpentMs: number) => {
      setProgressState((prev) => {
        const existing = prev.levelProgress[levelId];
        const nextCompleted = prev.completedLevelIds.includes(levelId)
          ? prev.completedLevelIds
          : [...prev.completedLevelIds, levelId];

        return {
          ...prev,
          completedLevelIds: nextCompleted,
          levelProgress: {
            ...prev.levelProgress,
            [levelId]: {
              levelId,
              attempts: (existing?.attempts ?? 0) + 1,
              startedAt: existing?.startedAt ?? new Date().toISOString(),
              completedAt: new Date().toISOString(),
              hintsUsed,
              errorsEncountered: errors,
              timeSpentMs,
              completed: true,
            },
          },
        };
      });
    },
    [],
  );

  const trackHintUsed = useCallback((levelId: string) => {
    setProgressState((prev) => {
      const existing = prev.levelProgress[levelId];
      if (!existing) return prev;
      return {
        ...prev,
        levelProgress: {
          ...prev.levelProgress,
          [levelId]: {
            ...existing,
            hintsUsed: existing.hintsUsed + 1,
          },
        },
      };
    });
  }, []);

  const trackError = useCallback((levelId: string, error: string) => {
    setProgressState((prev) => {
      const existing = prev.levelProgress[levelId];
      return {
        ...prev,
        levelProgress: {
          ...prev.levelProgress,
          [levelId]: {
            levelId,
            attempts: existing?.attempts ?? 0,
            startedAt: existing?.startedAt ?? new Date().toISOString(),
            hintsUsed: existing?.hintsUsed ?? 0,
            errorsEncountered: [...(existing?.errorsEncountered ?? []), error].slice(-20),
            timeSpentMs: existing?.timeSpentMs ?? 0,
            completed: existing?.completed ?? false,
          },
        },
      };
    });
  }, []);

  const updateSettings = useCallback((partial: Partial<GameSettings>) => {
    setProgressState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    clearProgress();
    setProgressState(loadProgress());
    setShowCelebration(null);
    levelStartTimes.current = {};
  }, []);

  const exportJSON = useCallback(() => {
    return exportProgressJSON(progressState);
  }, [progressState]);

  const importJSON = useCallback((json: string) => {
    const res = importProgressJSON(json);
    if (res) {
      setProgressState(res);
      return true;
    }
    return false;
  }, []);

  return (
    <GameContext.Provider
      value={{
        xp: progressState.xp,
        unlockedLevelIds: progressState.unlockedLevelIds,
        setUnlockedLevelIds,
        unlockedBadges: progressState.badges,
        wizardTitle: getWizardTitle(progressState.xp),
        isSanctumOpen,
        setIsSanctumOpen,
        showCelebration,
        setShowCelebration,
        handleXpAwarded,
        handleBadgeUnlocked,
        levelProgress: progressState.levelProgress,
        trackLevelAttempt,
        trackLevelCompletion,
        trackHintUsed,
        trackError,
        settings: progressState.settings,
        updateSettings,
        resetAllProgress,
        exportJSON,
        importJSON,
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
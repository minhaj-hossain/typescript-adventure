import { GameSettings, LevelProgress } from "../types";

export interface PlayerProgress {
  version: 1;
  xp: number;
  unlockedLevelIds: string[];
  completedLevelIds: string[];
  badges: string[];
  levelCodes: Record<string, string | Record<string, string>>;
  levelProgress: Record<string, LevelProgress>;
  settings: GameSettings;
}

export const STORAGE_KEY = "ts_adventure_player_progress_v1";

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  animationsEnabled: true,
  showHints: true,
};

export const DEFAULT_PROGRESS: PlayerProgress = {
  version: 1,
  xp: 0,
  unlockedLevelIds: ["level-0-1-bootstrap"],
  completedLevelIds: [],
  badges: [],
  levelCodes: {},
  levelProgress: {},
  settings: DEFAULT_SETTINGS,
};

/**
 * Migrates legacy localStorage keys into the unified PlayerProgress structure.
 */
export function migrateLegacyStorage(): PlayerProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;

  const current = localStorage.getItem(STORAGE_KEY);
  if (current) {
    try {
      const parsed = JSON.parse(current);
      if (parsed && parsed.version === 1) {
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          settings: { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) },
        };
      }
    } catch (e) {
      console.error("Failed to parse progress from localStorage:", e);
    }
  }

  // Attempt legacy keys recovery
  try {
    const xpStr = localStorage.getItem("wizard_xp");
    const xp = xpStr ? parseInt(xpStr, 10) || 0 : 0;

    const completedStr = localStorage.getItem("completed_levels");
    const completedLevelIds: string[] = completedStr ? JSON.parse(completedStr) : [];

    const unlockedStr = localStorage.getItem("unlocked_levels");
    const unlockedLevelIds: string[] = unlockedStr
      ? JSON.parse(unlockedStr)
      : Array.from(new Set(["level-0-1-bootstrap", ...completedLevelIds]));

    const badgesStr = localStorage.getItem("unlocked_badges");
    const badges: string[] = badgesStr ? JSON.parse(badgesStr) : [];

    const progressStr = localStorage.getItem("level_progress");
    const levelProgress: Record<string, LevelProgress> = progressStr ? JSON.parse(progressStr) : {};

    const settingsStr = localStorage.getItem("game_settings");
    const settings: GameSettings = settingsStr ? { ...DEFAULT_SETTINGS, ...JSON.parse(settingsStr) } : DEFAULT_SETTINGS;

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

    const migrated: PlayerProgress = {
      version: 1,
      xp,
      unlockedLevelIds: unlockedLevelIds.length ? unlockedLevelIds : ["level-0-1-bootstrap"],
      completedLevelIds,
      badges,
      levelCodes,
      levelProgress,
      settings,
    };

    saveProgress(migrated);
    return migrated;
  } catch (err) {
    console.error("Error migrating legacy progress:", err);
    return DEFAULT_PROGRESS;
  }
}

export function loadProgress(): PlayerProgress {
  return migrateLegacyStorage();
}

export function saveProgress(progress: PlayerProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error("Failed to save progress to localStorage:", err);
  }
}

export function exportProgressJSON(progress: PlayerProgress): string {
  return JSON.stringify(progress, null, 2);
}

export function importProgressJSON(jsonString: string): PlayerProgress | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed && typeof parsed === "object") {
      const validated: PlayerProgress = {
        version: 1,
        xp: typeof parsed.xp === "number" ? parsed.xp : 0,
        unlockedLevelIds: Array.isArray(parsed.unlockedLevelIds) ? parsed.unlockedLevelIds : ["level-0-1-bootstrap"],
        completedLevelIds: Array.isArray(parsed.completedLevelIds) ? parsed.completedLevelIds : [],
        badges: Array.isArray(parsed.badges) ? parsed.badges : [],
        levelCodes: typeof parsed.levelCodes === "object" ? parsed.levelCodes : {},
        levelProgress: typeof parsed.levelProgress === "object" ? parsed.levelProgress : {},
        settings: typeof parsed.settings === "object" ? { ...DEFAULT_SETTINGS, ...parsed.settings } : DEFAULT_SETTINGS,
      };
      saveProgress(validated);
      return validated;
    }
  } catch (err) {
    console.error("Failed to import progress JSON:", err);
  }
  return null;
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("wizard_xp");
    localStorage.removeItem("completed_levels");
    localStorage.removeItem("unlocked_levels");
    localStorage.removeItem("unlocked_badges");
    localStorage.removeItem("level_progress");
    localStorage.removeItem("game_settings");
  } catch (err) {
    console.error("Failed to clear progress:", err);
  }
}

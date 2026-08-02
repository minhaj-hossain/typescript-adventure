export interface Stage {
  id: string;
  title: string;
  description: string;
  order: number;
  levelIds: string[];
  storyHook?: string;
  completionBeat?: string;
  badgeId?: string;
  badgeName?: string;
}

export interface NarrativeBlock {
  type: "narration" | "dialogue";
  text: string;
  speaker?: string;
}

export interface ValidationRule {
  /** Strategy to use for validation (defaults to "keyword" if not specified) */
  type?: "keyword" | "ast" | "typescript";
  requiredKeywords?: string[];
  forbiddenKeywords?: string[];
  /** AST-based rules: e.g. require a specific interface declaration */
  astRules?: {
    requiredDeclarations?: string[];       // "interface Event", "type EventStatus"
    requiredProperties?: Record<string, string[]>; // { "Event": ["title", "date"] }
    requiredTypes?: string[];              // "Event", "string[]"
    forbiddenPatterns?: string[];           // "any", "var"
  };
}

export interface LevelPlayground {
  starterCode: string;
  solutionCode: string;
  objectives: string[];
  hints: string[];
  filesToEdit: string[];
}

export interface LevelStory {
  title: string;
  narrative: NarrativeBlock[];
  realWorldContext: string;
  taskDescription: string;
  previousOutcome: string;
  completionBeat?: string;
}

export interface LevelAnalytics {
  /** Average number of attempts to complete this level */
  averageAttempts?: number;
  /** Common error messages users encounter */
  commonErrors?: string[];
  /** Difficulty rating from user feedback (1-5) */
  userDifficultyRating?: number;
  /** Hint usage rate (0-1) */
  hintUsageRate?: number;
}

export interface PredictionQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Level {
  id: string;
  title: string;
  moduleName: string;
  difficulty: "onboarding" | "easy" | "medium" | "hard";
  xpAwarded: number;
  /** Estimated time to complete in minutes */
  estimatedMinutes?: number;
  /** Level IDs that must be completed before this one */
  prerequisites?: string[];
  
  story: LevelStory;
  playground: LevelPlayground;
  validation: ValidationRule;
  
  /** Optional prediction question shown before the level */
  predictionQuestion?: PredictionQuestion;
  
  /** Optional stageId for backwards-compatibility */
  stageId?: string;
  levelNumber?: number;
  slug?: string;
  storyTheme?: string;
  projectContext?: string;
  whyThisLessonExists?: string;
  problemIntroduced?: string;
  problemSolved?: string;
  realWorldUseCases?: string[];
  concepts?: string[];
  reactConnection?: string;
  nextjsConnection?: string;
  visualizationType?:
    | "compiler-view"
    | "object-visualizer"
    | "interface-blueprint"
    | "type-graph"
    | "union-flow"
    | "generic-machine"
    | "component-tree"
    | "form-validator"
    | "function-pipeline"
    | "utility-type-transformer";
  sandboxType?:
    | "predict-output"
    | "fill-the-types"
    | "fix-errors"
    | "refactor-code"
    | "build-component"
    | "playground"
    | "debugging";
  reflection?: {
    problem: string;
    solution: string;
    whenToUse: string;
  };
  commonMistakes?: string[];
  miniBossChallenge?: {
    task: string;
    starterCode: string;
    validationRules: {
      requiredKeywords: string[];
    };
  };
  whyNot?: {
    alternative: string;
    tradeoffs: string;
  };
  projectDelta?: {
    filesAddedOrModified: string[];
    componentsIntroduced: string[];
    uiChanges: string;
  };
  experimentPrompt?: string;
  badgeId?: string;
  badgeName?: string;
  learningPattern?: string[];
  analytics?: LevelAnalytics;
}

export interface ReferenceEntry {
  id: string;
  term: string;
  category:
    | "Concepts"
    | "Tooling"
    | "Basics"
    | "Structural Types"
    | "Advanced Types"
    | "Utility Types"
    | "React & Next.js";
  shortExplanation: string;
  syntax: string;
  commonPitfalls: string[];
  relatedTerms: string[];
  seeAlsoLevels: string[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlockedAt: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "oracle";
  text: string;
  timestamp: string;
}

/** Per-level progress tracking */
export interface LevelProgress {
  levelId: string;
  attempts: number;
  startedAt: string;
  completedAt?: string;
  hintsUsed: number;
  errorsEncountered: string[];
  timeSpentMs: number;
  completed: boolean;
}

/** Overall game state with persistence */
export interface GameState {
  xp: number;
  unlockedLevelIds: string[];
  unlockedBadges: string[];
  wizardTitle: string;
  levelProgress: Record<string, LevelProgress>;
  settings: GameSettings;
}

export interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  showHints: boolean;
}
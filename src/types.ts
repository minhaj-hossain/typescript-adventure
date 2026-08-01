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

export interface Level {
  id: string;
  title: string;
  moduleName: string;
  difficulty: "onboarding" | "easy" | "medium" | "hard";
  xpAwarded: number;
  story: {
    title: string;
    narrative: { type: "narration" | "dialogue"; text: string; speaker?: string }[];
    realWorldContext: string;
    taskDescription: string;
    previousOutcome: string;
    completionBeat?: string;
  };
  playground: {
    starterCode: string;
    solutionCode: string;
    objectives: string[];
    hints: string[];
    filesToEdit: string[];
  };
  validation: {
    requiredKeywords?: string[];
    forbiddenKeywords?: string[];
  };

  // Optional legacy properties for backwards-compatibility or transition helper
  stageId?: string;
  levelNumber?: number;
  slug?: string;
  estimatedMinutes?: number;
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
  starterCode?: string;
  solutionCode?: string;
  validationRules?: {
    forbiddenKeywords?: string[];
    requiredKeywords?: string[];
    regexes?: string[]; // regex patterns that must match
  };
  hints?: string[];
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
  predictionQuestion?: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation?: string;
  };
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
  unlockedAt: string; // date string or level ID
}

export interface ChatMessage {
  id: string;
  sender: "user" | "oracle";
  text: string;
  timestamp: string;
}

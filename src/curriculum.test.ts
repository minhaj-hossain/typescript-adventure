import { describe, it, expect } from "vitest";
import { STAGES, LEVELS, REFERENCE_LIBRARY } from "./curriculum";
import { validateCode, validateTypeScriptCompilation } from "./lib/tsValidation";
import { getPredictionQuestion } from "./lib/narrativeFeedback";
import { ValidationRule } from "./types";

describe("Curriculum Structure", () => {
  it("should have at least one stage", () => {
    expect(STAGES.length).toBeGreaterThan(0);
  });

  it("should have at least one level", () => {
    expect(LEVELS.length).toBeGreaterThan(0);
  });

  it("should have a reference library with entries", () => {
    expect(REFERENCE_LIBRARY.length).toBeGreaterThan(0);
  });

  it("should have unique level IDs", () => {
    const ids = LEVELS.map((l) => l.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("should have unique stage IDs", () => {
    const ids = STAGES.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("should have stages with sequential order values", () => {
    const orders = STAGES.map((s) => s.order).sort((a, b) => a - b);
    for (let i = 0; i < orders.length; i++) {
      expect(orders[i]).toBe(i);
    }
  });

  it("should have all level IDs referenced in stages exist", () => {
    const allLevelIds = new Set(LEVELS.map((l) => l.id));
    for (const stage of STAGES) {
      for (const levelId of stage.levelIds) {
        expect(allLevelIds.has(levelId)).toBe(true);
      }
    }
  });

  it("should have XP values that increase with difficulty", () => {
    const xpByDifficulty: Record<string, number[]> = {
      onboarding: [],
      easy: [],
      medium: [],
      hard: [],
    };
    for (const level of LEVELS) {
      xpByDifficulty[level.difficulty]?.push(level.xpAwarded);
    }
    // Onboarding should have lowest average XP
    const avgOnboarding =
      xpByDifficulty.onboarding.reduce((a, b) => a + b, 0) /
      xpByDifficulty.onboarding.length;
    const avgHard =
      xpByDifficulty.hard.reduce((a, b) => a + b, 0) /
      xpByDifficulty.hard.length;
    expect(avgHard).toBeGreaterThan(avgOnboarding);
  });

  it("should have no duplicate level IDs across stages", () => {
    const allLevelIds: string[] = [];
    for (const stage of STAGES) {
      allLevelIds.push(...stage.levelIds);
    }
    const uniqueIds = new Set(allLevelIds);
    expect(uniqueIds.size).toBe(allLevelIds.length);
  });

  it("should have valid difficulty values on all levels", () => {
    const validDifficulties = ["onboarding", "easy", "medium", "hard"];
    for (const level of LEVELS) {
      expect(validDifficulties.includes(level.difficulty)).toBe(true);
    }
  });

  it("should have XP values that are positive numbers", () => {
    for (const level of LEVELS) {
      expect(level.xpAwarded).toBeGreaterThan(0);
    }
  });

  it("should have all levels with required playground fields", () => {
    for (const level of LEVELS) {
      expect(level.playground).toBeDefined();
      expect(level.playground.starterCode).toBeDefined();
      expect(level.playground.solutionCode).toBeDefined();
      expect(level.playground.objectives.length).toBeGreaterThan(0);
      expect(level.playground.hints.length).toBeGreaterThan(0);
    }
  });

  it("should have all levels with story fields", () => {
    for (const level of LEVELS) {
      expect(level.story).toBeDefined();
      expect(level.story.title).toBeDefined();
      expect(level.story.narrative.length).toBeGreaterThan(0);
      expect(level.story.realWorldContext).toBeDefined();
      expect(level.story.taskDescription).toBeDefined();
    }
  });

  it("should have all levels with validation rules", () => {
    for (const level of LEVELS) {
      expect(level.validation).toBeDefined();
    }
  });

  it("should have reference entries with valid categories", () => {
    const validCategories = [
      "Concepts",
      "Tooling",
      "Basics",
      "Structural Types",
      "Advanced Types",
      "Utility Types",
      "React & Next.js",
    ];
    for (const entry of REFERENCE_LIBRARY) {
      expect(validCategories.includes(entry.category)).toBe(true);
    }
  });
});

describe("Validation System", () => {
  it("should detect missing required keywords", () => {
    const rule: ValidationRule = {
      requiredKeywords: ["interface Event"],
    };
    const errors = validateCode("let x = 5;", rule, []);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain("interface Event");
  });

  it("should pass when required keywords are present", () => {
    const rule: ValidationRule = {
      requiredKeywords: ["interface Event"],
    };
    const errors = validateCode("interface Event { title: string }", rule, []);
    expect(errors.length).toBe(0);
  });

  it("should detect forbidden keywords", () => {
    const rule: ValidationRule = {
      forbiddenKeywords: ["any"],
    };
    const errors = validateCode("let x: any = 5;", rule, []);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain("any");
  });

  it("should pass when no forbidden keywords are present", () => {
    const rule: ValidationRule = {
      forbiddenKeywords: ["any"],
    };
    const errors = validateCode("let x: number = 5;", rule, []);
    expect(errors.length).toBe(0);
  });

  it("should detect AST declaration requirements", () => {
    const rule: ValidationRule = {
      type: "ast",
      astRules: {
        requiredDeclarations: ["interface Event"],
      },
    };
    const errors = validateCode("let x = 5;", rule, []);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain("interface Event");
  });

  it("should pass AST validation when declarations exist", () => {
    const rule: ValidationRule = {
      type: "ast",
      astRules: {
        requiredDeclarations: ["interface Event"],
      },
    };
    const errors = validateCode(
      "interface Event { title: string; date: string; capacity: number; }",
      rule,
      [],
    );
    expect(errors.length).toBe(0);
  });

  it("should detect missing properties on interfaces", () => {
    const rule: ValidationRule = {
      type: "ast",
      astRules: {
        requiredProperties: {
          Event: ["title", "date"],
        },
      },
    };
    const errors = validateCode(
      "interface Event { title: string; }",
      rule,
      [],
    );
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain("date");
  });

  it("should detect basic type errors in code", () => {
    const errors = validateTypeScriptCompilation(
      'let x: number = "hello";',
    );
    expect(errors.length).toBeGreaterThan(0);
  });

  it("should pass clean code through type check", () => {
    const errors = validateTypeScriptCompilation("let x: number = 5;");
    expect(errors.length).toBe(0);
  });

  it("should merge keyword and editor errors", () => {
    const rule: ValidationRule = {
      type: "typescript",
      requiredKeywords: ["missing-keyword"],
    };
    const errors = validateCode("let x = 5;", rule, ["Line 1: Type error"]);
    expect(errors.length).toBe(2);
  });
});

describe("Prediction Questions", () => {
  it("should have prediction questions for key levels", () => {
    const keyLevels = [
      "level-0-1-bootstrap",
      "level-1-1-primitives",
      "level-2-1-interfaces",
      "level-3-1-unions",
      "level-4-1-generics",
      "level-5-1-generic-react-component",
      "level-9-1-branded-types",
    ];
    for (const levelId of keyLevels) {
      const question = getPredictionQuestion(levelId);
      expect(question).toBeDefined();
      expect(question!.options.length).toBeGreaterThanOrEqual(2);
      expect(question!.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(question!.correctAnswerIndex).toBeLessThan(question!.options.length);
    }
  });

  it("should return null for unknown level IDs", () => {
    const question = getPredictionQuestion("non-existent-level");
    expect(question).toBeNull();
  });
});

describe("Reference Library", () => {
  it("should have all reference entries with required fields", () => {
    for (const entry of REFERENCE_LIBRARY) {
      expect(entry.id).toBeDefined();
      expect(entry.term).toBeDefined();
      expect(entry.shortExplanation).toBeDefined();
      expect(entry.syntax).toBeDefined();
      expect(entry.commonPitfalls.length).toBeGreaterThan(0);
    }
  });

  it("should have unique reference entry IDs", () => {
    const ids = REFERENCE_LIBRARY.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
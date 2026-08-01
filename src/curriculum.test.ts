import { describe, it, expect } from "vitest";
import { STAGES, LEVELS } from "./curriculum";
import { LEVEL_SOLUTIONS } from "./data/solutions";

describe("Curriculum Integrity", () => {
  it("has unique stage IDs", () => {
    const stageIds = new Set<string>();
    STAGES.forEach((stage, idx) => {
      expect(stage.id, `Stage at index ${idx} missing id`).toBeTruthy();
      expect(stageIds.has(stage.id), `Duplicate stage id: ${stage.id}`).toBe(false);
      stageIds.add(stage.id);
    });
  });

  it("does not reference a level in multiple stages", () => {
    const allReferencedLevelIds = new Set<string>();
    STAGES.forEach((stage) => {
      stage.levelIds.forEach((lId) => {
        expect(
          allReferencedLevelIds.has(lId),
          `Level ID ${lId} is referenced in multiple stages!`,
        ).toBe(false);
        allReferencedLevelIds.add(lId);
      });
    });
  });

  it("has unique level IDs with required fields", () => {
    const levelMap = new Map<string, (typeof LEVELS)[0]>();
    LEVELS.forEach((level, idx) => {
      expect(level.id, `Level at index ${idx} missing id`).toBeTruthy();
      expect(levelMap.has(level.id), `Duplicate level id: ${level.id}`).toBe(false);
      levelMap.set(level.id, level);

      expect(level.title, `Level ${level.id} missing title`).toBeTruthy();
      expect(level.story?.title, `Level ${level.id} story missing title`).toBeTruthy();
      expect(
        level.story?.narrative && level.story.narrative.length > 0,
        `Level ${level.id} story has empty narrative`,
      ).toBe(true);

      expect(
        level.playground?.starterCode,
        `Level ${level.id} missing starterCode`,
      ).toBeTruthy();
      expect(
        level.playground?.solutionCode,
        `Level ${level.id} missing solutionCode`,
      ).toBeTruthy();
      expect(
        level.playground?.objectives && level.playground.objectives.length > 0,
        `Level ${level.id} missing objectives`,
      ).toBe(true);
    });
  });

  it("solution code satisfies required keywords and avoids forbidden ones", () => {
    LEVELS.forEach((level) => {
      const solution = level.playground?.solutionCode || "";
      const reqKeywords = level.validation?.requiredKeywords || [];
      reqKeywords.forEach((kw) => {
        expect(
          solution.includes(kw),
          `Level ${level.id}: solutionCode does not contain required keyword: "${kw}"`,
        ).toBe(true);
      });

      const forbiddenKeywords = level.validation?.forbiddenKeywords || [];
      forbiddenKeywords.forEach((kw) => {
        expect(
          solution.includes(kw),
          `Level ${level.id}: solutionCode contains forbidden keyword: "${kw}"`,
        ).toBe(false);
      });
    });
  });

  it("has LEVEL_SOLUTIONS entries for all levels", () => {
    LEVELS.forEach((level) => {
      expect(
        LEVEL_SOLUTIONS[level.id],
        `Level "${level.id}" is missing explicit LEVEL_SOLUTIONS entry.`,
      ).toBeDefined();
    });
  });

  it("all stage-referenced levels exist in LEVELS", () => {
    const levelMap = new Map(LEVELS.map((l) => [l.id, l]));
    STAGES.forEach((stage) => {
      stage.levelIds.forEach((lId) => {
        expect(
          levelMap.has(lId),
          `Stage references non-existent level id: "${lId}"`,
        ).toBe(true);
      });
    });
  });

  it("all LEVELS entries are referenced by a stage", () => {
    const allReferencedLevelIds = new Set<string>();
    STAGES.forEach((stage) => {
      stage.levelIds.forEach((lId) => allReferencedLevelIds.add(lId));
    });

    LEVELS.forEach((level) => {
      expect(
        allReferencedLevelIds.has(level.id),
        `Level "${level.id}" is defined in LEVELS but not included in any STAGE levelIds!`,
      ).toBe(true);
    });
  });
});
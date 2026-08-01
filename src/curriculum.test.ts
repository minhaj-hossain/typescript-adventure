import { STAGES, LEVELS } from "./curriculum";

function testCurriculumIntegrity() {
  console.log("🔍 Starting Curriculum Integrity Audit...");
  const errors: string[] = [];

  const stageIds = new Set<string>();
  const allReferencedLevelIds = new Set<string>();

  // 1. Validate STAGES
  STAGES.forEach((stage, idx) => {
    if (!stage.id) errors.push(`Stage at index ${idx} missing id`);
    if (stageIds.has(stage.id)) errors.push(`Duplicate stage id: ${stage.id}`);
    stageIds.add(stage.id);

    stage.levelIds.forEach((lId) => {
      if (allReferencedLevelIds.has(lId)) {
        errors.push(`Level ID ${lId} is referenced in multiple stages!`);
      }
      allReferencedLevelIds.add(lId);
    });
  });

  // 2. Validate LEVELS
  const levelMap = new Map<string, typeof LEVELS[0]>();
  LEVELS.forEach((level, idx) => {
    if (!level.id) errors.push(`Level at index ${idx} missing id`);
    if (levelMap.has(level.id)) errors.push(`Duplicate level id: ${level.id}`);
    levelMap.set(level.id, level);

    // Validate level fields
    if (!level.title) errors.push(`Level ${level.id} missing title`);
    if (!level.story?.title) errors.push(`Level ${level.id} story missing title`);
    if (!level.story?.narrative || level.story.narrative.length === 0) {
      errors.push(`Level ${level.id} story has empty narrative`);
    }

    if (!level.playground?.starterCode) errors.push(`Level ${level.id} missing starterCode`);
    if (!level.playground?.solutionCode) errors.push(`Level ${level.id} missing solutionCode`);
    if (!level.playground?.objectives || level.playground.objectives.length === 0) {
      errors.push(`Level ${level.id} missing objectives`);
    }

    // Solution code validation check
    const solution = level.playground?.solutionCode || "";
    const reqKeywords = level.validation?.requiredKeywords || [];
    reqKeywords.forEach((kw) => {
      if (!solution.includes(kw)) {
        errors.push(`Level ${level.id}: solutionCode does not contain required keyword: "${kw}"`);
      }
    });

    const forbiddenKeywords = level.validation?.forbiddenKeywords || [];
    forbiddenKeywords.forEach((kw) => {
      if (solution.includes(kw)) {
        errors.push(`Level ${level.id}: solutionCode contains forbidden keyword: "${kw}"`);
      }
    });
  });

  // 3. Check for orphaned level IDs in stages
  allReferencedLevelIds.forEach((lId) => {
    if (!levelMap.has(lId)) {
      errors.push(`Stage references non-existent level id: "${lId}"`);
    }
  });

  // 4. Check for unreferenced levels in LEVELS
  LEVELS.forEach((level) => {
    if (!allReferencedLevelIds.has(level.id)) {
      errors.push(`Level "${level.id}" is defined in LEVELS but not included in any STAGE levelIds!`);
    }
  });

  if (errors.length > 0) {
    console.error(`❌ Curriculum Audit Failed with ${errors.length} errors:`);
    errors.forEach((err) => console.error(`  - ${err}`));
    process.exit(1);
  } else {
    console.log(`✅ Curriculum Audit Passed Cleanly! Found ${STAGES.length} stages and ${LEVELS.length} levels with zero integrity flaws.`);
  }
}

testCurriculumIntegrity();

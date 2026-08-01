export interface StoryAct {
  id: string;
  title: string;
  stageIds: string[];
}

export const STORY_ACTS: StoryAct[] = [
  {
    id: "act-1",
    title: "Act I — Bootstrapping the Kingdom",
    stageIds: [
      "stage-0-onboarding",
      "stage-1-primitives",
      "stage-2-structural",
      "stage-3-shapeshifter",
    ],
  },
  {
    id: "act-2",
    title: "Act II — The Frontend Convergence",
    stageIds: [
      "stage-4-generic",
      "stage-5-frontend",
      "stage-6-gymnastics",
      "stage-7-production",
    ],
  },
  {
    id: "act-3",
    title: "Act III — Backend & Mastery",
    stageIds: ["stage-8-backend", "stage-9-type-mastery"],
  },
];

export function getActTitleForStage(stageId: string): string {
  const act = STORY_ACTS.find((a) => a.stageIds.includes(stageId));
  return act?.title ?? "Your Learning Path";
}

export function getActTitleForProgress(completedCount: number, totalStages: number): string {
  const ratio = completedCount / Math.max(totalStages, 1);
  if (ratio < 0.35) return STORY_ACTS[0].title;
  if (ratio < 0.75) return STORY_ACTS[1].title;
  return STORY_ACTS[2].title;
}

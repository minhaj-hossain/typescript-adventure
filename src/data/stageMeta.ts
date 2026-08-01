export interface StageMeta {
  storyHook: string;
  completionBeat: string;
  badgeId: string;
  badgeName: string;
}

export const STAGE_META: Record<string, StageMeta> = {
  "stage-0-onboarding": {
    storyHook:
      "Minhaj hands you a bare terminal. Every real TypeScript project starts with a working toolchain.",
    completionBeat: "Your workspace is initialized. The compiler awaits your first spell.",
    badgeId: "badge-stage-0",
    badgeName: "Onboarding Initiate",
  },
  "stage-1-primitives": {
    storyHook:
      "The Kingdom's event ledger is full of loose values. Time to declare your first primitive runes.",
    completionBeat: "Primitive types are yours. The foundation of every type contract is set.",
    badgeId: "badge-stage-1",
    badgeName: "Primitive Runesmith",
  },
  "stage-2-structural": {
    storyHook:
      "Tasnim wants reusable blueprints instead of duplicated inline shapes across the codebase.",
    completionBeat: "The Structural Guild trusts your interfaces. Domain models are taking shape.",
    badgeId: "badge-stage-2",
    badgeName: "Blueprint Architect",
  },
  "stage-3-shapeshifter": {
    storyHook:
      "Evans's API now returns three different event shapes. One type is no longer enough.",
    completionBeat: "You can model values that change shape at runtime — safely.",
    badgeId: "badge-stage-3",
    badgeName: "Shapeshifter Adept",
  },
  "stage-4-generic": {
    storyHook:
      "Tasnim needs helpers that work with any object while keeping full type safety.",
    completionBeat: "Generic alchemy mastered. Reusable type parameters are in your toolkit.",
    badgeId: "badge-stage-4",
    badgeName: "Generic Alchemist",
  },
  "stage-5-frontend": {
    storyHook:
      "The frontend team is wiring React components to Evans's typed API responses.",
    completionBeat: "Frontend and backend types converge. Launch day approaches.",
    badgeId: "badge-stage-5",
    badgeName: "Frontend Convergence Hero",
  },
  "stage-6-gymnastics": {
    storyHook:
      "Compile-time metaprogramming awaits — conditional types and template literals.",
    completionBeat: "Advanced type gymnastics unlocked. The compiler bends to your will.",
    badgeId: "badge-stage-6",
    badgeName: "Type Gymnast",
  },
  "stage-7-production": {
    storyHook:
      "Evans is scaling the Kingdom to enterprise tooling — monorepos and ambient declarations.",
    completionBeat: "Production tooling configured. The Kingdom scales like a real team.",
    badgeId: "badge-stage-7",
    badgeName: "Production Engineer",
  },
  "stage-8-backend": {
    storyHook:
      "Evans splits the API into a dedicated Express service backed by MongoDB.",
    completionBeat: "The backend is fully typed end to end. Real production patterns shipped.",
    badgeId: "badge-stage-8",
    badgeName: "Backend Foundry Master",
  },
  "stage-9-type-mastery": {
    storyHook:
      "Jordan closes the last loopholes — branded types, deep readonly, and state machines.",
    completionBeat: "Type safety mastery achieved. The Kingdom's type system is airtight.",
    badgeId: "badge-stage-9",
    badgeName: "Grand Type-Weaving Master",
  },
};

export const CHECKPOINT_BADGES: Record<string, { badgeId: string; badgeName: string }> = {
  "level-2-5-checkpoint-domain": {
    badgeId: "badge-checkpoint-domain",
    badgeName: "Domain Synthesis Champion",
  },
  "level-5-5-launch-day": {
    badgeId: "badge-checkpoint-launch",
    badgeName: "Launch Day Hero",
  },
  "level-8-6-checkpoint-booking-route": {
    badgeId: "badge-checkpoint-booking",
    badgeName: "Full-Stack Route Master",
  },
};

export function getStageMeta(stageId: string): StageMeta | undefined {
  return STAGE_META[stageId];
}

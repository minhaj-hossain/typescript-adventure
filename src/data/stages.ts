import { Stage } from "../types";

export const STAGES: Stage[] = [
  {
    id: "stage-0-onboarding",
    title: "Stage 0 — Day 1 Setup & Tooling",
    description:
      "Initialize your team repository, set up compiler safety rules, configure dev watchers, and learn to read error messages.",
    order: 0,
    levelIds: [
      "level-0-1-bootstrap",
      "level-0-2-tsconfig",
      "level-0-3-watch-mode",
      "level-0-4-reading-errors",
    ],
  },
  {
    id: "stage-1a-primitives",
    title: "Stage 1A — The Billing Crisis (Basic Data Types)",
    description:
      "Fix ticket billing bugs by assigning strict numbers, strings, booleans, arrays, and fixed tuples to data fields.",
    order: 1,
    levelIds: [
      "level-1-1-primitives",
      "level-1-2-inference",
      "level-1-3-arrays",
      "level-1-8-arrays-of-objects",
      "level-1-9-tuples",
    ],
    storyHook: "The finance team discovered a billing bug — ticket prices are being saved as text strings!",
    completionBeat: "With numbers and arrays typed, the billing system is calculating prices accurately.",
    badgeId: "badge-primitive-runner",
    badgeName: "Type Guardian",
  },
  {
    id: "stage-1b-functions",
    title: "Stage 1B — Function Contracts & Safety Gates",
    description:
      "Design clear input/output types for functions, enforce return shapes, and ban dangerous 'any' types.",
    order: 2,
    levelIds: [
      "level-1-4-objects",
      "level-1-5-functions",
      "level-1-6-function-types",
      "level-1-7-unknown-any-never",
    ],
    storyHook: "Evans found a silent checkout bug — an un-typed function allowed corrupted data into the database.",
    completionBeat: "The team now writes safe, compiler-checked function contracts.",
  },
  {
    id: "stage-2a-structural",
    title: "Stage 2A — Reusable Blueprints (Interfaces)",
    description:
      "Design single-source-of-truth Event interfaces, add optional fields, and extend blueprints cleanly.",
    order: 3,
    levelIds: [
      "level-2-1-interfaces",
      "level-2-2-type-aliases",
      "level-2-3-optional-readonly",
      "level-2-4-extension",
      "level-2-5-checkpoint-domain",
    ],
    storyHook: "Tasnim calls a halt to copy-pasting — five files each redeclare their own mismatched Event shape.",
    completionBeat: "The Event interface is now a shared, team-wide blueprint.",
    badgeId: "badge-structural-artisan",
    badgeName: "Blueprint Architect",
  },
  {
    id: "stage-2b-advanced-shapes",
    title: "Stage 2B — Advanced Object Patterns",
    description:
      "Master index signatures for dynamic dashboards, typed object methods, destructuring patterns, rest/spread, and classes with encapsulation.",
    order: 4,
    levelIds: [
      "level-2-6-index-signatures",
      "level-2-7-object-methods",
      "level-2-8-destructuring",
      "level-2-9-rest-spread",
      "level-2-10-classes",
    ],
    storyHook: "Apurba's dashboard breaks the moment a third event launches — the keys were hardcoded!",
    completionBeat: "Dynamic index signatures and class encapsulation now handle any number of events.",
  },
  {
    id: "stage-3-shapeshifter",
    title: "Stage 3 — The Shapeshifter's Path",
    description:
      "Enforce multi-possibility union types, narrow objects dynamically at runtime, and write exhaustively checked discriminated unions.",
    order: 5,
    levelIds: [
      "level-3-1-unions",
      "level-3-2-literal-types",
      "level-3-3-narrowing",
      "level-3-4-discriminated-unions",
      "level-3-5-assertions",
      "level-3-6-type-predicates",
      "level-3-7-as-const",
      "level-3-8-intersections",
    ],
  },
  {
    id: "stage-4-generic",
    title: "Stage 4 — The Generic Alchemists",
    description:
      "Forge dynamic, reusable type parameters, enforce generic structural constraints, and utilize utility type transformers.",
    order: 6,
    levelIds: [
      "level-4-1-generics",
      "level-4-2-generic-constraints",
      "level-4-3-pick-omit-partial",
      "level-4-4-required-readonly-record",
      "level-4-5-enums-vs-unions",
      "level-4-6-keyof-operator",
      "level-4-7-overloads",
    ],
  },
  {
    id: "stage-5-frontend",
    title: "Stage 5 — The Frontend Convergence",
    description:
      "Connect high-fidelity React components with generic props, design safe API responses, and build airtight interactive full-stack features.",
    order: 7,
    levelIds: [
      "level-5-1-generic-react-component",
      "level-5-2-typed-api-responses",
      "level-5-3-typed-forms",
      "level-5-4-nextjs-api-route",
      "level-5-5-launch-day",
      "level-5-6-state-managers",
      "level-5-7-satisfies-operator",
      "level-5-8-promises",
    ],
  },
  {
    id: "stage-6-gymnastics",
    title: "Stage 6 — Advanced Type Gymnastics",
    description:
      "Master conditional types, template literal strings, mapped transformers, and the infer keyword for absolute compile-time certainty.",
    order: 8,
    levelIds: [
      "level-6-1-conditional-types",
      "level-6-2-template-literals",
      "level-6-3-mapped-and-infer",
      "level-6-4-utility-extraction",
    ],
  },
  {
    id: "stage-7-production",
    title: "Stage 7 — Production Tooling & Compilation",
    description:
      "Architect production systems using TS project reference monorepos, design ambient global types, and orchestrate decorators.",
    order: 9,
    levelIds: [
      "level-7-1-ambient-declarations",
      "level-7-2-decorators",
      "level-7-3-monorepos",
    ],
  },
  {
    id: "stage-8-backend",
    title: "Stage 8 — Backend Foundations",
    description:
      "Wire up a real Express service backed by the native MongoDB driver and Better Auth's JWT flow, typing routes, documents, request augmentation, and async error handling end to end.",
    order: 10,
    levelIds: [
      "level-8-1-express-routes",
      "level-8-2-mongo-document-contract",
      "level-8-3-request-augmentation",
      "level-8-4-better-auth-jwt",
      "level-8-5-async-handler",
      "level-8-6-checkpoint-booking-route",
      "level-8-7-runtime-validation",
    ],
  },
  {
    id: "stage-9-type-mastery",
    title: "Stage 9 — Type Safety Mastery",
    description:
      "Close the last real gaps in the type system: prevent same-shaped ids from being swapped, lock entire object trees from mutation, and model state machines where illegal transitions can't even compile.",
    order: 11,
    levelIds: [
      "level-9-1-branded-types",
      "level-9-2-deep-readonly",
      "level-9-3-algebraic-state-machines",
    ],
  },
];
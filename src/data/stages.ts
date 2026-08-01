import { Stage } from "../types";

export const STAGES: Stage[] = [
  {
    id: "stage-0-onboarding",
    title: "Stage 0 — The Onboarding Ritual",
    description:
      "Initialize your workspace, set up strict compiler rules, configure automated watchers, and master the language of the TypeScript Compiler.",
    order: 0,
    levelIds: [
      "level-0-1-bootstrap",
      "level-0-2-tsconfig",
      "level-0-3-watch-mode",
      "level-0-4-reading-errors",
    ],
  },
  {
    id: "stage-1-primitives",
    title: "Stage 1 — The Primitive Runes",
    description:
      "Harness standard primitives (number, string, boolean), declare robust array list conduits, and design exact callback type contracts.",
    order: 1,
    levelIds: [
      "level-1-1-primitives",
      "level-1-2-inference",
      "level-1-3-arrays",
      "level-1-4-objects",
      "level-1-5-functions",
      "level-1-6-function-types",
      "level-1-7-unknown-any-never",
    ],
  },
  {
    id: "stage-2-structural",
    title: "Stage 2 — The Structural Guild",
    description:
      "Map complex objects using named reusable interfaces, add optionals/readonly safety modifiers, and specialize shapes with interface extension.",
    order: 2,
    levelIds: [
      "level-2-1-interfaces",
      "level-2-2-type-aliases",
      "level-2-3-optional-readonly",
      "level-2-4-extension",
      "level-2-5-checkpoint-domain",
      "level-2-6-index-signatures",
    ],
  },
  {
    id: "stage-3-shapeshifter",
    title: "Stage 3 — The Shapeshifter's Path",
    description:
      "Enforce multi-possibility union types, narrow objects dynamically at runtime, and write exhaustively checked discriminated unions.",
    order: 3,
    levelIds: [
      "level-3-1-unions",
      "level-3-2-literal-types",
      "level-3-3-narrowing",
      "level-3-4-discriminated-unions",
      "level-3-5-assertions",
      "level-3-6-type-predicates",
    ],
  },
  {
    id: "stage-4-generic",
    title: "Stage 4 — The Generic Alchemists",
    description:
      "Forge dynamic, reusable type parameters, enforce generic structural constraints, and utilize utility type transformers.",
    order: 4,
    levelIds: [
      "level-4-1-generics",
      "level-4-2-generic-constraints",
      "level-4-3-pick-omit-partial",
      "level-4-4-required-readonly-record",
      "level-4-5-enums-vs-unions",
      "level-4-6-keyof-operator",
    ],
  },
  {
    id: "stage-5-frontend",
    title: "Stage 5 — The Frontend Convergence",
    description:
      "Connect high-fidelity React components with generic props, design safe API responses, and build airtight interactive full-stack features.",
    order: 5,
    levelIds: [
      "level-5-1-generic-react-component",
      "level-5-2-typed-api-responses",
      "level-5-3-typed-forms",
      "level-5-4-nextjs-api-route",
      "level-5-5-launch-day",
      "level-5-6-state-managers",
      "level-5-7-satisfies-operator",
    ],
  },
  {
    id: "stage-6-gymnastics",
    title: "Stage 6 — Advanced Type Gymnastics",
    description:
      "Master conditional types, template literal strings, mapped transformers, and the infer keyword for absolute compile-time certainty.",
    order: 6,
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
    order: 7,
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
    order: 8,
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
    order: 9,
    levelIds: [
      "level-9-1-branded-types",
      "level-9-2-deep-readonly",
      "level-9-3-algebraic-state-machines",
    ],
  },
];

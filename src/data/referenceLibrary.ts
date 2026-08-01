import { ReferenceEntry } from "../types";

export const REFERENCE_LIBRARY: ReferenceEntry[] = [
  {
    id: "ref-primitives",
    term: "Primitives (string, number, boolean)",
    category: "Basics",
    shortExplanation:
      "The base building blocks of TypeScript: string (text), number (floating point values), and boolean (true/false).",
    syntax:
      "let ticketPrice: number = 50;\nlet attendeeName: string = 'Minhaj';\nlet isFree: boolean = false;",
    commonPitfalls: [
      "Mixing string representations with actual math numbers (e.g. adding '50' + '50' returns '5050').",
      "Confusing lowercase primitive types (string, number, boolean) with their uppercase Object wrapper types (String, Number, Boolean) which is almost always incorrect.",
    ],
    relatedTerms: ["ref-inference"],
    seeAlsoLevels: ["level-1-1-primitives"],
  },
  {
    id: "ref-inference",
    term: "Type Inference",
    category: "Basics",
    shortExplanation:
      "TypeScript automatically figures out the type of a variable based on its initial value, so you do not have to write redundant annotations.",
    syntax:
      "let ticketPrice = 50; // Inferred as 'number'\nlet serviceFee = 5; // Inferred as 'number'",
    commonPitfalls: [
      "Annotating extremely simple, obvious variables (e.g. writing let count: number = 5; instead of just let count = 5;), which adds visual clutter.",
      "Thinking inference protects variables from changing types (it does, but without explicit types they are determined by assignment).",
    ],
    relatedTerms: ["ref-primitives"],
    seeAlsoLevels: ["level-1-2-inference"],
  },
  {
    id: "ref-arrays",
    term: "Typed Arrays",
    category: "Basics",
    shortExplanation:
      "Arrays containing elements of a single uniform type, preventing malformed lists from breaking runtime iterations.",
    syntax:
      "let attendeeRoster: string[] = [];\nlet listPrices: number[] = [10, 20, 30];",
    commonPitfalls: [
      "Accidentally inserting elements of different types (e.g., numbers into a string array), which might crash check-in loops.",
      "Declaring let elements = []; without any types, which results in elements being typed as any[] (unsafe!).",
    ],
    relatedTerms: ["ref-primitives"],
    seeAlsoLevels: ["level-1-3-arrays"],
  },
  {
    id: "ref-interfaces",
    term: "Interfaces",
    category: "Structural Types",
    shortExplanation:
      "Interfaces define named object shapes, creating reusable blueprints that guarantee objects contain required fields.",
    syntax:
      "interface Event {\n  title: string;\n  date: string;\n  capacity: number;\n}",
    commonPitfalls: [
      "Duplicating inline object shapes in multiple files instead of declaring a single named interface scroll.",
      "Forgetting to supply all required interface fields in initializers.",
    ],
    relatedTerms: ["ref-type-aliases"],
    seeAlsoLevels: ["level-2-1-interfaces"],
  },
  {
    id: "ref-type-aliases",
    term: "Type Aliases",
    category: "Structural Types",
    shortExplanation:
      "Type aliases create a new, custom name for any type, including primitives, object shapes, and unions.",
    syntax:
      "type EventStatus = string;\ntype Coordinate = { x: number; y: number };",
    commonPitfalls: [
      "Using interfaces when type aliases are needed (e.g., naming unions or primitive wrappers which interfaces cannot do).",
      "Overusing aliases for basic types, which can make debugging hover tooltips harder to read.",
    ],
    relatedTerms: ["ref-interfaces"],
    seeAlsoLevels: ["level-2-2-type-aliases"],
  },
  {
    id: "ref-unions",
    term: "Union Types",
    category: "Advanced Types",
    shortExplanation:
      "Unions allow a value to be one of several distinct types, separated by the pipe (|) operator.",
    syntax: "type KingdomEvent = ConcertEvent | WorkshopEvent | MeetupEvent;",
    commonPitfalls: [
      "Accessing a field unique to only one of the union members before narrowing the type, causing compilation errors.",
      "Creating extremely broad unions that make reasoning about code branches difficult.",
    ],
    relatedTerms: ["ref-narrowing"],
    seeAlsoLevels: ["level-3-1-unions"],
  },
  {
    id: "ref-narrowing",
    term: "Type Narrowing",
    category: "Advanced Types",
    shortExplanation:
      "Performing runtime checks (using typeof, properties, or if blocks) so TypeScript can safely reveal variant-specific fields.",
    syntax:
      "if (event.kind === 'workshop') {\n  console.log(event.instructor);\n}",
    commonPitfalls: [
      "Assuming TypeScript knows which branch you're in without writing explicit runtime check code.",
      "Writing logic that bypasses typeguards entirely using type assertions.",
    ],
    relatedTerms: ["ref-unions"],
    seeAlsoLevels: ["level-3-3-narrowing"],
  },
  {
    id: "ref-generics",
    term: "Generics",
    category: "Advanced Types",
    shortExplanation:
      "Generics act as templates, letting functions or components accept type parameters so they can process multiple types with high safety.",
    syntax:
      "function findById<T>(items: T[], id: string): T | undefined {\n  return items.find(item => item.id === id);\n}",
    commonPitfalls: [
      "Creating unconstrained generics (e.g., accessing item.id inside findById<T> without constraining T extends { id: string }), causing compile crashes.",
      "Using generics for simple single-type functions where static types are cleaner.",
    ],
    relatedTerms: ["ref-utility-types"],
    seeAlsoLevels: ["level-4-1-generics"],
  },
];

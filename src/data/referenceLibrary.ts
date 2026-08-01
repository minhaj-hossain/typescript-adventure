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
  // ─── NEW ENTRIES: Missing Fundamental Concepts ───
  {
    id: "ref-arrays-of-objects",
    term: "Arrays of Objects",
    category: "Basics",
    shortExplanation:
      "An array of objects types a list where every item shares the same object shape, e.g., `{ title: string; date: string }[]`.",
    syntax:
      "let events: { title: string; date: string }[] = [\n  { title: 'Summit', date: '2026-01-01' }\n];",
    commonPitfalls: [
      "Using any[] instead of a typed array, losing all field safety.",
      "Forgetting the object type and typing it as object[] instead, which allows any shape.",
    ],
    relatedTerms: ["ref-generics"],
    seeAlsoLevels: ["level-1-8-arrays-of-objects"],
  },
  {
    id: "ref-tuples",
    term: "Tuples",
    category: "Basics",
    shortExplanation:
      "A tuple is a fixed-length array where each position has a specific type, e.g., `[number, number]` for coordinates.",
    syntax:
      "let coordinate: [number, number] = [40.7, -74.0];",
    commonPitfalls: [
      "Confusing tuples with arrays — number[] allows any length, [number, number] requires exactly two.",
    ],
    relatedTerms: ["ref-arrays-of-objects"],
    seeAlsoLevels: ["level-1-9-tuples"],
  },
  {
    id: "ref-object-methods",
    term: "Object Methods",
    category: "Basics",
    shortExplanation:
      "Objects can contain functions typed as method signatures inside the object type, e.g., `getEvents(): Event[]`.",
    syntax:
      "const service: {\n  getEvents(): Event[];\n  createEvent(e: Event): Event;\n} = { ... };",
    commonPitfalls: [
      "Forgetting return types on methods, falling back to implicit any.",
    ],
    relatedTerms: ["ref-interfaces"],
    seeAlsoLevels: ["level-2-7-object-methods"],
  },
  {
    id: "ref-destructuring",
    term: "Destructuring with Types",
    category: "Basics",
    shortExplanation:
      "Destructuring unpacks fields from an object into variables; a type annotation after the pattern ensures safety.",
    syntax:
      "const { title, date }: Event = getEvent();",
    commonPitfalls: [
      "Placing the type annotation before the destructuring pattern, which is a syntax error.",
    ],
    relatedTerms: ["ref-object-methods"],
    seeAlsoLevels: ["level-2-8-destructuring"],
  },
  {
    id: "ref-rest-spread",
    term: "Rest Parameters & Spread",
    category: "Basics",
    shortExplanation:
      "Rest parameters (`...names: string[]`) collect all arguments into a typed array; spread (`...arr`) expands an array into arguments.",
    syntax:
      "function checkIn(...names: string[]): number { return names.length; }",
    commonPitfalls: [
      "Typing a rest parameter as a single value instead of an array: `...name: string` is wrong.",
    ],
    relatedTerms: ["ref-destructuring"],
    seeAlsoLevels: ["level-2-9-rest-spread"],
  },
  {
    id: "ref-classes",
    term: "Classes",
    category: "Basics",
    shortExplanation:
      "TypeScript classes support access modifiers (private, public, readonly) for encapsulation and typed properties.",
    syntax:
      "class EventManager { private events: Event[] = []; public add(e: Event): void { ... } }",
    commonPitfalls: [
      "Relying solely on convention instead of using private to enforce encapsulation.",
    ],
    relatedTerms: ["ref-interfaces"],
    seeAlsoLevels: ["level-2-10-classes"],
  },
  {
    id: "ref-as-const",
    term: "as const",
    category: "Advanced Types",
    shortExplanation:
      "`as const` makes every property readonly and every value a literal type, locking an object literal into its exact shape.",
    syntax:
      "const config = { retries: 3, env: 'prod' } as const;",
    commonPitfalls: [
      "Confusing readonly at the type level with immutability at runtime — `as const` doesn't freeze the object.",
    ],
    relatedTerms: ["ref-literal-types"],
    seeAlsoLevels: ["level-3-7-as-const"],
  },
  {
    id: "ref-intersections",
    term: "Intersection Types (&)",
    category: "Advanced Types",
    shortExplanation:
      "The `&` operator combines multiple types into one, requiring ALL properties from ALL types — it's an AND, not an OR.",
    syntax:
      "type AuditedEvent = Event & { createdAt: string; createdBy: string };",
    commonPitfalls: [
      "Confusing `&` (intersection, AND) with `|` (union, OR).",
    ],
    relatedTerms: ["ref-unions"],
    seeAlsoLevels: ["level-3-8-intersections"],
  },
  {
    id: "ref-function-overloads",
    term: "Function Overloads",
    category: "Advanced Types",
    shortExplanation:
      "Function overloads let you write multiple precise signatures for one function, so each input maps to a precise return type.",
    syntax:
      "function process(input: string): string;\nfunction process(input: number): number;\nfunction process(input: string | number): string | number { ... }",
    commonPitfalls: [
      "Forgetting that the implementation signature is not visible to callers — only the overload signatures are.",
    ],
    relatedTerms: ["ref-generics"],
    seeAlsoLevels: ["level-4-7-overloads"],
  },
  {
    id: "ref-promises",
    term: "Promise Types",
    category: "Advanced Types",
    shortExplanation:
      "`Promise<T>` is a generic type that declares what an async function resolves to, so callers can safely await the result.",
    syntax:
      "async function fetchEvents(): Promise<Event[]> { ... }",
    commonPitfalls: [
      "Omitting the return type so the compiler infers Promise<any>, losing all type safety on the resolved value.",
    ],
    relatedTerms: ["ref-generics"],
    seeAlsoLevels: ["level-5-8-promises"],
  },
];

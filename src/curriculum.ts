import { Stage, Level, ReferenceEntry } from "./types";

export const STAGES: Stage[] = [
  {
    id: "stage-0-onboarding",
    title: "Stage 0 — The Onboarding Ritual",
    description: "Initialize your workspace, set up strict compiler rules, configure automated watchers, and master the language of the TypeScript Compiler.",
    order: 0,
    levelIds: [
      "level-0-1-bootstrap",
      "level-0-2-tsconfig",
      "level-0-3-watch-mode",
      "level-0-4-reading-errors"
    ]
  },
  {
    id: "stage-1-primitives",
    title: "Stage 1 — The Primitive Runes",
    description: "Harness standard primitives (number, string, boolean), declare robust array list conduits, and design exact callback type contracts.",
    order: 1,
    levelIds: [
      "level-1-1-primitives",
      "level-1-2-inference",
      "level-1-3-arrays",
      "level-1-4-objects",
      "level-1-5-functions",
      "level-1-6-function-types",
      "level-1-7-unknown-any-never"
    ]
  },
  {
    id: "stage-2-structural",
    title: "Stage 2 — The Structural Guild",
    description: "Map complex objects using named reusable interfaces, add optionals/readonly safety modifiers, and specialize shapes with interface extension.",
    order: 2,
    levelIds: [
      "level-2-1-interfaces",
      "level-2-2-type-aliases",
      "level-2-3-optional-readonly",
      "level-2-4-extension",
      "level-2-5-checkpoint-domain",
      "level-2-6-index-signatures"
    ]
  },
  {
    id: "stage-3-shapeshifter",
    title: "Stage 3 — The Shapeshifter's Path",
    description: "Enforce multi-possibility union types, narrow objects dynamically at runtime, and write exhaustively checked discriminated unions.",
    order: 3,
    levelIds: [
      "level-3-1-unions",
      "level-3-2-literal-types",
      "level-3-3-narrowing",
      "level-3-4-discriminated-unions",
      "level-3-5-assertions",
      "level-3-6-type-predicates"
    ]
  },
  {
    id: "stage-4-generic",
    title: "Stage 4 — The Generic Alchemists",
    description: "Forge dynamic, reusable type parameters, enforce generic structural constraints, and utilize utility type transformers.",
    order: 4,
    levelIds: [
      "level-4-1-generics",
      "level-4-2-generic-constraints",
      "level-4-3-pick-omit-partial",
      "level-4-4-required-readonly-record",
      "level-4-5-enums-vs-unions",
      "level-4-6-keyof-operator"
    ]
  },
  {
    id: "stage-5-frontend",
    title: "Stage 5 — The Frontend Convergence",
    description: "Connect high-fidelity React components with generic props, design safe API responses, and build airtight interactive full-stack features.",
    order: 5,
    levelIds: [
      "level-5-1-generic-react-component",
      "level-5-2-typed-api-responses",
      "level-5-3-typed-forms",
      "level-5-4-nextjs-api-route",
      "level-5-5-launch-day",
      "level-5-6-state-managers"
    ]
  },
  {
    id: "stage-6-gymnastics",
    title: "Stage 6 — Advanced Type Gymnastics",
    description: "Master conditional types, template literal strings, mapped transformers, and the infer keyword for absolute compile-time certainty.",
    order: 6,
    levelIds: [
      "level-6-1-conditional-types",
      "level-6-2-template-literals",
      "level-6-3-mapped-and-infer"
    ]
  },
  {
    id: "stage-7-production",
    title: "Stage 7 — Production Tooling & Compilation",
    description: "Architect production systems using TS project reference monorepos, design ambient global types, and orchestrate decorators.",
    order: 7,
    levelIds: [
      "level-7-1-ambient-declarations",
      "level-7-2-decorators",
      "level-7-3-monorepos"
    ]
  }
];

export const LEVELS: Level[] = [
  {
    "id": "level-0-1-bootstrap",
    "title": "Bootstrapping the Kingdom Repo",
    "moduleName": "The Onboarding Ritual",
    "difficulty": "onboarding",
    "xpAwarded": 50,
    "story": {
      "title": "Your First Day on the Team",
      "narrative": "Alex, the Senior Engineer, waves you over to a bare terminal. Welcome aboard. We're rebuilding the Event Management System in TypeScript, and every new hire starts the same way: get Node installed, initialize the project, and add TypeScript as a dev dependency. Nothing fancy yet, just a clean package.json we can build on. Alex taps the screen. Half our onboarding tickets are people stuck right here, so let's get this right the first time. It's a small step, Alex admits, but every future lesson in this course builds directly on top of this one file.",
      "realWorldContext": "Every real TypeScript project starts with a working Node/npm toolchain and a package.json declaring TypeScript as a dependency.",
      "taskDescription": "Initialize package.json and add typescript as a devDependency.",
      "previousOutcome": "It's your first day. There is no previous outcome yet — just an empty repository waiting for its first commit."
    },
    "playground": {
      "starterCode": "{\n  \"name\": \"event-kingdom\",\n  \"version\": \"0.0.0\"\n}",
      "solutionCode": "{\n  \"name\": \"event-kingdom\",\n  \"version\": \"0.0.0\",\n  \"devDependencies\": {\n    \"typescript\": \"^5.4.0\"\n  }\n}",
      "objectives": [
        "Add a devDependencies field",
        "List typescript as a dev dependency"
      ],
      "hints": [
        "package.json needs a devDependencies object",
        "TypeScript belongs in devDependencies, not dependencies"
      ],
      "filesToEdit": [
        "package.json"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "devDependencies",
        "typescript"
      ]
    }
  },
  {
    "id": "level-0-2-tsconfig",
    "title": "Configuring the Compiler's Rulebook",
    "moduleName": "The Onboarding Ritual",
    "difficulty": "onboarding",
    "xpAwarded": 50,
    "story": {
      "title": "The Rulebook Every Spell Must Obey",
      "narrative": "With TypeScript installed, Priya the Tech Lead drops a bare tsconfig.json on your desk. This is the file that decides how strict we are, she says. Last quarter a teammate's editor caught bugs mine didn't, all because our configs disagreed. Priya wants strict mode on from day one so the whole team catches the same class of bugs, instead of everyone discovering them separately in production. She points at the empty file: get strict mode enabled before you touch a single line of Event code.",
      "realWorldContext": "A shared, strict tsconfig.json ensures every teammate's compiler catches the same bugs, instead of relying on individual discipline.",
      "taskDescription": "Enable strict mode in tsconfig.json.",
      "previousOutcome": "You initialized the project and added TypeScript as a dependency. Now the team needs the compiler's rules actually configured."
    },
    "playground": {
      "starterCode": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",\n    \"module\": \"ESNext\"\n  }\n}",
      "solutionCode": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",\n    \"module\": \"ESNext\",\n    \"strict\": true\n  }\n}",
      "objectives": [
        "Add the strict compiler option",
        "Set strict to true"
      ],
      "hints": [
        "strict lives inside compilerOptions",
        "It's a boolean flag"
      ],
      "filesToEdit": [
        "tsconfig.json"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "\"strict\": true"
      ]
    }
  },
  {
    "id": "level-0-3-watch-mode",
    "title": "The Watch Mode Habit",
    "moduleName": "The Onboarding Ritual",
    "difficulty": "onboarding",
    "xpAwarded": 50,
    "story": {
      "title": "Stop Re-Running the Compiler by Hand",
      "narrative": "Alex notices you re-running npx tsc after every single edit. You're going to wear out that Enter key, they laugh. There's a watch flag that recompiles automatically the moment you save. Every engineer on this team runs it in a side terminal all day. Alex wants you to add a package.json script called dev that runs tsc in watch mode, so the whole team can just type npm run dev instead of memorizing compiler flags. Small habit, huge time savings once you're touching real Event code.",
      "realWorldContext": "A shared npm script for watch mode standardizes the dev workflow across the whole team, not just your own muscle memory.",
      "taskDescription": "Add a dev script to package.json that runs tsc in watch mode.",
      "previousOutcome": "Strict mode is on. Now the team needs a fast, repeatable way to actually run the compiler while working."
    },
    "playground": {
      "starterCode": "{\n  \"name\": \"event-kingdom\",\n  \"scripts\": {}\n}",
      "solutionCode": "{\n  \"name\": \"event-kingdom\",\n  \"scripts\": {\n    \"dev\": \"tsc --watch\"\n  }\n}",
      "objectives": [
        "Add a dev script",
        "Use the --watch flag with tsc"
      ],
      "hints": [
        "Scripts go inside the scripts object",
        "tsc accepts a --watch flag"
      ],
      "filesToEdit": [
        "package.json"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "\"dev\"",
        "tsc --watch"
      ]
    }
  },
  {
    "id": "level-0-4-reading-errors",
    "title": "Translating the Red Squiggles",
    "moduleName": "The Onboarding Ritual",
    "difficulty": "onboarding",
    "xpAwarded": 50,
    "story": {
      "title": "The Compiler Isn't Yelling At You, It's Warning You",
      "narrative": "Jordan, QA, forwards you your first real compiler error: Type 'string' is not assignable to type 'number'. You stare at it for ten minutes before Alex walks by. Read it out loud, they say. It's telling you exactly what it expected and exactly what it got. Alex has you fix a tiny broken file with one deliberate type mismatch, just to prove the error message is a map, not a wall. Once this clicks, every future error in this course gets easier to read.",
      "realWorldContext": "Reading a TypeScript error's exact wording, rather than reacting to red text, is the single most useful debugging habit in the whole course.",
      "taskDescription": "Fix the type mismatch so attendeeCount is declared as a number.",
      "previousOutcome": "Watch mode is running. Now your first real compiler error shows up, and you need to actually read and fix it."
    },
    "playground": {
      "starterCode": "let attendeeCount: number = \"120\";",
      "solutionCode": "let attendeeCount: number = 120;",
      "objectives": [
        "Read the exact error message",
        "Fix the mismatch by using a numeric literal"
      ],
      "hints": [
        "The error names the expected type and the received type",
        "Replace the string literal with a number literal"
      ],
      "filesToEdit": [
        "attendees.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "attendeeCount: number",
        "= 120"
      ],
      "forbiddenKeywords": [
        "\"120\""
      ]
    }
  },
  {
    "id": "level-1-1-primitives",
    "title": "Lock Down the Ledger",
    "moduleName": "The Primitive Runes",
    "difficulty": "easy",
    "xpAwarded": 100,
    "story": {
      "title": "Welcome to the Royal Accounting Guild",
      "narrative": "You've just been rotated onto the billing module. Alex hands you a ledger file with a live bug: our team keeps recording ticket prices as text strings like '50', causing '5050' instead of 100 whenever two prices are added. Finance is furious. Alex wants a strict primitive guard on ticketPrice so this exact bug becomes impossible to reintroduce, no matter who touches this file next. This is the first Event Management System file you'll actually own. This is the very first file you'll own end to end, so Alex wants it airtight before you move on to anything bigger.",
      "realWorldContext": "TypeScript prevents accidental mixing of text and numbers, which is exactly the bug class silently corrupting the billing totals.",
      "taskDescription": "Annotate ticketPrice as a number and assign it a numeric literal.",
      "previousOutcome": "You fixed your first compiler error in the onboarding sandbox. Now you're handed a real production bug in the billing ledger."
    },
    "playground": {
      "starterCode": "let ticketPrice = \"50\";",
      "solutionCode": "let ticketPrice: number = 50;",
      "objectives": [
        "Annotate the variable",
        "Use a numeric literal"
      ],
      "hints": [
        "Add ': number'",
        "Replace the string with a number"
      ],
      "filesToEdit": [
        "ledger.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        ": number",
        "= 50"
      ]
    }
  },
  {
    "id": "level-1-2-inference",
    "title": "Let the Compiler Guess",
    "moduleName": "The Primitive Runes",
    "difficulty": "easy",
    "xpAwarded": 100,
    "story": {
      "title": "Priya's Code Review Comment",
      "narrative": "Priya leaves a comment on your pull request: you don't need to annotate every single variable, the compiler already knows this one is a number. She points out three lines where you wrote out ': number' and ': string' on values that are obviously typed from their initializer. Priya isn't asking you to remove all types, just the redundant ones, so the real annotations stand out where they actually matter. Clean up the ledger helper so only the necessary annotations remain.",
      "realWorldContext": "Over-annotating obvious values adds noise; letting inference work keeps the codebase readable and highlights annotations that genuinely add information.",
      "taskDescription": "Remove the redundant explicit annotation and let inference determine the type.",
      "previousOutcome": "The ledger's ticketPrice bug is fixed. Now Priya wants the file cleaned up before it merges."
    },
    "playground": {
      "starterCode": "let serviceFee: number = 5;",
      "solutionCode": "let serviceFee = 5;",
      "objectives": [
        "Remove the redundant type annotation",
        "Confirm the inferred type is still number"
      ],
      "hints": [
        "The initializer already tells TypeScript everything it needs",
        "Delete the ': number' portion only"
      ],
      "filesToEdit": [
        "ledger.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "let serviceFee = 5"
      ],
      "forbiddenKeywords": [
        "serviceFee: number"
      ]
    }
  },
  {
    "id": "level-1-3-arrays",
    "title": "Rosters and Rundowns",
    "moduleName": "The Primitive Runes",
    "difficulty": "easy",
    "xpAwarded": 100,
    "story": {
      "title": "Morgan Needs an Attendee Roster",
      "narrative": "Morgan, the Product Manager, wants a simple attendee roster feature by Friday: a list of attendee names for check-in. A teammate's earlier attempt let a stray number sneak into the array, and check-in crashed at the venue. Morgan doesn't want a repeat. Alex asks you to type the roster array so it can only ever hold strings, and to write a helper that safely adds a new name to it without breaking that guarantee. Get this typed correctly and the roster feature ships clean; get it wrong and check-in breaks again at the next event.",
      "realWorldContext": "Typed arrays prevent an accidental wrong-shaped value from ever entering a collection that every downstream feature assumes is uniform.",
      "taskDescription": "Type attendeeRoster as an array of strings and fix the function that adds a new attendee.",
      "previousOutcome": "The ledger file is clean and merged. Now Morgan needs a working attendee roster before Friday's event."
    },
    "playground": {
      "starterCode": "let attendeeRoster = [];\nfunction addAttendee(roster, name) {\n  roster.push(name);\n}",
      "solutionCode": "let attendeeRoster: string[] = [];\nfunction addAttendee(roster: string[], name: string): void {\n  roster.push(name);\n}",
      "objectives": [
        "Type attendeeRoster as string[]",
        "Type the addAttendee function's parameters"
      ],
      "hints": [
        "Array types can be written as Type[]",
        "Function parameters need types too, not just the array"
      ],
      "filesToEdit": [
        "roster.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "string[]",
        "name: string"
      ]
    }
  },
  {
    "id": "level-1-4-objects",
    "title": "Assembling the Event Record",
    "moduleName": "The Primitive Runes",
    "difficulty": "easy",
    "xpAwarded": 100,
    "story": {
      "title": "Sam's First Event Card Mockup",
      "narrative": "Sam, the Designer, sends over a mockup of the first Event card: a title, a date, and a capacity number, all shown together. Alex wants the underlying data typed to match exactly what Sam designed, before any component gets built. This is the very first time in the codebase we describe a whole Event as one typed shape instead of loose separate variables, Alex explains. Get this object type right, since Sam's whole card design depends on these exact three fields existing.",
      "realWorldContext": "An object type describing an Event's shape is the foundation every later component and API response will build on.",
      "taskDescription": "Declare an inline object type for event with title (string), date (string), and capacity (number).",
      "previousOutcome": "The attendee roster works and is deployed. Now Sam needs a typed Event record to build the first card component against."
    },
    "playground": {
      "starterCode": "let event = {\n  title: \"Founders Summit\",\n  date: \"2026-09-01\",\n  capacity: 200\n};",
      "solutionCode": "let event: { title: string; date: string; capacity: number } = {\n  title: \"Founders Summit\",\n  date: \"2026-09-01\",\n  capacity: 200\n};",
      "objectives": [
        "Add an inline object type annotation",
        "Match all three fields with their correct primitive types"
      ],
      "hints": [
        "Inline object types use { field: Type; field: Type }",
        "capacity should be a number, not a string"
      ],
      "filesToEdit": [
        "event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "title: string",
        "date: string",
        "capacity: number"
      ]
    }
  },
  {
    "id": "level-1-5-functions",
    "title": "Writing Contracts for Functions",
    "moduleName": "The Primitive Runes",
    "difficulty": "easy",
    "xpAwarded": 100,
    "story": {
      "title": "Taylor's Pricing Bug",
      "narrative": "Taylor, the Backend Engineer, pings you: someone called calculateTotal with a discount as a string and it silently returned garbage. Taylor is tired of guessing what every function expects just by reading its body. They want every parameter and return type on this function explicitly typed, so the function itself documents its own contract and the compiler enforces it at every call site, not just this one. Taylor doesn't want to guess anymore what a function expects just by reading its body line by line every single time.",
      "realWorldContext": "Explicitly typed function signatures turn a function into a self-documenting, compiler-enforced contract instead of a guessing game for every caller.",
      "taskDescription": "Type calculateTotal's parameters and return type.",
      "previousOutcome": "The Event object type shipped and Sam's card renders correctly. Now Taylor needs a pricing function made safe to call from anywhere."
    },
    "playground": {
      "starterCode": "function calculateTotal(price, discount) {\n  return price - discount;\n}",
      "solutionCode": "function calculateTotal(price: number, discount: number): number {\n  return price - discount;\n}",
      "objectives": [
        "Type both parameters as number",
        "Type the return value as number"
      ],
      "hints": [
        "Each parameter gets its own type annotation",
        "The return type goes after the parameter list"
      ],
      "filesToEdit": [
        "pricing.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "price: number",
        "discount: number",
        "): number"
      ]
    }
  },
  {
    "id": "level-1-6-function-types",
    "title": "The Callback Contract",
    "moduleName": "The Primitive Runes",
    "difficulty": "medium",
    "xpAwarded": 100,
    "story": {
      "title": "Jordan Finds a Silent Sorting Bug",
      "narrative": "Jordan reports that the event list sometimes sorts backwards, only when a specific teammate touches the sort logic. Digging in, Alex finds the sortEvents function accepts a comparator callback with no type at all, so nothing stops someone from passing one with swapped arguments. Alex wants a proper function type for the comparator parameter, so the compiler catches a wrong-shaped callback before it ever ships, instead of QA catching it after the fact. Once the comparator itself is properly typed, this exact class of silent sorting bug becomes structurally impossible to reintroduce later.",
      "realWorldContext": "Typing a callback parameter's exact signature is what lets the compiler catch a wrong-shaped function argument at the call site.",
      "taskDescription": "Add a function type to the comparator parameter of sortEvents.",
      "previousOutcome": "Taylor's pricing function is now safely typed. Now Jordan's sorting bug needs the same treatment applied to a callback parameter."
    },
    "playground": {
      "starterCode": "function sortEvents(events, comparator) {\n  return events.sort(comparator);\n}",
      "solutionCode": "function sortEvents(events: string[], comparator: (a: string, b: string) => number): string[] {\n  return events.sort(comparator);\n}",
      "objectives": [
        "Type comparator as a function taking two strings and returning a number",
        "Type the events parameter and return type"
      ],
      "hints": [
        "A function type looks like (param: Type, param: Type) => ReturnType",
        "The comparator should return a number, matching Array.sort's expectations"
      ],
      "filesToEdit": [
        "sorting.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "comparator: (a: string, b: string) => number"
      ]
    }
  },
  {
    "id": "level-1-7-unknown-any-never",
    "title": "Refusing to Reach for Any",
    "moduleName": "The Primitive Runes",
    "difficulty": "medium",
    "xpAwarded": 125,
    "story": {
      "title": "Alex Catches You Mid-Review",
      "narrative": "Taylor just wired up an external webhook that pings the Kingdom whenever a third-party ticketing partner sells a seat, but nobody controls what shape that payload actually arrives in. Your first pass types it as any just to make the red squiggle disappear, and Alex flags it within minutes of the pull request going up. Any turns off checking completely, right at the exact moment we can trust this data the least, Alex says. They want the payload typed as unknown instead, forcing a real narrowing check before anything touches it, plus a proper exhaustive guard on the nearby status switch, so a forgotten case fails to compile instead of silently falling through in production.",
      "realWorldContext": "unknown forces a narrowing check before any property access is allowed, while never statically proves every real case in a switch has already been handled.",
      "taskDescription": "Type the webhook payload as unknown with a narrowing check, and add an assertNever guard to the status switch's default case.",
      "previousOutcome": "The sorting callback bug is fixed and merged. Now Taylor's new webhook integration hands you data whose shape you can't fully trust yet."
    },
    "playground": {
      "starterCode": "function parseWebhookPayload(payload: any) {\n  return payload.name;\n}\n\nfunction describeStatus(status: EventStatus) {\n  switch (status) {\n    case \"draft\":\n      return \"Not yet public\";\n    case \"published\":\n      return \"Live now\";\n    case \"cancelled\":\n      return \"No longer happening\";\n  }\n}",
      "solutionCode": "function parseWebhookPayload(payload: unknown) {\n  if (typeof payload === \"object\" && payload !== null && \"name\" in payload) {\n    return (payload as { name: string }).name;\n  }\n  throw new Error(\"Invalid payload shape\");\n}\n\nfunction assertNever(value: never): never {\n  throw new Error(`Unhandled case: ${value}`);\n}\n\nfunction describeStatus(status: EventStatus) {\n  switch (status) {\n    case \"draft\":\n      return \"Not yet public\";\n    case \"published\":\n      return \"Live now\";\n    case \"cancelled\":\n      return \"No longer happening\";\n    default:\n      return assertNever(status);\n  }\n}",
      "objectives": [
        "Type payload as unknown instead of any",
        "Narrow payload before accessing any property on it",
        "Add an assertNever helper typed to accept only never",
        "Wire assertNever into describeStatus's default case"
      ],
      "hints": [
        "unknown requires a real narrowing check before any property access is allowed, unlike any",
        "A function parameter typed as never can only ever actually be called once every real case has already been handled"
      ],
      "filesToEdit": [
        "type-triad.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "payload: unknown",
        "function assertNever(value: never)"
      ],
      "forbiddenKeywords": [
        "payload: any"
      ]
    }
  },
  {
    "id": "level-2-1-interfaces",
    "title": "Blueprint the Event Model",
    "moduleName": "The Structural Guild",
    "difficulty": "medium",
    "xpAwarded": 125,
    "story": {
      "title": "Priya Calls a Halt to Copy-Pasting",
      "narrative": "Priya pulls you into a quick sync: five different files each redeclare the same inline Event shape, and one of them is already missing a field. This ends today, she says. We need one named interface that every file imports, so a single edit updates every consumer at once. Priya wants an Event interface with title, date, and capacity, ready to replace every duplicated inline shape across the codebase. Get this right, Priya says, and nobody on the team ever has to hunt down a fifth duplicated copy of this shape again.",
      "realWorldContext": "A shared, named interface replaces scattered duplicated inline types so a single edit propagates everywhere the type is used.",
      "taskDescription": "Declare an Event interface with title, date, and capacity, then use it to type the event variable.",
      "previousOutcome": "The sorting callback bug is fixed. Now Priya wants the repeated inline Event shape finally consolidated into one real interface."
    },
    "playground": {
      "starterCode": "let event: { title: string; date: string; capacity: number } = {\n  title: \"Founders Summit\",\n  date: \"2026-09-01\",\n  capacity: 200\n};",
      "solutionCode": "interface Event {\n  title: string;\n  date: string;\n  capacity: number;\n}\n\nlet event: Event = {\n  title: \"Founders Summit\",\n  date: \"2026-09-01\",\n  capacity: 200\n};",
      "objectives": [
        "Declare an Event interface",
        "Use the interface to type the event variable"
      ],
      "hints": [
        "interface Name { field: Type } declares a reusable named shape",
        "Replace the inline object type with the interface name"
      ],
      "filesToEdit": [
        "event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "interface Event",
        "event: Event"
      ]
    }
  },
  {
    "id": "level-2-2-type-aliases",
    "title": "Naming the Shape of a Status",
    "moduleName": "The Structural Guild",
    "difficulty": "medium",
    "xpAwarded": 125,
    "story": {
      "title": "Morgan's New Filter Feature",
      "narrative": "Morgan wants a status filter dropdown on the events dashboard, but the underlying status value doesn't have a clean shape to reference anywhere yet. Priya suggests a type alias instead of an interface here, since a status is really a value, not an object with fields. This is your first time reaching for type instead of interface, and Priya wants you to understand why: an alias can name any type, not just an object shape. It's a small distinction today, but Priya wants you comfortable with it before Stage 3 introduces unions that only type aliases can express.",
      "realWorldContext": "Type aliases can name a value's shape, not just object shapes, making them the right tool once you need to describe a union later.",
      "taskDescription": "Create a type alias EventStatus for a string, and use it to type the status field.",
      "previousOutcome": "The Event interface replaced every duplicated inline shape. Now Morgan's filter feature needs a named status type to build against."
    },
    "playground": {
      "starterCode": "let status: string = \"draft\";",
      "solutionCode": "type EventStatus = string;\n\nlet status: EventStatus = \"draft\";",
      "objectives": [
        "Declare a type alias named EventStatus",
        "Use the alias to type the status variable"
      ],
      "hints": [
        "type Name = Type declares an alias",
        "Replace the inline string type with the new alias"
      ],
      "filesToEdit": [
        "status.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "type EventStatus",
        "status: EventStatus"
      ]
    }
  },
  {
    "id": "level-2-3-optional-readonly",
    "title": "Handling the Maybe Fields",
    "moduleName": "The Structural Guild",
    "difficulty": "medium",
    "xpAwarded": 125,
    "story": {
      "title": "Sam's Discount Banner Crash",
      "narrative": "Sam's new discount banner crashes for every Event that doesn't have a discount code, since not every Event has one. Separately, Jordan found a bug where an Event's id got accidentally overwritten mid-session, breaking a reference elsewhere. Priya wants two fixes in the same interface: discountCode should be optional, since it isn't always present, and id should be readonly, since it should never change after creation. Two small modifiers, two real production bugs, Priya says, and both fixes belong in the same interface update this time.",
      "realWorldContext": "Optional properties model fields that are genuinely sometimes absent; readonly properties protect identity fields like an id from accidental reassignment.",
      "taskDescription": "Add an optional discountCode field and a readonly id field to the Event interface.",
      "previousOutcome": "The EventStatus type alias is in place. Now two separate bugs — a missing discount code and an overwritten id — need the Event interface updated."
    },
    "playground": {
      "starterCode": "interface Event {\n  id: string;\n  title: string;\n  discountCode: string;\n}",
      "solutionCode": "interface Event {\n  readonly id: string;\n  title: string;\n  discountCode?: string;\n}",
      "objectives": [
        "Mark id as readonly",
        "Mark discountCode as optional"
      ],
      "hints": [
        "readonly goes directly before the field name",
        "? marks a field as optional, right after the field name"
      ],
      "filesToEdit": [
        "event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "readonly id",
        "discountCode?:"
      ]
    }
  },
  {
    "id": "level-2-4-extension",
    "title": "Specializing the Workshop Event",
    "moduleName": "The Structural Guild",
    "difficulty": "medium",
    "xpAwarded": 150,
    "story": {
      "title": "Morgan Adds a New Event Category",
      "narrative": "Morgan wants to launch Workshop events: everything a regular Event has, plus an instructor name and a max seat count. Your first instinct is to copy the whole Event interface into a new one, but Priya stops you. That's exactly the duplication problem we fixed two levels ago, she says. She wants WorkshopEvent to extend Event, so it automatically gets every base field for free, plus the two new ones. Get the inheritance right here, and every future specialized Event category gets the same free reuse of the base shape.",
      "realWorldContext": "Interface extension lets a specialized entity reuse a base shape's fields instead of duplicating them, avoiding drift when the base shape changes.",
      "taskDescription": "Declare WorkshopEvent extending Event with instructor and maxSeats fields.",
      "previousOutcome": "The optional and readonly fields fixed both bugs. Now Morgan needs a specialized Workshop variant of the Event interface."
    },
    "playground": {
      "starterCode": "interface WorkshopEvent {\n  title: string;\n  instructor: string;\n  maxSeats: number;\n}",
      "solutionCode": "interface WorkshopEvent extends Event {\n  instructor: string;\n  maxSeats: number;\n}",
      "objectives": [
        "Extend WorkshopEvent from Event",
        "Remove the duplicated title field"
      ],
      "hints": [
        "interface Name extends Base inherits Base's fields",
        "Once extending Event, title no longer needs to be redeclared"
      ],
      "filesToEdit": [
        "workshop-event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "extends Event"
      ],
      "forbiddenKeywords": [
        "title: string;\n  instructor"
      ]
    }
  },
  {
    "id": "level-2-5-checkpoint-domain",
    "title": "Wiring the Domain Together",
    "moduleName": "The Structural Guild",
    "difficulty": "hard",
    "xpAwarded": 200,
    "story": {
      "title": "Priya's Pre-Launch Review",
      "narrative": "Before the team builds any real UI on top of this, Priya wants a full review: one Ticket interface referencing an Event by id, with a readonly id of its own and an optional seatNumber field for general-admission tickets that don't get one assigned. This level doesn't teach anything new, Priya says. It just proves the last four lessons actually fit together into something the rest of the team can safely build on. No new syntax this time, Priya reminds you, just proof that everything from Levels 6 through 9 actually fits together cleanly.",
      "realWorldContext": "A checkpoint level with no new syntax, forcing interfaces, extension, optional, and readonly to be combined in one realistic domain model.",
      "taskDescription": "Declare a Ticket interface with a readonly id, an eventId referencing an Event, and an optional seatNumber.",
      "previousOutcome": "WorkshopEvent now correctly extends Event. Before Stage 3 begins, Priya wants everything so far combined into one cohesive Ticket model."
    },
    "playground": {
      "starterCode": "interface Ticket {\n  id: string;\n  eventId: string;\n  seatNumber: number;\n}",
      "solutionCode": "interface Ticket {\n  readonly id: string;\n  eventId: string;\n  seatNumber?: number;\n}",
      "objectives": [
        "Mark id as readonly",
        "Mark seatNumber as optional",
        "Keep eventId as a required string reference"
      ],
      "hints": [
        "This combines two modifiers you've already learned, not a new one",
        "Only seatNumber should be optional; eventId stays required"
      ],
      "filesToEdit": [
        "ticket.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "readonly id",
        "eventId: string",
        "seatNumber?:"
      ]
    }
  },
  {
    "id": "level-2-6-index-signatures",
    "title": "Dashboards for Events You Haven't Created Yet",
    "moduleName": "The Structural Guild",
    "difficulty": "medium",
    "xpAwarded": 150,
    "story": {
      "title": "Morgan's Dashboard Breaks the Moment a Third Event Launches",
      "narrative": "Morgan wants a live status dashboard showing state for every currently active event, but your first pass hardcodes two literal event ids as placeholder keys, since those were the only two events that existed when you wrote it. The moment a third event launches the same day, the dashboard doesn't even know the key exists and quietly shows nothing for it. Priya explains the real problem: event ids are created dynamically all day long, so the type needs to accept any string key up front, not a fixed guessed-at list decided when the file was written.",
      "realWorldContext": "An index signature models an open-ended dictionary whose exact keys aren't known in advance, which is exactly the shape a live, ever-growing dashboard needs.",
      "taskDescription": "Replace the hardcoded literal keys in EventStateMap with a dynamic index signature.",
      "previousOutcome": "The Ticket model passed Priya's review. Now Morgan's live dashboard needs to handle however many events happen to be active at once."
    },
    "playground": {
      "starterCode": "interface EventStateMap {\n  \"evt-001\": EventState;\n  \"evt-002\": EventState;\n}",
      "solutionCode": "interface EventStateMap {\n  [eventId: string]: EventState;\n}",
      "objectives": [
        "Replace the hardcoded literal keys with a dynamic index signature",
        "Keep the value type as EventState for every possible key"
      ],
      "hints": [
        "[keyName: string]: ValueType declares an index signature accepting any string key",
        "This single line replaces every individual literal key at once, no matter how many events exist"
      ],
      "filesToEdit": [
        "event-state-map.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "[eventId: string]: EventState"
      ]
    }
  },
  {
    "id": "level-3-1-unions",
    "title": "One Endpoint, Three Shapes",
    "moduleName": "The Shapeshifter's Path",
    "difficulty": "medium",
    "xpAwarded": 150,
    "story": {
      "title": "Taylor's API Now Returns Three Kinds of Events",
      "narrative": "Taylor's API expansion is live: the events endpoint now returns Concerts, Workshops, and Meetups, three genuinely different shapes bundled under one response. Your render function currently assumes every event looks the same, and it's already crashed twice in staging when a Workshop-only field turned out to be missing on a Meetup. Taylor wants a single KingdomEvent type representing exactly these three possibilities, so nothing outside this union can sneak through with the wrong shape ever again, in staging or production.",
      "realWorldContext": "A union type models a value that can genuinely be one of several distinct shapes, exactly like Taylor's newly expanded API response.",
      "taskDescription": "Declare a KingdomEvent type as a union of ConcertEvent, WorkshopEvent, and MeetupEvent.",
      "previousOutcome": "The Ticket model passed Priya's review. Now Taylor's API expansion means a single Event shape is no longer enough."
    },
    "playground": {
      "starterCode": "type KingdomEvent = ConcertEvent;",
      "solutionCode": "type KingdomEvent = ConcertEvent | WorkshopEvent | MeetupEvent;",
      "objectives": [
        "Union all three event shapes together",
        "Use the | operator between each member"
      ],
      "hints": [
        "The | symbol separates each possible shape in a union",
        "All three shapes need to be listed, not just one"
      ],
      "filesToEdit": [
        "kingdom-event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "ConcertEvent | WorkshopEvent | MeetupEvent"
      ]
    }
  },
  {
    "id": "level-3-2-literal-types",
    "title": "Locking the Status Field",
    "moduleName": "The Shapeshifter's Path",
    "difficulty": "medium",
    "xpAwarded": 150,
    "story": {
      "title": "Jordan's Typo Took Down the Dashboard",
      "narrative": "Jordan found it: someone typed status as 'Cancled' instead of 'cancelled', and because status was just a plain string, TypeScript never complained. The dashboard silently showed the wrong count for weeks. Priya wants this made structurally impossible. She wants EventStatus rewritten as a closed set of exact allowed values, so a typo like this becomes a compile error the moment it's typed, not a bug QA has to hunt down later. Get this locked down and a typo like Jordan's simply can't compile anymore, no matter who's typing it next.",
      "realWorldContext": "A literal union of exact allowed values turns a typo into an instant compile-time error instead of a silent, hard-to-trace data bug.",
      "taskDescription": "Rewrite EventStatus as a literal union of 'draft', 'published', and 'cancelled'.",
      "previousOutcome": "The KingdomEvent union now models all three event kinds. Now Jordan's typo bug means the status field itself needs tightening."
    },
    "playground": {
      "starterCode": "type EventStatus = string;",
      "solutionCode": "type EventStatus = \"draft\" | \"published\" | \"cancelled\";",
      "objectives": [
        "Replace the string alias with a literal union",
        "Include exactly draft, published, and cancelled"
      ],
      "hints": [
        "Literal types are exact quoted values, joined with |",
        "Only these three values should be allowed, nothing else"
      ],
      "filesToEdit": [
        "status.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "\"draft\" | \"published\" | \"cancelled\""
      ]
    }
  },
  {
    "id": "level-3-3-narrowing",
    "title": "Guarding Each Branch",
    "moduleName": "The Shapeshifter's Path",
    "difficulty": "medium",
    "xpAwarded": 150,
    "story": {
      "title": "Alex Reviews Your Render Function",
      "narrative": "Your first attempt at renderEventSummary reaches straight for a workshop-only field like instructor before checking what kind of event it actually is, and TypeScript rightly refuses to compile it. Alex explains: you have to narrow the union first, with a runtime check the compiler can follow, before it will let you touch a field that doesn't exist on every branch. Add the missing check so each event kind is only accessed inside its own safe branch. Get the check right here and this exact category of crash becomes impossible for any future teammate to reintroduce by accident.",
      "realWorldContext": "Type narrowing lets TypeScript follow a runtime check into a conditional branch, safely exposing only the fields that actually exist there.",
      "taskDescription": "Add a kind check that narrows event before accessing a variant-specific field.",
      "previousOutcome": "EventStatus is now a tight literal union. Now the render function needs to safely handle each of the three KingdomEvent shapes."
    },
    "playground": {
      "starterCode": "function renderEventSummary(event: KingdomEvent) {\n  return event.instructor;\n}",
      "solutionCode": "function renderEventSummary(event: KingdomEvent) {\n  if (event.kind === \"workshop\") {\n    return event.instructor;\n  }\n  return event.title;\n}",
      "objectives": [
        "Add an if check on event.kind before accessing instructor",
        "Provide a fallback for the other event kinds"
      ],
      "hints": [
        "A property check like event.kind === 'workshop' lets TypeScript narrow the type inside that block",
        "Every branch needs to return something safely typed"
      ],
      "filesToEdit": [
        "render-event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "event.kind ===",
        "event.instructor"
      ]
    }
  },
  {
    "id": "level-3-4-discriminated-unions",
    "title": "The Kind Field Fix",
    "moduleName": "The Shapeshifter's Path",
    "difficulty": "medium",
    "xpAwarded": 150,
    "story": {
      "title": "Priya Formalizes the Pattern",
      "narrative": "Priya likes the kind check you added, but points out the three event interfaces don't actually share a common literal field yet, so the narrowing only works by accident in some cases. She wants each interface to declare kind as its own exact literal, concert, workshop, or meetup, so TypeScript can exhaustively verify every branch of a switch statement is handled, catching a forgotten case before it ships. Once every variant shares this literal field, a forgotten case in any future switch statement gets caught by the compiler itself.",
      "realWorldContext": "A discriminated union adds a shared literal-typed field so TypeScript can safely and exhaustively narrow between every possible variant.",
      "taskDescription": "Add a literal kind field to each of the three event interfaces.",
      "previousOutcome": "The render function now narrows safely in the common case. Priya wants the underlying interfaces formalized as a true discriminated union."
    },
    "playground": {
      "starterCode": "interface WorkshopEvent extends Event {\n  instructor: string;\n  maxSeats: number;\n}",
      "solutionCode": "interface WorkshopEvent extends Event {\n  kind: \"workshop\";\n  instructor: string;\n  maxSeats: number;\n}",
      "objectives": [
        "Add a kind field typed as the exact literal 'workshop'",
        "Ensure ConcertEvent and MeetupEvent each get their own matching literal"
      ],
      "hints": [
        "kind should be typed as the literal string itself, not just string",
        "Each of the three interfaces needs its own unique literal value"
      ],
      "filesToEdit": [
        "workshop-event.ts",
        "concert-event.ts",
        "meetup-event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "kind: \"workshop\""
      ]
    }
  },
  {
    "id": "level-3-5-assertions",
    "title": "When You Know Better Than the Compiler",
    "moduleName": "The Shapeshifter's Path",
    "difficulty": "hard",
    "xpAwarded": 175,
    "story": {
      "title": "Taylor's Trusted Legacy Payload",
      "narrative": "Taylor hands you a payload from a legacy admin tool that's always shaped like an Event, but arrives typed as unknown because the old system predates any of this typing work. Alex is cautious here: an assertion tells the compiler to trust you, it doesn't actually check anything at runtime, so use it only when you have real evidence, like a schema Taylor already validated upstream, not as a shortcut to silence an error you don't understand. Alex is clear this is the exception, not the rule, and wants you to feel exactly why before Stage 4 begins.",
      "realWorldContext": "A type assertion overrides the compiler's own inference and performs zero runtime checking, so it should be reserved for cases backed by real, external evidence.",
      "taskDescription": "Use a type assertion to treat legacyPayload as an Event, after Taylor's upstream validation.",
      "previousOutcome": "The discriminated union is fully formalized. Now Taylor's legacy admin tool needs one carefully justified type assertion."
    },
    "playground": {
      "starterCode": "function readLegacyEvent(legacyPayload: unknown) {\n  return legacyPayload.title;\n}",
      "solutionCode": "function readLegacyEvent(legacyPayload: unknown) {\n  const event = legacyPayload as Event;\n  return event.title;\n}",
      "objectives": [
        "Assert legacyPayload as Event",
        "Access title only after the assertion"
      ],
      "hints": [
        "The as keyword performs a type assertion",
        "Assert once into a new variable, then use that variable safely"
      ],
      "filesToEdit": [
        "legacy-event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "as Event"
      ]
    }
  },
  {
    "id": "level-3-6-type-predicates",
    "title": "Proving It, Instead of Promising It",
    "moduleName": "The Shapeshifter's Path",
    "difficulty": "hard",
    "xpAwarded": 175,
    "story": {
      "title": "Jordan Finds the Assertion's Blind Spot",
      "narrative": "Jordan discovers that Taylor's legacy-payload assertion from last sprint doesn't actually protect anything: a malformed speaker object with a missing talkTitle field sailed straight through, because as Speaker only tells the compiler to trust you, it never actually checks anything at runtime. Alex wants a different tool for this exact situation, one where you can genuinely verify the shape before trusting it. They want a real, reusable isSpeaker function that checks every field Speaker actually requires and returns a proper type predicate, so getSpeakerName can safely narrow instead of blindly asserting.",
      "realWorldContext": "A custom type predicate performs a real runtime check and narrows accordingly, unlike a type assertion, which changes nothing about what actually happens when the code runs.",
      "taskDescription": "Write a custom type predicate isSpeaker and use it to safely narrow payload before accessing name.",
      "previousOutcome": "The legacy payload assertion shipped and was reviewed. Now Jordan has found a real gap it left behind, and Alex wants it closed properly."
    },
    "playground": {
      "starterCode": "function getSpeakerName(payload: unknown) {\n  const speaker = payload as Speaker;\n  return speaker.name;\n}",
      "solutionCode": "function isSpeaker(payload: unknown): payload is Speaker {\n  return (\n    typeof payload === \"object\" &&\n    payload !== null &&\n    \"name\" in payload &&\n    \"talkTitle\" in payload\n  );\n}\n\nfunction getSpeakerName(payload: unknown) {\n  if (isSpeaker(payload)) {\n    return payload.name;\n  }\n  throw new Error(\"Invalid speaker payload\");\n}",
      "objectives": [
        "Write a custom type predicate isSpeaker using the 'payload is Speaker' syntax",
        "Check every field Speaker actually requires inside isSpeaker",
        "Replace the risky assertion in getSpeakerName with a call to isSpeaker"
      ],
      "hints": [
        "A type predicate's return type looks like 'param is Type', not just boolean",
        "The function body must actually verify each required field before returning true, or the predicate is just as unsafe as the assertion it replaces"
      ],
      "filesToEdit": [
        "speaker.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "payload is Speaker",
        "isSpeaker(payload)"
      ],
      "forbiddenKeywords": [
        "as Speaker"
      ]
    }
  },
  {
    "id": "level-4-1-generics",
    "title": "One Spell, Every Entity",
    "moduleName": "The Generic Alchemists",
    "difficulty": "medium",
    "xpAwarded": 175,
    "story": {
      "title": "Alex Counts Four Copy-Pasted Functions",
      "narrative": "Alex pulls up findEventById, findUserById, findTicketById, side by side, structurally identical except for one type each time. Someone's about to write a fifth for Organizer, Alex says, and that's our sign. They want one generic findById function that works for any entity with an id, so the next new entity type doesn't need its own copy-pasted lookup function at all. One single generic function, Alex says, and the next brand-new entity type never needs its own hand-written lookup function again.",
      "realWorldContext": "A generic function eliminates duplicated logic that's identical across types, replacing four near-copies with one reusable, type-safe function.",
      "taskDescription": "Write a generic findById function usable for Events, Users, or Tickets.",
      "previousOutcome": "The legacy payload assertion is in place and reviewed. Now Alex wants the four duplicated findXById functions unified into one."
    },
    "playground": {
      "starterCode": "function findEventById(items: Event[], id: string): Event | undefined {\n  return items.find(item => item.id === id);\n}",
      "solutionCode": "function findById<T extends { id: string }>(items: T[], id: string): T | undefined {\n  return items.find(item => item.id === id);\n}",
      "objectives": [
        "Add a generic type parameter T",
        "Constrain T to require an id field"
      ],
      "hints": [
        "<T> declares a generic type parameter right after the function name",
        "T extends { id: string } guarantees every item has an id"
      ],
      "filesToEdit": [
        "find-by-id.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "<T extends { id: string }>"
      ]
    }
  },
  {
    "id": "level-4-2-generic-constraints",
    "title": "Guarding the Gate",
    "moduleName": "The Generic Alchemists",
    "difficulty": "medium",
    "xpAwarded": 175,
    "story": {
      "title": "Jordan Breaks findById on Purpose",
      "narrative": "Jordan, always testing edge cases, calls findById on a plain array of strings just to see what happens. Without a constraint, it would compile fine and then crash the moment the function tries to read .id off a plain string. Alex wants you to confirm the constraint you added last level is doing its job: this exact misuse should fail to compile, not fail at runtime in front of a user. Confirm the guard holds here too, Alex says, before this pattern gets used across the rest of the utility library.",
      "realWorldContext": "A generic constraint turns an unsafe runtime crash into a caught-at-compile-time error, exactly the difference Jordan's test is meant to surface.",
      "taskDescription": "Add the missing constraint to a second generic utility, groupById, so it also requires an id field.",
      "previousOutcome": "The generic findById function replaced all four duplicates. Now Jordan wants a second generic utility, groupById, made just as safe."
    },
    "playground": {
      "starterCode": "function groupById<T>(items: T[]): Record<string, T> {\n  const map: Record<string, T> = {};\n  for (const item of items) {\n    map[item.id] = item;\n  }\n  return map;\n}",
      "solutionCode": "function groupById<T extends { id: string }>(items: T[]): Record<string, T> {\n  const map: Record<string, T> = {};\n  for (const item of items) {\n    map[item.id] = item;\n  }\n  return map;\n}",
      "objectives": [
        "Add the { id: string } constraint to T"
      ],
      "hints": [
        "The syntax is identical to the constraint you already wrote on findById",
        "Without the constraint, item.id is not guaranteed to exist"
      ],
      "filesToEdit": [
        "group-by-id.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "<T extends { id: string }>"
      ]
    }
  },
  {
    "id": "level-4-3-pick-omit-partial",
    "title": "Deriving the Summary View",
    "moduleName": "The Generic Alchemists",
    "difficulty": "medium",
    "xpAwarded": 175,
    "story": {
      "title": "Sam Needs a Lightweight List View",
      "narrative": "Sam's new event list view only shows the title and date, but your first attempt hand-wrote a brand new interface with just those two fields, and it already drifted out of sync when capacity was renamed last week. Priya wants EventSummary derived directly from Event using Pick, so it automatically updates whenever the real Event interface changes, instead of living as its own disconnected copy. Get this derived correctly and Sam's list view updates automatically forever, with zero risk of drifting out of sync again.",
      "realWorldContext": "Deriving a smaller type with Pick keeps it automatically in sync with its source interface, instead of duplicating fields by hand.",
      "taskDescription": "Derive EventSummary from Event using Pick, keeping only title and date.",
      "previousOutcome": "groupById is now safely constrained. Now Sam's lightweight list view needs a derived, always-in-sync EventSummary type."
    },
    "playground": {
      "starterCode": "interface EventSummary {\n  title: string;\n  date: string;\n}",
      "solutionCode": "type EventSummary = Pick<Event, \"title\" | \"date\">;",
      "objectives": [
        "Replace the hand-written interface with a Pick-derived type",
        "Keep only title and date from Event"
      ],
      "hints": [
        "Pick<Source, 'field' | 'field'> selects a subset of fields",
        "This should be a type alias, not a separate interface"
      ],
      "filesToEdit": [
        "event-summary.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "Pick<Event, \"title\" | \"date\">"
      ]
    }
  },
  {
    "id": "level-4-4-required-readonly-record",
    "title": "Sealing the Final Submission",
    "moduleName": "The Generic Alchemists",
    "difficulty": "hard",
    "xpAwarded": 200,
    "story": {
      "title": "Morgan's Launch-Day Checklist",
      "narrative": "Morgan is nervous about launch day: the event creation form currently lets someone submit with fields still missing, since the in-progress editing state is naturally Partial. Priya wants a hard gate right before saving: the submit handler should only accept a fully Required version of the form input, so an incomplete Event can never reach the database, no matter what the UI allows mid-edit. Get this gate right, Priya says, and an incomplete Event simply cannot reach the database no matter what happens in the UI.",
      "realWorldContext": "Required<T> turns an in-progress, partially-filled editing state into a hard, compiler-enforced gate at the exact moment of submission.",
      "taskDescription": "Type the submitEvent function's parameter as Required<EventFormInput>.",
      "previousOutcome": "EventSummary now derives cleanly from Event. With launch day approaching, Morgan needs the final submission gate made airtight."
    },
    "playground": {
      "starterCode": "function submitEvent(input: EventFormInput) {\n  saveToDatabase(input);\n}",
      "solutionCode": "function submitEvent(input: Required<EventFormInput>) {\n  saveToDatabase(input);\n}",
      "objectives": [
        "Wrap EventFormInput in Required",
        "Ensure incomplete input can no longer be passed to submitEvent"
      ],
      "hints": [
        "Required<T> makes every field on T mandatory",
        "Only the parameter type needs to change, not the function body"
      ],
      "filesToEdit": [
        "submit-event.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "Required<EventFormInput>"
      ]
    }
  },
  {
    "id": "level-4-5-enums-vs-unions",
    "title": "Naming the Roles",
    "moduleName": "The Generic Alchemists",
    "difficulty": "medium",
    "xpAwarded": 200,
    "story": {
      "title": "Priya Weighs Enum vs Union for User Roles",
      "narrative": "The team needs a UserRole field: admin, organizer, or attendee. Someone on the team defaults to an enum out of habit, but Priya wants you to compare it against a plain literal union first. An enum leaves behind a real object in the compiled JavaScript, she explains, while a literal union disappears completely at compile time. For a role check used constantly across the frontend bundle, she wants the leaner option. It's a small change, Priya admits, but at this scale the bundle-size savings add up across every role check in the app.",
      "realWorldContext": "Comparing an enum against a literal union for the same field surfaces a genuine runtime cost trade-off, not just a stylistic preference.",
      "taskDescription": "Replace the UserRole enum with an equivalent literal union.",
      "previousOutcome": "The submission gate now requires a fully Required form input. Before Stage 5 begins, Priya wants the UserRole type reconsidered."
    },
    "playground": {
      "starterCode": "enum UserRole {\n  Admin,\n  Organizer,\n  Attendee\n}",
      "solutionCode": "type UserRole = \"admin\" | \"organizer\" | \"attendee\";",
      "objectives": [
        "Replace the enum with a literal union",
        "Keep all three roles represented as lowercase string literals"
      ],
      "hints": [
        "A literal union lists each allowed exact value joined by |",
        "This removes the enum keyword entirely"
      ],
      "filesToEdit": [
        "user-role.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "\"admin\" | \"organizer\" | \"attendee\""
      ],
      "forbiddenKeywords": [
        "enum UserRole"
      ]
    }
  },
  {
    "id": "level-4-6-keyof-operator",
    "title": "No More Typo'd Column Names",
    "moduleName": "The Generic Alchemists",
    "difficulty": "medium",
    "xpAwarded": 175,
    "story": {
      "title": "Sam's Configurable Table Fails Silently",
      "narrative": "Sam's new admin table lets an operator pick which Event field to display in each column, but the getField helper behind it accepts any string as a field name, so a single typo like 'titel' just quietly renders undefined instead of failing anywhere obvious. Nobody notices until a real event's title column is blank in front of a customer. Priya wants getField's key parameter constrained to the actual keys of the object it's reading from, so a typo'd field name becomes a compile error the moment it's written, not a silent blank cell in production.",
      "realWorldContext": "Constraining a generic key parameter with keyof T guarantees the key genuinely exists on T, turning a silent runtime typo into an immediate compile-time error.",
      "taskDescription": "Make getField generic over T and K, constraining K to keyof T, and return T[K].",
      "previousOutcome": "UserRole is now a lean literal union. Now Sam's configurable admin table needs its field-lookup helper made typo-proof."
    },
    "playground": {
      "starterCode": "function getField(item, field) {\n  return item[field];\n}",
      "solutionCode": "function getField<T, K extends keyof T>(item: T, field: K): T[K] {\n  return item[field];\n}",
      "objectives": [
        "Add generic type parameters T and K to getField",
        "Constrain K to keyof T",
        "Type the return value as T[K]"
      ],
      "hints": [
        "K extends keyof T restricts field to an actual key that exists on T",
        "T[K] is an indexed access type representing exactly the value type stored at that key"
      ],
      "filesToEdit": [
        "get-field.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "K extends keyof T",
        "T[K]"
      ]
    }
  },
  {
    "id": "level-5-1-generic-react-component",
    "title": "One Card Component to Rule Them All",
    "moduleName": "The Frontend Convergence",
    "difficulty": "hard",
    "xpAwarded": 225,
    "story": {
      "title": "Sam Is Tired of Three Nearly Identical Cards",
      "narrative": "Sam's design system has EventCard, TicketCard, and UserCard, visually identical frames around different data. Alex wants one generic DataCard<T> component instead, so the layout logic lives in exactly one place and any future entity type gets the same card for free. This is the first time all your type-level work gets applied directly to a real React component, Alex says, so keep it strictly typed, no any anywhere. Get this component right, Alex says, and every future entity type gets the exact same reusable, type-safe card for free.",
      "realWorldContext": "A generic React component eliminates duplicated card layouts across entity types while keeping every prop fully type-checked.",
      "taskDescription": "Type DataCard's props with a generic parameter T for the item and a renderContent function.",
      "previousOutcome": "UserRole is now a lean literal union. Now Sam needs the three duplicated card components unified into one generic component."
    },
    "playground": {
      "starterCode": "function DataCard({ item, renderContent }) {\n  return renderContent(item);\n}",
      "solutionCode": "function DataCard<T>({ item, renderContent }: { item: T; renderContent: (item: T) => React.ReactNode }) {\n  return renderContent(item);\n}",
      "objectives": [
        "Add a generic type parameter T to DataCard",
        "Type renderContent as a function taking T and returning React.ReactNode"
      ],
      "hints": [
        "<T> goes directly after the function name, before the props parameter",
        "renderContent's signature is (item: T) => React.ReactNode"
      ],
      "filesToEdit": [
        "DataCard.tsx"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "DataCard<T>",
        "renderContent: (item: T) => React.ReactNode"
      ]
    }
  },
  {
    "id": "level-5-2-typed-api-responses",
    "title": "Trusting the Fetch Result",
    "moduleName": "The Frontend Convergence",
    "difficulty": "hard",
    "xpAwarded": 225,
    "story": {
      "title": "Taylor's API Can Now Fail Gracefully",
      "narrative": "Taylor upgraded the events API to return a proper error shape instead of just throwing, but the EventList component still assumes every fetch succeeds, and it crashed the moment Taylor tested the new error path. Taylor wants a generic ApiResponse<T> type representing both outcomes, so every component consuming this API is forced to handle failure instead of assuming happy-path only. Get this shape right, Taylor says, and every component that fetches from this endpoint is forced to handle both outcomes honestly.",
      "realWorldContext": "A generic success/error response wrapper forces every consumer of an API call to handle failure, not just assume the happy path.",
      "taskDescription": "Declare a generic ApiResponse<T> type with success and error variants.",
      "previousOutcome": "The generic DataCard component now renders every entity type. Now Taylor's upgraded API needs a properly typed response shape."
    },
    "playground": {
      "starterCode": "type ApiResponse<T> = {\n  data: T;\n};",
      "solutionCode": "type ApiResponse<T> =\n  | { success: true; data: T }\n  | { success: false; error: string };",
      "objectives": [
        "Model ApiResponse as a discriminated union of success and error",
        "Include a success: true branch with data and a success: false branch with error"
      ],
      "hints": [
        "This combines generics with the discriminated union pattern from Stage 3",
        "Both branches need a shared literal field, success, to narrow on"
      ],
      "filesToEdit": [
        "api-response.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "success: true; data: T",
        "success: false; error: string"
      ]
    }
  },
  {
    "id": "level-5-3-typed-forms",
    "title": "Wiring the Booking Form",
    "moduleName": "The Frontend Convergence",
    "difficulty": "hard",
    "xpAwarded": 225,
    "story": {
      "title": "Jordan Finds One Last Hole Before Launch",
      "narrative": "Jordan tests the booking form by submitting it half-filled on purpose, and to everyone's surprise it goes through anyway. The in-progress editing state is correctly typed as Partial<BookingInput> while the user is still filling things in, but nothing currently stops that same incomplete Partial state from reaching the submit handler directly. Alex wants the submit function's parameter type narrowed all the way to Required<BookingInput>, so an incomplete booking becomes an immediate compile error for the developer, not a confusing support ticket after launch.",
      "realWorldContext": "Gating a form's submit handler behind Required<T>, while editing state stays Partial<T>, blocks incomplete submissions at compile time rather than at runtime.",
      "taskDescription": "Type the submitBooking function's parameter as Required<BookingInput>.",
      "previousOutcome": "The ApiResponse union now models both success and failure. Jordan's last bug before launch is in the booking form's submit gate."
    },
    "playground": {
      "starterCode": "function submitBooking(input: Partial<BookingInput>) {\n  sendBookingRequest(input);\n}",
      "solutionCode": "function submitBooking(input: Required<BookingInput>) {\n  sendBookingRequest(input);\n}",
      "objectives": [
        "Change submitBooking's parameter type from Partial to Required"
      ],
      "hints": [
        "Required<T> is the opposite of Partial<T>: every field becomes mandatory",
        "Only the type wrapper needs to change here"
      ],
      "filesToEdit": [
        "booking-form.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "Required<BookingInput>"
      ],
      "forbiddenKeywords": [
        "Partial<BookingInput>"
      ]
    }
  },
  {
    "id": "level-5-4-nextjs-api-route",
    "title": "Shipping the Events Endpoint",
    "moduleName": "The Frontend Convergence",
    "difficulty": "hard",
    "xpAwarded": 225,
    "story": {
      "title": "Taylor Hands Off the Real Route",
      "narrative": "Taylor's ready to wire the actual Next.js API route into the app, but wants it returning exactly the ApiResponse<Event[]> shape the frontend already expects, nothing looser. This is the moment the backend and frontend typing finally meet in one place, Taylor says. Get the route handler's return type explicit, so the client-side ApiResponse narrowing you already wrote works against the real endpoint, not just a mock. Get the route's return type right here, Taylor says, and the client and server finally agree on exactly one shared shape.",
      "realWorldContext": "Explicitly typing a Next.js route handler's return value as ApiResponse<Event[]> is what makes the client's typed narrowing logic actually trustworthy in production.",
      "taskDescription": "Type the GET route handler to return an ApiResponse<Event[]>.",
      "previousOutcome": "The booking form's submit gate is airtight. Now Taylor needs the real Next.js events route wired to match the frontend's expected shape."
    },
    "playground": {
      "starterCode": "export async function GET() {\n  const events = await fetchEventsFromDb();\n  return Response.json({ data: events });\n}",
      "solutionCode": "export async function GET(): Promise<Response> {\n  const events: Event[] = await fetchEventsFromDb();\n  const body: ApiResponse<Event[]> = { success: true, data: events };\n  return Response.json(body);\n}",
      "objectives": [
        "Type events as Event[]",
        "Build the response body as an ApiResponse<Event[]>"
      ],
      "hints": [
        "The response body should match the ApiResponse union's success branch exactly",
        "success: true must be included alongside data"
      ],
      "filesToEdit": [
        "app/api/events/route.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "ApiResponse<Event[]>",
        "success: true"
      ]
    }
  },
  {
    "id": "level-5-5-launch-day",
    "title": "Launch Day",
    "moduleName": "The Frontend Convergence",
    "difficulty": "hard",
    "xpAwarded": 300,
    "story": {
      "title": "The Whole Team Watches the Deploy",
      "narrative": "Alex, Priya, Jordan, Morgan, Sam, and Taylor are all watching the same terminal. Every piece is in place: the domain model, the generic DataCard, the typed API response, the gated booking form. Priya has one last request before you ship: wire the EventList page to fetch through ApiResponse<Event[]>, narrow the result, and render successful data through DataCard, with zero any anywhere in the final file. This is the whole course, together, one last time. Every teammate who taught you something along the way is represented somewhere in this final file, Priya says, watching the build finish.",
      "realWorldContext": "This final integration proves that a domain model, a generic component, and a typed API response can compose into one real, production-style feature.",
      "taskDescription": "Narrow the ApiResponse in EventListPage and render successful data through DataCard.",
      "previousOutcome": "The Next.js route now returns the correctly typed ApiResponse. This is the final piece: wiring it all together for launch."
    },
    "playground": {
      "starterCode": "function EventListPage({ response }: { response: ApiResponse<Event[]> }) {\n  return <DataCard item={response.data} renderContent={(e) => e.title} />;\n}",
      "solutionCode": "function EventListPage({ response }: { response: ApiResponse<Event[]> }) {\n  if (!response.success) {\n    return <p>{response.error}</p>;\n  }\n  return (\n    <>\n      {response.data.map(event => (\n        <DataCard key={event.id} item={event} renderContent={(e) => e.title} />\n      ))}\n    </>\n  );\n}",
      "objectives": [
        "Check response.success before accessing data",
        "Render each event through DataCard using its id as the key"
      ],
      "hints": [
        "Narrow with an if (!response.success) check before touching response.data",
        "Map over response.data only inside the success branch"
      ],
      "filesToEdit": [
        "EventListPage.tsx"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "response.success",
        "response.data.map",
        "DataCard"
      ]
    }
  },
  {
    "id": "level-5-6-state-managers",
    "title": "Scaling the Kingdom's State",
    "moduleName": "The Frontend Convergence",
    "difficulty": "hard",
    "xpAwarded": 250,
    "story": {
      "title": "The Admin Dashboard Outgrows useState",
      "narrative": "The Kingdom is live and the admin dashboard is growing fast: filters, sorting, and a selected event all need to update together, and a handful of scattered useState calls have turned into a tangle Alex doesn't trust anymore. Someone dispatches an action typed as a loose string, mistypes SELCT_EVENT, and the dashboard silently does nothing. Alex wants the dashboard's actions modeled as a real discriminated union, the exact same pattern from Stage 3, now wired directly into a useReducer hook, so a mistyped action fails to compile instead of failing silently in front of an admin.",
      "realWorldContext": "Typing a useReducer's actions as a discriminated union brings the same compile-time safety from Stage 3's KingdomEvent modeling directly into React's state management.",
      "taskDescription": "Model DashboardAction as a discriminated union and fully type dashboardReducer's parameters and return value.",
      "previousOutcome": "Launch Day shipped successfully and the whole team watched the deploy. Now that the Kingdom is live, the admin dashboard's state management needs to scale with it."
    },
    "playground": {
      "starterCode": "function dashboardReducer(state, action) {\n  switch (action.type) {\n    case \"SELECT_EVENT\":\n      return { ...state, selectedEventId: action.id };\n    default:\n      return state;\n  }\n}",
      "solutionCode": "type DashboardAction =\n  | { type: \"SELECT_EVENT\"; id: string }\n  | { type: \"CLEAR_SELECTION\" };\n\nfunction dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {\n  switch (action.type) {\n    case \"SELECT_EVENT\":\n      return { ...state, selectedEventId: action.id };\n    case \"CLEAR_SELECTION\":\n      return { ...state, selectedEventId: undefined };\n    default:\n      return state;\n  }\n}",
      "objectives": [
        "Model DashboardAction as a discriminated union of at least two action shapes",
        "Type dashboardReducer's state and action parameters and its return value",
        "Handle both action variants explicitly in the switch"
      ],
      "hints": [
        "This combines the discriminated union pattern from Stage 3 directly with useReducer's action parameter",
        "Each action variant needs its own unique literal type value to narrow on"
      ],
      "filesToEdit": [
        "dashboard-reducer.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "type DashboardAction",
        "action: DashboardAction"
      ]
    }
  },
  {
    "id": "level-6-1-conditional-types",
    "title": "Conditional Types: Compile-time Routing",
    "moduleName": "Advanced Type Gymnastics",
    "difficulty": "hard",
    "xpAwarded": 200,
    "story": {
      "title": "Taylor's Loose API Payloads",
      "narrative": "The Kingdom has integrated an external webhook system. Depending on the action triggering the webhook, we receive either a full KingdomEvent payload or just a simple string containing the deleted event's ID. Taylor's initial pass returned any, causing unhandled runtime crashes when processing DELETED events. Alex wants you to construct a conditional type ResolvePayload that inspects the WebhookAction and returns either KingdomEvent or string, guaranteeing complete type safety at the compile-time gateway.",
      "realWorldContext": "Conditional types act like if/else statements for types, resolving to different types dynamically based on generic constraints.",
      "taskDescription": "Declare a conditional type ResolvePayload<T extends WebhookAction> that resolves to KingdomEvent for CREATED/UPDATED, and string for DELETED.",
      "previousOutcome": "The useReducer dashboard is fully type-safe. Now you are moving into advanced compilation type gymnastics to handle unpredictable external webhooks."
    },
    "playground": {
      "starterCode": "type WebhookAction = \"CREATED\" | \"UPDATED\" | \"DELETED\";\n\ninterface KingdomEvent {\n  id: string;\n  title: string;\n}\n\n// TODO: Complete the conditional type resolver\ntype ResolvePayload<T extends WebhookAction> = any;\n\nfunction processPayload<A extends WebhookAction>(action: A, data: any): ResolvePayload<A> {\n  return data as ResolvePayload<A>;\n}",
      "solutionCode": "type WebhookAction = \"CREATED\" | \"UPDATED\" | \"DELETED\";\n\ninterface KingdomEvent {\n  id: string;\n  title: string;\n}\n\ntype ResolvePayload<T extends WebhookAction> = T extends \"CREATED\" | \"UPDATED\"\n  ? KingdomEvent\n  : T extends \"DELETED\"\n    ? string\n    : never;\n\nfunction processPayload<A extends WebhookAction>(action: A, data: any): ResolvePayload<A> {\n  return data as ResolvePayload<A>;\n}",
      "objectives": [
        "Declare ResolvePayload generic over WebhookAction",
        "Route CREATED and UPDATED actions to KingdomEvent using extends checks",
        "Route DELETED action to string, and any other case to never"
      ],
      "hints": [
        "Use T extends 'CREATED' | 'UPDATED' ? KingdomEvent : ... syntax to nest conditional types."
      ],
      "filesToEdit": [
        "webhook-resolver.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "ResolvePayload<T extends WebhookAction>",
        "CREATED",
        "UPDATED",
        "DELETED"
      ]
    }
  },
  {
    "id": "level-6-2-template-literals",
    "title": "Template Literal Types: Safe Custom Events",
    "moduleName": "Advanced Type Gymnastics",
    "difficulty": "medium",
    "xpAwarded": 175,
    "story": {
      "title": "Sam's Dynamic Event Handlers",
      "narrative": "Sam is building a highly flexible UI event bridge for the Kingdom portal. Event names are dynamically generated by prefixing standard actions with 'on_'. For example, click becomes onclick, and hover becomes onhover. Because the keys are built at runtime, Sam typed the handlers as loose strings, but typos like 'on_clck' are passing through silently. Priya demands you use template literal types to enforce exact event patterns.",
      "realWorldContext": "Template literal types let you construct exact string schemas by combining literal values with generic variables, similar to ES6 template strings.",
      "taskDescription": "Construct the CustomEvent type using template literal string formatting based on BaseEvent.",
      "previousOutcome": "The webhook payload is fully typed. Now Sam needs help securing dynamic runtime event strings."
    },
    "playground": {
      "starterCode": "type BaseEvent = \"click\" | \"hover\" | \"submit\";\n\n// TODO: Make CustomEvent type match any of the base events prefixed with \"on_\"\ntype CustomEvent = string;\n\nfunction triggerEvent(event: CustomEvent) {\n  console.log(`Triggered: ${event}`);\n}",
      "solutionCode": "type BaseEvent = \"click\" | \"hover\" | \"submit\";\n\ntype CustomEvent = `on_${BaseEvent}`;\n\nfunction triggerEvent(event: CustomEvent) {\n  console.log(`Triggered: ${event}`);\n}",
      "objectives": [
        "Define CustomEvent using template literal string syntax",
        "Prefix all BaseEvent options with 'on_'"
      ],
      "hints": [
        "Use backticks `` around on_${BaseEvent} to dynamically generate all permutations."
      ],
      "filesToEdit": [
        "event-literals.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "type CustomEvent =",
        "on_${BaseEvent}"
      ]
    }
  },
  {
    "id": "level-6-3-mapped-and-infer",
    "title": "Mapped Types & infer: Schema Transformers",
    "moduleName": "Advanced Type Gymnastics",
    "difficulty": "hard",
    "xpAwarded": 225,
    "story": {
      "title": "Morgan's Nested Database Unpacking",
      "narrative": "Morgan wants to fetch database rows wrapped inside a generic DbResponse envelope. Right now, our database helpers have to manually declare what the nested data type looks like. Alex suggests using the infer keyword inside a conditional type to automatically extract the inner type. Additionally, Priya asks for a mapped type that guarantees every field on the returned response is strictly readonly.",
      "realWorldContext": "Mapped types iterate over keys of an existing type to construct a modified type, and infer allows unpacking generic parameters inside conditionals.",
      "taskDescription": "Declare UnpackResponse using infer, and design a custom Mapped Type to make properties readonly.",
      "previousOutcome": "Custom event prefixes are safely restricted. Now Morgan is ready to unlock advanced database transformers."
    },
    "playground": {
      "starterCode": "interface DbResponse<T> {\n  data: T;\n  status: number;\n}\n\n// TODO: Use 'infer' to extract T from DbResponse<T>\ntype UnpackResponse<R> = any;\n\n// TODO: Create a mapped type that makes all keys in T readonly\ntype ReadonlyResponse<T> = any;",
      "solutionCode": "interface DbResponse<T> {\n  data: T;\n  status: number;\n}\n\ntype UnpackResponse<R> = R extends DbResponse<infer T> ? T : never;\n\ntype ReadonlyResponse<T> = {\n  readonly [P in keyof T]: T[P];\n};",
      "objectives": [
        "Construct UnpackResponse using conditional extends and 'infer T'",
        "Design ReadonlyResponse using mapped type keys syntax '[P in keyof T]'",
        "Enforce readonly modifier for each property in the mapped type"
      ],
      "hints": [
        "For UnpackResponse, use R extends DbResponse<infer T> ? T : never.",
        "For ReadonlyResponse, use readonly [P in keyof T]: T[P]."
      ],
      "filesToEdit": [
        "schema-transformer.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "infer T",
        "readonly [",
        "in keyof T"
      ]
    }
  },
  {
    "id": "level-7-1-ambient-declarations",
    "title": "Ambient Declarations: Navigating Typeless Borders",
    "moduleName": "Production Tooling & Compilation",
    "difficulty": "medium",
    "xpAwarded": 175,
    "story": {
      "title": "Priya's Third-Party Analytics CDN",
      "narrative": "Priya loaded a third-party analytics script via a global CDN. Because the script runs globally outside of npm modules, TypeScript doesn't know the global window.KingdomAnalytics object exists. It flags window.KingdomAnalytics with a compiler red squiggle. Alex asks you to write an ambient global declaration extending the Window interface so that we can invoke trackregistration cleanly.",
      "realWorldContext": "Ambient declaration files (.d.ts) tell the compiler about types that exist at runtime in the global scope but lack standard module headers.",
      "taskDescription": "Write an ambient global declaration extending the Window interface to type-safe the KingdomAnalytics script.",
      "previousOutcome": "The database schema transformers are successfully operational. Now you must manage ambient global integrations."
    },
    "playground": {
      "starterCode": "// TODO: Declare global Window interface extension\n// so window.KingdomAnalytics.track(event, data) compiles cleanly\n\nfunction trackRegistration(eventId: string) {\n  window.KingdomAnalytics.track(\"registration\", { id: eventId });\n}",
      "solutionCode": "declare global {\n  interface Window {\n    KingdomAnalytics: {\n      track(event: string, data: Record<string, any>): void;\n    };\n  }\n}\n\nfunction trackRegistration(eventId: string) {\n  window.KingdomAnalytics.track(\"registration\", { id: eventId });\n}",
      "objectives": [
        "Declare a global block using 'declare global'",
        "Extend the Window interface inside the global scope",
        "Correctly type window.KingdomAnalytics with a track method"
      ],
      "hints": [
        "Place interface Window inside declare global { ... } to merge the definitions globally."
      ],
      "filesToEdit": [
        "ambient-analytics.d.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "declare global",
        "interface Window",
        "KingdomAnalytics",
        "track("
      ]
    }
  },
  {
    "id": "level-7-2-decorators",
    "title": "Decorators: Transforming Modern Classes",
    "moduleName": "Production Tooling & Compilation",
    "difficulty": "hard",
    "xpAwarded": 225,
    "story": {
      "title": "Morgan's Performance Audits",
      "narrative": "Morgan wants to trace and audit performance across the ticket reservation classes. Rather than adding logging lines to dozens of class methods, Taylor suggests writing a reusable Method Decorator named logMethod. Decorators let us intercept method invocations, execute telemetry, and print status cleanly before calling the original method.",
      "realWorldContext": "Decorators are functions that can annotate and modify classes, methods, accessor properties, or parameters at runtime.",
      "taskDescription": "Complete the logMethod method decorator to log the method name before executing its original logic.",
      "previousOutcome": "The global analytics script compilation is fixed. Now you are mastering ECMAScript method decorators."
    },
    "playground": {
      "starterCode": "// TODO: Complete the logMethod decorator definition\nfunction logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {\n  const original = descriptor.value;\n  // Override descriptor.value with a custom logging wrapper\n  return descriptor;\n}",
      "solutionCode": "function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {\n  const original = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`Calling ${propertyKey}`);\n    return original.apply(this, args);\n  };\n  return descriptor;\n}",
      "objectives": [
        "Intercept descriptor.value with a custom function wrapper",
        "Print a console log tracing the propertyKey name",
        "Invoke the original method using .apply or .call and return its result"
      ],
      "hints": [
        "Inside descriptor.value = function(...) { ... }, call original.apply(this, args)."
      ],
      "filesToEdit": [
        "auditor.ts"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "logMethod",
        "original.apply",
        "descriptor.value ="
      ]
    }
  },
  {
    "id": "level-7-3-monorepos",
    "title": "TypeScript Monorepos: Project References",
    "moduleName": "Production Tooling & Compilation",
    "difficulty": "hard",
    "xpAwarded": 250,
    "story": {
      "title": "Alex Refactors the Kingdom Workspace",
      "narrative": "The Kingdom repository is scaling rapidly. To prevent long build wait times, Alex decided to refactor our codebase into a Monorepo containing a shared utilities folder and a client application folder. To make the compiler compile each package independently and incrementally, Alex asks you to wire up TS Project References by linking the client's configuration directly to '../shared'.",
      "realWorldContext": "Project References allow TypeScript projects to depend on other TypeScript projects, enabling faster incremental compiles and clean boundaries.",
      "taskDescription": "Wire up TS Project References inside tsconfig.json to reference '../shared'.",
      "previousOutcome": "The logMethod decorator is perfectly configured. Now you are tackling the final, highest-order engineering challenge: building monorepos."
    },
    "playground": {
      "starterCode": "{\n  \"compilerOptions\": {\n    \"target\": \"ESNext\",\n    \"module\": \"NodeNext\"\n  },\n  // TODO: Reference the '../shared' directory using project references\n  \"references\": []\n}",
      "solutionCode": "{\n  \"compilerOptions\": {\n    \"target\": \"ESNext\",\n    \"module\": \"NodeNext\"\n  },\n  \"references\": [\n    { \"path\": \"../shared\" }\n  ]\n}",
      "objectives": [
        "Declare a 'references' array inside the tsconfig",
        "Provide an object with 'path' pointing to '../shared'"
      ],
      "hints": [
        "Use \"references\": [ { \"path\": \"../shared\" } ] syntax inside your configuration JSON."
      ],
      "filesToEdit": [
        "tsconfig.json"
      ]
    },
    "validation": {
      "requiredKeywords": [
        "references",
        "path",
        "../shared"
      ]
    }
  }
];

export const REFERENCE_LIBRARY: ReferenceEntry[] = [
  {
    id: "ref-primitives",
    term: "Primitives (string, number, boolean)",
    category: "Basics",
    shortExplanation: "The base building blocks of TypeScript: string (text), number (floating point values), and boolean (true/false).",
    syntax: "let ticketPrice: number = 50;\nlet attendeeName: string = 'Alex';\nlet isFree: boolean = false;",
    commonPitfalls: [
      "Mixing string representations with actual math numbers (e.g. adding '50' + '50' returns '5050').",
      "Confusing lowercase primitive types (string, number, boolean) with their uppercase Object wrapper types (String, Number, Boolean) which is almost always incorrect."
    ],
    relatedTerms: ["ref-inference"],
    seeAlsoLevels: ["level-1-1-primitives"]
  },
  {
    id: "ref-inference",
    term: "Type Inference",
    category: "Basics",
    shortExplanation: "TypeScript automatically figures out the type of a variable based on its initial value, so you do not have to write redundant annotations.",
    syntax: "let ticketPrice = 50; // Inferred as 'number'\nlet serviceFee = 5; // Inferred as 'number'",
    commonPitfalls: [
      "Annotating extremely simple, obvious variables (e.g. writing let count: number = 5; instead of just let count = 5;), which adds visual clutter.",
      "Thinking inference protects variables from changing types (it does, but without explicit types they are determined by assignment)."
    ],
    relatedTerms: ["ref-primitives"],
    seeAlsoLevels: ["level-1-2-inference"]
  },
  {
    id: "ref-arrays",
    term: "Typed Arrays",
    category: "Basics",
    shortExplanation: "Arrays containing elements of a single uniform type, preventing malformed lists from breaking runtime iterations.",
    syntax: "let attendeeRoster: string[] = [];\nlet listPrices: number[] = [10, 20, 30];",
    commonPitfalls: [
      "Accidentally inserting elements of different types (e.g., numbers into a string array), which might crash check-in loops.",
      "Declaring let elements = []; without any types, which results in elements being typed as any[] (unsafe!)."
    ],
    relatedTerms: ["ref-primitives"],
    seeAlsoLevels: ["level-1-3-arrays"]
  },
  {
    id: "ref-interfaces",
    term: "Interfaces",
    category: "Structural Types",
    shortExplanation: "Interfaces define named object shapes, creating reusable blueprints that guarantee objects contain required fields.",
    syntax: "interface Event {\n  title: string;\n  date: string;\n  capacity: number;\n}",
    commonPitfalls: [
      "Duplicating inline object shapes in multiple files instead of declaring a single named interface scroll.",
      "Forgetting to supply all required interface fields in initializers."
    ],
    relatedTerms: ["ref-type-aliases"],
    seeAlsoLevels: ["level-2-1-interfaces"]
  },
  {
    id: "ref-type-aliases",
    term: "Type Aliases",
    category: "Structural Types",
    shortExplanation: "Type aliases create a new, custom name for any type, including primitives, object shapes, and unions.",
    syntax: "type EventStatus = string;\ntype Coordinate = { x: number; y: number };",
    commonPitfalls: [
      "Using interfaces when type aliases are needed (e.g., naming unions or primitive wrappers which interfaces cannot do).",
      "Overusing aliases for basic types, which can make debugging hover tooltips harder to read."
    ],
    relatedTerms: ["ref-interfaces"],
    seeAlsoLevels: ["level-2-2-type-aliases"]
  },
  {
    id: "ref-unions",
    term: "Union Types",
    category: "Advanced Types",
    shortExplanation: "Unions allow a value to be one of several distinct types, separated by the pipe (|) operator.",
    syntax: "type KingdomEvent = ConcertEvent | WorkshopEvent | MeetupEvent;",
    commonPitfalls: [
      "Accessing a field unique to only one of the union members before narrowing the type, causing compilation errors.",
      "Creating extremely broad unions that make reasoning about code branches difficult."
    ],
    relatedTerms: ["ref-narrowing"],
    seeAlsoLevels: ["level-3-1-unions"]
  },
  {
    id: "ref-narrowing",
    term: "Type Narrowing",
    category: "Advanced Types",
    shortExplanation: "Performing runtime checks (using typeof, properties, or if blocks) so TypeScript can safely reveal variant-specific fields.",
    syntax: "if (event.kind === 'workshop') {\n  console.log(event.instructor);\n}",
    commonPitfalls: [
      "Assuming TypeScript knows which branch you're in without writing explicit runtime check code.",
      "Writing logic that bypasses typeguards entirely using type assertions."
    ],
    relatedTerms: ["ref-unions"],
    seeAlsoLevels: ["level-3-3-narrowing"]
  },
  {
    id: "ref-generics",
    term: "Generics",
    category: "Advanced Types",
    shortExplanation: "Generics act as templates, letting functions or components accept type parameters so they can process multiple types with high safety.",
    syntax: "function findById<T>(items: T[], id: string): T | undefined {\n  return items.find(item => item.id === id);\n}",
    commonPitfalls: [
      "Creating unconstrained generics (e.g., accessing item.id inside findById<T> without constraining T extends { id: string }), causing compile crashes.",
      "Using generics for simple single-type functions where static types are cleaner."
    ],
    relatedTerms: ["ref-utility-types"],
    seeAlsoLevels: ["level-4-1-generics"]
  }
];

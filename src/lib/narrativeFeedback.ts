
export function formatValidationError(
  error: string,
  characterName: string,
): string {
  if (error.startsWith("Missing required")) {
    const match = error.match(/"([^"]+)"/);
    const keyword = match?.[1] ?? "the required type";
    return `${characterName} says: the compiler still can't find \`${keyword}\` — add it to your code.`;
  }
  if (error.startsWith("Forbidden keyword")) {
    const match = error.match(/"([^"]+)"/);
    const keyword = match?.[1] ?? "that keyword";
    return `${characterName} flags this: \`${keyword}\` shouldn't be here — remove it to pass review.`;
  }
  return `${characterName} says: ${error}`;
}

export interface PredictionQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export const PREDICTION_QUESTIONS: Record<string, PredictionQuestion> = {
  "level-0-1-bootstrap": {
    question: "Why does TypeScript go in `devDependencies` and not `dependencies`?",
    options: [
      "Because TypeScript is only needed during development and build time, not at runtime",
      "Because devDependencies are installed faster",
      "Because dependencies cannot contain compilers",
    ],
    correctAnswerIndex: 0,
    explanation:
      "TypeScript compiles your code to JavaScript before deployment. The runtime only needs the compiled JS, so TypeScript stays in devDependencies to keep production bundles lean.",
  },
  "level-0-2-tsconfig": {
    question: "What does enabling `strict: true` in tsconfig.json actually do?",
    options: [
      "It makes the compiler run slower on purpose",
      "It activates a bundle of safety checks including null safety and no implicit any",
      "It prevents you from using any third-party libraries",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Strict mode is a meta-flag that enables noImplicitAny, strictNullChecks, strictFunctionTypes, and more — catching entire categories of bugs at compile time.",
  },
  "level-1-1-primitives": {
    question: "What happens if you assign a string to a variable typed as `number`?",
    options: [
      "JavaScript silently converts it, TypeScript allows it",
      "TypeScript raises a compile-time error: Type 'string' is not assignable to type 'number'",
      "The variable automatically becomes a string type",
    ],
    correctAnswerIndex: 1,
    explanation:
      "TypeScript's type checker catches type mismatches before the code ever runs, preventing runtime bugs like '120' + 120 = '120120'.",
  },
  "level-1-2-inference": {
    question: "When should you explicitly annotate a variable type vs. letting inference handle it?",
    options: [
      "Always annotate every variable for maximum safety",
      "Annotate when the type isn't obvious from the initial value; let inference handle obvious cases",
      "Never annotate — inference is always sufficient",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Type inference handles obvious cases like `let count = 0`. You should annotate when the type isn't clear (e.g., function parameters, complex return types, or when the initial value doesn't reflect the intended type).",
  },
  "level-2-1-interfaces": {
    question: "What's the main advantage of an `interface` over an inline object type?",
    options: [
      "Interfaces run faster at runtime",
      "Interfaces are reusable, named, and support declaration merging",
      "Interfaces allow you to skip type checking entirely",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Interfaces create named, reusable blueprints. They can be extended, merged across files, and give you readable error messages that reference the interface name.",
  },
  "level-3-1-unions": {
    question: "What does `ConcertEvent | WorkshopEvent` tell TypeScript?",
    options: [
      "The value must be both types at once",
      "The value can be either ConcertEvent OR WorkshopEvent",
      "The value is always a string",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A union type (A | B) means the value can legitimately be one shape or another — exactly like Evans's mixed API response.",
  },
  "level-3-3-narrowing": {
    question: "After `if (event.kind === 'workshop')`, what does TypeScript know about `event` inside the block?",
    options: [
      "It knows event is still the full union type",
      "It narrows event to the WorkshopEvent variant, unlocking workshop-specific fields",
      "It throws an error because narrowing is not allowed",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Type narrowing is TypeScript's superpower: after a runtime check, the compiler automatically restricts the type to the matching branch, giving you safe access to variant-specific properties.",
  },
  "level-3-4-discriminated-unions": {
    question: "What makes a discriminated union safe to switch on?",
    options: [
      "All variants share a literal-typed field like `kind: 'workshop'`",
      "Every interface has the same number of properties",
      "You cast everything to `any` first",
    ],
    correctAnswerIndex: 0,
    explanation:
      "A shared literal field lets TypeScript narrow each branch and catch forgotten cases at compile time.",
  },
  "level-4-1-generics": {
    question: "Why use `<T>` in a function instead of `any`?",
    options: [
      "Generics are shorter to type",
      "Generics preserve the exact input type through to the return type",
      "Generics run faster at runtime",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Generics let you write reusable code while keeping full type safety — the return type follows whatever you pass in.",
  },
  "level-4-2-generic-constraints": {
    question: "What does `<T extends { id: string }>` guarantee?",
    options: [
      "That T can only be a string",
      "That whatever T is, it will always have an `id` property of type string",
      "That T must extend a class called id",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Constraints limit what a generic can be, so you can safely access properties like `item.id` inside the function body without compiler errors.",
  },
  "level-4-3-pick-omit-partial": {
    question: "What does `Pick<Event, 'title' | 'date'>` produce?",
    options: [
      "A new type with only `title` and `date` from Event",
      "A type that removes `title` and `date` from Event",
      "A type that makes all Event fields optional",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Pick extracts a subset of properties from an existing type, creating a narrower shape — perfect for update forms or API response trimming.",
  },
  "level-5-1-generic-react-component": {
    question: "Why is `items: any[]` dangerous in a React list component?",
    options: [
      "It makes the component render slower",
      "It disables type checking for items and onSelect, allowing runtime crashes",
      "It prevents the component from being styled with Tailwind",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Using `any[]` turns off the compiler's safety net. A generic `<T>` prop keeps the component reusable while guaranteeing that `onSelect` receives the exact same type as the list items.",
  },
  "level-9-1-branded-types": {
    question: "Why brand a type like `type UserId = string & { __brand: 'UserId' }`?",
    options: [
      "To make the string look fancier in error messages",
      "To prevent a UserId from being accidentally passed where an EventId is expected, even though both are strings",
      "To make the string run faster at runtime",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Branded types use a phantom property to make structurally identical types distinct to the compiler, preventing dangerous mix-ups between same-shaped IDs.",
  },
};

export function getPredictionQuestion(levelId: string): PredictionQuestion | null {
  return PREDICTION_QUESTIONS[levelId] ?? null;
}

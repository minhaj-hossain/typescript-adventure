import { CharacterId } from "../data/characters";

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
};

export function getPredictionQuestion(levelId: string): PredictionQuestion | null {
  return PREDICTION_QUESTIONS[levelId] ?? null;
}

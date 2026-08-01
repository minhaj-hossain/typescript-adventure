import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client lazily to avoid crashing if GEMINI_API_KEY is missing
let ai: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY environment variable is required. Please set it in your environment.",
      );
    }
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
}

export async function POST(req: NextRequest) {
  try {
    const { error, code } = await req.json();

    if (!error || typeof error !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'error' field." },
        { status: 400 },
      );
    }

    const client = getGeminiClient();
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are a Senior TypeScript Educator. Explain this TypeScript compiler error in plain, helpful English:
Error: ${error}

Context Code:
\`\`\`typescript
${code || "No context code provided"}
\`\`\`

Explain:
1. What happened in clear, beginner-friendly terms.
2. Why it happened (the core concept under the hood).
3. How to fix it (with a very short, clean code correction).
Keep it concise, friendly, and educational.`,
    });

    return NextResponse.json({ explanation: response.text });
  } catch (err: unknown) {
    console.error("Gemini explain-error failed:", err);
    const message =
      err instanceof Error ? err.message : "Failed to generate explanation from Gemini.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
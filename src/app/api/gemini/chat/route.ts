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

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages?: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Missing or invalid 'messages' array." },
        { status: 400 },
      );
    }

    const client = getGeminiClient();
    const chat = client.chats.create({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: `You are the TypeScript Adventure Oracle, a helpful, encouraging, and witty senior educator who helps Type Wizards master TypeScript.
The learner is rebuilding the Event Management Kingdom.
Answer their questions about TypeScript syntax, type theory, best practices, or their code in a highly pedagogical way.
Never give them direct copy-paste answers to the challenges unless they are stuck and explicitly ask for the solution. Instead, guide them with concepts and analogies.
Use markdown for elegant code formatting, tables, and callouts.`,
      },
    });

    // Send the latest message
    const latestMessage = messages[messages.length - 1];
    const response = await chat.sendMessage({ message: latestMessage.text });

    return NextResponse.json({ text: response.text });
  } catch (err: unknown) {
    console.error("Gemini chat failed:", err);
    const message =
      err instanceof Error ? err.message : "Oracle failed to respond.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini API client lazily to avoid crashing if GEMINI_API_KEY is missing on startup
  let ai: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
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

  // API Route for Error Explanation
  app.post("/api/gemini/explain-error", async (req, res) => {
    const { error, code } = req.body;
    try {
      const client = getGeminiClient();
      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
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

      res.json({ explanation: response.text });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message || "Failed to generate explanation from Gemini." });
    }
  });

  // API Route for AI Oracle Chat
  app.post("/api/gemini/chat", async (req, res) => {
    const { messages } = req.body; // array of { role: 'user'|'model', text: string }
    try {
      const client = getGeminiClient();
      const chat = client.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `You are the TypeScript Adventure Oracle, a helpful, encouraging, and witty senior educator who helps Type Wizards master TypeScript.
The learner is rebuilding the Event Management Kingdom.
Answer their questions about TypeScript syntax, type theory, best practices, or their code in a highly pedagogical way.
Never give them direct copy-paste answers to the challenges unless they are stuck and explicitly ask for the solution. Instead, guide them with concepts and analogies.
Use markdown for elegant code formatting, tables, and callouts.`
        }
      });

      // Send the latest message (or feed the history to the model if we want, but simple chat.sendMessage works wonderfully)
      const latestMessage = messages[messages.length - 1];
      const response = await chat.sendMessage({ message: latestMessage.text });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message || "Oracle failed to respond." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

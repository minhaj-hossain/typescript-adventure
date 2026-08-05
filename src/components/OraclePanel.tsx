"use client";

import { useState } from "react";
import { Sparkles, Send, X, Bot, User, Loader2 } from "lucide-react";

interface ChatMsg {
  sender: "user" | "oracle";
  text: string;
}

interface OraclePanelProps {
  isOpen: boolean;
  onClose: () => void;
  levelTitle: string;
  userCode: string;
  lastError?: string;
}

export default function OraclePanel({
  isOpen,
  onClose,
  levelTitle,
  userCode,
  lastError,
}: OraclePanelProps) {
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      sender: "oracle",
      text: `Greetings Developer! I am Minhaj, your Senior Architect Mentor. How can I help you with **${levelTitle}**?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    const newMsgs: ChatMsg[] = [...messages, { sender: "user", text: userText }];
    setMessages(newMsgs);
    setIsLoading(true);

    try {
      const payloadMessages = newMsgs.map((m) => ({
        role: m.sender === "user" ? ("user" as const) : ("model" as const),
        text: m.text,
      }));

      // Append code and error context to prompt
      const contextPrompt = `Context: Level "${levelTitle}".\nUser Code:\n\`\`\`ts\n${userCode}\n\`\`\`\n${
        lastError ? `Last Error: ${lastError}\n` : ""
      }\nQuestion: ${userText}`;

      payloadMessages[payloadMessages.length - 1].text = contextPrompt;

      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      const data = await res.json();
      if (data.text) {
        setMessages((prev) => [...prev, { sender: "oracle", text: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "oracle",
            text: data.error || "Sorry, I couldn't reach the AI Mentor right now.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "oracle",
          text: "Network error trying to contact the Oracle.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col font-sans">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100">AI Oracle Mentor</h3>
            <p className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
              {levelTitle}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start space-x-2.5 ${
              msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === "user"
                  ? "bg-purple-500/20 border border-purple-500/30 text-purple-300"
                  : "bg-sky-500/20 border border-sky-500/30 text-sky-300"
              }`}
            >
              {msg.sender === "user" ? (
                <User className="w-3.5 h-3.5" />
              ) : (
                <Bot className="w-3.5 h-3.5" />
              )}
            </div>
            <div
              className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${
                msg.sender === "user"
                  ? "bg-purple-600/20 border border-purple-500/30 text-purple-100 rounded-tr-none"
                  : "bg-slate-800 border border-slate-700/60 text-slate-200 rounded-tl-none whitespace-pre-wrap"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 text-slate-400 text-xs">
            <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
            <span>Minhaj is thinking...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-slate-800 bg-slate-950">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question or request a hint..."
            className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

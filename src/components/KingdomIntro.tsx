"use client";

import { useState } from "react";
import { CHARACTERS } from "../data/characters";
import { Sparkles, ArrowRight } from "lucide-react";

const INTRO_SLIDES = [
  {
    title: "Welcome to the Event Management Kingdom",
    body: "You're the new developer on the team. The Kingdom's event platform is being rebuilt in TypeScript — and every bug you fix makes the codebase safer for everyone.",
    emoji: "🏰",
  },
  {
    title: "Meet Your Team",
    body: "Minhaj (Senior Engineer), Tasnim (Type Architect), Jordan (Security), and Evans (Backend) will guide you through real production scenarios — code reviews, API upgrades, and launch-day deploys.",
    emoji: "👥",
  },
  {
    title: "How the Quest Works",
    body: "Read the story → write TypeScript in the editor → verify your code → earn XP and unlock the next level. Each lesson builds on the last, just like a real sprint.",
    emoji: "⚡",
  },
];

interface KingdomIntroProps {
  onComplete: () => void;
}

export default function KingdomIntro({ onComplete }: KingdomIntroProps) {
  const [slide, setSlide] = useState(0);
  const current = INTRO_SLIDES[slide];
  const isLast = slide === INTRO_SLIDES.length - 1;

  const handleNext = () => {
    if (isLast) {
      localStorage.setItem("kingdom_intro_seen", "true");
      onComplete();
    } else {
      setSlide((s) => s + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md">
      <div className="w-full max-w-lg bg-surface-container border border-outline-variant/40 rounded-2xl shadow-2xl overflow-hidden glow-primary">
        <div className="p-8 text-center space-y-4">
          <div className="text-5xl">{current.emoji}</div>
          <h2 className="text-xl font-extrabold text-on-surface">{current.title}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">{current.body}</p>

          {slide === 1 && (
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {Object.values(CHARACTERS)
                .slice(0, 4)
                .map((c) => (
                  <span
                    key={c.id}
                    className={`text-xs px-2.5 py-1 rounded-full border ${c.bgColor} ${c.color}`}
                  >
                    {c.emoji} {c.name}
                  </span>
                ))}
            </div>
          )}

          <div className="flex justify-center gap-1.5 pt-2">
            {INTRO_SLIDES.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === slide ? "bg-primary" : "bg-outline-variant/40"}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 flex justify-between items-center">
          <button
            onClick={() => {
              localStorage.setItem("kingdom_intro_seen", "true");
              onComplete();
            }}
            className="text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            Skip intro
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-sm cursor-pointer"
          >
            {isLast ? "Begin the Quest" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function shouldShowKingdomIntro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("kingdom_intro_seen") !== "true";
}

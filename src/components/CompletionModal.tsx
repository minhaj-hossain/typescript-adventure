"use client";

import { X, Zap, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Level, Stage } from "../types";
import { CHECKPOINT_LEVEL_IDS } from "../data/characters";
import { CHECKPOINT_BADGES } from "../data/stageMeta";
import Confetti from "./Confetti";

interface CompletionModalProps {
  level: Level;
  stage: Stage | undefined;
  nextLevel: Level | null;
  onClose: () => void;
  onNext: () => void;
  playChime: (type: "success" | "error" | "click") => void;
}

export default function CompletionModal({
  level,
  stage,
  nextLevel,
  onClose,
  onNext,
}: CompletionModalProps) {
  const isCheckpoint = CHECKPOINT_LEVEL_IDS.has(level.id);
  const checkpointBadge = CHECKPOINT_BADGES[level.id];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-fadeIn">
      <Confetti count={80} />
      <div className="p-8 bg-surface-container border border-outline-variant/40 rounded-2xl max-w-md w-full flex flex-col items-center text-center gap-5 shadow-2xl glow-primary relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(164,201,255,0.25)] ${
            isCheckpoint
              ? "bg-amber-500/10 border border-amber-500/30 text-amber-400"
              : "bg-primary/10 border border-primary/30 text-primary"
          }`}
        >
          {isCheckpoint ? <Award className="w-9 h-9 animate-bounce" /> : <CheckCircle2 className="w-9 h-9 animate-bounce" />}
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            {isCheckpoint ? "Chapter Complete" : "Type Safety Verified"}
          </span>
          <h3 className="text-2xl font-extrabold text-on-surface font-sans">
            {isCheckpoint ? `${level.title} — Done!` : "Level Completed!"}
          </h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {isCheckpoint ? (
              <>
                The whole team is watching. You proved{" "}
                <strong className="text-primary">{level.story.taskDescription.slice(0, 80)}...</strong>
              </>
            ) : (
              <>
                Great job! You mastered <strong className="text-primary">{level.title}</strong>
                {stage && <> in {stage.title.replace(/^Stage \d+ — /, "")}</>}.
              </>
            )}
          </p>
          {checkpointBadge && (
            <p className="text-xs text-amber-400 font-bold">
              🏅 Badge unlocked: {checkpointBadge.badgeName}
            </p>
          )}
        </div>

        {nextLevel && (
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 w-full text-left">
            <span className="text-[10px] font-mono font-bold uppercase text-secondary tracking-wider">
              Up Next
            </span>
            <p className="text-xs text-on-surface font-semibold mt-1">{nextLevel.title}</p>
            <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed line-clamp-2">
              {nextLevel.story.previousOutcome}
            </p>
          </div>
        )}

        <div className="flex items-center justify-center space-x-2 bg-tertiary/10 border border-tertiary/30 px-4 py-2 rounded-xl text-tertiary font-bold text-sm w-full">
          <Zap className="w-4 h-4 fill-tertiary" />
          <span>+{level.xpAwarded} XP Earned</span>
        </div>

        <div className="flex items-center space-x-3 w-full pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-xl font-bold text-xs border border-outline-variant/30 cursor-pointer"
          >
            Review Code
          </button>
          <button
            onClick={onNext}
            className="flex-1 py-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-xs shadow-lg hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>{nextLevel ? "Next Level" : "Back to Academy"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

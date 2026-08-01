"use client";

import { X, Sparkles, Award } from "lucide-react";
import { StageMeta } from "../data/stageMeta";

interface StageCinematicModalProps {
  type: "unlock" | "complete";
  stageTitle: string;
  meta: StageMeta;
  onClose: () => void;
}

export default function StageCinematicModal({
  type,
  stageTitle,
  meta,
  onClose,
}: StageCinematicModalProps) {
  const isComplete = type === "complete";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md">
      <div className="p-8 bg-surface-container border border-outline-variant/40 rounded-2xl max-w-md w-full flex flex-col items-center text-center gap-5 shadow-2xl glow-primary relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
            isComplete
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
              : "bg-primary/10 border border-primary/30 text-primary"
          }`}
        >
          {isComplete ? <Award className="w-9 h-9" /> : <Sparkles className="w-9 h-9" />}
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            {isComplete ? "Stage Complete" : "New Chapter Unlocked"}
          </span>
          <h3 className="text-xl font-extrabold text-on-surface">{stageTitle}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {isComplete ? meta.completionBeat : meta.storyHook}
          </p>
          {isComplete && (
            <p className="text-xs text-amber-400 font-bold">🏅 {meta.badgeName}</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-sm cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

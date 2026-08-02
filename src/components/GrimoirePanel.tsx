"use client";

import { REFERENCE_LIBRARY } from "../curriculum";
import { GRIMOIRE_ILLUSTRATIONS } from "../data/illustrations";
import { BookOpen, X } from "lucide-react";

interface GrimoirePanelProps {
  levelId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GrimoirePanel({ levelId, isOpen, onClose }: GrimoirePanelProps) {
  if (!isOpen) return null;

  const references = REFERENCE_LIBRARY.filter((entry) =>
    entry.seeAlsoLevels.includes(levelId),
  );

  const illustrationKeys = Object.keys(GRIMOIRE_ILLUSTRATIONS).slice(0, 2);

  return (
    <div className="p-4 rounded-xl bg-surface-container border border-secondary/30 space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Grimoire Reference
        </span>
        <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface cursor-pointer">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {references.length > 0 ? (
        references.map((ref) => (
          <div key={ref.id} className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 space-y-1.5">
            <h5 className="font-bold text-on-surface text-xs">{ref.term}</h5>
            <p className="text-on-surface-variant leading-relaxed">{ref.shortExplanation}</p>
            <pre className="p-2 rounded bg-surface-container-lowest text-emerald-400/90 font-mono text-[10px] overflow-x-auto whitespace-pre-wrap">
              {ref.syntax}
            </pre>
            {ref.commonPitfalls.length > 0 && (
              <p className="text-amber-400/90 text-[10px]">
                ⚠ {ref.commonPitfalls[0]}
              </p>
            )}
          </div>
        ))
      ) : (
        <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 space-y-2">
          <p className="text-on-surface-variant text-[11px] leading-relaxed">
            No specific grimoire entry for this level yet. But the arcane library is vast — explore these fundamentals:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {REFERENCE_LIBRARY.slice(0, 3).map((ref) => (
              <span
                key={ref.id}
                className="text-[9px] font-mono font-bold text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded"
              >
                {ref.term}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-on-surface-variant/70">
            💡 Check hints or the solution guide for level-specific guidance.
          </p>
        </div>
      )}

      {illustrationKeys.length > 0 && (
        <div className="space-y-2 pt-1 border-t border-outline-variant/20">
          <span className="font-mono text-[10px] font-bold uppercase text-tertiary">
            Buggy vs Safe Patterns
          </span>
          {illustrationKeys.map((key) => {
            const ill = GRIMOIRE_ILLUSTRATIONS[key];
            return (
              <div key={key} className="space-y-1">
                <p className="text-[10px] text-rose-400 font-bold">{ill.buggyTitle}</p>
                <p className="text-[10px] text-emerald-400 font-bold">{ill.safeTitle}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

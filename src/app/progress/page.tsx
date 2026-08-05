"use client";

import { useGame } from "../../context/GameContext";
import { STAGES, LEVELS } from "../../curriculum";
import { Award } from "lucide-react";

export default function ProgressPage() {
  const { xp, unlockedBadges, levelProgress, wizardTitle } = useGame();

  const completedCount = Object.values(levelProgress).filter((l) => l.completed).length;
  const totalCount = LEVELS.length;
  const percent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
            {wizardTitle}
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Player Progress Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Total XP</span>
            <span className="text-base font-black text-amber-400 font-mono">{xp} XP</span>
          </div>
          <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Completion</span>
            <span className="text-base font-black text-sky-400 font-mono">{percent}%</span>
          </div>
        </div>
      </div>

      {/* Badges Earned */}
      <div className="space-y-3 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
        <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Unlocked Badges ({unlockedBadges.length})</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {unlockedBadges.length > 0 ? (
            unlockedBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold"
              >
                🏅 {badge}
              </span>
            ))
          ) : (
            <p className="text-xs text-slate-500 font-mono">No badges earned yet. Complete stage checkpoints to unlock!</p>
          )}
        </div>
      </div>

      {/* Stage Breakdown */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Stage Breakdown</h3>
        <div className="space-y-3">
          {STAGES.map((stage) => {
            const stageLevels = LEVELS.filter((l) => stage.levelIds.includes(l.id));
            const stageCompleted = stageLevels.filter((l) => levelProgress[l.id]?.completed).length;

            return (
              <div key={stage.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-200">{stage.title}</h4>
                  <span className="text-xs font-mono text-slate-400">
                    {stageCompleted}/{stageLevels.length} Done
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all"
                    style={{ width: `${Math.round((stageCompleted / stageLevels.length) * 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

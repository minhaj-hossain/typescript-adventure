import React, { useState } from "react";
import {
  X,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";
import { Level, Stage } from "../../types";
import { StoryViewer } from "./StoryViewer";

interface LevelModalProps {
  level: Level;
  stage?: Stage;
  isUnlocked: boolean;
  isCompleted: boolean;
  onClose: () => void;
  onStartPlayground: (levelId: string) => void;
}

export const LevelModal: React.FC<LevelModalProps> = ({
  level,
  stage,
  isUnlocked,
  isCompleted,
  onClose,
  onStartPlayground,
}) => {
  const [activeTab, setActiveTab] = useState<"story" | "enterprise" | "task" | "hints">("story");
  const [showSolution, setShowSolution] = useState(false);

  const getDifficultyBadge = (diff: Level["difficulty"]) => {
    switch (diff) {
      case "onboarding":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
      case "easy":
        return "bg-primary/10 text-primary border-primary/30";
      case "medium":
        return "bg-tertiary/10 text-tertiary border-tertiary/30";
      case "hard":
        return "bg-rose-500/10 text-rose-300 border-rose-500/30";
      default:
        return "bg-surface-container-highest text-on-surface-variant border-outline-variant";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container border border-outline-variant/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col glow-primary">
        {/* Header */}
        <div className="p-6 bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between">
          <div className="space-y-2 pr-6">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              {stage && (
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                  {stage.title}
                </span>
              )}
              <span
                className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border capitalize ${getDifficultyBadge(
                  level.difficulty
                )}`}
              >
                {level.difficulty}
              </span>
              {isCompleted && (
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Completed
                </span>
              )}
            </div>
            <h2 className="text-2xl font-extrabold text-on-surface tracking-tight font-sans">
              {level.title}
            </h2>
            <p className="text-xs text-on-surface-variant font-mono">{level.moduleName}</p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="flex items-center space-x-1.5 bg-tertiary/10 border border-tertiary/30 px-3.5 py-1.5 rounded-xl text-tertiary font-bold text-sm">
              <Zap className="w-4 h-4 text-tertiary fill-tertiary" />
              <span>+{level.xpAwarded} XP</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-on-surface-variant hover:text-on-surface bg-surface-container-high hover:bg-surface-container-highest rounded-xl transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1 px-6 border-b border-outline-variant/30 bg-surface-container-low/60 text-sm font-semibold text-on-surface-variant overflow-x-auto">
          <button
            onClick={() => setActiveTab("story")}
            className={`flex items-center space-x-2 py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "story"
                ? "border-primary text-primary font-bold"
                : "border-transparent hover:text-on-surface"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Scenario & Story</span>
          </button>

          <button
            onClick={() => setActiveTab("enterprise")}
            className={`flex items-center space-x-2 py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "enterprise"
                ? "border-primary text-primary font-bold"
                : "border-transparent hover:text-on-surface"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Enterprise Context</span>
          </button>

          <button
            onClick={() => setActiveTab("task")}
            className={`flex items-center space-x-2 py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "task"
                ? "border-primary text-primary font-bold"
                : "border-transparent hover:text-on-surface"
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Task & Objectives</span>
          </button>

          <button
            onClick={() => setActiveTab("hints")}
            className={`flex items-center space-x-2 py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "hints"
                ? "border-primary text-primary font-bold"
                : "border-transparent hover:text-on-surface"
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Hints & Solution</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 text-on-surface-variant text-sm space-y-6">
          {activeTab === "story" && <StoryViewer story={level.story} />}

          {activeTab === "enterprise" && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-base">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span>Real-World Production Impact</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {level.story.realWorldContext}
                </p>
              </div>

              {(level.reactConnection || level.nextjsConnection) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {level.reactConnection && (
                    <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/20 space-y-2">
                      <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                        React Ecosystem Impact
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {level.reactConnection}
                      </p>
                    </div>
                  )}
                  {level.nextjsConnection && (
                    <div className="p-5 rounded-2xl bg-surface-container-low border border-secondary/20 space-y-2">
                      <h4 className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
                        Next.js Architecture
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {level.nextjsConnection}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {level.reflection && (
                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                  <h4 className="font-bold text-on-surface text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-tertiary" /> Architectural Takeaways
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
                      <span className="font-mono font-bold text-rose-400 block mb-1">Problem</span>
                      <p className="text-on-surface-variant">{level.reflection.problem}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
                      <span className="font-mono font-bold text-emerald-400 block mb-1">Solution</span>
                      <p className="text-on-surface-variant">{level.reflection.solution}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
                      <span className="font-mono font-bold text-primary block mb-1">When To Use</span>
                      <p className="text-on-surface-variant">{level.reflection.whenToUse}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "task" && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                <h4 className="font-bold text-on-surface text-base flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Task Statement</span>
                </h4>
                <p className="text-on-surface leading-relaxed text-sm font-medium">
                  {level.story.taskDescription}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                <h4 className="font-semibold text-on-surface text-sm">Target Objectives</h4>
                <ul className="space-y-2.5">
                  {level.playground.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs text-on-surface-variant">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {level.validation.requiredKeywords && level.validation.requiredKeywords.length > 0 && (
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <span className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider block">
                    Required Code Keywords / Symbols
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {level.validation.requiredKeywords.map((kw, i) => (
                      <code
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/40 text-primary text-xs font-mono"
                      >
                        {kw}
                      </code>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "hints" && (
            <div className="space-y-5">
              <div className="space-y-3">
                <h4 className="font-bold text-on-surface text-sm flex items-center space-x-2">
                  <Lightbulb className="w-4 h-4 text-tertiary" />
                  <span>Guided Hints</span>
                </h4>
                {level.playground.hints && level.playground.hints.length > 0 ? (
                  <div className="space-y-2.5">
                    {level.playground.hints.map((hint, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-surface-container-low border border-tertiary/20 text-on-surface-variant text-xs leading-relaxed flex items-start space-x-2.5"
                      >
                        <span className="font-mono font-bold text-tertiary shrink-0">Hint #{idx + 1}:</span>
                        <span>{hint}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-on-surface-variant/70 italic">No hints required for this challenge.</p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-secondary" /> Reference Solution
                  </span>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="text-xs text-primary hover:text-primary/80 font-bold underline cursor-pointer"
                  >
                    {showSolution ? "Hide Reference Solution" : "Reveal Reference Solution"}
                  </button>
                </div>

                {showSolution && (
                  <pre className="p-4 rounded-xl bg-surface-container border border-outline-variant/30 text-emerald-400 text-xs font-mono overflow-x-auto">
                    {level.playground.solutionCode}
                  </pre>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between">
          <div className="text-xs text-on-surface-variant font-mono flex items-center space-x-2">
            <Layers className="w-4 h-4 text-outline" />
            <span>Module: {level.moduleName}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-on-surface-variant hover:text-on-surface bg-surface-container hover:bg-surface-container-high rounded-xl text-sm font-bold transition-colors cursor-pointer border border-outline-variant/30"
            >
              Close
            </button>

            <button
              disabled={!isUnlocked}
              onClick={() => {
                onStartPlayground(level.id);
                onClose();
              }}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all cursor-pointer ${
                isUnlocked
                  ? "bg-gradient-to-r from-primary via-secondary to-tertiary text-on-primary-fixed hover:opacity-95 shadow-primary/20"
                  : "bg-surface-container-high text-on-surface-variant/50 cursor-not-allowed border border-outline-variant/30"
              }`}
            >
              {isUnlocked ? (
                <>
                  <span>Launch Code Playground</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Locked (Complete Prerequisites)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

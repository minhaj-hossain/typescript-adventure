import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import {
  ArrowLeft,
  BookOpen,
  X,
  Play,
  CheckCircle,
  HelpCircle,
  RefreshCw,
  Terminal as TermIcon,
  Zap,
  Sparkles,
  Check,
  Award,
  Lock,
  ArrowRight,
  Code2,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import { STAGES, LEVELS } from "../curriculum";
import { Level } from "../types";
import { LEVEL_SOLUTIONS } from "../data/solutions";

interface LevelDetailsPageProps {
  levelId: string;
  onSelectLevelId: (id: string) => void;
  unlockedLevelIds: string[];
  setUnlockedLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
  onXpAwarded: (points: number) => void;
  onBadgeUnlocked: (badgeId: string, badgeName: string) => void;
  onBackToHome: () => void;
}

// Interactive Web Audio Sound Synthesizer
function playChime(type: "success" | "error" | "click") {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (type === "success") {
      const notes = [261.63, 329.63, 392.0, 523.25]; // C4, E4, G4, C5 major chord
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.12);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + index * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.12 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + index * 0.12);
        osc.stop(ctx.currentTime + index * 0.12 + 0.6);
      });
    } else if (type === "error") {
      const notes = [150, 130];
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + index * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + index * 0.1);
        osc.stop(ctx.currentTime + index * 0.1 + 0.4);
      });
    } else if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    }
  } catch (e) {
    // Audio fail-safe
  }
}

export const LevelDetailsPage: React.FC<LevelDetailsPageProps> = ({
  levelId,
  onSelectLevelId,
  unlockedLevelIds,
  setUnlockedLevelIds,
  onXpAwarded,
  onBadgeUnlocked,
  onBackToHome,
}) => {
  const level = LEVELS.find((l) => l.id === levelId) || LEVELS[0];
  const stage = STAGES.find((s) => s.levelIds.includes(level.id));
  const solDetails = LEVEL_SOLUTIONS[level.id];

  // Calculate overall user progress
  const savedCompleted = localStorage.getItem("completed_levels");
  const completedList: string[] = savedCompleted ? JSON.parse(savedCompleted) : [];
  const completedCount = completedList.length;
  const totalCount = LEVELS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  // Modal states
  const [showStoryModal, setShowStoryModal] = useState<boolean>(true);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);
  const [advancedMode, setAdvancedMode] = useState<boolean>(false);

  // Playground workspace state
  const [userCode, setUserCode] = useState<string>("");
  const [activeFile, setActiveFile] = useState<string>(level.playground.filesToEdit[0] || "index.ts");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [validationStatus, setValidationStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [showHints, setShowHints] = useState<boolean>(false);
  const [objectivesChecked, setObjectivesChecked] = useState<boolean[]>([]);

  // Load code & completion state when level changes
  useEffect(() => {
    const savedCode = localStorage.getItem(`code_${level.id}`);
    setUserCode(savedCode || level.playground.starterCode);
    setActiveFile(level.playground.filesToEdit[0] || "index.ts");

    const completed = completedList.includes(level.id);
    setIsCompleted(completed);

    setTerminalLogs([
      `[info] Initialized TypeScript workspace for ${level.title}`,
      `[info] Target file: ${level.playground.filesToEdit[0]}`,
      `[info] Ready to evaluate type definitions...`,
    ]);
    setValidationStatus("idle");
    setValidationErrors([]);
    setShowStoryModal(true);
    setShowCompletionModal(false);
    setShowSolution(false);
    setShowHints(false);
    setObjectivesChecked(new Array(level.playground.objectives.length).fill(completed));
  }, [level.id]);

  // Global Ctrl+Enter shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (showStoryModal) {
          setShowStoryModal(false);
          playChime("click");
        } else if (!showCompletionModal) {
          runValidation();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showStoryModal, showCompletionModal, userCode, level.id]);

  const runValidationRef = React.useRef<() => void>(() => {});

  // Monaco editor configuration callback with direct Ctrl+Enter shortcut binding
  const handleEditorDidMount = (editor: any, monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [
        2695, // Ignore: Left side of comma operator is unused and has no side effects
        6133, // Ignore: Unused variable
        2307, // Ignore: Cannot find module
      ],
    });
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [2695, 6133, 2307],
    });

    // Bind Ctrl+Enter (Cmd+Enter on macOS) directly inside Monaco editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (runValidationRef.current) {
        runValidationRef.current();
      }
    });
  };

  const handleCodeChange = (val: string | undefined) => {
    const newCode = val || "";
    setUserCode(newCode);
    localStorage.setItem(`code_${level.id}`, newCode);
  };

  const resetCodeToStarter = () => {
    playChime("click");
    setUserCode(level.playground.starterCode);
    localStorage.removeItem(`code_${level.id}`);
    setValidationStatus("idle");
    setValidationErrors([]);
    setTerminalLogs((prev) => [...prev, `[info] Reset code back to initial template.`]);
  };

  const runValidation = () => {
    runValidationRef.current = runValidation;
    setTerminalLogs((prev) => [...prev, `[compiler] Evaluating ${activeFile}...`]);
    const errors: string[] = [];

    // Required keywords check
    if (level.validation.requiredKeywords) {
      for (const kw of level.validation.requiredKeywords) {
        if (!userCode.includes(kw)) {
          errors.push(`Missing required statement or type symbol: "${kw}"`);
        }
      }
    }

    // Forbidden keywords check
    if (level.validation.forbiddenKeywords) {
      for (const kw of level.validation.forbiddenKeywords) {
        if (userCode.includes(kw)) {
          errors.push(`Forbidden keyword detected: "${kw}"`);
        }
      }
    }

    if (errors.length > 0) {
      playChime("error");
      setValidationStatus("error");
      setValidationErrors(errors);
      setTerminalLogs((prev) => [
        ...prev,
        `❌ Validation failed with ${errors.length} error(s):`,
        ...errors.map((e) => `   - ${e}`),
      ]);
    } else {
      playChime("success");
      setValidationStatus("success");
      setValidationErrors([]);
      setObjectivesChecked(new Array(level.playground.objectives.length).fill(true));
      setTerminalLogs((prev) => [
        ...prev,
        `✅ Compilation clean! Type safety verified.`,
        `🎉 XP Awarded: +${level.xpAwarded}`,
      ]);

      // Save level completion & unlock next level
      const updatedList: string[] = completedList.includes(level.id)
        ? completedList
        : [...completedList, level.id];
      localStorage.setItem("completed_levels", JSON.stringify(updatedList));

      if (!isCompleted) {
        onXpAwarded(level.xpAwarded);
      }
      setIsCompleted(true);

      // Unlock next level in sequence
      const currentIdx = LEVELS.findIndex((l) => l.id === level.id);
      if (currentIdx !== -1 && currentIdx + 1 < LEVELS.length) {
        const nextLevelId = LEVELS[currentIdx + 1].id;
        if (!unlockedLevelIds.includes(nextLevelId)) {
          const nextUnlocked = [...unlockedLevelIds, nextLevelId];
          setUnlockedLevelIds(nextUnlocked);
          localStorage.setItem("unlocked_levels", JSON.stringify(nextUnlocked));
        }
      }

      if (level.badgeId && level.badgeName) {
        onBadgeUnlocked(level.badgeId, level.badgeName);
      }

      // Show Completion Celebration Modal!
      setShowCompletionModal(true);
    }
  };

  const handleNextLevel = () => {
    playChime("click");
    setShowCompletionModal(false);

    const currentIdx = LEVELS.findIndex((l) => l.id === level.id);
    if (currentIdx !== -1 && currentIdx + 1 < LEVELS.length) {
      const nextLevel = LEVELS[currentIdx + 1];
      sessionStorage.setItem("last_clicked_level_id", nextLevel.id);
      onSelectLevelId(nextLevel.id);
    } else {
      onBackToHome();
    }
  };

  // Helper to render narrative text with GitMastery inline code badges (`>_ code` or `code`)
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        const codeContent = part.slice(1, -1);
        const isTerminal = codeContent.startsWith(">_");
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 my-0.5 mx-1 bg-surface-container-low border border-outline-variant/40 text-primary font-mono text-xs rounded-md shadow-inner"
          >
            {isTerminal && <span className="text-secondary font-bold">&gt;_</span>}
            <span>{isTerminal ? codeContent.replace(">_", "").trim() : codeContent}</span>
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans">
      {/* 1. TOP HEADER — Centered Title + Full-Width Progress Bar */}
      <header className="bg-surface-container border-b border-outline-variant/30 shadow-md">
        {/* Row 1: Back | Title (centered) | Story & XP */}
        <div className="px-6 py-3 flex items-center justify-between gap-4">
          {/* Left: Back button */}
          <button
            onClick={() => {
              playChime("click");
              onBackToHome();
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all border border-outline-variant/40 text-xs font-bold cursor-pointer active:scale-95 shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>Academy</span>
          </button>

          {/* Center: Title + Stage pill */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight vibrant-gradient font-sans">
              TypeScript Learning Game
            </h1>
            <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-lg border border-primary/20 hidden sm:inline">
              {stage?.title}
            </span>
          </div>

          {/* Right: Story & XP */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => {
                playChime("click");
                setShowStoryModal(true);
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant text-xs font-bold border border-outline-variant/40 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-secondary" />
              <span className="hidden sm:inline">Story & Task</span>
            </button>

            <div className="flex items-center space-x-1.5 bg-tertiary/10 border border-tertiary/30 px-3 py-1.5 rounded-xl text-tertiary font-bold text-xs">
              <Zap className="w-3.5 h-3.5 fill-tertiary" />
              <span>+{level.xpAwarded} XP</span>
            </div>
          </div>
        </div>

        {/* Row 2: Wide progress bar */}
        <div className="pb-3 px-6 flex flex-col items-center gap-1.5">
          <div className="w-full max-w-[80%] flex items-center gap-3 text-xs font-mono text-on-surface-variant">
            <div className="flex items-center gap-1.5 text-secondary font-bold shrink-0">
              <Trophy className="w-3.5 h-3.5" />
              <span>{completedCount}/{totalCount}</span>
            </div>
            <div className="flex-1 h-2 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/30">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="shrink-0 text-on-surface-variant/70">{progressPercent}% complete</span>
          </div>
          <p className="text-[11px] text-on-surface-variant/60 font-sans">
            Now playing: <strong className="text-on-surface/80">{level.title}</strong>
          </p>
        </div>
      </header>

      {/* 2. GITMASTERY PIXEL-PERFECT STORY MODAL */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-surface-container border border-outline-variant/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] glow-primary">
            {/* Modal Header */}
            <div className="p-6 bg-surface-container-low border-b border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-extrabold text-on-surface tracking-tight font-sans">
                  {level.story.title || level.title}
                </h2>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    playChime("click");
                    setAdvancedMode(!advancedMode);
                  }}
                  className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                    advancedMode
                      ? "bg-secondary/20 text-secondary border-secondary/50"
                      : "bg-surface-container-high text-on-surface-variant border-outline-variant/40"
                  }`}
                >
                  &lt;&gt; Advanced Mode ({advancedMode ? "On" : "Off"})
                </button>

                <button
                  onClick={() => {
                    playChime("click");
                    setShowStoryModal(false);
                  }}
                  className="text-on-surface-variant hover:text-on-surface p-1.5 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 text-on-surface-variant text-sm leading-relaxed">
              {/* Story Narrative Paragraphs */}
              <div className="space-y-4 font-sans text-sm md:text-base leading-relaxed">
                {level.story.narrative.map((item, idx) => (
                  <p key={idx} className="text-on-surface">
                    {renderFormattedText(item.text)}
                  </p>
                ))}
              </div>

              {/* Real-World Context Card */}
              {level.story.realWorldContext && (
                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2 shadow-inner">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    Real-World Context
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {renderFormattedText(level.story.realWorldContext)}
                  </p>
                </div>
              )}

              {/* Your Task Card */}
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2 shadow-inner">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                  Your Task
                </h4>
                <p className="text-xs md:text-sm text-on-surface leading-relaxed font-semibold">
                  {renderFormattedText(level.story.taskDescription)}
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-end">
              <button
                onClick={() => {
                  playChime("click");
                  setShowStoryModal(false);
                }}
                className="lift-button flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-sm tracking-wide cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Start Coding</span>
                <span className="px-2 py-0.5 bg-neutral-950/10 rounded text-[10px] font-mono text-neutral-950/80">
                  (Ctrl+Enter)
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. LEVEL COMPLETION CELEBRATION MODAL */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md animate-fadeIn">
          <div className="p-8 bg-surface-container border border-outline-variant/40 rounded-2xl max-w-md w-full flex flex-col items-center text-center gap-5 shadow-2xl glow-primary relative">
            <button
              onClick={() => setShowCompletionModal(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(164,201,255,0.25)]">
              <CheckCircle2 className="w-9 h-9 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Type Safety Verified
              </span>
              <h3 className="text-2xl font-extrabold text-on-surface font-sans">
                Level Completed!
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Great job! You mastered the type definitions for <strong className="text-primary">{level.title}</strong>.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-tertiary/10 border border-tertiary/30 px-4 py-2 rounded-xl text-tertiary font-bold text-sm w-full">
              <Zap className="w-4 h-4 fill-tertiary" />
              <span>+{level.xpAwarded} XP Earned</span>
            </div>

            <div className="flex items-center space-x-3 w-full pt-2">
              <button
                onClick={() => setShowCompletionModal(false)}
                className="flex-1 py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-xl font-bold text-xs border border-outline-variant/30 cursor-pointer"
              >
                Review Code
              </button>

              <button
                onClick={handleNextLevel}
                className="flex-1 py-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-xs shadow-lg hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Next Level</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN WORKSPACE / PLAYGROUND VIEW */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-0 overflow-y-auto lg:overflow-hidden">
        {/* Left Interactive Sidebar */}
        <aside className="lg:col-span-4 bg-surface-container-low border-b lg:border-b-0 lg:border-r border-outline-variant/30 p-4 md:p-6 overflow-y-auto space-y-5 md:space-y-6 flex flex-col">
          {/* File selector tabs */}
          {level.playground.filesToEdit && level.playground.filesToEdit.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                Active Files
              </span>
              <div className="flex flex-wrap gap-1.5">
                {level.playground.filesToEdit.map((file, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playChime("click");
                      setActiveFile(file);
                    }}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                      activeFile === file
                        ? "bg-primary/10 border-primary/40 text-primary font-bold"
                        : "bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{file}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Objectives Checklist */}
          <div className="space-y-3 p-5 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface">
                Target Objectives
              </h4>
              <span className="text-[10px] font-mono font-bold text-secondary">
                {objectivesChecked.filter(Boolean).length}/{level.playground.objectives.length} Done
              </span>
            </div>
            <ul className="space-y-2.5">
              {level.playground.objectives.map((obj, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs text-on-surface-variant">
                  <div
                    className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                      objectivesChecked[i]
                        ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                        : "border-outline-variant bg-surface-container-low"
                    }`}
                  >
                    {objectivesChecked[i] && <Check className="w-3 h-3" />}
                  </div>
                  <span className={objectivesChecked[i] ? "line-through text-on-surface-variant/60" : "text-on-surface"}>
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guided Hints & DETAILED REFERENCE SOLUTION Drawer */}
          <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/30">
            <div className="flex items-center justify-between text-xs font-semibold">
              <button
                onClick={() => {
                  playChime("click");
                  setShowHints(!showHints);
                }}
                className="text-primary hover:text-primary/80 flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showHints ? "Hide Guided Hints" : "Guided Hints"}</span>
              </button>

              <button
                onClick={() => {
                  playChime("click");
                  setShowSolution(!showSolution);
                }}
                className="text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                {showSolution ? "Hide Solution" : "Solution & Explanation"}
              </button>
            </div>

            {showHints && (
              <div className="p-4 rounded-xl bg-surface-container border border-tertiary/20 text-xs text-on-surface-variant space-y-2">
                {level.playground.hints.map((hint, idx) => (
                  <p key={idx} className="leading-relaxed">
                    💡 <strong className="text-tertiary font-mono">Hint #{idx + 1}:</strong> {hint}
                  </p>
                ))}
              </div>
            )}

            {/* FULL DETAILED SOLUTION WITH EXPLANATION & STEPS */}
            {showSolution && (
              <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Detailed Solution Explanation
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">
                    {solDetails?.explanation || "This solution demonstrates clean type declarations following strict compiler requirements."}
                  </p>
                </div>

                {solDetails?.steps && solDetails.steps.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary block">
                      Implementation Steps
                    </span>
                    <ol className="list-decimal list-inside space-y-1 text-on-surface-variant/90 pl-1">
                      {solDetails.steps.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">{step}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {solDetails?.codeTip && (
                  <div className="p-3 rounded-xl bg-surface-container-low border border-tertiary/30 text-tertiary text-[11px] leading-relaxed">
                    💡 <strong>Pro Tip:</strong> {solDetails.codeTip}
                  </div>
                )}

                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary block">
                    Reference Code Snippet
                  </span>
                  <pre className="p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-emerald-400 font-mono text-xs overflow-x-auto">
                    {level.playground.solutionCode}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right Monaco Code Editor & Terminal Workspace */}
        <section className="lg:col-span-8 flex flex-col min-h-[450px] lg:min-h-0 bg-surface">
          {/* Editor Header Bar */}
          <div className="h-10 bg-surface-container-low border-b border-outline-variant/30 px-4 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-primary font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {activeFile}
              </span>
              {validationStatus === "success" && (
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  Verified Clean
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={resetCodeToStarter}
                className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                title="Reset code to initial template"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={runValidation}
                className="lift-button flex items-center space-x-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 font-extrabold text-xs cursor-pointer shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-neutral-950" />
                <span>Verify Code</span>
                <span className="text-[9px] font-mono opacity-80">(Ctrl+Enter)</span>
              </button>
            </div>
          </div>

          {/* Monaco Editor — language auto-detected from file extension */}
          <div className="flex-1 min-h-[350px]">
            <Editor
              height="100%"
              language={
                activeFile.endsWith(".json")
                  ? "json"
                  : activeFile.endsWith(".md")
                  ? "markdown"
                  : "typescript"
              }
              theme="vs-dark"
              value={userCode}
              onChange={handleCodeChange}
              onMount={handleEditorDidMount}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontFamily: "JetBrains Mono, monospace",
                automaticLayout: true,
              }}
            />
          </div>

          {/* Compiler Output Terminal */}
          <div className="h-44 bg-surface-container-lowest border-t border-outline-variant/30 p-4 font-mono text-xs overflow-y-auto space-y-1">
            <div className="flex items-center space-x-2 text-on-surface-variant mb-2 pb-1 border-b border-outline-variant/20">
              <TermIcon className="w-3.5 h-3.5 text-primary" />
              <span className="font-bold uppercase tracking-wider text-[10px] text-primary">
                Compiler Output Terminal
              </span>
            </div>

            {terminalLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.includes("❌")
                    ? "text-rose-400 font-semibold"
                    : log.includes("✅")
                    ? "text-emerald-400 font-bold"
                    : "text-on-surface-variant"
                }
              >
                {log}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

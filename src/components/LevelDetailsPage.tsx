"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowLeft,
  BookOpen,
  Play,
  HelpCircle,
  RefreshCw,
  Terminal as TermIcon,
  Zap,
  Check,
  FileText,
  Trophy,
  Sparkles,
} from "lucide-react";
import { STAGES, LEVELS } from "../curriculum";
import { LEVEL_SOLUTIONS } from "../data/solutions";
import CodeEditor from "./CodeEditor";
import StoryModal from "./StoryModal";
import CompletionModal from "./CompletionModal";
import GrimoirePanel from "./GrimoirePanel";
import OraclePanel from "./OraclePanel";
import { getStagePrimaryCharacter, CHECKPOINT_LEVEL_IDS } from "../data/characters";
import { formatValidationError } from "../lib/narrativeFeedback";
import { CHECKPOINT_BADGES, getStageMeta } from "../data/stageMeta";
import { getEditorErrors } from "../lib/tsValidation";
import { validateCode } from "../lib/validationEngine";
import { useGame } from "../context/GameContext";
import { MonacoEditorInstance, MonacoInstance } from "../lib/monacoTypes";
import ConceptDiagram from "./ConceptDiagram";

interface LevelDetailsPageProps {
  levelId: string;
  onSelectLevelId: (id: string) => void;
  unlockedLevelIds: string[];
  setUnlockedLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
  onXpAwarded: (points: number) => void;
  onBadgeUnlocked: (badgeId: string, badgeName: string) => void;
  onBackToHome: () => void;
}

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
    } catch {
      return null;
    }
  }
  return audioContext;
}

function playChime(type: "success" | "error" | "click") {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    if (type === "success") {
      [261.63, 329.63, 392.0, 523.25].forEach((freq, index) => {
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
      [150, 130].forEach((freq, index) => {
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
    } else {
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
  } catch {
    // Audio fail-safe
  }
}

function loadCompletedLevels(): string[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("completed_levels");
  return saved ? JSON.parse(saved) : [];
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
  const level = LEVELS.find((l) => l.id === levelId)!;
  const stage = STAGES.find((s) => s.levelIds.includes(level.id));
  const solDetails = LEVEL_SOLUTIONS[level.id];
  const hintCharacter = stage ? getStagePrimaryCharacter(stage.id) : getStagePrimaryCharacter("stage-0-onboarding");

  const {
    trackLevelAttempt,
    trackLevelCompletion,
    trackHintUsed,
    trackError,
    settings,
  } = useGame();

  const [completedList, setCompletedList] = useState<string[]>([]);
  const [showStoryModal, setShowStoryModal] = useState(true);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [activeFile, setActiveFile] = useState(level.playground.filesToEdit[0] || "index.ts");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [validationStatus, setValidationStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showGrimoire, setShowGrimoire] = useState(false);
  const [showOracle, setShowOracle] = useState(false);
  const [objectivesChecked, setObjectivesChecked] = useState<boolean[]>([]);

  const completedCount = completedList.length;
  const totalCount = LEVELS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const currentIdx = LEVELS.findIndex((l) => l.id === level.id);
  const nextLevel = currentIdx !== -1 && currentIdx + 1 < LEVELS.length ? LEVELS[currentIdx + 1] : null;

  const runValidationRef = useRef<() => void>(() => {});
  const monacoRef = useRef<MonacoInstance | null>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCompletedList(loadCompletedLevels());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Save the current level as the last active level for "Continue" feature
    localStorage.setItem("last_active_level_id", level.id);

    const savedCode = localStorage.getItem(`code_${level.id}`);
    setUserCode(savedCode || level.playground.starterCode);
    setActiveFile(level.playground.filesToEdit[0] || "index.ts");

    const completed = loadCompletedLevels().includes(level.id);
    setIsCompleted(completed);

    trackLevelAttempt(level.id);

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
    setShowGrimoire(false);
    setObjectivesChecked(new Array(level.playground.objectives.length).fill(completed));
  }, [level.id, level.title, level.playground.filesToEdit, level.playground.starterCode, level.playground.objectives.length]);

  const runValidation = useCallback(() => {
    setTerminalLogs((prev) => [...prev, `[compiler] Evaluating ${activeFile}...`]);
    const editorErrors =
      monacoRef.current && !activeFile.endsWith(".json") && !activeFile.endsWith(".md")
        ? getEditorErrors(monacoRef.current.editor.getModelMarkers({}))
        : [];

    const errors = validateCode(userCode, level.validation, editorErrors);
    const narrativeErrors = errors.map((e) =>
      formatValidationError(e, hintCharacter.name),
    );

    if (errors.length > 0) {
      if (settings.soundEnabled) playChime("error");
      setValidationStatus("error");
      setValidationErrors(narrativeErrors);
      trackError(level.id, errors[0]);
      setTerminalLogs((prev) => [
        ...prev,
        `❌ Validation failed with ${errors.length} error(s):`,
        ...narrativeErrors.map((e) => `   - ${e}`),
      ]);
    } else {
      if (settings.soundEnabled) playChime("success");
      setValidationStatus("success");
      setValidationErrors([]);
      setObjectivesChecked(new Array(level.playground.objectives.length).fill(true));
      setTerminalLogs((prev) => [
        ...prev,
        `✅ Compilation clean! Type safety verified.`,
        `🎉 XP Awarded: +${level.xpAwarded}`,
      ]);

      trackLevelCompletion(level.id, 0, [], 0);

      const currentCompleted = loadCompletedLevels();
      const updatedList = currentCompleted.includes(level.id)
        ? currentCompleted
        : [...currentCompleted, level.id];
      localStorage.setItem("completed_levels", JSON.stringify(updatedList));
      setCompletedList(updatedList);

      if (!isCompleted) {
        onXpAwarded(level.xpAwarded);
      }
      setIsCompleted(true);

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

      const checkpointBadge = CHECKPOINT_BADGES[level.id];
      if (checkpointBadge) {
        onBadgeUnlocked(checkpointBadge.badgeId, checkpointBadge.badgeName);
      }

      if (stage) {
        const stageLevels = LEVELS.filter((l) => stage.levelIds.includes(l.id));
        const allStageDone = stageLevels.every((l) => updatedList.includes(l.id));
        if (allStageDone) {
          const meta = getStageMeta(stage.id);
          if (meta) {
            onBadgeUnlocked(meta.badgeId, meta.badgeName);
          }
        }
      }

      setShowCompletionModal(true);
    }
  }, [
    activeFile,
    currentIdx,
    hintCharacter.name,
    isCompleted,
    level,
    onBadgeUnlocked,
    onXpAwarded,
    setUnlockedLevelIds,
    stage,
    unlockedLevelIds,
    userCode,
  ]);

  useEffect(() => {
    runValidationRef.current = runValidation;
  }, [runValidation]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (showStoryModal) {
          setShowStoryModal(false);
          playChime("click");
        } else if (!showCompletionModal) {
          runValidationRef.current();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showStoryModal, showCompletionModal]);

  const handleEditorDidMount = (
    editor: MonacoEditorInstance,
    monaco: MonacoInstance,
  ) => {
    monacoRef.current = monaco;
    
    // Ignore DOM global collisions (like DOM Event interface collision TS2300/TS2440/TS2305/TS2451)
    const diagOpts = {
      noSemanticValidation: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [2300, 2440, 2451, 2695, 6133, 2307],
    };

    const compilerOpts = {
      target: 7, // ES2020
      moduleResolution: 2, // Node
      isolatedModules: true,
      noLib: false,
      lib: ["es2020", "esnext"], // Exclude DOM to prevent interface Event collision with DOM Event
    };

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(diagOpts);
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(diagOpts);
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions(compilerOpts);
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions(compilerOpts);

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runValidationRef.current();
    });
  };

  const handleCodeChange = (val: string | undefined) => {
    const newCode = val || "";
    setUserCode(newCode);
    // Debounce localStorage writes to avoid excessive I/O on every keystroke
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }
    saveTimerRef.current = setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(`code_${level.id}`, newCode);
      }
    }, 500);
  };

  const resetCodeToStarter = () => {
    playChime("click");
    setUserCode(level.playground.starterCode);
    if (typeof window !== "undefined") {
      localStorage.removeItem(`code_${level.id}`);
    }
    setValidationStatus("idle");
    setValidationErrors([]);
    setTerminalLogs((prev) => [...prev, `[info] Reset code back to initial template.`]);
  };

  const handleNextLevel = () => {
    playChime("click");
    setShowCompletionModal(false);
    if (nextLevel) {
      sessionStorage.setItem("last_clicked_level_id", nextLevel.id);
      onSelectLevelId(nextLevel.id);
    } else {
      onBackToHome();
    }
  };

  const renderFormattedText = (text: string) => {
    // 1. First split out multi-line fenced code blocks (```json ... ```)
    const blockParts = text.split(/(```[\s\S]*?```)/g);
    return blockParts.map((blockPart, bIdx) => {
      if (blockPart.startsWith("```") && blockPart.endsWith("```")) {
        const inner = blockPart.slice(3, -3).trim();
        // Strip optional leading language identifier (e.g. "json\n...")
        const codeContent = inner.replace(/^[a-zA-Z0-9_-]+\n/, "");
        return (
          <pre
            key={bIdx}
            className="my-3 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-emerald-400 font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed shadow-inner"
          >
            {codeContent}
          </pre>
        );
      }

      // 2. Split single backtick inline code (`...`)
      const inlineParts = blockPart.split(/(`[^`]+`)/g);
      return inlineParts.map((part, idx) => {
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          const codeContent = part.slice(1, -1);
          const isTerminal = codeContent.startsWith(">_");
          return (
            <span
              key={`${bIdx}-${idx}`}
              className="inline-flex items-center gap-1 px-2 py-0.5 my-0.5 mx-0.5 bg-surface-container-low border border-outline-variant/40 text-primary font-mono text-xs rounded-md shadow-inner"
            >
              {isTerminal && <span className="text-secondary font-bold">&gt;_</span>}
              <span>{isTerminal ? codeContent.replace(">_", "").trim() : codeContent}</span>
            </span>
          );
        }
        return part;
      });
    });
  };

  const editorLanguage = activeFile.endsWith(".json")
    ? "json"
    : activeFile.endsWith(".md")
      ? "markdown"
      : "typescript";

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans">
      <header className="bg-surface-container border-b border-outline-variant/30">
        <div className="px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
          {/* Left: Back button */}
          <button
            onClick={() => {
              playChime("click");
              onBackToHome();
            }}
            className="flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface transition-colors text-xs font-bold cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span className="hidden sm:inline">Academy</span>
          </button>

          {/* Center: Level title + stage */}
          <div className="flex-1 flex flex-col items-center text-center min-w-0">
            <h1 className="text-sm sm:text-lg md:text-xl font-extrabold text-on-surface font-sans truncate w-full">
              {level.title}
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              {stage && (
                <span className="text-[10px] font-mono font-bold text-primary/80 uppercase tracking-wider truncate">
                  {stage.title.replace(/^Stage \d+ — /, "")}
                </span>
              )}
              {CHECKPOINT_LEVEL_IDS.has(level.id) && (
                <span className="text-[10px] text-amber-400 font-bold">★ Checkpoint</span>
              )}
            </div>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                playChime("click");
                setShowStoryModal(true);
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant text-xs font-bold border border-outline-variant/40 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-secondary" />
              <span className="hidden sm:inline">Story</span>
            </button>
            <div className="flex items-center gap-1 bg-tertiary/10 border border-tertiary/30 px-2.5 py-1.5 rounded-lg text-tertiary font-bold text-xs">
              <Zap className="w-3 h-3 fill-tertiary" />
              <span>+{level.xpAwarded}</span>
            </div>
          </div>
        </div>

        {/* Subtle progress bar */}
        <div className="px-3 sm:px-6 pb-2.5 flex items-center gap-2.5 text-[10px] font-mono text-on-surface-variant/60">
          <div className="flex items-center gap-1 shrink-0">
            <Trophy className="w-3 h-3 text-secondary/70" />
            <span>{completedCount}/{totalCount}</span>
          </div>
          <div className="flex-1 h-1 bg-surface-container-low rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="shrink-0">{progressPercent}%</span>
        </div>
      </header>

      <StoryModal
        level={level}
        isOpen={showStoryModal}
        onClose={() => setShowStoryModal(false)}
        renderFormattedText={renderFormattedText}
        playChime={playChime}
      />

      {showCompletionModal && (
        <CompletionModal
          level={level}
          stage={stage}
          nextLevel={nextLevel}
          onClose={() => setShowCompletionModal(false)}
          onNext={handleNextLevel}
          playChime={playChime}
        />
      )}

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-0 overflow-y-auto lg:overflow-hidden">
        <aside className="lg:col-span-4 bg-surface-container-low border-b lg:border-b-0 lg:border-r border-outline-variant/30 p-3 sm:p-4 md:p-6 overflow-y-auto space-y-4 sm:space-y-5 md:space-y-6 flex flex-col max-h-[50vh] lg:max-h-none">
          {level.playground.filesToEdit.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                Active Files
              </span>
              <div className="flex flex-wrap gap-1.5">
                {level.playground.filesToEdit.map((file) => (
                  <button
                    key={file}
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

          {/* Quick Action Navigation Bar directly under Active Files */}
          <div className="space-y-3 pb-2 border-b border-outline-variant/30">
            <div className="flex items-center justify-between text-xs font-semibold flex-wrap gap-2">
              <button
                onClick={() => {
                  playChime("click");
                  if (!showHints) {
                    trackHintUsed(level.id);
                    setShowGrimoire(false);
                    setShowOracle(false);
                    setShowSolution(false);
                  }
                  setShowHints(!showHints);
                }}
                className={`text-primary hover:text-primary/80 flex items-center gap-1.5 cursor-pointer ${
                  showHints ? "font-bold underline" : ""
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showHints ? "Hide Hints" : "Guided Hints"}</span>
              </button>
              <button
                onClick={() => {
                  playChime("click");
                  if (!showGrimoire) {
                    setShowHints(false);
                    setShowOracle(false);
                    setShowSolution(false);
                  }
                  setShowGrimoire(!showGrimoire);
                }}
                className={`text-secondary hover:text-secondary/80 flex items-center gap-1.5 cursor-pointer ${
                  showGrimoire ? "font-bold underline" : ""
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Grimoire</span>
              </button>
              <button
                onClick={() => {
                  playChime("click");
                  if (!showOracle) {
                    setShowHints(false);
                    setShowGrimoire(false);
                    setShowSolution(false);
                  }
                  setShowOracle(!showOracle);
                }}
                className={`text-sky-400 hover:text-sky-300 flex items-center gap-1.5 cursor-pointer font-bold ${
                  showOracle ? "underline" : ""
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Mentor</span>
              </button>
              <button
                onClick={() => {
                  playChime("click");
                  if (!showSolution) {
                    setShowHints(false);
                    setShowGrimoire(false);
                    setShowOracle(false);
                  }
                  setShowSolution(!showSolution);
                }}
                className={`text-on-surface-variant hover:text-on-surface cursor-pointer ${
                  showSolution ? "font-bold underline text-on-surface" : ""
                }`}
              >
                {showSolution ? "Hide Solution" : "Solution"}
              </button>
            </div>

            <GrimoirePanel levelId={level.id} isOpen={showGrimoire} onClose={() => setShowGrimoire(false)} />
            <OraclePanel
              isOpen={showOracle}
              onClose={() => setShowOracle(false)}
              levelTitle={level.title}
              userCode={userCode}
              lastError={validationErrors[0]}
            />

            {showHints && (
              <div className="p-4 rounded-xl bg-surface-container border border-tertiary/20 text-xs text-on-surface-variant space-y-2 animate-fadeIn">
                {level.playground.hints.map((hint, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {hintCharacter.emoji}{" "}
                    <strong className={`${hintCharacter.color} font-mono`}>
                      {hintCharacter.name} whispers:
                    </strong>{" "}
                    {hint}
                  </p>
                ))}
              </div>
            )}

            {showSolution && (
              <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4 text-xs animate-fadeIn">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Detailed Solution Explanation
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">
                    {solDetails?.explanation ||
                      "This solution demonstrates clean type declarations following strict compiler requirements."}
                  </p>
                </div>
                {solDetails?.steps && solDetails.steps.length > 0 && (
                  <ol className="list-decimal list-inside space-y-1 text-on-surface-variant/90 pl-1">
                    {solDetails.steps.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                )}
                {solDetails?.codeTip && (
                  <div className="p-3 rounded-xl bg-surface-container-low border border-tertiary/30 text-tertiary text-[11px]">
                    💡 <strong>Pro Tip:</strong> {solDetails.codeTip}
                  </div>
                )}
                <pre className="p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-emerald-400 font-mono text-xs overflow-x-auto">
                  {level.playground.solutionCode}
                </pre>
              </div>
            )}
          </div>

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

          <ConceptDiagram visualizationType={level.visualizationType} />
        </aside>

        <section className="lg:col-span-8 flex flex-col min-h-[400px] sm:min-h-[450px] lg:min-h-0 bg-surface">
          <div className="h-10 bg-surface-container-low border-b border-outline-variant/30 px-3 sm:px-4 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <span className="font-mono text-primary font-bold flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="truncate">{activeFile}</span>
              </span>
              {validationStatus === "success" && (
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                  Verified Clean
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              <button
                onClick={resetCodeToStarter}
                className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={runValidation}
                className="lift-button flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 font-extrabold text-xs cursor-pointer shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-neutral-950" />
                <span>Verify</span>
                <span className="text-[9px] font-mono opacity-80 hidden sm:inline">(Ctrl+Enter)</span>
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] sm:min-h-[350px]">
            <CodeEditor
              height="100%"
              theme="vs-dark"
              language={editorLanguage}
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

          <div className="h-32 sm:h-44 bg-surface-container-lowest border-t border-outline-variant/30 p-3 sm:p-4 font-mono text-xs overflow-y-auto space-y-1">
            <div className="flex items-center space-x-2 text-on-surface-variant mb-2 pb-1 border-b border-outline-variant/20">
              <TermIcon className="w-3.5 h-3.5 text-primary" />
              <span className="font-bold uppercase tracking-wider text-[10px] text-primary">
                Compiler Output Terminal
              </span>
            </div>
            {validationErrors.length > 0 &&
              validationErrors.map((err, i) => (
                <div key={`err-${i}`} className="flex items-center justify-between gap-2 py-0.5 text-rose-400 font-semibold flex-wrap">
                  <span>❌ {err}</span>
                  <button
                    onClick={() => {
                      playChime("click");
                      setShowHints(false);
                      setShowGrimoire(false);
                      setShowSolution(false);
                      setShowOracle(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 rounded-md border border-sky-500/30 text-[11px] font-sans font-bold transition-all cursor-pointer shadow-sm shrink-0"
                  >
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    <span>Ask Minhaj to explain this error</span>
                  </button>
                </div>
              ))}
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

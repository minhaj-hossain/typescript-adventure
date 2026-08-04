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
  Target,
  Lightbulb,
  Layers,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { STAGES, LEVELS } from "../curriculum";
import { Level } from "../types";
import { LEVEL_SOLUTIONS } from "../data/solutions";
import CodeEditor from "./CodeEditor";
import StoryModal from "./StoryModal";
import CompletionModal from "./CompletionModal";
import GrimoirePanel from "./GrimoirePanel";
import ErrorBoundary from "./ErrorBoundary";
import { getStagePrimaryCharacter, CHECKPOINT_LEVEL_IDS } from "../data/characters";
import { formatValidationError } from "../lib/narrativeFeedback";
import { CHECKPOINT_BADGES, getStageMeta } from "../data/stageMeta";
import { getEditorErrors } from "../lib/tsValidation";
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
  const [objectivesChecked, setObjectivesChecked] = useState<boolean[]>([]);
  const [sidebarTab, setSidebarTab] = useState<"objectives" | "concept" | "help">("objectives");

  const completedCount = completedList.length;
  const totalCount = LEVELS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const currentIdx = LEVELS.findIndex((l) => l.id === level.id);
  // Use stage's declared level order for next-level determination
  const stageLevels = stage
    ? stage.levelIds
        .map((id) => LEVELS.find((l) => l.id === id))
        .filter((l): l is Level => l !== undefined)
    : [];
  const currentStageIdx = stage ? stageLevels.findIndex((l) => l.id === level.id) : -1;

  // Next level in curriculum order (unconditional, used for unlocking)
  const rawNextLevel = (() => {
    // Same stage: next level in the stage's declared order
    if (stage && currentStageIdx !== -1 && currentStageIdx + 1 < stageLevels.length) {
      return stageLevels[currentStageIdx + 1];
    }
    // Last level of a stage: find the next stage by order and use its first level
    if (stage) {
      const nextStage = STAGES.find((s) => s.order === stage.order + 1);
      if (nextStage && nextStage.levelIds.length > 0) {
        const firstLevelOfNextStage = LEVELS.find((l) => l.id === nextStage.levelIds[0]);
        if (firstLevelOfNextStage) return firstLevelOfNextStage;
      }
    }
    // Fallback: next in global array
    if (currentIdx !== -1 && currentIdx + 1 < LEVELS.length) {
      return LEVELS[currentIdx + 1];
    }
    return null;
  })();

  // For the completion modal: always offer the curriculum-ordered next level.
  // The modal only appears after successful validation, at which point the next
  // level has just been unlocked (in the same handler), so it's always accessible.
  const nextLevel = rawNextLevel;

  // Stage progress for header feedback
  const stageLevelIndex = stage ? stageLevels.findIndex((l) => l.id === level.id) : -1;
  const stageCompletedCount = stage
    ? stageLevels.filter((l) => completedList.includes(l.id)).length
    : 0;
  const stageTotalCount = stageLevels.length;
  const stageProgressPercent = stageTotalCount > 0 ? Math.round((stageCompletedCount / stageTotalCount) * 100) : 0;

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
    // Guard against corrupted saved code from a previous session.
    // Catches: literal "\n"/"\t" text AND real line-break runs (4+ consecutive
    // \r\n, \r, or \n — handles Windows/Unix/Mac line endings).
    const isCorrupted =
      savedCode !== null &&
      (savedCode.includes("\\n") ||
        savedCode.includes("\\t") ||
        /(?:\r\n|\r|\n){4,}/.test(savedCode));
    if (isCorrupted) {
      localStorage.removeItem(`code_${level.id}`);
    }
    setUserCode(isCorrupted ? level.playground.starterCode : savedCode || level.playground.starterCode);
    setActiveFile(level.playground.filesToEdit[0] || "index.ts");

    const completed = loadCompletedLevels().includes(level.id);
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
    setShowGrimoire(false);
    setObjectivesChecked(new Array(level.playground.objectives.length).fill(completed));
  }, [level.id, level.title, level.playground.filesToEdit, level.playground.starterCode, level.playground.objectives.length]);

  const runValidation = useCallback(() => {
    setTerminalLogs((prev) => [...prev, `[compiler] Evaluating ${activeFile}...`]);
    const errors: string[] = [];

    // Normalize code for flexible keyword matching (ignore whitespace differences)
    const normalizedCode = userCode.replace(/\s+/g, " ").trim();

    if (level.validation.requiredKeywords) {
      for (const kw of level.validation.requiredKeywords) {
        // Normalize the keyword too, and also try a comma-separated variant
        const normalizedKw = kw.replace(/\s+/g, " ").trim();
        const commaVariant = normalizedKw.replace(/;/g, ",");
        const noSpaceVariant = normalizedKw.replace(/\s+/g, "");
        const commaNoSpaceVariant = commaVariant.replace(/\s+/g, "");

        const normalizedCodeNoSpace = normalizedCode.replace(/\s+/g, "");

        const found =
          normalizedCode.includes(normalizedKw) ||
          normalizedCode.includes(commaVariant) ||
          normalizedCodeNoSpace.includes(noSpaceVariant) ||
          normalizedCodeNoSpace.includes(commaNoSpaceVariant);

        if (!found) {
          errors.push(`Missing required statement or type symbol: "${kw}"`);
        }
      }
    }

    if (level.validation.forbiddenKeywords) {
      for (const kw of level.validation.forbiddenKeywords) {
        if (userCode.includes(kw)) {
          errors.push(`Forbidden keyword detected: "${kw}"`);
        }
      }
    }

    if (monacoRef.current && !activeFile.endsWith(".json") && !activeFile.endsWith(".md")) {
      const markers = monacoRef.current.editor.getModelMarkers({});
      const editorErrors = getEditorErrors(markers);
      if (editorErrors.length > 0 && errors.length === 0) {
        errors.push(...editorErrors.slice(0, 3).map((e) => `Compiler diagnostic: ${e}`));
      }
    }

    const narrativeErrors = errors.map((e) =>
      formatValidationError(e, hintCharacter.name),
    );

    if (errors.length > 0) {
      playChime("error");
      setValidationStatus("error");
      setValidationErrors(narrativeErrors);
      setTerminalLogs((prev) => [
        ...prev,
        `❌ Validation failed with ${errors.length} error(s):`,
        ...narrativeErrors.map((e) => `   - ${e}`),
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

      const nextToUnlock = rawNextLevel ? rawNextLevel.id : null;
      if (nextToUnlock) {
        if (!unlockedLevelIds.includes(nextToUnlock)) {
          const nextUnlocked = [...unlockedLevelIds, nextToUnlock];
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
      // Don't trigger shortcuts when typing in the editor or any input field
      const target = e.target as HTMLElement;
      const isTyping = 
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        target.closest(".monaco-editor") !== null ||
        target.classList.contains("monaco-editor");

      // Ctrl/Cmd+Enter: Submit code or close story modal (always works)
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (showStoryModal) {
          setShowStoryModal(false);
          playChime("click");
        } else if (!showCompletionModal) {
          runValidationRef.current();
        }
        return;
      }

      // Skip single-key shortcuts when typing in editor
      if (isTyping) return;

      // H: Toggle hints
      if (e.key === "h" || e.key === "H") {
        if (!showStoryModal && !showCompletionModal) {
          setShowHints((prev) => !prev);
        }
        return;
      }
      // R: Reset code to starter
      if (e.key === "r" || e.key === "R") {
        if (!showStoryModal && !showCompletionModal && !e.ctrlKey && !e.metaKey) {
          resetCodeToStarter();
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
    const diagOpts = {
      noSemanticValidation: false,
      noSyntaxValidation: false,
      // 2695: unused left operand | 6133: declared but never read
      // 2307: cannot find module | 2304: cannot find name | 2552: cannot find name (did you mean?)
      diagnosticCodesToIgnore: [2695, 6133, 2307, 2304, 2552],
    };
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(diagOpts);
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(diagOpts);
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
            <code
              key={`${bIdx}-${idx}`}
              className="px-1.5 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold"
            >
              {isTerminal && <span className="text-secondary font-bold">{">_"}</span>}
              <span>{isTerminal ? codeContent.replace(">_", "").trim() : codeContent}</span>
            </code>
          );
        }

        // 3. Split **bold** markdown
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((boldPart, bIdx2) => {
          if (boldPart.startsWith("**") && boldPart.endsWith("**") && boldPart.length > 4) {
            return (
              <strong
                key={`${bIdx}-${idx}-${bIdx2}`}
                className="text-primary font-bold"
              >
                {boldPart.slice(2, -2)}
              </strong>
            );
          }
          return boldPart;
        });
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
              {stage && stageLevelIndex >= 0 && (
                <span className="text-[10px] font-mono font-bold text-secondary/80 shrink-0">
                  Trial {stageLevelIndex + 1}/{stageTotalCount}
                </span>
              )}
              {CHECKPOINT_LEVEL_IDS.has(level.id) && (
                <span className="text-[10px] text-amber-400 font-bold">★ Checkpoint</span>
              )}
            </div>
            {stage && stageTotalCount > 0 && (
              <div className="w-24 sm:w-32 h-0.5 bg-surface-container-low rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full"
                  style={{ width: `${stageProgressPercent}%` }}
                />
              </div>
            )}
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

          {/* Tabbed Sidebar Navigation */}
          <div className="flex items-center gap-1 bg-surface-container/60 p-1 rounded-xl border border-outline-variant/20">
            <button
              onClick={() => {
                playChime("click");
                setSidebarTab("objectives");
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer border ${
                sidebarTab === "objectives"
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/40"
              }`}
            >
              <Target className="w-3 h-3" />
              <span className="hidden sm:inline">Objectives</span>
            </button>
            <button
              onClick={() => {
                playChime("click");
                setSidebarTab("concept");
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer border ${
                sidebarTab === "concept"
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/40"
              }`}
            >
              <Layers className="w-3 h-3" />
              <span className="hidden sm:inline">Concept</span>
            </button>
            <button
              onClick={() => {
                playChime("click");
                setSidebarTab("help");
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer border ${
                sidebarTab === "help"
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/40"
              }`}
            >
              <Lightbulb className="w-3 h-3" />
              <span className="hidden sm:inline">Help</span>
            </button>
          </div>

          {/* Objectives Tab */}
          {sidebarTab === "objectives" && (
            <div className="space-y-3 p-5 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm animate-fadeIn">
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
          )}

          {/* Concept Tab */}
          {sidebarTab === "concept" && (
            <div className="space-y-3 animate-fadeIn">
              <ConceptDiagram visualizationType={level.visualizationType} />
              {!level.visualizationType && (
                <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface-variant">
                  No concept visualization available for this level.
                </div>
              )}
            </div>
          )}

          {/* Help Tab */}
          {sidebarTab === "help" && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-semibold flex-wrap gap-2">
                <button
                  onClick={() => {
                    playChime("click");
                    setShowHints(!showHints);
                  }}
                  className="text-primary hover:text-primary/80 flex items-center gap-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{showHints ? "Hide Hints" : "Guided Hints"}</span>
                </button>
                <button
                  onClick={() => {
                    playChime("click");
                    setShowGrimoire(!showGrimoire);
                  }}
                  className="text-secondary hover:text-secondary/80 flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Grimoire</span>
                </button>
                <button
                  onClick={() => {
                    playChime("click");
                    setShowSolution(!showSolution);
                  }}
                  className="text-on-surface-variant hover:text-on-surface cursor-pointer"
                >
                  {showSolution ? "Hide Solution" : "Solution"}
                </button>
              </div>

              <GrimoirePanel levelId={level.id} isOpen={showGrimoire} onClose={() => setShowGrimoire(false)} />

              {showHints && (
                <div className="p-4 rounded-xl bg-surface-container border border-tertiary/20 text-xs text-on-surface-variant space-y-2">
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
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4 text-xs">
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
          )}
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
            <ErrorBoundary>
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
            </ErrorBoundary>
          </div>

          <div className="h-32 sm:h-44 bg-surface-container-lowest border-t border-outline-variant/30 p-3 sm:p-4 font-mono text-xs overflow-y-auto space-y-1.5">
            <div className="flex items-center justify-between text-on-surface-variant mb-2 pb-1.5 border-b border-outline-variant/20">
              <div className="flex items-center space-x-2">
                <TermIcon className="w-3.5 h-3.5 text-primary" />
                <span className="font-bold uppercase tracking-wider text-[10px] text-primary">
                  Compiler Output Terminal
                </span>
              </div>
              {validationStatus === "success" && (
                <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  PASS
                </span>
              )}
              {validationStatus === "error" && (
                <span className="flex items-center gap-1 text-[9px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">
                  <AlertCircle className="w-2.5 h-2.5" />
                  FAIL
                </span>
              )}
            </div>
            {validationErrors.length > 0 &&
              validationErrors.map((err, i) => (
                <div key={`err-${i}`} className="flex items-start gap-1.5 text-rose-400 font-semibold">
                  <AlertCircle className="w-3 h-3 mt-0.5 shrink-0" />
                  <span>{err}</span>
                </div>
              ))}
            {terminalLogs.map((log, i) => {
              const isError = log.includes("❌");
              const isSuccess = log.includes("✅");
              const isInfo = log.startsWith("[info]");
              const isXp = log.includes("🎉");
              return (
                <div
                  key={i}
                  className={`flex items-start gap-1.5 ${
                    isError
                      ? "text-rose-400 font-semibold"
                      : isSuccess
                        ? "text-emerald-400 font-bold"
                        : isXp
                          ? "text-tertiary font-bold"
                          : isInfo
                            ? "text-on-surface-variant/70"
                            : "text-on-surface-variant"
                  }`}
                >
                  {isError && <AlertCircle className="w-3 h-3 mt-0.5 shrink-0" />}
                  {isSuccess && <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" />}
                  {isXp && <Zap className="w-3 h-3 mt-0.5 shrink-0 fill-tertiary" />}
                  {isInfo && <Clock className="w-3 h-3 mt-0.5 shrink-0 opacity-50" />}
                  <span>{log}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

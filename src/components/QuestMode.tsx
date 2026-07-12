import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { 
  BookOpen, Check, HelpCircle, Lock, Play, ArrowRight,
  ChevronLeft, Award, RefreshCw, X, ShieldCheck, Activity,
  AlertTriangle, CheckCircle, Terminal as TermIcon, FileText, Compass
} from "lucide-react";
import { STAGES, LEVELS } from "../curriculum";
import { Level } from "../types";
import { auth, saveLevelCodeCloud } from "../lib/firebase";
import { LEVEL_SOLUTIONS, SolutionDetails } from "../data/solutions";

interface QuestModeProps {
  onXpAwarded: (points: number) => void;
  onBadgeUnlocked: (badgeId: string, badgeName: string) => void;
  unlockedLevelIds: string[];
  setUnlockedLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLevelId?: string | null;
  setSelectedLevelId?: (id: string | null) => void;
  onTabChange?: (tab: "home" | "quest" | "playground" | "docs") => void;
}

// Interactive Web Audio Sound Synthesizer
function playChime(type: "success" | "error" | "click") {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (type === "success") {
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 major chord
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
    // Fail-safe for browsers with blocked autoplay
  }
}

export default function QuestMode({
  onXpAwarded,
  onBadgeUnlocked,
  unlockedLevelIds,
  setUnlockedLevelIds,
  selectedLevelId,
  setSelectedLevelId,
  onTabChange,
}: QuestModeProps) {
  // Navigation & UI state
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [showConceptModal, setShowConceptModal] = useState<boolean>(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState<boolean>(false);

  // Playground state
  const [userCode, setUserCode] = useState<string>("");
  const [validationStatus, setValidationStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [showHints, setShowHints] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  // Keep track of which objectives are checked (true/false)
  const [objectivesChecked, setObjectivesChecked] = useState<boolean[]>([]);

  // Load completed levels on mount
  const [completedLevelIds, setCompletedLevelIds] = useState<string[]>([]);

  // Auto-redirect to a valid active level if selectedLevelId is null/undefined
  useEffect(() => {
    if (!selectedLevelId && setSelectedLevelId) {
      const lastVisited = localStorage.getItem("last_active_level_id");
      let targetLevelId = lastVisited;
      
      const savedCompleted = localStorage.getItem("completed_levels");
      const completed: string[] = savedCompleted ? JSON.parse(savedCompleted) : [];
      
      if (!targetLevelId || !unlockedLevelIds.includes(targetLevelId)) {
        const activeLevel = LEVELS.find(
          (lvl) => unlockedLevelIds.includes(lvl.id) && !completed.includes(lvl.id)
        );
        targetLevelId = activeLevel?.id || unlockedLevelIds[unlockedLevelIds.length - 1] || "level-0-1-bootstrap";
      }
      
      setSelectedLevelId(targetLevelId);
    }
  }, [selectedLevelId, unlockedLevelIds, setSelectedLevelId]);

  useEffect(() => {
    if (selectedLevelId) {
      const found = LEVELS.find(l => l.id === selectedLevelId);
      if (found) {
        setSelectedLevel(found);
        setShowConceptModal(true);
        localStorage.setItem("last_active_level_id", selectedLevelId);
      }
    } else {
      setSelectedLevel(null);
    }
  }, [selectedLevelId]);

  useEffect(() => {
    const savedCompleted = localStorage.getItem("completed_levels");
    if (savedCompleted) {
      setCompletedLevelIds(JSON.parse(savedCompleted));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedLevel && showConceptModal && (e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        playChime("click");
        setShowConceptModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLevel, showConceptModal]);

  // Set initial code & reset state when level changes
  useEffect(() => {
    if (selectedLevel) {
      const savedCode = localStorage.getItem(`code_${selectedLevel.id}`);
      setUserCode(savedCode || selectedLevel.playground.starterCode);
      setValidationStatus("idle");
      setValidationErrors([]);
      setTerminalLogs([
        `[info] Opened ${selectedLevel.playground.filesToEdit[0]}`,
        `[info] Ready to formulate TypeScript runes...`
      ]);
      setShowHints(false);
      setShowSolution(false);
      setObjectivesChecked(new Array(selectedLevel.playground.objectives.length).fill(false));
    }
  }, [selectedLevel]);

  // Clean and normalize strings to prevent quote/spacing false negatives
  const cleanStr = (s: string) => {
    return s.replace(/\s+/g, " ").replace(/'/g, '"').replace(/`/g, '"').trim();
  };

  // Perform custom objective verification
  const handleVerifyCode = () => {
    if (!selectedLevel) return;

    const code = userCode;
    const errors: string[] = [];
    const logs: string[] = [
      "[info] Launching tsc --noEmit (TypeScript compiler verify mode)...",
      `[info] Analyzing structure of active level: "${selectedLevel.title}"`
    ];

    const required = selectedLevel.validation.requiredKeywords || [];
    const forbidden = selectedLevel.validation.forbiddenKeywords || [];

    const normalizedUserCode = cleanStr(code);
    const updatedObjectives = selectedLevel.playground.objectives.map((objective, idx) => {
      // Direct, intelligent keyword matching mapped back to checklist item order
      // We check if required keywords are satisfied
      if (selectedLevel.id === "level-0-1-bootstrap") {
        if (idx === 0) return normalizedUserCode.includes("devDependencies");
        if (idx === 1) return normalizedUserCode.includes("typescript");
      }
      if (selectedLevel.id === "level-0-2-tsconfig") {
        if (idx === 0 || idx === 1) return normalizedUserCode.includes('"strict": true');
      }
      if (selectedLevel.id === "level-0-3-watch-mode") {
        if (idx === 0) return normalizedUserCode.includes('"dev"');
        if (idx === 1) return normalizedUserCode.includes("tsc --watch");
      }
      if (selectedLevel.id === "level-0-4-reading-errors") {
        if (idx === 0) return normalizedUserCode.includes("attendeeCount: number");
        if (idx === 1) return normalizedUserCode.includes("120") && !normalizedUserCode.includes('"120"') && !normalizedUserCode.includes("'120'");
      }
      if (selectedLevel.id === "level-1-1-primitives") {
        if (idx === 0) return normalizedUserCode.includes(": number");
        if (idx === 1) return normalizedUserCode.includes("= 50");
      }
      if (selectedLevel.id === "level-1-2-inference") {
        if (idx === 0) return normalizedUserCode.includes("serviceFee = 5") && !normalizedUserCode.includes("serviceFee: number");
        if (idx === 1) return !normalizedUserCode.includes("serviceFee: number");
      }
      if (selectedLevel.id === "level-1-3-arrays") {
        if (idx === 0) return normalizedUserCode.includes("string[]");
        if (idx === 1) return normalizedUserCode.includes("roster: string[]") || normalizedUserCode.includes("name: string");
      }
      if (selectedLevel.id === "level-1-4-objects") {
        if (idx === 0) return normalizedUserCode.includes("title: string") || normalizedUserCode.includes("date: string");
        if (idx === 1) return normalizedUserCode.includes("capacity: number");
      }
      if (selectedLevel.id === "level-1-5-functions") {
        if (idx === 0) return normalizedUserCode.includes("price: number") && normalizedUserCode.includes("discount: number");
        if (idx === 1) return normalizedUserCode.includes("): number");
      }
      if (selectedLevel.id === "level-1-6-function-types") {
        if (idx === 0) return normalizedUserCode.includes("comparator: (a: string, b: string) => number") || normalizedUserCode.includes("comparator: (a:string,b:string)=>number");
        if (idx === 1) return normalizedUserCode.includes("events: string[]") && (normalizedUserCode.includes("): string[]") || normalizedUserCode.includes("):string[]"));
      }
      if (selectedLevel.id === "level-2-1-interfaces") {
        if (idx === 0) return normalizedUserCode.includes("interface Event");
        if (idx === 1) return normalizedUserCode.includes("event: Event");
      }
      if (selectedLevel.id === "level-2-2-type-aliases") {
        if (idx === 0) return normalizedUserCode.includes("type EventStatus");
        if (idx === 1) return normalizedUserCode.includes("status: EventStatus");
      }
      if (selectedLevel.id === "level-2-3-optional-readonly") {
        if (idx === 0) return normalizedUserCode.includes("readonly id");
        if (idx === 1) return normalizedUserCode.includes("discountCode?:") || normalizedUserCode.includes("discountCode ?:");
      }
      if (selectedLevel.id === "level-2-4-extension") {
        if (idx === 0) return normalizedUserCode.includes("extends Event");
        if (idx === 1) return !normalizedUserCode.includes("title: string;");
      }
      if (selectedLevel.id === "level-2-5-checkpoint-domain") {
        if (idx === 0) return normalizedUserCode.includes("readonly id");
        if (idx === 1) return normalizedUserCode.includes("seatNumber?:") || normalizedUserCode.includes("seatNumber ?:");
        if (idx === 2) return normalizedUserCode.includes("eventId: string") || normalizedUserCode.includes("eventId : string");
      }
      if (selectedLevel.id === "level-3-1-unions") {
        return normalizedUserCode.includes("concertEvent") || normalizedUserCode.includes("workshopEvent") || normalizedUserCode.includes("meetupEvent") || normalizedUserCode.includes("|");
      }
      if (selectedLevel.id === "level-3-2-literal-types") {
        return normalizedUserCode.includes("draft") && normalizedUserCode.includes("published") && normalizedUserCode.includes("cancelled");
      }
      if (selectedLevel.id === "level-3-3-narrowing") {
        if (idx === 0) return normalizedUserCode.includes("event.kind") && normalizedUserCode.includes("workshop");
        if (idx === 1) return normalizedUserCode.includes("event.title");
      }
      if (selectedLevel.id === "level-3-4-discriminated-unions") {
        if (idx === 0) return normalizedUserCode.includes('kind: "workshop"') || normalizedUserCode.includes("kind:'workshop'") || normalizedUserCode.includes("kind: 'workshop'");
        if (idx === 1) return true; // concert-event / meetup-event matching
      }
      if (selectedLevel.id === "level-3-5-assertions") {
        if (idx === 0) return normalizedUserCode.includes("as Event");
        if (idx === 1) return normalizedUserCode.includes("event.title");
      }
      if (selectedLevel.id === "level-4-1-generics") {
        if (idx === 0) return normalizedUserCode.includes("<T extends") || normalizedUserCode.includes("<T  extends");
        if (idx === 1) return normalizedUserCode.includes("{ id: string") || normalizedUserCode.includes("{id:string");
      }
      if (selectedLevel.id === "level-4-2-generic-constraints") {
        return normalizedUserCode.includes("<T extends") && (normalizedUserCode.includes("id: string") || normalizedUserCode.includes("id:string"));
      }
      if (selectedLevel.id === "level-4-3-pick-omit-partial") {
        if (idx === 0) return normalizedUserCode.includes("Pick<Event");
        if (idx === 1) return normalizedUserCode.includes("title") && normalizedUserCode.includes("date");
      }
      if (selectedLevel.id === "level-4-4-required-readonly-record") {
        if (idx === 0) return normalizedUserCode.includes("Required<EventFormInput>");
        if (idx === 1) return true;
      }
      if (selectedLevel.id === "level-4-5-enums-vs-unions") {
        if (idx === 0) return !normalizedUserCode.includes("enum UserRole");
        if (idx === 1) return normalizedUserCode.includes("admin") && normalizedUserCode.includes("organizer") && normalizedUserCode.includes("attendee");
      }
      if (selectedLevel.id === "level-5-1-generic-react-component") {
        if (idx === 0) return normalizedUserCode.includes("DataCard<T>") || normalizedUserCode.includes("DataCard <T>");
        if (idx === 1) return normalizedUserCode.includes("renderContent: (") && normalizedUserCode.includes("React.ReactNode");
      }
      if (selectedLevel.id === "level-5-2-typed-api-responses") {
        if (idx === 0) return normalizedUserCode.includes("success:") && normalizedUserCode.includes("data:");
        if (idx === 1) return normalizedUserCode.includes("success: false") && normalizedUserCode.includes("error: string");
      }
      if (selectedLevel.id === "level-5-3-typed-forms") {
        return normalizedUserCode.includes("Required<BookingInput>") && !normalizedUserCode.includes("Partial<BookingInput>");
      }
      if (selectedLevel.id === "level-5-4-nextjs-api-route") {
        if (idx === 0) return normalizedUserCode.includes("events: Event[]") || normalizedUserCode.includes("events:Event[]");
        if (idx === 1) return normalizedUserCode.includes("ApiResponse<Event[]>") || normalizedUserCode.includes("ApiResponse <Event[]>");
      }
      if (selectedLevel.id === "level-5-5-launch-day") {
        if (idx === 0) return normalizedUserCode.includes("response.success");
        if (idx === 1) return normalizedUserCode.includes("response.data.map") && normalizedUserCode.includes("DataCard");
      }
      if (selectedLevel.id === "level-5-6-state-managers") {
        if (idx === 0) return normalizedUserCode.includes("SELECT_EVENT") && normalizedUserCode.includes("CLEAR_SELECTION");
        if (idx === 1) return normalizedUserCode.includes("state: DashboardState") && normalizedUserCode.includes("action: DashboardAction") && (normalizedUserCode.includes("): DashboardState") || normalizedUserCode.includes("):DashboardState"));
        if (idx === 2) return normalizedUserCode.includes("case \"SELECT_EVENT\"") && normalizedUserCode.includes("case \"CLEAR_SELECTION\"");
      }
      if (selectedLevel.id === "level-6-1-conditional-types") {
        if (idx === 0) return normalizedUserCode.includes("ResolvePayload<T extends WebhookAction>") || normalizedUserCode.includes("ResolvePayload<T  extends WebhookAction>");
        if (idx === 1) return normalizedUserCode.includes("CREATED") && normalizedUserCode.includes("UPDATED") && normalizedUserCode.includes("KingdomEvent");
        if (idx === 2) return normalizedUserCode.includes("DELETED") && normalizedUserCode.includes("string") && normalizedUserCode.includes("never");
      }
      if (selectedLevel.id === "level-6-2-template-literals") {
        if (idx === 0) return normalizedUserCode.includes("CustomEvent = `on_${BaseEvent}`") || normalizedUserCode.includes("CustomEvent =`on_${BaseEvent}`") || normalizedUserCode.includes("on_${BaseEvent}");
        if (idx === 1) return normalizedUserCode.includes("on_") || normalizedUserCode.includes("CustomEvent");
      }
      if (selectedLevel.id === "level-6-3-mapped-and-infer") {
        if (idx === 0) return normalizedUserCode.includes("extends DbResponse<infer T>") || (normalizedUserCode.includes("infer T") && normalizedUserCode.includes("DbResponse"));
        if (idx === 1) return normalizedUserCode.includes("[P in keyof T]") || normalizedUserCode.includes("keyof T");
        if (idx === 2) return normalizedUserCode.includes("readonly");
      }
      if (selectedLevel.id === "level-7-1-ambient-declarations") {
        if (idx === 0) return normalizedUserCode.includes("declare global");
        if (idx === 1) return normalizedUserCode.includes("interface Window");
        if (idx === 2) return normalizedUserCode.includes("KingdomAnalytics") && normalizedUserCode.includes("track(");
      }
      if (selectedLevel.id === "level-7-2-decorators") {
        if (idx === 0) return normalizedUserCode.includes("descriptor.value =");
        if (idx === 1) return normalizedUserCode.includes("console.log") && normalizedUserCode.includes("propertyKey");
        if (idx === 2) return (normalizedUserCode.includes("original.apply(") || normalizedUserCode.includes("original.call(")) && normalizedUserCode.includes("return descriptor");
      }
      if (selectedLevel.id === "level-7-3-monorepos") {
        if (idx === 0) return normalizedUserCode.includes("references");
        if (idx === 1) return normalizedUserCode.includes("../shared") && normalizedUserCode.includes("path");
      }

      // Default fallback match if no direct mapping exists
      return true;
    });

    setObjectivesChecked(updatedObjectives);

    // Double check keyword requirements
    required.forEach((keyword) => {
      const normalizedKeyword = cleanStr(keyword);
      if (!normalizedUserCode.includes(normalizedKeyword)) {
        errors.push(`Requirement missing: Your solution needs to define or configure "${keyword}".`);
      }
    });

    forbidden.forEach((keyword) => {
      const normalizedKeyword = cleanStr(keyword);
      if (normalizedUserCode.includes(normalizedKeyword)) {
        errors.push(`Rule violation: Word "${keyword}" is strictly forbidden here.`);
      }
    });

    const isAllObjectivesMet = updatedObjectives.every(Boolean);

    if (errors.length === 0 && isAllObjectivesMet) {
      logs.push("[success] Perfect! TS-0000: Compilation succeeded without any structural warnings!");
      logs.push("[success] Runes aligned! You have successfully mastered this level's trial.");
      setTerminalLogs(logs);
      setValidationStatus("success");
      playChime("success");

      // Save complete progress
      const completed = [...completedLevelIds];
      if (!completed.includes(selectedLevel.id)) {
        completed.push(selectedLevel.id);
        setCompletedLevelIds(completed);
        localStorage.setItem("completed_levels", JSON.stringify(completed));
      }

      // Save code locally
      localStorage.setItem(`code_${selectedLevel.id}`, code);

      // Save code to Firebase in background if logged in
      const currentUser = auth.currentUser;
      if (currentUser) {
        saveLevelCodeCloud(currentUser.uid, selectedLevel.id, code).catch((err) => {
          console.warn("Could not save to Firebase:", err);
        });
      }

      // Unlock next level
      const currentLevelIndex = LEVELS.findIndex(l => l.id === selectedLevel.id);
      if (currentLevelIndex !== -1 && currentLevelIndex < LEVELS.length - 1) {
        const nextLevel = LEVELS[currentLevelIndex + 1];
        if (!unlockedLevelIds.includes(nextLevel.id)) {
          const updatedUnlocked = [...unlockedLevelIds, nextLevel.id];
          setUnlockedLevelIds(updatedUnlocked);
          localStorage.setItem("unlocked_levels", JSON.stringify(updatedUnlocked));
        }
      }

      // Add XP
      onXpAwarded(selectedLevel.xpAwarded);

      // Check if unlocked a badge
      if (selectedLevel.id === "level-0-4-reading-errors") {
        onBadgeUnlocked("badge-onboarding", "Scribe Initiate");
      } else if (selectedLevel.id === "level-1-6-function-types") {
        onBadgeUnlocked("badge-primitives", "Primitive Weaver");
      } else if (selectedLevel.id === "level-2-5-checkpoint-domain") {
        onBadgeUnlocked("badge-structural", "Blueprint Architect");
      } else if (selectedLevel.id === "level-3-5-assertions") {
        onBadgeUnlocked("badge-shapeshifter", "Prism Walker");
      } else if (selectedLevel.id === "level-4-5-enums-vs-unions") {
        onBadgeUnlocked("badge-generics", "Generic Alchemist");
      } else if (selectedLevel.id === "level-5-5-launch-day") {
        onBadgeUnlocked("badge-launch-day", "King's Champion Architect");
      } else if (selectedLevel.id === "level-6-3-mapped-and-infer") {
        onBadgeUnlocked("badge-gymnastics", "Gymnastics Grandmaster");
      } else if (selectedLevel.id === "level-7-3-monorepos") {
        onBadgeUnlocked("badge-production", "Production Architect");
      }

      // Trigger success dialog modal
      setTimeout(() => {
        setShowSuccessOverlay(true);
      }, 700);

    } else {
      logs.push(`[error] TS-1042: Typecheck failed. ${errors.length} criteria remaining.`);
      errors.forEach(err => logs.push(`[compiler error] ${err}`));
      setTerminalLogs(logs);
      setValidationErrors(errors);
      setValidationStatus("error");
      playChime("error");
    }
  };

  const handleResetCode = () => {
    if (selectedLevel && window.confirm("Are you sure you want to reset your code? This will discard your current changes.")) {
      playChime("click");
      setUserCode(selectedLevel.playground.starterCode);
      setValidationStatus("idle");
      setValidationErrors([]);
      setObjectivesChecked(new Array(selectedLevel.playground.objectives.length).fill(false));
      setTerminalLogs([
        `[info] Reset code for ${selectedLevel.playground.filesToEdit[0]}`,
        `[info] Editor loaded with starter code.`
      ]);
    }
  };

  const handleSelectLevel = (level: Level) => {
    playChime("click");
    setSelectedLevel(level);
    if (setSelectedLevelId) {
      setSelectedLevelId(level.id);
    }
    setShowConceptModal(true);
  };

  const closeWorkspace = () => {
    playChime("click");
    setSelectedLevel(null);
    if (setSelectedLevelId) {
      setSelectedLevelId(null);
    }
    setShowConceptModal(false);
    setShowSuccessOverlay(false);
    if (onTabChange) {
      onTabChange("home");
    }
  };

  return (
    <div className="flex-1 bg-background text-on-background flex flex-col min-h-[calc(100vh-130px)] md:min-h-[calc(100vh-84px)] overflow-x-hidden font-sans select-none" id="quest-mode-root">
      
      {/* 1. TIMELINE / LANDING VIEW */}
      {!selectedLevel && (
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-6 py-16 text-center" id="under-contraction-container">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/30 shadow-xl inline-flex items-center justify-center">
              <span className="material-icons-out text-5xl text-primary animate-spin" style={{ animationDuration: "12s" }}>construction</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-white mb-4">
            Quests Portal: <span className="vibrant-gradient">Under Contraction</span> 🚧
          </h2>
          
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-md mb-8">
            The grand type-weavers are currently tightening and compressing the space-time fabric of the Quests arena to make room for legendary new trials!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
            <button
              onClick={() => {
                playChime("click");
                // Get last active level, or choose highest unlocked level that is not completed
                const lastVisited = localStorage.getItem("last_active_level_id");
                let targetLevelId = lastVisited || "level-0-1-bootstrap";
                if (setSelectedLevelId) {
                  setSelectedLevelId(targetLevelId);
                }
              }}
              className="flex-1 py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-icons-out text-sm">play_arrow</span>
              Resume Active Quest
            </button>
            
            <button
              onClick={() => {
                playChime("click");
                if (onTabChange) onTabChange("home");
              }}
              className="flex-1 py-3.5 px-6 rounded-xl font-bold border border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-icons-out text-sm font-semibold">home</span>
              Go to Home
            </button>
          </div>
        </div>
      )}

      {/* 2. STORY / CONCEPT REVEAL OVERLAY MODAL */}
      {selectedLevel && showConceptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md" id="concept-modal">
          <div className="relative w-full max-w-2xl bg-surface-container rounded-xl border border-outline-variant shadow-2xl overflow-hidden glow-primary flex flex-col max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={closeWorkspace}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="px-8 pt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary shrink-0">
                  <span className="material-icons-out" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                </div>
                <h1 className="font-sans text-xl md:text-2xl font-extrabold text-on-surface line-clamp-1">
                  {selectedLevel.title}
                </h1>
              </div>
              
              {/* Advanced Mode Toggle proxy for interactive wizard level */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary-container/20 border border-secondary-container/40 rounded-full shrink-0">
                <span className="material-icons-out text-[18px] text-secondary">code</span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary">Wizard Mode (On)</span>
              </div>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-8 space-y-6 overflow-y-auto flex-1 scrollbar-thin">
              
              {/* Narrative Scribe block with Alex/Alaric avatar */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-secondary p-0.5">
                    <img 
                      className="w-full h-full object-cover rounded-md" 
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsDFWtPqrXIuK0FmATpEgGeMD-XyAY9pL1_O_EGDGHkzBynJC64zYm2W8pSVbw3ZB6BugbwibaEyuwT74aXHVCD5H20soEqe3pINUf98UuoED_pYWb2n9hmjtmlUah3nmHZCxbU3Ui1B69tU9EuehHnKSbtS_lZpb2-5MphoMFm3FizJ--8w6PdnKfgvsutKoBOMYqmnRcmcWQz6trQ3JeRWIARBlzHH1vTeoDgzhGiH8t2GeHQIpZWg" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container/60 to-transparent"></div>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  <p className="font-sans text-sm md:text-base text-on-surface">
                    Greetings, apprentice! I'm <span className="font-bold text-primary">Alaric</span>, the Senior Weaver.
                  </p>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed font-normal bg-surface-container-low/50 border-l-2 border-primary/40 pl-3 py-1">
                    "{selectedLevel.story.narrative}"
                  </p>
                  <div className="flex items-center gap-2.5 font-sans text-xs md:text-sm text-on-surface flex-wrap">
                    <span>The first thing you need to formulate is safe rules in</span>
                    <code className="px-2 py-0.5 bg-surface-container-highest text-secondary font-mono text-xs rounded border border-outline-variant/50">
                      {selectedLevel.playground.filesToEdit[0]}
                    </code>
                  </div>
                </div>
              </div>

              {/* Info Boxes Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Real-World Context */}
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-5 group hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-icons-out text-primary text-sm">info</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Real-World Context</span>
                  </div>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {selectedLevel.story.realWorldContext}
                  </p>
                </div>

                {/* Dangerous Consequence */}
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-5 group hover:border-amber-400/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-icons-out text-tertiary text-sm">warning</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-tertiary">Dangerous Outcome</span>
                  </div>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {selectedLevel.story.previousOutcome}
                  </p>
                </div>
              </div>

              {/* Your Task */}
              <div className="bg-secondary-container/10 border border-secondary/20 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-icons-out text-secondary text-sm">task_alt</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary">Your Task</span>
                </div>
                <p className="font-sans text-xs md:text-sm text-on-surface leading-relaxed">
                  {selectedLevel.story.taskDescription}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-8 pb-8 pt-4 border-t border-outline-variant/20 flex justify-end items-center gap-4 bg-surface-container">
              <button 
                onClick={closeWorkspace}
                className="px-6 py-3 font-sans text-xs md:text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Later
              </button>
              
              <button 
                onClick={() => {
                  playChime("click");
                  setShowConceptModal(false);
                }}
                className="lift-button flex items-center gap-3 px-8 py-3.5 bg-secondary-container text-on-primary-container rounded-lg font-bold group cursor-pointer" 
                id="start-coding-btn"
              >
                <span className="font-sans text-xs md:text-sm">Start Coding</span>
                <span className="px-2 py-0.5 bg-secondary/20 rounded text-[10px] font-mono text-on-secondary-container/80 tracking-tighter">
                  (Ctrl+Enter)
                </span>
                <span className="material-icons-out group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 3. MAIN WORKSPACE / PLAYGROUND VIEW */}
      {selectedLevel && !showConceptModal && (
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-0 overflow-y-auto lg:overflow-hidden relative min-h-[calc(100vh-130px)] lg:h-[calc(100vh-84px)] bg-background" id="coding-workspace">
          
          {/* LEFT COLUMN: EDITOR & CONSOLE PORTAL (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col min-h-[500px] lg:h-full border-r border-outline-variant/20 bg-surface-container-lowest" id="editor-column">
            
            {/* Header / macOS style title bar */}
            <div className="px-4 py-3 bg-surface-container border-b border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* 3-dot control buttons */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-outline-variant/30 mx-1" />
                <span className="text-xs font-mono text-on-surface-variant flex items-center gap-1.5 bg-surface-container px-2.5 py-1 rounded border border-outline-variant/30">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  {selectedLevel.playground.filesToEdit[0]}
                </span>
              </div>
              <span className="text-[10px] font-mono text-on-surface-variant/60 font-semibold uppercase tracking-widest">
                TS 5.4 Compiler Core
              </span>
            </div>

            {/* Monaco Editor Container */}
            <div className="flex-1 min-h-[350px] lg:min-h-0 bg-surface-container-lowest relative" id="monaco-wrapper">
              <Editor
                key={selectedLevel.playground.filesToEdit[0] || "file.ts"}
                height="100%"
                path={selectedLevel.playground.filesToEdit[0] || "file.ts"}
                defaultLanguage={selectedLevel.playground.filesToEdit[0]?.endsWith(".json") ? "json" : "typescript"}
                language={selectedLevel.playground.filesToEdit[0]?.endsWith(".json") ? "json" : "typescript"}
                theme="vs-dark"
                value={userCode}
                onChange={(val) => setUserCode(val || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  fontFamily: "JetBrains Mono, Fira Code, monospace",
                  lineNumbers: "on",
                  scrollbar: { vertical: "visible" },
                  automaticLayout: true,
                  padding: { top: 12 },
                  lineHeight: 20
                }}
              />
            </div>

            {/* Interactive Terminal / Console panel */}
            <div className="h-44 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-col font-mono" id="terminal-panel">
              <div className="px-4 py-2 bg-surface-container/60 border-b border-outline-variant/30 flex items-center justify-between">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                  <TermIcon className="w-3.5 h-3.5 text-outline" /> Compiler Console Logs
                </span>
                <span className="text-[10px] text-on-surface-variant/80 font-semibold">
                  STATUS: {validationStatus === "success" ? "PASS" : validationStatus === "error" ? "FAIL" : "READY"}
                </span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto text-xs flex flex-col gap-1.5 scrollbar-thin bg-surface-container-lowest/80">
                {terminalLogs.map((log, idx) => {
                  let styleClass = "text-on-surface-variant/80";
                  if (log.startsWith("[success]")) {
                    styleClass = "text-emerald-400 font-semibold";
                  } else if (log.startsWith("[error]")) {
                    styleClass = "text-rose-400 font-bold animate-pulse";
                  } else if (log.startsWith("[compiler error]")) {
                    styleClass = "text-rose-400/90";
                  } else if (log.startsWith("[info]")) {
                    styleClass = "text-primary";
                  }
                  return (
                    <div key={idx} className={styleClass}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: WORKSPACE DASHBOARD (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col bg-surface-container overflow-y-auto lg:h-full scrollbar-thin p-6 gap-6" id="dashboard-column">
            
            {/* Header controls */}
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
              <button
                onClick={closeWorkspace}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Exit to Timeline
              </button>
              
              <button
                onClick={() => {
                  playChime("click");
                  setShowConceptModal(true);
                }}
                className="px-3.5 py-1.5 bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90 rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" /> Read Story
              </button>
            </div>

            {/* Level details & summary */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono font-extrabold tracking-widest text-primary uppercase">
                {selectedLevel.moduleName}
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">
                {selectedLevel.title}
              </h2>
              <div className="flex gap-2 items-center mt-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wide border ${
                  selectedLevel.difficulty === "hard" 
                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20" 
                    : selectedLevel.difficulty === "medium" 
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20" 
                      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                }`}>
                  {selectedLevel.difficulty}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/10 border border-secondary/20 text-[10px] font-mono text-secondary font-bold">
                  🪙 {selectedLevel.xpAwarded} XP Awarded
                </span>
              </div>
            </div>

            {/* Current challenge task */}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2.5 text-primary">
                <span className="material-icons-out text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">Current Challenge Goal</span>
              </div>
              <p className="text-sm font-medium text-on-surface leading-relaxed">
                {selectedLevel.story.taskDescription}
              </p>
            </div>

            {/* Objectives checklist */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-widest">
                Quest Objectives ({objectivesChecked.filter(Boolean).length}/{selectedLevel.playground.objectives.length})
              </h4>
              <div className="flex flex-col gap-2.5">
                {selectedLevel.playground.objectives.map((obj, index) => {
                  const isChecked = objectivesChecked[index];
                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all duration-300 ${
                        isChecked 
                          ? "bg-emerald-500/5 border-emerald-500/30 text-emerald-400" 
                          : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          isChecked ? "bg-emerald-500 border-emerald-500" : "border-outline bg-surface-container"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 text-surface-container stroke-[3px]" />}
                        </div>
                      </div>
                      <span className={`text-xs font-semibold leading-normal ${isChecked ? "text-emerald-300" : "text-on-surface"}`}>
                        {obj}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hints & Story buttons panel */}
            <div className="flex flex-col gap-3 border-t border-outline-variant/30 pt-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    playChime("click");
                    setShowHints(!showHints);
                    setShowSolution(false);
                  }}
                  className={`py-3 px-2 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer border ${
                    showHints 
                      ? "bg-secondary-container/20 border-secondary text-secondary" 
                      : "bg-surface-container-high border-outline-variant/30 text-on-surface hover:bg-surface-variant"
                  }`}
                >
                  <span className="material-icons-out transition-transform group-hover:rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>help_outline</span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">{showHints ? "Hide Hints" : "Hints"}</span>
                </button>

                <button
                  onClick={() => {
                    playChime("click");
                    setShowSolution(!showSolution);
                    setShowHints(false);
                  }}
                  className={`py-3 px-2 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer border ${
                    showSolution 
                      ? "bg-primary/20 border-primary text-primary" 
                      : "bg-surface-container-high border-outline-variant/30 text-on-surface hover:bg-surface-variant"
                  }`}
                >
                  <span className="material-icons-out transition-transform group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">{showSolution ? "Hide Guide" : "Solution"}</span>
                </button>
              </div>

              {showHints && (
                <div className="bg-surface-container-low/80 rounded-xl p-5 border border-outline-variant/30 flex flex-col gap-3 animate-slide-down">
                  {selectedLevel.playground.hints.map((hint, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-xs text-on-surface-variant leading-relaxed">
                      <span className="text-primary font-bold text-sm leading-none">•</span>
                      <span>{hint}</span>
                    </div>
                  ))}
                </div>
              )}

              {showSolution && (() => {
                const solutionDetails: SolutionDetails = LEVEL_SOLUTIONS[selectedLevel.id] || {
                  explanation: `To solve this level, analyze the current objectives and make sure all compiler criteria are satisfied.`,
                  steps: selectedLevel.playground.hints.length > 0 ? selectedLevel.playground.hints : [
                    "Examine the starter code in the editor.",
                    "Modify the code to match the expected correct output.",
                    "Click 'Compile & Verify Solution' to run the validators."
                  ],
                  codeTip: "Double check your annotations and make sure you do not have syntax or spelling errors."
                };
                return (
                  <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex flex-col gap-4 animate-slide-down" id="solution-panel">
                    <div className="flex items-center gap-2 text-primary border-b border-outline-variant/20 pb-2">
                      <span className="material-icons-out text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                      <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface">Step-by-Step Tutorial</h3>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Concept Briefing</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {solutionDetails.explanation}
                      </p>
                    </div>

                    {solutionDetails.codeExample && (
                      <div className="space-y-1.5 bg-surface-container/20 p-3 rounded-xl border border-outline-variant/10">
                        <h4 className="font-mono text-[10px] font-bold text-primary uppercase tracking-wider">Syntax & Code Pattern</h4>
                        <pre className="p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-[11px] font-mono text-on-surface/90 overflow-x-auto whitespace-pre leading-relaxed scrollbar-thin">
                          <code>{solutionDetails.codeExample}</code>
                        </pre>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">How to solve this</h4>
                      <div className="flex flex-col gap-2">
                        {solutionDetails.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start bg-surface-container/40 p-2.5 rounded-lg border border-outline-variant/10">
                            <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs text-on-surface leading-normal">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Expected Solution Code</h4>
                        <button
                          onClick={() => {
                            playChime("click");
                            navigator.clipboard.writeText(selectedLevel.playground.solutionCode);
                            setTerminalLogs(prev => [...prev, "[info] Solution code copied to clipboard! Ready to paste in the editor."]);
                          }}
                          className="text-[10px] font-mono text-primary hover:underline cursor-pointer flex items-center gap-1 bg-transparent border-0"
                        >
                          <span className="material-icons-out text-[12px]">content_copy</span> Copy Code
                        </button>
                      </div>
                      <div className="relative">
                        <pre className="p-3.5 bg-surface-container-lowest border border-outline-variant/30 rounded-lg text-[11px] font-mono text-secondary overflow-x-auto whitespace-pre leading-relaxed scrollbar-thin">
                          <code>{selectedLevel.playground.solutionCode}</code>
                        </pre>
                      </div>
                    </div>

                    {solutionDetails.codeTip && (
                      <div className="p-3.5 bg-secondary-container/10 border border-secondary/20 rounded-lg flex gap-2 items-start">
                        <span className="material-icons-out text-secondary text-sm shrink-0">info</span>
                        <p className="text-[11px] text-on-surface-variant leading-relaxed">
                          <strong className="text-secondary">Pro Tip:</strong> {solutionDetails.codeTip}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Action Buttons Panel */}
            <div className="mt-auto border-t border-outline-variant/30 pt-6 flex flex-col gap-3">
              <button
                onClick={handleVerifyCode}
                className="w-full py-3.5 bg-gradient-to-r from-primary via-secondary to-tertiary hover:brightness-110 text-neutral-950 font-extrabold rounded-lg text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" /> Compile & Verify Solution
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleResetCode}
                  className="py-2.5 bg-surface-container-high border border-outline-variant/30 hover:bg-surface-variant text-on-surface rounded-lg text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset Starter
                </button>
                <button
                  onClick={closeWorkspace}
                  className="py-2.5 bg-surface-container-high border border-outline-variant/30 hover:bg-surface-variant text-on-surface rounded-lg text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" /> Close Quest
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. LEVEL COMPLETE SUCCESS MODAL OVERLAY */}
      {selectedLevel && showSuccessOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" id="success-overlay">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full flex flex-col items-center text-center gap-5 relative shadow-2xl shadow-emerald-500/10 animate-scale-up">
            
            <button
              onClick={() => setShowSuccessOverlay(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Spinning emerald badge */}
            <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10">
              <Award className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <div className="text-[10px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase">
                Challenge Complete
              </div>
              <h3 className="text-xl font-black text-slate-100 font-sans tracking-tight mt-1">
                Level Mastery Secured!
              </h3>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed font-serif italic">
                "Excellent work! Priya nods in silent approval. The code is structured, compile constraints pass, and the Event System holds sturdy."
              </p>
            </div>

            <div className="w-full bg-slate-950 rounded-xl p-3.5 border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">Awarded Progress</span>
              <span className="font-mono text-emerald-400 font-bold">
                +{selectedLevel.xpAwarded} XP 🪙
              </span>
            </div>

            <button
              onClick={() => {
                playChime("click");
                setShowSuccessOverlay(false);
                // Advance to next level automatically if available
                const currentIdx = LEVELS.findIndex(l => l.id === selectedLevel.id);
                if (currentIdx !== -1 && currentIdx < LEVELS.length - 1) {
                  const nextLvl = LEVELS[currentIdx + 1];
                  setSelectedLevel(nextLvl);
                  if (setSelectedLevelId) {
                    setSelectedLevelId(nextLvl.id);
                  }
                  setShowConceptModal(true);
                } else {
                  // Completed course!
                  setSelectedLevel(null);
                  if (setSelectedLevelId) {
                    setSelectedLevelId(null);
                  }
                }
              }}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded font-extrabold text-xs tracking-widest uppercase transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
            >
              {LEVELS.findIndex(l => l.id === selectedLevel.id) < LEVELS.length - 1 
                ? "Advance to Next Level" 
                : "Course Complete! Show Timeline"}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

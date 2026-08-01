import { useState, useEffect } from "react";
import { STAGES, LEVELS } from "../curriculum";
import { Level, Stage } from "../types";
import {
  Trophy,
  BookOpen,
  Star,
  Sparkles,
  Award,
  Lock,
  ChevronRight,
  ShieldAlert,
  Settings,
  ShoppingCart,
  Gamepad2,
  Info,
  Compass,
} from "lucide-react";

interface HomeProps {
  xp: number;
  unlockedLevelIds: string[];
  onTabChange: (tab: "home" | "level" | "quest" | "playground" | "docs") => void;
  onSelectLevel: (levelId: string) => void;
  wizardTitle: string;
}

export default function Home({
  xp,
  unlockedLevelIds,
  onTabChange,
  onSelectLevel,
  wizardTitle,
}: HomeProps) {
  const [completedLevelIds, setCompletedLevelIds] = useState<string[]>([]);
  const [expandedStageId, setExpandedStageId] =
    useState<string>("stage-0-onboarding");
  const [showSubModal, setShowSubModal] = useState<{
    title: string;
    desc: string;
  } | null>(null);

  // Load completed levels
  useEffect(() => {
    const savedCompleted = localStorage.getItem("completed_levels");
    if (savedCompleted) {
      setCompletedLevelIds(JSON.parse(savedCompleted));
    }
  }, []);

  // Dynamically expand the active stage containing the current level on load
  useEffect(() => {
    const lastClicked = sessionStorage.getItem("last_clicked_level_id");
    let targetLevelId = lastClicked;

    if (!targetLevelId && unlockedLevelIds.length > 0) {
      // Find the first unlocked level that is not completed yet (active level)
      const activeLevel = LEVELS.find(
        (lvl) =>
          unlockedLevelIds.includes(lvl.id) &&
          !completedLevelIds.includes(lvl.id),
      );

      // Fallback to the highest unlocked level if all unlocked levels are completed
      targetLevelId = activeLevel
        ? activeLevel.id
        : unlockedLevelIds[unlockedLevelIds.length - 1] ||
          "level-0-1-bootstrap";
    }

    if (targetLevelId) {
      // Find the stage that contains this target level
      const targetStage = STAGES.find((stage) =>
        stage.levelIds.includes(targetLevelId),
      );

      if (targetStage) {
        setExpandedStageId(targetStage.id);
      }
    }
  }, [unlockedLevelIds, completedLevelIds]);

  // Scroll to the last clicked level immediately if returning to Home
  useEffect(() => {
    const lastClicked = sessionStorage.getItem("last_clicked_level_id");
    if (lastClicked && expandedStageId) {
      const scrollTarget = () => {
        const element = document.getElementById(`level-card-${lastClicked}`);
        if (element) {
          element.scrollIntoView({ behavior: "auto", block: "center" });
        }
      };

      // Execute immediately and on requestAnimationFrame to prevent scroll jump from top
      scrollTarget();
      const raf = requestAnimationFrame(scrollTarget);
      return () => cancelAnimationFrame(raf);
    }
  }, [expandedStageId]);

  // Determine user level from XP
  const calculatedLevel = Math.max(1, Math.floor(xp / 100) + 1);

  // Status title based on XP
  const getStatusTitle = (currentXp: number) => {
    if (currentXp < 150) return "Beginner 🌱";
    if (currentXp < 350) return "Apprentice Weaver 🕸️";
    if (currentXp < 650) return "Blueprint Architect 📐";
    if (currentXp < 1000) return "Shapeshifter Mage 🔮";
    if (currentXp < 1400) return "Generic Alchemist 🧪";
    return "Grandmaster Alchemist 👑";
  };

  const handleLevelClick = (lvlId: string) => {
    sessionStorage.setItem("last_clicked_level_id", lvlId);
    onSelectLevel(lvlId);
    onTabChange("level" as any);
  };

  const handleStartLearning = () => {
    // Get last active level, or choose highest unlocked level that is not completed
    const lastVisited = localStorage.getItem("last_active_level_id");
    let targetLevelId = lastVisited;

    if (!targetLevelId || !unlockedLevelIds.includes(targetLevelId)) {
      const incompleteUnlocked = LEVELS.find(
        (l) =>
          unlockedLevelIds.includes(l.id) && !completedLevelIds.includes(l.id),
      );
      if (incompleteUnlocked) {
        targetLevelId = incompleteUnlocked.id;
      } else {
        targetLevelId =
          unlockedLevelIds[unlockedLevelIds.length - 1] ||
          "level-0-1-bootstrap";
      }
    }

    if (targetLevelId) {
      sessionStorage.setItem("last_clicked_level_id", targetLevelId);
    }
    onSelectLevel(targetLevelId);
    onTabChange("level" as any);
  };

  return (
    <div
      className="flex-1 bg-surface flex flex-col min-h-screen text-on-surface pb-12 pt-8 px-4"
      id="home-view"
    >
      {/* Hero Section */}
      <section
        className="text-center mb-16 relative max-w-[1280px] mx-auto px-6 md:px-12"
        id="hero-section"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mb-6 inline-flex p-4 rounded-full bg-surface-container-high border border-outline-variant shadow-lg active-glow">
          <span
            className="material-icons-out text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            psychology
          </span>
        </div>

        <h1 className="font-sans text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Master TypeScript through{" "}
          <span className="vibrant-gradient">Play</span>
        </h1>

        <p className="max-w-2xl mx-auto text-on-surface-variant text-base md:text-lg mb-10 leading-relaxed">
          Learn TypeScript types and concepts through an interactive game.
          Progress through levels, solve challenges, and become a TypeScript
          expert.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleStartLearning}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 px-8 py-4 rounded-xl font-extrabold shadow-lg transition-all active:scale-95 cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(164,201,255,0.25)] duration-150"
          >
            Start Learning
            <span className="material-icons-out">arrow_forward</span>
          </button>

          <button
            onClick={() => onTabChange("docs")}
            className="flex items-center justify-center gap-2 border border-outline-variant bg-surface-container-low text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container transition-all active:scale-95 cursor-pointer"
          >
            <span className="material-icons-out">menu_book</span>
            Cheat Sheet
          </button>
        </div>

        {/* Feature quick links */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() =>
              setShowSubModal({
                title: "Difficulty Calibration",
                desc: "The levels automatically scale from essential onboarding steps (Stage 0) up to professional Next.js full-stack type definitions (Stage 5).",
              })
            }
            className="px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-icons-out text-sm">settings</span>{" "}
            Difficulty
          </button>
          <button
            onClick={() =>
              setShowSubModal({
                title: "Kingdom Academy Shop",
                desc: "Accumulate XP by compiling safe solution files! You can redeem points in upcoming releases for custom avatar designs and spellbook colors.",
              })
            }
            className="px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-sm text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer"
          >
            <span className="material-icons-out text-sm">shopping_cart</span>{" "}
            Shop
          </button>
          <button
            onClick={() =>
              setShowSubModal({
                title: "Mini Games Arena",
                desc: "Test your quick reflexes in typing-errors and speed-declaring trials inside our advanced Playground!",
              })
            }
            className="px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-sm text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
          >
            <span className="material-icons-out text-sm">sports_esports</span>{" "}
            Mini Games
          </button>
        </div>
      </section>

      {/* Dynamic Stats Grid */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-[1100px] w-full mx-auto px-6"
        id="stats-grid"
      >
        <div className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors">
          <p className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary">
            Points
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-on-surface font-sans">
            {xp} XP
          </h3>
        </div>
        <div className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors">
          <p className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary">
            Completed
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-on-surface font-sans">
            {completedLevelIds.length} / {LEVELS.length}
          </h3>
        </div>
        <div className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors">
          <p className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary">
            Wizard Level
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-on-surface font-sans">
            Lvl {calculatedLevel}
          </h3>
        </div>
        <div className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors">
          <p className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary">
            Rank Status
          </p>
          <h3 className="text-base md:text-lg font-bold text-primary truncate px-1 mt-1 font-sans">
            {getStatusTitle(xp)}
          </h3>
        </div>
      </section>

      {/* Interactive Learning Path / Roadmap */}
      <section
        className="relative max-w-[1000px] w-full mx-auto px-6 mb-20"
        id="timeline-section"
      >
        <h2 className="text-2xl md:text-4xl font-sans font-extrabold text-center mb-16 flex items-center justify-center gap-3">
          Your Beginner Learning Path 🌱
        </h2>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 timeline-line opacity-20 hidden md:block"></div>

          <div className="flex flex-col gap-12">
            {STAGES.map((stage, sIdx) => {
              const stageLevels = LEVELS.filter((lvl) =>
                stage.levelIds.includes(lvl.id),
              );
              const isStageUnlocked =
                sIdx === 0 ||
                stageLevels.some((l) => unlockedLevelIds.includes(l.id));
              const completedInStage = stageLevels.filter((l) =>
                completedLevelIds.includes(l.id),
              ).length;
              const totalInStage = stageLevels.length;
              const isFullyCompleted = completedInStage === totalInStage;
              const isExpanded = expandedStageId === stage.id;

              return (
                <div
                  key={stage.id}
                  className="relative z-10 w-full"
                  id={`stage-node-${stage.id}`}
                >
                  {/* Timeline bullet for wide screens */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full border-2 bg-surface-container flex items-center justify-center shadow-lg hidden md:flex transition-all duration-300 ${
                      isFullyCompleted
                        ? "border-emerald-500 bg-emerald-950/40"
                        : isStageUnlocked
                          ? "border-primary active-glow bg-primary/10"
                          : "border-outline-variant"
                    }`}
                  >
                    {isFullyCompleted ? (
                      <span className="material-icons-out text-sm text-emerald-400">
                        check
                      </span>
                    ) : isStageUnlocked ? (
                      <span className="material-icons-out text-sm text-primary">
                        play_arrow
                      </span>
                    ) : (
                      <span className="material-icons-out text-xs text-outline">
                        lock
                      </span>
                    )}
                  </div>

                  {/* Stage Layout container */}
                  <div
                    className={`w-full md:w-[85%] ${sIdx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} transition-all`}
                  >
                    {/* Render active or clicked stage in expanded form */}
                    {isExpanded ? (
                      <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-primary glow-primary transition-all duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                          <div>
                            <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-1">
                              Module 0{sIdx} • Stage Chapter
                            </div>
                            <h3 className="text-xl md:text-2xl font-sans font-bold text-on-surface">
                              {stage.title.replace("Stage " + sIdx + " — ", "")}
                            </h3>
                            <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                              {stage.description}
                            </p>
                          </div>
                          <span className="shrink-0 font-mono text-xs text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {completedInStage}/{totalInStage} Completed
                          </span>
                        </div>

                        {/* Progress Bar inside expanded stage */}
                        <div className="w-full bg-surface-container h-1.5 rounded-full mb-8 overflow-hidden">
                          <div
                            className="bg-primary h-full transition-all duration-500"
                            style={{
                              width: `${(completedInStage / totalInStage) * 100}%`,
                            }}
                          />
                        </div>

                        {/* Interactive Level Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {stageLevels.map((lvl, index) => {
                            const isLvlUnlocked = unlockedLevelIds.includes(
                              lvl.id,
                            );
                            const isLvlCompleted = completedLevelIds.includes(
                              lvl.id,
                            );

                            return (
                              <button
                                key={lvl.id}
                                id={`level-card-${lvl.id}`}
                                disabled={!isLvlUnlocked}
                                onClick={() => handleLevelClick(lvl.id)}
                                className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 ${
                                  isLvlCompleted
                                    ? "bg-emerald-950/15 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 cursor-pointer"
                                    : isLvlUnlocked
                                      ? "bg-surface-container-high border-primary/30 hover:border-primary text-on-surface hover:scale-[1.02] cursor-pointer"
                                      : "bg-surface-container-low border-outline-variant/40 text-on-surface-variant opacity-50 cursor-not-allowed"
                                }`}
                              >
                                <div className="flex justify-between items-center w-full mb-2">
                                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-outline">
                                    Trial 0{index + 1}
                                  </span>
                                  {isLvlCompleted ? (
                                    <span className="material-icons-out text-sm text-emerald-400">
                                      check_circle
                                    </span>
                                  ) : isLvlUnlocked ? (
                                    <span className="material-icons-out text-sm text-primary">
                                      play_circle
                                    </span>
                                  ) : (
                                    <span className="material-icons-out text-xs text-outline">
                                      lock
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xs font-bold font-sans line-clamp-1">
                                  {lvl.title}
                                </h4>
                                <p className="text-[10px] text-outline mt-1 font-mono">
                                  🪙 {lvl.xpAwarded} XP
                                </p>
                              </button>
                            );
                          })}
                        </div>

                        {/* Footer button inside card to enter Quest page */}
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={() => {
                              // Find first level in this stage that is unlocked and not completed
                              const firstActive = stageLevels.find(
                                (lvl) =>
                                  unlockedLevelIds.includes(lvl.id) &&
                                  !completedLevelIds.includes(lvl.id),
                              );
                              // Fallback to highest unlocked level in this stage
                              const fallback = stageLevels
                                .filter((lvl) =>
                                  unlockedLevelIds.includes(lvl.id),
                                )
                                .pop();
                              // Hard fallback to first level of stage
                              const targetLvl =
                                firstActive || fallback || stageLevels[0];

                              if (targetLvl) {
                                sessionStorage.setItem(
                                  "last_clicked_level_id",
                                  targetLvl.id,
                                );
                                onSelectLevel(targetLvl.id);
                              }
                              onTabChange("quest");
                            }}
                            className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                          >
                            Enter Active Code Editor{" "}
                            <span className="material-icons-out text-sm">
                              arrow_forward_ios
                            </span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Collapsed/compact render */
                      <div
                        onClick={() =>
                          isStageUnlocked && setExpandedStageId(stage.id)
                        }
                        className={`p-6 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          isStageUnlocked
                            ? "bg-surface-container hover:bg-surface-container-high border-outline-variant hover:border-primary"
                            : "bg-surface-container-low border-outline-variant/30 opacity-60 cursor-not-allowed"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isStageUnlocked
                                ? "bg-primary/10 text-primary"
                                : "bg-outline/10 text-outline"
                            }`}
                          >
                            <span className="material-icons-out">
                              {sIdx === 0
                                ? "rocket_launch"
                                : sIdx === 1
                                  ? "commit"
                                  : sIdx === 2
                                    ? "schema"
                                    : "extension"}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-on-surface font-sans">
                              {stage.title}
                            </h4>
                            <p className="text-xs text-on-surface-variant mt-1">
                              {isStageUnlocked
                                ? `${completedInStage} of ${totalInStage} levels masterfully solved.`
                                : "Awaiting prerequisites in previous chapters."}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {!isStageUnlocked ? (
                            <span className="material-icons-out text-sm text-outline">
                              lock
                            </span>
                          ) : (
                            <span className="material-icons-out text-sm text-on-surface-variant group-hover:text-primary">
                              unfold_more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Modal / Announcement Toast for feature placeholders */}
      {showSubModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          id="info-overlay"
        >
          <div className="p-6 bg-surface-container border border-outline-variant rounded-xl max-w-sm w-full flex flex-col gap-4 relative shadow-2xl">
            <button
              onClick={() => setShowSubModal(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface cursor-pointer"
            >
              <span className="material-icons-out">close</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="material-icons-out text-primary text-2xl">
                info
              </span>
              <h3 className="text-lg font-bold text-on-surface">
                {showSubModal.title}
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {showSubModal.desc}
            </p>
            <button
              onClick={() => setShowSubModal(null)}
              className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 rounded font-bold text-xs uppercase tracking-widest cursor-pointer transition-all"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

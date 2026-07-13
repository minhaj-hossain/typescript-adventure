import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  BookOpen,
  AlertCircle,
  RefreshCw,
  Trophy,
  Star,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Flame,
  Cpu,
  Sparkles,
  ShieldCheck,
  Skull,
  Zap,
  Terminal,
  ArrowRightLeft,
  BookOpenCheck,
  BadgeAlert,
  HelpCircle,
} from "lucide-react";
import { REFERENCE_LIBRARY } from "../curriculum";
import { GRIMOIRE_ILLUSTRATIONS } from "../data/illustrations";

const CAPSTONE_PROJECTS = [
  {
    id: "capstone-todo",
    title: "Todo Application",
    difficulty: "easy",
    description:
      "A typed todo list with categories, due dates, and completion state.",
    requiredConcepts: [
      "interfaces",
      "optional-properties",
      "literal-types",
      "array-transformations",
    ],
    suggestedFeatures: [
      "A Todo interface with an optional dueDate and a literal-typed priority field.",
      "Filtering and sorting using generic array utilities (unique, sortBy).",
      "Persist state securely with a typed Record<string, Todo> lookup dictionary.",
    ],
  },
  {
    id: "capstone-blog-dashboard",
    title: "Blog Dashboard",
    difficulty: "medium",
    description:
      "An authoring dashboard for blog posts with drafts, published posts, and typed API calls.",
    requiredConcepts: [
      "discriminated-unions",
      "typed-api-responses",
      "pick",
      "omit",
      "partial",
    ],
    suggestedFeatures: [
      "A Post union type discriminated by status: 'draft' | 'published'.",
      "An ApiResponse<Post[]> generic wrapper for fetching and posting blog records.",
      "A Partial<Post> editing form that narrows strictly to Required<Post> on publish.",
    ],
  },
  {
    id: "capstone-ecommerce-product-page",
    title: "E-commerce Product Page",
    difficulty: "medium",
    description:
      "A product detail page with variants (size/color), pricing, and an add-to-cart flow.",
    requiredConcepts: [
      "intersection-types",
      "generics",
      "generic-react-components",
      "function-types",
    ],
    suggestedFeatures: [
      "A generic <VariantPicker<T>> component accepting dynamic customization options.",
      "An intersection type combining a base Product description with local Inventory counts.",
      "A typed onAddToCart callback ensuring no malformed items enter checkout.",
    ],
  },
  {
    id: "capstone-chat-interface",
    title: "Chat Interface",
    difficulty: "hard",
    description:
      "A real-time-feeling chat UI with message types (text, image, system) and typed state updates.",
    requiredConcepts: [
      "discriminated-unions",
      "generics",
      "typed-api-responses",
      "enums",
    ],
    suggestedFeatures: [
      "A Message union discriminated by kind: 'text' | 'image' | 'system'.",
      "A generic useTypedReducer<T> hook for clean, type-safe message state updates.",
      "An enum or literal union representing the live WebSocket connection status.",
    ],
  },
  {
    id: "capstone-kanban-board",
    title: "Kanban Board",
    difficulty: "hard",
    description:
      "A drag-and-drop task board with columns, typed drag events, and generic card rendering.",
    requiredConcepts: [
      "generic-react-components",
      "record",
      "generic-utilities",
      "interface-extension",
    ],
    suggestedFeatures: [
      "A Record<ColumnId, Card[]> board state shape protecting columns from contamination.",
      "A generic, reusable <DataCard<T>> component designed for any draggable card item.",
      "groupBy and sortBy generic utility functions powering drag-and-drop columns.",
    ],
  },
];

// Map standard curriculum categories to beautifully flavored guild themes
const CATEGORY_FLAVORS: Record<
  string,
  {
    label: string;
    icon: string;
    description: string;
    border: string;
    glow: string;
  }
> = {
  All: {
    label: "All Realms",
    icon: "📜",
    description:
      "Browse the entire collective wisdom of the TypeScript kingdom.",
    border: "border-slate-800",
    glow: "shadow-slate-500/5",
  },
  Concepts: {
    label: "Philosophical Decrees",
    icon: "🧙‍♂️",
    description:
      "Core static vs dynamic laws governing compilation and runtime forces.",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/5",
  },
  Tooling: {
    label: "Forge Mechanics",
    icon: "⚙️",
    description:
      "Master compiler rules and configure tsconfig circles for strict defense.",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/5",
  },
  Basics: {
    label: "Initiate Primers",
    icon: "🌱",
    description:
      "Base primitives, readonly wards, object constraints, and void patterns.",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/5",
  },
  "Structural Types": {
    label: "Structural Seals",
    icon: "🧬",
    description:
      "Compose type lineages with interface extension, unions, and intersections.",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/5",
  },
  "Advanced Types": {
    label: "High Type Alchemy",
    icon: "🔥",
    description:
      "Harness shape-shifting generics, bounds, and adaptive parameter moulds.",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/5",
  },
  "Utility Types": {
    label: "Utility Transmutations",
    icon: "⚡",
    description:
      "Dynamically clone and alter blueprints using Pick, Omit, and Partial.",
    border: "border-pink-500/30",
    glow: "shadow-pink-500/5",
  },
  "React & Next.js": {
    label: "Enchanted Frameworks",
    icon: "⚛️",
    description:
      "Apply secure TypeScript properties directly to UI component trees and forms.",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/5",
  },
};

export default function ReferenceDocs() {
  const [activeTab, setActiveTab] = useState<"library" | "capstones">(
    "library",
  );
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Track which card's comparison is currently active (stacked view vs comparison slider)
  const [revealedFaults, setRevealedFaults] = useState<
    Record<string, "both" | "buggy" | "safe">
  >({});

  const categories = useMemo(() => {
    const list = new Set(REFERENCE_LIBRARY.map((entry) => entry.category));
    return ["All", ...Array.from(list)];
  }, []);

  const filteredEntries = useMemo(() => {
    return REFERENCE_LIBRARY.filter((entry) => {
      const matchesSearch =
        entry.term.toLowerCase().includes(search.toLowerCase()) ||
        entry.shortExplanation.toLowerCase().includes(search.toLowerCase()) ||
        entry.syntax.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || entry.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div
      className="flex flex-col gap-8 p-6 h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] overflow-y-auto bg-surface text-on-surface font-sans"
      id="docs-page"
    >
      {/* Scroll of Wisdom Header Banner */}
      <div
        className="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container p-8 shadow-2xl shadow-primary/5"
        id="grimoire-intro-banner"
      >
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
              <BookOpenCheck className="w-9 h-9 animate-pulse text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                  Scroll of Wisdom
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  Grimoire Redesign
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-black text-slate-100 font-sans uppercase mt-2 tracking-tight">
                Ancients' Spellcraft Documentation
              </h1>
              <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
                Welcome to the sacred grimoire. This archive documents each rule
                of compiler alchemy. Here, you can study real-world code
                formulas side-by-side: contrast a{" "}
                <span className="text-rose-400 font-bold">
                  Fragile Spell (vulnerable, buggy patterns)
                </span>{" "}
                against a{" "}
                <span className="text-emerald-400 font-bold">
                  Resilient Spell (reinforced, type-safe structures)
                </span>{" "}
                to secure your knowledge.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-850 p-4 rounded-xl shrink-0">
            <div className="text-center">
              <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">
                SCROLLS BOUND
              </span>
              <span className="text-sky-400 font-black text-lg">
                {REFERENCE_LIBRARY.length} Total
              </span>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div className="text-center">
              <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">
                ALIGNMENT
              </span>
              <span className="text-emerald-400 font-black text-lg">
                Strict-Mode
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2 gap-4"
        id="docs-tab-header"
      >
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("library")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-black transition-all cursor-pointer ${
              activeTab === "library"
                ? "bg-sky-500/15 text-sky-400 border border-sky-500/30 shadow-md shadow-sky-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
            }`}
            id="tab-btn-library"
          >
            <BookOpen className="w-4 h-4" />
            Grimoire Library
          </button>
          <button
            onClick={() => setActiveTab("capstones")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-black transition-all cursor-pointer ${
              activeTab === "capstones"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-md shadow-amber-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
            }`}
            id="tab-btn-capstones"
          >
            <Trophy className="w-4 h-4" />
            Capstone Arenas
          </button>
        </div>

        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pl-1">
          {activeTab === "library"
            ? "⚔️ Read to Avoid compilation fractures"
            : "🏅 Transfer mastery to sandbox codebases"}
        </span>
      </div>

      {activeTab === "library" ? (
        <div
          className="flex flex-col lg:flex-row gap-8"
          id="docs-library-section"
        >
          {/* Scroll Category Sidebar */}
          <aside
            className="w-full lg:w-72 flex flex-col gap-4 shrink-0"
            id="docs-sidebar"
          >
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-4">
              <div>
                <h2 className="text-[11px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-3.5 h-0.5 bg-sky-500 rounded-full"></span>
                  Runic Chambers
                </h2>
                <p className="text-[10px] text-slate-500 font-sans mt-1">
                  Select a category to filter the ancient archives.
                </p>
              </div>

              <div className="flex flex-col gap-1.5" id="docs-category-list">
                {categories.map((cat) => {
                  const flavor =
                    CATEGORY_FLAVORS[cat] || CATEGORY_FLAVORS["All"];
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-black transition-all duration-150 cursor-pointer flex items-center justify-between border ${
                        isSelected
                          ? "bg-sky-500/10 text-sky-300 border-sky-500/40 shadow-sm"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50 border-transparent"
                      }`}
                      id={`cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base leading-none">
                          {flavor.icon}
                        </span>
                        <span>{flavor.label}</span>
                      </span>
                      {isSelected && (
                        <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedCategory !== "All" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border bg-slate-900/50 text-xs text-slate-400 leading-relaxed font-sans ${CATEGORY_FLAVORS[selectedCategory]?.border}`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-slate-300 font-bold uppercase tracking-wider text-[10px]">
                  <span>{CATEGORY_FLAVORS[selectedCategory]?.icon}</span>
                  <span>{CATEGORY_FLAVORS[selectedCategory]?.label}</span>
                </div>
                <p className="text-[11px] leading-relaxed italic">
                  "{CATEGORY_FLAVORS[selectedCategory]?.description}"
                </p>
              </motion.div>
            )}
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col gap-6" id="docs-main">
            {/* Search Header */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4.5 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search ancient terms, formulas, or strict rules..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                  id="docs-search-input"
                />
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Showing {filteredEntries.length} items
                </span>
                <span className="text-slate-700">|</span>
                <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest bg-sky-500/5 border border-sky-500/10 px-2 py-0.5 rounded">
                  {selectedCategory} Category
                </span>
              </div>
            </div>

            {/* Entries Grid */}
            <div className="flex flex-col gap-8" id="docs-grid">
              {filteredEntries.map((entry) => {
                const illustration = GRIMOIRE_ILLUSTRATIONS[entry.id];
                const viewMode = revealedFaults[entry.id] || "both"; // 'both' | 'buggy' | 'safe'

                return (
                  <motion.div
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 bg-slate-900 border border-slate-800 hover:border-slate-750 transition-all duration-300 rounded-2xl flex flex-col gap-6 group relative shadow-lg"
                    id={`entry-${entry.id}`}
                  >
                    {/* Magical Corner Ribbons for specific categories */}
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl pointer-events-none">
                      <div className="absolute top-2 right-[-24px] rotate-45 w-[90px] h-[18px] bg-slate-850 border-b border-slate-800 text-[8px] font-mono font-bold text-center flex items-center justify-center uppercase tracking-wider text-slate-500">
                        {entry.category.substring(0, 8)}
                      </div>
                    </div>

                    {/* Entry Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850 pb-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[9px] font-mono font-black text-sky-400 bg-sky-500/5 border border-sky-500/15 px-2.5 py-0.5 rounded-md uppercase tracking-widest">
                            {entry.category}
                          </span>
                          {entry.seeAlsoLevels.map((lvl) => (
                            <span
                              key={lvl}
                              className="text-[9px] font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-850"
                              title="Taught inside this academy dungeon level"
                            >
                              🔑 Level {lvl.replace("level-", "")}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-base font-black font-sans text-slate-100 tracking-tight group-hover:text-sky-400 transition-colors flex items-center gap-2">
                          <BookOpen className="w-4.5 h-4.5 text-sky-500/80 group-hover:animate-pulse" />
                          {entry.term}
                        </h3>
                      </div>

                      {/* Side-by-Side View Selector (Toggle filters) */}
                      {illustration && (
                        <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-850/80 shrink-0 self-start sm:self-auto">
                          <button
                            onClick={() =>
                              setRevealedFaults((prev) => ({
                                ...prev,
                                [entry.id]: "both",
                              }))
                            }
                            className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded cursor-pointer transition-all flex items-center gap-1 ${
                              viewMode === "both"
                                ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                            title="Show side-by-side comparison"
                          >
                            <ArrowRightLeft className="w-3 h-3" />
                            Compare Both
                          </button>
                          <button
                            onClick={() =>
                              setRevealedFaults((prev) => ({
                                ...prev,
                                [entry.id]: "buggy",
                              }))
                            }
                            className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded cursor-pointer transition-all flex items-center gap-1 ${
                              viewMode === "buggy"
                                ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                            title="Only view flawed code example"
                          >
                            <Skull className="w-3 h-3 text-rose-400" />
                            Fragile
                          </button>
                          <button
                            onClick={() =>
                              setRevealedFaults((prev) => ({
                                ...prev,
                                [entry.id]: "safe",
                              }))
                            }
                            className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded cursor-pointer transition-all flex items-center gap-1 ${
                              viewMode === "safe"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                            title="Only view type-safe code example"
                          >
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            Resilient
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Short explanation */}
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest pl-0.5">
                        Core Theorem
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                        {entry.shortExplanation}
                      </p>
                    </div>

                    {/* ILLUSTATIVE SIDE-BY-SIDE GRIMOIRE SECTION */}
                    {illustration ? (
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        id={`illustrations-${entry.id}`}
                      >
                        {/* 1. FRAGILE / BUGGY FORMULA CARD */}
                        <AnimatePresence mode="popLayout">
                          {(viewMode === "both" || viewMode === "buggy") && (
                            <motion.div
                              layout
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="flex flex-col gap-3 p-4 bg-rose-950/10 border border-rose-900/30 rounded-xl relative shadow-inner shadow-rose-950/5 hover:border-rose-900/50 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-rose-400 flex items-center gap-1.5 uppercase tracking-widest text-[9px] font-black">
                                  <BadgeAlert className="w-3.5 h-3.5 text-rose-400" />
                                  {illustration.buggyTitle}
                                </span>
                                <span className="text-[8px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 py-0.5 rounded uppercase">
                                  Fractured Spell 💥
                                </span>
                              </div>

                              <div className="relative">
                                <pre className="text-[11px] text-rose-300 font-mono bg-rose-950/20 p-3.5 rounded-lg border border-rose-950/40 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                                  {illustration.buggyCode}
                                </pre>
                              </div>

                              <div className="flex gap-2 text-[11px] text-rose-400 font-sans leading-relaxed bg-rose-950/15 p-3 rounded-lg border border-rose-950/30">
                                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold">
                                    Alchemical Leak:
                                  </span>{" "}
                                  {illustration.buggyDesc}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* 2. RESILIENT / SAFE FORMULA CARD */}
                        <AnimatePresence mode="popLayout">
                          {(viewMode === "both" || viewMode === "safe") && (
                            <motion.div
                              layout
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="flex flex-col gap-3 p-4 bg-emerald-950/10 border border-emerald-900/30 rounded-xl relative shadow-inner shadow-emerald-950/5 hover:border-emerald-900/50 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-emerald-400 flex items-center gap-1.5 uppercase tracking-widest text-[9px] font-black">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                  {illustration.safeTitle}
                                </span>
                                <span className="text-[8px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase">
                                  Harmonized Spell ✨
                                </span>
                              </div>

                              <div className="relative">
                                <pre className="text-[11px] text-emerald-300 font-mono bg-emerald-950/20 p-3.5 rounded-lg border border-emerald-950/40 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                                  {illustration.safeCode}
                                </pre>
                              </div>

                              <div className="flex gap-2 text-[11px] text-emerald-400 font-sans leading-relaxed bg-emerald-950/15 p-3 rounded-lg border border-emerald-950/30">
                                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold">
                                    Compiler Guard:
                                  </span>{" "}
                                  {illustration.safeDesc}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Fallback Standard Syntax Example (if any missing illustration) */
                      <div className="flex flex-col gap-2.5 bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-slate-500" />
                          Syntax Formula
                        </span>
                        <pre className="text-[11px] text-sky-300 font-mono overflow-x-auto whitespace-pre leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-900">
                          {entry.syntax}
                        </pre>
                      </div>
                    )}

                    {/* Common Pitfalls List */}
                    {entry.commonPitfalls &&
                      entry.commonPitfalls.length > 0 && (
                        <div className="flex flex-col gap-2.5 border-t border-slate-850 pt-4">
                          <span className="text-slate-400 flex items-center gap-1.5 uppercase tracking-wider text-[9px] font-black">
                            <Flame className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            Sleeping Curses (Common Pitfalls)
                          </span>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
                            {entry.commonPitfalls.map((p, idx) => (
                              <li
                                key={idx}
                                className="text-slate-400 flex items-start gap-2 text-xs"
                              >
                                <span className="text-rose-500 font-bold shrink-0 mt-0.5">
                                  ⚡
                                </span>
                                <span className="font-sans leading-relaxed">
                                  {p}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Related terms footer */}
                    <div className="pt-4 border-t border-slate-850 flex flex-wrap gap-2 items-center text-[9px] uppercase tracking-wider text-slate-500">
                      <span className="font-mono flex items-center gap-1">
                        <Terminal className="w-3 h-3" />
                        Leyline Connections:
                      </span>
                      {entry.relatedTerms.map((term) => (
                        <span
                          key={term}
                          className="font-mono bg-slate-950 hover:text-sky-300 hover:border-sky-500/20 cursor-pointer transition-colors text-slate-400 px-2 py-0.5 rounded border border-slate-850"
                          onClick={() => {
                            const found = REFERENCE_LIBRARY.find(
                              (t) =>
                                t.id === `ref-${term}` ||
                                t.term.toLowerCase() === term.toLowerCase(),
                            );
                            if (found) {
                              setSearch(found.term);
                            } else {
                              setSearch(term);
                            }
                          }}
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}

              {filteredEntries.length === 0 && (
                <div
                  className="col-span-full py-16 flex flex-col items-center justify-center text-center p-6 bg-slate-900 border border-slate-800 rounded-xl"
                  id="docs-empty-state"
                >
                  <RefreshCw className="w-7 h-7 text-sky-400 animate-spin mb-4" />
                  <h3 className="text-sm font-semibold text-slate-200 font-mono">
                    No matching scrolls found
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 max-w-sm font-sans leading-relaxed">
                    The search query did not trigger any archives in this runic
                    chamber. Try typing another term or select "All Realms".
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      ) : (
        <div className="flex flex-col gap-6" id="docs-capstones-section">
          {/* Header Introduction Banner */}
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-100 tracking-tight font-sans uppercase">
                  Capstone Transfer Arenas
                </h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-2xl font-sans">
                  The ultimate test of a wizard. These five optional capstone
                  tasks are set outside the Event Management Kingdom. Rebuild
                  these applications independently to prove you can transfer
                  your TypeScript prowess to any codebase.
                </p>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-850 px-4 py-2.5 rounded-xl text-center shrink-0">
              <span className="text-[9px] font-mono text-slate-500 block">
                ARENAS AVAILABLE
              </span>
              <span className="text-amber-400 font-black text-sm">
                5 Active Projects
              </span>
            </div>
          </div>

          {/* Capstones Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            id="capstones-grid"
          >
            {CAPSTONE_PROJECTS.map((project) => {
              const diffColors = {
                easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                hard: "text-rose-400 bg-rose-500/10 border-rose-500/20",
              }[project.difficulty as "easy" | "medium" | "hard"];

              return (
                <div
                  key={project.id}
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-amber-500/25 transition-all duration-300 rounded-xl flex flex-col gap-4 group relative overflow-hidden"
                  id={`capstone-${project.id}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-black text-slate-100 font-sans uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded border ${diffColors}`}
                    >
                      {project.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Required Concepts Tags */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      Required Runes (Concepts)
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.requiredConcepts.map((concept) => (
                        <span
                          key={concept}
                          className="text-[9px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-850"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Features / Blueprint */}
                  <div className="flex flex-col gap-2.5 border-t border-slate-850/80 pt-3.5 mt-auto">
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                      Forge Blueprints
                    </span>
                    <ul className="space-y-2 text-xs">
                      {project.suggestedFeatures.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-400"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

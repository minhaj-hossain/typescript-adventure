"use client";

import { useState } from "react";
import { REFERENCE_LIBRARY } from "../../curriculum";
import { Search, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function GrimoirePage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(REFERENCE_LIBRARY.map((item) => item.category)))];

  const filtered = REFERENCE_LIBRARY.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(query.toLowerCase()) ||
      item.shortExplanation.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-100 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-sky-400" />
            <span>The Grimoire Reference Library</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Complete handbook of TypeScript concepts, patterns, pitfalls, and syntax.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search concepts or syntax..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
              selectedCategory === cat
                ? "bg-sky-500/20 border-sky-500/40 text-sky-300"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((entry) => (
          <div
            key={entry.id}
            className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-100 font-mono">{entry.term}</h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400">
                {entry.category}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{entry.shortExplanation}</p>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-850 font-mono text-xs text-emerald-400 overflow-x-auto">
              <code>{entry.syntax}</code>
            </div>
            {entry.seeAlsoLevels.length > 0 && (
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <span className="text-[10px] text-slate-500 uppercase font-mono">Related Levels:</span>
                {entry.seeAlsoLevels.map((lvlId) => (
                  <Link
                    key={lvlId}
                    href={`/level/${lvlId}`}
                    className="text-[10px] font-mono text-sky-400 hover:underline flex items-center gap-0.5"
                  >
                    <span>{lvlId}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

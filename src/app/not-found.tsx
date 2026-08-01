"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl mb-4">
        <Sparkles className="w-10 h-10 text-primary animate-pulse" />
      </div>
      <h1 className="text-3xl md:text-4xl font-black mb-2 vibrant-gradient">
        Disrupted Sector (404)
      </h1>
      <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
        The coordinates do not align with any known level in the Event Management Kingdom.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 font-extrabold text-xs rounded-xl shadow-lg hover:scale-105 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Academy Home</span>
      </Link>
    </div>
  );
}

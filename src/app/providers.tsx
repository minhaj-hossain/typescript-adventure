"use client";

import React from "react";
import { GameProvider } from "../context/GameContext";
import ErrorBoundary from "../components/ErrortBoundary";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <GameProvider>{children}</GameProvider>
    </ErrorBoundary>
  );
}

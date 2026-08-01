"use client";

import React from "react";
import ErrorBoundary from "./ErrortBoundary";
import { GameProvider } from "../context/GameContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <GameProvider>{children}</GameProvider>
    </ErrorBoundary>
  );
}

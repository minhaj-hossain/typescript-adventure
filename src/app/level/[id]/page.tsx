"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { LevelDetailsPage } from "../../../components/LevelDetailsPage";
import Navigation from "../../../components/Navigation";
import WizardSanctum from "../../../components/WizardSanctum";
import { GameProvider, useGame } from "../../../context/GameContext";

function LevelPageContent({ levelId }: { levelId: string }) {
  const router = useRouter();
  const {
    xp,
    unlockedLevelIds,
    setUnlockedLevelIds,
    unlockedBadges,
    user,
    isSanctumOpen,
    setIsSanctumOpen,
    handleXpAwarded,
    handleBadgeUnlocked,
    handleSignOut,
  } = useGame();

  const handleSelectLevelId = (nextId: string) => {
    sessionStorage.setItem("last_clicked_level_id", nextId);
    router.push(`/level/${nextId}`);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <>
      {/* Global nav bar — same as Home page */}
      <Navigation
        activeTab="level"
        onTabChange={(tab) => {
          if (tab === "home") router.push("/");
        }}
        xp={xp}
        badgesCount={unlockedBadges.length}
        user={user}
        onOpenSanctum={() => setIsSanctumOpen(true)}
      />

      {/* Level workspace */}
      <LevelDetailsPage
        levelId={levelId}
        onSelectLevelId={handleSelectLevelId}
        unlockedLevelIds={unlockedLevelIds}
        setUnlockedLevelIds={setUnlockedLevelIds}
        onXpAwarded={handleXpAwarded}
        onBadgeUnlocked={handleBadgeUnlocked}
        onBackToHome={handleBackToHome}
      />

      {/* Wizard Sanctum modal */}
      <WizardSanctum
        isOpen={isSanctumOpen}
        onClose={() => setIsSanctumOpen(false)}
        xp={xp}
        unlockedBadges={unlockedBadges}
        unlockedLevels={unlockedLevelIds}
        onAuthSuccess={() => {}}
        onSignOut={handleSignOut}
      />
    </>
  );
}

export default function LevelPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const levelId = resolvedParams?.id || "level-0-1-bootstrap";

  return (
    <GameProvider>
      <LevelPageContent levelId={levelId} />
    </GameProvider>
  );
}

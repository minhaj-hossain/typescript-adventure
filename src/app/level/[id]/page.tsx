"use client";

import { use } from "react";
import { useRouter, notFound } from "next/navigation";
import { LevelDetailsPage } from "../../../components/LevelDetailsPage";
import Navigation from "../../../components/Navigation";
import WizardSanctum from "../../../components/WizardSanctum";
import { useGame } from "../../../context/GameContext";
import { LEVELS } from "../../../curriculum";

export default function LevelPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const levelId = resolvedParams?.id || "";

  // Return 404 if level does not exist
  const exists = LEVELS.some((l) => l.id === levelId);
  if (!exists && levelId) {
    notFound();
  }

  const router = useRouter();
  const {
    xp,
    unlockedLevelIds,
    setUnlockedLevelIds,
    unlockedBadges,
    isSanctumOpen,
    setIsSanctumOpen,
    handleXpAwarded,
    handleBadgeUnlocked,
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
      <Navigation
        activeTab="level"
        onTabChange={(tab) => {
          if (tab === "home") router.push("/");
        }}
        xp={xp}
        badgesCount={unlockedBadges.length}
        onOpenSanctum={() => setIsSanctumOpen(true)}
      />

      <LevelDetailsPage
        levelId={levelId}
        onSelectLevelId={handleSelectLevelId}
        unlockedLevelIds={unlockedLevelIds}
        setUnlockedLevelIds={setUnlockedLevelIds}
        onXpAwarded={handleXpAwarded}
        onBadgeUnlocked={handleBadgeUnlocked}
        onBackToHome={handleBackToHome}
      />

      <WizardSanctum
        isOpen={isSanctumOpen}
        onClose={() => setIsSanctumOpen(false)}
        xp={xp}
        unlockedBadges={unlockedBadges}
        unlockedLevels={unlockedLevelIds}
      />
    </>
  );
}
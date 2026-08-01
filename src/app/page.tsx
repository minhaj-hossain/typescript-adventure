"use client";

import { useRouter } from "next/navigation";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import WizardSanctum from "../components/WizardSanctum";
import { useGame } from "../context/GameContext";

export default function HomePage() {
  const router = useRouter();
  const {
    xp,
    unlockedLevelIds,
    unlockedBadges,
    wizardTitle,
    isSanctumOpen,
    setIsSanctumOpen,
  } = useGame();

  const handleSelectLevel = (levelId: string) => {
    sessionStorage.setItem("last_clicked_level_id", levelId);
    router.push(`/level/${levelId}`);
  };

  return (
    <>
      <Navigation
        activeTab="home"
        onTabChange={() => {}}
        xp={xp}
        badgesCount={unlockedBadges.length}
        onOpenSanctum={() => setIsSanctumOpen(true)}
      />

      <div className="flex-1 flex flex-col min-h-0">
        <Home
          xp={xp}
          unlockedLevelIds={unlockedLevelIds}
          onTabChange={() => {}}
          onSelectLevel={handleSelectLevel}
          wizardTitle={wizardTitle}
        />
      </div>

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
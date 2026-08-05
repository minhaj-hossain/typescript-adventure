import { useState, useRef, useEffect } from "react";
import { Sparkles, Award, Compass, Volume2, VolumeX, Zap } from "lucide-react";
import { useGame } from "../context/GameContext";
import Link from "next/link";

function getInitialXp(): number {
  if (typeof window === "undefined") return 0;
  const saved = localStorage.getItem("wizard_xp");
  return saved ? JSON.parse(saved) : 0;
}

interface NavigationProps {
  activeTab: string;
  onTabChange?: (tab: string) => void;
  xp: number;
  badgesCount: number;
  onOpenSanctum: () => void;
}

export default function Navigation({
  activeTab,
  onTabChange: _onTabChange,
  xp,
  badgesCount,
  onOpenSanctum,
}: NavigationProps) {
  const { settings, updateSettings } = useGame();
  const soundEnabled = settings.soundEnabled;
  const [mounted, setMounted] = useState(false);
  const [displayXp, setDisplayXp] = useState(0);
  const [displaySoundEnabled, setDisplaySoundEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    setDisplayXp(getInitialXp());
    setDisplaySoundEnabled(soundEnabled);
  }, []);

  useEffect(() => {
    if (mounted) setDisplayXp(xp);
  }, [xp, mounted]);

  useEffect(() => {
    if (mounted) setDisplaySoundEnabled(soundEnabled);
  }, [soundEnabled, mounted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "m" || e.key === "M") {
        updateSettings({ soundEnabled: !soundEnabled });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [soundEnabled, updateSettings]);

  const progressPercent = Math.min(100, Math.max(10, (displayXp / 1500) * 100));
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="sticky top-0 w-full h-16 z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/20 shadow-sm"
      id="app-navigation"
    >
      <div className="flex flex-row justify-between items-center px-4 md:px-8 h-full max-w-[1440px] mx-auto w-full">
        {/* Left group: Logo + Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <Link
            href="/"
            className="font-sans text-base md:text-lg font-black flex items-center gap-2 cursor-pointer hover:opacity-90 active:scale-95 transition-all select-none"
          >
            <div className="p-1.5 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-lg shadow-sm flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#001c39] animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent tracking-tight font-extrabold">
              TypeScript Adventure
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 bg-surface-container/40 p-0.5 rounded-lg border border-outline-variant/20 ml-2">
            <Link
              href="/"
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === "home" ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Home
            </Link>
            <Link
              href="/playground"
              className="px-2.5 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface rounded-md transition-all"
            >
              Playground
            </Link>
            <Link
              href="/grimoire"
              className="px-2.5 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface rounded-md transition-all"
            >
              Grimoire
            </Link>
            <Link
              href="/progress"
              className="px-2.5 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface rounded-md transition-all"
            >
              Stats
            </Link>
          </div>
        </div>

        {/* Right group: XP + Sound + Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] md:text-xs font-bold rounded-lg border border-tertiary/30 bg-tertiary/10 text-tertiary"
            title={`${displayXp} XP earned`}
          >
            <Zap className="w-3.5 h-3.5 fill-tertiary" />
            <span className="font-mono">{displayXp} XP</span>
          </div>

          <button
            onClick={() => updateSettings({ soundEnabled: !displaySoundEnabled })}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] md:text-xs font-bold rounded-lg transition-all cursor-pointer border border-outline-variant/20 bg-surface-container/40 hover:bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"
            title={displaySoundEnabled ? "Mute sounds (M)" : "Enable sounds (M)"}
            aria-label={displaySoundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {displaySoundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-primary" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-outline" />
            )}
            <span className="hidden sm:inline">{displaySoundEnabled ? "Sound On" : "Muted"}</span>
          </button>

          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 md:gap-2.5 bg-surface-container/60 hover:bg-surface-container-high px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-outline-variant/30 transition-all cursor-pointer text-[11px] md:text-xs font-bold text-on-surface shadow-sm hover:border-primary/20 active:scale-95"
              id="nav-profile-pill"
            >
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(164,201,255,0.5)]"></div>
              <span className="max-w-[70px] md:max-w-[120px] truncate">
                Guest Scholar
              </span>
              <span className="text-outline text-[9px] md:text-[10px] select-none opacity-65">
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2.5 w-72 bg-surface-container-high border border-outline-variant/60 rounded-xl shadow-2xl p-4 flex flex-col gap-3.5 z-50 animate-slide-down">
                <div className="border-b border-outline-variant/30 pb-2.5 flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-outline mb-0.5">
                    Sorcerer Status
                  </span>
                  <span className="text-sm font-bold text-on-surface truncate">
                    Guest Scholar
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-on-surface-variant">XP Progress</span>
                    <span className="text-primary font-bold">{displayXp} XP</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/20">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(164,201,255,0.4)] transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-tertiary animate-pulse" />
                    <span className="text-xs text-on-surface-variant font-medium">
                      Earned Badges
                    </span>
                  </div>
                  <span className="text-xs font-bold text-on-surface font-mono bg-surface-container px-2 py-0.5 rounded border border-outline-variant/10">
                    {badgesCount}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenSanctum();
                  }}
                  className="w-full py-2.5 bg-primary/10 hover:bg-primary/15 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-colors text-xs font-bold cursor-pointer flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open Soul Sanctum</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
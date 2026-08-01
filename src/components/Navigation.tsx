import { useState, useRef, useEffect } from "react";
import { Sparkles, Home, Award, Compass } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  xp: number;
  badgesCount: number;
  onOpenSanctum: () => void;
}

export default function Navigation({
  activeTab,
  onTabChange,
  xp,
  badgesCount,
  onOpenSanctum,
}: NavigationProps) {
  const progressPercent = Math.min(100, Math.max(10, (xp / 1500) * 100));
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
      <div className="flex flex-row justify-between items-center px-4 md:px-8 h-full max-w-[1440px] mx-auto w-full gap-2">
        {/* Logo and Brand */}
        <div className="flex items-center shrink-0">
          <span
            onClick={() => onTabChange("home")}
            className="font-sans text-base md:text-lg font-black flex items-center gap-2 cursor-pointer hover:opacity-90 active:scale-95 transition-all select-none"
          >
            <div className="p-1.5 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-lg shadow-sm shadow-primary/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#001c39] animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent tracking-tight font-extrabold">
              <span className="xs:hidden md:hidden">TS</span>
              <span className="hidden xs:inline md:hidden">TS Adventure</span>
              <span className="hidden md:inline">TypeScript Adventure</span>
            </span>
          </span>
        </div>

        {/* Main Navigation — Home only */}
        <div className="flex items-center gap-0.5 md:gap-1 bg-surface-container/40 p-1 rounded-xl border border-outline-variant/20">
          <button
            onClick={() => onTabChange("home")}
            className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 text-[11px] md:text-xs font-bold rounded-lg transition-all cursor-pointer border ${
              activeTab === "home"
                ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_12px_rgba(164,201,255,0.06)]"
                : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/40"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </div>

        {/* User Profile dropdown */}
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

          {/* Dropdown Panel */}
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

              {/* XP display */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-on-surface-variant">XP Progress</span>
                  <span className="text-primary font-bold">{xp} XP</span>
                </div>
                <div className="w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/20">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(164,201,255,0.4)] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Badges count */}
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

              {/* Action Button */}
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
    </nav>
  );
}
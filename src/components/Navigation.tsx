import { useState, useRef, useEffect } from "react";
import { Sparkles, Terminal, BookOpen, Home, Trophy, Award } from "lucide-react";
import { User } from "firebase/auth";

interface NavigationProps {
  activeTab: "home" | "quest" | "playground" | "docs";
  onTabChange: (tab: "home" | "quest" | "playground" | "docs") => void;
  xp: number;
  badgesCount: number;
  user: User | null;
  onOpenSanctum: () => void;
}

export default function Navigation({
  activeTab,
  onTabChange,
  xp,
  badgesCount,
  user,
  onOpenSanctum,
}: NavigationProps) {
  const progressPercent = Math.min(100, Math.max(10, (xp / 1500) * 100));
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/30 shadow-md" id="app-navigation">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-4 max-w-[1280px] mx-auto w-full gap-4">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-6">
          <span 
            onClick={() => onTabChange("home")}
            className="font-sans text-xl md:text-2xl font-extrabold flex items-center gap-2.5 cursor-pointer hover:opacity-90 active:scale-98 transition-all"
          >
            <div className="p-1.5 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-lg shadow-md shadow-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#001c39] animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent tracking-tight font-extrabold">
              TypeScript Adventure
            </span>
          </span>
          
          {/* Main Tab Choices */}
          <div className="hidden md:flex gap-1 bg-surface-container/60 p-1 rounded-lg border border-outline-variant/40">
            <button
              onClick={() => onTabChange("home")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer border ${
                activeTab === "home"
                  ? "bg-primary/15 text-primary border-primary/25 shadow-[0_0_12px_rgba(164,201,255,0.08)]"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/50"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <button
              onClick={() => onTabChange("quest")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer border ${
                activeTab === "quest"
                  ? "bg-primary/15 text-primary border-primary/25 shadow-[0_0_12px_rgba(164,201,255,0.08)]"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/50"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Quests
            </button>
            <button
              onClick={() => onTabChange("playground")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer border ${
                activeTab === "playground"
                  ? "bg-primary/15 text-primary border-primary/25 shadow-[0_0_12px_rgba(164,201,255,0.08)]"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/50"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Playground
            </button>
            <button
              onClick={() => onTabChange("docs")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer border ${
                activeTab === "docs"
                  ? "bg-primary/15 text-primary border-primary/25 shadow-[0_0_12px_rgba(164,201,255,0.08)]"
                  : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Library
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden gap-1 bg-surface-container/60 p-1 rounded-lg border border-outline-variant/40 w-full justify-around">
          <button
            onClick={() => onTabChange("home")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded transition-all cursor-pointer border ${
              activeTab === "home" 
                ? "bg-primary/15 text-primary border-primary/25" 
                : "text-on-surface-variant border-transparent"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onTabChange("quest")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded transition-all cursor-pointer border ${
              activeTab === "quest" 
                ? "bg-primary/15 text-primary border-primary/25" 
                : "text-on-surface-variant border-transparent"
            }`}
          >
            Quests
          </button>
          <button
            onClick={() => onTabChange("playground")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded transition-all cursor-pointer border ${
              activeTab === "playground" 
                ? "bg-primary/15 text-primary border-primary/25" 
                : "text-on-surface-variant border-transparent"
            }`}
          >
            Playground
          </button>
          <button
            onClick={() => onTabChange("docs")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded transition-all cursor-pointer border ${
              activeTab === "docs" 
                ? "bg-primary/15 text-primary border-primary/25" 
                : "text-on-surface-variant border-transparent"
            }`}
          >
            Library
          </button>
        </div>

        {/* User Stats and Auth Actions (Profile Dropdown) */}
        <div className="relative shrink-0" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 bg-surface-container hover:bg-surface-container-high px-4 py-2 rounded-xl border border-outline-variant/40 transition-all cursor-pointer text-xs font-bold text-on-surface shadow-sm hover:border-primary/40 active:scale-95"
            id="nav-profile-pill"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(164,201,255,0.6)]"></div>
            <span className="max-w-[120px] truncate">
              {user ? (user.displayName || "My Soul") : "My Sanctum"}
            </span>
            <span className="text-outline text-[10px] ml-0.5 select-none opacity-65">▼</span>
          </button>

          {/* Dropdown Panel */}
          {isOpen && (
            <div className="absolute right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 mt-2.5 w-72 bg-surface-container-high border border-outline-variant/60 rounded-xl shadow-2xl p-4 flex flex-col gap-3.5 z-50 animate-slide-down">
              <div className="border-b border-outline-variant/30 pb-2.5 flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-wider text-outline mb-0.5">
                  Sorcerer Status
                </span>
                <span className="text-sm font-bold text-on-surface truncate">
                  {user ? (user.displayName || "Apprentice Mage") : "Guest Scholar"}
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
                  <span className="text-xs text-on-surface-variant font-medium">Earned Badges</span>
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
                <span>🔮</span>
                <span>{user ? "Open Soul Sanctum" : "Sync Soul & Save"}</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

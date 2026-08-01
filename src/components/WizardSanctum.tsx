import { motion } from "motion/react";
import {
  Sparkles,
  ShieldCheck,
  X,
  Compass,
  Trophy,
  Activity,
  Flame,
  Award,
  BookOpen,
} from "lucide-react";

interface WizardSanctumProps {
  isOpen: boolean;
  onClose: () => void;
  xp: number;
  unlockedBadges: string[];
  unlockedLevels: string[];
}

const WIZARD_TITLES = [
  "Primitive Initiate",
  "Type Apprentice",
  "Blueprint Scribe",
  "Union Conduiteer",
  "Compiler Alchemist",
  "Generics Sorcerer",
  "Strict Mode Archmage",
  "Infinite Type Transmuter",
];

export default function WizardSanctum({
  isOpen,
  onClose,
  xp,
  unlockedBadges,
  unlockedLevels,
}: WizardSanctumProps) {
  const wizardTitle =
    WIZARD_TITLES[Math.min(WIZARD_TITLES.length - 1, Math.floor(xp / 200))] ||
    "Compiler Mage";

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
      id="sanctum-overlay"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
        id="sanctum-modal"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="p-6 border-b border-slate-850 flex items-center justify-between relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Compass
                className="w-5 h-5 animate-spin"
                style={{ animationDuration: "12s" }}
              />
            </div>
            <div>
              <h2 className="text-sm font-black uppercase text-slate-100 tracking-wider">
                Wizard Soul Sanctum
              </h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-0.5 text-sky-400">
                Local Progress & Achievements
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-950/50 hover:bg-slate-800 border border-slate-850 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            id="close-sanctum-btn"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Body */}
        <div className="flex-1 overflow-y-auto p-6 relative z-10 space-y-6">
          <div className="space-y-6" id="sanctum-profile-view">
            <div className="p-5 bg-slate-950/60 border border-slate-850 rounded-xl flex flex-col items-center text-center gap-4 relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 text-2xl font-black font-mono shadow-lg relative">
                <div
                  className="absolute inset-0 rounded-full border border-sky-400/10 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-base font-black text-slate-100 font-sans uppercase">
                  Guest Scholar
                </h3>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 block w-max mx-auto mt-1">
                  {wizardTitle}
                </span>
                <p className="text-[10px] text-slate-500 mt-2 font-mono">
                  Progress saved locally on this device
                </p>
              </div>

              <div className="w-full h-px bg-slate-850"></div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">
                    Spell Power
                  </span>
                  <span className="text-sky-400 font-black text-sm">
                    {xp} XP
                  </span>
                </div>
                <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">
                    Unlocked Seals
                  </span>
                  <span className="text-amber-400 font-black text-sm">
                    {unlockedBadges.length} Badges
                  </span>
                </div>
              </div>
            </div>

            {/* Progress details */}
            <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-3">
              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Local Progress Active
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Your wizard soul is bound to this browser. Any levels unlocked,
                XP earned, or sandbox custom spells created will automatically
                save locally and persist across sessions.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded">
                  {unlockedLevels.length} Levels Unlocked
                </span>
                <span className="text-[9px] font-mono font-bold text-sky-400 bg-sky-500/5 border border-sky-500/20 px-2 py-0.5 rounded">
                  {unlockedBadges.length} Badges Earned
                </span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                <Trophy className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-[9px] font-mono text-slate-500 block uppercase">
                  Badges
                </span>
                <span className="text-sky-400 font-black text-sm">
                  {unlockedBadges.length}
                </span>
              </div>
              <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                <Activity className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[9px] font-mono text-slate-500 block uppercase">
                  Levels
                </span>
                <span className="text-sky-400 font-black text-sm">
                  {unlockedLevels.length}
                </span>
              </div>
              <div className="bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center">
                <Flame className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                <span className="text-[9px] font-mono text-slate-500 block uppercase">
                  XP
                </span>
                <span className="text-sky-400 font-black text-sm">{xp}</span>
              </div>
            </div>

            {/* Badges earned */}
            <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-2">
              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Earned Badges
              </h4>
              {unlockedBadges.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {unlockedBadges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[9px] font-mono font-bold text-amber-400 bg-amber-500/5 border border-amber-500/20 px-2 py-0.5 rounded"
                    >
                      🏅 {badge}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[10px] text-slate-500 font-mono">
                  No badges earned yet. Complete levels to unlock achievements!
                </p>
              )}
            </div>

            {/* Info */}
            <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-2">
              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-sky-400" />
                How Progress Works
              </h4>
              <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
                All progress is stored locally in your browser. No account or
                login required — just open the app and continue your adventure
                from where you left off.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
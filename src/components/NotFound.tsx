import {
  Map,
  ArrowLeft,
  ShieldAlert,
  Sparkles,
  Home,
  Compass,
} from "lucide-react";

interface NotFoundProps {
  onGoHome: () => void;
  onGoLibrary: () => void;
  invalidTabName?: string;
}

export default function NotFound({
  onGoHome,
  onGoLibrary,
  invalidTabName = "Unknown Path",
}: NotFoundProps) {
  return (
    <div
      className="flex-1 bg-[#070b13] text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans select-none min-h-[calc(100vh-64px)]"
      id="not-found-screen"
    >
      {/* Dynamic Background Dust */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Runic Circle Indicator */}
      <div
        className="max-w-md w-full text-center flex flex-col items-center gap-6 relative z-10"
        id="not-found-container"
      >
        {/* Animated runic seal */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-tr from-sky-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center relative shadow-xl">
            <Compass className="w-10 h-10 text-sky-400 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500/20 border border-purple-500/40 rounded-full flex items-center justify-center text-[10px] text-purple-400 font-bold">
              ?
            </div>
          </div>
        </div>

        {/* Content Heading */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 self-center">
            Path Fracture: 404
          </span>

          <h2 className="text-xl md:text-2xl font-black text-slate-100 uppercase tracking-tight mt-1">
            Lost in the Code Continuum
          </h2>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto font-sans mt-1">
            The coordinates{" "}
            <span className="font-mono text-purple-300 font-semibold">
              "{invalidTabName}"
            </span>{" "}
            do not align with any known leylines. The event managers have locked
            down this sector.
          </p>
        </div>

        {/* Visual Portal Map Graphic */}
        <div className="w-full bg-[#0d1527] border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4 text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 rounded-lg border border-sky-500/20 text-sky-400 shrink-0">
              <Map className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                Need a safe warp point?
              </h4>
              <p className="text-[10px] text-slate-500 font-sans">
                Return to the sanctuary map or study scrolls.
              </p>
            </div>
          </div>
          <ShieldAlert className="w-4 h-4 text-purple-400/60 shrink-0" />
        </div>

        {/* Actions Row */}
        <div className="flex gap-2.5 w-full">
          <button
            onClick={onGoHome}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-500 text-slate-950 rounded-lg text-xs uppercase tracking-wider font-extrabold transition-all cursor-pointer shadow-lg shadow-sky-900/15"
          >
            <Home className="w-4 h-4 text-slate-950" />
            Warp to Sanctum (Home)
          </button>

          <button
            onClick={onGoLibrary}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer hover:border-slate-700"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            Open Wisdom Grimoire
          </button>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600 mt-2">
          <span>COORDS: [0x404_VOID]</span>
          <span>•</span>
          <span>SYSTEM STABLE</span>
        </div>
      </div>
    </div>
  );
}

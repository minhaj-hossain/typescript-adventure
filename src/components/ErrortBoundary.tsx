import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Trash2, Home, Sparkles } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      "Uncaught error caught by magical Leyline Barrier:",
      error,
      errorInfo,
    );
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    // Force reset state to safe default tab
    localStorage.removeItem("selected_level_id");
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans select-text"
          id="error-boundary-screen"
        >
          {/* Subtle Ambient Background Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl w-full bg-[#0d1527] border border-rose-500/20 rounded-2xl p-8 shadow-2xl relative z-10 flex flex-col gap-6">
            {/* Header Status */}
            <div className="flex items-center gap-4 border-b border-rose-500/10 pb-5">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 shadow-lg shadow-rose-950/20">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                  Alchemical Fracture detected
                </span>
                <h1 className="text-xl md:text-2xl font-black text-slate-100 uppercase tracking-tight mt-1.5">
                  Spellcraft Execution Failure
                </h1>
              </div>
            </div>

            {/* Error Message Details */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-slate-400 leading-relaxed">
                The magical compiler has run into an unhandled contradiction in
                the script scrolls. Don't worry, apprentice! Apurba and the team
                have installed protection wards. You can review the anomaly
                report below:
              </p>

              <div className="bg-[#05080e] rounded-xl p-4.5 border border-rose-950/40 relative">
                <pre className="text-[11px] text-rose-300 font-mono overflow-x-auto whitespace-pre leading-relaxed max-h-40 overflow-y-auto scrollbar-thin">
                  {this.state.error?.stack ||
                    this.state.error?.message ||
                    "Mysterious compile anomaly"}
                </pre>
              </div>
            </div>

            {/* Recovery Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer hover:border-slate-700 active:scale-98"
              >
                <RefreshCw className="w-4 h-4 text-sky-400" />
                Reload Spell
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer active:scale-98"
              >
                <Home className="w-4 h-4" />
                Return to Realm
              </button>

              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-rose-950/20 hover:bg-rose-950/40 text-rose-400 border border-rose-900/30 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer active:scale-98"
                title="Clears all local cache progress and resets study scroll"
              >
                <Trash2 className="w-4 h-4" />
                Reset Progress
              </button>
            </div>

            <div className="border-t border-slate-850 pt-4 flex justify-between items-center text-[10px] uppercase font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500/70" />
                Protected by Bangladeshi Wards
              </span>
              <span>ID: MJ-2026-ERR</span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

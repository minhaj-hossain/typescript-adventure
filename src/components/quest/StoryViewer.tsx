import React from "react";
import { Sparkles, MessageSquare, AlertTriangle, ShieldCheck } from "lucide-react";
import { Level } from "../../types";

interface Mentor {
  name: string;
  role: string;
  avatarBg: string;
  badgeStyle: string;
  borderAccent: string;
}

const MENTORS: Record<string, Mentor> = {
  Minhaj: {
    name: "Minhaj",
    role: "Senior Staff Engineer",
    avatarBg: "bg-gradient-to-br from-blue-600 to-indigo-600",
    badgeStyle: "bg-primary/10 text-primary border-primary/30",
    borderAccent: "border-l-primary",
  },
  Tasnim: {
    name: "Tasnim",
    role: "Tech Lead & Architect",
    avatarBg: "bg-gradient-to-br from-purple-600 to-pink-600",
    badgeStyle: "bg-secondary/10 text-secondary border-secondary/30",
    borderAccent: "border-l-secondary",
  },
  Jordan: {
    name: "Jordan",
    role: "QA & Reliability Lead",
    avatarBg: "bg-gradient-to-br from-emerald-600 to-teal-600",
    badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    borderAccent: "border-l-emerald-500",
  },
  Apurba: {
    name: "Apurba",
    role: "Product Manager",
    avatarBg: "bg-gradient-to-br from-amber-600 to-orange-600",
    badgeStyle: "bg-tertiary/10 text-tertiary border-tertiary/30",
    borderAccent: "border-l-tertiary",
  },
  Salman: {
    name: "Salman",
    role: "UI/UX Systems Designer",
    avatarBg: "bg-gradient-to-br from-cyan-600 to-blue-600",
    badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    borderAccent: "border-l-cyan-400",
  },
  Evans: {
    name: "Evans",
    role: "DevOps & Infrastructure Lead",
    avatarBg: "bg-gradient-to-br from-violet-600 to-fuchsia-600",
    badgeStyle: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    borderAccent: "border-l-violet-400",
  },
};

const getSpeaker = (text: string): { mentor?: Mentor; quote: string } => {
  for (const key of Object.keys(MENTORS)) {
    if (text.includes(key)) {
      return { mentor: MENTORS[key], quote: text };
    }
  }
  return { quote: text };
};

interface StoryViewerProps {
  story: Level["story"];
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ story }) => {
  return (
    <div className="space-y-5">
      {/* Chapter Scenario Header */}
      <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-1.5 shadow-sm">
        <div className="flex items-center space-x-2 text-primary text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Interactive Story Scenario</span>
        </div>
        <h3 className="text-xl font-extrabold text-on-surface tracking-tight">
          {story.title}
        </h3>
      </div>

      {/* Narrative & Dialogue stream (GitMastery Style) */}
      <div className="space-y-4">
        {story.narrative.map((item, index) => {
          if (item.type === "narration") {
            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 text-on-surface-variant text-sm leading-relaxed flex items-start space-x-3"
              >
                <div className="mt-0.5 p-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-primary shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="font-sans text-sm text-on-surface-variant/90 leading-relaxed pt-0.5">
                  {item.text}
                </div>
              </div>
            );
          }

          const { mentor, quote } = getSpeaker(item.text);
          const currentMentor = mentor || MENTORS["Minhaj"];

          return (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-surface-container border-l-4 ${currentMentor.borderAccent} border border-outline-variant/30 shadow-md space-y-3`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-xl ${currentMentor.avatarBg} flex items-center justify-center text-white font-bold text-xs shadow-md`}
                  >
                    {currentMentor.name[0]}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-on-surface text-sm">
                      {currentMentor.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${currentMentor.badgeStyle}`}
                    >
                      {currentMentor.role}
                    </span>
                  </div>
                </div>
                <ShieldCheck className="w-4 h-4 text-outline" />
              </div>

              <p className="text-on-surface text-sm md:text-base leading-relaxed font-sans pl-2 border-l border-outline-variant/30 text-on-surface/95">
                {quote}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dangerous Consequence / Previous Outcome */}
      {story.previousOutcome && (
        <div className="p-4 rounded-xl bg-surface-container-low border border-tertiary/30 text-xs text-on-surface-variant flex items-start space-x-3">
          <AlertTriangle className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-tertiary uppercase tracking-wider font-mono text-[10px] block">
              Risk & Consequence Notice
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              {story.previousOutcome}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

"use client";

import { useState, useEffect, useCallback } from "react";
import { BookOpen, X, ArrowRight, ArrowLeft, SkipForward } from "lucide-react";
import { Level } from "../types";
import {
  CHARACTERS,
  CharacterId,
  inferSpeakerFromText,
  CHECKPOINT_LEVEL_IDS,
} from "../data/characters";
import {
  getPredictionQuestion,
  PredictionQuestion,
} from "../lib/narrativeFeedback";

interface StoryModalProps {
  level: Level;
  isOpen: boolean;
  onClose: () => void;
  renderFormattedText: (text: string) => React.ReactNode;
  playChime: (type: "success" | "error" | "click") => void;
}

export default function StoryModal({
  level,
  isOpen,
  onClose,
  renderFormattedText,
  playChime,
}: StoryModalProps) {
  const narrative = level.story.narrative;
  const totalBeats = narrative.length;
  const hasTaskPhase = true;
  // The task step IS the last step (no extra duplicate step after it)
  const maxStep = totalBeats + (hasTaskPhase ? 1 : 0) - 1;

  const [step, setStep] = useState(0);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [predictionAnswer, setPredictionAnswer] = useState<number | null>(null);
  const [predictionRevealed, setPredictionRevealed] = useState(false);

  const prediction = getPredictionQuestion(level.id);
  const isCheckpoint = CHECKPOINT_LEVEL_IDS.has(level.id);
  const storySeenKey = `story_seen_${level.id}`;

  useEffect(() => {
    if (!isOpen) return;
    setStep(0);
    setPredictionAnswer(null);
    setPredictionRevealed(false);

    if (typeof window !== "undefined" && localStorage.getItem(storySeenKey) === "true") {
      setStep(maxStep);
    }
  }, [isOpen, level.id, maxStep, storySeenKey]);

  const finishStory = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storySeenKey, "true");
    }
    playChime("click");
    onClose();
  }, [onClose, playChime, storySeenKey]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || ((e.ctrlKey || e.metaKey) && e.key === "Enter")) {
        e.preventDefault();
        if (step < maxStep) {
          setStep((s) => s + 1);
          playChime("click");
        } else {
          finishStory();
        }
      } else if (e.key === "ArrowLeft" && step > 0) {
        e.preventDefault();
        setStep((s) => s - 1);
        playChime("click");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, step, maxStep, finishStory, playChime]);

  if (!isOpen) return null;

  const isTaskStep = step >= totalBeats;
  const currentBeat = !isTaskStep ? narrative[step] : null;

  const renderDialogue = (text: string, speakerId?: string | null) => {
    const id = (speakerId as CharacterId) ?? inferSpeakerFromText(text);
    const character = id ? CHARACTERS[id] : null;

    if (character) {
      return (
        <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/30 space-y-2.5 shadow-md">
          <div className={`flex items-center gap-2 text-xs font-bold ${character.color}`}>
            <span className="text-base">{character.emoji}</span>
            <span className="font-mono">{character.name}</span>
            <span className="text-on-surface-variant/70 font-normal">· {character.role}</span>
          </div>
          <div className="text-on-surface text-sm leading-relaxed font-normal">
            {renderFormattedText(text.replace(/^["']|["']$/g, ""))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-md">
        <div className="text-on-surface text-sm leading-relaxed font-normal">{renderFormattedText(text)}</div>
      </div>
    );
  };

  const renderPrediction = (q: PredictionQuestion) => (
    <div className="p-5 rounded-2xl bg-surface-container-low border border-tertiary/30 space-y-3">
      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
        Quick Prediction
      </h4>
      <p className="text-sm text-on-surface font-semibold">{q.question}</p>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => {
              setPredictionAnswer(i);
              setPredictionRevealed(true);
              playChime("click");
            }}
            disabled={predictionRevealed}
            className={`w-full text-left p-3 rounded-lg border text-xs transition-colors cursor-pointer ${
              predictionRevealed
                ? i === q.correctAnswerIndex
                  ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 font-bold"
                  : predictionAnswer === i
                    ? "border-rose-500/50 bg-rose-500/10 text-rose-300 font-bold"
                    : "border-outline-variant/30 text-on-surface-variant opacity-60"
                : "border-outline-variant/30 hover:border-primary/40 text-on-surface hover:bg-surface-container-high"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {predictionRevealed && q.explanation && (
        <p className="text-xs text-on-surface-variant leading-relaxed pt-1 border-t border-outline-variant/20">
          💡 {q.explanation}
        </p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-surface-container border border-outline-variant/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] glow-primary">
        <div className="p-6 bg-surface-container-low border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <div>
              <h2 className="text-xl font-extrabold text-on-surface tracking-tight font-sans">
                {level.story.title || level.title}
              </h2>
              {isCheckpoint && (
                <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">
                  ★ Chapter Checkpoint
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setAdvancedMode(!advancedMode)}
              className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                advancedMode
                  ? "bg-secondary/20 text-secondary border-secondary/50"
                  : "bg-surface-container-high text-on-surface-variant border-outline-variant/40"
              }`}
            >
              &lt;&gt; Advanced ({advancedMode ? "On" : "Off"})
            </button>
            <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface p-1.5 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
          {level.id !== "level-0-1-bootstrap" && level.story.previousOutcome && step === 0 && (
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Previously in the Kingdom
              </h4>
              <div className="text-sm text-on-surface-variant leading-relaxed">
                {renderFormattedText(level.story.previousOutcome)}
              </div>
            </div>
          )}

          {!isTaskStep && currentBeat && (
            <div className="space-y-4">
              {currentBeat.type === "dialogue" ? (
                renderDialogue(currentBeat.text, currentBeat.speaker)
              ) : (
                <div className="text-on-surface text-sm md:text-base leading-relaxed">
                  {renderFormattedText(currentBeat.text)}
                </div>
              )}
            </div>
          )}

          {isTaskStep && (
            <div className="space-y-4 animate-fadeIn">
              {prediction && !predictionRevealed && renderPrediction(prediction)}
              {prediction && predictionRevealed && renderPrediction(prediction)}

              {level.story.realWorldContext && (
                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                    Real-World Context
                  </h4>
                  <div className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {renderFormattedText(level.story.realWorldContext)}
                  </div>
                </div>
              )}

              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary">
                  Your Task
                </h4>
                <div className="text-xs md:text-sm text-on-surface leading-relaxed font-semibold">
                  {renderFormattedText(level.story.taskDescription)}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-1">
            {Array.from({ length: maxStep + 1 }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i <= step ? "bg-primary" : "bg-outline-variant/30"}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between gap-3">
          {/* Left: Back button (hidden on step 0) */}
          <div className="flex-1 flex items-center">
            {step > 0 ? (
              <button
                onClick={() => {
                  playChime("click");
                  setStep((s) => s - 1);
                }}
                className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <span />
            )}
          </div>

          {/* Center: Skip to coding */}
          <button
            onClick={finishStory}
            className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5" />
            Skip to coding
          </button>

          {/* Right: Continue / Start Coding */}
          <div className="flex-1 flex justify-end">
            {step < maxStep ? (
              <button
                onClick={() => {
                  playChime("click");
                  setStep((s) => s + 1);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 rounded-xl font-bold text-sm cursor-pointer"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={finishStory}
                className="lift-button flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-sm cursor-pointer shadow-lg"
              >
                Start Coding
                <span className="px-2 py-0.5 bg-neutral-950/10 rounded text-[10px] font-mono">(Ctrl+Enter)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

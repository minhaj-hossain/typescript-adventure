"use client";

import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";

interface ConfettiPiece {
  id: number;
  x: number; // percentage left
  y: number; // starting offset px
  vx: number; // horizontal velocity drift
  vy: number; // initial upward velocity burst
  gravity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
  shape: "rect" | "circle" | "sparkle" | "strip";
  opacity: number;
}

interface ConfettiProps {
  count?: number;
}

const CELEBRATION_PALETTE = [
  "#38bdf8", // Sky blue
  "#818cf8", // Indigo
  "#c084fc", // Purple
  "#f472b6", // Pink
  "#fbbf24", // Gold
  "#34d399", // Emerald
  "#f87171", // Rose
];

export default function Confetti({ count = 75 }: ConfettiProps) {
  const { settings } = useGame();
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!settings.animationsEnabled) return;

    // Cannon burst effect from bottom left and bottom right corners
    const generated: ConfettiPiece[] = Array.from({ length: count }, (_, i) => {
      const isLeftCannon = i % 2 === 0;
      const originX = isLeftCannon ? Math.random() * 20 : 80 + Math.random() * 20;

      return {
        id: i,
        x: originX,
        y: 100, // start near bottom
        vx: isLeftCannon ? Math.random() * 2.5 + 0.8 : -(Math.random() * 2.5 + 0.8),
        vy: -(Math.random() * 4 + 3.5), // burst upward
        gravity: 0.08 + Math.random() * 0.04,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        color: CELEBRATION_PALETTE[Math.floor(Math.random() * CELEBRATION_PALETTE.length)],
        size: 7 + Math.random() * 9,
        shape: (["rect", "circle", "sparkle", "strip"] as const)[
          Math.floor(Math.random() * 4)
        ],
        opacity: 1,
      };
    });

    setPieces(generated);

    // Physics animation loop
    let animationFrameId: number;
    let startTime = Date.now();

    const updatePhysics = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      if (elapsed > 4.5) {
        setPieces([]);
        return;
      }

      setPieces((prev) =>
        prev
          .map((p) => {
            const nextVy = p.vy + p.gravity;
            const nextY = p.y + nextVy;
            const nextX = p.x + p.vx;
            const nextRotation = p.rotation + p.rotationSpeed;
            const nextOpacity = elapsed > 3 ? Math.max(0, 1 - (elapsed - 3) / 1.5) : 1;

            return {
              ...p,
              x: nextX,
              y: nextY,
              vy: nextVy,
              rotation: nextRotation,
              opacity: nextOpacity,
            };
          })
          .filter((p) => p.opacity > 0)
      );

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, settings.animationsEnabled]);

  if (!settings.animationsEnabled || pieces.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute transform-gpu shadow-sm"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.shape === "strip" ? `${p.size * 0.4}px` : `${p.size}px`,
            height: p.shape === "strip" ? `${p.size * 2}px` : `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? "2px" : "1px",
            clipPath:
              p.shape === "sparkle"
                ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                : undefined,
            transform: `rotate(${p.rotation}deg) scale(${p.shape === "sparkle" ? 1.2 : 1})`,
            opacity: p.opacity,
            boxShadow: `0 0 10px ${p.color}aa`,
          }}
        />
      ))}
    </div>
  );
}
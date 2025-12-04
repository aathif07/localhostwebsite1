"use client";

import { cn } from "@/lib/utils";

interface BeamEffectProps {
  className?: string;
  variant?: "radial" | "spotlight" | "vertical";
  color?: "purple" | "magenta" | "cyan" | "multi";
}

export const BeamEffect = ({
  className,
  variant = "radial",
  color = "purple",
}: BeamEffectProps) => {
  const colorMap = {
    purple: "rgba(139, 92, 246, 0.4)",
    magenta: "rgba(217, 70, 239, 0.4)",
    cyan: "rgba(6, 182, 212, 0.4)",
    multi: "rgba(139, 92, 246, 0.3)",
  };

  if (variant === "radial") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          className
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${colorMap[color]} 0%, transparent 50%)`,
          }}
        />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[200%] w-[2px] origin-top -translate-x-1/2 opacity-20"
            style={{
              transform: `rotate(${i * 30}deg)`,
              background: `linear-gradient(to bottom, ${colorMap[color]} 0%, transparent 100%)`,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "spotlight") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          className
        )}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[300%] w-[200%] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: `conic-gradient(from 180deg at 50% 50%, transparent 0deg, ${colorMap[color]} 60deg, transparent 120deg, ${colorMap[color]} 180deg, transparent 240deg, ${colorMap[color]} 300deg, transparent 360deg)`,
            filter: "blur(80px)",
          }}
        />
      </div>
    );
  }

  // vertical beam variant
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
        {[...Array(8)].map((_, i) => {
          const offset = (i - 3.5) * 15;
          return (
            <div
              key={i}
              className="absolute top-0 h-full opacity-30"
              style={{
                left: `calc(50% + ${offset}%)`,
                width: "2px",
                background: `linear-gradient(to top, ${colorMap[color]} 0%, transparent 60%)`,
                transform: `scaleY(${1 + i * 0.1})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BeamEffect;

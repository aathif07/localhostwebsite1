"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MagicalBordersProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  duration?: number;
  borderWidth?: number;
  glowIntensity?: number;
}

export const MagicalBorders = ({
  children,
  className = "",
  innerClassName = "",
  duration = 6,
  borderWidth = 1,
  glowIntensity = 0.3,
}: MagicalBordersProps) => {
  return (
    <>
      <style>{`
        @keyframes borderShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div
        className={cn("group relative rounded-2xl transition-transform duration-300 hover:scale-[1.01]", className)}
        style={{
          padding: `${borderWidth}px`,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
        }}
      >
        <div
          className="absolute inset-[-1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, rgba(139, 92, 246, ${glowIntensity}) 0%, transparent 50%, rgba(217, 70, 239, ${glowIntensity}) 100%)`,
            backgroundSize: "200% 200%",
            animation: `borderShift ${duration}s ease-in-out infinite`,
            zIndex: 0,
          }}
        />
        <div className={cn("relative h-full rounded-[15px] overflow-hidden", innerClassName)}>
          {children}
        </div>
      </div>
    </>
  );
};

export default MagicalBorders;
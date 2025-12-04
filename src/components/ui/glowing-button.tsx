"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const GlowingButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: GlowingButtonProps) => {
  const isHovering = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  useEffect(() => {
    if (variant === "ghost") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    type Star = {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      life: number;
      maxLife: number;
      initialDelay: number;
    };

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
        initStars();
      }
    };

    const initStars = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      stars.length = 0;
      const numStars = 40;
      const { clientWidth, clientHeight } = parent;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * clientWidth,
          y: Math.random() * clientHeight,
          radius: Math.random() * 0.8 + 0.2,
          opacity: 0,
          life: 0,
          maxLife: 60 + Math.random() * 100,
          initialDelay: Math.random() * 80,
        });
      }
    };

    const animateStars = () => {
      if (!ctx || !canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star, i) => {
        if (isHovering.current) {
          if (star.initialDelay > 0) {
            star.initialDelay--;
          } else {
            star.life = Math.min(star.maxLife, star.life + 1.5);
          }
        } else {
          star.life = Math.max(0, star.life - 2);
          if (star.life === 0 && star.initialDelay === 0) {
            const parent = canvas.parentElement;
            if (parent) {
              star.x = Math.random() * parent.clientWidth;
              star.y = Math.random() * parent.clientHeight;
              star.initialDelay = Math.random() * 80;
            }
          }
        }

        star.opacity = star.life / star.maxLife;
        const twinkleFactor = 0.5 + 0.5 * Math.sin(performance.now() * 0.001 + i);
        const finalOpacity = Math.max(0, star.opacity * twinkleFactor - 0.2);

        if (finalOpacity > 0.1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animateStars);
    };

    setCanvasDimensions();
    animateStars();
    window.addEventListener("resize", setCanvasDimensions);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [variant]);

  if (variant === "ghost") {
    return (
      <button
        className={cn(
          "font-medium text-text-primary rounded-full border border-white/20 hover:bg-white/10 transition-colors",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <style>{`
        @keyframes borderRotate {
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
        className="group relative isolate inline-block rounded-full p-px animate-[borderRotate_6s_linear_infinite] [background:conic-gradient(from_90deg_at_50%_50%,transparent_0deg,#8B5CF6_90deg,#D946EF_180deg,#8B5CF6_270deg,transparent_360deg)]"
      >
        <div className="absolute inset-[-3px] z-[-1] rounded-[inherit] [background:inherit] animate-[borderRotate_6s_linear_infinite] opacity-50 blur-md" />
        
        <div className="relative z-0 flex items-center justify-center rounded-full bg-bg-primary transition-colors">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full rounded-full"
            aria-hidden="true"
          />
          <button
            className={cn(
              "relative z-10 w-full bg-transparent font-medium text-white",
              sizeClasses[size],
              className
            )}
            {...props}
          >
            {children}
          </button>
        </div>
      </div>
    </>
  );
};

export default GlowingButton;
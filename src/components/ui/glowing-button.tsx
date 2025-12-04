"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import { cn } from "@/lib/utils"; // Assuming this utility is available from shadcn/ui setup

export interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ children, className, containerClassName, ...props }, ref) => {
    const isHovering = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
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
        const numStars = 50;
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
      animateStars()
      window.addEventListener("resize", setCanvasDimensions);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", setCanvasDimensions);
      };
    }, []);

    return (
      <>
        {/* Adds the required animation keyframes. In a production app, this would be in tailwind.config.js */}
        <style>{`
          @keyframes borderRotate {
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => (isHovering.current = false)}
          className={cn(
            "group relative isolate inline-block rounded-full p-px",
            "animate-[borderRotate_3s_linear_infinite] [background:conic-gradient(from_90deg_at_50%_50%,theme(colors.accent),theme(colors.primary)_50%,theme(colors.accent))]",
            containerClassName
          )}
        >
          {/* Soft outer glow */}
          <div className="absolute inset-[-3px] z-[-1] rounded-[inherit] [background:inherit] animate-[borderRotate_3s_linear_infinite] opacity-50 blur-md" />
          
          {/* Inner content container */}
          <div className="relative z-0 flex items-center justify-center rounded-full bg-bg-tertiary/90 transition-colors group-hover:bg-bg-tertiary">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 z-0 h-full w-full rounded-full"
              aria-hidden="true"
            />
            <button
              ref={ref}
              className={cn(
                "relative z-10 w-full bg-transparent px-7 py-3.5 button text-text-primary",
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
  }
);

GlowingButton.displayName = "GlowingButton";

export default GlowingButton;
"use client";

import { useEffect, useRef } from "react";

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

const hexToRgb = (hex: string): string | null => {
  if (!hex) return null;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : null;
};

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  opacityDirection: number;
  vx: number;
  vy: number;
}

export interface StarAnimationProps {
  className?: string;
  density?: number;
  colors?: string[];
  speed?: number;
}

export const StarAnimation = ({
  className,
  density = 100,
  colors = ["255, 255, 255"],
  speed = 0.05,
}: StarAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.offsetWidth;
      height = parent.offsetHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      starsRef.current = [];

      for (let i = 0; i < density; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.7 + 0.1,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        star.opacity += star.opacityDirection * star.twinkleSpeed;
        if (star.opacity > 0.8 || star.opacity < 0.1) {
          star.opacityDirection *= -1;
          star.opacity = Math.max(0.1, Math.min(0.8, star.opacity));
        }

        ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      init();
      animate();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    init();
    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
    };
  }, [density, colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
};

export default StarAnimation;
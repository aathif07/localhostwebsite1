'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface StarAnimationProps {
  density?: number;
  colors?: string[];
  speed?: number;
}

export default function StarAnimation({
  density = 100,
  colors = ["#FFFFFF", "#3B82F6", "#06B6D4", "#3B82F6"],
  speed = 0.5,
}: StarAnimationProps) {
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

      const numStars = Math.floor(width * height * density);
      starsRef.current = [];

      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1 + 0.5, // Results in a diameter of 1px to 3px
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.7 + 0.1, // Opacity from 0.1 to 0.8
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleOffset: Math.random() * 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        // Update drift position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Update opacity for twinkle effect
        star.opacity += star.opacityDirection * star.twinkleSpeed;
        if (star.opacity > 0.8 || star.opacity < 0.1) {
          star.opacityDirection *= -1;
          // Clamp to prevent overshooting
          star.opacity = Math.max(0.1, Math.min(0.8, star.opacity));
        }

        // Draw the star
        const rgbColor = hexToRgb(star.color);
        if (rgbColor) {
          ctx.fillStyle = `rgba(${rgbColor}, ${star.opacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        }
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
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement);
      }
    };
  }, [density, colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className,
      )}
    />
  );
}
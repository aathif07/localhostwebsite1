'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
  vx: number;
  vy: number;
  opacityDirection: number;
  radius: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface StarAnimationProps {
  density?: number;
  colors?: string[];
  speed?: number;
  className?: string;
  showShootingStars?: boolean;
}

export default function StarAnimation({
  density = 0.0001,
  colors = ["#FFFFFF", "#3B82F6", "#06B6D4", "#3B82F6"],
  speed = 0.5,
  className,
  showShootingStars = true,
}: StarAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastShootingStarTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const hexToRgb = (hex: string): string | null => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : null;
    };

    const createShootingStar = () => {
      const angle = Math.random() * Math.PI / 4 + Math.PI / 6; // 30-75 degrees
      shootingStarsRef.current.push({
        x: Math.random() * width,
        y: -50,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 3 + 4,
        angle: angle,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      });
    };

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

      const numStars = Math.floor((width * height * density) / 1000);
      starsRef.current = [];

      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          radius: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.7 + 0.1,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * speed * 0.1,
          vy: (Math.random() - 0.5) * speed * 0.1,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw twinkling stars
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

      // Create shooting stars periodically
      if (showShootingStars) {
        if (timestamp - lastShootingStarTime.current > 3000 + Math.random() * 4000) {
          createShootingStar();
          lastShootingStarTime.current = timestamp;
        }

        // Update and draw shooting stars
        shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
          star.life += 1;
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;

          // Fade out at the end of life
          if (star.life > star.maxLife * 0.7) {
            star.opacity = Math.max(0, 1 - (star.life - star.maxLife * 0.7) / (star.maxLife * 0.3));
          }

          // Remove if out of bounds or life expired
          if (star.x > width + 100 || star.y > height + 100 || star.life > star.maxLife) {
            return false;
          }

          // Draw shooting star with gradient trail
          const gradient = ctx.createLinearGradient(
            star.x,
            star.y,
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          gradient.addColorStop(0.3, `rgba(59, 130, 246, ${star.opacity * 0.8})`);
          gradient.addColorStop(0.6, `rgba(6, 182, 212, ${star.opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          );
          ctx.stroke();

          // Draw bright head
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
          ctx.fill();

          return true;
        });
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      init();
      animate(0);
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    init();
    animate(0);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement);
      }
    };
  }, [density, colors, speed, showShootingStars]);

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
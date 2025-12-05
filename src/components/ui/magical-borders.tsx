"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface MagicalBordersProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;

  /** Animation duration in seconds */
  duration?: number;
  
  /** Border width in pixels */
  borderWidth?: number;

  /** A valid CSS border-radius value */
  borderRadius?: string;
  
  /** Glow intensity, from 0 to 1 */
  glowIntensity?: number;

  /** 
   * Array of 2 or 3 colors for the gradient. 
   * Defaults to accent colors from the design system.
   */
  gradientColors?: [string, string, string?];
}

/**
 * A reusable component that wraps its children with an animated gradient border and glow effects.
 * It's built to be customizable and consistent with the project's futuristic design language.
 */
export default function MagicalBorders({
  children,
  className,
  as: Component = 'div',
  duration = 4,
  borderWidth = 1,
  borderRadius = 'var(--radius-lg, 12px)',
  glowIntensity = 0.3,
  gradientColors = [
    'var(--color-accent-purple, #3B82F6)',
    'rgba(217, 70, 239, 0.8)',
    'rgba(6, 182, 212, 0.8)',
  ],
  ...props
}: MagicalBordersProps) {

  const styles: React.CSSProperties = {
    '--border-width': `${borderWidth}px`,
    '--border-radius-outer': borderRadius,
    // Calculate inner radius to be perfectly aligned with the outer radius minus the border width
    '--border-radius-inner': `calc(${borderRadius} - ${borderWidth}px)`,
    '--animation-duration': `${duration}s`,
    '--glow-intensity': `${glowIntensity}`,
    '--color-1': gradientColors[0],
    '--color-2': gradientColors[1],
    '--color-3': gradientColors[2] || gradientColors[0], // Fallback to first color if third is not provided
  };

  return (
    <Component
      className={cn(
        'relative p-[--border-width] rounded-[--border-radius-outer] isolate overflow-hidden',
        className
      )}
      style={styles}
      {...props}
    >
      {/* Animated gradient for border & outer glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-spin blur-xl"
        style={{
          animationDuration: 'var(--animation-duration)',
          background: `conic-gradient(from 180deg at 50% 50%, var(--color-1), var(--color-2), var(--color-3), var(--color-1))`,
          opacity: 'var(--glow-intensity)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-spin"
        style={{
          animationDuration: 'var(--animation-duration)',
          background: `conic-gradient(from 180deg at 50% 50%, var(--color-1), var(--color-2), var(--color-3), var(--color-1))`,
        }}
      />
      
      {/* Content wrapper with solid background */}
      <div className={cn(
        "relative w-full h-full bg-bg-tertiary rounded-[var(--border-radius-inner)] isolate"
      )}>
        {/* Inner glow effect */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-[var(--border-radius-inner)]"
          style={{
            boxShadow: `inset 0 0 15px 0px var(--color-2), inset 0 0 40px -10px var(--color-1)`,
            opacity: `calc(var(--glow-intensity) * 1.5)`
          }}
        />
        {children}
      </div>
    </Component>
  );
}
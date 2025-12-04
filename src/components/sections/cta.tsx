"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const StarAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; radius: number; alpha: number; dAlpha: number }[] = [];
    const numStars = 200;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          dAlpha: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        star.alpha += star.dAlpha;
        if (star.alpha <= 0.1 || star.alpha >= 0.8) {
          star.dAlpha *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
};


const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-20 lg:py-[120px]">
      <div className="container-md relative">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/cta-background-14.png"
            alt="Purple glow background"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            className="opacity-70"
          />
          <StarAnimation />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/svgs/grid-5.svg"
            alt="Grid pattern"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        
        <div className="relative z-10 rounded-3xl border border-white/5 bg-[rgba(17,17,34,0.4)] px-4 py-16 text-center backdrop-blur-[12px] sm:px-10 sm:py-20">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute -inset-8 z-0 rounded-full bg-accent-purple/30 blur-3xl" />
              <div className="absolute -inset-12 z-0 rounded-full bg-accent-magenta/20 blur-[60px]" />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/icons/cta-icon-4.png"
                alt="Wope App Icon"
                width={96}
                height={96}
                className="relative z-10"
              />
            </div>

            <h2 className="font-black text-text-primary text-[40px] leading-tight -tracking-[0.04em] sm:text-[56px] sm:leading-[1.2]">
              Outrank Everyone. Starting Now.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-text-secondary lg:text-lg">
              Wope analyzes millions of data points to deliver predictive insights.
            </p>

            <form className="mt-12 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter your domain"
                  className="h-[54px] flex-grow rounded-lg border border-white/10 bg-[#121221] px-5 text-text-primary placeholder:text-text-tertiary outline-none ring-accent-purple/50 transition-all focus:border-accent-purple focus:ring-2"
                />
                <button
                  type="submit"
                  className="h-[54px] shrink-0 rounded-lg border border-white/20 bg-[#1C1C31] px-6 font-medium text-text-primary transition-colors hover:bg-white/10"
                >
                  Try Demo
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-secondary">
              <span>No credit card required</span>
              <Sparkles className="h-4 w-4 text-accent-purple/70" />
              <span>14-days free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
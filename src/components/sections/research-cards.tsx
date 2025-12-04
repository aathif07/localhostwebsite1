"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; alpha: number; dAlpha: number }[] = [];

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      stars = [];
      const numStars = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.1 + 0.2,
          alpha: Math.random() * 0.5 + 0.1,
          dAlpha: (Math.random() - 0.5) * 0.015,
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.alpha += star.dAlpha;
        if (star.alpha > 0.6 || star.alpha < 0.1) {
          star.dAlpha *= -1;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    
    // Use an observer to initialize when the parent is sized
    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        draw();
    });
    
    if(canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};


const MagicCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative p-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent group transition-transform duration-300 hover:scale-[1.01] ${className}`}>
            <div className="absolute inset-[-1px] z-0 rounded-2xl bg-gradient-to-br from-accent-purple/0 via-transparent to-accent-magenta/0 transition-all duration-500 group-hover:from-accent-purple/30 group-hover:to-accent-magenta/30" />
            <div className="relative h-full bg-[#1A1A2E] rounded-[15px] p-8 md:p-10 lg:p-12 overflow-hidden">
                <StarryBackground />
                {children}
            </div>
        </div>
    );
};

export default function ResearchCards() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text-primary leading-[1.2]">
            <span>Meet New-Gen</span>
            <br />
            <span>Research Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Detailed Backlink Profile Analysis */}
          <MagicCard className="lg:col-span-5 lg:row-span-2">
            <div className="relative z-10">
                <h4 className="text-[28px] font-semibold tracking-[-0.01em] text-text-primary leading-[1.4]">
                    <span>Detailed Backlink</span><br /><span>- Profile Analysis</span>
                </h4>
                <p className="mt-4 max-w-sm text-text-secondary text-base leading-[1.6]">
                    Uncover backlink sources, anchor texts, and authority scores to optimize your strategy and boost SEO.
                </p>
            </div>
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-detailed-light1-3.png" alt="Top light flare" width={567} height={527} className="absolute -top-12 -left-20 w-[567px] h-[527px] pointer-events-none opacity-80" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-detailed-light2-4.png" alt="Bottom light flare" width={567} height={527} className="absolute -bottom-32 -right-20 w-[567px] h-[527px] pointer-events-none opacity-80" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/svgs/card-detailed-desktop-1.svg" alt="Detailed backlink analysis UI mockup" width={384} height={214} className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] sm:w-[384px] pointer-events-none" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/icons/card-detailed-icon1-1.png" alt="Floating icon 1" width={78} height={78} className="absolute bottom-[35%] left-[10%] w-[50px] h-[50px] md:w-[78px] md:h-[78px] pointer-events-none" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/icons/card-detailed-icon2-2.png" alt="Floating icon 2" width={52} height={52} className="absolute bottom-[25%] right-[12%] w-[35px] h-[35px] md:w-[52px] md:h-[52px] pointer-events-none" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/icons/card-detailed-icon3-3.png" alt="Floating icon 3" width={64} height={64} className="absolute top-[30%] right-[15%] w-[40px] h-[40px] md:w-[64px] md:h-[64px] pointer-events-none" />
          </MagicCard>

            {/* Card 2: Explore Shared SEO Keywords */}
          <MagicCard className="lg:col-span-7">
            <div className="relative z-10">
                <h4 className="text-[28px] font-semibold tracking-[-0.01em] text-text-primary leading-[1.4]">
                    <span>Explore Shared SEO Keywords</span>
                </h4>
                <p className="mt-4 max-w-md text-text-secondary text-base leading-[1.6]">
                    Rapidly pinpoint overlapping keywords between two websites for competitive SEO analysis and strategic keyword planning.
                </p>
            </div>
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-explore-light1-5.png" alt="Top light flare" width={567} height={527} className="absolute -top-24 -left-20 pointer-events-none opacity-80" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-explore-light2-6.png" alt="Bottom light flare" width={567} height={527} className="absolute -bottom-40 right-0 pointer-events-none opacity-80" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/svgs/card-explore-table1-2.svg" alt="Explore keywords UI table 1" width={290} height={148} className="absolute bottom-12 left-12 hidden sm:block pointer-events-none" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/svgs/card-explore-table2-3.svg" alt="Explore keywords UI table 2" width={298} height={148} className="absolute bottom-12 right-12 hidden sm:block pointer-events-none" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/svgs/card-explore-track-4.svg" alt="Explore keywords UI track elements" width={591} height={42} className="absolute top-[60%] sm:top-auto sm:bottom-40 left-12 right-12 mx-auto sm:w-auto w-[calc(100%-6rem)] pointer-events-none" />
          </MagicCard>
          
            {/* Card 3: Analyze Ranked Keywords */}
          <MagicCard className="lg:col-span-12">
            <div className="relative z-10">
                <h4 className="text-[28px] font-semibold tracking-[-0.01em] text-text-primary leading-[1.4]">
                    <span>Analyze Ranked Keywords</span>
                </h4>
                <p className="mt-4 max-w-md text-text-secondary text-base leading-[1.6]">
                    Analyze search volume, CTR, trends, and intent to optimize your SEO and Google Ads strategies.
                </p>
            </div>
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-track-light1-8.png" alt="Top light flare" width={713} height={354} className="absolute -top-24 -left-20 w-[713px] h-[354px] pointer-events-none opacity-80" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-track-light2-9.png" alt="Bottom light flare" width={713} height={354} className="absolute -bottom-24 -right-20 w-[713px] h-[354px] pointer-events-none opacity-80" />
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/card-track-table-7.png" alt="Analyze keywords UI table" width={1056} height={217} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1056px] pointer-events-none object-contain object-bottom" />
          </MagicCard>
        </div>
      </div>
    </section>
  );
}
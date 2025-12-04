'use client';

import React from 'react';
import Image from 'next/image';
import GlowingButton from '@/components/ui/glowing-button';
import StarAnimation from '@/components/ui/star-animation';
import BeamEffect from '@/components/ui/beam-effect';

const logos = [
  'QNB',
  'BMW',
  'Delivery Hero',
  'MediaMarkt',
  'Bayer',
  'amazon',
];

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex w-[176px] h-[72px] items-center justify-center">
    <span className="font-bold text-2xl text-gray-400 opacity-60 filter grayscale">
      {name}
    </span>
  </div>
);

export default function Hero() {
  const allLogos = React.useMemo(() => [...logos, ...logos], []);

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
      <section className="relative bg-[#0A0A14] overflow-hidden pt-36 pb-24 font-inter">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <StarAnimation density={150} className="opacity-40" />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-background-lights-13.png"
            alt="Background lights"
            fill
            className="object-cover opacity-50"
            priority
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-background-top-12.png"
            alt="Background geometry top"
            fill
            className="object-contain object-top"
            priority
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-background-bottom-1.png"
            alt="Background geometry bottom"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          {/* Title with beam effect */}
          <div className="relative">
            <BeamEffect variant="radial" color="purple" className="scale-150 opacity-60" />
            <h1
              className="relative z-10 text-white max-w-4xl"
              style={{
                fontSize: '72px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontWeight: 900,
              }}
            >
              New Era of SEO Research
            </h1>
          </div>

          <p
            className="mt-6 max-w-3xl text-[#b3b3b3]"
            style={{ fontSize: '20px' }}
          >
            Let our AI do the heavy lifting. Make your competitor research, find
            hidden keyword opportunities and get clear & actionable insights
          </p>

          {/* Button with beam effect */}
          <div className="relative mt-10">
            <BeamEffect variant="spotlight" color="multi" className="scale-[2] opacity-40" />
            <GlowingButton size="lg" className="relative z-10">
              Unlimited trial for 14 days
            </GlowingButton>
          </div>

          {/* Preview image with beam effect */}
          <div className="relative mt-20 w-full max-w-5xl mx-auto">
            <BeamEffect variant="vertical" color="purple" className="h-[120%] -top-[10%]" />
            <div className="relative z-10 rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_60px_rgba(139,92,246,0.2)]">
              <div className="bg-[#0D0D1F] rounded-[15px] p-2 relative overflow-hidden">
                {/* Beam glow around image */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent" />
                <div className="absolute -inset-20 bg-gradient-radial from-purple-600/30 via-transparent to-transparent blur-3xl opacity-50" />
                
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-video-desktop-preview-2.png"
                  width={1097}
                  height={631}
                  alt="Keyword Finder interface preview"
                  className="relative z-10 rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
            
            {/* Bottom beam effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[150%] h-40 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-purple-600/10 to-transparent blur-2xl" />
            </div>
          </div>

          <div className="mt-32 w-full max-w-7xl mx-auto">
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex w-max animate-scroll">
                {allLogos.map((name, index) => (
                  <LogoPlaceholder key={index} name={name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
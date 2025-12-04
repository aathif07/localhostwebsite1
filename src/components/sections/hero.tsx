'use client';

import React from 'react';
import Image from 'next/image';

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
          @keyframes spin-slow {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <section className="relative bg-[#0A0A14] overflow-hidden pt-36 pb-24 font-inter">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-background-lights-13.png"
            alt="Background lights"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-50"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-background-top-12.png"
            alt="Background geometry top"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            priority
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-background-bottom-1.png"
            alt="Background geometry bottom"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1
            className="text-white max-w-4xl"
            style={{
              fontSize: '72px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 900,
            }}
          >
            New Era of SEO Research
          </h1>
          <p
            className="mt-6 max-w-3xl text-[#b3b3b3]"
            style={{ fontSize: '20px' }}
          >
            Let our AI do the heavy lifting. Make your competitor research, find
            hidden keyword opportunities and get clear & actionable insights
          </p>

          <div className="mt-10">
            <a
              href="#"
              className="relative group inline-block p-px rounded-full font-medium text-white shadow-lg shadow-purple-500/30"
            >
              <span className="absolute inset-[-1px] rounded-full bg-transparent group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,#D946EF_0deg,#8B5CF6_180deg,#D946EF_360deg)] animate-[spin-slow_4s_linear_infinite]"></span>
              <span className="relative z-10 flex items-center justify-center px-8 py-3 bg-[#0a0a14] rounded-full backdrop-blur-sm">
                Unlimited trial for 14 days
              </span>
            </a>
          </div>

          <div className="mt-20 w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_60px_rgba(139,92,246,0.2)]">
              <div className="bg-[#0D0D1F] rounded-[15px] p-2">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d210cff1-e8a1-474d-983a-9d851ca47735-wope-com/assets/images/hero-video-desktop-preview-2.png"
                  width={1097}
                  height={631}
                  alt="Keyword Finder interface preview"
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
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
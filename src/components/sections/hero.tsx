'use client';

import React from 'react';
import Image from 'next/image';
import StarAnimation from '@/components/ui/star-animation';

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

          /* Lightbulb Button Styles */
          .lightbulb-area {
            --ease-elastic: cubic-bezier(0.5, 2, 0.3, 0.8);
            --ease-elastic-2: cubic-bezier(0.5, -1, 0.3, 0.8);
            --primary: #A855F7;
            --rounded-max: 60px;
            --rounded-min: 8px;
            --h: 50px;
            position: relative;
            display: inline-block;
          }

          .lightbulb-area svg {
            overflow: visible;
          }

          .lightbulb-wrapper {
            display: block;
            border-radius: 60px;
            position: relative;
            z-index: 2;
            transition: all 0.6s var(--ease-elastic);
            transform: translateY(-8px) scale(1.02);
          }

          .lightbulb-area:hover .lightbulb-wrapper {
            transform: translateY(0) scale(1);
          }

          .lightbulb-input {
            position: absolute;
            background: transparent;
            opacity: 0;
            width: 100%;
            height: 100%;
            inset: 0;
            z-index: 10;
            cursor: pointer;
            pointer-events: all;
            user-select: none;
            outline: none;
          }

          .lightbulb-button {
            background: transparent;
            display: flex;
            border: none;
            padding: 0;
            margin: 0;
            position: relative;
            cursor: pointer;
          }

          .lightbulb-button::before {
            content: "";
            top: 0;
            bottom: 0;
            left: 25%;
            width: 70%;
            height: 100%;
            margin: auto;
            border-radius: 0 50% 50% 0;
            position: absolute;
            pointer-events: none;
            background: linear-gradient(to right, var(--primary) 0%, transparent 100%);
            z-index: 1;
            filter: blur(25px);
            mix-blend-mode: color-dodge;
            transition: all 1s ease 0.4s;
            opacity: 0;
          }

          .lightbulb-button::after {
            content: "";
            width: 40px;
            height: 40px;
            top: 0;
            bottom: 0;
            left: 28%;
            margin: auto;
            border-radius: 50%;
            position: absolute;
            pointer-events: none;
            background: var(--primary);
            z-index: 2;
            filter: blur(12px);
            mix-blend-mode: color-dodge;
            transition: all 1s ease 0.4s;
            opacity: 0;
          }

          .lightbulb-area:hover .lightbulb-input:checked ~ .lightbulb-button::before,
          .lightbulb-area:hover .lightbulb-input:checked ~ .lightbulb-button::after {
            opacity: 1;
          }

          .part-1 {
            position: relative;
            z-index: 1;
            height: var(--h);
            width: 50px;
            border-radius: var(--rounded-max) var(--rounded-min) var(--rounded-min) var(--rounded-max);
          }

          .part-1 .case {
            height: var(--h);
            width: 50px;
            border-radius: inherit;
            transform: translateX(-25px);
            transition: all 0.9s var(--ease-elastic);
          }

          .lightbulb-input:checked ~ .lightbulb-button .part-1 .case {
            transform: translateX(0px);
            transition: all 1.25s var(--ease-elastic-2);
          }

          .part-1 .mask {
            position: absolute;
            overflow: hidden;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(to bottom, #2c2e31 0%, #31343e 20%, #212329 100%);
            box-shadow: inset 6px -12px 12px -8px black, inset 8px -14px 10px -10px white, 0 25px 60px -5px #111;
            transition: all 0.9s var(--ease-elastic);
          }

          .lightbulb-area:hover .part-1 .mask {
            box-shadow: inset 6px -12px 12px -8px black, inset 8px -14px 10px -10px white, 0 18px 45px -5px #111;
          }

          .part-1 .mask::before {
            content: "";
            position: absolute;
            border-radius: inherit;
            left: 25%;
            top: 20%;
            width: 90%;
            height: 25%;
            background: white;
            filter: blur(10px);
          }

          .part-1 .mask::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background-color: rgba(255, 255, 255, 0.2);
            mix-blend-mode: overlay;
          }

          .part-2 {
            position: relative;
            height: var(--h);
            width: 160px;
            border-radius: var(--rounded-min) var(--rounded-max) var(--rounded-max) var(--rounded-min);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.6s ease;
          }

          .glass {
            position: relative;
            overflow: hidden;
            height: 100%;
            width: 100%;
            transition: all 0.9s var(--ease-elastic);
            border-radius: inherit;
            border-left: 1px solid rgba(0, 0, 0, 0.3);
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%);
            box-shadow: inset 0 0 6px -3px white, inset 0 -8px 8px -6px rgba(255, 255, 255, 0.4), inset 6px -12px 12px -8px black, inset 6px -8px 10px -10px white, 0 25px 60px -5px #111;
          }

          .lightbulb-area:hover .glass {
            box-shadow: inset 0 0 6px -3px white, inset 0 -8px 8px -6px rgba(255, 255, 255, 0.4), inset 6px -12px 12px -8px black, inset 6px -8px 10px -10px white, 0 18px 45px -5px #111;
          }

          .glass::before {
            content: "";
            position: absolute;
            left: 0;
            top: 10%;
            right: 14%;
            height: 70%;
            border-radius: 0 20px 0 0;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 60%);
          }

          .glass::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 15%;
            right: 5%;
            height: 75%;
            border-radius: 0 25px 25px 0;
            box-shadow: inset -2px -5px 4px -4px rgba(255, 255, 255, 0.8);
            filter: blur(2px);
          }

          .glass-reflex {
            position: absolute;
            inset: 0;
            width: 70%;
            border-radius: 0 50% 50% 0;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.2) 100%);
            transform: translateX(-115%) skewX(30deg);
          }

          @keyframes reflex {
            0% { transform: translateX(-115%) skewX(30deg); }
            100% { transform: translateX(140%) skewX(30deg); }
          }

          .lightbulb-area:hover .glass-reflex {
            animation: reflex 0.6s ease;
          }

          .filament {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: auto;
            height: 18px;
            stroke-width: 1.5px;
            opacity: 0.3;
          }

          .filament path {
            transition: all 0.6s ease-in-out;
          }

          .filament-on {
            opacity: 1;
          }

          .filament-on path {
            stroke-dashoffset: 100;
            stroke-dasharray: 100 100;
          }

          .lightbulb-input:checked ~ .lightbulb-button .filament path {
            transition-delay: 0.6s;
          }

          .lightbulb-area:hover .lightbulb-input:checked ~ .lightbulb-button .filament path {
            stroke-dasharray: 100 0;
          }

          .filament-blur {
            opacity: 1;
            filter: blur(6px);
            color: #A855F7;
            stroke-width: 8px;
          }

          .button-content {
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.05em;
            position: absolute;
            inset: 0;
            font-size: 14px;
            font-weight: 500;
            left: 0;
            width: 100%;
          }

          .button-content span {
            display: block;
            color: rgba(255, 255, 255, 0.9);
            position: relative;
            white-space: nowrap;
          }

          .button-content.state-2 {
            display: none;
          }

          .lightbulb-input:checked ~ .lightbulb-button .button-content.state-1 {
            display: none;
          }

          .lightbulb-input:checked ~ .lightbulb-button .button-content.state-2 {
            display: flex;
          }
        `}
      </style>
      <section className="relative bg-[#0A0A14] overflow-hidden pt-36 pb-24 font-inter">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <StarAnimation density={0.0001} />
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
            Where Young Minds Build Enterprise Solutions
          </h1>
          <p
            className="mt-6 max-w-3xl text-[#b3b3b3]"
            style={{ fontSize: '20px' }}
          >
            Student-driven IT company delivering modern web, mobile, cloud, AI/ML, and design solutions.
            We combine innovation, speed, and technical expertise to solve your toughest challenges.
          </p>

          <div className="mt-10 flex gap-4 items-center">
            <div className="lightbulb-area">
              <div className="lightbulb-wrapper">
                <input defaultChecked type="checkbox" className="lightbulb-input" />
                <button className="lightbulb-button">
                  <div className="part-1">
                    <div className="case">
                      <div className="mask" />
                    </div>
                  </div>
                  <div className="part-2">
                    <div className="glass">
                      <div className="glass-reflex" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 52" height={52} width={49} className="filament">
                        <path stroke="#ffc4af" d="M32.5 26.1085C32.5 26.1085 32 5.90019 38.5 2.10852C45 -1.68315 49 5.10852 47.5 9.60852C46 14.1085 39.5 17.1085 21 18.1085C13.667 18.5049 6.49118 18.0371 0.5 17.328" />
                        <path stroke="#ffc4af" d="M32.5 26C32.5 26 32 46.2083 38.5 50C45 53.7917 49 47 47.5 42.5C46 38 39.5 35 21 34C13.667 33.6036 6.49118 34.0714 0.5 34.7805" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 52" height={52} width={49} className="filament filament-on">
                        <path stroke="white" d="M32.5 26.1085C32.5 26.1085 32 5.90019 38.5 2.10852C45 -1.68315 49 5.10852 47.5 9.60852C46 14.1085 39.5 17.1085 21 18.1085C13.667 18.5049 6.49118 18.0371 0.5 17.328" />
                        <path stroke="white" d="M32.5 26C32.5 26 32 46.2083 38.5 50C45 53.7917 49 47 47.5 42.5C46 38 39.5 35 21 34C13.667 33.6036 6.49118 34.0714 0.5 34.7805" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 52" height={52} width={49} className="filament filament-blur filament-on">
                        <path stroke="currentColor" d="M32.5 26.1085C32.5 26.1085 32 5.90019 38.5 2.10852C45 -1.68315 49 5.10852 47.5 9.60852C46 14.1085 39.5 17.1085 21 18.1085C13.667 18.5049 6.49118 18.0371 0.5 17.328" />
                        <path stroke="currentColor" d="M32.5 26C32.5 26 32 46.2083 38.5 50C45 53.7917 49 47 47.5 42.5C46 38 39.5 35 21 34C13.667 33.6036 6.49118 34.0714 0.5 34.7805" />
                      </svg>
                      <span className="button-content state-1">
                        <span>Start Your Project</span>
                      </span>
                      <span className="button-content state-2">
                        <span>Let's Build It!</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <a
              href="#portfolio"
              className="relative group inline-block p-px rounded-full font-medium text-white"
            >
              <span className="relative z-10 flex items-center justify-center px-8 py-3 bg-transparent rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors">
                View Our Work
              </span>
            </a>
          </div>

          <div className="mt-20 w-full max-w-[1400px] mx-auto px-4">
            <div className="relative rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_60px_rgba(168,85,247,0.2)]">
              <div className="bg-[#0D0D1F] rounded-[15px] p-2">
                <Image
                  src="/localhostdeshbord.jpg"
                  width={2000}
                  height={1150}
                  alt="Dashboard interface preview"
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
"use client";

import React from "react";
import Image from "next/image";
import StarAnimation from "@/components/ui/star-animation";
import MagicalBorders from "@/components/ui/magical-borders";
import BeamEffect from "@/components/ui/beam-effect";

export default function ResearchCards() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StarAnimation density={100} className="opacity-20" />
        <BeamEffect variant="radial" color="purple" className="opacity-10" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text-primary leading-[1.2]">
            <span>Meet New-Gen</span>
            <br />
            <span>Research Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Detailed Backlink Profile Analysis */}
          <MagicalBorders className="lg:col-span-5 lg:row-span-2" innerClassName="h-full bg-[#1A1A2E] rounded-2xl p-8 md:p-10 lg:p-12">
            <div className="relative h-full">
              <StarAnimation density={80} className="opacity-30" />
              <div className="relative z-10">
                <h4 className="text-[28px] font-semibold tracking-[-0.01em] text-text-primary leading-[1.4]">
                  <span>Detailed Backlink</span><br /><span>Profile Analysis</span>
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
            </div>
          </MagicalBorders>

          {/* Card 2: Explore Shared SEO Keywords */}
          <MagicalBorders className="lg:col-span-7" innerClassName="h-full bg-[#1A1A2E] rounded-2xl p-8 md:p-10 lg:p-12">
            <div className="relative h-full">
              <StarAnimation density={80} className="opacity-30" />
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
            </div>
          </MagicalBorders>
          
          {/* Card 3: Analyze Ranked Keywords */}
          <MagicalBorders className="lg:col-span-12" innerClassName="h-full bg-[#1A1A2E] rounded-2xl p-8 md:p-10 lg:p-12">
            <div className="relative h-full">
              <StarAnimation density={100} className="opacity-30" />
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
            </div>
          </MagicalBorders>
        </div>
      </div>
    </section>
  );
}
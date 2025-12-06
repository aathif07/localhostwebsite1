"use client";

import React from "react";
import { Code, Smartphone, Cloud, Cpu, Palette, RefreshCw } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

export default function ResearchCards() {
  const servicesData = [
    {
      title: "01",
      content: (
        <div className="relative group bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] overflow-hidden">
          {/* Glass shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          {/* Content */}
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white leading-[1.4] mb-4">
                Web Development
              </h4>
              <p className="text-neutral-300 text-base md:text-lg leading-[1.6]">
                Custom websites, web apps, dashboards, and enterprise platforms
                built with modern frameworks and best practices.
              </p>
            </div>
          </div>

          {/* Decorative corner glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="relative group bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white leading-[1.4] mb-4">
                Mobile App Development
              </h4>
              <p className="text-neutral-300 text-base md:text-lg leading-[1.6]">
                iOS, Android, and cross-platform apps for consumer and enterprise
                use with seamless user experiences.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="relative group bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white leading-[1.4] mb-4">
                Cloud & DevOps
              </h4>
              <p className="text-neutral-300 text-base md:text-lg leading-[1.6]">
                Cloud architecture, migrations, CI/CD pipelines, automation, and
                reliability setup for scalable infrastructure.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500 to-teal-500 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div className="relative group bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white leading-[1.4] mb-4">
                AI & Machine Learning
              </h4>
              <p className="text-neutral-300 text-base md:text-lg leading-[1.6]">
                AI chatbots, forecasting, NLP, computer vision, and ML automation
                solutions that drive business value.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        </div>
      ),
    },
    {
      title: "05",
      content: (
        <div className="relative group bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-500">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white leading-[1.4] mb-4">
                UI/UX Design
              </h4>
              <p className="text-neutral-300 text-base md:text-lg leading-[1.6]">
                User research, wireframes, prototypes, and complete product design
                systems that users love.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        </div>
      ),
    },
    {
      title: "06",
      content: (
        <div className="relative group bg-gradient-to-br from-[#1A1A2E]/70 to-[#1A1A2E]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white leading-[1.4] mb-4">
                Application Revamps & Modernization
              </h4>
              <p className="text-neutral-300 text-base md:text-lg leading-[1.6]">
                Enhancing legacy applications with new UI, performance improvements,
                and modern frameworks.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={servicesData} />
    </div>
  );
}
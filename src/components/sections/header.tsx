"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Plus, Minus, Menu as MenuIcon, User, Building, Handshake, Share2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import GlowingButton from "@/components/ui/glowing-button";

const WopeLogo = () => (
  <Link href="/" aria-label="Homepage" className="text-white font-bold text-[28px] leading-none tracking-[-0.05em]">
    wope
  </Link>
);

const dropdownItems = [
  { href: "/for-agencies", title: "Wope for Agencies", description: "Grow your startup with wope.", Icon: Building },
  { href: "/for-startups", title: "Wope for Startups", description: "Seamless Agency Solutions.", Icon: User },
  { href: "/partnership", title: "Partnership", description: "Grow together with Wope!", Icon: Handshake },
  { href: "/affiliate", title: "Affiliate", description: "Start, share and earn with Wope.", Icon: Share2 },
];

const DropdownItem = ({ href, title, description, Icon }: (typeof dropdownItems)[0]) => (
  <Link href={href} className="flex items-start p-3 -m-3 rounded-lg hover:bg-white/5 transition-colors group/item">
    <div className="w-7 h-7 mr-4 rounded-md bg-gradient-to-br from-accent-purple to-accent-magenta flex-shrink-0 flex items-center justify-center">
        <Icon className="w-4 h-4 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-text-primary text-base">{title}</h4>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0A0118]/80 backdrop-blur-lg border-b border-white/5">
        <div className="container h-full flex items-center justify-between">
          <WopeLogo />
          
          <nav className="hidden lg:flex items-center gap-x-8">
            <div className="group relative">
              <button className="flex items-center gap-x-1 text-base font-medium text-text-secondary hover:text-text-primary transition-colors">
                Resources
                <ChevronDown className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 hidden group-hover:block w-[520px]">
                <div className="bg-bg-elevated rounded-xl border border-border-subtle shadow-lg p-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {dropdownItems.map((item) => <DropdownItem key={item.title} {...item} />)}
                  </div>
                </div>
              </div>
            </div>
            <Link href="#" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">Pricing</Link>
            <Link href="#" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">Download</Link>
            <Link href="#" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">Contact Us</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-x-4">
            <GlowingButton variant="ghost">
              Log in
            </GlowingButton>
            <GlowingButton>
              Sign up
            </GlowingButton>
          </div>

          <div className="lg:hidden">
            <GlowingButton onClick={() => setIsMenuOpen(true)}>
              <div className="flex items-center gap-1.5">
                <MenuIcon className="w-5 h-5" />
                Menu
              </div>
            </GlowingButton>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-bg-primary z-50">
          <div className="container h-full flex flex-col pt-5 pb-8">
            <div className="flex justify-between items-center h-20 -mt-5">
              <WopeLogo />
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2">
                <X className="w-6 h-6 text-text-secondary" />
              </button>
            </div>

            <nav className="flex-grow mt-8">
              <ul className="space-y-6">
                <li>
                  <button onClick={() => setIsResourcesOpen(!isResourcesOpen)} className="w-full flex justify-between items-center text-lg font-medium text-text-primary">
                    Resources
                    {isResourcesOpen ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                  </button>
                  {isResourcesOpen && (
                    <div className="mt-4 pl-4 space-y-2">
                      {dropdownItems.map(item => (
                        <Link key={item.title} href={item.href} className="flex items-center gap-3 py-2 text-text-secondary hover:text-text-primary">
                          <item.Icon className="w-4 h-4 text-accent-purple" />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li><Link href="#" className="text-lg font-medium text-text-primary">Pricing</Link></li>
                <li><Link href="#" className="text-lg font-medium text-text-primary">Download</Link></li>
                <li><Link href="#" className="text-lg font-medium text-text-primary">Contact Us</Link></li>
              </ul>
            </nav>

            <div className="flex flex-col gap-y-4">
              <GlowingButton variant="ghost" className="w-full">
                Log in
              </GlowingButton>
              <GlowingButton className="w-full">
                Sign up
              </GlowingButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
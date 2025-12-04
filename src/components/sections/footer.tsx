import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const WopeLogo = () => (
  <Link href="/" aria-label="Wope Homepage" className="flex items-center gap-2 text-white">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 12.4444C10 11.0944 11.1193 10 12.5 10H15.5C16.8807 10 18 11.0944 18 12.4444V14C18 15.6569 16.6569 17 15 17H13C11.3431 17 10 15.6569 10 14V12.4444Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    <span className="text-white text-[27px] font-bold tracking-[-0.04em] leading-none">wope</span>
  </Link>
);

const NAV_LINKS = {
  platform: [
    { label: "Pricing", href: "/pricing" },
    { label: "Partnership", href: "/partnership" },
    { label: "Affiliate", href: "/affiliate" },
    { label: "Download", href: "/download" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  legals: [
    { label: "Terms of Services", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  wopeFor: [
    { label: "Agencies", href: "/for-agencies" },
    { label: "Startups", href: "/for-startups" },
  ],
};

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-bg-primary font-inter border-t border-border-subtle">
      <div className="container mx-auto px-4">
        <div className="pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8">
          
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <WopeLogo />
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-[260px]">
              Experience the next generation of SEO analytics.
            </p>
            <button className="mt-8 px-4 py-2.5 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
              Unlimited trial for 14 days
            </button>
          </div>

          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="font-medium text-base text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              {NAV_LINKS.platform.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="font-medium text-base text-white mb-6">Legals</h4>
            <ul className="space-y-4">
              {NAV_LINKS.legals.map((link) => (
                <li key={link.label}>
                   <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="font-medium text-base text-white mb-6">Wope for</h4>
            <ul className="space-y-4">
              {NAV_LINKS.wopeFor.map((link) => (
                <li key={link.label}>
                   <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 justify-self-center lg:justify-self-stretch">
            <div className="bg-[#110724] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
              <h4 className="font-medium text-base text-white mb-4">Get in touch</h4>
              <p className="text-sm leading-relaxed text-gray-400">
                651 N Broad St, Suite 201, Middletown, Delaware 19709, United States
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 py-8 border-t border-border-subtle">
          <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between">
            <p className="text-sm text-gray-400">©2025 Wope. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ResearchCards from "@/components/sections/research-cards";
import FaqSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary font-inter antialiased">
      <Header />
      <main>
        <Hero />
        <ResearchCards />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is Wope?",
    answer:
      "Wope is a new-generation SEO research platform designed to elevate your marketing strategy. It is powered by an advanced artificial intelligence assistant that helps you generate endless ideas for high-quality, engaging content. The platform provides a suite of tools to analyze backlinks, track keyword rankings, and perform competitive analysis, helping you take control of your SEO performance and improve your search engine rankings.",
  },
  {
    question: "Who is Wope for?",
    answer:
      "Wope is built for a range of users involved in digital marketing and search engine optimization. Its features are powerful enough for specialized SEO agencies and scalable for growing startups looking to make an impact in search rankings. Whether you are analyzing competitor strategies or optimizing your own content, Wope provides the necessary tools to stay on top of your SEO game.",
  },
  {
    question: "What can I do with the Backlink Profile Analysis feature?",
    answer:
      "Wope's Backlink Profile Analysis allows you to dive deep into any website's backlink profile. You can uncover the specific sources of their backlinks, see the exact anchor texts being used, and evaluate the authority scores of linking domains. This insight is crucial for optimizing your own link-building strategy, finding new opportunities, and ultimately boosting your website's SEO performance.",
  },
  {
    question: 'How does the "Shared SEO Keywords" feature work?',
    answer:
      "This feature is designed for rapid competitive analysis. It allows you to enter two different websites and instantly identifies the overlapping keywords for which both sites rank. This is perfect for strategic planning, as it helps you understand your direct competitors' SEO footprint, discover keyword gaps, and refine your own targeting strategy to capture more market share.",
  },
  {
    question: "What kind of keyword analysis does Wope offer?",
    answer:
      "Wope enables you to track and analyze the keywords your website is already ranking for. The tool provides detailed data on search volume, click-through rates (CTR), historical trends, and keyword intent. By understanding these metrics, you can effectively optimize both your organic SEO strategy for better rankings and your paid Google Ads campaigns for a higher return on investment.",
  },
];

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="relative bg-background py-20 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 1px 1px at 30% 40%, white, transparent),
            radial-gradient(ellipse 1px 1px at 70% 20%, white, transparent),
            radial-gradient(ellipse 1px 1px at 80% 80%, white, transparent),
            radial-gradient(ellipse 2px 2px at 10% 90%, white, transparent),
            radial-gradient(ellipse 1px 1px at 50% 60%, white, transparent),
            radial-gradient(ellipse 1px 1px at 90% 10%, white, transparent),
            radial-gradient(ellipse 1px 1px at 20% 15%, white, transparent),
            radial-gradient(ellipse 1px 1px at 60% 85%, white, transparent)
          `,
          backgroundSize: '400px 400px',
          opacity: 0.1,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[960px] px-4">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <div className="mb-4 inline-block rounded-full bg-white/5 py-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-purple-400 border border-white/10">
            FAQ
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Haven’t found what you’re looking for?{" "}
            <Link
              href="/contact-us"
              className="text-accent-purple hover:underline"
            >
              Contact us.
            </Link>
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border-b border-border-subtle"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-6 text-left text-lg font-semibold text-white hover:no-underline [&>svg]:hidden">
                <span className="flex-1 pr-4">{item.question}</span>
                <div className="relative h-6 w-6 flex-shrink-0">
                  <Plus className="h-full w-full text-text-secondary opacity-70 transition-opacity group-data-[state=open]:opacity-0" />
                  <Minus className="absolute inset-0 h-full w-full text-accent-purple opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-8 text-base leading-relaxed text-text-secondary">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
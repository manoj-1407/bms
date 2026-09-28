"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  standalone?: boolean;
}

export function FAQSection({ standalone = false }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-warm-white theme-transition">
      <div
        className={
          standalone
            ? "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="The questions we most often hear."
                description="Before your first call, here are answers to the things many people want to know first."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Still have questions?
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <Reveal
                  key={faq.id}
                  delay={((idx % 4) * 80) as 0 | 80 | 160 | 240}
                  as="div"
                >
                  <div className="overflow-hidden rounded-2xl border border-soft-sand bg-warm-white transition-all duration-300 hover:border-deep-sage/30 theme-transition">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-6"
                      onClick={() =>
                        setOpenId((curr) => (curr === faq.id ? null : faq.id))
                      }
                      aria-expanded={isOpen}
                    >
                      <div>
                        {faq.category && (
                          <p className="text-[11px] font-medium uppercase tracking-wider text-deep-sage">
                            {faq.category}
                          </p>
                        )}
                        <h3 className="mt-1 text-base font-semibold text-charcoal sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>
                      <span
                        className={cn(
                          "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-soft-sand text-charcoal transition-all duration-500",
                          isOpen &&
                            "rotate-90 border-deep-sage bg-deep-sage text-warm-white"
                        )}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-6 sm:pb-7 sm:text-base">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

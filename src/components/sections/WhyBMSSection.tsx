import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyBMS } from "@/data/content";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface WhyBMSSectionProps {
  compact?: boolean;
}

export function WhyBMSSection({ compact = false }: WhyBMSSectionProps) {
  return (
    <section id="approach" className="bg-soft-sand/30 theme-transition">
      <div className={compact
          ? "mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:px-12 lg:px-8"
          : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
      }>
        <Reveal>
          <SectionHeading
            eyebrow="WHY BMS WELLNEST"
            title="People choose us because we don't treat symptoms — we treat people."
            description={
              compact
                ? "Six commitments that make our approach different."
                : "Six commitments that make our approach different — no more extreme rules, no more one-size-fits-all, no more blame."
            }
            align={compact ? "center" : "left"}
            className={compact ? "mx-auto" : undefined}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyBMS.map((item, idx) => (
            <Reveal key={item.id} delay={((idx % 3) * 100) as 0 | 100 | 200}>
              <article className="group h-full rounded-3xl border border-soft-sand bg-warm-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md theme-transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-deep-sage/10 text-deep-sage transition-colors duration-300 group-hover:bg-deep-sage group-hover:text-warm-white">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Button href="/about" variant="primary">
                Read more about us
              </Button>
              <Button href="/founder" variant="secondary">
                Meet the founder
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

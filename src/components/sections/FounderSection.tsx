import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface FounderSectionProps {
  compact?: boolean;
  standalone?: boolean;
}

export function FounderSection({
  compact = false,
  standalone = false,
}: FounderSectionProps) {
  return (
    <section
      id="founder"
      className={standalone ? "bg-warm-white theme-transition" : "bg-soft-sand/30 theme-transition"}
    >
      <div
        className={
          compact
            ? "mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:px-12 lg:px-8"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-soft-sand theme-transition">
                <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted px-4">
                  Founder portrait coming soon
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 rounded-2xl bg-deep-sage/15 sm:block" />
              <div className="absolute -left-6 -top-6 hidden h-20 w-20 rounded-2xl bg-serenity-blue/30 sm:block" />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="MEET OUR FOUNDER"
                title={
                  compact
                    ? "Chellaiah Edupuganti."
                    : "Meet our founder — Chellaiah Edupuganti."
                }
                description={
                  compact
                    ? "Why listening always comes first, and what wellness truly means at BMS Wellnest."
                    : "Founded by Chellaiah Edupuganti — BMS Wellnest grew out of a simple question: why do so many people leave wellness appointments feeling unheard?"
                }
              />
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="mt-8 border-l-4 border-deep-sage pl-5">
                <p className="text-xl italic leading-relaxed text-charcoal">
                  &ldquo;Wellness begins the moment someone truly listens.&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-deep-sage">
                  — Chellaiah Edupuganti, Founder
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 max-w-none space-y-4 text-sm leading-relaxed text-muted md:text-base">
                <p>
                  Chellaiah founded BMS Wellnest after spending years in clinical
                  and wellness spaces — observing the same pattern repeated over
                  and over: someone would walk in with real symptoms, real
                  struggles, a real life — and leave with a generic plan, a
                  checklist of what not to do, and the quiet feeling that nobody
                  truly asked how they actually were.
                </p>
                <p>
                  He wanted to build something different. A practice that looks
                  at the whole person. That listens first. That does not reach
                  for quick fixes. That understands wellness is not a single
                  number on a scale or one blood marker — it is how you sleep,
                  how you feel when you wake up, how you walk through your day,
                  how you carry your own life in your own body.
                </p>
                <p>
                  Body. Mind. Soul. Not three separate things to be addressed
                  on three separate visits. One life. One practice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                {compact && (
                  <Button href="/founder" variant="primary" className="gap-2">
                    Read his full story
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
                {!compact && (
                  <>
                    <Button href="/programs" variant="primary">
                      Explore our programs
                    </Button>
                    <Button href="/contact" variant="secondary">
                      Book a consultation
                    </Button>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

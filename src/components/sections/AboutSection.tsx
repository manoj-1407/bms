import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { principles, coreValues } from "@/data/content";
import { Leaf, Brain, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Body: Leaf,
  Mind: Brain,
  Soul: Heart,
};

interface AboutSectionProps {
  minimalHero?: boolean;
}

const PRINCIPLE_DELAYS: Array<0 | 100 | 200> = [0, 100, 200];
const VALUES_DELAYS: Array<0 | 100> = [0, 100];

export function AboutSection({ minimalHero = false }: AboutSectionProps) {
  return (
    <section id="about" className="bg-warm-white theme-transition">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28">
        {!minimalHero && (
          <Reveal>
            <SectionHeading
              eyebrow="ABOUT US"
              title="A practice built on listening, and guided by the whole you."
              description="BMS Wellnest was built around a simple belief: no body without mind. Body, Mind and Soul are not separate systems — they are one system, one life, one person. Every plan has to respect that."
            />
          </Reveal>
        )}

        <div
          className={
            minimalHero
              ? "grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16"
              : "mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
          }
        >
          <Reveal>
            <div className="order-2 space-y-5 text-base leading-relaxed text-muted lg:order-1">
              <p>
                Most wellness programs speak in rules and restrictions — what to remove, what
                to avoid, what you should not be doing. We start the opposite way.
                We start by listening.
              </p>
              <p>
                We take the time to understand your history, your daily life, your
                family, your work, the way you sleep, the way you feel in your own
                skin. Only then do we begin — together — to design a plan that fits
                your real life, not an imagined one.
              </p>
              <p>
                That is why BMS Wellnest is not a diet plan, a detox or a short-term
                reset. It is a relationship. Gentle. Honest. Compassionate.
                Body, Mind, Soul — one practice.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative order-1 aspect-[5/4] overflow-hidden rounded-3xl bg-soft-sand lg:order-2 theme-transition">
              <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                Image coming soon
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20">
          <Reveal>
            <SectionHeading
              eyebrow="OUR FOUNDATIONAL PRINCIPLES"
              title="Body. Mind. Soul."
              description="Three principles. One integrated approach — no one without the other two."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((p, idx) => {
              const Icon = icons[p.title] ?? Leaf;
              const d = PRINCIPLE_DELAYS[idx % 3];
              return (
                <Reveal key={p.id} delay={d}>
                  <article className="group h-full rounded-3xl border border-soft-sand bg-warm-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-deep-sage/30 theme-transition">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage transition-colors duration-300 group-hover:bg-deep-sage group-hover:text-warm-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-charcoal">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-soft-sand/30 p-8 sm:p-12 lg:p-14 theme-transition">
          <Reveal>
            <SectionHeading
              eyebrow="HOW WE WORK"
              title="Our Core Values."
              description="Four commitments that shape every conversation and every plan."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {coreValues.map((v, idx) => {
              const d = VALUES_DELAYS[idx % 2];
              return (
                <Reveal key={v.id} delay={d}>
                  <figure className="rounded-2xl bg-warm-white p-7 theme-transition">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-deep-sage/10 text-sm font-semibold text-deep-sage">
                        0{idx + 1}
                      </span>
                      <div>
                        <figcaption className="text-base font-semibold text-charcoal">
                          {v.title}
                        </figcaption>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  </figure>
                </Reveal>
              );
            })}
          </div>
          {minimalHero && (
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button href="/programs" variant="primary">
                  Explore programs
                </Button>
                <Button href="/founder" variant="secondary">
                  Meet the founder
                </Button>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

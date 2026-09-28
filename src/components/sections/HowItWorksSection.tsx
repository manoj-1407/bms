import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/data/content";
import { Ear, Brain, Compass, HeartHandshake, Flower2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const icons = [Ear, Brain, Compass, HeartHandshake, Flower2];
const STEP_DELAYS: Array<0 | 100 | 200 | 300 | 400> = [0, 100, 200, 300, 400];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-warm-white theme-transition">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="A simple, calm journey — not a short sprint."
            description="From your first call to the moment your plan feels truly yours — five gentle steps."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ol className="relative mt-16 space-y-10 md:space-y-16 lg:space-y-0">
          <div
            className="pointer-events-none absolute left-6 top-3 bottom-3 w-px bg-soft-sand md:left-8"
            aria-hidden="true"
          />
          {howItWorksSteps.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            const reverse = idx % 2 === 1;
            const d = STEP_DELAYS[idx % 5];
            return (
              <Reveal key={step.id} delay={d} as="li">
                <div
                  className={cn(
                    "relative grid items-center gap-6 lg:grid-cols-12 lg:gap-12",
                    reverse && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="lg:col-span-1 flex items-start gap-6 lg:block">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-warm-white bg-deep-sage text-warm-white shadow-sm md:h-16 md:w-16 md:mx-auto lg:ml-[-40px]">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-deep-sage">
                      Step {idx + 1} of {howItWorksSteps.length}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

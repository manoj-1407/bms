import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Quote } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-white theme-transition">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[40rem] transform-gpu overflow-hidden opacity-60 blur-3xl sm:top-[-20rem]">
        <div className="absolute left-1/2 top-0 aspect-[1155/678] w-[36rem] -translate-x-1/2 rounded-full bg-soft-sand blur-2xl" />
        <div className="absolute right-0 top-10 aspect-square w-[24rem] rounded-full bg-serenity-blue/30 blur-2xl" />
        <div className="absolute left-0 bottom-10 aspect-square w-[20rem] rounded-full bg-sage-green/20 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 sm:px-10 sm:pt-20 md:px-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-sage-green px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-warm-white animate-fade-up">
              Evidence-Based Wellness
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-[68px]">
              Transform your health,{" "}
              <span className="text-deep-sage">naturally.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A holistic, human-centered approach to wellness. We combine
              clinical expertise with compassionate care to help you achieve
              lasting results.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" className="gap-2">
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/programs" variant="secondary">
                View Programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 max-w-sm rounded-2xl border border-soft-sand bg-warm-white p-4 shadow-sm theme-transition animate-fade-up">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-sage/10 text-deep-sage">
                  <Quote className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold text-charcoal">
                  Expert Care, Human Connection
                </p>
              </div>
              <p className="mt-2 pl-10 text-xs leading-relaxed text-muted">
                A calm, guided conversation first — a custom plan second.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 lg:col-span-6 lg:mt-0">
          <Reveal delay={200}>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-soft-sand theme-transition animate-soft-scale-in">
                <div className="flex h-full w-full items-center justify-center text-center text-xs text-muted px-6">
                  Lifestyle portrait coming soon
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-36 rounded-2xl border border-soft-sand bg-warm-white p-4 shadow-md animate-fade-up reveal-delay-200 theme-transition">
                <p className="text-xs font-medium uppercase tracking-wider text-deep-sage">
                  Listening First
                </p>
                <p className="mt-1 text-sm font-semibold text-charcoal">
                  Always
                </p>
              </div>

              <div className="absolute -right-2 -top-4 hidden w-40 rounded-2xl border border-soft-sand bg-warm-white p-4 shadow-md sm:block animate-fade-up reveal-delay-300 theme-transition">
                <p className="text-xs font-medium uppercase tracking-wider text-deep-sage">
                  Body · Mind · Soul
                </p>
                <p className="mt-1 text-sm font-semibold text-charcoal">
                  One practice
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

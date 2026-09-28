import { SectionHeading } from "@/components/ui/SectionHeading";
import { milestones } from "@/data/extras";
import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ResultsSectionProps {
  standalone?: boolean;
}

export function ResultsSection({ standalone = false }: ResultsSectionProps) {
  const validMilestones = milestones.filter(
    (m) => m.value && !m.value.startsWith("[")
  );

  return (
    <section id="results" className="bg-warm-white theme-transition">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title={standalone ? "Progress worth celebrating." : "Progress Worth Celebrating."}
            description="Every milestone represents real people, real conversations and real journeys. These numbers tell only a small part of a much larger, more human story."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        {validMilestones.length > 0 ? (
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {validMilestones.map((m, idx) => (
                <div
                  key={m.id}
                  style={{
                    transitionDelay: `${(idx % 4) * 80}ms`,
                  }}
                  className="reveal rounded-3xl border border-soft-sand bg-warm-white p-8 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/30 theme-transition"
                >
                  <p className="text-4xl font-semibold tracking-tight text-deep-sage sm:text-5xl">
                    {m.value}
                    <span className="text-deep-sage">{m.suffix}</span>
                  </p>
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={100}>
            <div className="mt-14 mx-auto max-w-3xl rounded-3xl border border-dashed border-soft-sand bg-warm-white/60 p-10 text-center theme-transition">
              <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                MILESTONES
              </p>
              <h3 className="mt-3 text-lg font-semibold text-charcoal">
                Our journey&apos;s story, still being written
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Milestones and numbers are being gathered. What matters most —
                the real, human stories — are already in motion.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={200}>
          <div className="mt-20 rounded-3xl bg-soft-sand/40 p-8 sm:p-12 lg:p-16 theme-transition">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                A MESSAGE FROM OUR FOUNDER
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-charcoal sm:text-3xl">
                Why BMS Wellnest Exists
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                A personal note from our founder on what wellness truly means to
                him, why listening is the foundation of everything we do, and
                what you can expect when you begin your journey with us.
              </p>

              <div className="mt-10 mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-charcoal/80 group">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(113,128,107,0.15),transparent_60%)]" />
                  <div className="relative z-10 text-center">
                    <button
                      type="button"
                      aria-label="Play founder video"
                      disabled
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-warm-white text-charcoal shadow-lg transition-all duration-500 group-hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-serenity"
                    >
                      <Play
                        className="ml-1 h-8 w-8"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </button>
                    <p className="mt-5 text-xs text-warm-white/70">
                      Founder video coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

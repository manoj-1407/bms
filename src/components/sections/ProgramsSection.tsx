import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ProgramsSectionProps {
  compact?: boolean;
  full?: boolean;
}

export function ProgramsSection({
  compact = false,
  full = false,
}: ProgramsSectionProps) {
  const shown = compact ? programs.slice(0, 3) : programs;
  return (
    <section id="programs" className="bg-warm-white theme-transition">
      <div
        className={
          compact
            ? "mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:px-12 lg:px-8"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <Reveal>
          <SectionHeading
            eyebrow="PROGRAMS & SERVICES"
            title={
              full || compact
                ? "Programs for every season of your life."
                : "A program for every season of your life."
            }
            description={
              compact
                ? "A look at three of our most-loved programs — visit the Programs page for the full list."
                : "From gentle reset programs to long-term 1:1 journeys — each one rooted in listening, shaped around your real life."
            }
            align={compact ? "center" : "left"}
            className={compact ? "mx-auto" : undefined}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((program, idx) => (
            <Reveal key={program.id} delay={((idx % 3) * 100) as 0 | 100 | 200}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-soft-sand bg-warm-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md theme-transition">
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-soft-sand theme-transition">
                  <div className="absolute inset-0 flex items-center justify-center text-center text-xs text-muted">
                    Program image coming soon
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-deep-sage/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-deep-sage">
                      <Sparkles className="h-3 w-3" />
                      {program.category}
                    </span>
                    {program.duration && (
                      <span className="text-xs text-muted">
                        {program.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-charcoal">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {program.shortDescription}
                  </p>

                  <div className="mt-5 flex-1">
                    <ul className="space-y-2 text-sm text-charcoal">
                      {(program.benefits ?? []).slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-deep-sage" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/programs"
                      className="inline-flex items-center gap-1 text-sm font-medium text-deep-sage transition-all duration-300 group-hover:gap-2"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Button href="/programs" variant="primary">
                See all {programs.length} programs
              </Button>
              <Button href="/contact" variant="secondary">
                Talk to us
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const GOOGLE_REVIEWS_URL: string | undefined = undefined;
const GOOGLE_RATING: string | undefined = undefined;
const GOOGLE_REVIEW_COUNT: string | undefined = undefined;

interface TestimonialsSectionProps {
  compact?: boolean;
  standalone?: boolean;
}

export function TestimonialsSection({
  compact = false,
  standalone = false,
}: TestimonialsSectionProps) {
  const validTestimonials = testimonials.filter(
    (t): t is Testimonial & { name: string; quote: string } =>
      !!t.name && !!t.quote && !t.name.startsWith("[") && !t.quote.startsWith("[")
  );
  const shown = compact ? validTestimonials.slice(0, 2) : validTestimonials;

  return (
    <section id="testimonials" className="bg-soft-sand/30 theme-transition">
      <div
        className={
          compact
            ? "mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:px-12 lg:px-8"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <Reveal>
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title={
              standalone
                ? "Real Stories. Real Journeys."
                : "Real stories. Real journeys."
            }
            description={
              compact
                ? "A few words from people who have chosen to begin their wellness journey with us."
                : "Every wellness journey is different. These stories reflect the experiences of the people who have chosen to begin theirs with BMS Wellnest."
            }
            align="center"
            className="mx-auto"
          />
        </Reveal>

        {(GOOGLE_RATING || GOOGLE_REVIEW_COUNT || GOOGLE_REVIEWS_URL) && (
          <Reveal delay={100}>
            <div className="mt-12 mx-auto max-w-2xl rounded-2xl border border-soft-sand bg-warm-white p-6 text-center sm:p-8 theme-transition">
              <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                GOOGLE REVIEWS
              </p>
              <div className="mt-3 flex items-center justify-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              {GOOGLE_RATING && (
                <p className="mt-2 text-3xl font-semibold text-charcoal">
                  {GOOGLE_RATING} / 5
                </p>
              )}
              {GOOGLE_REVIEW_COUNT && (
                <p className="mt-1 text-sm text-muted">
                  Based on {GOOGLE_REVIEW_COUNT} verified reviews
                </p>
              )}
              {GOOGLE_REVIEWS_URL && (
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-deep-sage underline underline-offset-4 hover:text-charcoal"
                >
                  Read all Google reviews &rarr;
                </a>
              )}
            </div>
          </Reveal>
        )}

        {shown.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((t, idx) => (
              <Reveal
                key={t.id}
                delay={((idx % 3) * 100) as 0 | 100 | 200}
                as="article"
                className="flex flex-col rounded-3xl border border-soft-sand bg-warm-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-deep-sage/30 theme-transition"
              >
                <Quote className="h-6 w-6 text-deep-sage/30" />

                {t.rating && (
                  <div className="mt-4 flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                )}

                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 border-t border-soft-sand pt-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-green/20 text-sm font-semibold text-deep-sage">
                      {t.name
                        .split(" ")
                        .filter((n: string) => !n.startsWith("["))
                        .map((n: string) => n[0])
                        .slice(0, 2)
                        .join("") || "??"}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {[t.location, t.program]
                          .filter((v): v is string => !!v && !v.startsWith("["))
                          .join(" · ")}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 mx-auto max-w-2xl rounded-3xl border border-dashed border-soft-sand bg-warm-white/60 p-10 text-center theme-transition">
            <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
              COMING SOON
            </p>
            <h3 className="mt-3 text-lg font-semibold text-charcoal">
              Real stories from real members
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We&apos;re collecting testimonials from people who have begun their
              wellness journey with BMS Wellnest. Check back soon.
            </p>
          </div>
        )}

        {compact && (
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Button href="/testimonials" variant="primary" className="gap-2">
                Read all stories
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Begin your journey
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

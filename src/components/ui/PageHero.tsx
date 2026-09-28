import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
  visualLabel?: string;
  tone?: "default" | "sand";
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
  visualLabel,
  tone = "default",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "theme-transition overflow-hidden",
        tone === "sand" ? "bg-soft-sand/30" : "bg-warm-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20 md:px-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-sage-green px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-warm-white animate-fade-up">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-charcoal sm:text-5xl md:text-6xl lg:text-[60px]">
              {title}
            </h1>
          </Reveal>

          {description && (
            <Reveal delay={200}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg animate-fade-up">
                {description}
              </p>
            </Reveal>
          )}

          {(primaryCta || secondaryCta) && (
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="primary">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </Reveal>
          )}
        </div>

        <div className="relative mt-10 lg:mt-0">
          <Reveal delay={200}>
            {visual ?? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-soft-sand theme-transition">
                <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted">
                  {visualLabel || "Page visual coming soon"}
                </div>
                <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 rounded-2xl bg-deep-sage/10 sm:block" />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

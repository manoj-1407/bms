"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { gallery, galleryCategories } from "@/data/extras";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface GallerySectionProps {
  standalone?: boolean;
}

export function GallerySection({ standalone = false }: GallerySectionProps) {
  const [active, setActive] = useState<string>("all");
  const filtered = useMemo(
    () =>
      active === "all"
        ? gallery
        : gallery.filter((g) => g.category === active),
    [active]
  );

  return (
    <section id="gallery" className="bg-soft-sand/30 theme-transition">
      <div
        className={
          standalone
            ? "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <Reveal>
          <SectionHeading
            eyebrow="GALLERY"
            title="A look inside BMS Wellnest."
            description="Warm spaces, real conversations, community circles, and the small moments that make this practice what it is."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => {
              const isActive = cat.slug === active;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActive(cat.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300",
                    isActive
                      ? "border-deep-sage bg-deep-sage text-warm-white"
                      : "border-soft-sand bg-warm-white text-charcoal hover:border-deep-sage/40 hover:text-deep-sage theme-transition"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div
            key={active}
            className="mt-10 columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3 animate-soft-scale-in"
          >
            {filtered.map((item, idx) => (
              <article
                key={item.id}
                style={{ breakInside: "avoid" }}
                className="group relative overflow-hidden rounded-2xl border border-soft-sand bg-warm-white theme-transition"
              >
                <div
                  className={cn(
                    "w-full overflow-hidden bg-soft-sand",
                    idx % 5 === 0 ? "aspect-[4/5]" : idx % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
                  )}
                >
                  <div className="flex h-full w-full items-center justify-center text-center text-xs text-muted px-3">
                    {item.title ||
                      item.category.charAt(0).toUpperCase() +
                        item.category.slice(1) +
                        " item"}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent p-5 text-warm-white transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <p className="text-[11px] uppercase tracking-wider text-sage-green">
                    {item.category}
                  </p>
                  <p className="mt-1 text-sm font-medium">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted">
            No items in this category yet — check back soon.
          </p>
        )}

        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button href="/locations" variant="primary">
              Visit a branch
            </Button>
            <Button href="/contact" variant="secondary">
              Book a call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

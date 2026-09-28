import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside BMS Wellnest — our spaces, programs, community circles, events and the team.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="GALLERY"
          title={
            <>
              Moments from{" "}
              <span className="text-deep-sage">our daily practice.</span>
            </>
          }
          description="Warm spaces, real conversations, community circles, quiet check-ins — the little moments that make BMS Wellnest what it is."
          primaryCta={{ label: "Visit a branch", href: "/locations" }}
          secondaryCta={{ label: "Book a call", href: "/contact" }}
          tone="sand"
        />
        <GallerySection standalone />
        <section className="bg-warm-white theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="BE PART OF IT"
                title="Come be part of our story."
                description="Drop in for a consultation and experience BMS Wellnest in person."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Book a consultation
                </Button>
                <Button href="/testimonials" variant="secondary">
                  Read stories
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Explore BMS Wellnest programs — Weight Wellness, Clinical Nutrition, Lifestyle Medicine, Personal 1:1, Community Circles, and Consultations.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="PROGRAMS & SERVICES"
          title={
            <>
              Find the program that{" "}
              <span className="text-deep-sage">matches your life.</span>
            </>
          }
          description="From gentle short-term reset programs to long-term 1:1 journeys — every program is designed around listening first, and adapting to how your life actually looks."
          primaryCta={{ label: "Book a consultation", href: "/contact" }}
          secondaryCta={{ label: "Read founder story", href: "/founder" }}
          tone="default"
        />
        <ProgramsSection full />
        <section className="bg-soft-sand/30 theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="NOT SURE?"
                title="Not sure which program is right for you?"
                description="That's exactly what a gentle 20-minute conversation is for. No sales, no pressure — just clarity."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Talk to us
                </Button>
                <Button href="/faq" variant="secondary">
                  Read the FAQ
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

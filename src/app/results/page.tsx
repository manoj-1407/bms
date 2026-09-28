import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Results & Milestones",
  description:
    "A look at our milestones, the lives we've been part of, and a message from our founder on what 'results' truly mean at BMS Wellnest.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="RESULTS & MILESTONES"
          title={
            <>
              Progress worth{" "}
              <span className="text-deep-sage">celebrating.</span>
            </>
          }
          description="We measure success the way you do — by how you feel, how you move through your days, and the lasting changes that become part of you."
          primaryCta={{ label: "Read real stories", href: "/testimonials" }}
          secondaryCta={{ label: "Meet the team", href: "/team" }}
          tone="sand"
        />
        <ResultsSection standalone />
        <section className="bg-warm-white theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="YOUR TURN"
                title="Your story could be next."
                description="Every journey begins with a single, calm conversation."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Book a consultation
                </Button>
                <Button href="/programs" variant="secondary">
                  Explore programs
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

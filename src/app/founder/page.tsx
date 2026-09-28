import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FounderSection } from "@/components/sections/FounderSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Founder",
  description:
    "Meet Chellaiah Edupuganti — the founder of BMS Wellnest, and why he built a wellness practice rooted in listening before anything else.",
};

export default function FounderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FounderSection standalone />
        <section className="bg-warm-white theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="CONTINUE"
                title="Start a conversation."
                description="Our founder leads many of our 1:1 journeys personally. Book a call and see if BMS Wellnest is the right fit for you."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Book a call
                </Button>
                <Button href="/results" variant="secondary">
                  See real results
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

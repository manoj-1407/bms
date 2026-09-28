import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Everything you may want to ask before booking at BMS Wellnest — programs, timeline, online sessions, pricing, insurance and more.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title={
            <>
              The questions we{" "}
              <span className="text-deep-sage">most often hear.</span>
            </>
          }
          description="Before you book a call, here are the things many people ask us first. If your question isn't here, we'd love to hear it — reach out anytime."
          primaryCta={{ label: "Talk to us", href: "/contact" }}
          secondaryCta={{ label: "Book a call", href: "/contact" }}
          tone="default"
        />
        <FAQSection standalone />
        <section className="bg-soft-sand/30 theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="STILL WONDERING?"
                title="Still have questions?"
                description="Most questions are best answered with a simple, warm conversation. Write or call — we'll reply quickly and honestly."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Contact us
                </Button>
                <Button href="/programs" variant="secondary">
                  Browse programs
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

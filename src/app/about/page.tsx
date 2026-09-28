import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About BMS Wellnest — a holistic approach to wellness rooted in listening. Our principles of Body, Mind and Soul, and how we guide your journey.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="ABOUT BMS WELLNEST"
          title={
            <>
              A wellness approach that{" "}
              <span className="text-deep-sage">treats the whole you.</span>
            </>
          }
          description="We don't look at weight, pain, sleep, stress or energy as separate things. We look at how they all connect in your life — and build a plan that makes sense for your real days, not an ideal week."
          primaryCta={{ label: "Explore our programs", href: "/programs" }}
          secondaryCta={{ label: "Book a call", href: "/contact" }}
          tone="sand"
        />
        <AboutSection minimalHero />
        <HowItWorksSection />
        <section className="bg-warm-white theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="BEGIN"
                title="Ready to take a simple first step?"
                description="A calm 20-minute call with no pressure, no prescription — just a conversation to understand where you are."
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
                  See all programs
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

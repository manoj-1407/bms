import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Member Stories",
  description:
    "Real stories and testimonials from people who have begun their wellness journey at BMS Wellnest — Body, Mind and Soul.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="REAL STORIES"
          title={
            <>
              The people who make{" "}
              <span className="text-deep-sage">this work real.</span>
            </>
          }
          description="Every story is different. Different starting points, different goals, different struggles. What they share is a willingness to begin — and someone who would truly listen."
          primaryCta={{ label: "Begin your story", href: "/contact" }}
          secondaryCta={{ label: "See our programs", href: "/programs" }}
          tone="default"
        />
        <TestimonialsSection standalone />
        <section className="bg-soft-sand/30 theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="BEGIN"
                title="Ready to write your own chapter?"
                description="A simple, warm conversation is the first page."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Book a call
                </Button>
                <Button href="/gallery" variant="secondary">
                  Visit our gallery
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

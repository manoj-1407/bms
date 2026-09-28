import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyBMSSection } from "@/components/sections/WhyBMSSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "BMS Wellnest — Body, Mind & Soul | Holistic Wellness by Chellaiah Edupuganti",
  description:
    "Wellness that looks at the whole you. Body, Mind and Soul — never separately. Founded by Chellaiah Edupuganti.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Why BMS — teaser 6 points, CTA to /about */}
        <WhyBMSSection compact />

        {/* Programs — teaser (not full), CTA to /programs */}
        <ProgramsSection compact />

        {/* Founder — teaser, CTA to /founder */}
        <FounderSection compact />

        {/* Testimonials — 3 cards teaser, CTA to /testimonials */}
        <TestimonialsSection compact />

        {/* Explore other pages CTA */}
        <section className="bg-warm-white theme-transition">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="EXPLORE MORE"
                title="Deeper journeys, in their own pages."
                description="Everything in one place, but spread out so each story can breathe."
                align="center"
                className="mx-auto"
              />
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                <Link
                  href="/results"
                  className="group flex flex-col justify-between rounded-2xl border border-soft-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 hover:shadow-md theme-transition"
                >
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                      OUR JOURNEY
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-charcoal">
                      Results & Milestones
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      The milestones, the lives, and a message from our founder.
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-medium text-deep-sage group-hover:underline">
                    Open page &rarr;
                  </p>
                </Link>

                <Link
                  href="/team"
                  className="group flex flex-col justify-between rounded-2xl border border-soft-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 hover:shadow-md theme-transition"
                >
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                      OUR PEOPLE
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-charcoal">
                      Meet the Team
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Experienced, kind practitioners who truly listen before anything else.
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-medium text-deep-sage group-hover:underline">
                    Open page &rarr;
                  </p>
                </Link>

                <Link
                  href="/gallery"
                  className="group flex flex-col justify-between rounded-2xl border border-soft-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 hover:shadow-md theme-transition"
                >
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                      INSIDE BMS
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-charcoal">
                      Photo Gallery
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      A look inside our branches, our programs, and our community.
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-medium text-deep-sage group-hover:underline">
                    Open page &rarr;
                  </p>
                </Link>

                <Link
                  href="/faq"
                  className="group flex flex-col justify-between rounded-2xl border border-soft-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 hover:shadow-md theme-transition"
                >
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                      QUESTIONS
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-charcoal">
                      FAQ
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Answers to the questions most people ask before their first call.
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-medium text-deep-sage group-hover:underline">
                    Open page &rarr;
                  </p>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Book a call
                </Button>
                <Button href="/locations" variant="secondary">
                  Find a location
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

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find a BMS Wellnest location near you.",
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="LOCATIONS"
          title={
            <>
              Find us{" "}
              <span className="text-deep-sage">where you are.</span>
            </>
          }
          description="Calm, welcoming spaces designed so you can breathe, settle in and be truly listened to."
          primaryCta={{ label: "Call the nearest branch", href: "/contact" }}
          secondaryCta={{ label: "Book online", href: "/contact" }}
          tone="sand"
        />
        <LocationsSection standalone />
        <section className="bg-warm-white theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="PREFER ONLINE?"
                title="Don't live near a branch?"
                description="Many of our journeys are available online. Speak to us and we'll design something that works for your location and schedule."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Ask about online
                </Button>
                <Button href="/faq" variant="secondary">
                  Read FAQ
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

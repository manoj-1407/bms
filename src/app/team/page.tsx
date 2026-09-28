import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { TeamSection } from "@/components/sections/TeamSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the BMS Wellnest team of wellness practitioners.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="OUR TEAM"
          title={
            <>
              People who listen,{" "}
              <span className="text-deep-sage">guide, and walk with you.</span>
            </>
          }
          description="Experienced, empathetic practitioners who believe wellness isn't a prescription — it's a conversation, a plan, and a relationship built over time."
          primaryCta={{ label: "Join our program", href: "/programs" }}
          secondaryCta={{ label: "Contact team", href: "/contact" }}
          tone="default"
        />
        <TeamSection standalone />
        <section className="bg-soft-sand/30 theme-transition">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-24 md:px-12 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="WORK WITH US"
                title="Want to join the BMS Wellnest team?"
                description="We're always listening to kind, thoughtful practitioners who believe in human-centered wellness. Reach out anytime."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Write to us
                </Button>
                <Button href="/about" variant="secondary">
                  Our approach
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

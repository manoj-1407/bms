import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Get in touch with BMS Wellnest — by call, WhatsApp, email, or visiting one of our branches. Book a simple, no-pressure consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="CONTACT & BOOK"
          title={
            <>
              Begin with a{" "}
              <span className="text-deep-sage">calm conversation.</span>
            </>
          }
          description="No pressure. No forms that feel like an interview. Just reach out in the way that feels most natural, and we'll talk."
          primaryCta={{ label: "Call us", href: "#contact-details" }}
          secondaryCta={{ label: "Find a branch", href: "/locations" }}
          tone="sand"
        />
        <ContactSection standalone />
      </main>
      <Footer />
    </>
  );
}

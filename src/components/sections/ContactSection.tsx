import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle, Mail, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const CONTACT_PHONE: string | undefined = undefined;
const CONTACT_WHATSAPP: string | undefined = undefined;
const CONTACT_EMAIL: string | undefined = undefined;

interface ContactSectionProps {
  standalone?: boolean;
}

export function ContactSection({ standalone = false }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-warm-white theme-transition">
      {!standalone && (
        <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-24 md:px-12 lg:px-8 lg:pt-28">
          <div className="relative overflow-hidden rounded-3xl bg-deep-sage px-8 py-14 text-center sm:px-12 sm:py-20 lg:px-20 theme-transition">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-serenity-blue" />
              <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-soft-sand" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-sage-green">
                READY TO BEGIN?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-warm-white sm:text-4xl lg:text-5xl">
                Your Wellness Journey Can Start Today.
              </h2>
              <p className="mt-4 text-base text-warm-white/80 sm:text-lg">
                A simple, calm conversation is all it takes to understand where
                you are and what the right next step could look like.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {CONTACT_PHONE && (
                  <Button
                    href={`tel:${CONTACT_PHONE}`}
                    className="bg-warm-white text-deep-sage hover:bg-soft-sand"
                  >
                    Call Us
                  </Button>
                )}
                {CONTACT_WHATSAPP && (
                  <Button
                    href={`https://wa.me/${CONTACT_WHATSAPP.replace(/\D/g, "")}`}
                    variant="secondary"
                    className="border-warm-white text-warm-white hover:bg-warm-white hover:text-deep-sage"
                  >
                    Message on WhatsApp
                  </Button>
                )}
                {!CONTACT_PHONE && !CONTACT_WHATSAPP && (
                  <span
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-warm-white/10 text-warm-white/80"
                    aria-disabled="true"
                  >
                    Contact details coming soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        id="contact-details"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
      >
        <Reveal>
          <SectionHeading
            eyebrow="CONTACT"
            title="However you prefer to reach out."
            description="Choose whatever feels most natural. We want starting to feel easy, not like another form to fill out."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_PHONE ? (
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="group rounded-2xl border border-soft-sand bg-warm-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 theme-transition"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage transition-colors duration-300 group-hover:bg-deep-sage group-hover:text-warm-white">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-charcoal">Call</p>
                <p className="mt-1 text-sm text-muted">{CONTACT_PHONE}</p>
              </a>
            ) : (
              <div className="rounded-2xl border border-soft-sand bg-warm-white p-6 opacity-75 theme-transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-charcoal">Call</p>
                <p className="mt-1 text-sm text-muted">Coming soon</p>
              </div>
            )}

            {CONTACT_WHATSAPP ? (
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-soft-sand bg-warm-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 theme-transition"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage transition-colors duration-300 group-hover:bg-deep-sage group-hover:text-warm-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-charcoal">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm text-muted">Quick, friendly messages</p>
              </a>
            ) : (
              <div className="rounded-2xl border border-soft-sand bg-warm-white p-6 opacity-75 theme-transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-charcoal">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm text-muted">Coming soon</p>
              </div>
            )}

            {CONTACT_EMAIL ? (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group rounded-2xl border border-soft-sand bg-warm-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 theme-transition"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage transition-colors duration-300 group-hover:bg-deep-sage group-hover:text-warm-white">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-charcoal">Email</p>
                <p className="mt-1 text-sm text-muted">{CONTACT_EMAIL}</p>
              </a>
            ) : (
              <div className="rounded-2xl border border-soft-sand bg-warm-white p-6 opacity-75 theme-transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-charcoal">Email</p>
                <p className="mt-1 text-sm text-muted">Coming soon</p>
              </div>
            )}

            <Link
              href="/locations"
              className="group rounded-2xl border border-soft-sand bg-warm-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-sage/40 theme-transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-sage/10 text-deep-sage transition-colors duration-300 group-hover:bg-deep-sage group-hover:text-warm-white">
                <Calendar className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-semibold text-charcoal">Visit</p>
              <p className="mt-1 text-sm text-muted">See our locations</p>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

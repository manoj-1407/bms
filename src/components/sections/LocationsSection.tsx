import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface LocationsSectionProps {
  standalone?: boolean;
}

export function LocationsSection({ standalone = false }: LocationsSectionProps) {
  const validLocations = locations.filter(
    (loc) => (loc.name && !loc.name.startsWith("[")) || (loc.address && !loc.address.startsWith("["))
  );

  return (
    <section id="locations" className="bg-warm-white theme-transition">
      <div
        className={
          standalone
            ? "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <Reveal>
          <SectionHeading
            eyebrow="LOCATIONS"
            title={standalone ? "Branches near you." : "Find us where you are."}
            description={standalone
              ? "Calm, welcoming spaces where you can breathe, settle in, and be truly listened to."
              : "Our branches are designed to feel calm, welcoming and human — a space where you can breathe, be listened to, and begin your wellness journey."
            }
            align="center"
            className="mx-auto"
          />
        </Reveal>

        {validLocations.length > 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {validLocations.map((loc, idx) => (
              <Reveal
                key={loc.id}
                delay={((idx % 2) * 100) as 0 | 100}
                as="article"
                className="overflow-hidden rounded-3xl border border-soft-sand bg-warm-white transition-colors hover:border-deep-sage/30 theme-transition"
              >
                <div className="aspect-[16/9] w-full bg-soft-sand theme-transition">
                  <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                    Branch image coming soon
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  {loc.name && (
                    <h3 className="text-xl font-semibold text-charcoal">
                      {loc.name}
                    </h3>
                  )}

                  <div className="mt-6 space-y-4 text-sm">
                    {loc.address && !loc.address.startsWith("[") && (
                      <div className="flex gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-deep-sage" />
                        <div>
                          <p className="text-charcoal">{loc.address}</p>
                          {loc.landmark && !loc.landmark.startsWith("[") && (
                            <p className="mt-1 text-muted">Landmark: {loc.landmark}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {loc.openingHours && !loc.openingHours.startsWith("[") && (
                      <div className="flex gap-3">
                        <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-deep-sage" />
                        <p className="text-charcoal">{loc.openingHours}</p>
                      </div>
                    )}
                    {loc.phone && !loc.phone.startsWith("[") && (
                      <div className="flex gap-3">
                        <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-deep-sage" />
                        <a
                          href={`tel:${loc.phone}`}
                          className="text-charcoal hover:text-deep-sage"
                        >
                          {loc.phone}
                        </a>
                      </div>
                    )}
                    {loc.email && !loc.email.startsWith("[") && (
                      <div className="flex gap-3">
                        <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-deep-sage" />
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-charcoal hover:text-deep-sage"
                        >
                          {loc.email}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {loc.mapUrl ? (
                      <Button href={loc.mapUrl} variant="primary" className="gap-2">
                        <MapPin className="h-4 w-4" />
                        Get Directions
                      </Button>
                    ) : null}
                    {loc.phone ? (
                      <Button
                        href={`tel:${loc.phone}`}
                        variant="secondary"
                        className="gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    ) : null}
                    {loc.whatsapp ? (
                      <Button
                        href={`https://wa.me/${loc.whatsapp.replace(/\D/g, "")}`}
                        variant="secondary"
                        className="gap-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 mx-auto max-w-2xl rounded-3xl border border-dashed border-soft-sand bg-soft-sand/20 p-10 text-center theme-transition">
            <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
              COMING SOON
            </p>
            <h3 className="mt-3 text-lg font-semibold text-charcoal">
              Branch details being finalized
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We&apos;re putting the finishing touches on our locations. Reach out
              via the contact page and we&apos;ll be happy to share the nearest
              branch with you.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

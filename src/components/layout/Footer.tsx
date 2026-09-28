import Link from "next/link";
import { Leaf, Camera, Share2, Video, MessageCircle } from "lucide-react";

const URL_INSTAGRAM: string | undefined = undefined;
const URL_FACEBOOK: string | undefined = undefined;
const URL_YOUTUBE: string | undefined = undefined;
const URL_WHATSAPP: string | undefined = undefined;

const navGroups = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "How we work", href: "/about" },
      { label: "Founder", href: "/founder" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Results", href: "/results" },
      { label: "Stories", href: "/testimonials" },
      { label: "Gallery", href: "/gallery" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Locations", href: "/locations" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Book a call", href: "/contact" },
    ],
  },
];

function SocialLink({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const baseClass =
    "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300";
  const active =
    "border-warm-white/15 text-warm-white/70 hover:border-deep-sage hover:text-warm-white hover:-translate-y-0.5";
  const disabled = "border-warm-white/10 text-warm-white/40 cursor-default";

  if (!href) {
    return (
      <span aria-label={label} className={`${baseClass} ${disabled}`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${active}`}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/80 theme-transition">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-10 sm:pt-20 md:px-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-deep-sage transition-transform duration-300 group-hover:scale-105">
                <Leaf className="h-5 w-5 text-warm-white" strokeWidth={2} />
              </span>
              <span className="text-lg font-semibold text-warm-white">
                BMS Wellnest
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-warm-white/60">
              BMS Wellnest — Body, Mind and Soul. Holistic wellness rooted in
              listening, human connection and guidance designed around real
              life.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <SocialLink href={URL_INSTAGRAM} label="Instagram">
                <Camera className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={URL_FACEBOOK} label="Facebook">
                <Share2 className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={URL_YOUTUBE} label="YouTube">
                <Video className="h-4 w-4" />
              </SocialLink>
              <SocialLink
                href={
                  URL_WHATSAPP
                    ? `https://wa.me/${URL_WHATSAPP.replace(/\D/g, "")}`
                    : undefined
                }
                label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {navGroups.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <p className="text-sm font-semibold text-warm-white">
                  {g.title}
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {g.links.map((l) => (
                    <li key={`${g.title}-${l.label}`}>
                      <Link
                        href={l.href}
                        className="text-warm-white/60 transition-colors duration-300 hover:text-warm-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-warm-white/10 pt-8 text-xs text-warm-white/50 sm:flex-row sm:items-center">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} BMS Wellnest. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <span className="transition-colors duration-300 hover:text-warm-white cursor-default">
              Privacy
            </span>
            <span className="transition-colors duration-300 hover:text-warm-white cursor-default">
              Terms
            </span>
            <span className="text-warm-white/40">
              Founded by Chellaiah Edupuganti
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

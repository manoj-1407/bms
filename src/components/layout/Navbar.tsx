"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Founder", href: "/founder" },
  { label: "Results", href: "/results" },
  { label: "Stories", href: "/testimonials" },
  { label: "Locations", href: "/locations" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage-green transition-transform duration-300 hover:scale-105">
        <Leaf className="h-5 w-5 text-warm-white" strokeWidth={2} />
      </span>
      <span className="text-lg font-semibold text-charcoal">BMS</span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-50 bg-warm-white/80 backdrop-blur theme-transition border-b border-transparent supports-[backdrop-filter]:bg-warm-white/60 hover:border-b-soft-sand/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors duration-300",
                  active
                    ? "text-charcoal font-medium"
                    : "text-muted hover:text-charcoal"
                )}
              >
                <span>{link.label}</span>
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 w-0 bg-deep-sage transition-all duration-400 ease-out",
                    active && "w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button href="/contact" variant="primary" className="gap-2">
            Book a call
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-soft-sand text-charcoal"
          >
            {open ? (
              <X className="h-5 w-5 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-out md:hidden",
          open
            ? "grid-rows-[1fr] opacity-100 border-t border-soft-sand bg-warm-white"
            : "grid-rows-[0fr] opacity-0 pointer-events-none border-t border-transparent"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm transition-colors duration-300",
                      active
                        ? "bg-deep-sage/10 text-charcoal font-medium"
                        : "text-charcoal hover:bg-soft-sand/40"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2">
                <Button href="/contact" onClick={() => setOpen(false)} variant="primary" className="w-full gap-2">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

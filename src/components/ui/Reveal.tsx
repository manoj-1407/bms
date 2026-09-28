"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 80 | 100 | 160 | 200 | 240 | 300 | 400 | 500;
  as?: "div" | "section" | "article" | "li";
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

const DELAY_CLASSES: Record<Exclude<RevealProps["delay"], 0 | undefined>, string> = {
  80: "reveal-delay-100",
  100: "reveal-delay-100",
  160: "reveal-delay-200",
  200: "reveal-delay-200",
  240: "reveal-delay-300",
  300: "reveal-delay-300",
  400: "reveal-delay-400",
  500: "reveal-delay-500",
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.12,
  once = true,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Use a ref-backed class swap instead of React state + re-renders.
  // IntersectionObserver updates the DOM class directly (external system),
  // which is exactly what effects are designed for. This also avoids any
  // SSR/client attribute mismatch because `is-visible` is part of initial
  // render (server and first client paint match).
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Always-visible fallback (already has the class from initial render)
      return;
    }

    // Drop the visible class now that IO is running; reveal when it intersects
    node.classList.remove("is-visible");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            if (once) io.unobserve(e.target);
          } else if (!once) {
            e.target.classList.remove("is-visible");
          }
        });
      },
      { rootMargin, threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, threshold, once]);

  const delayClass = delay ? DELAY_CLASSES[delay] : null;
  const Component = as as unknown as "div";

  return (
    <Component
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      style={style}
      // Start as visible: guarantees SSR == first client render.
      // useEffect removes the class on client right before IO starts observing,
      // so the reveal animation still plays normally for in-view elements.
      className={cn(
        "reveal is-visible",
        delayClass,
        className
      )}
    >
      {children}
    </Component>
  );
}

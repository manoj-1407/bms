"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "bms-theme";

// ---------------------------------------------------------------------------
// Raw DOM / storage helpers (all safe to call on the client; never used on SSR)
// ---------------------------------------------------------------------------

function readStoredThemeSafe(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    /* noop */
  }
  return null;
}

function resolveSystemThemeSafe(): ResolvedTheme {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

/** Reads whatever the inline no-flash script already set on <html>. */
function readAppliedThemeAttr(): ResolvedTheme {
  try {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
  } catch {
    /* noop */
  }
  return "light";
}

function writeStoredTheme(t: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, t);
  } catch {
    /* noop */
  }
}

function resolveThemeFromStored(t: Theme): ResolvedTheme {
  if (t === "system") return resolveSystemThemeSafe();
  return t;
}

function applyTheme(theme: ResolvedTheme) {
  try {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    if (current === theme) return;
    root.classList.add("theme-transition");
    root.setAttribute("data-theme", theme);
    window.setTimeout(
      () => root.classList.remove("theme-transition"),
      600
    );
  } catch {
    /* noop */
  }
}

// ---------------------------------------------------------------------------
// External stores (useSyncExternalStore eliminates setState-in-effect lint)
// ---------------------------------------------------------------------------

let gTheme: Theme = "system";
const themeListeners = new Set<() => void>();
function subscribeTheme(cb: () => void) {
  themeListeners.add(cb);
  return () => themeListeners.delete(cb);
}
function snapThemeSSR(): Theme {
  return "system";
}
function snapThemeClient(): Theme {
  return gTheme;
}

let gResolved: ResolvedTheme = "light";
const resolvedListeners = new Set<() => void>();
function subscribeResolved(cb: () => void) {
  resolvedListeners.add(cb);
  return () => resolvedListeners.delete(cb);
}
function snapResolvedSSR(): ResolvedTheme {
  return "light";
}
/**
 * On the client the inline no-flash script has already written data-theme to
 * the <html> tag BEFORE React hydrates. Reading the attribute here (rather than
 * returning our own module-initial value of "light") guarantees that React's
 * first client render emits the EXACT same attribute already present in the
 * DOM → zero SSR/client attribute mismatch, without needing
 * suppressHydrationWarning anywhere.
 */
function snapResolvedClient(): ResolvedTheme {
  // Prefer the live DOM attribute (set by inline script) until the first time
  // this app has explicitly set gResolved via an action or boot effect.
  if (typeof document === "undefined") return gResolved;
  const attr = readAppliedThemeAttr();
  if (attr !== gResolved) {
    // Keep module global in sync so setTheme toggles correctly on first click
    gResolved = attr;
  }
  return gResolved;
}

function recomputeResolvedAndNotify() {
  const next = resolveThemeFromStored(gTheme);
  if (next === gResolved) return;
  gResolved = next;
  resolvedListeners.forEach((l) => l());
}

function syncThemeFromDocument() {
  const attrTheme = readAppliedThemeAttr();
  const nextTheme = attrTheme === "dark" ? "dark" : "light";
  if (gResolved !== nextTheme) {
    gResolved = nextTheme;
    resolvedListeners.forEach((l) => l());
  }
  return nextTheme;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    snapThemeClient,
    snapThemeSSR
  );
  const resolvedTheme = useSyncExternalStore(
    subscribeResolved,
    snapResolvedClient,
    snapResolvedSSR
  );

  useEffect(() => {
    const stored = readStoredThemeSafe();
    const t: Theme = stored ?? "system";

    if (t !== gTheme) {
      gTheme = t;
      themeListeners.forEach((l) => l());
    }

    recomputeResolvedAndNotify();
    syncThemeFromDocument();
    applyTheme(gResolved);

    let mq: MediaQueryList | null = null;
    try {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
    } catch {
      mq = null;
    }
    if (!mq) return;
    const onChange = () => {
      if (gTheme !== "system") return;
      recomputeResolvedAndNotify();
      syncThemeFromDocument();
      applyTheme(gResolved);
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (resolvedTheme !== gResolved) {
      gResolved = resolvedTheme;
    }
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  const setTheme = useCallback((t: Theme) => {
    writeStoredTheme(t);
    if (t !== gTheme) {
      gTheme = t;
      themeListeners.forEach((l) => l());
    }
    recomputeResolvedAndNotify();
    syncThemeFromDocument();
    applyTheme(gResolved);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = gResolved === "dark" ? "light" : "dark";
    setTheme(next);
  }, [setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

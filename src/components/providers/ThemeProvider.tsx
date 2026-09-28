"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
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

function readStoredThemeSafe(): Theme {
  if (typeof window === "undefined") return "system";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // ignore storage errors
  }

  return "system";
}

function resolveSystemThemeSafe(): ResolvedTheme {
  if (typeof window === "undefined") return "light";

  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

function resolveThemeValue(theme: Theme): ResolvedTheme {
  return theme === "system" ? resolveSystemThemeSafe() : theme;
}

function applyTheme(theme: ResolvedTheme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  if (current === theme) return;

  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  root.classList.add("theme-transition");
  window.setTimeout(() => root.classList.remove("theme-transition"), 500);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const storedTheme = readStoredThemeSafe();
    const initialResolved = resolveThemeValue(storedTheme);

    setTheme(storedTheme);
    setResolvedTheme(initialResolved);
    applyTheme(initialResolved);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const syncSystemTheme = () => {
        const nextResolved = resolveThemeValue("system");
        setResolvedTheme(nextResolved);
        applyTheme(nextResolved);
      };

      syncSystemTheme();
      media.addEventListener?.("change", syncSystemTheme);
      return () => media.removeEventListener?.("change", syncSystemTheme);
    }

    setResolvedTheme(resolveThemeValue(theme));
    applyTheme(resolveThemeValue(theme));
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage failures
    }
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme) => {
        setTheme(nextTheme);
      },
      toggleTheme: () => {
        const next = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(next);
      },
    }),
    [theme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

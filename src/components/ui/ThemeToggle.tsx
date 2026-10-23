"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeMode = "system" | "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("techmode-theme") as ThemeMode | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setTheme(stored);
    }
  }, []);

  const applyTheme = (newMode: ThemeMode) => {
    setTheme(newMode);
    localStorage.setItem("techmode-theme", newMode);

    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (newMode === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else if (newMode === "light") {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    } else {
      // System mode
      if (systemDark) {
        root.classList.add("dark");
        root.setAttribute("data-theme", "dark");
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-theme", "light");
      }
    }
  };

  const cycleTheme = () => {
    if (theme === "system") applyTheme("dark");
    else if (theme === "dark") applyTheme("light");
    else applyTheme("system");
  };

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"
        aria-hidden="true"
      />
    );
  }

  const label =
    theme === "dark"
      ? "Current theme: Dark. Click to switch to Light mode"
      : theme === "light"
        ? "Current theme: Light. Click to switch to System preference"
        : "Current theme: System preference. Click to switch to Dark mode";

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] cursor-pointer"
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4 text-[var(--accent-text)]" aria-hidden="true" />
      ) : theme === "light" ? (
        <Sun className="w-4 h-4 text-amber-500" aria-hidden="true" />
      ) : (
        <Monitor className="w-4 h-4 text-[var(--text-muted)]" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

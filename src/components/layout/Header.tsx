"use client";

import { useState, useEffect, useRef } from "react";
import { siteContent } from "@/content/copy";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, User } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileDrawerRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu on Escape key press and restore focus to trigger button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Trap focus inside mobile drawer when opened
  useEffect(() => {
    if (!mobileMenuOpen || !mobileDrawerRef.current) return;

    const drawer = mobileDrawerRef.current;
    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    drawer.addEventListener("keydown", handleFocusTrap);
    return () => {
      drawer.removeEventListener("keydown", handleFocusTrap);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <>
      {/* WCAG 2.1 AA: Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#00E5FF] focus:text-[#080E17] focus:rounded focus:shadow-lg focus:font-mono focus:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00E5FF]"
      >
        Skip to main content
      </a>

      <header
        className="sticky top-0 z-40 w-full border-b border-[#232C3B] bg-[#080E17]/90 backdrop-blur-md transition-colors"
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Wordmark with Cyan Terminal Accent (TECHMODE ▍) */}
          <div className="flex items-center gap-3">
            <a
              href="#main-content"
              className="group inline-flex items-center text-lg sm:text-xl font-bold tracking-wider font-mono text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1.5 py-0.5"
              aria-label="TECHMODE - Systems Architecture & Practical Technology"
            >
              <span>{siteContent.brand.name}</span>
              <span
                className="text-[#00E5FF] ml-1.5 animate-pulse inline-block select-none"
                aria-hidden="true"
              >
                ▍
              </span>
            </a>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-[#161C25] border border-[#232C3B] text-[#94A3B8]">
              SPEC.V1
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary Navigation"
          >
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs font-mono tracking-wider uppercase text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#161C25] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls: Theme Toggle + High-Contrast ENGAGE Action + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Right Action: High-contrast compact button "ENGAGE" with cyan background (#00E5FF, black text, font-bold) and user profile icon */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded bg-[#00E5FF] text-[#080E17] hover:bg-[#33EBFF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00E5FF]"
            >
              <User className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              <span>ENGAGE</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              ref={menuButtonRef}
              type="button"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[#232C3B] bg-[#0E141D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#00E5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#00E5FF]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileDrawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#080E17]/98 backdrop-blur-xl"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-[#232C3B]">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-wider font-mono text-[#F8FAFC]">
                {siteContent.brand.name}
              </span>
              <span className="text-[#00E5FF]" aria-hidden="true">▍</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              className="inline-flex items-center justify-center w-9 h-9 rounded border border-[#232C3B] bg-[#0E141D] text-[#94A3B8] hover:text-[#00E5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col gap-2"
            aria-label="Mobile Navigation"
          >
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-sm font-mono tracking-wider uppercase rounded bg-[#0E141D] text-[#CBD5E1] hover:text-[#00E5FF] hover:bg-[#161C25] border border-[#232C3B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-6 mt-4 border-t border-[#232C3B]">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-mono font-bold uppercase tracking-wider rounded bg-[#00E5FF] text-[#080E17] hover:bg-[#33EBFF] transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00E5FF]"
              >
                <User className="w-4 h-4" aria-hidden="true" />
                <span>ENGAGE ENGINEERING TEAM</span>
              </a>
            </div>

            <div className="mt-8 p-4 rounded bg-[#0E141D] border border-[#232C3B] text-xs font-mono text-[#94A3B8] leading-relaxed">
              <p className="font-semibold text-[#00E5FF] mb-1">
                SYSTEM SPECIFICATION
              </p>
              <p>{siteContent.brand.shortDescription}</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

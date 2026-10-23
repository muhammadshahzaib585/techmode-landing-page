import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Approach } from "@/components/sections/Approach";
import { Focus } from "@/components/sections/Focus";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors selection:bg-[var(--accent-subtle)] selection:text-[var(--accent-text)]">
      {/* Sticky Accessible Header */}
      <Header />

      {/* Semantic Main Landmark with Skip-to-content anchor */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Hero / Purpose */}
        <Hero />

        {/* 2. Problems We Focus On */}
        <Problems />

        {/* 3. Our Approach (4-step stepper) */}
        <Approach />

        {/* 4. Practical Technology Focus (Pragmatism over hype) */}
        <Focus />

        {/* 5. Our Vision (Visually distinct band) */}
        <Vision />

        {/* 6. Final CTA Section with Contact Form */}
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}

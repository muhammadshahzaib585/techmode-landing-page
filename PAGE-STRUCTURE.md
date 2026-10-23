# TECHMODE Landing Page — Page Structure & Sitemap Specification

**Document Version:** 1.0 (Wednesday Review Baseline)  
**Project:** TECHMODE Landing Page Prototype  
**Framework:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Target URL:** `http://localhost:3000` (Local preview) / Pre-rendered static export  

---

## 🗺️ High-Level Sitemap & Section Flow

The landing page follows a single-page architectural flow designed for technical leadership (CTOs, VPs of Engineering, and Technical Directors). The page transitions logically from organizational purpose to practical problem categories, operational methodology, architectural principles, vision, and technical engagement.

```
[Top Header & Navigation Chrome] (Sticky, Accessible, Theme-Aware)
  │
  ├── 1. [Hero Section] (Purpose, 2-Column Split, Telemetry Grid, Spec Terminal)
  │
  ├── 2. [Problems We Focus On] (4 Operational Friction Categories)
  │
  ├── 3. [Our Approach] (4-Stage Stepper: Understand → Design → Build → Improve)
  │
  ├── 4. [Practical Technology Focus] (Pragmatism vs. Industry Hype)
  │
  ├── 5. [Our Vision] (Visually Distinct Horizon Band)
  │
  ├── 6. [Technical Conversion & Contact Form] (System Review Card + Accessible Form)
  │
[Semantic Footer & Persistent Mobile Dock] (Landmarks, Disclaimers, Mobile Tabs)
```

---

## 🏗️ Detailed Section-by-Section Hierarchy

### 0. Accessibility Skip Target & Header Chrome
- **Skip-to-Content Link**: `#main-content` (WCAG 2.1 AA keyboard navigation bypass).
- **Component File**: `src/components/layout/Header.tsx` (Client Component)
- **Landmark**: `<header role="banner">`
- **Elements**:
  - **Brand Wordmark**: `TECHMODE` + Electric Cyan terminal block accent (`▍`).
  - **Tag**: `SPEC.V1` (Desktop tag badge).
  - **Desktop Navigation Links** (`<nav aria-label="Primary Navigation">`):
    - `#problems` → Problems We Focus On
    - `#approach` → Our Approach
    - `#focus` → Practical Focus
    - `#vision` → Our Vision
    - `#contact` → Start a Conversation
  - **Theme Toggle**: `src/components/ui/ThemeToggle.tsx` (Dark / Light / System mode switcher).
  - **Primary Action**: `[ ENGAGE ]` button (`#00E5FF` high-contrast background with user icon).
  - **Mobile Drawer**: Accessible hamburger menu with `aria-expanded`, `aria-controls`, focus trap, and <kbd>Escape</kbd> key dismiss.

---

### 1. Hero / Purpose Section
- **Component File**: `src/components/sections/Hero.tsx` (Server Component)
- **Landmark**: `<section aria-labelledby="hero-heading">`
- **Background**: Ambient 5% opacity coordinate grid (`.blueprint-grid`).
- **Hierarchy & Layout** (Desktop 1440px 2-Column Split):
  - **Left Column (col-span-7)**:
    - **Eyebrow Pill**: `● PRACTICAL ENGINEERING • SUSTAINABLE ARCHITECTURE` (Mint pulsing status indicator).
    - **Single `<h1>` Tag**:  
      `Practical technology solutions engineered for ` + `<span className="text-[#00E5FF]">real-world impact.</span>`
    - **Supporting Purpose Narrative**: Contextualizes TECHMODE's role in delivering right-sized, dependable systems.
    - **Action Group**:
      - Primary CTA: `[ Book Technical Consultation ]` (`#00E5FF` solid fill, links to `#contact`).
      - Secondary CTA: `[ Explore Architecture ]` (`#161C25` dark outline, links to `#approach`).
    - **Engineering Telemetry Grid** (3 Metric Cards):
      - `99.98%` (Cyan) — `SLA GRADE // Reliability Target`
      - `<4w` (White) — `DEPLOYMENT // Time to Value`
      - `0x` (Cyan) — `TECH OVERHEAD // Speculative Bloat`
  - **Right Column (col-span-5)**:
    - **Blueprint Architecture Spec Window (`architecture-spec.v1`)**:
      - Top bar: Three macOS dots (red `#EF4444`, yellow `#F59E0B`, green `#10B981`) + `{ } architecture-spec.v1`
      - Pipeline Step 01: Compass icon | `01. Discovery & Diagnosis` (*Filter noise • Identify root operational bottleneck*)
      - Connector: `↓ RIGHT-SIZED DESIGN`
      - Pipeline Step 02: Microchip icon | `02. Practical Implementation` (*Clean architecture • Zero speculative complexity*)
      - Connector: `↓ SUSTAINABLE DELIVERY`
      - Pipeline Step 03: Shield icon | `03. Maintainable Ecosystem` (*Resilient delivery • Long-term architectural governance*)
      - Terminal Footer: `● SPEC PIPELINE ACTIVE` (Emerald green dot) + `ENV // CLOUD_HYBRID`

---

### 2. Problems We Focus On
- **Component File**: `src/components/sections/Problems.tsx` (Server Component)
- **Landmark**: `<section id="problems" aria-labelledby="problems-heading">`
- **Heading**: `<h2>Problems We Focus On</h2>` (`id="problems-heading"`)
- **Eyebrow**: `CATEGORY SCOPE // FAULT DOMAINS`
- **Subheading**: Explains practical intervention areas.
- **Card Grid (2x2 on tablet/desktop)**:
  1. `<h3>Fragmented & Disconnected Tools</h3>` — Indicator: `System Fragmentation`
  2. `<h3>Manual & Repetitive Workflows</h3>` — Indicator: `Operational Overhead`
  3. `<h3>High Adoption Friction</h3>` — Indicator: `User Resistance`
  4. `<h3>Fragile & High-Maintenance Architecture</h3>` — Indicator: `Technical Debt`
- **Footer Tag**: Proposed Category Model disclaimer.

---

### 3. Our Approach to Problem-Solving
- **Component File**: `src/components/sections/Approach.tsx` (Server Component)
- **Landmark**: `<section id="approach" aria-labelledby="approach-heading">`
- **Heading**: `<h2>Our Approach</h2>` (`id="approach-heading"`)
- **Eyebrow**: `EXECUTION PIPELINE // 4-STAGE METHODOLOGY`
- **4-Phase Stepper Layout** (Horizontal on desktop, vertical on mobile):
  - **Phase 01**: `<h3>Understand</h3>` — Tagline: *Diagnose root problems before prescribing technology*
    - Core Deliverables: Workflow mapping, constraint analysis, stakeholder feedback.
  - **Phase 02**: `<h3>Design</h3>` — Tagline: *Architect simple, right-sized solutions*
    - Core Deliverables: Modular architecture, simplified data models, adoption-focused interaction.
  - **Phase 03**: `<h3>Build</h3>` — Tagline: *Engineer reliable, maintainable software*
    - Core Deliverables: Type-safe clean code, automated verification, thorough documentation.
  - **Phase 04**: `<h3>Improve</h3>` — Tagline: *Refine based on actual usage and feedback*
    - Core Deliverables: Usability reviews, performance tuning, internal knowledge transfer.
- **Summary Bar**: Architectural governance assurance + direct audit trigger link.

---

### 4. Practical Technology Focus (Pragmatism Over Hype)
- **Component File**: `src/components/sections/Focus.tsx` (Server Component)
- **Landmark**: `<section id="focus" aria-labelledby="focus-heading">`
- **Heading**: `<h2>Pragmatism Over Hype</h2>` (`id="focus-heading"`)
- **Eyebrow**: `PHILOSOPHY // PRAGMATISM OVER HYPE`
- **3 Comparative Principle Cards**:
  1. `<h3>Right-Sized Architecture</h3>`  
     *Practical Standard*: Appropriate simplicity tailored to actual scale.  
     *Common Industry Trap*: Premature microservices and distributed complexity.
  2. `<h3>Maintainability First</h3>`  
     *Practical Standard*: Clear code that existing teams can own and modify.  
     *Common Industry Trap*: Bleeding-edge frameworks with fleeting ecosystem lifespans.
  3. `<h3>Measurable Utility</h3>`  
     *Practical Standard*: Direct improvements to everyday operational velocity.  
     *Common Industry Trap*: Technology adoptions driven solely by industry trends.

---

### 5. Our Broader Vision
- **Component File**: `src/components/sections/Vision.tsx` (Server Component)
- **Landmark**: `<section id="vision" aria-labelledby="vision-heading">`
- **Heading**: `<h2>Our Vision</h2>` (`id="vision-heading"`)
- **Eyebrow**: `ORGANIZATIONAL HORIZON`
- **Design Spec**: Visually distinct band featuring `#060B12` deep background, cyan ambient glow, and high-elevation card.
- **Focal Quote**:  
  *“A technology landscape where software serves organizations quietly and reliably—reducing friction, amplifying human capability, and standing the test of time.”*
- **Narrative**: Elaborates on liberating teams from fragile tooling.
- **Telemetry Indicators**: Resilient Architectures // High Team Adoption // Measurable Outcomes.

---

### 6. Technical Conversion & Contact Section
- **Component File**: `src/components/sections/Contact.tsx` (Client Component)
- **Landmark**: `<section id="contact" aria-labelledby="contact-heading">`
- **Sub-Component A — Bottom Conversion Card**:
  - Tags: `● SYSTEM AUDIT AVAILABLE` (Cyan mono text) and `SLOT_ALLOC: 04/10` (Mint badge).
  - Headline: *"Unblock your engineering cadence."*
  - Body: *"Get a non-opinionated architectural teardown highlighting hidden friction, infrastructure leakage, and concrete resolution paths."*
  - Interactive Action: `[ REQUEST SYSTEM REVIEW ]` button that focuses the form and pre-fills the message field with a review request.
- **Sub-Component B — Contact Form**:
  - Heading: `<h2>Start a Conversation</h2>` (`id="contact-heading"`)
  - Eyebrow: `DIRECT TECHNICAL ENGAGEMENT`
  - Prototype Disclaimer Notice: Explains client-side validation and simulated local submission.
  - Fields:
    - Name: `<label htmlFor="...">` + `<input name="name" type="text" />` (min 2 chars)
    - Email: `<label htmlFor="...">` + `<input name="email" type="email" />` (valid pattern)
    - Message: `<label htmlFor="...">` + `<textarea name="message" rows="4" />` (min 10 chars)
  - Accessibility Bindings: Dynamic `aria-invalid`, `aria-describedby` error links (`role="alert"`), `aria-live="polite"` status region.
  - Submit Button: `[ DISPATCH INQUIRY ]` with loading spinner during submission.
  - Success Feedback Card: Confirmation card with `[ Send another message ]` reset control.

---

### 7. Footer Chrome & Persistent Mobile Dock
- **Component File**: `src/components/layout/Footer.tsx` (Server Component)
- **Landmark**: `<footer role="contentinfo">`
- **Elements**:
  - Brand Wordmark: `TECHMODE ▍`
  - Purpose summary & Ethos tag: `ETHOS: PRAGMATISM OVER HYPE // HIGH RELIABILITY`
  - Navigation links matching header
  - Assessment review disclosure note
  - Dynamic copyright notice: `© {currentYear} TECHMODE. All rights reserved.`
  - Back-to-top anchor (`#main-content`)
- **Persistent Mobile Navigation Dock** (`<nav aria-label="Mobile Dock Navigation">`):
  - Fixed at bottom of mobile viewports (`md:hidden`).
  - 4 quick navigation items:
    1. **Overview** (Active, cyan icon) → `#main-content`
    2. **Solutions** → `#problems`
    3. **Cases** → `#approach`
    4. **Contact** → `#contact`

---

*This document reflects the exact codebase currently compiled and running at `http://localhost:3000`.*

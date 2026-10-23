/**
 * CENTRALIZED COPY DICTIONARY FOR TECHMODE LANDING PAGE
 *
 * STRICT CONTENT RULES COMPLIANCE:
 * - Only approved facts: TECHMODE's purpose, problem-solving approach, and focus on practical tech.
 * - No fake testimonials, fake client logos, fake case studies, fake statistics, awards, or team members.
 * - All wording and design decisions are PROPOSED and marked with `// PROPOSED COPY`.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ProblemItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly indicator: string;
}

export interface ApproachStep {
  readonly stepNumber: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly keyActivities: readonly string[];
}

export interface FocusPrinciple {
  readonly title: string;
  readonly practicalPerspective: string;
  readonly contrastPerspective: string;
  readonly description: string;
}

export const siteContent = {
  // PROPOSED BRAND IDENTITY
  brand: {
    // PROPOSED COPY: Simple text wordmark placeholder
    name: "TECHMODE",
    // PROPOSED COPY: Concise tagline expressing core organizational purpose
    tagline: "Practical Technology Solutions",
    // PROPOSED COPY: Short description used in metadata and footer
    shortDescription:
      "A technology consultancy focused on practical, dependable software solutions that solve genuine organizational challenges without unnecessary complexity.",
  },

  // PROPOSED NAVIGATION
  navigation: [
    // PROPOSED COPY: Nav items mapped to on-page semantic section IDs
    { label: "Problems We Focus On", href: "#problems" },
    { label: "Our Approach", href: "#approach" },
    { label: "Practical Focus", href: "#focus" },
    { label: "Our Vision", href: "#vision" },
    { label: "Start a Conversation", href: "#contact" },
  ] as const satisfies readonly NavItem[],

  // PROPOSED HERO SECTION
  hero: {
    // PROPOSED COPY: Purpose badge highlighting pragmatic ethos
    badge: "Practical Engineering • Sustainable Architecture",
    // PROPOSED COPY: Single <h1> headline articulating core purpose
    headline: "Practical technology solutions engineered for real-world impact.",
    // PROPOSED COPY: Supporting text expanding on purpose without making unverified claims
    supportingText:
      "Modern organizations often struggle with over-engineered systems, fragmented tools, and unnecessary technical complexity. TECHMODE designs and delivers dependable, right-sized technology solutions grounded in genuine business needs.",
    // PROPOSED COPY: Primary action directing users to conversation/contact form
    primaryCta: {
      label: "Start a conversation",
      href: "#contact",
    },
    // PROPOSED COPY: Secondary action directing users to the methodology section
    secondaryCta: {
      label: "See our approach",
      href: "#approach",
    },
    // PROPOSED COPY: Minimalist proof points reflecting core principles rather than fake numbers
    coreTenets: [
      { label: "Pragmatism", detail: "Right tool for the actual job" },
      { label: "Clarity", detail: "Systems teams understand and adopt" },
      { label: "Reliability", detail: "Engineered for long-term stability" },
    ],
  },

  // PROPOSED PROBLEMS SECTION
  problems: {
    // PROPOSED COPY: Section heading
    heading: "Problems We Focus On",
    // PROPOSED COPY: Section subheading contextualizing the categories of challenges
    subheading:
      "We address common, high-friction operational challenges where practical technology delivers immediate, tangible improvement.",
    // PROPOSED COPY: 4 generalized problem categories (no fake client case studies or metrics)
    items: [
      {
        id: "fragmented-tools",
        title: "Fragmented & Disconnected Tools",
        subtitle: "Siloed data and disconnected workflows",
        description:
          "Teams frequently juggle multiple disjointed applications, resulting in duplicate data entry, inconsistent records, and operational friction between departments.",
        indicator: "System Fragmentation",
      },
      {
        id: "manual-processes",
        title: "Manual & Repetitive Workflows",
        subtitle: "Administrative drag on high-value human effort",
        description:
          "Critical operations often rely on error-prone spreadsheets, manual handoffs, and fragile routines that consume valuable time and introduce avoidable risks.",
        indicator: "Operational Overhead",
      },
      {
        id: "adoption-barriers",
        title: "High Adoption Friction",
        subtitle: "Solutions that teams struggle to integrate into daily work",
        description:
          "Software that is too cumbersome or misaligned with actual day-to-day work ends up abandoned, leaving organizations with costly shelfware and frustrated teams.",
        indicator: "User Resistance",
      },
      {
        id: "fragile-architecture",
        title: "Fragile & High-Maintenance Architecture",
        subtitle: "Technical debt accumulated from trend-driven decisions",
        description:
          "Systems constructed using fashionable but poorly matched technologies create long-term maintenance burdens, fragile deployments, and escalating operational costs.",
        indicator: "Technical Debt",
      },
    ] as const satisfies readonly ProblemItem[],
  },

  // PROPOSED APPROACH SECTION
  approach: {
    // PROPOSED COPY: Section heading
    heading: "Our Approach",
    // PROPOSED COPY: Section subheading
    subheading:
      "A disciplined, four-step process centered on diagnosing real needs before engineering lasting solutions.",
    // PROPOSED COPY: 4 structured methodology steps (Understand → Design → Build → Improve)
    steps: [
      {
        stepNumber: "01",
        title: "Understand",
        tagline: "Diagnose root problems before prescribing technology",
        description:
          "We examine your day-to-day operational realities, current tooling bottlenecks, and organizational constraints to ensure every technological decision is rooted in genuine need.",
        keyActivities: [
          "Workflow and bottleneck mapping",
          "Technical constraint analysis",
          "Direct stakeholder feedback",
        ],
      },
      {
        stepNumber: "02",
        title: "Design",
        tagline: "Architect simple, right-sized solutions",
        description:
          "We specify clear, modular system designs that favor proven standards and team adoptability over resume-driven architectural complexity.",
        keyActivities: [
          "Clear component architecture",
          "Data model simplification",
          "Adoption-focused interaction design",
        ],
      },
      {
        stepNumber: "03",
        title: "Build",
        tagline: "Engineer reliable, maintainable software",
        description:
          "We build clean, robust implementations with strong testing practices, thorough documentation, and resilient foundations designed for longevity.",
        keyActivities: [
          "Type-safe, clean implementation",
          "Automated verification testing",
          "Comprehensive documentation",
        ],
      },
      {
        stepNumber: "04",
        title: "Improve",
        tagline: "Refine based on actual usage and feedback",
        description:
          "True utility emerges through regular use. We monitor real-world performance, eliminate newly revealed friction points, and iteratively optimize system health.",
        keyActivities: [
          "Real-world usability review",
          "Performance and stability tuning",
          "Knowledge transfer to internal teams",
        ],
      },
    ] as const satisfies readonly ApproachStep[],
  },

  // PROPOSED PRACTICAL TECHNOLOGY FOCUS SECTION
  focus: {
    // PROPOSED COPY: Section heading
    heading: "Pragmatism Over Hype",
    // PROPOSED COPY: Section subheading
    subheading:
      "In an industry frequently distracted by novelty, we maintain an uncompromising commitment to practical utility, clarity, and dependable engineering.",
    // PROPOSED COPY: Three core tenets comparing hype-driven traps with practical technology
    principles: [
      {
        title: "Right-Sized Architecture",
        practicalPerspective: "Appropriate simplicity tailored to actual scale",
        contrastPerspective: "Premature microservices and distributed complexity",
        description:
          "We deploy the simplest architecture capable of cleanly solving your problem. Less incidental complexity means fewer failure modes, lower hosting costs, and faster onboarding.",
      },
      {
        title: "Maintainability First",
        practicalPerspective: "Clear code that existing teams can own and modify",
        contrastPerspective: "Bleeding-edge frameworks with fleeting ecosystem lifespans",
        description:
          "Technology should never outlive the ability of your team to support it. We emphasize proven runtimes, readable patterns, and clear documentation that stands the test of time.",
      },
      {
        title: "Measurable Utility",
        practicalPerspective: "Direct improvements to everyday operational velocity",
        contrastPerspective: "Technology adoptions driven solely by industry trends",
        description:
          "Every tool and feature must justify its existence through real workflow improvement—whether reducing manual errors, speeding up handoffs, or clarifying data.",
      },
    ] as const satisfies readonly FocusPrinciple[],
  },

  // PROPOSED VISION SECTION
  vision: {
    // PROPOSED COPY: Section heading
    heading: "Our Vision",
    // PROPOSED COPY: Distinct vision statement
    statement:
      "A technology landscape where software serves organizations quietly and reliably—reducing friction, amplifying human capability, and standing the test of time.",
    // PROPOSED COPY: Elaborative narrative
    narrative:
      "We envision a world where organizations are never held hostage by their own technical systems. When software is purpose-built, rigorously simplified, and genuinely practical, teams spend less time troubleshooting tools and more time advancing their core missions.",
  },

  // PROPOSED CONTACT SECTION
  contact: {
    // PROPOSED COPY: Section heading
    heading: "Start a Conversation",
    // PROPOSED COPY: Section subheading
    subheading:
      "Whether evaluating a new initiative or addressing an existing technical bottleneck, we welcome thoughtful dialogue about your organization's needs.",
    // PROPOSED COPY: Prototype disclosure statement
    prototypeNotice:
      "Note: This is a frontend prototype. Form submissions are validated client-side and simulated locally; no backend service is currently attached.",
    // PROPOSED COPY: Form labels, placeholders, and error messages
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "e.g., Alex Morgan",
      emailLabel: "Work Email",
      emailPlaceholder: "alex@example.com",
      messageLabel: "How can practical technology help your team?",
      messagePlaceholder:
        "Tell us about your current operational challenges, tool fragmentation, or project goals...",
      submitButton: "Send message",
      submittingButton: "Validating & sending...",
      successTitle: "Message received",
      successMessage:
        "Thank you for reaching out. In an active production environment, your inquiry would be securely routed to our engineering leads for review within one business day.",
      resetButton: "Send another message",
      errors: {
        nameRequired: "Please enter your name.",
        nameTooShort: "Name must be at least 2 characters.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address (e.g., name@company.com).",
        messageRequired: "Please enter a brief message describing your challenge.",
        messageTooShort: "Please provide at least 10 characters so we can understand your context.",
      },
    },
  },

  // PROPOSED FOOTER
  footer: {
    // PROPOSED COPY: Copyright statement with dynamic year fallback
    copyrightNotice: "All rights reserved. Prototype for assessment review.",
    // PROPOSED COPY: Review notice
    reviewNotice:
      "All copy, typography, color tokens, and structure on this page are proposed prototype elements designed to demonstrate frontend implementation quality.",
    // PROPOSED COPY: Quick links label
    quickLinksLabel: "Navigation",
  },
} as const;

export type SiteContent = typeof siteContent;

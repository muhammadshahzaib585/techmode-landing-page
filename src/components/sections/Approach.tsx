import { siteContent } from "@/content/copy";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Approach() {
  const { approach } = siteContent;

  return (
    <section
      id="approach"
      className="py-16 md:py-24 border-b border-[#232C3B] bg-[#080E17] scroll-mt-16 blueprint-grid"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] px-2.5 py-1 rounded bg-[#0E141D] border border-[#232C3B] inline-block">
            EXECUTION PIPELINE // 4-STAGE METHODOLOGY
          </span>
          <h2
            id="approach-heading"
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#F8FAFC]"
          >
            {approach.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {approach.subheading}
          </p>
        </div>

        {/* 4-Step Stepper / Timeline Layout */}
        <div className="mt-14 relative">
          {/* Desktop connecting guide line */}
          <div
            className="hidden lg:block absolute top-8 left-12 right-12 h-[1px] bg-[#232C3B]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {approach.steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="relative flex flex-col bg-[#0E141D] rounded-xl border border-[#232C3B] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#00E5FF]/50 transition-all group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#161C25] border border-[#232C3B] text-[#00E5FF] font-mono font-bold text-base group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all">
                    {step.stepNumber}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                    PHASE // 0{idx + 1}
                  </span>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-[#00E5FF] mt-1.5 min-h-[32px]">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Key Activities Checklist */}
                <div className="mt-6 pt-5 border-t border-[#232C3B]">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#94A3B8] block mb-3">
                    CORE DELIVERABLES
                  </span>
                  <ul className="space-y-2.5 text-xs text-[#CBD5E1]" role="list">
                    {step.keyActivities.map((act, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stepper summary bar */}
        <div className="mt-12 p-5 rounded-xl border border-[#232C3B] bg-[#0E141D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
            <span className="text-sm font-mono text-[#CBD5E1]">
              Rigorous architectural review ensures solutions integrate seamlessly with existing operational stacks.
            </span>
          </div>
          <a
            href="#contact"
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF] hover:underline inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1.5 py-1 bg-[#161C25] border border-[#232C3B]"
          >
            <span>Initiate Phase 01 Audit</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { siteContent } from "@/content/copy";
import { Sparkles, Terminal } from "lucide-react";

export function Vision() {
  const { vision } = siteContent;

  return (
    <section
      id="vision"
      className="py-20 md:py-28 relative overflow-hidden bg-[#060B12] border-b border-[#232C3B] scroll-mt-16 blueprint-grid"
      aria-labelledby="vision-heading"
    >
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute -bottom-24 right-10 w-96 h-96 bg-[#00E5FF]/[0.06] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-2xl border border-[#00E5FF]/30 bg-[#0E141D] p-8 sm:p-12 lg:p-16 shadow-[0_16px_48px_rgba(0,0,0,0.7)] text-center relative overflow-hidden">
          {/* Top terminal corner tag */}
          <div className="absolute top-4 left-6 flex items-center gap-2 text-[10px] font-mono text-[#64748B]">
            <Terminal className="w-3 h-3 text-[#00E5FF]" aria-hidden="true" />
            <span>HORIZON_SPEC // V1.0</span>
          </div>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-[#161C25] border border-[#232C3B] text-[#00E5FF] mb-6 mt-4 sm:mt-0">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>ORGANIZATIONAL HORIZON</span>
          </div>

          {/* Section Heading <h2> */}
          <h2
            id="vision-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#F8FAFC]"
          >
            {vision.heading}
          </h2>

          {/* Focal Vision Quote */}
          <blockquote className="mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#F8FAFC] leading-[1.3] max-w-4xl mx-auto italic relative">
            &ldquo;{vision.statement}&rdquo;
          </blockquote>

          {/* Elaborative Narrative */}
          <p className="mt-8 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl mx-auto font-normal">
            {vision.narrative}
          </p>

          <div className="mt-10 pt-8 border-t border-[#232C3B] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#94A3B8]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" aria-hidden="true" />
              <span>RESILIENT ARCHITECTURES</span>
            </span>
            <span className="text-[#232C3B]" aria-hidden="true">//</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
              <span>HIGH TEAM ADOPTION</span>
            </span>
            <span className="text-[#232C3B]" aria-hidden="true">//</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" aria-hidden="true" />
              <span>MEASURABLE OUTCOMES</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteContent } from "@/content/copy";
import {
  Calendar,
  Layers,
  Compass,
  Cpu,
  ShieldCheck,
  Activity,
  ArrowRight,
  Terminal,
} from "lucide-react";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 border-b border-[#232C3B] blueprint-grid"
      aria-labelledby="hero-heading"
    >
      {/* Subtle ambient cyan glow (aria-hidden) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-[#00E5FF]/[0.05] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 2-Column Desktop Split: Hero text on left (col-span-7), Architecture-spec terminal on right (col-span-5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge: Glowing mint/cyan dot + uppercase mono */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#0E141D] border border-[#232C3B] text-[#00E5FF] mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>● PRACTICAL ENGINEERING • SUSTAINABLE ARCHITECTURE</span>
            </div>

            {/* Single <h1> headline with Electric Cyan highlight */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#F8FAFC] leading-[1.12]"
            >
              Practical technology solutions engineered for{" "}
              <span className="text-[#00E5FF] drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]">
                real-world impact.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              {hero.supportingText}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary Button: Cyan #00E5FF solid fill, black bold text with calendar/terminal icon */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded bg-[#00E5FF] text-[#080E17] hover:bg-[#33EBFF] hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00E5FF]"
              >
                <Calendar className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>Book Technical Consultation</span>
              </a>

              {/* Secondary Button: Dark outline #161C25, white text, border #232C3B */}
              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded border border-[#232C3B] bg-[#161C25] text-[#F8FAFC] hover:bg-[#1F2633] hover:border-[#00E5FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                <Layers className="w-4 h-4 text-[#94A3B8]" aria-hidden="true" />
                <span>Explore Architecture</span>
              </a>
            </div>

            {/* Engineering Telemetry Grid (3 Metric Cards) */}
            <div className="mt-12 pt-8 border-t border-[#232C3B] w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Metric 1 */}
              <div className="p-4 rounded bg-[#0E141D] border border-[#232C3B] flex flex-col">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#00E5FF] tracking-tight">
                  99.98%
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mt-1">
                  SLA GRADE <span className="text-[#64748B]">//</span> Reliability Target
                </span>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded bg-[#0E141D] border border-[#232C3B] flex flex-col">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#F8FAFC] tracking-tight">
                  &lt;4w
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mt-1">
                  DEPLOYMENT <span className="text-[#64748B]">//</span> Time to Value
                </span>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded bg-[#0E141D] border border-[#232C3B] flex flex-col">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#00E5FF] tracking-tight">
                  0x
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mt-1">
                  TECH OVERHEAD <span className="text-[#64748B]">//</span> Speculative Bloat
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Blueprint Architecture Spec Window (architecture-spec.v1) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-[#232C3B] bg-[#0E141D] p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.6)] relative overflow-hidden">
              {/* Subtle dense blueprint grid in terminal */}
              <div className="pointer-events-none absolute inset-0 opacity-40 blueprint-grid-dense" aria-hidden="true" />

              {/* Terminal Window Header with macOS Dots & Tag */}
              <div className="flex items-center justify-between border-b border-[#232C3B] pb-3 mb-5 relative">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-[#94A3B8]">
                  <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" aria-hidden="true" />
                  <span>{"{ }"} architecture-spec.v1</span>
                </div>
              </div>

              {/* 3 Pipeline Stages */}
              <div className="space-y-3 font-mono text-xs relative">
                {/* Step 01 */}
                <div className="p-4 rounded bg-[#161C25] border border-[#232C3B] flex items-start gap-3.5 hover:border-[#00E5FF]/40 transition-colors">
                  <div className="w-8 h-8 rounded bg-[#0E141D] border border-[#232C3B] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#F8FAFC]">
                      01. Discovery &amp; Diagnosis
                    </div>
                    <div className="text-[11px] text-[#94A3B8] mt-1 leading-relaxed">
                      Filter noise • Identify root operational bottleneck
                    </div>
                  </div>
                </div>

                {/* Connector 1 */}
                <div className="flex items-center justify-center py-0.5 text-[10px] font-mono tracking-widest text-[#00E5FF]/80">
                  <span>↓ RIGHT-SIZED DESIGN</span>
                </div>

                {/* Step 02 */}
                <div className="p-4 rounded bg-[#161C25] border border-[#00E5FF]/30 bg-[#00E5FF]/[0.03] flex items-start gap-3.5 hover:border-[#00E5FF]/60 transition-colors">
                  <div className="w-8 h-8 rounded bg-[#0E141D] border border-[#00E5FF]/40 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#F8FAFC]">
                      02. Practical Implementation
                    </div>
                    <div className="text-[11px] text-[#94A3B8] mt-1 leading-relaxed">
                      Clean architecture • Zero speculative complexity
                    </div>
                  </div>
                </div>

                {/* Connector 2 */}
                <div className="flex items-center justify-center py-0.5 text-[10px] font-mono tracking-widest text-[#00E5FF]/80">
                  <span>↓ SUSTAINABLE DELIVERY</span>
                </div>

                {/* Step 03 */}
                <div className="p-4 rounded bg-[#161C25] border border-[#232C3B] flex items-start gap-3.5 hover:border-[#10B981]/50 transition-colors">
                  <div className="w-8 h-8 rounded bg-[#0E141D] border border-[#232C3B] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#F8FAFC]">
                      03. Maintainable Ecosystem
                    </div>
                    <div className="text-[11px] text-[#94A3B8] mt-1 leading-relaxed">
                      Resilient delivery • Long-term architectural governance
                    </div>
                  </div>
                </div>
              </div>

              {/* Window Footer */}
              <div className="mt-5 pt-4 border-t border-[#232C3B] flex items-center justify-between text-[11px] font-mono text-[#94A3B8] relative">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse inline-block" aria-hidden="true" />
                  <span className="text-[#10B981] font-semibold tracking-wider">● SPEC PIPELINE ACTIVE</span>
                </div>
                <div className="text-[#64748B] tracking-wider">
                  ENV // CLOUD_HYBRID
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

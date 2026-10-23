import { siteContent } from "@/content/copy";
import { Layers, RefreshCw, Users, AlertOctagon } from "lucide-react";

const problemIcons = {
  "fragmented-tools": Layers,
  "manual-processes": RefreshCw,
  "adoption-barriers": Users,
  "fragile-architecture": AlertOctagon,
};

export function Problems() {
  const { problems } = siteContent;

  return (
    <section
      id="problems"
      className="py-16 md:py-24 border-b border-[#232C3B] bg-[#080E17] scroll-mt-16 blueprint-grid"
      aria-labelledby="problems-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] px-2.5 py-1 rounded bg-[#0E141D] border border-[#232C3B] inline-block">
            CATEGORY SCOPE // FAULT DOMAINS
          </span>
          <h2
            id="problems-heading"
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#F8FAFC]"
          >
            {problems.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {problems.subheading}
          </p>
        </div>

        {/* Problem Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.items.map((item) => {
            const IconComponent =
              problemIcons[item.id as keyof typeof problemIcons] || Layers;

            return (
              <div
                key={item.id}
                className="group relative rounded-xl border border-[#232C3B] bg-[#0E141D] p-6 sm:p-8 hover:border-[#00E5FF]/50 hover:bg-[#161C25] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#161C25] border border-[#232C3B] text-[#00E5FF] shrink-0 group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>

                  {/* Operational Indicator Badge */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-[#161C25] text-[#94A3B8] border border-[#232C3B]">
                    {item.indicator}
                  </span>
                </div>

                <div className="mt-6">
                  {/* Logical <h3> heading */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-[#00E5FF] mt-1.5">
                    {item.subtitle}
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* General proposed disclaimer note */}
        <div className="mt-10 p-4 rounded bg-[#0E141D] border border-[#232C3B] text-xs font-mono text-[#94A3B8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            * All problem statements represent common operational categories addressed by practical systems design.
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#00E5FF]">
            PROPOSED CATEGORY MODEL
          </span>
        </div>
      </div>
    </section>
  );
}

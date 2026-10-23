import { siteContent } from "@/content/copy";
import { Check, X, ShieldAlert, Cpu } from "lucide-react";

export function Focus() {
  const { focus } = siteContent;

  return (
    <section
      id="focus"
      className="py-16 md:py-24 border-b border-[#232C3B] bg-[#080E17] scroll-mt-16 blueprint-grid"
      aria-labelledby="focus-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] px-2.5 py-1 rounded bg-[#0E141D] border border-[#232C3B] inline-block">
            PHILOSOPHY // PRAGMATISM OVER HYPE
          </span>
          <h2
            id="focus-heading"
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#F8FAFC]"
          >
            {focus.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {focus.subheading}
          </p>
        </div>

        {/* 3 Principles Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {focus.principles.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl border border-[#232C3B] bg-[#0E141D] p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#00E5FF]/40 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[#232C3B]">
                <Cpu className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Contrast Comparison Grid */}
              <div className="space-y-3 mb-6">
                {/* Practical Perspective */}
                <div className="p-3.5 rounded bg-[#161C25] border border-[#10B981]/40 bg-[#10B981]/[0.03]">
                  <div className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="text-xs text-[#CBD5E1]">
                      <span className="font-mono uppercase tracking-wider block text-[#10B981] text-[10px] mb-1 font-bold">
                        PRACTICAL STANDARD:
                      </span>
                      {item.practicalPerspective}
                    </div>
                  </div>
                </div>

                {/* Hype Trap to Avoid */}
                <div className="p-3.5 rounded bg-[#161C25] border border-[#232C3B]">
                  <div className="flex items-start gap-2.5">
                    <X
                      className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="text-xs text-[#94A3B8]">
                      <span className="font-mono uppercase tracking-wider block text-[#64748B] text-[10px] mb-1 font-semibold">
                        COMMON INDUSTRY TRAP:
                      </span>
                      {item.contrastPerspective}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed mt-auto pt-4 border-t border-[#232C3B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

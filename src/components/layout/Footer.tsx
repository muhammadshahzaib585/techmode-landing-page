import { siteContent } from "@/content/copy";
import { LayoutDashboard, Wrench, GitFork, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="border-t border-[#232C3B] bg-[#080E17] py-12 md:py-16 text-[#94A3B8] pb-24 md:pb-16"
        role="contentinfo"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#232C3B]">
            {/* Brand Wordmark & Mission */}
            <div className="md:col-span-6 lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-wider font-mono text-[#F8FAFC]">
                  {siteContent.brand.name}
                </span>
                <span className="text-[#00E5FF]" aria-hidden="true">▍</span>
              </div>
              <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed max-w-sm">
                {siteContent.brand.shortDescription}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#161C25] border border-[#232C3B] text-xs font-mono text-[#00E5FF]">
                <span>ETHOS: PRAGMATISM OVER HYPE // HIGH RELIABILITY</span>
              </div>
            </div>

            {/* Quick Links Navigation */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row sm:justify-end gap-8 sm:gap-16">
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC] mb-4">
                  {siteContent.footer.quickLinksLabel}
                </h3>
                <ul className="space-y-2.5 text-xs font-mono" role="list">
                  {siteContent.navigation.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-w-xs">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC] mb-4">
                  Assessment Disclosure
                </h3>
                <p className="text-xs font-mono text-[#64748B] leading-relaxed">
                  {siteContent.footer.reviewNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
            <p>
              © {currentYear} {siteContent.brand.name}. {siteContent.footer.copyrightNotice}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#main-content"
                className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          F. PERSISTENT MOBILE DOCK / NAVIGATION TABS (SPEC REQUIRED)
         ========================================================================= */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080E17]/95 border-t border-[#232C3B] backdrop-blur-lg px-2 py-2 safe-area-bottom"
        aria-label="Mobile Dock Navigation"
      >
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          {/* 1. Overview (Active, cyan icon) */}
          <a
            href="#main-content"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded text-[#00E5FF] font-mono text-[10px] tracking-wider transition-colors"
          >
            <LayoutDashboard className="w-4 h-4 mb-1 text-[#00E5FF]" aria-hidden="true" />
            <span>Overview</span>
          </a>

          {/* 2. Solutions */}
          <a
            href="#problems"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded text-[#94A3B8] hover:text-[#00E5FF] font-mono text-[10px] tracking-wider transition-colors"
          >
            <Wrench className="w-4 h-4 mb-1" aria-hidden="true" />
            <span>Solutions</span>
          </a>

          {/* 3. Cases */}
          <a
            href="#approach"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded text-[#94A3B8] hover:text-[#00E5FF] font-mono text-[10px] tracking-wider transition-colors"
          >
            <GitFork className="w-4 h-4 mb-1" aria-hidden="true" />
            <span>Cases</span>
          </a>

          {/* 4. Contact */}
          <a
            href="#contact"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded text-[#94A3B8] hover:text-[#00E5FF] font-mono text-[10px] tracking-wider transition-colors"
          >
            <Mail className="w-4 h-4 mb-1" aria-hidden="true" />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
}

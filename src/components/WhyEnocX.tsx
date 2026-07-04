import { advantages } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BackgroundArcs from "./decorative/BackgroundArcs";

export default function WhyEnocX() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 lg:py-section">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #c4e0e8, transparent 70%)" }}
      />
      <BackgroundArcs variant="dark" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {/* Split layout: Text left, visual right */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Heading */}
          <div>
            <p className="eyebrow text-accent">Why EnocX</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              翻訳ではなく、両国の商習慣を理解した伴走を。
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70 lg:text-xl">
              言語・制度・商習慣のギャップを埋め、意思決定に必要な情報を、日本の現地目線で提供します。
            </p>

            {/* Visual stats decoration */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-latin text-2xl font-bold text-white">500+</p>
                  <p className="text-xs text-white/60">実績企業</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-latin text-2xl font-bold text-white">6</p>
                  <p className="text-xs text-white/60">グローバル拠点</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Decorative visual element */}
          <Reveal delay={150}>
            <div className="relative">
              {/* Floating cards */}
              <div className="relative h-[400px]">
                {/* Card 1 */}
                <div className="absolute left-0 top-0 w-64 rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">多言語対応</p>
                  <p className="mt-2 text-xs text-white/60">日本語・中国語・英語</p>
                </div>

                {/* Card 2 */}
                <div className="absolute right-0 top-20 w-64 rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">リアルタイム対応</p>
                  <p className="mt-2 text-xs text-white/60">両国をまたぐ案件に即応</p>
                </div>

                {/* Card 3 */}
                <div className="absolute bottom-0 left-12 w-64 rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">ワンストップ支援</p>
                  <p className="mt-2 text-xs text-white/60">設立から運営まで一貫対応</p>
                </div>

                {/* Decorative connecting lines */}
                <svg className="absolute inset-0 h-full w-full" style={{ zIndex: -1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0e8fa8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#0e8fa8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="130" y1="60" x2="320" y2="120" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="130" y1="320" x2="200" y2="180" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Advantages grid */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <Reveal
              key={a.no}
              delay={i * 90}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all duration-500 hover:border-accent hover:from-white/10">
                {/* Number badge */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <span className="font-latin text-lg font-bold text-accent">
                    {a.no}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white">
                  {a.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.85] text-white/65">
                  {a.desc}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 h-1 w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-12" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

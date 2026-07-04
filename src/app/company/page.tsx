import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import { company, offices, presenceCities } from "@/lib/content";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "EnocX株式会社の会社概要・沿革・拠点。会計税務事務所を母体に、東京と上海を拠点として日中の越境ビジネスを支援しています。",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="アジアを結ぶ、グローバルビジネスハブ。"
        lead="会計税務事務所を前身とし、東京・福岡・上海・北京・香港・シンガポールの6拠点で越境ビジネスを支援しています。"
        crumbs={[{ label: "Home", href: "/" }, { label: "会社概要" }]}
        image="/media/inside-bg.png"
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Profile" title="企業情報" />
          <Reveal>
            <dl className="divide-y divide-mist-line border-t border-mist-line">
              {company.rows.map((r) => (
                <div
                  key={r.k}
                  className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-slate">{r.k}</dt>
                  <dd className="text-sm leading-relaxed text-ink">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            eyebrow="History"
            title="沿革"
            lead="会計税務事務所から、グローバルビジネスハブへ。"
          />
          <div className="relative mt-16 pl-1 md:pl-0">
            {/* decorative vertical rail with gradient fade */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-2 left-0 top-1 w-px bg-gradient-to-b from-accent via-slate/30 to-transparent md:left-[8rem]"
            />

            {company.history.map((h, i) => {
              const isLast = i === company.history.length - 1;
              return (
                <Reveal
                  key={h.year}
                  delay={i * 70}
                  className="group relative pb-14 last:pb-0 md:grid md:grid-cols-[8rem_1fr]"
                >
                  {/* node on the rail */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-paper-2 transition-transform duration-300 group-hover:scale-125 md:left-[8rem] ${
                      isLast ? "bg-accent" : "bg-slate"
                    }`}
                  />
                  {isLast && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 animate-ping rounded-full bg-accent/60 md:left-[8rem]"
                    />
                  )}

                  {/* year column */}
                  <div className="mb-2 pl-6 md:mb-0 md:pl-0 md:pr-10 md:text-right">
                    <span className="font-latin text-xl font-bold tracking-tight text-slate md:text-2xl">
                      {h.year}
                    </span>
                  </div>

                  {/* content with horizontal connector */}
                  <div className="relative pl-6 md:pl-10">
                    <span
                      aria-hidden
                      className="absolute left-0 top-3 hidden h-px w-6 bg-mist-line md:block"
                    />
                    <h3 className="text-lg font-bold text-ink">{h.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                      {h.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Global Presence"
            title="アジアをまたぐ6拠点体制。"
            lead="東京・福岡・上海・北京・香港・シンガポールを結び、越境案件をシームレスに支援します。"
          />

          <Reveal className="mt-14">
            <div className="flex flex-wrap gap-3">
              {presenceCities.map((c) => (
                <span
                  key={c}
                  className="font-latin rounded-full border border-mist-line bg-paper-2 px-5 py-2.5 text-sm font-medium text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-mist-line bg-mist-line md:grid-cols-3">
            {offices.map((o) => (
              <Reveal key={o.address} as="article" className="bg-paper p-8">
                <p className="font-latin text-xs font-semibold uppercase tracking-widest text-slate">
                  {o.en}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{o.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {o.address}
                </p>
                {o.tel && (
                  <p className="font-latin mt-2 text-sm text-slate-600">
                    TEL {o.tel}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Proof showClientList />
      <CTA />
    </>
  );
}

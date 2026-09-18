import type { Metadata } from "next";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { marketEntry } from "@/lib/content";

const t = getDictionary(defaultLocale).routes.marketEntry;
const common = getDictionary(defaultLocale).common;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
};

export default function MarketEntryPage() {
  return (
    <>
      <PageHero
        eyebrow="Market Entry"
        title={t.heroTitle}
        mobileTitleLines={[...t.heroLines.mobile]}
        desktopTitleLines={[...t.heroLines.desktop]}
        lead={marketEntry.intro}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title={t.stepsHeading}
            titleUnits={[...t.stepsUnits]}
            lead={t.stepsLead}
          />

          <div className="mt-16 grid grid-cols-1 border-t border-mist-line md:grid-cols-2">
            {marketEntry.steps.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 80}
                as="article"
                className={`process-cell relative flex flex-col overflow-hidden border-b border-mist-line py-9 md:px-10 ${i % 2 ? "md:border-l" : "md:pl-0"}`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="process-no font-latin text-4xl font-bold tracking-tight text-accent">
                    {s.no}
                  </span>
                  <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <ul className="mt-6 grid gap-2.5 border-t border-mist-line pt-6">
                  {s.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[1.6rem_1fr] gap-2 text-sm leading-snug text-ink-soft">
                      <span className="mt-2 h-px w-4 bg-accent" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title={t.risksHeading}
          />
          <div className="mt-14 grid grid-cols-1 border-t border-mist-line md:grid-cols-3">
            {marketEntry.risks.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 90}
                className={`border-b border-mist-line py-8 md:px-8 ${i > 0 ? "md:border-l" : "md:pl-0"}`}
              >
                <h3 className="text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {r.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

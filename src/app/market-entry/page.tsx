import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { marketEntry } from "@/lib/content";

export const metadata: Metadata = {
  title: "日本進出支援",
  description:
    "外国企業の日本市場進出を、戦略設計・法人設立・口座と許認可・運営と成長の4ステップで支援。口座開設や税務設計などの典型的なリスクにも事前に対応します。",
};

export default function MarketEntryPage() {
  return (
    <>
      <PageHero
        eyebrow="Market Entry"
        title="日本進出は、点ではなく一連のプロセス。"
        lead={marketEntry.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "日本進出" }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Process"
            title="戦略設計から運営まで、4つのステップ。"
            lead="各工程の判断を、日本の現地目線で伴走します。"
          />

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-mist-line bg-mist-line md:grid-cols-2">
            {marketEntry.steps.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 80}
                as="article"
                className="flex flex-col bg-paper p-8 lg:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-latin text-4xl font-bold tracking-tight text-mist">
                    {s.no}
                  </span>
                  <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-mist-line pt-6">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-snug text-ink-soft"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate" />
                      {b}
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
            eyebrow="Common Risks"
            title="進出でつまずきやすいポイントを、先回りで。"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {marketEntry.risks.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 90}
                className="rounded-2xl border border-mist-line bg-paper p-8"
              >
                <span className="font-latin text-2xl font-bold text-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{r.title}</h3>
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

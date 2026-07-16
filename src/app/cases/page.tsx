import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "支援事例",
  description:
    "中国大手化学メーカーによる東京都心のオフィスビル取得を、ODI備案から権利登記まで支援した事例。420万米ドルの資金送金と3.48億円の不動産取引の全工程をご紹介します。",
};

export default function CasesPage() {
  const cs = caseStudies[0];

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={cs.title}
        mobileTitleLines={["東京都心のオフィスビル", "取得を、ODI備案から", "権利登記まで。"]}
        desktopTitleLines={["東京都心のオフィスビル取得を、", "ODI備案から権利登記まで。"]}
        longTitle
        lead={cs.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "支援事例" }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <Reveal>
              <p className="font-latin text-xs font-semibold uppercase tracking-[0.12em] text-slate">Client</p>
              <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl">
                {cs.clientLabel}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                {cs.disclosure}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <dl className="divide-y divide-mist-line border-y border-mist-line">
                {cs.profile.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                  >
                    <dt className="text-sm font-semibold text-ink">{row.k}</dt>
                    <dd className="text-sm leading-relaxed text-slate-600">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <div className="grid grid-cols-1 border-y border-mist-line sm:grid-cols-3">
              {cs.metrics.map((m) => (
                <div key={m.label} className="border-b border-mist-line px-8 py-10 sm:border-b-0 sm:border-l first:sm:border-l-0">
                  <p className="flex items-baseline gap-1.5">
                    <span className="font-latin text-5xl font-bold tracking-tight text-ink">
                      {m.value}
                    </span>
                    <span className="text-lg font-bold text-slate">
                      {m.unit}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-snug text-slate-600">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title="投資判断の前に、三つの課題があった。"
            titleUnits={["投資判断の前に、", "三つの課題があった。"]}
            lead="いずれも、対日投資を検討する企業が繰り返し直面する論点です。"
          />
          <div className="mt-14 grid grid-cols-1 border-t border-mist-line md:grid-cols-3">
            {cs.challenges.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 90}
                className={`border-b border-mist-line py-8 md:px-8 ${i > 0 ? "md:border-l" : "md:pl-0"}`}
              >
                <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {c.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title="稀少な物件を押さえ、期日を守り切る。"
            titleUnits={["稀少な物件を押さえ、", "期日を守り切る。"]}
            lead="物件へのアクセスと、資金送金の確実性。この二点に絞って設計しました。"
          />

          <div className="mt-16 grid grid-cols-1 border-t border-mist-line md:grid-cols-2">
            {cs.solutions.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 80}
                as="article"
                className={`flex flex-col border-b border-mist-line py-8 lg:py-10 ${i > 0 ? "md:border-l md:pl-10" : "md:pr-10"}`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-latin text-4xl font-bold tracking-tight text-accent">
                    {s.no}
                  </span>
                  <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-mist-line pt-6">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="grid grid-cols-[1.25rem_1fr] gap-3 text-sm leading-snug text-ink-soft"
                    >
                      <span className="mt-2 h-px w-4 bg-accent" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              title="備案から権利登記まで、約9ヶ月。"
              titleUnits={["備案から", "権利登記まで、", "約9ヶ月。"]}
              lead="各工程の期日を起点に逆算し、滞りなく次の手続きへつなぎました。"
            />
          </div>

          <Reveal>
            <ol className="timeline-flow relative border-l border-mist-line pl-8 md:pl-12">
              {cs.timeline.map((t) => (
                <li key={t.date} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-paper-2 md:-left-[3.3rem]" />
                  <p className="font-latin text-sm font-semibold tracking-wide text-accent-600">
                    {t.date}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {t.desc}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title="拠点も、資金も、権利も。"
            lead="投資の目的である実体拠点の確保を、遅延・違約なく完了しました。"
          />
          <div className="mt-14 grid grid-cols-1 border-t border-mist-line md:grid-cols-2">
            {cs.results.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 80}
                className={`border-b border-mist-line py-8 lg:py-10 ${i % 2 ? "md:border-l md:pl-10" : "md:pr-10"}`}
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

      <section className="bg-mist-soft py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title="この事例が、次の一社の参考になる。"
            titleUnits={["この事例が、", "次の一社の参考になる。"]}
          />
          <Reveal className="mt-14">
            <ul className="space-y-6 border-t border-mist-line pt-10">
              {cs.highlights.map((h, i) => (
                <li key={h} className="flex gap-6">
                  <span className="font-latin shrink-0 text-sm font-bold text-accent-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-3xl text-base leading-[1.9] text-slate-600">
                    {h}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}

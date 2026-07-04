import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "EnocXについて",
  description:
    "中国系の投資家・企業の日本進出を後押しし、アジア全域のリソース統合で資産を最適化する。EnocXのブランド確約・世界観・理念・価値をご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EnocX"
        title="日中をつなぎ、アジアへ。"
        lead={about.promise.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "EnocXについて" }]}
      />

      {/* Promise */}
      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Promise" title={about.promise.title} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {about.promise.points.map((p, i) => (
              <Reveal
                key={p.no}
                delay={i * 100}
                className="rounded-2xl border border-mist-line bg-paper-2 p-8"
              >
                <span className="text-3xl font-bold tracking-tight text-mist">
                  {p.no}
                </span>
                <p className="mt-4 text-base leading-relaxed text-ink">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Worldview */}
      <section className="bg-ink py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Worldview"
            title={about.worldview.title}
            invert
          />
          <div className="mt-12 grid max-w-4xl grid-cols-1 gap-6">
            {about.worldview.paragraphs.map((p, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                as="div"
              >
                <p className="text-lg leading-relaxed text-white/80">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading eyebrow="Philosophy" title={about.philosophy.title} />
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate">
                専念すること
              </p>
              <ul className="mt-6 space-y-4">
                {about.philosophy.commit.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 border-b border-mist-line pb-4 text-base leading-relaxed text-ink"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate">
                私たちの約束
              </p>
              <ul className="mt-6 space-y-4">
                {about.philosophy.never.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 border-b border-mist-line pb-4 text-base leading-relaxed text-ink"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="bg-paper-2 py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Value" title={about.value.title} />
          <div className="grid grid-cols-1 gap-6">
            {about.value.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-ink">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

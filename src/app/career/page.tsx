import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { careers, careerContact } from "@/lib/content";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "EnocXの採用情報。東京・上海の拠点で、日中の越境ビジネスを支えるメンバーを募集しています。",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="日中をつなぐ仕事を、一緒に。"
        mobileTitleLines={["日中をつなぐ", "仕事を、", "一緒に。"]}
        desktopTitleLines={["日中をつなぐ仕事を、", "一緒に。"]}
        lead="東京と上海の拠点で、越境ビジネスの実務を支えるメンバーを募集しています。"
        crumbs={[{ label: "Home", href: "/" }, { label: "採用情報" }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title="募集職種"
            lead="ご応募・お問い合わせは、履歴書を下記メールアドレスまでお送りください。"
          />

          <div className="mt-16 divide-y divide-mist-line border-y border-mist-line">
            {careers.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 70}
                as="article"
                className="py-10 lg:py-12"
              >
                <div className="flex flex-col gap-4 border-b border-mist-line pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{c.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      <span className="font-latin text-xs font-semibold tracking-wide text-accent-600">
                        {c.location}
                      </span>
                      <span className="text-xs font-medium text-slate">
                        {c.language}
                      </span>
                    </div>
                  </div>
                  <p className="shrink-0 text-lg font-bold text-ink">
                    {c.salary}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate">
                      仕事内容
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.duties.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                        >
                          <span className="mt-3 h-px w-4 shrink-0 bg-accent" aria-hidden />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {c.requirements && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate">
                        応募条件
                      </p>
                      <ul className="mt-3 space-y-2">
                        {c.requirements.map((r) => (
                          <li
                            key={r}
                            className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                          >
                            <span className="mt-3 h-px w-4 shrink-0 bg-mist-line" aria-hidden />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {c.note && (
                  <p className="mt-6 border-t border-mist-line pt-4 text-xs leading-relaxed text-slate-600">
                    ※ {c.note}
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-y border-mist-line bg-mist-soft p-8 text-center">
            <p className="text-sm text-slate-600">履歴書送付先</p>
            <a
              href={`mailto:${careerContact}`}
              className="mt-2 inline-block text-lg font-bold text-ink transition hover:text-slate"
            >
              {careerContact}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Reveal from "../Reveal";
import { caseCategories, type CaseStudy } from "@/lib/cases";

/**
 * One case as an open editorial row: hairline rules, no card. Mirrors the
 * composition already approved for the homepage case block (eyebrow, title,
 * lead on the left; a metric column on the right).
 */
export default function CaseIndexRow({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const category = caseCategories[caseStudy.category];
  const metrics = caseStudy.metrics?.slice(0, 3) ?? [];

  return (
    <Reveal as="li" delay={index * 90} className="border-b border-mist-line">
      <Link href={`/cases/${caseStudy.slug}`} className="group block py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-slate">{category.eyebrow}</p>
            {/* The finest-grained line plan doubles as wrap units here: the row
                column is narrower than the page hero, so an unplanned break
                would otherwise start a line on a particle. */}
            <h2 className="mt-5 max-w-[24ch] text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-[1.35] tracking-[-0.028em] text-ink transition-colors [text-wrap:balance] group-hover:text-accent-600">
              {caseStudy.titleLines.mobile.map((unit) => (
                <span key={unit} className="inline-block">
                  {unit}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-[44rem] text-base leading-[1.85] text-slate-600 [text-wrap:pretty]">
              {caseStudy.lead}
            </p>
            <span className="link-arrow mt-8 inline-flex min-h-11 items-center text-sm text-ink transition-colors group-hover:text-accent-600">
              事例を読む
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {metrics.length > 0 && (
            <div className="lg:col-span-5 lg:border-l lg:border-mist-line lg:pl-10">
              <dl className="border-t border-mist-line">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="grid grid-cols-[minmax(6rem,0.7fr)_1.4fr] gap-6 border-b border-mist-line py-5"
                  >
                    <dt className="font-latin flex items-baseline gap-1 text-ink">
                      <span className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-[-0.05em]">
                        {metric.value}
                      </span>
                      <span className="text-xs font-semibold text-accent-600">{metric.unit}</span>
                    </dt>
                    <dd className="text-sm leading-[1.75] text-slate-600">{metric.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

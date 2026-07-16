import Link from "next/link";
import { caseStudies } from "@/lib/content";
import Reveal from "./Reveal";

export default function CaseFeature() {
  const caseStudy = caseStudies[0];

  return (
    <section className="border-y border-mist-line bg-paper-2 py-18 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-slate">Case Study</p>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(1.9rem,3.8vw,2.75rem)] font-bold leading-[1.3] tracking-[-0.03em] text-ink [text-wrap:balance]">
              {caseStudy.title}
            </h2>
            <p className="mt-6 max-w-[44rem] text-base leading-[1.85] text-slate-600 [text-wrap:pretty]">
              {caseStudy.lead}
            </p>
            <Link
              href="/cases"
              className="link-arrow mt-8 min-h-11 text-sm text-ink underline decoration-mist-line underline-offset-8 transition-colors hover:text-accent-600"
            >
              支援事例を読む
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-5 lg:border-l lg:border-mist-line lg:pl-10">
            <dl className="border-t border-mist-line">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className="grid grid-cols-[minmax(7rem,0.8fr)_1.4fr] gap-6 border-b border-mist-line py-6">
                  <dt className="font-latin flex items-baseline gap-1 text-ink">
                    <span className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-none tracking-[-0.05em]">{metric.value}</span>
                    <span className="text-xs font-semibold text-accent-600">{metric.unit}</span>
                  </dt>
                  <dd className="text-sm leading-[1.75] text-slate-600">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


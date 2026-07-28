import CountUp from "./CountUp";
import Reveal from "./Reveal";
import NumbersScrollDirector from "./NumbersScrollDirector";

const primaryMetrics = [
  { end: 500, suffix: "+", unit: "件", label: "日本法人の設立ケース" },
  { end: 380, suffix: "+", unit: "社", label: "設立後の運営・管理を支援中" },
  { end: 800, suffix: "+", unit: "社", label: "支援した中小企業（累計）" },
  { end: 35, suffix: "", unit: "社", label: "上場企業クライアント" },
];

const supportingMetrics = [
  { end: 1000, unit: "億円", label: "累計資産規模" },
  { end: 6, unit: "拠点", label: "東京・福岡・上海・北京・香港・シンガポール" },
  { end: 3, unit: "言語", label: "日本語・中国語・英語で対応" },
];

export default function ByTheNumbers() {
  return (
    <section id="numbers" className="numbers-scroll-section relative border-y border-mist-line bg-mist-soft py-18 md:py-20 lg:py-24">
      <NumbersScrollDirector />
      <span className="numbers-route-entry" aria-hidden />
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal className="max-w-[44rem]">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.8vw,2.65rem)] font-bold leading-[1.32] tracking-[-0.025em] text-ink [text-wrap:balance]">
            実績を、数字で。
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-slate-600 [text-wrap:pretty]">
            創業以来、日中をまたぐ企業の起業と成長を、積み重ねてきた実績で支えています。
          </p>
        </Reveal>

        <dl className="mt-14 grid border-t border-mist-line sm:grid-cols-2 lg:grid-cols-4">
          {primaryMetrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 45}
              as="div"
              data-metric-cell="primary"
              className={`relative border-b border-mist-line py-8 sm:px-7 lg:py-10 ${index % 2 ? "sm:border-l" : ""} ${index > 0 ? "lg:border-l" : "lg:border-l-0"}`}
            >
              <dt className="flex min-w-0 items-baseline gap-1 text-ink">
                <CountUp end={metric.end} className="font-latin text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em]" />
                <span className="font-latin text-xl font-semibold text-accent-600">{metric.suffix}</span>
                <span className="ml-1 text-base font-semibold text-accent-600">{metric.unit}</span>
              </dt>
              <dd className="mt-5 text-sm leading-[1.7] text-slate-600">{metric.label}</dd>
            </Reveal>
          ))}
        </dl>

        <dl className="grid sm:grid-cols-3">
          {supportingMetrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 45}
              as="div"
              data-metric-cell="supporting"
              className={`relative border-b border-mist-line py-7 sm:px-7 ${index > 0 ? "sm:border-l" : ""}`}
            >
              <dt className="flex items-baseline gap-2">
                <CountUp end={metric.end} className="font-latin text-3xl font-bold tracking-[-0.04em] text-ink" />
                <span className="text-sm font-bold text-accent-600">{metric.unit}</span>
              </dt>
              <dd className="mt-3 text-sm leading-[1.75] text-slate-600">{metric.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

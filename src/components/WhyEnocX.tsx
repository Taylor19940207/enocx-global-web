import { advantages, presenceCities } from "@/lib/content";
import NetworkParallax from "./NetworkParallax";
import Reveal from "./Reveal";

const cityPositions = [
  "left-[43%] top-[10%]",
  "right-[5%] top-[28%]",
  "right-[13%] bottom-[18%]",
  "left-[43%] bottom-[6%]",
  "left-[5%] bottom-[23%]",
  "left-[8%] top-[25%]",
];

export default function WhyEnocX() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-18 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(14,143,168,0.12),transparent_38%)]" aria-hidden />
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 xl:gap-20">
          <div className="max-w-[35rem] lg:py-8">
            <p className="eyebrow text-mist">Why EnocX</p>
            <h2 className="mt-6 text-[clamp(2.15rem,4vw,3.55rem)] font-bold leading-[1.26] tracking-[-0.035em] text-white">
              <span className="block lg:hidden">翻訳ではなく、</span>
              <span className="block lg:hidden">両国の商習慣を</span>
              <span className="block lg:hidden">理解した伴走を。</span>
              <span className="hidden lg:block">翻訳ではなく、</span>
              <span className="hidden lg:block">両国の商習慣を</span>
              <span className="hidden lg:block">理解した伴走を。</span>
            </h2>
            <p className="mt-7 max-w-[32rem] text-base leading-[1.9] text-white/68 [text-wrap:pretty] lg:text-lg">
              言語・制度・商習慣のギャップを埋め、意思決定に必要な情報を、日本の現地目線で提供します。
            </p>
          </div>

          <Reveal delay={150}>
            <NetworkParallax>
            <figure className="network-field relative mx-auto aspect-square w-full max-w-[650px]" aria-labelledby="network-caption">
              <div className="absolute inset-[15%] rounded-full border border-white/15" />
              <div className="absolute inset-[28%] rounded-full border border-white/10" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600" fill="none" aria-hidden>
                <path className="network-orbit" d="M70 300C125 75 475 75 530 300C475 525 125 525 70 300Z" />
                <path className="network-orbit network-orbit-muted" d="M300 70C525 125 525 475 300 530C75 475 75 125 300 70Z" />
                {[
                  [300, 112], [493, 226], [460, 420], [300, 488], [122, 404], [105, 220],
                ].map(([x, y]) => (
                  <path key={`${x}-${y}`} className="network-spoke" d={`M300 300L${x} ${y}`} />
                ))}
                <circle className="network-pulse" cx="300" cy="300" r="72" />
              </svg>

              <div className="network-core absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/45 bg-ink/90 sm:h-28 sm:w-28">
                <span className="font-latin text-base font-bold tracking-[0.16em] text-white">EnocX</span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-accent">Global hub</span>
              </div>

              {presenceCities.map((city, index) => (
                <div key={city} className={`network-city absolute ${cityPositions[index]}`}>
                  <span className="network-city-dot" style={{ animationDelay: `${index * -0.8}s` }} aria-hidden />
                  <span className="font-latin whitespace-nowrap text-[10px] font-semibold tracking-[0.16em] text-white/75">
                    {city}
                  </span>
                </div>
              ))}
              <figcaption id="network-caption" className="sr-only">
                東京、福岡、上海、北京、香港、シンガポールを結ぶEnocXのアジアネットワーク
              </figcaption>
            </figure>
            </NetworkParallax>
          </Reveal>
        </div>

        <div className="relative mt-14 grid grid-cols-1 border-t border-white/14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <Reveal key={advantage.no} delay={index * 45} className={`border-b border-white/14 py-8 sm:px-7 ${index % 2 ? "sm:border-l sm:border-white/14" : ""} ${index > 0 ? "lg:border-l lg:border-white/14" : "lg:border-l-0"}`}>
              <article className="h-full">
                <h3 className="text-lg font-bold leading-[1.5] text-white">{advantage.title}</h3>
                <p className="mt-4 text-sm leading-[1.85] text-white/62 [text-wrap:pretty]">{advantage.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

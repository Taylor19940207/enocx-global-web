import Link from "next/link";
import { hero } from "@/lib/content";
import BackgroundArcs from "./decorative/BackgroundArcs";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/move-bg.png"
      >
        <source src="/media/move-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      <BackgroundArcs variant="dark" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1320px] flex-col justify-center px-6 pt-28 pb-20 md:px-10">
        <p className="eyebrow mb-7 text-mist">{hero.eyebrow}</p>
        <h1 className="max-w-4xl text-[2.6rem] font-bold leading-[1.15] tracking-tight text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.08]">
          {hero.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-[1.9] text-white/85 sm:text-lg">
          {hero.lead}
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Link
            href={hero.primaryCta.href}
            className="link-arrow rounded-full bg-white px-8 py-4 text-sm text-ink transition hover:bg-mist"
          >
            {hero.primaryCta.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="font-latin rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="flex items-baseline gap-1 text-white">
                <span className="font-latin text-5xl font-bold tracking-tight lg:text-6xl">
                  {s.value}
                </span>
                <span className="font-latin text-xl font-semibold text-accent">
                  {s.suffix}
                </span>
              </dt>
              <dd className="mt-3 text-sm leading-snug text-white/70">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
}

import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/move-bg.jpg"
      >
        <source src="/media/move-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      <div className="hero-route pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
        <svg viewBox="0 0 720 900" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
          <path className="hero-route-corridor" d="M690 154C515 208 574 388 396 442C222 495 260 680 38 744" />
          <path className="hero-route-line" d="M690 154C515 208 574 388 396 442C222 495 260 680 38 744" />
          <path className="hero-route-line hero-route-line-secondary" d="M742 238C565 270 620 470 436 514C274 552 286 714 90 802" />
          <circle className="hero-route-signal" r="4">
            <animateMotion
              dur="8s"
              path="M690 154C515 208 574 388 396 442C222 495 260 680 38 744"
              repeatCount="indefinite"
            />
          </circle>
          <circle className="hero-route-signal hero-route-signal-delayed" r="3">
            <animateMotion
              begin="-4s"
              dur="8s"
              path="M690 154C515 208 574 388 396 442C222 495 260 680 38 744"
              repeatCount="indefinite"
            />
          </circle>
          <circle className="hero-route-node" cx="596" cy="230" r="5" />
          <circle className="hero-route-node" cx="396" cy="442" r="5" />
          <circle className="hero-route-node" cx="176" cy="688" r="5" />
        </svg>
        <span className="hero-route-label right-[12%] top-[22%]">TOKYO</span>
        <span className="hero-route-label right-[42%] top-[49%]">SHANGHAI</span>
        <span className="hero-route-label bottom-[21%] left-[16%]">ASIA NETWORK</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1320px] flex-col justify-center px-6 pb-12 pt-24 md:px-10">
        <p className="eyebrow hero-enter hero-enter-1 mb-6 text-mist">{hero.eyebrow}</p>
        <h1 className="hero-enter hero-enter-2 max-w-[900px] text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.24] tracking-[-0.035em] text-white [text-wrap:balance] sm:leading-[1.18] lg:leading-[1.14]">
          {hero.title.map((line, i) => (
            <span key={i} className="block not-last:mb-[0.08em]">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-enter hero-enter-3 mt-6 max-w-[39rem] text-[0.95rem] leading-[1.85] text-white/82 [text-wrap:pretty] sm:text-base lg:text-[1.05rem]">
          {hero.lead}
        </p>

        <div className="hero-enter hero-enter-4 mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={hero.primaryCta.href}
            className="link-arrow pressable min-h-12 whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-sm text-ink transition hover:bg-mist"
          >
            {hero.primaryCta.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="pressable min-h-12 whitespace-nowrap rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

      </div>

    </section>
  );
}

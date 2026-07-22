import Link from "next/link";
import { hero, presenceCoordinates } from "@/lib/content";
import HeroCorridorScene from "./HeroCorridorScene";

// Positions a label at fixed viewBox coordinates so it tracks its SVG dot exactly, no
// matter how the section's actual aspect ratio crops the "slice"-fit corridor scene.
function vbPos(x: number, y: number): React.CSSProperties {
  return {
    left: `calc(var(--hero-offset-x, 0px) + ${x}px * var(--hero-scale, 1))`,
    top: `calc(var(--hero-offset-y, 0px) + ${y}px * var(--hero-scale, 1))`,
  };
}

// Hub-and-spoke corridor: five real offices (Shanghai, Hong Kong, Singapore, Beijing,
// Fukuoka) converge on Tokyo, the hub. Each curve's bow is a fixed proportion of its own
// chord length so the five read as one family, not hand-tuned one-offs. Fukuoka sits close
// to Tokyo because it is the one domestic (short-hop) office; the other four are the real
// international distances. Three further dashed, looping lines mark exploratory "next
// markets" -- not current offices, kept visually distinct (thin, muted, cycling on/off).
const TOKYO = { cx: 1238, cy: 194 };

const spokes = [
  { city: "Hong Kong", cx: 259, cy: 97, d: "M259 97Q760 12 1238 194" },
  { city: "Singapore", cx: 432, cy: 729, d: "M432 729Q770 331 1238 194" },
  { city: "Beijing", cx: 749, cy: 194, d: "M749 194Q993 116 1238 194" },
  { city: "Fukuoka", cx: 1094, cy: 373, d: "M1094 373Q1188 307 1238 194" },
] as const;

const SHANGHAI = { cx: 72, cy: 648 };

const futureMarkets = [
  { d: "M814 725Q1020 463 1238 194", cx: 814, cy: 725, delay: "0s" },
  { d: "M1233 733Q1235 463 1238 194", cx: 1233, cy: 733, delay: "2s" },
  { d: "M1430 692Q1340 440 1238 194", cx: 1430, cy: 692, delay: "4s" },
] as const;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden bg-ink">
      <HeroCorridorScene className="absolute inset-0 hidden lg:block">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 810"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="heroLineGrad" x1="0" y1="810" x2="1238" y2="194" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#eaf6f9" />
              <stop offset="50%" stopColor="#7dd3e8" />
              <stop offset="100%" stopColor="#3fb8d4" />
            </linearGradient>
            <radialGradient id="heroGlowMain" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0e8fa8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0e8fa8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroGlowSoft1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0e8fa8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0e8fa8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroGlowSoft2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5fb9cc" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#5fb9cc" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroGlowDeep" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0b7488" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0b7488" stopOpacity="0" />
            </radialGradient>
            <filter id="heroBlurMain" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <filter id="heroBlurSm" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            {/* Grain is generated once on a small tile and repeated via <pattern>, not
                computed across the full canvas -- feTurbulence over a 1440x810 region is
                expensive enough to stall paint on some GPUs. */}
            <filter id="heroGrainFilter" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
            </filter>
            <pattern id="heroGrainPattern" width="140" height="140" patternUnits="userSpaceOnUse">
              <rect width="140" height="140" filter="url(#heroGrainFilter)" />
            </pattern>
            <path id="heroCorridor" d="M72 648Q710 610 1238 194" />
          </defs>

          <ellipse className="hero-glow-breathe" cx="1040" cy="266" rx="620" ry="509" fill="url(#heroGlowMain)" />
          <ellipse cx="180" cy="648" rx="480" ry="416" fill="url(#heroGlowSoft1)" />
          <ellipse cx="620" cy="740" rx="560" ry="301" fill="url(#heroGlowSoft2)" />
          <ellipse cx="1370" cy="752" rx="480" ry="440" fill="url(#heroGlowDeep)" />
          <ellipse cx="420" cy="139" rx="420" ry="278" fill="url(#heroGlowSoft2)" opacity="0.7" />
          <rect x="0" y="0" width="1440" height="810" fill="url(#heroGrainPattern)" opacity="0.4" />

          {spokes.map((s, i) => (
            <g key={s.city}>
              <path
                className="hero-corridor-fade"
                style={{ ["--hero-op" as string]: 0.16, animationDelay: `${0.15 + i * 0.1}s` }}
                d={s.d}
                stroke="#0e8fa8"
                strokeWidth={7}
                filter="url(#heroBlurSm)"
              />
              <path
                className="hero-corridor-draw"
                pathLength={1}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                d={s.d}
                stroke="#0e8fa8"
                strokeWidth={1.6}
                opacity={0.55}
              />
            </g>
          ))}

          <use href="#heroCorridor" className="hero-corridor-fade" style={{ ["--hero-op" as string]: 0.4, animationDelay: "0.05s" }} stroke="#0e8fa8" strokeWidth={7} filter="url(#heroBlurMain)" />
          <path className="hero-corridor-draw" pathLength={1} style={{ animationDelay: "0.05s" }} d="M72 648Q710 610 1238 194" stroke="url(#heroLineGrad)" strokeWidth={3.2} />
          <circle className="hero-comet" r={6} fill="#eef5f7" style={{ offsetPath: "path('M72 648Q710 610 1238 194')" }} />

          {futureMarkets.map((f) => (
            <path
              key={f.d}
              className="hero-future-sweep"
              style={{ animationDelay: f.delay }}
              d={f.d}
              stroke="#c4e0e8"
              strokeWidth={1.3}
              strokeDasharray="1 6"
              strokeLinecap="round"
            />
          ))}

          <g>
            <circle className="hero-node-pop" style={{ animationDelay: "1.3s" }} cx={72} cy={648} r={6} fill="#0e8fa8" />
            {spokes.map((s, i) => (
              <circle key={s.city} className="hero-node-pop" style={{ animationDelay: `${1.4 + i * 0.05}s` }} cx={s.cx} cy={s.cy} r={4} fill="#c4e0e8" />
            ))}
            <circle className="hero-node-pop" style={{ animationDelay: "1.7s" }} cx={TOKYO.cx} cy={TOKYO.cy} r={8} fill="#0e8fa8" />
            <circle className="hero-node-pop" style={{ animationDelay: "1.7s" }} cx={TOKYO.cx} cy={TOKYO.cy} r={3.5} fill="#eef5f7" />
            <circle className="hero-pulse-ring" style={{ animationDelay: "1.7s" }} cx={TOKYO.cx} cy={TOKYO.cy} r={10} fill="none" stroke="#0e8fa8" strokeWidth={2} />
            <circle className="hero-pulse-ring" style={{ animationDelay: "2.1s" }} cx={TOKYO.cx} cy={TOKYO.cy} r={10} fill="none" stroke="#c4e0e8" strokeWidth={1.4} />
            {futureMarkets.map((f) => (
              <circle key={f.cx} className="hero-future-sweep" style={{ animationDelay: f.delay }} cx={f.cx} cy={f.cy} r={5} fill="none" stroke="#c4e0e8" strokeWidth={1.4} />
            ))}
          </g>
        </svg>

        <span className="hero-node-label hero-node-label-primary" style={{ ...vbPos(SHANGHAI.cx, SHANGHAI.cy), transform: "translate(0,12.6px)", animationDelay: "1.9s" }}>
          <span className="hero-node-city">SHANGHAI</span>
          <span className="hero-node-coord">{presenceCoordinates.Shanghai}</span>
        </span>
        {spokes.map((s, i) => (
          <span
            key={s.city}
            className="hero-node-label hero-node-label-secondary"
            tabIndex={0}
            style={{ ...vbPos(s.cx, s.cy), transform: "translate(-50%,10px)", animationDelay: `${1.95 + i * 0.05}s` }}
          >
            <span className="hero-node-city">{s.city.toUpperCase()}</span>
            <span className="hero-node-coord hero-node-coord-reveal">{presenceCoordinates[s.city]}</span>
          </span>
        ))}
        <span className="hero-node-label hero-node-label-hub" style={{ ...vbPos(TOKYO.cx, TOKYO.cy), transform: "translate(-50%,14.1px)", animationDelay: "2.2s" }}>
          <span className="hero-node-city">TOKYO</span>
          <span className="hero-node-coord">{presenceCoordinates.Tokyo}</span>
        </span>
      </HeroCorridorScene>

      {/* Mobile/tablet fallback: the corridor scene competes with the copy below `lg`,
          so it is hidden there and this gradient keeps the section reading as "the hub". */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#0d1416] to-ink lg:hidden" />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink/55 lg:hidden" />
      <div
        className="hero-scrim absolute inset-0 hidden lg:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1320px] flex-col justify-center px-6 pb-12 pt-24 md:px-10">
        <p className="eyebrow hero-enter hero-enter-1 mb-6 text-mist">{hero.eyebrow}</p>
        <h1 className="hero-enter hero-enter-2 max-w-[900px] text-[clamp(1.85rem,5vw,3.75rem)] font-bold leading-[1.24] tracking-[-0.035em] text-white sm:leading-[1.18] lg:leading-[1.14]">
          {hero.title.map((line, i) => (
            <span key={i} className="block not-last:mb-[0.08em]">
              {line.map((unit) => (
                <span key={unit} className="inline-block">
                  {unit}
                </span>
              ))}
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
            className="pressable min-h-12 whitespace-nowrap rounded-full border border-white/40 px-7 py-3.5 text-sm text-white transition hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

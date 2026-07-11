import Image from "next/image";
import { experts } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";
import AnimatedBackground from "./decorative/AnimatedBackground";

type Props = {
  withHeading?: boolean;
  limit?: number;
  moreHref?: string;
  bg?: string;
};

export default function People({
  withHeading = true,
  limit,
  moreHref,
  bg = "bg-paper-2",
}: Props) {
  // Full page keeps leadership order; the limited (home) view prioritises
  // members with photos for a stronger visual.
  const list = limit
    ? [...experts]
        .sort((a, b) => (b.photo ? 1 : 0) - (a.photo ? 1 : 0))
        .slice(0, limit)
    : experts;

  return (
    <section id="people" className={`relative overflow-hidden ${bg} py-24 lg:py-section`}>
      <AnimatedBackground variant="light" intensity="medium" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {withHeading && (
          <SectionHeading
            eyebrow="People"
            title="有資格の専門家が、直接あなたの課題に向き合う。"
            lead="税理士・国税OB・司法書士・弁護士など、各分野の実務家がチームとして越境案件を支えます。"
          />
        )}

        {/* All cards same size - visual interest through staggered reveal and subtle hover effects */}
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
            withHeading ? "mt-16" : ""
          }`}
        >
          {list.map((e, i) => (
            <Reveal
              key={e.name}
              delay={(i % 3) * 90}
              as="article"
              className="group"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg bg-paper shadow-lg ring-1 ring-mist-line transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-accent/40">
                {/* Photo - consistent aspect ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-mist-soft">
                  {e.photo ? (
                    <>
                      <Image
                        src={e.photo}
                        alt={e.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Floating quote icon on hover */}
                      <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                          <svg className="h-5 w-5 text-white/60" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8v8H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4v4h-4zm16 0v8h-4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4v4h-4z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate to-slate-dark">
                      <span className="font-latin text-6xl font-semibold text-white/90">
                        {e.name.replace(/\s/g, "").slice(0, 1)}
                      </span>
                      <span className="font-latin mt-2 text-[10px] uppercase tracking-[0.3em] text-mist/80">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content - consistent padding */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between">
                    <p className="font-latin text-xs font-semibold uppercase tracking-wider text-accent-600">
                      {e.role}
                    </p>
                    {/* Subtle indicator */}
                    <div className="h-2 w-2 rounded-full bg-accent/20 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent" />
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-ink">
                    {e.name}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-[1.85] text-slate-600">
                    {e.bio}
                  </p>

                  {/* Bottom accent bar */}
                  <div className="mt-6 h-1 w-12 rounded-full bg-accent/20 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {moreHref && (
          <Reveal className="mt-14 flex justify-center">
            <ArrowLink href={moreHref} variant="outline">
              専門家チームをすべて見る
            </ArrowLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}

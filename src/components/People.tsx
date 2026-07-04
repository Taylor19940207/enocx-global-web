import Image from "next/image";
import { experts } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";
import BackgroundArcs from "./decorative/BackgroundArcs";

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
      <BackgroundArcs variant="light" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {withHeading && (
          <SectionHeading
            eyebrow="People"
            title="有資格の専門家が、直接あなたの課題に向き合う。"
            lead="税理士・国税OB・司法書士・弁護士など、各分野の実務家がチームとして越境案件を支えます。"
          />
        )}

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
              className="group overflow-hidden rounded-2xl bg-paper shadow-[0_1px_0_rgba(20,24,26,0.06)] ring-1 ring-mist-line transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-accent/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-mist-soft">
                {e.photo ? (
                  <>
                    <Image
                      src={e.photo}
                      alt={e.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
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
              <div className="p-7">
                <p className="font-latin text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {e.role}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink">{e.name}</h3>
                <p className="mt-3 text-sm leading-[1.85] text-slate-600">
                  {e.bio}
                </p>
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

import Image from "next/image";
import { experts } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";

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
    <section id="people" className={`relative ${bg} py-18 md:py-20 lg:py-24`}>
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        {withHeading && (
          <SectionHeading
            title="有資格の専門家が、直接あなたの課題に向き合う。"
            lead="税理士・国税OB・司法書士・弁護士など、各分野の実務家がチームとして越境案件を支えます。"
          />
        )}

        <div
          className={`grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 ${
            withHeading ? "mt-14 lg:mt-16" : ""
          }`}
        >
          {list.map((e, i) => (
            <Reveal
              key={e.name}
              delay={(i % 3) * 90}
              as="article"
              className="group"
            >
              <div className="flex h-full flex-col border-t border-mist-line pt-4">
                <div className="relative aspect-[4/5] overflow-hidden border border-mist-line bg-mist-soft">
                  {e.photo ? (
                    <Image
                      src={e.photo}
                      alt={e.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-ink">
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_68%_32%,rgba(14,143,168,0.22),transparent_34%),linear-gradient(135deg,transparent_0%,transparent_48%,rgba(255,255,255,0.045)_48%,rgba(255,255,255,0.045)_48.5%,transparent_48.5%)]"
                        aria-hidden
                      />
                      <div className="absolute inset-x-8 top-8 flex items-center justify-between border-t border-white/15 pt-3">
                        <span className="font-latin text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                          EnocX Expert
                        </span>
                        <span className="h-2 w-2 rounded-full border border-accent/70" aria-hidden />
                      </div>
                      <span className="font-latin relative text-6xl font-semibold tracking-tight text-white/90">
                        {e.name.replace(/\s/g, "").slice(0, 1)}
                      </span>
                      <span className="font-latin relative mt-5 border-t border-accent/60 pt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
                        Professional Profile
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-1 pb-3 pt-6">
                  <div className="flex items-start">
                    <p className="font-latin text-xs font-semibold tracking-[0.08em] text-accent-600">
                      {e.role}
                    </p>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-ink">
                    {e.name}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-[1.85] text-slate-600">
                    {e.bio}
                  </p>

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

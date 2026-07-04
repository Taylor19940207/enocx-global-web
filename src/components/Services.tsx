import Image from "next/image";
import { coreServices, extendedServices } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";
import BackgroundArcs from "./decorative/BackgroundArcs";

type Props = {
  withHeading?: boolean;
  showExtended?: boolean;
  moreHref?: string;
};

export default function Services({
  withHeading = true,
  showExtended = true,
  moreHref,
}: Props) {
  return (
    <section id="services" className="relative overflow-hidden bg-paper py-24 lg:py-section">
      <BackgroundArcs variant="light" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {withHeading && (
          <SectionHeading
            eyebrow="Services"
            title="日本進出のすべての工程を、一つの窓口で。"
            lead="設立・会計税務・資産金融・事業運営という4つの核を軸に、進出から成長までを分野横断で支援します。"
          />
        )}

        <div
          className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-mist-line bg-mist-line md:grid-cols-2 ${
            withHeading ? "mt-16" : ""
          }`}
        >
          {coreServices.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 80}
              as="article"
              className="group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-mist-soft lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-latin text-sm font-semibold tracking-widest text-mist-line transition group-hover:text-accent">
                  {s.no}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist-soft transition group-hover:bg-accent-soft">
                  <Image
                    src={s.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {s.summary}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-mist-line pt-6">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm leading-snug text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {showExtended && (
          <Reveal className="mt-20">
            <p className="eyebrow text-slate">Extended Fields</p>
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-mist-line bg-mist-line sm:grid-cols-2 lg:grid-cols-3">
              {extendedServices.map((e) => (
                <div
                  key={e.title}
                  className="bg-paper p-6 transition-colors hover:bg-mist-soft"
                >
                  <h4 className="text-base font-bold text-ink">{e.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {moreHref && (
          <Reveal className="mt-14 flex justify-center">
            <ArrowLink href={moreHref} variant="outline">
              サービスの詳細を見る
            </ArrowLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}

"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { coreServices, extendedServices } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowLink from "./ArrowLink";

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
  const [activeService, setActiveService] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const active = coreServices[activeService];

  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [rail, setRail] = useState<{ top: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = btnRefs.current[activeService];
      if (el) setRail({ top: el.offsetTop, height: el.offsetHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeService]);

  return (
    <section id="services" className="relative bg-paper py-18 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        {withHeading && (
          <SectionHeading
            title={
              <>
                <span className="block md:hidden">日本進出のすべての</span>
                <span className="block md:hidden">工程を、一つの窓口で。</span>
                <span className="hidden md:block">日本進出のすべての工程を、</span>
                <span className="hidden md:block">一つの窓口で。</span>
              </>
            }
            lead="設立・会計税務・資産金融・事業運営という4つの核を軸に、進出から成長までを分野横断で支援します。"
          />
        )}

        <div className={withHeading ? "mt-14 lg:mt-16" : ""}>
          <div className="hidden border-t border-mist-line lg:grid lg:grid-cols-12">
            <Reveal className="col-span-4 border-r border-mist-line pr-10">
              <div className="relative sticky top-28">
                {rail && <span aria-hidden className="service-rail" style={{ top: rail.top, height: rail.height }} />}
                {coreServices.map((service, index) => {
                  const selected = activeService === index;
                  return (
                    <button
                      key={service.no}
                      type="button"
                      aria-pressed={selected}
                      ref={(el) => {
                        btnRefs.current[index] = el;
                      }}
                      onClick={() => setActiveService(index)}
                      className={`group relative flex w-full items-center gap-5 border-b border-mist-line py-6 pl-6 pr-4 text-left transition-colors ${
                        selected ? "text-ink" : "text-slate hover:text-ink"
                      }`}
                    >
                      <span className="font-latin w-8 text-xs font-semibold tracking-[0.16em] text-accent-600">
                        {service.no}
                      </span>
                      <span className="text-base font-bold leading-snug">{service.title}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={120} className="col-span-8 pl-12 xl:pl-16">
              <div key={active.no} className="service-detail-enter py-12 lg:py-16">
                <div>
                  <span className="font-latin text-xs font-semibold tracking-[0.2em] text-accent-600">{active.no}</span>
                  <h3 className="mt-4 text-3xl font-bold text-ink lg:text-4xl">{active.title}</h3>
                </div>
                <p className="mt-8 max-w-2xl text-lg leading-[1.9] text-slate-600">{active.summary}</p>

                <div className="mt-12 border-t border-mist-line">
                  <p className="py-5 text-xs font-semibold tracking-[0.14em] text-slate">主要サポート内容</p>
                  <ul className="grid grid-cols-2 gap-x-10">
                    {active.points.map((point) => (
                      <li key={point} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-mist-line py-5 text-sm leading-relaxed text-ink">
                        <span className="mt-2.5 h-px w-5 bg-accent" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-mist-line lg:hidden">
            {coreServices.map((service, index) => (
              <Reveal key={service.no} delay={index * 50} as="article" className="border-b border-mist-line">
                <button
                  type="button"
                  className="flex min-h-20 w-full items-center gap-4 py-5 text-left"
                  aria-expanded={openMobile === index}
                  onClick={() => setOpenMobile(openMobile === index ? null : index)}
                >
                  <span className="font-latin w-7 flex-none text-[0.7rem] font-semibold tracking-[0.12em] text-accent-600">{service.no}</span>
                  <span className="min-w-0 flex-1 text-lg font-bold leading-[1.45] text-ink">{service.title}</span>
                  <span className="font-latin flex h-8 w-8 flex-none items-center justify-center text-xl font-light text-slate" aria-hidden>
                    {openMobile === index ? "−" : "+"}
                  </span>
                </button>
                {openMobile === index && (
                  <div className="service-detail-enter pb-8 pl-11 pt-2">
                    <p className="text-sm leading-[1.85] text-slate-600 [text-wrap:pretty]">{service.summary}</p>
                    <ul className="mt-5 grid gap-3">
                      {service.points.map((point) => (
                        <li key={point} className="grid grid-cols-[1rem_1fr] gap-2 text-sm leading-[1.7] text-ink-soft">
                          <span className="mt-3 h-px w-3 bg-accent" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {showExtended && (
          <Reveal className="mt-24">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-ink lg:text-3xl">専門分野を超えた、総合的なサポート</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">事業の成長段階に合わせ、専門領域を横断して必要な実務をつなぎます。</p>
            </div>
            <div className="mt-10 grid border-t border-mist-line sm:grid-cols-2 lg:grid-cols-3">
              {extendedServices.map((service, index) => (
                <article
                  key={service.title}
                  className={`border-b border-mist-line py-8 sm:px-7 ${
                    index % 2 === 0 ? "sm:pl-0" : "sm:border-l"
                  } lg:px-8 ${
                    index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l"
                  }`}
                >
                  <h4 className="text-base font-bold text-ink">{service.title}</h4>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">{service.desc}</p>
                </article>
              ))}
            </div>
          </Reveal>
        )}

        {moreHref && (
          <Reveal className="mt-14 flex justify-center">
            <ArrowLink href={moreHref} variant="outline">サービスの詳細を見る</ArrowLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}

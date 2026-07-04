"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [activeService, setActiveService] = useState(0);

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

        {/* Core Services - Split Layout */}
        <div className={`${withHeading ? "mt-20" : ""}`}>
          {/* Desktop: Side-by-side tabs + content */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Left: Service Navigation */}
            <div className="col-span-4">
              <Reveal>
                <div className="sticky top-32 space-y-3">
                  {coreServices.map((service, idx) => (
                    <button
                      key={service.no}
                      onClick={() => setActiveService(idx)}
                      className={`group w-full text-left transition-all duration-300 ${
                        activeService === idx
                          ? "translate-x-2"
                          : "hover:translate-x-1"
                      }`}
                    >
                      <div
                        className={`rounded-xl border-2 p-6 transition-all duration-300 ${
                          activeService === idx
                            ? "border-accent bg-accent-soft shadow-lg"
                            : "border-mist-line bg-paper hover:border-accent/40 hover:bg-mist-soft"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                              activeService === idx
                                ? "bg-accent"
                                : "bg-mist-soft group-hover:bg-accent/20"
                            }`}
                          >
                            <Image
                              src={service.icon}
                              alt=""
                              width={24}
                              height={24}
                              className={`h-6 w-6 object-contain transition-all duration-300 ${
                                activeService === idx
                                  ? "brightness-0 invert"
                                  : ""
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={`font-latin text-xs font-semibold tracking-wider transition-colors ${
                                  activeService === idx
                                    ? "text-accent-600"
                                    : "text-slate-400"
                                }`}
                              >
                                {service.no}
                              </span>
                            </div>
                            <h3
                              className={`mt-1 text-base font-bold leading-snug transition-colors ${
                                activeService === idx
                                  ? "text-ink"
                                  : "text-ink-soft"
                              }`}
                            >
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Active Service Content */}
            <div className="col-span-8">
              <Reveal delay={150}>
                <div className="rounded-2xl border border-mist-line bg-paper p-10 shadow-2xl lg:p-12">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <span className="font-latin text-sm font-semibold tracking-widest text-accent">
                        {coreServices[activeService].no}
                      </span>
                      <h3 className="mt-3 text-3xl font-bold text-ink lg:text-4xl">
                        {coreServices[activeService].title}
                      </h3>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft">
                      <Image
                        src={coreServices[activeService].icon}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed text-slate-600">
                    {coreServices[activeService].summary}
                  </p>

                  <div className="mt-10 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate">
                      主要サポート内容
                    </h4>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {coreServices[activeService].points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 rounded-lg bg-mist-soft p-4 transition-colors hover:bg-accent-soft"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <svg
                              className="h-3 w-3 text-accent"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <path
                                d="M2 6l3 3 5-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium leading-relaxed text-ink">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="grid grid-cols-1 gap-6 lg:hidden">
            {coreServices.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 80}
                as="article"
                className="group overflow-hidden rounded-2xl border border-mist-line bg-paper shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-latin text-sm font-semibold tracking-widest text-accent">
                      {s.no}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
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
                  <ul className="mt-6 space-y-3 border-t border-mist-line pt-6">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-snug text-ink-soft"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Extended Services - Bento Grid */}
        {showExtended && (
          <Reveal className="mt-24">
            <div className="mb-8">
              <p className="eyebrow text-slate">Extended Fields</p>
              <h3 className="mt-4 text-2xl font-bold text-ink lg:text-3xl">
                専門分野を超えた、総合的なサポート
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedServices.map((e, idx) => (
                <div
                  key={e.title}
                  className={`group overflow-hidden rounded-xl border border-mist-line bg-paper p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl ${
                    idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft transition-transform duration-300 group-hover:scale-110">
                    <div className="h-5 w-5 rounded-full bg-accent" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-ink">{e.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
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

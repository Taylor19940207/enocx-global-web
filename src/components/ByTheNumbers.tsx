"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import SectionHeading from "./SectionHeading";
import BackgroundArcs from "./decorative/BackgroundArcs";

type Metric = {
  end: number;
  suffix: string;
  unit: string;
  label: string;
  barPct: number;
};

const metrics: Metric[] = [
  { end: 500, suffix: "+", unit: "件", label: "日本法人の設立ケース", barPct: 100 },
  { end: 380, suffix: "+", unit: "社", label: "設立後の運営・管理を支援中", barPct: 76 },
  { end: 800, suffix: "+", unit: "社", label: "支援した中小企業（累計）", barPct: 92 },
  { end: 35, suffix: "", unit: "社", label: "上場企業クライアント", barPct: 34 },
];

export default function ByTheNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-section">
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #0e8fa8, transparent 70%)" }}
      />
      <BackgroundArcs variant="dark" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          eyebrow="By the Numbers"
          title="実績を、数字で。"
          lead="創業以来、日中をまたぐ企業の起業と成長を、確かな数字で支えてきました。"
          invert
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-baseline gap-1 text-white">
                <CountUp
                  end={m.end}
                  className="font-latin text-5xl font-bold tracking-tight lg:text-6xl"
                />
                <span className="font-latin text-2xl font-bold text-accent">
                  {m.suffix}
                </span>
                <span className="ml-1 text-sm font-medium text-white/50">
                  {m.unit}
                </span>
              </div>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`stat-bar h-full rounded-full bg-accent ${
                    visible ? "is-visible" : ""
                  }`}
                  style={{ width: `${m.barPct}%` }}
                />
              </div>
              <p className="mt-4 text-sm leading-snug text-white/70">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          <div className="bg-ink p-8">
            <p className="font-latin text-4xl font-bold text-white lg:text-5xl">
              <CountUp end={1000} suffix="" />
              <span className="text-accent">億円</span>
            </p>
            <p className="mt-3 text-sm text-white/70">累計資産規模</p>
          </div>
          <div className="bg-ink p-8">
            <p className="font-latin text-4xl font-bold text-white lg:text-5xl">
              <CountUp end={6} />
              <span className="text-accent"> 拠点</span>
            </p>
            <p className="mt-3 text-sm text-white/70">
              東京・福岡・上海・北京・香港・シンガポール
            </p>
          </div>
          <div className="bg-ink p-8">
            <p className="font-latin text-4xl font-bold text-white lg:text-5xl">
              <CountUp end={3} />
              <span className="text-accent"> 言語</span>
            </p>
            <p className="mt-3 text-sm text-white/70">日本語・中国語・英語で対応</p>
          </div>
        </div>
      </div>
    </section>
  );
}

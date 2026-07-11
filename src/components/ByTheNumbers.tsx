"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
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
      {/* Enhanced background effects */}
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #0e8fa8, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-1/4 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #c4e0e8, transparent 70%)" }}
      />
      <BackgroundArcs variant="dark" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {/* Split header layout for impact */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-accent">By the Numbers</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              実績を、数字で。
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/70 lg:text-xl">
              創業以来、日中をまたぐ企業の起業と成長を、確かな数字で支えてきました。
            </p>
          </div>
        </div>

        {/* Hero metrics - larger, more prominent */}
        <div ref={ref} className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:from-white/10 hover:to-white/5"
            >
              {/* Decorative corner accent */}
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-accent/20 blur-2xl transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6" />

              <div className="relative">
                <div className="flex items-baseline gap-1">
                  <CountUp
                    end={m.end}
                    className="font-latin text-6xl font-bold tracking-tight text-white lg:text-7xl"
                  />
                  <span className="font-latin text-3xl font-bold text-accent">
                    {m.suffix}
                  </span>
                </div>
                <span className="font-latin mt-2 block text-sm font-medium text-white/40">
                  {m.unit}
                </span>

                {/* Enhanced progress bar */}
                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`stat-bar h-full rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-lg shadow-accent/50 ${
                      visible ? "is-visible" : ""
                    }`}
                    style={{ width: `${m.barPct}%` }}
                  />
                </div>

                <p className="mt-5 text-sm font-medium leading-snug text-white/70">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary metrics - Bento box style */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6">
          {/* Large featured metric */}
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-10 backdrop-blur-sm sm:col-span-3 lg:col-span-2">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-accent/30 blur-3xl" />
            <p className="font-latin relative text-6xl font-bold tracking-tight text-white lg:text-7xl">
              <CountUp end={1000} suffix="" />
            </p>
            <p className="font-latin relative mt-2 text-2xl font-bold text-accent">億円</p>
            <p className="relative mt-4 text-sm font-medium text-white/70">累計資産規模</p>
          </div>

          {/* Two smaller metrics */}
          <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/10 sm:col-span-3 lg:col-span-2">
            <p className="font-latin text-5xl font-bold text-white lg:text-6xl">
              <CountUp end={6} />
            </p>
            <p className="font-latin mt-2 text-xl font-semibold text-accent">拠点</p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              東京・福岡・上海・北京・香港・シンガポール
            </p>
          </div>

          <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/10 sm:col-span-6 lg:col-span-2">
            <p className="font-latin text-5xl font-bold text-white lg:text-6xl">
              <CountUp end={3} />
            </p>
            <p className="font-latin mt-2 text-xl font-semibold text-accent">言語</p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              日本語・中国語・英語で対応
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

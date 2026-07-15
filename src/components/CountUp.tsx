"use client";

import { useEffect, useRef } from "react";

type Props = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function CountUp({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let frameId: number | null = null;

    const renderValue = (value: number) => {
      el.textContent = `${prefix}${value.toLocaleString("en-US")}${suffix}`;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (prefersReduced) {
            renderValue(end);
            io.disconnect();
            return;
          }
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            renderValue(Math.round(end * eased));
            if (p < 1) frameId = requestAnimationFrame(tick);
          };
          frameId = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [end, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

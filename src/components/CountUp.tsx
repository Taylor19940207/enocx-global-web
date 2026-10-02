"use client";

import { useEffect, useRef } from "react";

type Props = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const format = (value: number, prefix: string, suffix: string) =>
  `${prefix}${value.toLocaleString("en-US")}${suffix}`;

/**
 * A figure that counts up when it scrolls into view.
 *
 * The rendered number is the real one, so the HTML carries it: a crawler that
 * skips scripts, a summary built from the markup, a visitor without JavaScript
 * and anyone on reduced motion all read 500, not 0. Counting up therefore has
 * to begin by replacing a number that is already on the page, which is only
 * honest while nobody can see it — so the figure is zeroed solely on the
 * observer's first report, and solely if that report says it is off screen.
 * Arriving with the section already in view (a #numbers link, a restored
 * scroll position) leaves the real figure alone rather than flashing it away.
 */
export default function CountUp({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let zeroed = false;
    let frameId: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!zeroed) {
          // First report. Any part of the figure on screen means the visitor
          // can already read it, so it stays as rendered.
          if (entry.intersectionRatio > 0) {
            io.disconnect();
            return;
          }
          el.textContent = format(0, prefix, suffix);
          zeroed = true;
          return;
        }
        if (entry.intersectionRatio < 0.4) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // easeOutExpo
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = format(Math.round(end * eased), prefix, suffix);
          if (p < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
      },
      { threshold: [0, 0.4] }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (frameId !== null) cancelAnimationFrame(frameId);
      // Whatever interrupted the count, the element is left showing the figure
      // it would have reached.
      el.textContent = format(end, prefix, suffix);
    };
  }, [end, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {format(end, prefix, suffix)}
    </span>
  );
}

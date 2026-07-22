"use client";

import { useEffect, useRef } from "react";

// The corridor SVG uses viewBox 0 0 1440 810 with preserveAspectRatio="xMidYMid slice",
// so it crops rather than stretches to cover the section. The HTML labels are positioned
// in viewBox-space via CSS custom properties computed here, so they track their SVG dots
// exactly regardless of the section's actual aspect ratio (which varies with viewport
// height and cannot be fixed the way a static aspect-ratio box could).
const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 810;

export default function HeroCorridorScene({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const scale = Math.max(w / VIEWBOX_WIDTH, h / VIEWBOX_HEIGHT);
      const offsetX = (w - VIEWBOX_WIDTH * scale) / 2;
      const offsetY = (h - VIEWBOX_HEIGHT * scale) / 2;
      el.style.setProperty("--hero-scale", String(scale));
      el.style.setProperty("--hero-offset-x", `${offsetX}px`);
      el.style.setProperty("--hero-offset-y", `${offsetY}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={`hero-scene ${className}`} aria-hidden>
      {children}
    </div>
  );
}

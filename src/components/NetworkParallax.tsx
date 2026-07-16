"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function NetworkParallax({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene = el.closest("section") ?? el;
    let raf = 0;
    const set = (x: string, y: string) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", x);
        el.style.setProperty("--py", y);
      });
    };
    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect();
      set(
        (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3),
        (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3)
      );
    };
    const onLeave = () => set("0", "0");
    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`network-parallax ${className}`}>
      {children}
    </div>
  );
}

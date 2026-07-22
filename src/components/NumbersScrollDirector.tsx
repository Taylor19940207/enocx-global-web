"use client";

import { useEffect } from "react";

export default function NumbersScrollDirector() {
  useEffect(() => {
    const section = document.getElementById("numbers");
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const cells = Array.from(section.querySelectorAll<HTMLElement>("[data-metric-cell]"));
      const context = gsap.context(() => {
        gsap.fromTo(
          ".numbers-route-entry",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              end: "top 28%",
              scrub: 0.8,
            },
          },
        );

        cells.forEach((cell, index) => {
          gsap.fromTo(
            cell,
            {
              y: index < 4 ? 72 + index * 10 : 42,
              opacity: 0.18,
              rotateX: index < 4 ? 8 : 4,
              transformOrigin: "50% 100%",
            },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: `top ${92 - Math.min(index, 4) * 5}%`,
                end: `top ${43 - Math.min(index, 4) * 3}%`,
                scrub: 0.85,
              },
            },
          );
        });
      }, section);

      cleanup = () => context.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}

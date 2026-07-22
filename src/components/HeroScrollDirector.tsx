"use client";

import { useEffect } from "react";

export default function HeroScrollDirector() {
  useEffect(() => {
    const section = document.getElementById("top");
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
      const context = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });

        timeline
          .to(".hero-copy", { yPercent: -15, opacity: 0.28 }, 0)
          .to(".hero-scene", { scale: 1.09, xPercent: -2.5, opacity: 0.76 }, 0)
          .to(".hero-mobile-route", { scale: 1.08, yPercent: -4, opacity: 0.7 }, 0)
          .to(".hero-scrim", { opacity: 0.55 }, 0)
          .fromTo(
            ".hero-handoff-path",
            { strokeDashoffset: 1, opacity: 0 },
            { strokeDashoffset: 0, opacity: 0.9, duration: 0.68 },
            0.2,
          )
          .fromTo(
            ".hero-handoff-node",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.2, transformOrigin: "center" },
            0.78,
          );
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

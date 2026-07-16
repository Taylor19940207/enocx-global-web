"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  return <Overlay key={pathname} />;
}

function Overlay() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      aria-hidden
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target) setVisible(false);
      }}
      className="page-transition pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
    >
      <div className="relative w-[min(72vw,520px)]">
        <div className="mb-5 flex items-end justify-between">
          <span className="font-latin text-sm font-bold tracking-[0.2em] text-white">EnocX</span>
          <span className="font-latin text-[9px] uppercase tracking-[0.24em] text-white/45">Cross-border advisory</span>
        </div>
        <div className="relative h-px overflow-hidden bg-white/15">
          <span className="page-transition-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        <div className="mt-4 flex justify-between font-latin text-[9px] tracking-[0.18em] text-white/45">
          <span>TOKYO</span>
          <span>SHANGHAI</span>
          <span>ASIA</span>
        </div>
      </div>
    </div>
  );
}

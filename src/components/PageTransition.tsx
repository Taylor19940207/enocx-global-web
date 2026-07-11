"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  // Remounts Overlay on every route change, replaying its enter/fade animation.
  return <Overlay key={pathname} />;
}

function Overlay() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      onAnimationEnd={() => setVisible(false)}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-ink/95 backdrop-blur-md animate-fadeOut"
    >
      <div className="relative h-40 w-40">
        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-2xl animate-pulse" />

        {/* Breathing particles - larger and more refined */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `breathe 2s ease-in-out infinite`,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            <div
              className="h-4 w-4 rounded-full bg-gradient-to-br from-accent to-mist shadow-lg shadow-accent/50"
              style={{
                opacity: 0.9 - i * 0.08,
              }}
            />
          </div>
        ))}

        {/* Outer ring particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40"
            style={{
              animation: `orbit 3s linear infinite`,
              animationDelay: `${i * 0.08}s`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.9;
          }
          50% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0.1;
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(60px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) translateX(60px) scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(60px) scale(1);
            opacity: 0.6;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fadeOut {
          animation: fadeOut 800ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}

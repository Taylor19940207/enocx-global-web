"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
  const isHome = currentPath === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting || entry.intersectionRatio < 0.99),
      { threshold: [0.99] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  // Solid header everywhere except the top of the home page (which has a dark hero).
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        solid
          ? "bg-paper/90 backdrop-blur-md border-b border-mist-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="relative block h-11 w-[9.5rem] shrink-0"
          aria-label="EnocX home"
        >
          <Image
            src="/media/ft-logo.png"
            alt=""
            width={1338}
            height={374}
            aria-hidden
            className={`absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transition-opacity duration-300 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
          <Image
            src="/media/top-logo.png"
            alt="EnocX"
            width={1338}
            height={374}
            className={`absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transition-opacity duration-300 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = currentPath === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center text-sm font-medium transition hover:opacity-60 ${
                  solid ? "text-ink" : "text-white"
                } ${active ? "opacity-100" : ""}`}
              >
                <span className={active ? "border-b-2 border-accent pb-1" : ""}>
                  {n.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            aria-current={currentPath === "/contact" ? "page" : undefined}
            className={`pressable hidden min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition md:inline-flex ${
              solid
                ? "bg-ink text-white hover:bg-slate-dark"
                : "bg-white text-ink hover:bg-mist"
            } ${currentPath === "/contact" ? "ring-2 ring-accent ring-offset-2" : ""}`}
          >
            相談する
          </Link>
          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              solid ? "text-ink hover:bg-mist-soft" : "text-white hover:bg-white/10"
            }`}
          >
            <div className="relative h-4 w-6" aria-hidden>
              <span
                className={`absolute left-0 top-1 block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-1 left-0 block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-mist-line bg-paper px-6 py-4 lg:hidden">
          <nav aria-label="モバイルナビゲーション" className="flex flex-col gap-4">
            {nav.map((n) => {
              const active = currentPath === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center border-l-2 pl-4 text-base transition-colors ${
                    active
                      ? "border-accent font-bold text-ink"
                      : "border-transparent font-medium text-slate hover:text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              aria-current={currentPath === "/contact" ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`pressable mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white ${
                currentPath === "/contact" ? "ring-2 ring-accent ring-offset-2" : ""
              }`}
            >
              相談する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

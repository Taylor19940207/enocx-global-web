"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid header everywhere except the top of the home page (which has a dark hero).
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-paper/90 backdrop-blur-md border-b border-mist-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="relative block h-10 w-[9.5rem] shrink-0"
          aria-label="EnocX home"
        >
          <Image
            src="/media/ft-logo.png"
            alt=""
            width={219}
            height={107}
            aria-hidden
            className={`absolute left-0 top-0 h-10 w-auto transition-opacity duration-300 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
          <Image
            src="/media/logo-w.svg"
            alt="EnocX"
            width={107}
            height={28}
            className={`absolute left-0 top-0 h-10 w-auto transition-opacity duration-300 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-medium transition hover:opacity-60 ${
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
          <div
            className={`font-latin hidden items-center gap-2 text-xs font-semibold tracking-wide sm:flex ${
              solid ? "text-slate" : "text-white/80"
            }`}
          >
            <span>JP</span>
            <span className="opacity-40">CN</span>
            <span className="opacity-40">EN</span>
          </div>
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition md:inline-block ${
              solid
                ? "bg-ink text-white hover:bg-slate-dark"
                : "bg-white text-ink hover:bg-mist"
            }`}
          >
            相談する
          </Link>
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${solid ? "text-ink" : "text-white"}`}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-mist-line bg-paper px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
            >
              相談する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

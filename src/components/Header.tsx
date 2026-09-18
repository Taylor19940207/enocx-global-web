"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getContent } from "@/lib/content";
import { cn } from "@/lib/cn";
import LocaleSwitcher from "./LocaleSwitcher";
import { defaultLocale, getDictionary, href, stripLocale, type Locale } from "@/lib/i18n";

export default function Header({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const { nav } = getContent(locale);
  const pathname = usePathname();
  // Compare against the locale-stripped path, so /en/about matches the /about
  // nav item; `startsWith` so a nested route (/cases/<slug>) still marks its
  // section active, which an exact match did not.
  const bare = stripLocale(pathname).replace(/\/$/, "") || "/";
  const currentPath = bare;
  const isCurrent = (target: string) =>
    currentPath === target || currentPath.startsWith(`${target}/`);
  const isHome = currentPath === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const hero = document.getElementById("hero-viewport") ?? document.getElementById("top");
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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        solid
          ? "bg-paper/90 backdrop-blur-md border-b border-mist-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 md:px-10">
        <Link
          href={href("/", locale)}
          className="relative block h-11 w-[9.5rem] shrink-0"
          aria-label="EnocX home"
        >
          <Image
            src="/media/ft-logo.png"
            alt=""
            width={1338}
            height={374}
            aria-hidden
            className={cn(
              "absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transition-opacity duration-300",
              solid ? "opacity-100" : "opacity-0"
            )}
            priority
          />
          <Image
            src="/media/top-logo.png"
            alt="EnocX"
            width={1338}
            height={374}
            className={cn(
              "absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transition-opacity duration-300",
              solid ? "opacity-0" : "opacity-100"
            )}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = isCurrent(n.href);
            return (
              <Link
                key={n.href}
                href={href(n.href, locale)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center text-sm font-medium transition hover:opacity-60",
                  solid ? "text-ink" : "text-white",
                  active && "opacity-100"
                )}
              >
                <span className={active ? "border-b-2 border-accent pb-1" : undefined}>
                  {n.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher
            locale={locale}
            invert={!solid}
            className="hidden md:flex"
          />
          <Link
            href={href("/contact", locale)}
            aria-current={isCurrent("/contact") ? "page" : undefined}
            className={cn(
              "pressable hidden min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition md:inline-flex",
              solid
                ? "bg-ink text-white hover:bg-slate-dark"
                : "bg-white text-ink hover:bg-mist",
              isCurrent("/contact") && "ring-2 ring-accent ring-offset-2"
            )}
          >
            {t.common.consult}
          </Link>
          <button
            type="button"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden",
              solid ? "text-ink hover:bg-mist-soft" : "text-white hover:bg-white/10"
            )}
          >
            <div className="relative h-4 w-6" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 top-1 block h-px w-6 bg-current transition-transform duration-300",
                  open && "translate-y-[5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-1 left-0 block h-px w-6 bg-current transition-transform duration-300",
                  open && "-translate-y-[5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-mist-line bg-paper px-6 py-4 lg:hidden">
          <nav aria-label={t.common.mobileNav} className="flex flex-col gap-4">
            {nav.map((n) => {
              const active = isCurrent(n.href);
              return (
                <Link
                  key={n.href}
                  href={href(n.href, locale)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center border-l-2 pl-4 text-base transition-colors",
                    active
                      ? "border-accent font-bold text-ink"
                      : "border-transparent font-medium text-slate hover:text-ink"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
            <LocaleSwitcher locale={locale} className="mt-2 pl-4" />
            <Link
              href={href("/contact", locale)}
              aria-current={isCurrent("/contact") ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "pressable mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white",
                isCurrent("/contact") && "ring-2 ring-accent ring-offset-2"
              )}
            >
              {t.common.consult}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

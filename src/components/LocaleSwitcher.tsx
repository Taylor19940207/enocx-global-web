"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { localeNames, localePath, locales, type Locale } from "@/lib/i18n";

/**
 * Switches to the same page in another locale, not to that locale's home page:
 * a reader who reaches the end of a case should stay on that case.
 *
 * Both locales publish identical slugs, so the mapping is `localePath()` on the
 * current pathname — there is no per-page table to keep in step. Rendered as a
 * row while two locales exist; a third would want a menu instead.
 */
export default function LocaleSwitcher({
  locale,
  className,
  invert = false,
}: {
  locale: Locale;
  className?: string;
  invert?: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className={cn("font-latin flex items-center gap-2 text-xs", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden className={invert ? "text-white/30" : "text-mist-line"}>
              /
            </span>
          )}
          {l === locale ? (
            <span
              aria-current="true"
              className={cn("font-semibold", invert ? "text-white" : "text-ink")}
            >
              {localeNames[l]}
            </span>
          ) : (
            <Link
              href={localePath(pathname, l)}
              hrefLang={l}
              className={cn(
                "min-h-11 transition-colors",
                invert ? "text-white/60 hover:text-white" : "text-slate hover:text-accent-600"
              )}
            >
              {localeNames[l]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

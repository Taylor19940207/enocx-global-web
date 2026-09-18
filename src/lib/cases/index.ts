import { defaultLocale, type Locale } from "@/lib/i18n";
import type { CaseStudy } from "./types";
import ja from "./ja";
import en from "./en";

/**
 * One file per case, per locale. Slugs are identical across locales so a page
 * maps to its counterpart by prefix alone.
 *
 * Figures live in the locale's own file rather than being formatted at render
 * time: 3.48億円 is 348 million yen, not 3.48 of anything, and 420万米ドル is
 * US$4.2 million. A shared numeral with a translated unit cannot express that.
 */
const bundles: Record<Locale, CaseStudy[]> = { ja, en };

export function getCaseStudies(locale: Locale = defaultLocale): CaseStudy[] {
  return bundles[locale];
}

export function getCaseStudy(slug: string, locale: Locale = defaultLocale) {
  return bundles[locale].find((c) => c.slug === slug);
}

/** Slugs are locale-independent, so static params come from the default. */
export const caseSlugs = bundles[defaultLocale].map((c) => c.slug);

export * from "./types";

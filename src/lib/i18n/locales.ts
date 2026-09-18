/**
 * Locale registry.
 *
 * Built for N locales rather than two: the client's own customers are largely
 * Chinese companies, so a third locale is likely. Adding one means adding a
 * dictionary and an entry here — no component changes.
 */

export const locales = ["ja", "en"] as const;

export type Locale = (typeof locales)[number];

/** Japanese occupies the root path; other locales are served under /<locale>. */
export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
};

/** `lang` attribute and Open Graph locale, which use different formats. */
export const localeTags: Record<Locale, { html: string; openGraph: string }> = {
  ja: { html: "ja", openGraph: "ja_JP" },
  en: { html: "en", openGraph: "en_US" },
};

/** Prefix for a locale's routes: "" for the default, "/en" otherwise. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/**
 * The same page in another locale. Both locales use identical slugs so this
 * stays a mechanical swap — no per-page mapping table to maintain.
 */
export function localePath(pathname: string, to: Locale): string {
  const bare = locales.reduce(
    (p, l) => (l === defaultLocale ? p : p.replace(new RegExp(`^/${l}(?=/|$)`), "")),
    pathname
  );
  const prefix = localePrefix(to);
  const path = bare === "" ? "/" : bare;
  return prefix === "" ? path : `${prefix}${path === "/" ? "" : path}`;
}

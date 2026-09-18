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

/** A pathname with any locale prefix removed: /en/about -> /about. */
export function stripLocale(pathname: string): string {
  return locales.reduce(
    (p, l) => (l === defaultLocale ? p : p.replace(new RegExp(`^/${l}(?=/|$)`), "")),
    pathname
  ) || "/";
}

/**
 * The same page in another locale. Both locales use identical slugs so this
 * stays a mechanical swap — no per-page mapping table to maintain.
 */
export function localePath(pathname: string, to: Locale): string {
  const bare = stripLocale(pathname);
  const prefix = localePrefix(to);
  const path = bare === "" ? "/" : bare;
  return prefix === "" ? path : `${prefix}${path === "/" ? "" : path}`;
}

/**
 * An in-site href for a locale. Written as `href("/contact", locale)` at every
 * link so a locale's pages never leak links into another locale's tree.
 */
export function href(path: string, locale: Locale): string {
  const prefix = localePrefix(locale);
  if (prefix === "") return path;
  return path === "/" ? prefix : `${prefix}${path}`;
}

/**
 * `alternates` metadata for a page: every locale pointing at its counterpart,
 * plus `x-default` on the default locale.
 *
 * Without these, search engines treat the two versions as unrelated pages and
 * may read them as duplicates rather than translations. Pass the path as the
 * default locale writes it (`/cases/foo`), not the prefixed one.
 */
export function alternates(path: string, locale: Locale) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = href(path, l);
  languages["x-default"] = href(path, defaultLocale);
  // Canonical is this page, not the default locale's: pointing a translation
  // at its source tells search engines to drop the translation.
  return { canonical: href(path, locale), languages };
}

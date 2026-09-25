/** Canonical origin. Shared by metadata, the sitemap and robots.txt. */
export const SITE_URL = "https://www.enocx.co.jp";

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
/**
 * `html` is the `lang` attribute; `openGraph` the og:locale.
 *
 * The English copy is written in British spelling throughout — labour,
 * finalised, licence, per cent — so the Open Graph locale says en_GB. It said
 * en_US while the copy said otherwise. The one exception is the official
 * English names of Japanese qualifications, which keep whatever spelling their
 * governing body publishes (Labor and Social Security Attorney); those are
 * names, not prose.
 */
export const localeTags: Record<Locale, { html: string; openGraph: string }> = {
  ja: { html: "ja", openGraph: "ja_JP" },
  en: { html: "en", openGraph: "en_GB" },
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

/**
 * The absolute URL a page is canonically served at.
 *
 * `trailingSlash: true` in `next.config.ts` means the canonical the page emits
 * ends in a slash. Next applies that to metadata but not to sitemap entries,
 * so without this the sitemap would list URLs that are not the canonical ones.
 */
export function canonicalUrl(path: string, locale: Locale): string {
  const p = href(path, locale);
  return SITE_URL + (p.endsWith("/") ? p : `${p}/`);
}

/** Shared card image. Without one, a link shared to LinkedIn or Slack renders
 *  as a bare text row. 1200x630 is the ratio every major platform crops to. */
export const OG_IMAGE = { url: "/media/og-default.jpg", width: 1200, height: 630 };

/**
 * Open Graph fields for a page.
 *
 * A page's `openGraph` replaces the layout's rather than merging into it, so
 * the image has to be repeated here — omitting it silently drops the card
 * image on every page that sets any Open Graph field of its own.
 */
export function openGraphFor(path: string, locale: Locale) {
  return {
    url: canonicalUrl(path, locale),
    locale: localeTags[locale].openGraph,
    alternateLocale: locales
      .filter((l) => l !== locale)
      .map((l) => localeTags[l].openGraph),
    images: [OG_IMAGE],
  };
}

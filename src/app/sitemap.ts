import type { MetadataRoute } from "next";
import { caseSlugs } from "@/lib/cases";
import { canonicalUrl, defaultLocale, locales } from "@/lib/i18n";

/**
 * Paths as the default locale writes them; every other locale is derived.
 *
 * `lastModified` is deliberately absent. A static export has no per-page
 * modification date, and stamping the build time would tell crawlers every
 * page changed on every deploy.
 */
const paths = [
  "/",
  "/about",
  "/services",
  "/market-entry",
  "/cases",
  ...caseSlugs.map((slug) => `/cases/${slug}`),
  "/people",
  "/company",
  "/career",
  "/contact",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    // The hreflang annotations Google reads from a sitemap: each entry lists
    // every locale, so the set is reciprocal whichever URL is crawled first.
    const languages = Object.fromEntries(
      locales.map((l) => [l, canonicalUrl(path, l)])
    );
    languages["x-default"] = canonicalUrl(path, defaultLocale);

    return locales.map((locale) => ({
      url: canonicalUrl(path, locale),
      alternates: { languages },
      priority: path === "/" ? 1 : 0.7,
    }));
  });
}

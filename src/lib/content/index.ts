import en from "./en";
import ja from "./ja";
import { defaultLocale, type Locale } from "@/lib/i18n";

/**
 * Business content per locale. Kept apart from `@/lib/i18n`, which holds UI
 * copy: this is the client's own material and the larger body of text.
 */
export type Content = typeof ja;

const bundles: Record<Locale, Content> = { ja, en };

export function getContent(locale: Locale = defaultLocale): Content {
  return bundles[locale];
}

export * from "./types";

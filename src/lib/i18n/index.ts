import ja from "./ja";
import { defaultLocale, type Locale } from "./locales";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  ja,
  // Until an English dictionary exists, /en is not built and this falls back to
  // Japanese rather than rendering empty strings.
  en: ja,
};

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export * from "./locales";
export type { Dictionary, LinePlan, WrapUnits } from "./types";

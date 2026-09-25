import en from "./en";
import ja from "./ja";
import { defaultLocale, type Locale } from "./locales";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export * from "./locales";
export type { Dictionary, LinePlan, WrapUnits } from "./types";

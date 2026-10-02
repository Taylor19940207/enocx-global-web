import type ja from "./ja";

/**
 * The dictionary shape is inferred from the Japanese one, so a new locale that
 * omits a key fails to compile rather than falling back silently at runtime.
 */
export type Dictionary = typeof ja;

/**
 * A manual per-breakpoint line plan.
 *
 * Japanese has no spaces, so display headings are broken by hand at 文節
 * boundaries (CONTRACT §9). Locales that wrap on spaces omit this entirely —
 * feeding English through a plan would break it at the plan's boundaries
 * rather than where the words allow.
 */
export type LinePlan = { mobile: string[]; desktop: string[] };

/**
 * A headline figure, with the number itself in the dictionary.
 *
 * The number belongs to the locale, not to the layout: 1,000億円 and 100
 * billion yen are the same sum written in each language's own unit, so a
 * shared figure with a translated unit would state one of them wrongly.
 */
export type Metric = {
  figure: number;
  suffix?: string;
  unit: string;
  label: string;
};

/** Semantic wrap units: a line break may only fall between units. */
export type WrapUnits = string[];

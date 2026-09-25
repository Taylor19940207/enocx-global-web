/**
 * Case-study schema.
 *
 * Every beat below the identity block is optional: cases arrive at very
 * different depths (a nine-month acquisition has a full timeline, a filing
 * engagement may have four nodes and no metric band), and a missing beat must
 * drop out of the page rather than render an empty frame.
 *
 * `titleLines` carries a manual per-breakpoint line plan (CONTRACT §9, which
 * caps h1 at 2 lines from 1024px and 3 at 390px, with no particle-initial
 * line). It is optional because it is a property of the language rather than
 * of the layout: Japanese has no spaces and breaks display headings by hand,
 * while a locale that wraps on spaces must omit it. `scripts/qa-case-routes.mjs`
 * measures the rendered line count, so an omission where one is needed fails
 * the check rather than passing silently.
 */

/**
 * The eyebrow is English on both sides — it is set in Latin type as a label,
 * the way the rest of the site's eyebrows are. Only the prose label, used in
 * breadcrumbs and in the case navigation, is translated.
 */
export const caseCategoryKeys = [
  "real-estate-odi",
  "company-formation",
  "licensing",
  "hr-tax",
  "tax-filing",
] as const;

export type CaseCategoryKey = (typeof caseCategoryKeys)[number];

export const caseCategoryEyebrows: Record<CaseCategoryKey, string> = {
  "real-estate-odi": "Real Estate / ODI",
  "company-formation": "Company Formation",
  licensing: "Licensing / Compliance",
  "hr-tax": "HR & Tax",
  "tax-filing": "Tax Filing",
};

export type CaseCategoryLabels = Record<CaseCategoryKey, string>;

/** Per-breakpoint line plan for the case title (CONTRACT §9). */
export type CaseTitleLines = {
  /** 3 lines max at 390px. */
  mobile: string[];
  /** 2 lines max from 1024px. */
  desktop: string[];
};

/** Heading + optional semantic wrap units and lead, carried per case. */
export type CaseSectionCopy = {
  heading: string;
  /** Semantic wrap units: line breaks may only occur between units. */
  headingUnits?: string[];
  lead?: string;
};

export type CaseProfileRow = { k: string; v: string };
export type CaseMetric = { value: string; unit: string; label: string };
export type CaseChallenge = { title: string; desc: string };
export type CaseSolution = {
  no: string;
  title: string;
  desc: string;
  points: string[];
};
export type CaseTimelineEntry = { date: string; title: string; desc: string };
export type CaseResult = { title: string; desc: string };

type CaseSection<T> = CaseSectionCopy & { items: T[] };

export type CaseStudy = {
  slug: string;
  category: CaseCategoryKey;
  title: string;
  titleLines?: CaseTitleLines;
  /** Widens the desktop measure for titles whose planned lines run long. */
  longTitle?: boolean;
  lead: string;
  /** Anonymised or consented client designation — never a natural person. */
  clientLabel: string;
  /** Publication basis. Required: the repository is public. */
  disclosure: string;
  /** Falls back to the category label when omitted. */
  metaTitle?: string;
  metaDescription: string;

  /* Optional beats, in page order. */
  profile?: CaseProfileRow[];
  metrics?: CaseMetric[];
  challenges?: CaseSection<CaseChallenge>;
  solutions?: CaseSection<CaseSolution>;
  timeline?: CaseSection<CaseTimelineEntry>;
  results?: CaseSection<CaseResult>;
  highlights?: CaseSection<string>;
};

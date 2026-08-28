/**
 * Case-study schema.
 *
 * Every beat below the identity block is optional: cases arrive at very
 * different depths (a nine-month acquisition has a full timeline, a filing
 * engagement may have four nodes and no metric band), and a missing beat must
 * drop out of the page rather than render an empty frame.
 *
 * `titleLines` is required on purpose — CONTRACT §9 caps h1 at 2 lines from
 * 1024px and 3 lines at 390px with no particle-initial line, so every new case
 * has to ship its own line plan. Making it required means TypeScript, not a
 * later rendered audit, is what catches an omission.
 */

export const caseCategories = {
  "real-estate-odi": { eyebrow: "Real Estate / ODI", label: "不動産・ODI" },
  "company-formation": { eyebrow: "Company Formation", label: "会社設立・進出" },
  licensing: { eyebrow: "Licensing / Compliance", label: "許認可・法令対応" },
  "hr-tax": { eyebrow: "HR & Tax", label: "人事・税務" },
  "tax-filing": { eyebrow: "Tax Filing", label: "税務申告" },
} as const;

export type CaseCategoryKey = keyof typeof caseCategories;

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
  titleLines: CaseTitleLines;
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

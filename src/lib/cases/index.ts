import type { CaseStudy } from "./types";
import chemicalTokyoOffice from "./chemical-tokyo-office";
import dreameJapanEntry from "./dreame-japan-entry";
import fjdMetiNotification from "./fjd-meti-notification";
import sigenergyHrTax from "./sigenergy-hr-tax";
import ulanziPayrollWithholding from "./ulanzi-payroll-withholding";

/**
 * One file per case. Add the import here and the route, the index listing and
 * the static params all follow — nothing else needs touching.
 *
 * Order is publication order: the list renders top to bottom as written.
 */
export const caseStudies: CaseStudy[] = [
  chemicalTokyoOffice,
  dreameJapanEntry,
  fjdMetiNotification,
  sigenergyHrTax,
  ulanziPayrollWithholding,
];

export const caseSlugs = caseStudies.map((c) => c.slug);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export * from "./types";

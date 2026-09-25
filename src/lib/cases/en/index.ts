import type { CaseStudy } from "../types";
import chemicalTokyoOffice from "./chemical-tokyo-office";
import smartApplianceJapanEntry from "./smart-appliance-japan-entry";
import electronicsImportNotification from "./electronics-import-notification";
import energyStorageHrTax from "./energy-storage-hr-tax";
import imagingGearPayrollWithholding from "./imaging-gear-payroll-withholding";

/** Same order and the same slugs as the Japanese bundle. */
const cases: CaseStudy[] = [
  chemicalTokyoOffice,
  smartApplianceJapanEntry,
  electronicsImportNotification,
  energyStorageHrTax,
  imagingGearPayrollWithholding,
];

export default cases;

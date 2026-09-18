import type { CaseStudy } from "../types";

/**
 * Withholding tax in Japan has no tax return: the employer submits a payment
 * statement and remits. The English avoids "filed a return" for that reason,
 * as the Japanese avoids 申告.
 */
const caseStudy: CaseStudy = {
  slug: "imaging-gear-payroll-withholding",
  category: "hr-tax",
  title: "Checking the payroll before paying the withholding tax",
  titleLines: undefined,
  longTitle: true,
  lead: "The Japanese sales subsidiary of a Chinese manufacturer. Taking on HR and tax meant first checking and correcting the May and June payroll against each scheme in turn, then completing the withholding tax payment for January to June 2026 within the statutory deadline, under the special provision for semi-annual payment.",
  clientLabel: "The Japanese entity of an imaging equipment manufacturer",
  disclosure:
    "Published without the client's name at their request. The figures and dates shown are published with their permission.",
  metaTitle: "Payroll review and withholding tax payment",
  metaDescription:
    "How taking on HR and tax for a Japanese subsidiary began with checking and correcting the payroll scheme by scheme, and completed the withholding tax payment for the first half of 2026 within the statutory deadline.",
  profile: [
    { k: "Sector", v: "Sale of imaging equipment and smart devices" },
    { k: "Business in Japan", v: "Market operations, channel development and local sales" },
    {
      k: "Scope",
      v: "Reviewing payroll calculations and proposing corrections; submitting the withholding tax payment statement and remitting the tax",
    },
    {
      k: "Period",
      v: "May and June 2026 payroll; withholding tax for January to June 2026 under the special provision",
    },
  ],
  metrics: [
    { value: "2", unit: "months", label: "Of payroll reviewed and finalised" },
    { value: "4", unit: "schemes", label: "Recalculated on their own separate bases" },
    { value: "58", unit: "days", label: "From instruction to the payment being made" },
  ],
  challenges: {
    heading: "Settle the payroll before anything else",
    headingUnits: undefined,
    lead: "The withholding tax calculation rests on the payroll figures, so the order cannot be reversed.",
    items: [
      {
        title: "What the calculation is based on",
        desc: "Health insurance and employees' pension contributions are calculated not from what is actually paid but from the standard monthly remuneration on the determination notice issued by the pension office. Taking the work on meant checking, case by case, which document each figure had come from.",
      },
      {
        title: "Four schemes, four sets of rules",
        desc: "Withholding income tax, health insurance, employees' pension and employment insurance each rest on a different basis and change their rates at different times. One calculation cannot carry all four.",
      },
      {
        title: "Two months to close at once",
        desc: "The payment covers both May and June, so both months had to be corrected and signed off by the client before it could be made.",
      },
    ],
  },
  solutions: {
    heading: "Separate by scheme, close by month",
    headingUnits: undefined,
    lead: "How finely to check, and what to close at a time. We settled those two things first.",
    items: [
      {
        no: "01",
        title: "A checklist per scheme",
        desc: "Payroll items were separated by scheme and checked against the document each one rests on and the rate applying this year.",
        points: [
          "Social insurance checked against the standard monthly remuneration determination notice",
          "Deductions applicable this year confirmed as correctly applied",
          "Employment insurance recalculated at this year's rate",
          "Findings kept as an itemised list, to serve as the basis for later months",
        ],
      },
      {
        no: "02",
        title: "Closing month by month",
        desc: "Collect, check, raise, correct, confirm — run through once per month, so nothing was left to be checked in bulk just before payment.",
        points: [
          "Payroll collected monthly and checked within the same month",
          "The reasoning behind each correction explained, then reworked on the client's side",
          "The month closed once the final version was received",
          "Both months reconciled again before the payment statement was prepared",
        ],
      },
    ],
  },
  timeline: {
    heading: "About two months from instruction to payment",
    headingUnits: undefined,
    lead: "Closing the payroll month by month is what made the statutory deadline reachable.",
    items: [
      {
        date: "12 May 2026",
        title: "HR and tax engagement begins",
        desc: "Monthly payroll review and the first-half withholding tax payment taken on.",
      },
      {
        date: "4 June 2026",
        title: "May payroll reviewed",
        desc: "Items needing confirmation identified, on both the basis of calculation and the rates applied.",
      },
      {
        date: "5–7 June 2026",
        title: "Corrections to May shared",
        desc: "The reasoning and the basis for each figure explained, and a standard set for how payslips are produced.",
      },
      {
        date: "8 June 2026",
        title: "May closed",
        desc: "Final version received and the May payroll settled.",
      },
      {
        date: "5–7 July 2026",
        title: "June reviewed and corrected",
        desc: "The standard set in May applied, with support through producing the June payroll.",
      },
      {
        date: "8 July 2026",
        title: "June closed",
        desc: "Both months now complete, and the payment ready to prepare.",
      },
      {
        date: "9 July 2026",
        title: "Payment statement submitted and tax paid",
        desc: "The withholding tax payment statement for January to June 2026 submitted, and the tax remitted on the client's behalf.",
      },
    ],
  },
  results: {
    heading: "On time, on figures that hold",
    headingUnits: undefined,
    items: [
      {
        title: "The payroll settled",
        desc: "The basis of calculation and the rates applied were checked for May and June, producing a confirmed set of payroll figures the tax work could rest on.",
      },
      {
        title: "Paid within the deadline",
        desc: "On those figures, the withholding tax payment statement for January to June 2026 was submitted and the tax remitted within the statutory deadline.",
      },
      {
        title: "A standard for the months that follow",
        desc: "Setting out the source document, rate and treatment for each scheme means the same questions do not have to be asked again.",
      },
    ],
  },
  highlights: {
    heading: "Withholding tax is only as good as the payroll",
    headingUnits: undefined,
    items: [
      "Because the withholding calculation rests on payroll figures, going back to the basis of each one at the start of an engagement is what makes the deadline reachable.",
      "Withholding income tax, health insurance, employees' pension and employment insurance differ in both their basis and when their rates change. Splitting the checklist by scheme is the practical way to stop something being missed.",
      "Close the payroll monthly and the paperwork will not pile up before a half-year or year-end deadline.",
    ],
  },
};

export default caseStudy;

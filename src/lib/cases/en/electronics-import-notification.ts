import type { CaseStudy } from "../types";

const caseStudy: CaseStudy = {
  slug: "electronics-import-notification",
  category: "licensing",
  title: "Notification of business for seven electrical products, through to the amendments",
  titleLines: undefined,
  longTitle: true,
  lead: "Compliance with the Electrical Appliance and Material Safety Act (PSE) for chargers and lithium-ion batteries sold through cross-border e-commerce. From recovering access to the filing system, through preparing the product documentation and filing with METI, to reconciling the records held by customs — completed in about two and a half months.",
  clientLabel: "An importer and distributor of electrical products",
  disclosure:
    "Published without the client's name at their request. The dates and quantities shown are published with their permission.",
  metaTitle: "Notification of business for imported electrical products",
  metaDescription:
    "How an importer selling chargers and lithium-ion batteries through cross-border e-commerce met the Electrical Appliance and Material Safety Act (PSE) — from recovering access to the filing system through documentation, filing, amendments and reconciliation with customs records.",
  profile: [
    { k: "Sector", v: "Import and distribution of electrical products" },
    { k: "Channel", v: "Cross-border e-commerce" },
    { k: "Products", v: "Seven charger and lithium-ion battery products" },
    {
      k: "Regulation",
      v: "Notification of business under the Electrical Appliance and Material Safety Act (PSE)",
    },
    {
      k: "Scope",
      v: "Recovering system access, preparing product documentation, filing, responding to amendments, reconciling customs records",
    },
  ],
  metrics: [
    { value: "7", unit: "products", label: "Notifications completed" },
    { value: "2.5", unit: "months", label: "From instruction to the last product cleared" },
  ],
  challenges: {
    heading: "What had stalled was not the products",
    headingUnits: undefined,
    lead: "Every issue found at the outset bore directly on importing and selling later.",
    items: [
      {
        title: "No access to the filing system",
        desc: "The SMS verification the account had used was no longer available, and until the verification method was changed there was no way to file at all.",
      },
      {
        title: "Product documentation that did not line up",
        desc: "Across the seven products, some specifications were stated unclearly and some classifications needed confirming, so nothing could be submitted as a batch.",
      },
      {
        title: "A gap between the filing and customs records",
        desc: "Late in the work it emerged that the information already registered with customs differed from what was being filed. Left alone, it would have caught up with the goods at import.",
      },
    ],
  },
  solutions: {
    heading: "Turn the waiting into working time",
    headingUnits: undefined,
    lead: "Recovering the account and preparing the documentation ran side by side, so the stoppage was as short as it could be.",
    items: [
      {
        no: "01",
        title: "Documentation prepared while the account was restored",
        desc: "The product documentation was finished while the change of verification method was still with the authority, so filing could begin the day access came back.",
        points: [
          "Preparing and submitting the change of verification method",
          "Using the waiting period for the product documentation",
          "Filing from the day access was restored",
        ],
      },
      {
        no: "02",
        title: "A per-product list, submitted in batches",
        desc: "Rather than treating the seven as one submission, we listed what each product needed and filed them as they were settled — so one product coming back did not hold up the rest.",
        points: [
          "Model, specification and classification checked product by product",
          "Open points listed and worked through with the client one at a time",
          "Amendments made per product in response to the review",
          "Filing content reconciled against the customs records and corrected",
        ],
      },
    ],
  },
  timeline: {
    heading: "About two and a half months from instruction",
    headingUnits: undefined,
    lead: "Work continued while the account was out of use, and each point raised in review was answered as it came.",
    items: [
      {
        date: "29 May 2025",
        title: "Instructed",
        desc: "Work begins on the filing requirements and what the seven products need.",
      },
      {
        date: "8 June 2025",
        title: "First set of product documents received",
        desc: "Moving to verification of the product data and preparation for filing.",
      },
      {
        date: "12 June 2025",
        title: "Change of verification method begun",
        desc: "Confirmed that the existing SMS verification was no longer usable.",
      },
      {
        date: "23 June 2025",
        title: "Change application submitted",
        desc: "Documents prepared and lodged, then with the authority for review.",
      },
      {
        date: "13 July 2025",
        title: "Access restored",
        desc: "Filing conditions recovered and entry of the seven products begins.",
      },
      {
        date: "14 July 2025",
        title: "First review comments answered",
        desc: "Three products checked, amended and resubmitted.",
      },
      {
        date: "20 July 2025",
        title: "Remaining four products completed",
        desc: "All seven now at the re-checking stage.",
      },
      {
        date: "31 July 2025",
        title: "Customs record differences taken up",
        desc: "Reconciliation begins between the registered information and the filings.",
      },
      {
        date: "10 August 2025",
        title: "All seven completed",
        desc: "Data reconciled and every product's procedure closed out.",
      },
    ],
  },
  results: {
    heading: "The ground for importing and selling",
    headingUnits: undefined,
    items: [
      {
        title: "All seven products notified",
        desc: "Notification and the related record-keeping completed for all seven charger and lithium-ion battery products.",
      },
      {
        title: "Filings and customs records agree",
        desc: "What was filed and what is used at import now match, so the difference cannot hold anything up downstream.",
      },
    ],
  },
  highlights: {
    heading: "It stalls in the same place every time",
    headingUnits: undefined,
    items: [
      "On electrical product notifications, what stops the work is more often the filing account and the consistency of the paperwork than anything about the product.",
      "Breaking the seven products into a per-product list, rather than one submission, meant a single product coming back never held up the others.",
      "Reconciling the filing against the customs records is cheaper inside the filing work than it is just before the goods arrive.",
    ],
  },
};

export default caseStudy;

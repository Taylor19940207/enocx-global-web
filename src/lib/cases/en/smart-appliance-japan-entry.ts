import type { CaseStudy } from "../types";

const caseStudy: CaseStudy = {
  slug: "smart-appliance-japan-entry",
  category: "company-formation",
  title: "A smart appliance brand's Japanese entity, from registration to a bank account",
  titleLines: undefined,
  longTitle: true,
  lead: "A wholly owned Japanese subsidiary for a major Chinese smart appliance manufacturer. An office in Minato-ku that the business actually works from, a corporate bank account and the tax framework were set up as one piece of work, giving the brand a base to sell and operate from in Japan.",
  clientLabel: "A major Chinese smart appliance manufacturer",
  disclosure:
    "Published without the client's name at their request. The figures and dates shown are published with their permission.",
  metaTitle: "Japanese subsidiary for a smart appliance manufacturer",
  metaDescription:
    "How a major Chinese smart appliance manufacturer established a wholly owned Japanese subsidiary — securing premises in Minato-ku, Tokyo, opening a corporate bank account and building the tax framework.",
  profile: [
    { k: "Sector", v: "Smart home and cleaning appliances, development and manufacturing (China)" },
    { k: "Japanese entity", v: "Established as a wholly owned subsidiary" },
    { k: "Location", v: "Minato-ku, Tokyo" },
    { k: "Capital", v: "¥10 million" },
    {
      k: "Business",
      v: "Sale of smart cleaning and smart home products in Japan, brand operations, channel development and after-sales service",
    },
  ],
  metrics: [
    { value: "10", unit: "million yen", label: "Capital of the Japanese entity" },
    { value: "6", unit: "months", label: "From registration to the bank account opening" },
    { value: "7", unit: "areas", label: "Covered, from formation through to running the business" },
  ],
  challenges: {
    heading: "Registration is not the same as being open for business",
    headingUnits: undefined,
    lead: "A newly formed foreign-owned company selling appliances faced four obstacles, before and after incorporation.",
    items: [
      {
        title: "What the premises had to prove",
        desc: "A company importing appliances and smart devices is asked to show that its address and its stated business are real. An address shared with a home, or a virtual office, will not carry the procedures that follow.",
      },
      {
        title: "Opening an account with no track record",
        desc: "A new company with no trading history in Japan faces a long bank review, and any gap in the paperwork is enough to stop it.",
      },
      {
        title: "Consistency with the group's own standards",
        desc: "The articles of incorporation, the stated business purpose and the operating model all had to satisfy both the parent group's standards and Japanese corporate and registration practice.",
      },
      {
        title: "Evidence that the business is real",
        desc: "Completing the registration is not the start of trading. Without premises, money moving, a business plan and trading documents behind it, later bank reviews and administrative procedures are affected.",
      },
    ],
  },
  solutions: {
    heading: "Build the substance first, then put it through the process",
    headingUnits: undefined,
    lead: "Not the other way around. That was the whole design of this engagement.",
    items: [
      {
        no: "01",
        title: "Premises that demonstrate a real business",
        desc: "Offices in Minato-ku were narrowed down by whether they could be used for the stated appliance and trading business, then taken through to a signed lease.",
        points: [
          "Shortlisting on the fit between location and stated business purpose",
          "Checking the lease form against commercial registration and the reviews that follow",
          "Space that would take resident staff when they arrived",
        ],
      },
      {
        no: "02",
        title: "A file the bank's review could not fault",
        desc: "We worked out in advance what the review would ask, kept the paper trail for the capital intact, and went into the interview with it.",
        points: [
          "Background on the parent company and its beneficial owners",
          "The Japanese entity's business model and where the money comes from",
          "A complete record from remittance of the capital to its arrival",
          "Evidence that the office exists and is in use",
        ],
      },
      {
        no: "03",
        title: "The corporate and tax framework",
        desc: "With the articles and business purpose aligned to Japanese practice, the tax filings that fall due immediately after incorporation were prepared in parallel.",
        points: [
          "Articles, business purpose and operating model aligned",
          "Tax registrations, with bookkeeping and year-end close designed around them",
          "Consumption tax filing and withholding tax payment in place",
        ],
      },
    ],
  },
  timeline: {
    heading: "From incorporation to a company that can trade",
    headingUnits: undefined,
    lead: "Registration was treated as the midpoint, not the finish, and the account and tax framework followed without a break.",
    items: [
      {
        date: "Project start",
        title: "Requirements confirmed and an entry plan set",
        desc: "Document review, fit of the stated business purpose, and what the premises would have to satisfy.",
      },
      {
        date: "Preparation",
        title: "Premises shortlisted, incorporation papers prepared",
        desc: "Several rounds of narrowing candidate offices, with the incorporation documents translated and notarised.",
      },
      {
        date: "June 2021",
        title: "Incorporation registered",
        desc: "Company registration completed and the capital paid in.",
      },
      {
        date: "Premises secured",
        title: "Office in Minato-ku signed",
        desc: "A working base the company operates from.",
      },
      {
        date: "December 2021",
        title: "Corporate bank account opened",
        desc: "With a major Japanese bank, giving the company its own settlement route.",
      },
      {
        date: "Framework",
        title: "Commercial registration and tax set up",
        desc: "Tax registrations filed, consumption tax and withholding tax processes established, and the company ready to run.",
      },
    ],
  },
  results: {
    heading: "A company that can sell",
    headingUnits: undefined,
    lead: "The finish line was not incorporation but a business able to operate in Japan.",
    items: [
      {
        title: "A base to trade from",
        desc: "The company can now sell smart home products in Japan, run the brand, develop channels and handle after-sales service in its own name.",
      },
      {
        title: "Real premises",
        desc: "A working office in Minato-ku, Tokyo. That the address exists and is in use became the basis for everything that followed.",
      },
      {
        title: "Its own settlement route",
        desc: "With the account open, money moves between parent and subsidiary, and domestic transactions settle, without going through anyone else.",
      },
      {
        title: "Accounting and tax running",
        desc: "Bookkeeping, year-end close, consumption tax and withholding tax were set up alongside incorporation, so the load after launch stayed light.",
      },
    ],
  },
  highlights: {
    heading: "Formation work does not end at the registry",
    headingUnits: undefined,
    items: [
      "Premises, bank account and tax were sequenced as one plan rather than three separate procedures, which is what shortened the whole thing.",
      "For a new foreign-owned company the bank account is the real obstacle. Preparing a record of where the capital came from, and evidence that the business is real, is most of the work of getting through the review.",
      "The approach here transfers to any Chinese manufacturer setting up a sales subsidiary in Japan.",
    ],
  },
};

export default caseStudy;

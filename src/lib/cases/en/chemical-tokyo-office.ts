import type { CaseStudy } from "../types";

/**
 * Published anonymously at the client's request. Figures are written for this
 * locale rather than formatted from the Japanese: 3.48億円 is 348 million yen.
 */
const caseStudy: CaseStudy = {
  slug: "chemical-tokyo-office",
  category: "real-estate-odi",
  title:
    "A central Tokyo office building, from the ODI filing in China to the transfer of ownership",
  titleLines: undefined,
  longTitle: true,
  lead: "A major Chinese chemical manufacturer acquiring an office building as its operating base in Japan. We ran the whole sequence: the outbound direct investment filing in China, the US$4.2 million remittance, the ¥348 million purchase, and registration of the transfer of ownership.",
  clientLabel: "A major Chinese chemical manufacturer",
  disclosure:
    "Published without the client's name at their request. The figures and dates shown are published with their permission.",
  metaTitle: "Tokyo office acquisition and ODI filing",
  metaDescription:
    "How a major Chinese chemical manufacturer acquired a central Tokyo office building — from the outbound direct investment filing in China through to registration of the transfer of ownership, including a US$4.2 million remittance and a ¥348 million purchase.",
  profile: [
    { k: "Sector", v: "Chemical manufacturing and trade (major Chinese group)" },
    { k: "Founded", v: "April 1994" },
    { k: "Registered capital", v: "RMB 139 million" },
    { k: "Ties to Japan", v: "A long trading history with major Japanese chemical companies" },
    {
      k: "Structure in Japan",
      v: "An affiliate (established June 2024, capital ¥5 million) and a wholly owned subsidiary (established January 2025, capital ¥1 million), the latter being the investing entity here",
    },
  ],
  metrics: [
    { value: "348", unit: "million yen", label: "Price of the central Tokyo office building" },
    { value: "4.2", unit: "million US$", label: "Remitted in full under the ODI filing" },
    { value: "6", unit: "months", label: "From shortlisting to transfer of ownership" },
  ],
  challenges: {
    heading: "Three questions stood between the client and the decision",
    headingUnits: undefined,
    lead: "Each of them comes up again for every company weighing an investment in Japan.",
    items: [
      {
        title: "Good buildings are scarce",
        desc: "In central Tokyo, an office building that is well located, laid out in usable floor plates and actually vacant is rare enough that few reach the open market.",
      },
      {
        title: "A late remittance meant breaking the contract",
        desc: "If the banking process in China ran late, the deposit — ten per cent of the price — would miss its due date, and the contract carried a loss if it did.",
      },
      {
        title: "What the tax position would cost",
        desc: "Moving money across the border, and holding the property afterwards, both carry costs. What those would amount to had to be known before the decision, not after.",
      },
    ],
  },
  solutions: {
    heading: "Secure a scarce building, and hold every date",
    headingUnits: undefined,
    lead: "Access to the building, and certainty about the money. We designed around those two things and nothing else.",
    items: [
      {
        no: "01",
        title: "Matching the building through both markets",
        desc: "Working directly with major Japanese agencies gave us buildings before they circulated, and we identified one that met the conditions in a short window.",
        points: [
          "Direct agency relationships closing the information gap",
          "Shortlisting on location, floor plate and vacancy",
          "Assessing the building on the ground, and setting out what the decision needed",
        ],
      },
      {
        no: "02",
        title: "Two remittance routes, so the date holds",
        desc: "The ODI filing route was the primary one, with a second prepared in parallel against delay. Meeting the payment date came before everything else.",
        points: [
          "Primary route: a compliant remittance under the ODI filing",
          "Backup route: secured in advance, against delay on the primary",
          "Running both in parallel removed the risk of missing the date",
        ],
      },
    ],
  },
  timeline: {
    heading: "From the ODI filing to registration, about nine months",
    headingUnits: undefined,
    lead: "Each stage was planned backwards from its deadline, so nothing waited on the one before it.",
    items: [
      {
        date: "End of 2024",
        title: "ODI filing completed",
        desc: "Approval obtained for a US$4.2 million investment allowance.",
      },
      {
        date: "March 2025",
        title: "The search begins",
        desc: "Shortlisting starts across the Japanese property market.",
      },
      {
        date: "4 July 2025",
        title: "The building is settled on",
        desc: "An office building in a prime central Tokyo location, at ¥348 million.",
      },
      {
        date: "10 July 2025",
        title: "Purchase application submitted",
        desc: "Intent to buy formally registered with the seller.",
      },
      {
        date: "18 July 2025",
        title: "Sale contract signed",
        desc: "Ten per cent deposit paid, along with half the brokerage commission.",
      },
      {
        date: "5 August 2025",
        title: "Handover",
        desc: "The remaining 90 per cent paid, along with the balance of the commission.",
      },
      {
        date: "10 September 2025",
        title: "Registration completed",
        desc: "Transfer of ownership registered and the title confirmed in the client's name.",
      },
    ],
  },
  results: {
    heading: "The base, the money and the title",
    headingUnits: undefined,
    lead: "What the investment was for — a real operating base — was secured without delay or default.",
    items: [
      {
        title: "An operating base in Japan",
        desc: "A prime central Tokyo office building acquired, giving the company a real presence in Japan and a footing for the business that follows.",
      },
      {
        title: "The money moved cleanly",
        desc: "The full US$4.2 million remitted under the ODI filing, with no delay and no breach, and settlement made on the date agreed.",
      },
      {
        title: "A cross-border structure that holds",
        desc: "A stable Chinese parent and Japanese subsidiary, which is what the company's longer-term expansion in Japan will rest on.",
      },
      {
        title: "Title confirmed",
        desc: "The legal work completed and ownership registered in the client's name, leaving nothing outstanding against the asset.",
      },
    ],
  },
  highlights: {
    heading: "What the next company can take from this",
    headingUnits: undefined,
    items: [
      "A Chinese manufacturer's property investment in Japan and a compliant ODI process, completed as one piece of work rather than two.",
      "It established a way of handling the three questions that recur on every investment into Japan: whether the building exists, whether the money arrives, and what the tax position costs.",
      "The sequence from filing to registration can be run the same way again, which makes it useful to any company weighing a base in Japan.",
    ],
  },
};

export default caseStudy;

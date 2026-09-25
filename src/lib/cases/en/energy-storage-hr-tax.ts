import type { CaseStudy } from "../types";

const caseStudy: CaseStudy = {
  slug: "energy-storage-hr-tax",
  category: "hr-tax",
  title: "Taking on HR and tax for a Japanese entity that was growing fast",
  titleLines: undefined,
  longTitle: true,
  lead: "The Japanese subsidiary of a Chinese energy-equipment manufacturer. As headcount grew, HR and labour, social insurance, tax and back-office administration moved from one-off instructions to a standing engagement, so the company could run without building a back office of its own.",
  clientLabel: "The Japanese entity of a Chinese energy-equipment manufacturer",
  disclosure:
    "Published without the client's name at their request. The dates and headcount shown are published with their permission.",
  metaTitle: "HR and tax outsourcing for an energy-equipment manufacturer",
  metaDescription:
    "How the Japanese subsidiary of a Chinese energy-equipment manufacturer moved HR and labour, social insurance, tax and administration to a standing engagement, and built a back office to match its growth.",
  profile: [
    {
      k: "Sector",
      v: "Residential and industrial energy storage, inverters and EV charging equipment",
    },
    { k: "Established", v: "September 2024" },
    { k: "Location", v: "Minato-ku, Tokyo" },
    { k: "Ownership", v: "Wholly owned subsidiary of the Chinese parent" },
    { k: "Scope", v: "HR and labour, tax compliance, company secretarial and administration" },
  ],
  metrics: [
    { value: "12", unit: "employees", label: "Covered by the HR and labour engagement" },
    { value: "3", unit: "areas", label: "HR, tax and administration, all standing" },
    { value: "6", unit: "months", label: "From first meeting to full handover" },
  ],
  challenges: {
    heading: "The more people, the more deadlines land together",
    headingUnits: undefined,
    lead: "Growing without a back office of your own puts two kinds of pressure on a company.",
    items: [
      {
        title: "Procedures that cluster and depend on each other",
        desc: "Joiners and leavers, salary, bonuses, social insurance and labour insurance are linked: change one underlying figure and it lands on several filings at once. The more people, the more the deadlines arrive together.",
      },
      {
        title: "Confirmations across three parties",
        desc: "Information sat with the Japanese entity, the Chinese head office and the professionals in Japan. Whether the paperwork was complete, whether filings would make their deadlines, and whether the three read a situation the same way were all open questions.",
      },
    ],
  },
  solutions: {
    heading: "A register, and a fixed order of work",
    headingUnits: undefined,
    lead: "We replaced who-happened-to-know-what with records and a sequence.",
    items: [
      {
        no: "01",
        title: "An employee register and deadlines by procedure",
        desc: "One register per employee, and a separate list per procedure, so a deadline is visible before it arrives rather than when it does.",
        points: [
          "Employee information held in one place",
          "A deadline list per procedure, with advance warning",
          "Clear view of which filings a change in underlying data reaches",
        ],
      },
      {
        no: "02",
        title: "A fixed sequence for multi-party confirmation",
        desc: "Client confirms, we collate, the professional decides, we act, the result goes back — fixed in that order, so it is always clear where a matter is sitting and with whom.",
        points: [
          "Information gathered the next working day when someone joins or leaves, pay changes, a bonus is paid or a dependant changes",
          "Paperwork checked, then reviewed again internally before the statutory deadline",
          "Filings kept on record through to the receipt and the acknowledgement",
          "Notices from the tax authority, or figures that look wrong, escalated immediately",
        ],
      },
    ],
  },
  timeline: {
    heading: "From one-off instructions to a standing engagement",
    headingUnits: undefined,
    lead: "It began with tax, then HR, and then the administration alongside them.",
    items: [
      {
        date: "February 2025",
        title: "First conversation on tax",
        desc: "Requirements and procedures agreed with the finance team, and the framework for tax support set up.",
      },
      {
        date: "June 2025",
        title: "HR engagement signed",
        desc: "Personnel changes, employee filings and record-keeping taken on a standing basis.",
      },
      {
        date: "August 2025",
        title: "Tax engagement signed",
        desc: "Tax registrations and a standing finance and tax engagement begin.",
      },
      {
        date: "August 2025",
        title: "Handover complete",
        desc: "HR and labour running for twelve employees, and all three areas — HR, tax and administration — in steady operation.",
      },
    ],
  },
  results: {
    heading: "Running, without being run in-house",
    headingUnits: undefined,
    items: [
      {
        title: "A standard way of working",
        desc: "Personnel and tax changes and filings now run off a register and a written sequence rather than off what one person remembers.",
      },
      {
        title: "HR that keeps pace with hiring",
        desc: "Several rounds of new joiners and information updates handled, with HR and labour work running for twelve employees as of August 2025.",
      },
      {
        title: "Somewhere for the paperwork to land",
        desc: "Official notices and post are received and sorted on the company's behalf, and passed on, so nothing is missed and nothing arrives late.",
      },
    ],
  },
  highlights: {
    heading: "Match the back office to the rate of growth",
    headingUnits: undefined,
    items: [
      "HR and tax load does not simply track headcount; it grows through the way procedures interlock. Splitting the register by employee and by procedure is what makes the deadlines manageable.",
      "Where work crosses a head office, a local entity and outside professionals, fixing the order in which decisions are made was the shortest route to fewer rounds of confirmation.",
      "A company does not need its own back office from the day it incorporates. Kept outside but run to a standard, it will not break as headcount rises.",
    ],
  },
};

export default caseStudy;

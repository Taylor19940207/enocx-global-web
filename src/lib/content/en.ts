import type { Service, Expert, Career } from "./types";
import ja from "./ja";

/**
 * English business content.
 *
 * Written as English rather than rendered from the Japanese. Professional
 * titles use the English names their own governing bodies publish — see the
 * note in `@/lib/i18n/en.ts`.
 *
 * Addresses follow English convention (smallest unit first). Partner and
 * client company names are proper nouns and stay in their registered form;
 * translating them would make them unverifiable.
 */

const site = {
  name: "EnocX",
  nameJp: "EnocX Inc.",
  tagline: "Global Business Hub",
  offices: {
    tokyo: "5-30-1-606 Shiba, Minato-ku, Tokyo",
    shanghai: "Room 1306, Tower T2, Jingyao Qiantan, 28 Jiangyao Road, Pudong, Shanghai",
  },
};

const offices = [
  {
    city: "Tokyo",
    en: "Tokyo",
    role: "Head office / EnocX International Accounting",
    address: "5-30-1-606 Shiba, Minato-ku, Tokyo",
    tel: "",
  },
  {
    city: "Tokyo",
    en: "Tokyo",
    role: "Management consulting",
    address: "Pright Akihabara 2F, 1-24-9 Taito, Taito-ku, Tokyo",
    tel: "03-6284-3660",
  },
  {
    city: "Shanghai",
    en: "Shanghai",
    role: "Business consulting",
    address: "Room 1306, Tower T2, Jingyao Qiantan, 28 Jiangyao Road, Pudong, Shanghai",
    tel: "021-5527-0369",
  },
];

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Market entry", href: "/market-entry" },
  { label: "Case studies", href: "/cases" },
  { label: "Team", href: "/people" },
  { label: "Company", href: "/company" },
];

const footerNav = [
  ...nav,
  { label: "Partners", href: "/company#partners" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const hero = {
  eyebrow: "Global Business Hub",
  // Outer array = display lines. English wraps on spaces, so each line is a
  // single unit rather than the hand-cut 文節 the Japanese hero needs.
  title: [["The decision to enter Japan,"], ["taken with a team beside you"]],
  lead: "Company formation, accounting and tax, legal, asset management and growth — one team of specialists for business across Japan and China.",
  primaryCta: { label: "Talk to us", href: "/contact" },
  secondaryCta: { label: "See what we do", href: "/services" },
  stats: [
    { value: "500", suffix: "+", label: "Japanese entities incorporated" },
    { value: "380", suffix: "+", label: "companies whose operations we manage" },
    { value: "6", suffix: " offices", label: "Tokyo, Fukuoka, Shanghai, Beijing, Hong Kong, Singapore" },
  ],
};

const coreServices: Service[] = [
  {
    no: "01",
    title: "Inbound to Japan",
    summary:
      "Incorporation and bank account opening handled together, so the cost and risk of the first months are kept down.",
    points: [
      "Lower remittance costs on paid-in capital",
      "Funds protected in transit",
      "Reduced cost of a registered address",
      "A bank account application built to be approved",
    ],
    icon: "/media/ser-ico1.png",
  },
  {
    no: "02",
    title: "Real estate and asset finance",
    summary:
      "Holding property through a company, with financing structured alongside the investment to widen what the balance sheet can carry.",
    points: [
      "Investment and financing structured as one scheme",
      "Easier access to funding",
      "A larger asset base to allocate across",
      "A lighter effective tax burden in Japan",
    ],
    icon: "/media/ser-ico3.png",
  },
  {
    no: "03",
    title: "Accounting and tax",
    summary:
      "Bookkeeping, payroll, social and employment insurance, and tax payments — with the financial structure designed for what the business keeps.",
    points: [
      "Bookkeeping and tax payment on your behalf",
      "Payroll, social insurance and employment insurance",
      "Financial planning put in place",
      "A lighter tax burden and stronger margins",
    ],
    icon: "/media/ser-ico2.png",
  },
  {
    no: "04",
    title: "Strategy and management",
    summary:
      "Business planning for the Japanese market, the analysis behind it, and support through to putting the plan into practice.",
    points: [
      "Business planning for the Japanese market",
      "Market analysis",
      "Support through implementation",
      "Solutions built to hold over time",
    ],
    icon: "/media/ser-ico4.png",
  },
];

const extendedServices = [
  {
    title: "Legal support",
    desc: "Legal solutions shaped around what a particular business actually needs.",
  },
  {
    title: "Asset management in Japan",
    desc: "Japanese SPC and silent partnership structures, investment solutions, restructuring and fundraising.",
  },
  {
    title: "Medical and wellness travel",
    desc: "Arrangements for aesthetic treatment, stem cell therapy, social care and medical consultations.",
  },
  {
    title: "Global logistics",
    desc: "Import customs clearance in Japan, warehouse leasing, delivery and storage.",
  },
  {
    title: "International education",
    desc: "Admissions support for Japanese universities, vocational colleges, language schools and international high schools.",
  },
  {
    title: "E-commerce",
    desc: "Store applications for Amazon, Rakuten, Yahoo! Shopping, Yahoo! Auctions and other marketplaces.",
  },
];

const advantages = [
  {
    no: "01",
    title: "No charge to start the conversation",
    desc: "An international team of specialists, with no fee for an initial consultation and none of the cost that usually implies.",
  },
  {
    no: "02",
    title: "Three languages, used properly",
    desc: "English, Japanese and Chinese — closing the gaps in language and business practice that otherwise slow every exchange.",
  },
  {
    no: "03",
    title: "Both sides, in real time",
    desc: "Offices and staff in Tokyo and Shanghai, so work that crosses the two countries is handled in the same working day.",
  },
  {
    no: "04",
    title: "Resources that cross fields",
    desc: "Beyond accounting and tax: real estate, finance, trade, travel and healthcare — because the problems rarely stay in one field.",
  },
];

const experts: Expert[] = [
  {
    name: "Zhang Yuxiao",
    role: "Founder",
    bio: "MBA, Asia University Graduate School of Asian and International Business Strategy. 35 listed-company clients, around 800 small and mid-sized companies supported to date, and roughly ¥100 billion in assets under management. A specialist in end-to-end inbound services for Japan.",
  },
  {
    name: "Akihiro Ishiyama",
    role: "Representative Director / Certified Public Tax Accountant",
    bio: "Opened a tax accounting practice in Okayama in 2004. Supports Japanese small and mid-sized companies across asset investment and overseas expansion, and has helped more than 500 return to profit. Works on restructuring asset and financial positions.",
    photo: "/media/st-02.jpg",
  },
  {
    name: "Wei Jiong",
    role: "Vice President",
    bio: "Graduated from the Faculty of International Business, Kyushu International University. Twenty years in large-scale property transactions for state-owned enterprises and development zones. Deep knowledge of real estate policy and of industrial and commercial property, advising listed companies on acquisitions, policy filings and investment at home and abroad.",
    photo: "/media/wei-jiong.jpg",
  },
  {
    name: "Lu Xingye",
    role: "Senior Investment Adviser",
    bio: "Fifteen years in international business planning and tax planning. Supports investors through complex international markets, drawing on experience across investment, e-commerce, study abroad, immigration, healthcare and international trade.",
    photo: "/media/lu-xingye.jpg",
  },
  {
    name: "Mizuhiro Kasahara",
    role: "Certified Public Tax Accountant / Former National Tax Agency Official",
    bio: "Thirty-six years with tax offices, the Regional Taxation Bureau and the National Tax Agency, working on tax audits and on planning and operations. Now advises a wide range of clients, listed companies among them.",
    photo: "/media/st-02a.jpg",
  },
  {
    name: "Makoto Kasahara",
    role: "Certified Public Tax Accountant",
    bio: "Member of the Tokyo Certified Public Tax Accountants' Association and the Japan Fiscal Association (registration no. 93849). Has provided tax services to more than 500 Japanese companies.",
    photo: "/media/st-03.jpg",
  },
  {
    name: "Eiji Tsuchida",
    role: "Judicial Scrivener / Labor and Social Security Attorney / Certified Administrative Procedures Legal Specialist",
    bio: "Registered as a judicial scrivener in 2006. Head of En Legal Affairs Office for more than fifteen years, working across registration, licensing and labour matters.",
    photo: "/media/st-231107.jpg",
  },
  {
    name: "Tomohide Eguchi",
    role: "Japan Tax and Finance Adviser",
    bio: "Served as an executive officer at a restaurant group, responsible for restructuring and corporate planning. Has worked on market and financial analysis for corporate projects in the UK, the US, New Zealand and China.",
    photo: "/media/st-04.jpg",
  },
  {
    name: "Saori Matsumoto",
    role: "Certified Administrative Procedures Legal Specialist",
    bio: "Member of the Tokyo Association of Certified Administrative Procedures Legal Specialists. Graduated from the Faculty of Education, Waseda University. Joined ORIX's finance department in 2002, working on capital allocation, investor relations and corporate finance. Established her own practice in 2012, handling residence status and licence applications.",
    photo: "/media/matsumoto-saori.jpg",
  },
  {
    name: "Wu Zhihua",
    role: "Corporate Counsel / PRC-qualified Lawyer",
    bio: "Specialises in corporate, contract and employment law. Advises companies on real estate, equity finance, investment and M&A, IPOs and employment disputes, and drafts shareholding structures and legal documentation.",
    photo: "/media/st-05.jpg",
  },
];

const about = {
  promise: {
    title: "Our promise",
    lead: "We help small and mid-sized companies establish themselves securely in both Japan and China, and bring resources from across Asia to bear on what their assets are worth.",
    points: [
      {
        no: "01",
        text: "Helping small and mid-sized companies establish themselves in China, and reach further into the Asian market.",
      },
      {
        no: "02",
        text: "Helping small and mid-sized companies establish themselves in Japan, and reach further into the Asian market.",
      },
    ],
  },
  worldview: {
    title: "How we see our work",
    paragraphs: [
      "EnocX works on business cooperation between Japan and China, and on the cultural exchange that runs alongside it.",
      "Beyond business, we want the firm to be a way of understanding Japan directly — its economy, its travel, its culture and its people.",
      "We are building a service area centred on Asia, and working outward from there.",
    ],
  },
  philosophy: {
    title: "What we commit to",
    commit: [
      "Delivering value that lasts, and that answers what a client actually needs.",
      "Creating value with our clients rather than for them.",
      "Continuing to be worth something to the wider society we work in.",
    ],
    never: [
      "Raising what the EnocX name is worth, year after year.",
      "Delivering service beyond what a client expected of us.",
      "Competing in ways that leave the market in better order than we found it.",
    ],
  },
  value: {
    title: "What we value",
    paragraphs: [
      "We work out what a client actually needs, then propose and deliver against it. Three things we take seriously: that a project holds, that the cost of starting stays low, and that what follows is a life worth having built.",
      "Service on both the business side and the personal one. EnocX is a business brand, and it is also a brand people feel something about.",
    ],
  },
};

// Company names are proper nouns: kept in their registered form so a reader
// can verify them.
const strategicPartners = ja.strategicPartners;
const clients = ja.clients;
const partnerLogos = ja.partnerLogos;
const presenceCities = ja.presenceCities;
const presenceCoordinates = ja.presenceCoordinates;
const careerContact = ja.careerContact;

const careers: Career[] = [
  {
    title: "Accounting and Tax — Bookkeeper / Administrative Assistant",
    location: "Tokyo (Akihabara)",
    salary: "¥230,000 per month",
    language: "Japanese: JLPT N1",
    duties: ["Company bookkeeping and cash management"],
    requirements: ["Hours 9:30–18:30", "Commuting allowance"],
    note: "Health insurance, employees' pension and employment insurance provided. Public holidays off.",
  },
  {
    title: "Project Assistant",
    location: "Shanghai",
    salary: "Negotiable, with a bonus scheme",
    language: "Japanese (listening, reading, writing) and English",
    duties: [
      "Keeping Japan-side projects on track",
      "Supporting existing and new clients day to day",
      "Tracking live projects and reporting on them daily",
      "Working with the Shanghai project team to support the Japan side",
      "Opening up new projects",
    ],
    requirements: [
      "Japanese (listening, reading, writing)",
      "English",
      "Confident with Office software",
    ],
    note: "We are looking for someone reliable, careful and willing — and an interest in Japanese culture is welcome.",
  },
  {
    title: "Sales Assistant",
    location: "Shanghai",
    salary: "Negotiable, with commission and a bonus scheme",
    language: "Japanese (listening, reading, writing) and English",
    duties: [
      "Answering client enquiries and working out what they need",
      "Looking after existing clients and bringing in new ones",
      "Supporting the sales manager on market and business development",
      "Maintaining supplier relationships and finding new ones",
    ],
    requirements: [
      "Japanese (listening, reading, writing)",
      "English",
      "Confident with Office software",
    ],
  },
];

const company = {
  rows: [
    { k: "Company name", v: "EnocX Inc. (Akihiro Ishiyama Accounting Office)" },
    { k: "Established", v: "30 August 2019 (practice founded 2004)" },
    { k: "Founder", v: "Zhang Yuxiao" },
    { k: "Representative Director", v: "Akihiro Ishiyama" },
    { k: "Head office", v: "5-30-1-606 Shiba, Minato-ku, Tokyo" },
    {
      k: "Group companies",
      v: "EnocX International Accounting Inc. / Shanghai Huiyue Business Management Consulting Co., Ltd., among others",
    },
    { k: "Offices", v: "Tokyo, Fukuoka, Shanghai, Beijing, Hong Kong, Singapore" },
    { k: "Bank", v: "Mizuho Bank" },
  ],
  history: [
    {
      year: "2004",
      title: "The accounting and tax practice opens",
      desc: "Akihiro Ishiyama's Certified Public Tax Accountant office, the practice EnocX grew out of, begins work with Japanese small and mid-sized companies.",
    },
    {
      year: "2019",
      title: "EnocX Inc. is established",
      desc: "Incorporated on 30 August 2019, with its head office at 823-9 Yanagida-cho, Kojima, Kurashiki, Okayama.",
    },
    {
      year: "2020",
      title: "Move to Minato-ku, Tokyo; trademark registered",
      desc: "The head office moves to 5-30-1-606 Shiba, Minato-ku, Tokyo in February. The EnocX trademark application was filed in October.",
    },
    {
      year: "2021",
      title: "500 incorporations, 380 companies under management",
      desc: "More than 500 company formations completed, with the operations of over 380 companies under ongoing management.",
    },
    {
      year: "2025",
      title: "The international structure is strengthened",
      desc: "EnocX International Accounting Inc. (Tokyo) and Shanghai Huiyue Business Management Consulting Co., Ltd. (Shanghai) are established.",
    },
  ],
};

const marketEntry = {
  intro:
    "Entering the Japanese market is not the single act of forming a company. Capital, tax, legal, banking and operations each depend on the one before. EnocX stays alongside every one of those decisions, read from the ground in Japan.",
  steps: [
    {
      no: "01",
      title: "Strategy and structure",
      desc: "Entity type, capital structure and tax treatment designed around why you are entering and what the business plan says — keeping the initial outlay and the risk down.",
      bullets: [
        "Clarifying the objective and the business plan",
        "Designing the entity type and capital structure",
        "First pass at the tax structure",
      ],
    },
    {
      no: "02",
      title: "Formation and registration",
      desc: "From remitting the paid-in capital through company registration to securing a registered address — with the risk of a refused bank account addressed before it arises.",
      bullets: [
        "Support with remitting paid-in capital",
        "Company registration and articles of incorporation",
        "Securing a registered address",
      ],
    },
    {
      no: "03",
      title: "Banking and licensing",
      desc: "Opening the bank account and obtaining whatever licences the business needs, so nothing stands between you and starting work.",
      bullets: [
        "Support with opening a bank account",
        "Obtaining the necessary licences",
        "Setting up social insurance and payroll",
      ],
    },
    {
      no: "04",
      title: "Operations and growth",
      desc: "Bookkeeping, filings and payroll on an ongoing basis, and beyond them real estate, finance and the work of growing.",
      bullets: [
        "Ongoing accounting and tax",
        "Asset management and property investment",
        "Expansion and building out locally",
      ],
    },
  ],
  risks: [
    {
      title: "The bank account stalls",
      desc: "Foreign-owned companies are where account applications tend to stop. Designing the application in advance is what gets it through.",
    },
    {
      title: "Tax left until afterwards",
      desc: "Work out the tax position after incorporating and the bill grows. Designing it early is what protects cash flow.",
    },
    {
      title: "Language and business practice",
      desc: "The friction in documents, negotiation and dealing with authorities is absorbed by a local team working in Japanese, Chinese and English.",
    },
  ],
};

const en = {
  site,
  presenceCities,
  presenceCoordinates,
  offices,
  nav,
  footerNav,
  hero,
  coreServices,
  extendedServices,
  advantages,
  experts,
  about,
  strategicPartners,
  clients,
  careers,
  careerContact,
  partnerLogos,
  company,
  marketEntry,
};

export default en;

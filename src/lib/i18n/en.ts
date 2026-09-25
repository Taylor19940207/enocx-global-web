import type { Dictionary } from "./types";

/**
 * English UI copy.
 *
 * Written as English rather than rendered from the Japanese: display headings
 * are English headlines, not transliterated Japanese sentences, and they drop
 * the terminal 。 that Japanese editorial style uses.
 *
 * Every `…Lines` / `…Units` value is `undefined` on purpose. Those are manual
 * line plans for a language with no spaces (CONTRACT §9); English wraps on
 * spaces, so translating the fragments would break headings at the Japanese
 * plan's boundaries instead of where the words allow.
 *
 * Professional titles use the English names their own governing bodies use:
 * 税理士 is a Certified Public Tax Accountant, 司法書士 a judicial scrivener
 * (Ministry of Justice), 社会保険労務士 a Labor and Social Security Attorney
 * (全国社会保険労務士会連合会) and 行政書士 a Certified Administrative Procedures
 * Legal Specialist (日本行政書士会連合会). Those last two read as ordinary
 * consultants under any looser rendering, which understates a national
 * qualification. They keep the American spelling their official names use.
 */

const en: Dictionary = {
  meta: {
    titleDefault: "EnocX | Japan market entry, corporate operations, accounting and tax",
    titleTemplate: "%s | EnocX",
    description:
      "One firm for entering the Japanese market: company formation, accounting and tax, legal support and the operations that follow. A team of licensed professionals works directly on the decisions that matter.",
    keywords: [
      "Japan company formation",
      "Japan market entry",
      "accounting and tax Japan",
      "foreign company Japan subsidiary",
      "cross-border business consulting",
    ],
    ogTitle: "EnocX | Japan market entry, corporate operations, accounting and tax",
    ogDescription:
      "One firm for entering the Japanese market: company formation, accounting and tax, legal support and the operations that follow.",
  },

  common: {
    skipToContent: "Skip to content",
    home: "Home",
    consult: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileNav: "Mobile navigation",
  },

  notFound: {
    metaTitle: "Page not found",
    eyebrow: "404",
    heading: "We couldn't find that page",
    headingUnits: undefined,
    lead: "The address may have changed, or the page may have been removed. Start again from the home page.",
    home: "Back to the home page",
  },

  footer: {
    description:
      "A Japan–China business hub supporting overseas companies entering the Japanese market — from company formation through accounting, tax, legal and growth.",
    headquarters: "Head office / Tokyo",
  },

  cta: {
    titleLines: ["Your first step into Japan", "starts with a conversation"],
    lead: "There is no charge for an initial consultation. We can work in English, Japanese or Chinese, around where your business currently stands.",
    primary: "Request a free consultation",
    secondary: "See what we do",
  },

  contactForm: {
    thanksTitle: "Thank you for getting in touch.",
    thanksBody: "We'll review what you've sent and come back to you shortly.",
    name: "Name",
    company: "Company",
    email: "Email address",
    topic: "What can we help with?",
    topicOptions: [
      "Company formation in Japan",
      "Accounting and tax",
      "Real estate and asset finance",
      "Business operations support",
      "Something else",
    ],
    message: "Your message",
    submit: "Send",
  },

  numbers: {
    heading: "The record, in numbers",
    lead: "Since the firm was founded we have supported companies working across Japan and China — from incorporation through to growth.",
    primary: [
      { unit: "", label: "Japanese entities incorporated" },
      { unit: "", label: "companies whose operations we manage" },
      { unit: "", label: "small and mid-sized companies supported to date" },
      { unit: "", label: "listed-company clients" },
    ],
    supporting: [
      { unit: "billion yen", label: "in assets under management" },
      { unit: "offices", label: "Tokyo, Fukuoka, Shanghai, Beijing, Hong Kong, Singapore" },
      { unit: "languages", label: "English, Japanese and Chinese" },
    ],
  },

  services: {
    heading: "Every stage of entering Japan, through one firm",
    headingLines: undefined,
    lead: "Four practices — formation, accounting and tax, asset finance, and business operations — carry a company from market entry through to growth.",
    supportLabel: "What this covers",
    extendedTitle: "Support that crosses practice lines",
    extendedLead:
      "As a business grows, the work it needs stops fitting neatly into one specialism. We connect the practices rather than hand you between them.",
    more: "See all services",
  },

  whyEnocX: {
    heading: "Not translation — judgment grounded in both business cultures",
    headingLines: undefined,
    lead: "We close the gaps in language, regulation and business practice, and give you what a decision actually requires, read from the ground in Japan.",
    networkAlt:
      "EnocX's Asia network connecting Tokyo, Fukuoka, Shanghai, Beijing, Hong Kong and Singapore",
  },

  proof: {
    heading: "Working alongside companies on both sides",
    lead: "A network of strategic partners and client companies is what keeps a business running once it has arrived.",
    clientList: "Client companies",
    companyCounter: "companies",
  },

  people: {
    heading: "Licensed professionals working directly on your case",
    lead: "Certified public tax accountants, former National Tax Agency officials, judicial scriveners and attorneys — practitioners who handle cross-border work as one team.",
    more: "Meet the full team",
  },

  company: {
    heading: "Bridging Japan and China, from Tokyo and Shanghai",
    lead: "The firm began as an accounting and tax practice and now operates as a hub for cross-border business.",
  },

  caseCategories: {
    "real-estate-odi": "Real estate and ODI",
    "company-formation": "Company formation",
    licensing: "Licensing and compliance",
    "hr-tax": "HR and tax",
    "tax-filing": "Tax filing",
  },

  caseNav: {
    label: "Case study navigation",
    previous: "Previous case",
    next: "Next case",
    index: "All case studies",
  },

  routes: {
    home: { crumb: "Home" },

    about: {
      eyebrow: "About EnocX",
      metaTitle: "About EnocX",
      metaDescription:
        "EnocX helps investors and companies from China and beyond establish themselves in Japan, and puts resources across Asia to work on their behalf. Our promise, outlook, principles and values.",
      crumb: "About EnocX",
      heroTitle: "Connecting Japan and China, and reaching across Asia",
      heroLines: undefined,
      focus: "What we concentrate on",
      promise: "Our promise",
    },

    services: {
      eyebrow: "Services",
      metaTitle: "Services",
      metaDescription:
        "Company formation, accounting and tax, real estate and asset finance, and business operations support — extending to legal, financial, medical, logistics, education and e-commerce. Every stage of entering Japan, handled by one firm.",
      crumb: "Services",
      heroTitle: "Every stage of entering Japan, through one firm",
      heroLines: undefined,
      heroLead:
        "Four practices — formation, accounting and tax, asset finance, and business operations — carry a company from market entry through to growth.",
    },

    marketEntry: {
      eyebrow: "Market Entry",
      metaTitle: "Entering the Japanese market",
      metaDescription:
        "Support for overseas companies entering Japan across four stages: strategy, company formation, banking and licensing, and operations and growth. The predictable obstacles — opening an account, structuring for tax — are handled before they bite.",
      crumb: "Market entry",
      heroTitle: "Entering Japan is a sequence, not a single step",
      heroLines: undefined,
      stepsHeading: "Four stages, from strategy through to operations",
      stepsUnits: undefined,
      stepsLead: "We stay alongside each decision, read from the ground in Japan.",
      risksHeading: "The places companies get stuck, dealt with in advance",
    },

    cases: {
      eyebrow: "Case Study",
      metaTitle: "Case studies",
      metaDescription:
        "Real engagements in market entry, company formation, licensing and tax — how the work was run, the dates it hit, and what it produced. Published only as far as our clients have agreed.",
      crumb: "Case studies",
      heroTitle: "Real engagements, documented end to end",
      heroLines: undefined,
      heroLead:
        "How the work was run, the dates it hit, and what it produced — recorded case by case, and published only as far as our clients have agreed.",
      read: "Read the case",
      detailTitleSuffix: " case study",
    },

    people: {
      eyebrow: "People",
      metaTitle: "Our team",
      metaDescription:
        "Certified Public Tax Accountants, former National Tax Agency officials, judicial scriveners, Labor and Social Security Attorneys, Certified Administrative Procedures Legal Specialists and attorneys — licensed practitioners handling cross-border work as one team.",
      crumb: "Team",
      heroTitle: "Licensed professionals working directly on your case",
      heroLines: undefined,
      heroLead:
        "Certified public tax accountants, former National Tax Agency officials, judicial scriveners and attorneys — practitioners who handle cross-border work as one team.",
    },

    company: {
      eyebrow: "Company",
      metaTitle: "Company",
      metaDescription:
        "EnocX Inc. — company profile, history and offices. Founded as an accounting and tax practice, now supporting cross-border business from Tokyo and Shanghai.",
      crumb: "Company",
      heroTitle: "A business hub connecting Asia",
      heroLines: undefined,
      heroLead:
        "The firm began as an accounting and tax practice and now supports cross-border business from six offices: Tokyo, Fukuoka, Shanghai, Beijing, Hong Kong and Singapore.",
      profileHeading: "Company profile",
      historyHeading: "History",
      historyLead: "From an accounting and tax practice to a business hub across Asia.",
      officesHeading: "Six offices across Asia",
      officesLead:
        "Tokyo, Fukuoka, Shanghai, Beijing, Hong Kong and Singapore, connected so that cross-border work moves without handoffs.",
    },

    career: {
      eyebrow: "Careers",
      metaTitle: "Careers",
      metaDescription:
        "Careers at EnocX. We are hiring in Tokyo and Shanghai for the people who keep cross-border work between Japan and China running.",
      crumb: "Careers",
      heroTitle: "Work that connects Japan and China",
      heroLines: undefined,
      heroLead:
        "We are hiring in Tokyo and Shanghai for the people who handle the day-to-day of cross-border business.",
      note: "Note:",
      openingsHeading: "Open roles",
      openingsLead:
        "To apply, or to ask about a role, send your CV to the address below.",
      duties: "The work",
      requirements: "What we're looking for",
      applyTo: "Send your CV to",
    },

    contact: {
      eyebrow: "Contact",
      metaTitle: "Contact",
      metaDescription:
        "Talk to us about entering the Japanese market or running a company there. There is no charge for an initial consultation, and we can work in English, Japanese or Chinese.",
      crumb: "Contact",
      heroTitle: "Your first step into Japan starts with a conversation",
      heroLines: undefined,
      heroLead:
        "There is no charge for an initial consultation. We can work in English, Japanese or Chinese, around where your business currently stands.",
    },
  },
};

export default en;

import type { LinePlan, WrapUnits } from "./types";

/**
 * Japanese UI copy.
 *
 * This is the reference dictionary: `Dictionary` is inferred from it, so any
 * further locale must supply every key or fail to compile.
 *
 * `lines` / `units` entries are manual line plans (CONTRACT §9). They exist
 * because Japanese has no spaces; a locale that wraps on spaces sets them to
 * `undefined` rather than translating the fragments.
 */

// Typed as optionally absent so a locale that wraps on spaces can pass
// `undefined` — the components fall back to letting the browser wrap.
const lines = (mobile: string[], desktop: string[]): LinePlan | undefined => ({
  mobile,
  desktop,
});
const units = (...u: string[]): WrapUnits | undefined => u;

const ja = {
  meta: {
    titleDefault: "EnocX｜日本進出・法人運営・会計税務のワンストップ支援",
    titleTemplate: "%s｜EnocX",
    description:
      "中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援。有資格の専門家チームが越境ビジネスの意思決定を伴走します。",
    keywords: [
      "日本法人設立",
      "外国企業 日本進出",
      "会計税務 中国語対応",
      "Japan market entry",
      "越境ビジネス コンサルティング",
    ],
    ogTitle: "EnocX｜日本進出・法人運営・会計税務のワンストップ支援",
    ogDescription:
      "中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援。",
  },

  common: {
    skipToContent: "本文へ移動",
    home: "Home",
    consult: "相談する",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    mobileNav: "モバイルナビゲーション",
  },

  notFound: {
    metaTitle: "ページが見つかりません",
    eyebrow: "404",
    heading: "お探しのページは見つかりませんでした。",
    headingUnits: units("お探しのページは", "見つかりませんでした。"),
    lead: "アドレスが変更されたか、削除された可能性があります。トップページからお探しください。",
    home: "トップページへ",
  },

  footer: {
    description:
      "中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援する日中ビジネスハブ。",
    headquarters: "本社 / Tokyo",
  },

  cta: {
    titleLines: ["日本進出の第一歩を、", "まずは相談から。"],
    lead: "先行相談料はいただきません。日本語・中国語・英語のいずれでも、御社の状況に合わせてご相談いただけます。",
    primary: "無料相談を申し込む",
    secondary: "サービス詳細を見る",
  },

  contactForm: {
    thanksTitle: "お問い合わせありがとうございます。",
    thanksBody: "内容を確認のうえ、担当者よりご連絡いたします。",
    name: "お名前",
    company: "会社名",
    email: "メールアドレス",
    topic: "ご相談分野",
    topicOptions: [
      "日本法人設立",
      "会計税務",
      "不動産・資産金融",
      "事業経営サポート",
      "その他",
    ],
    message: "お問い合わせ内容",
    submit: "送信する",
  },

  numbers: {
    heading: "実績を、数字で。",
    lead: "創業以来、日中をまたぐ企業の起業と成長を、積み重ねてきた実績で支えています。",
    primary: [
      { unit: "件", label: "日本法人の設立ケース" },
      { unit: "社", label: "設立後の運営・管理を支援中" },
      { unit: "社", label: "支援した中小企業（累計）" },
      { unit: "社", label: "上場企業クライアント" },
    ],
    supporting: [
      { unit: "億円", label: "累計資産規模" },
      { unit: "拠点", label: "東京・福岡・上海・北京・香港・シンガポール" },
      { unit: "言語", label: "日本語・中国語・英語で対応" },
    ],
  },

  services: {
    heading: "日本進出のすべての工程を、一つの窓口で。",
    headingLines: lines(
      ["日本進出のすべての", "工程を、一つの窓口で。"],
      ["日本進出のすべての工程を、", "一つの窓口で。"]
    ),
    lead: "設立・会計税務・資産金融・事業運営という4つの核を軸に、進出から成長までを分野横断で支援します。",
    supportLabel: "主要サポート内容",
    extendedTitle: "専門分野を超えた、総合的なサポート",
    extendedLead: "事業の成長段階に合わせ、専門領域を横断して必要な実務をつなぎます。",
    more: "サービスの詳細を見る",
  },

  whyEnocX: {
    heading: "翻訳ではなく、両国の商習慣を理解した伴走を。",
    headingLines: lines(
      ["翻訳ではなく、", "両国の商習慣を", "理解した伴走を。"],
      ["翻訳ではなく、", "両国の商習慣を", "理解した伴走を。"]
    ),
    lead: "言語・制度・商習慣のギャップを埋め、意思決定に必要な情報を、日本の現地目線で提供します。",
    networkAlt:
      "東京、福岡、上海、北京、香港、シンガポールを結ぶEnocXのアジアネットワーク",
  },

  proof: {
    heading: "日中をまたぐ企業と、共に。",
    lead: "戦略的パートナーおよびクライアント企業とのネットワークが、進出後の事業運営を支えます。",
    clientList: "お取引企業一覧",
    companyCounter: "社",
  },

  people: {
    heading: "有資格の専門家が、直接あなたの課題に向き合う。",
    lead: "税理士・国税OB・司法書士・弁護士など、各分野の実務家がチームとして越境案件を支えます。",
    more: "専門家チームをすべて見る",
  },

  company: {
    heading: "東京と上海を拠点に、日中の橋渡しを。",
    lead: "会計税務事務所を前身とし、越境ビジネスのハブとして事業を展開しています。",
  },

  caseCategories: {
    "real-estate-odi": "不動産・ODI",
    "company-formation": "会社設立・進出",
    licensing: "許認可・法令対応",
    "hr-tax": "人事・税務",
    "tax-filing": "税務申告",
  },

  caseNav: {
    label: "支援事例の移動",
    previous: "前の事例",
    next: "次の事例",
    index: "支援事例の一覧へ",
  },

  routes: {
    home: { crumb: "Home" },

    about: {
      eyebrow: "About EnocX",
      metaTitle: "EnocXについて",
      metaDescription:
        "中国系の投資家・企業の日本進出を後押しし、アジア全域のリソース統合で資産を最適化する。EnocXのブランド確約・世界観・理念・価値をご紹介します。",
      crumb: "EnocXについて",
      heroTitle: "日中をつなぎ、アジアへ。",
      heroLines: lines(["日中をつなぎ、", "アジアへ。"], ["日中をつなぎ、アジアへ。"]),
      focus: "専念すること",
      promise: "私たちの約束",
    },

    services: {
      eyebrow: "Services",
      metaTitle: "サービス",
      metaDescription:
        "日本法人設立・会計税務・不動産資産金融・事業経営サポートを核に、法律・金融・医療・物流・教育・ECまで。日本進出のすべての工程をワンストップで支援します。",
      crumb: "サービス",
      heroTitle: "日本進出のすべての工程を、一つの窓口で。",
      heroLines: lines(
        ["日本進出のすべての", "工程を、", "一つの窓口で。"],
        ["日本進出のすべての工程を、", "一つの窓口で。"]
      ),
      heroLead:
        "設立・会計税務・資産金融・事業運営という4つの核を軸に、進出から成長までを分野横断で支援します。",
    },

    marketEntry: {
      eyebrow: "Market Entry",
      metaTitle: "日本進出支援",
      metaDescription:
        "外国企業の日本市場進出を、戦略設計・法人設立・口座と許認可・運営と成長の4ステップで支援。口座開設や税務設計などの典型的なリスクにも事前に対応します。",
      crumb: "日本進出",
      heroTitle: "日本進出は、点ではなく一連のプロセス。",
      heroLines: lines(
        ["日本進出は、", "点ではなく一連の", "プロセス。"],
        ["日本進出は、点ではなく", "一連のプロセス。"]
      ),
      stepsHeading: "戦略設計から運営まで、4つのステップ。",
      stepsUnits: units("戦略設計から", "運営まで、", "4つのステップ。"),
      stepsLead: "各工程の判断を、日本の現地目線で伴走します。",
      risksHeading: "進出でつまずきやすいポイントを、先回りで。",
    },

    cases: {
      eyebrow: "Case Study",
      metaTitle: "支援事例",
      metaDescription:
        "日本進出・法人設立・許認可・会計税務の実際の案件を、進め方と期日、結果まで公開しています。掲載はお客様の許諾を得た範囲に限っています。",
      crumb: "支援事例",
      heroTitle: "実際の案件で、どう進めたかを公開する。",
      heroLines: lines(
        ["実際の案件で、", "どう進めたかを", "公開する。"],
        ["実際の案件で、", "どう進めたかを公開する。"]
      ),
      heroLead:
        "進め方・期日・結果を、案件ごとに記録しています。掲載は、お客様の許諾を得た範囲に限っています。",
      read: "事例を読む",
      /** Fallback <title> for a case with no metaTitle of its own. */
      detailTitleSuffix: "の支援事例",
    },

    people: {
      eyebrow: "People",
      metaTitle: "専門家チーム",
      metaDescription:
        "税理士・国税OB税理士・司法書士・社会保険労務士・行政書士・弁護士など、有資格の実務家がチームとして日中の越境案件を支援します。",
      crumb: "専門家",
      heroTitle: "有資格の専門家が、直接あなたの課題に向き合う。",
      heroLines: lines(
        ["有資格の専門家が、", "直接あなたの課題に", "向き合う。"],
        ["有資格の専門家が、", "直接あなたの課題に向き合う。"]
      ),
      heroLead:
        "税理士・国税OB・司法書士・弁護士など、各分野の実務家がチームとして越境案件を支えます。",
    },

    company: {
      eyebrow: "Company",
      metaTitle: "会社概要",
      metaDescription:
        "EnocX株式会社の会社概要・沿革・拠点。会計税務事務所を母体に、東京と上海を拠点として日中の越境ビジネスを支援しています。",
      crumb: "会社概要",
      heroTitle: "アジアを結ぶ、グローバルビジネスハブ。",
      heroLines: lines(
        ["アジアを結ぶ、", "グローバル", "ビジネスハブ。"],
        ["アジアを結ぶ、", "グローバルビジネスハブ。"]
      ),
      heroLead:
        "会計税務事務所を前身とし、東京・福岡・上海・北京・香港・シンガポールの6拠点で越境ビジネスを支援しています。",
      profileHeading: "企業情報",
      historyHeading: "沿革",
      historyLead: "会計税務事務所から、グローバルビジネスハブへ。",
      officesHeading: "アジアをまたぐ6拠点体制。",
      officesLead:
        "東京・福岡・上海・北京・香港・シンガポールを結び、越境案件をシームレスに支援します。",
    },

    career: {
      eyebrow: "Career",
      metaTitle: "採用情報",
      metaDescription:
        "EnocXの採用情報。東京・上海の拠点で、日中の越境ビジネスを支えるメンバーを募集しています。",
      crumb: "採用情報",
      heroTitle: "日中をつなぐ仕事を、一緒に。",
      heroLines: lines(
        ["日中をつなぐ", "仕事を、", "一緒に。"],
        ["日中をつなぐ仕事を、", "一緒に。"]
      ),
      heroLead: "東京と上海の拠点で、越境ビジネスの実務を支えるメンバーを募集しています。",
      note: "※",
      openingsHeading: "募集職種",
      openingsLead:
        "ご応募・お問い合わせは、履歴書を下記メールアドレスまでお送りください。",
      duties: "仕事内容",
      requirements: "応募条件",
      applyTo: "履歴書送付先",
    },

    contact: {
      eyebrow: "Contact",
      metaTitle: "お問い合わせ",
      metaDescription:
        "日本進出・法人運営に関するご相談はこちら。先行相談料はいただきません。日本語・中国語・英語で対応いたします。",
      crumb: "お問い合わせ",
      heroTitle: "日本進出の第一歩を、まずは相談から。",
      heroLines: lines(
        ["日本進出の", "第一歩を、", "まずは相談から。"],
        ["日本進出の第一歩を、", "まずは相談から。"]
      ),
      heroLead:
        "先行相談料はいただきません。日本語・中国語・英語のいずれでも、御社の状況に合わせてご相談いただけます。",
    },
  },
};

export default ja;

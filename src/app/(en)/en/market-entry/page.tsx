import type { Metadata } from "next";
import MarketEntryPage from "@/components/pages/MarketEntryPage";
import { alternates, getDictionary, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.marketEntry;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/market-entry", locale),
    openGraph: openGraphFor("/market-entry", locale),
};

export default function Page() {
  return <MarketEntryPage locale={locale} />;
}

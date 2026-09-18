import type { Metadata } from "next";
import MarketEntryPage from "@/components/pages/MarketEntryPage";
import { alternates, defaultLocale, getDictionary, openGraphFor } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.marketEntry;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/market-entry", defaultLocale),
    openGraph: openGraphFor("/market-entry", defaultLocale),
};

export default function Page() {
  return <MarketEntryPage locale={defaultLocale} />;
}

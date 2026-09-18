import type { Metadata } from "next";
import MarketEntryPage from "@/components/pages/MarketEntryPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.marketEntry;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/market-entry", defaultLocale),
};

export default function Page() {
  return <MarketEntryPage locale={defaultLocale} />;
}

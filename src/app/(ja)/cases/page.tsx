import type { Metadata } from "next";
import CasesPage from "@/components/pages/CasesPage";
import { alternates, defaultLocale, getDictionary, openGraphFor } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.cases;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/cases", defaultLocale),
    openGraph: openGraphFor("/cases", defaultLocale),
};

export default function Page() {
  return <CasesPage locale={defaultLocale} />;
}

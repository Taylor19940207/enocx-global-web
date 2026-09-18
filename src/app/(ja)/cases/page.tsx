import type { Metadata } from "next";
import CasesPage from "@/components/pages/CasesPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.cases;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/cases", defaultLocale),
};

export default function Page() {
  return <CasesPage locale={defaultLocale} />;
}

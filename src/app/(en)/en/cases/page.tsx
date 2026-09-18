import type { Metadata } from "next";
import CasesPage from "@/components/pages/CasesPage";
import { getDictionary , alternates } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.cases;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/cases", locale),
};

export default function Page() {
  return <CasesPage locale={locale} />;
}

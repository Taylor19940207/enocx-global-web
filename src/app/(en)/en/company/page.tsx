import type { Metadata } from "next";
import CompanyPage from "@/components/pages/CompanyPage";
import { getDictionary , alternates } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.company;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/company", locale),
};

export default function Page() {
  return <CompanyPage locale={locale} />;
}

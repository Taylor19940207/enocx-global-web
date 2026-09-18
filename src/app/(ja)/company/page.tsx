import type { Metadata } from "next";
import CompanyPage from "@/components/pages/CompanyPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.company;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/company", defaultLocale),
};

export default function Page() {
  return <CompanyPage locale={defaultLocale} />;
}

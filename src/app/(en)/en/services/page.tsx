import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { alternates, getDictionary, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.services;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/services", locale),
    openGraph: openGraphFor("/services", locale),
};

export default function Page() {
  return <ServicesPage locale={locale} />;
}

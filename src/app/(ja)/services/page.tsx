import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { alternates, defaultLocale, getDictionary, openGraphFor } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.services;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/services", defaultLocale),
    openGraph: openGraphFor("/services", defaultLocale),
};

export default function Page() {
  return <ServicesPage locale={defaultLocale} />;
}

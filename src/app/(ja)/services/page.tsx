import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.services;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/services", defaultLocale),
};

export default function Page() {
  return <ServicesPage locale={defaultLocale} />;
}

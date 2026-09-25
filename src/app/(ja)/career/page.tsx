import type { Metadata } from "next";
import CareerPage from "@/components/pages/CareerPage";
import { alternates, defaultLocale, getDictionary, openGraphFor } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.career;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/career", defaultLocale),
    openGraph: openGraphFor("/career", defaultLocale),
};

export default function Page() {
  return <CareerPage locale={defaultLocale} />;
}

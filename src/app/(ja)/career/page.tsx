import type { Metadata } from "next";
import CareerPage from "@/components/pages/CareerPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.career;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/career", defaultLocale),
};

export default function Page() {
  return <CareerPage locale={defaultLocale} />;
}

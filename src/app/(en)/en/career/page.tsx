import type { Metadata } from "next";
import CareerPage from "@/components/pages/CareerPage";
import { getDictionary , alternates } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.career;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/career", locale),
};

export default function Page() {
  return <CareerPage locale={locale} />;
}

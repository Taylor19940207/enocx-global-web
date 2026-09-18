import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { alternates, getDictionary, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.about;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/about", locale),
    openGraph: openGraphFor("/about", locale),
};

export default function Page() {
  return <AboutPage locale={locale} />;
}

import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.about;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/about", defaultLocale),
};

export default function Page() {
  return <AboutPage locale={defaultLocale} />;
}

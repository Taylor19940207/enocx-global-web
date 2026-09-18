import type { Metadata } from "next";
import PeoplePage from "@/components/pages/PeoplePage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.people;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/people", defaultLocale),
};

export default function Page() {
  return <PeoplePage locale={defaultLocale} />;
}

import type { Metadata } from "next";
import PeoplePage from "@/components/pages/PeoplePage";
import { alternates, getDictionary, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.people;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/people", locale),
    openGraph: openGraphFor("/people", locale),
};

export default function Page() {
  return <PeoplePage locale={locale} />;
}

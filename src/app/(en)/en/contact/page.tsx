import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { alternates, getDictionary, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/contact", locale),
    openGraph: openGraphFor("/contact", locale),
};

export default function Page() {
  return <ContactPage locale={locale} />;
}

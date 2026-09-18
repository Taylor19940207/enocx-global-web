import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { getDictionary , alternates } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/contact", locale),
};

export default function Page() {
  return <ContactPage locale={locale} />;
}

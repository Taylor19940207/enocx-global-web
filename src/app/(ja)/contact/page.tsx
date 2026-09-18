import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { defaultLocale, getDictionary , alternates } from "@/lib/i18n";

const t = getDictionary(defaultLocale).routes.contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: alternates("/contact", defaultLocale),
};

export default function Page() {
  return <ContactPage locale={defaultLocale} />;
}

import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { alternates, defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = { alternates: alternates("/", defaultLocale) };

export default function Page() {
  return <HomePage locale={defaultLocale} />;
}

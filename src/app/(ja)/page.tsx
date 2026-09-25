import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { alternates, defaultLocale, openGraphFor } from "@/lib/i18n";

export const metadata: Metadata = { alternates: alternates("/", defaultLocale),
    openGraph: openGraphFor("/", defaultLocale) };

export default function Page() {
  return <HomePage locale={defaultLocale} />;
}

import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { alternates, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;

export const metadata: Metadata = { alternates: alternates("/", locale),
    openGraph: openGraphFor("/", locale) };

export default function Page() {
  return <HomePage locale="en" />;
}

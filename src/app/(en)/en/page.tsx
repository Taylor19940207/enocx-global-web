import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { alternates } from "@/lib/i18n";

const locale = "en" as const;

export const metadata: Metadata = { alternates: alternates("/", locale) };

export default function Page() {
  return <HomePage locale="en" />;
}

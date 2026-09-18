import type { Metadata } from "next";
import LocaleShell from "@/components/LocaleShell";
import { getDictionary, localeTags, OG_IMAGE } from "@/lib/i18n";

const locale = "ja" as const;
const t = getDictionary(locale);

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enocx.co.jp"),
  title: {
    default: t.meta.titleDefault,
    template: t.meta.titleTemplate,
  },
  description: t.meta.description,
  keywords: [...t.meta.keywords],
  openGraph: {
    type: "website",
    siteName: "EnocX",
    title: t.meta.ogTitle,
    description: t.meta.ogDescription,
    locale: localeTags[locale].openGraph,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale={locale}>{children}</LocaleShell>;
}

import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultLocale, getDictionary, localeTags } from "@/lib/i18n";

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// International grotesk for Latin labels, numerals and UI — evokes the
// clean, professional tone of global consulting firms.
const inter = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const t = getDictionary(defaultLocale);

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
    locale: localeTags[defaultLocale].openGraph,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={localeTags[defaultLocale].html}
      className={`${notoJP.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#main-content" className="skip-link">{t.common.skipToContent}</a>
        <Header />
        <main id="main-content" className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

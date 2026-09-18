import { Noto_Sans_JP, Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { getDictionary, localeTags, type Locale } from "@/lib/i18n";

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

/**
 * Shared shell for every locale's root layout.
 *
 * Each locale needs its own `<html lang>`, and only a root layout may render
 * `<html>` — hence one root layout per locale (route groups `(ja)` / `(en)`)
 * rather than a single shared one. Switching locale therefore triggers a full
 * page load, which is what a language change should do anyway.
 */
export default function LocaleShell({
  locale,
  children,
}: Readonly<{
  locale: Locale;
  children: React.ReactNode;
}>) {
  const t = getDictionary(locale);

  return (
    <html
      lang={localeTags[locale].html}
      className={`${notoJP.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#main-content" className="skip-link">{t.common.skipToContent}</a>
        <StructuredData locale={locale} />
        <Header locale={locale} />
        <main id="main-content" className="relative z-10 flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

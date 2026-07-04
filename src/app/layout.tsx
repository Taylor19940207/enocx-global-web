import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMargins from "@/components/decorative/PageMargins";

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enocx.co.jp"),
  title: {
    default: "EnocX｜日本進出・法人運営・会計税務のワンストップ支援",
    template: "%s｜EnocX",
  },
  description:
    "中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援。有資格の専門家チームが越境ビジネスの意思決定を伴走します。",
  keywords: [
    "日本法人設立",
    "外国企業 日本進出",
    "会計税務 中国語対応",
    "Japan market entry",
    "越境ビジネス コンサルティング",
  ],
  openGraph: {
    type: "website",
    siteName: "EnocX",
    title: "EnocX｜日本進出・法人運営・会計税務のワンストップ支援",
    description:
      "中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援。",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoJP.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <PageMargins />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "日本法人設立・会計税務・不動産資産金融・事業経営サポートを核に、法律・金融・医療・物流・教育・ECまで。日本進出のすべての工程をワンストップで支援します。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="日本進出のすべての工程を、一つの窓口で。"
        mobileTitleLines={["日本進出のすべての", "工程を、", "一つの窓口で。"]}
        desktopTitleLines={["日本進出のすべての工程を、", "一つの窓口で。"]}
        lead="設立・会計税務・資産金融・事業運営という4つの核を軸に、進出から成長までを分野横断で支援します。"
        crumbs={[{ label: "Home", href: "/" }, { label: "サービス" }]}
      />
      <Services withHeading={false} showExtended />
      <CTA />
    </>
  );
}

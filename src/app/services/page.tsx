import type { Metadata } from "next";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

const t = getDictionary(defaultLocale).routes.services;
const common = getDictionary(defaultLocale).common;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={t.heroTitle}
        mobileTitleLines={[...t.heroLines.mobile]}
        desktopTitleLines={[...t.heroLines.desktop]}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />
      <Services withHeading={false} showExtended />
      <CTA />
    </>
  );
}

import type { Metadata } from "next";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import People from "@/components/People";
import CTA from "@/components/CTA";

const t = getDictionary(defaultLocale).routes.people;
const common = getDictionary(defaultLocale).common;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title={t.heroTitle}
        mobileTitleLines={[...t.heroLines.mobile]}
        desktopTitleLines={[...t.heroLines.desktop]}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />
      <People withHeading={false} bg="bg-paper" />
      <CTA />
    </>
  );
}

import PageHero from "@/components/PageHero";
import People from "@/components/People";
import CTA from "@/components/CTA";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

export default function PeoplePage({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale).routes.people;
  const common = getDictionary(locale).common;

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
      <People withHeading={false} bg="bg-paper" locale={locale} />
      <CTA locale={locale} />
    </>
  );
}

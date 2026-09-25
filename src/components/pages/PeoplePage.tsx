import PageHero from "@/components/PageHero";
import People from "@/components/People";
import CTA from "@/components/CTA";
import { defaultLocale, getDictionary, href, type Locale } from "@/lib/i18n";

export default function PeoplePage({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale).routes.people;
  const common = getDictionary(locale).common;

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.heroTitle}
        titleLines={t.heroLines}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: href("/", locale) }, { label: t.crumb }]}
      />
      <People withHeading={false} bg="bg-paper" locale={locale} />
      <CTA locale={locale} />
    </>
  );
}

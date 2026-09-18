import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

export default function ServicesPage({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale).routes.services;
  const common = getDictionary(locale).common;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={t.heroTitle}
        titleLines={t.heroLines}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />
      <Services withHeading={false} showExtended locale={locale} />
      <CTA locale={locale} />
    </>
  );
}

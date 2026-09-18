import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import CaseIndexRow from "@/components/cases/CaseIndexRow";
import { getCaseStudies } from "@/lib/cases";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

export default function CasesPage({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale).routes.cases;
  const common = getDictionary(locale).common;
  const caseStudies = getCaseStudies(locale);

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={t.heroTitle}
        titleLines={t.heroLines}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <ul className="border-t border-mist-line">
            {caseStudies.map((caseStudy, i) => (
              <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} index={i} locale={locale} />
            ))}
          </ul>
        </div>
      </section>

      <CTA locale={locale} />
    </>
  );
}

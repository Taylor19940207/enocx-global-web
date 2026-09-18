import type { Metadata } from "next";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import CaseIndexRow from "@/components/cases/CaseIndexRow";
import { caseStudies } from "@/lib/cases";

const t = getDictionary(defaultLocale).routes.cases;
const common = getDictionary(defaultLocale).common;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={t.heroTitle}
        mobileTitleLines={[...t.heroLines.mobile]}
        desktopTitleLines={[...t.heroLines.desktop]}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <ul className="border-t border-mist-line">
            {caseStudies.map((caseStudy, i) => (
              <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} index={i} />
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import CaseIndexRow from "@/components/cases/CaseIndexRow";
import { caseStudies } from "@/lib/cases";

export const metadata: Metadata = {
  title: "支援事例",
  description:
    "日本進出・法人設立・許認可・会計税務の実際の案件を、進め方と期日、結果まで公開しています。掲載はお客様の許諾を得た範囲に限っています。",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="実際の案件で、どう進めたかを公開する。"
        mobileTitleLines={["実際の案件で、", "どう進めたかを", "公開する。"]}
        desktopTitleLines={["実際の案件で、", "どう進めたかを公開する。"]}
        lead="進め方・期日・結果を、案件ごとに記録しています。掲載は、お客様の許諾を得た範囲に限っています。"
        crumbs={[{ label: "Home", href: "/" }, { label: "支援事例" }]}
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

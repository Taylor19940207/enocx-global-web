import { defaultLocale, getDictionary, href, type Locale } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import CaseIdentity from "@/components/cases/CaseIdentity";
import CaseChallenges from "@/components/cases/CaseChallenges";
import CaseSolutions from "@/components/cases/CaseSolutions";
import CaseTimeline from "@/components/cases/CaseTimeline";
import CaseResults from "@/components/cases/CaseResults";
import CaseHighlights from "@/components/cases/CaseHighlights";
import CaseNav from "@/components/cases/CaseNav";
import { caseCategoryEyebrows, getCaseStudies } from "@/lib/cases";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/lib/cases";

/** Beats present on this case, in page order. */
function presentBeats(caseStudy: CaseStudy) {
  return [
    caseStudy.profile || caseStudy.metrics ? "identity" : null,
    caseStudy.challenges ? "challenges" : null,
    caseStudy.solutions ? "solutions" : null,
    caseStudy.timeline ? "timeline" : null,
    caseStudy.results ? "results" : null,
  ].filter((beat): beat is string => beat !== null);
}

export default function CaseDetailPage({
  caseStudy,
  locale = defaultLocale,
}: {
  caseStudy: CaseStudy;
  locale?: Locale;
}) {
  const t = getDictionary(locale).routes.cases;
  const common = getDictionary(locale).common;

  const eyebrow = caseCategoryEyebrows[caseStudy.category];
  const categoryLabel = getDictionary(locale).caseCategories[caseStudy.category];
  const all = getCaseStudies(locale);
  const position = all.findIndex((c) => c.slug === caseStudy.slug);
  const beats = presentBeats(caseStudy);
  // Cases carry different beats, so the paper / paper-2 alternation is counted
  // over the beats this case actually has — never over the full template.
  const surfaceOf = (beat: string): "paper" | "paper-2" =>
    beats.indexOf(beat) % 2 === 0 ? "paper" : "paper-2";

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={caseStudy.title}
        titleLines={caseStudy.titleLines}
        longTitle={caseStudy.longTitle}
        lead={caseStudy.lead}
        crumbs={[
          { label: common.home, href: href("/", locale) },
          { label: t.crumb, href: href("/cases", locale) },
          { label: categoryLabel },
        ]}
      />

      {beats.map((beat) => (
        <section
          key={beat}
          className={cn(
            "py-24 lg:py-section",
            surfaceOf(beat) === "paper" ? "bg-paper" : "bg-paper-2"
          )}
        >
          {beat === "identity" && (
            <CaseIdentity
              clientLabel={caseStudy.clientLabel}
              disclosure={caseStudy.disclosure}
              profile={caseStudy.profile}
              metrics={caseStudy.metrics}
            />
          )}
          {beat === "challenges" && caseStudy.challenges && (
            <CaseChallenges
              copy={caseStudy.challenges}
              items={caseStudy.challenges.items}
            />
          )}
          {beat === "solutions" && caseStudy.solutions && (
            <CaseSolutions
              copy={caseStudy.solutions}
              items={caseStudy.solutions.items}
            />
          )}
          {beat === "timeline" && caseStudy.timeline && (
            <CaseTimeline
              copy={caseStudy.timeline}
              items={caseStudy.timeline.items}
              surface={surfaceOf(beat)}
            />
          )}
          {beat === "results" && caseStudy.results && (
            <CaseResults
              copy={caseStudy.results}
              items={caseStudy.results.items}
            />
          )}
        </section>
      ))}

      {caseStudy.highlights && (
        <section className="bg-mist-soft py-24 lg:py-section">
          <CaseHighlights
            copy={caseStudy.highlights}
            items={caseStudy.highlights.items}
          />
        </section>
      )}

      <section className="bg-paper py-16 lg:py-20">
        <CaseNav
          prev={all[position - 1]}
          next={all[position + 1]}
          locale={locale}
        />
      </section>

      <CTA locale={locale} />
    </>
  );
}

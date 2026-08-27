import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import CaseIdentity from "@/components/cases/CaseIdentity";
import CaseChallenges from "@/components/cases/CaseChallenges";
import CaseSolutions from "@/components/cases/CaseSolutions";
import CaseTimeline from "@/components/cases/CaseTimeline";
import CaseResults from "@/components/cases/CaseResults";
import CaseHighlights from "@/components/cases/CaseHighlights";
import { caseCategories, caseStudies, getCaseStudy } from "@/lib/cases";
import { cn } from "@/lib/cn";

// Static export: only the slugs listed below are built, and an unknown slug is
// a 404 rather than a runtime render (`dynamicParams: true` is unsupported).
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title:
      caseStudy.metaTitle ??
      `${caseCategories[caseStudy.category].label}の支援事例`,
    description: caseStudy.metaDescription,
  };
}

/** Beats present on this case, in page order. */
function presentBeats(caseStudy: NonNullable<ReturnType<typeof getCaseStudy>>) {
  return [
    caseStudy.profile || caseStudy.metrics ? "identity" : null,
    caseStudy.challenges ? "challenges" : null,
    caseStudy.solutions ? "solutions" : null,
    caseStudy.timeline ? "timeline" : null,
    caseStudy.results ? "results" : null,
  ].filter((beat): beat is string => beat !== null);
}

export default async function CasePage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  const category = caseCategories[caseStudy.category];
  const beats = presentBeats(caseStudy);
  // Cases carry different beats, so the paper / paper-2 alternation is counted
  // over the beats this case actually has — never over the full template.
  const surfaceOf = (beat: string): "paper" | "paper-2" =>
    beats.indexOf(beat) % 2 === 0 ? "paper" : "paper-2";

  return (
    <>
      <PageHero
        eyebrow={category.eyebrow}
        title={caseStudy.title}
        mobileTitleLines={caseStudy.titleLines.mobile}
        desktopTitleLines={caseStudy.titleLines.desktop}
        longTitle={caseStudy.longTitle}
        lead={caseStudy.lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "支援事例", href: "/cases" },
          { label: category.label },
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

      <CTA />
    </>
  );
}

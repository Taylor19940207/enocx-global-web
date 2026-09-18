import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetailPage from "@/components/pages/CaseDetailPage";
import { caseCategories, caseStudies, getCaseStudy } from "@/lib/cases";
import { alternates, defaultLocale, getDictionary } from "@/lib/i18n";

const locale = "ja" as const;
const t = getDictionary(locale).routes.cases;

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
      `${caseCategories[caseStudy.category].label}${t.detailTitleSuffix}`,
    description: caseStudy.metaDescription,
    alternates: alternates(`/cases/${slug}`, defaultLocale),
  };
}

export default async function Page({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  return <CaseDetailPage caseStudy={caseStudy} locale={locale} />;
}

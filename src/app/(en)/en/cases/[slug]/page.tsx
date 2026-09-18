import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetailPage from "@/components/pages/CaseDetailPage";
import { caseSlugs, getCaseStudy } from "@/lib/cases";
import { alternates, getDictionary, openGraphFor } from "@/lib/i18n";

const locale = "en" as const;
const t = getDictionary(locale).routes.cases;

// Static export: only the slugs listed below are built, and an unknown slug is
// a 404 rather than a runtime render (`dynamicParams: true` is unsupported).
export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/en/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug, locale);
  if (!caseStudy) return {};

  return {
    title:
      caseStudy.metaTitle ??
      `${getDictionary(locale).caseCategories[caseStudy.category]}${t.detailTitleSuffix}`,
    description: caseStudy.metaDescription,
    alternates: alternates(`/cases/${slug}`, locale),
    openGraph: openGraphFor(`/cases/${slug}`, locale),
  };
}

export default async function Page({ params }: PageProps<"/en/cases/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug, locale);
  if (!caseStudy) notFound();
  return <CaseDetailPage caseStudy={caseStudy} locale={locale} />;
}

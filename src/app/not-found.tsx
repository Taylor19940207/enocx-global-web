import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import LocaleShell from "@/components/LocaleShell";
import { defaultLocale, getDictionary, href } from "@/lib/i18n";

/**
 * With one root layout per locale there is no layout above the route groups,
 * so an unmatched URL has none — it rendered bare, with no `lang` and no site
 * chrome. This supplies the shell itself. An unknown path carries no locale,
 * so it answers in the default one.
 */
const locale = defaultLocale;
const t = getDictionary(locale).notFound;

export const metadata: Metadata = { title: t.metaTitle };

export default function NotFound() {
  return (
    <LocaleShell locale={locale}>
      <section className="bg-paper py-24 lg:py-section">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <p className="font-latin text-5xl font-bold tracking-tight text-accent-600">
          {t.eyebrow}
        </p>
        <div className="mt-8">
          <SectionHeading
            title={t.heading}
            titleUnits={[...t.headingUnits]}
            lead={t.lead}
          />
        </div>
        <Link
          href={href("/", locale)}
          className="link-arrow mt-10 inline-flex min-h-11 items-center text-sm text-ink underline decoration-mist-line underline-offset-8 transition-colors hover:text-accent-600"
        >
          {t.home}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        </div>
      </section>
    </LocaleShell>
  );
}

import Link from "next/link";
import { caseCategories, caseStudies, type CaseStudy } from "@/lib/cases";

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d={direction === "next" ? "M3 8h10M9 4l4 4-4 4" : "M13 8H3M7 4L3 8l4 4"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * End-of-case navigation. Reaching the index previously meant the breadcrumb at
 * the very top of the page or the browser's back button; this also tells a
 * reader who finished one case that there are others.
 *
 * The neighbours are identified by position and category rather than by title:
 * case titles are full sentences, and two of them set three lines deep at each
 * end left the band reading as a wall of small bold text.
 */

function Neighbour({ caseStudy }: { caseStudy: CaseStudy }) {
  const position = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  return (
    <span className="mt-2 flex items-baseline gap-3 text-sm font-bold leading-[1.6] text-ink transition-colors group-hover:text-accent-600">
      <span className="font-latin text-accent-600">
        {String(position + 1).padStart(2, "0")}
      </span>
      {caseCategories[caseStudy.category].label}
    </span>
  );
}
export default function CaseNav({
  prev,
  next,
}: {
  prev?: CaseStudy;
  next?: CaseStudy;
}) {
  return (
    <nav aria-label="支援事例の移動" className="mx-auto max-w-[1320px] px-6 md:px-10">
      <div className="grid gap-8 border-t border-mist-line pt-10 md:grid-cols-3 md:items-start md:gap-10">
        <div>
          {prev && (
            <Link href={`/cases/${prev.slug}`} className="group block">
              <span className="link-arrow link-arrow-back text-xs text-slate transition-colors group-hover:text-accent-600">
                <Arrow direction="prev" />
                前の事例
              </span>
              <Neighbour caseStudy={prev} />
            </Link>
          )}
        </div>

        <div className="md:text-center">
          <Link
            href="/cases"
            className="link-arrow inline-flex min-h-11 items-center text-sm text-ink underline decoration-mist-line underline-offset-8 transition-colors hover:text-accent-600"
          >
            支援事例の一覧へ
          </Link>
        </div>

        <div className="md:text-right">
          {next && (
            <Link href={`/cases/${next.slug}`} className="group block">
              <span className="link-arrow text-xs text-slate flex-row-reverse transition-colors group-hover:text-accent-600">
                <Arrow direction="next" />
                次の事例
              </span>
              <span className="md:flex md:justify-end">
                <Neighbour caseStudy={next} />
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

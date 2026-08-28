import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";

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
 */
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
              <span className="mt-2 block max-w-[26ch] text-sm font-bold leading-[1.6] text-ink transition-colors group-hover:text-accent-600">
                {prev.titleLines.mobile.map((unit) => (
                  <span key={unit} className="inline-block">
                    {unit}
                  </span>
                ))}
              </span>
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
              <span className="mt-2 block max-w-[26ch] text-sm font-bold leading-[1.6] text-ink transition-colors group-hover:text-accent-600 md:ml-auto">
                {next.titleLines.mobile.map((unit) => (
                  <span key={unit} className="inline-block">
                    {unit}
                  </span>
                ))}
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

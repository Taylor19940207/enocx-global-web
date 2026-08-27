import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { cn } from "@/lib/cn";
import type { CaseSectionCopy, CaseTimelineEntry } from "@/lib/cases";

/**
 * Long-form sequence: sticky editorial split on desktop, single rail on mobile
 * (storyboard §5). The node ring is painted in the section's own surface so the
 * rail reads as passing behind it — hence `surface`.
 */
export default function CaseTimeline({
  copy,
  items,
  surface,
}: {
  copy: CaseSectionCopy;
  items: CaseTimelineEntry[];
  surface: "paper" | "paper-2";
}) {
  return (
    <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading
          title={copy.heading}
          titleUnits={copy.headingUnits}
          lead={copy.lead}
        />
      </div>

      <Reveal>
        <ol className="timeline-flow relative border-l border-mist-line pl-8 md:pl-12">
          {items.map((t) => (
            <li key={t.date} className="relative pb-12 last:pb-0">
              <span
                className={cn(
                  "absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 md:-left-[3.3rem]",
                  surface === "paper" ? "ring-paper" : "ring-paper-2"
                )}
              />
              <p className="font-latin text-sm font-semibold tracking-wide text-accent-600">
                {t.date}
              </p>
              <h3 className="mt-2 text-xl font-bold text-ink">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.desc}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}

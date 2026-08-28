import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { cn } from "@/lib/cn";
import { cellBorder, pairGrid } from "@/lib/cases/layout";
import type { CaseResult, CaseSectionCopy } from "@/lib/cases";

export default function CaseResults({
  copy,
  items,
}: {
  copy: CaseSectionCopy;
  items: CaseResult[];
}) {
  const grid = pairGrid(items.length);

  return (
    <div className="mx-auto max-w-[1320px] px-6 md:px-10">
      <SectionHeading
        title={copy.heading}
        titleUnits={copy.headingUnits}
        lead={copy.lead}
      />
      <div className={cn("mt-14 grid grid-cols-1 border-t border-mist-line", grid.className)}>
        {items.map((r, i) => (
          <Reveal
            key={r.title}
            delay={i * 80}
            className={cn(
              "border-b border-mist-line py-8 lg:py-10",
              i % grid.cols === 0 ? "md:pr-10" : "md:pl-10",
              cellBorder(i, grid)
            )}
          >
            <h3 className="text-lg font-bold text-ink">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

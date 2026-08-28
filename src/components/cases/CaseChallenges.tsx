import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { cn } from "@/lib/cn";
import { cellBorder, challengesGrid } from "@/lib/cases/layout";
import type { CaseChallenge, CaseSectionCopy } from "@/lib/cases";

export default function CaseChallenges({
  copy,
  items,
}: {
  copy: CaseSectionCopy;
  items: CaseChallenge[];
}) {
  const grid = challengesGrid(items.length);

  return (
    <div className="mx-auto max-w-[1320px] px-6 md:px-10">
      <SectionHeading
        title={copy.heading}
        titleUnits={copy.headingUnits}
        lead={copy.lead}
      />
      <div className={cn("mt-14 grid grid-cols-1 border-t border-mist-line", grid.className)}>
        {items.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 90}
            className={cn(
              "border-b border-mist-line py-8 md:px-8",
              i % grid.cols === 0 && "md:pl-0",
              cellBorder(i, grid)
            )}
          >
            <h3 className="text-lg font-bold text-ink">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

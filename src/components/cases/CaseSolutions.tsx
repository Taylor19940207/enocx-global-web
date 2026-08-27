import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { cn } from "@/lib/cn";
import { cellBorder, pairGrid } from "@/lib/cases/layout";
import type { CaseSectionCopy, CaseSolution } from "@/lib/cases";

export default function CaseSolutions({
  copy,
  items,
}: {
  copy: CaseSectionCopy;
  items: CaseSolution[];
}) {
  const grid = pairGrid(items.length);

  return (
    <div className="mx-auto max-w-[1320px] px-6 md:px-10">
      <SectionHeading
        title={copy.heading}
        titleUnits={copy.headingUnits}
        lead={copy.lead}
      />
      <div className={cn("mt-16 grid grid-cols-1 border-t border-mist-line", grid.className)}>
        {items.map((s, i) => (
          <Reveal
            key={s.no}
            delay={i * 80}
            as="article"
            className={cn(
              "flex flex-col border-b border-mist-line py-8 lg:py-10",
              i % grid.cols === 0 ? "md:pr-10" : "md:pl-10",
              cellBorder(i, grid)
            )}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-latin text-4xl font-bold tracking-tight text-accent">
                {s.no}
              </span>
              <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            <ul className="mt-6 space-y-2.5 border-t border-mist-line pt-6">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="grid grid-cols-[1.25rem_1fr] gap-3 text-sm leading-snug text-ink-soft"
                >
                  <span className="mt-2 h-px w-4 bg-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

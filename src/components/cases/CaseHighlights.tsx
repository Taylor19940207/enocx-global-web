import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import type { CaseSectionCopy } from "@/lib/cases";

export default function CaseHighlights({
  copy,
  items,
}: {
  copy: CaseSectionCopy;
  items: string[];
}) {
  return (
    <div className="mx-auto max-w-[1320px] px-6 md:px-10">
      <SectionHeading
        title={copy.heading}
        titleUnits={copy.headingUnits}
        lead={copy.lead}
      />
      <Reveal className="mt-14">
        <ul className="space-y-6 border-t border-mist-line pt-10">
          {items.map((h, i) => (
            <li key={h} className="flex gap-6">
              <span className="font-latin shrink-0 text-sm font-bold text-accent-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-3xl text-base leading-[1.9] text-slate-600">{h}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

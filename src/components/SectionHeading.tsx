import Reveal from "./Reveal";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  /** Semantic wrap units: line breaks may only occur between units. */
  titleUnits?: string[];
  lead?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  titleUnits,
  lead,
  align = "left",
  invert = false,
}: Props) {
  return (
    <Reveal
      className={cn("max-w-[46rem]", align === "center" && "mx-auto text-center")}
    >
      {eyebrow && (
        <p className={cn("eyebrow", invert ? "text-mist" : "text-slate")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          eyebrow && "mt-5",
          "max-w-[22ch] text-[clamp(1.9rem,3.8vw,2.65rem)] font-bold leading-[1.32] tracking-[-0.025em] [text-wrap:balance]",
          invert ? "text-white" : "text-ink"
        )}
      >
        {titleUnits
          ? titleUnits.map((unit) => (
              <span key={unit} className="inline-block">
                {unit}
              </span>
            ))
          : title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 max-w-[44rem] text-base leading-[1.85] [text-wrap:pretty] sm:text-[1.05rem]",
            invert ? "text-white/70" : "text-slate-600"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

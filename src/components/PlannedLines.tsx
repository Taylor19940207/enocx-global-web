import { Fragment } from "react";
import type { LinePlan } from "@/lib/i18n";

/**
 * Renders a per-breakpoint line plan (CONTRACT §9) with its text written once.
 *
 * The plans used to be rendered twice — a mobile copy and a desktop copy, one
 * hidden by CSS — so the HTML carried every planned heading doubled
 * ("日中をつなぎ、アジアへ。日中をつなぎ、アジアへ。"). Anything that reads the
 * markup without applying CSS (AI summaries, some crawlers, text extraction)
 * got the duplicate. Here the text is split at the union of both plans'
 * boundaries and the breakpoint decides which boundaries act.
 */

type Breakpoint = "md" | "lg";

// Literal class strings, so Tailwind's scanner sees every one.
const breakClass = {
  md: { mobile: "md:hidden", desktop: "hidden md:inline" },
  lg: { mobile: "lg:hidden", desktop: "hidden lg:inline" },
} as const;

const groupClass = { md: "md:inline-block", lg: "lg:inline-block" } as const;

type Segment = { text: string; mobile: boolean; desktop: boolean };

/** Character offsets at which a plan starts a new line. */
function cuts(lines: readonly string[]) {
  let at = 0;
  return new Set(lines.slice(0, -1).map((line) => (at += line.length)));
}

/**
 * Splits the planned text at every boundary either plan uses. `mobile` /
 * `desktop` say whether the boundary after the segment belongs to that plan.
 * Throws when the plans are not the same text — a typo in one of them would
 * otherwise show different words at different widths.
 */
export function planSegments(plan: LinePlan): Segment[] {
  const text = plan.mobile.join("");
  if (plan.desktop.join("") !== text) {
    throw new Error(
      `Line plan text differs between breakpoints: "${text}" / "${plan.desktop.join("")}"`
    );
  }
  const m = cuts(plan.mobile);
  const d = cuts(plan.desktop);
  const all = [...new Set([...m, ...d])].sort((a, b) => a - b);

  const segments: Segment[] = [];
  let from = 0;
  for (const at of [...all, text.length]) {
    segments.push({ text: text.slice(from, at), mobile: m.has(at), desktop: d.has(at) });
    from = at;
  }
  return segments;
}

/** Forced line breaks: each planned line starts on a new line. */
export default function PlannedLines({ plan, at = "md" }: { plan: LinePlan; at?: Breakpoint }) {
  return planSegments(plan).map((s, i) => (
    <Fragment key={i}>
      {s.text}
      {s.mobile && s.desktop ? (
        <br />
      ) : s.mobile ? (
        <br className={breakClass[at].mobile} />
      ) : s.desktop ? (
        <br className={breakClass[at].desktop} />
      ) : null}
    </Fragment>
  ));
}

/**
 * Wrap units rather than forced breaks: a line may only break between planned
 * units, and only where the plan for the current breakpoint allows. Each
 * desktop unit is a group that cannot break from `at` up; inside it, segments
 * are unbreakable on their own. Below `at`, a line may break at any boundary
 * of either plan; both plans cut only at 文節, so that never opens a line on a
 * particle, and where the desktop plan is the coarser one (most of them) it is
 * exactly the mobile plan.
 */
export function PlannedUnits({ plan, at = "md" }: { plan: LinePlan; at?: Breakpoint }) {
  const groups: Segment[][] = [[]];
  for (const s of planSegments(plan)) {
    groups[groups.length - 1].push(s);
    if (s.desktop) groups.push([]);
  }
  return groups.map((group, g) => (
    <span key={g} className={groupClass[at]}>
      {group.map((s, i) => (
        <span key={i} className="inline-block">
          {s.text}
        </span>
      ))}
    </span>
  ));
}

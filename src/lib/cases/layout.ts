/**
 * Cardinality rules for case beats.
 *
 * The first case shipped with exactly 3 metrics, 3 challenges and 2 solutions,
 * so the original page hardcoded those column counts and the hairline borders
 * that separate them. Later cases do not match: some carry 2 metrics, some 4
 * challenges. These maps fix what each count looks like, rather than leaving a
 * generic renderer to guess — the class strings stay literal so Tailwind can
 * still see them.
 */

type Grid = {
  className: string;
  /** Columns at the breakpoint above; used to place the vertical hairlines. */
  cols: number;
  prefix: "sm" | "md";
};

/** Metric band: up to 3 across, 4 wraps to 2x2 rather than shrinking further. */
export function metricsGrid(count: number): Grid {
  if (count <= 1) return { className: "grid-cols-1", cols: 1, prefix: "sm" };
  if (count === 2) return { className: "sm:grid-cols-2", cols: 2, prefix: "sm" };
  if (count === 3) return { className: "sm:grid-cols-3", cols: 3, prefix: "sm" };
  return { className: "sm:grid-cols-2", cols: 2, prefix: "sm" };
}

/** Challenge cards: short prose, so 3 across is comfortable; 4 wraps to 2x2. */
export function challengesGrid(count: number): Grid {
  if (count <= 1) return { className: "grid-cols-1", cols: 1, prefix: "md" };
  if (count === 2) return { className: "md:grid-cols-2", cols: 2, prefix: "md" };
  if (count === 3) return { className: "md:grid-cols-3", cols: 3, prefix: "md" };
  return { className: "md:grid-cols-2", cols: 2, prefix: "md" };
}

/**
 * Solutions and results carry bullet lists and longer prose, so they stay at
 * two columns at every count — 3 items render as 2 + 1, 4 as 2 + 2.
 */
export function pairGrid(count: number): Grid {
  if (count <= 1) return { className: "grid-cols-1", cols: 1, prefix: "md" };
  return { className: "md:grid-cols-2", cols: 2, prefix: "md" };
}

/**
 * Vertical hairline for every cell that is not first in its row. Written as
 * whole literal class strings so Tailwind's scanner picks them up.
 */
export function cellBorder(index: number, grid: Grid): string | false {
  if (grid.cols <= 1 || index % grid.cols === 0) return false;
  return grid.prefix === "sm" ? "sm:border-l" : "md:border-l";
}

/**
 * The metric band closes with the container's own `border-y`, so a cell only
 * keeps its stacked-mobile bottom rule while it is *not* on the last row —
 * which is what separates the two rows of a 2x2 band.
 */
export function cellBottomBorder(
  index: number,
  count: number,
  grid: Grid
): string | false {
  const lastRowStart = count - (count % grid.cols || grid.cols);
  if (index < lastRowStart) return false;
  return grid.prefix === "sm" ? "sm:border-b-0" : "md:border-b-0";
}

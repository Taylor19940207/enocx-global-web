import Reveal from "../Reveal";
import { cn } from "@/lib/cn";
import { cellBorder, cellBottomBorder, metricsGrid } from "@/lib/cases/layout";
import type { CaseMetric, CaseProfileRow } from "@/lib/cases";

/** Client designation, publication basis, profile rows and the metric band. */
export default function CaseIdentity({
  clientLabel,
  disclosure,
  profile,
  metrics,
}: {
  clientLabel: string;
  disclosure: string;
  profile?: CaseProfileRow[];
  metrics?: CaseMetric[];
}) {
  const grid = metrics ? metricsGrid(metrics.length) : null;

  return (
    <div className="mx-auto max-w-[1320px] px-6 md:px-10">
      <div
        className={cn(
          "grid grid-cols-1 gap-16",
          profile && "lg:grid-cols-[1fr_1.1fr] lg:gap-24"
        )}
      >
        <Reveal>
          <p className="font-latin text-xs font-semibold uppercase tracking-[0.12em] text-slate">
            Client
          </p>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl">
            {clientLabel}
          </h2>
          <p className="mt-6 max-w-[44rem] text-sm leading-relaxed text-slate-600">
            {disclosure}
          </p>
        </Reveal>

        {profile && (
          <Reveal delay={80}>
            <dl className="divide-y divide-mist-line border-y border-mist-line">
              {profile.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-ink">{row.k}</dt>
                  <dd className="text-sm leading-relaxed text-slate-600">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>

      {metrics && grid && (
        <Reveal className="mt-20">
          <div className={cn("grid border-y border-mist-line", grid.className)}>
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={cn(
                  "border-b border-mist-line px-8 py-10",
                  cellBottomBorder(i, metrics.length, grid),
                  cellBorder(i, grid)
                )}
              >
                <p className="flex items-baseline gap-1.5">
                  <span className="font-latin text-5xl font-bold tracking-tight text-ink">
                    {m.value}
                  </span>
                  <span className="text-lg font-bold text-slate">{m.unit}</span>
                </p>
                <p className="mt-4 text-sm leading-snug text-slate-600">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}

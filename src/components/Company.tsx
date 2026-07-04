import { company } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Company() {
  return (
    <section id="company" className="bg-paper-2 py-24 lg:py-section">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Company"
          title="東京と上海を拠点に、日中の橋渡しを。"
          lead="会計税務事務所を前身とし、越境ビジネスのハブとして事業を展開しています。"
        />

        <Reveal>
          <dl className="divide-y divide-mist-line border-t border-mist-line">
            {company.rows.map((r) => (
              <div
                key={r.k}
                className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-slate">{r.k}</dt>
                <dd className="text-sm leading-relaxed text-ink">{r.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

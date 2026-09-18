import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import { getContent } from "@/lib/content";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

export default function CompanyPage({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale).routes.company;
  const { company, offices, presenceCities } = getContent(locale);
  const common = getDictionary(locale).common;

  return (
    <>
      <PageHero
        eyebrow="Company"
        title={t.heroTitle}
        titleLines={t.heroLines}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
        image="/media/inside-bg.png"
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading title={t.profileHeading} />
          <Reveal>
            <dl className="divide-y divide-mist-line border-t border-mist-line">
              {company.rows.map((r) => (
                <div
                  key={r.k}
                  className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-slate">{r.k}</dt>
                  <dd className="text-sm leading-relaxed text-ink">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
          <SectionHeading
            title={t.historyHeading}
            lead={t.historyLead}
          />
          <div className="relative pl-1 md:pl-0">
            {/* decorative vertical rail with gradient fade */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-2 left-0 top-1 w-px bg-gradient-to-b from-accent via-slate/30 to-transparent md:left-[8rem]"
            />

            {company.history.map((h, i) => {
              const isLast = i === company.history.length - 1;
              return (
                <Reveal
                  key={h.year}
                  delay={i * 70}
                  className="group relative pb-14 last:pb-0 md:grid md:grid-cols-[8rem_1fr]"
                >
                  {/* node on the rail */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-paper-2 transition-transform duration-300 group-hover:scale-125 md:left-[8rem] ${
                      isLast ? "bg-accent" : "bg-slate"
                    }`}
                  />
                  {/* year column */}
                  <div className="mb-2 pl-6 md:mb-0 md:pl-0 md:pr-10 md:text-right">
                    <span className="font-latin text-xl font-bold tracking-tight text-slate md:text-2xl">
                      {h.year}
                    </span>
                  </div>

                  {/* content with horizontal connector */}
                  <div className="relative pl-6 md:pl-10">
                    <span
                      aria-hidden
                      className="absolute left-0 top-3 hidden h-px w-6 bg-mist-line md:block"
                    />
                    <h3 className="text-lg font-bold text-ink">{h.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                      {h.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <SectionHeading
            title={t.officesHeading}
            lead={t.officesLead}
          />

          <Reveal className="mt-14">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {presenceCities.map((c) => (
                <span key={c} className="font-latin text-sm font-medium tracking-wide text-slate">{c}</span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 border-t border-mist-line md:grid-cols-3">
            {offices.map((o, index) => (
              <Reveal key={o.address} as="article" className={`border-b border-mist-line py-8 md:px-8 ${index > 0 ? "md:border-l" : "md:pl-0"}`}>
                <p className="font-latin text-xs font-semibold uppercase tracking-widest text-slate">
                  {o.en}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{o.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {o.address}
                </p>
                {o.tel && (
                  <p className="font-latin mt-2 text-sm text-slate-600">
                    TEL {o.tel}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Proof showClientList locale={locale} />
      <CTA locale={locale} />
    </>
  );
}

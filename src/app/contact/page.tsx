import type { Metadata } from "next";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { offices, presenceCities } from "@/lib/content";

const t = getDictionary(defaultLocale).routes.contact;
const common = getDictionary(defaultLocale).common;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={t.heroTitle}
        mobileTitleLines={[...t.heroLines.mobile]}
        desktopTitleLines={[...t.heroLines.desktop]}
        lead={t.heroLead}
        crumbs={[{ label: common.home, href: "/" }, { label: t.crumb }]}
      />

      <section className="bg-paper py-24 lg:py-section">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-10">
            <div>
              <p className="font-latin text-xs font-semibold uppercase tracking-[0.12em] text-slate">Direct</p>
              <a
                href="mailto:info@enocx.co.jp"
                className="mt-3 block text-lg font-bold text-ink transition hover:text-slate"
              >
                info@enocx.co.jp
              </a>
            </div>

            <div className="space-y-6 border-t border-mist-line pt-8">
              {offices.map((o) => (
                <div key={o.address}>
                  <p className="text-sm font-semibold text-ink">
                    {o.city}
                    <span className="ml-2 font-latin text-xs font-normal text-slate">
                      {o.role}
                    </span>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {o.address}
                  </p>
                  {o.tel && (
                    <p className="font-latin mt-1 text-sm text-slate-600">
                      TEL {o.tel}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-mist-line pt-8">
              <p className="font-latin text-xs font-semibold uppercase tracking-[0.12em] text-slate">Global Presence</p>
              <ul className="font-latin mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink">
                {presenceCities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

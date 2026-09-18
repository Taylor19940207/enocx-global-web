import Link from "next/link";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function CTA({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  return (
    <section id="contact" className="border-t border-mist bg-mist-soft py-18 md:py-20 lg:py-24">
      <Reveal className="mx-auto grid max-w-[1320px] gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          <h2 className="max-w-[22ch] text-[clamp(1.9rem,3.8vw,2.75rem)] font-bold leading-[1.32] tracking-[-0.03em] text-ink [text-wrap:balance]">
            {t.cta.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.85] text-slate-600 [text-wrap:pretty]">
            {t.cta.lead}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <Link href="/contact" className="link-arrow pressable min-h-12 whitespace-nowrap rounded-full bg-ink px-8 py-4 text-sm text-white transition hover:bg-slate-dark">
            {t.cta.primary}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/services" className="font-latin inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 underline decoration-slate/30 underline-offset-8 transition hover:text-ink">
            {t.cta.secondary}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

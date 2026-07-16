import { clients, strategicPartners } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import LogoMarquee from "./LogoMarquee";

type Props = {
  showClientList?: boolean;
};

export default function Proof({ showClientList = false }: Props) {
  return (
    <section id="partners" className="scroll-mt-24 bg-paper py-16 md:py-18 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          title="日中をまたぐ企業と、共に。"
          lead="戦略的パートナーおよびクライアント企業とのネットワークが、進出後の事業運営を支えます。"
        />

        <Reveal className="mt-12 border-y border-mist-line">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {strategicPartners.map((partner, index) => (
              <div
                key={partner}
                className={`py-8 sm:px-8 ${index > 0 ? "border-t border-mist-line sm:border-l sm:border-t-0" : ""}`}
              >
                <p className="font-latin text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">Strategic Partner</p>
                <p className="mt-3 text-lg font-bold text-ink">{partner}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <p className="text-sm font-semibold text-ink">Clients &amp; Business Partners</p>
          <div className="mt-7">
            <LogoMarquee />
          </div>
        </Reveal>

        {showClientList && (
          <Reveal className="mt-14 border-y border-mist-line">
            <details className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-sm font-semibold text-ink marker:content-none">
                <span>お取引企業一覧</span>
                <span className="flex items-center gap-4">
                  <span className="text-xs font-normal text-slate-600">{clients.length} 社</span>
                  <span className="font-latin text-xl font-light text-slate transition-transform duration-200 group-open:rotate-45" aria-hidden>+</span>
                </span>
              </summary>
              <ul className="columns-1 gap-10 border-t border-mist-line py-8 sm:columns-2 lg:columns-3">
                {clients.map((client) => (
                  <li key={client} className="mb-3 break-inside-avoid text-sm leading-snug text-slate-600">
                    {client}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        )}
      </div>
    </section>
  );
}

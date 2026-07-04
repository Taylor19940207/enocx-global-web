import { clients, strategicPartners } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import LogoMarquee from "./LogoMarquee";

type Props = {
  showClientList?: boolean;
};

export default function Proof({ showClientList = false }: Props) {
  return (
    <section id="partners" className="scroll-mt-24 bg-paper py-24 lg:py-section">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Track Record"
          title="日中をまたぐ企業と、共に。"
          lead="戦略的パートナーおよびクライアント企業とのネットワークが、進出後の事業運営を支えます。"
        />

        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {strategicPartners.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-mist-line bg-mist-soft px-6 py-8 text-center"
              >
                <p className="eyebrow justify-center text-slate">
                  Strategic Partner
                </p>
                <p className="mt-3 text-lg font-bold text-ink">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <p className="eyebrow text-base text-slate">Clients &amp; Business Partners</p>
          <div className="mt-12">
            <LogoMarquee />
          </div>
        </Reveal>

        {showClientList && (
          <Reveal className="mt-14">
            <div className="flex items-baseline justify-between border-b border-mist-line pb-4">
              <p className="text-sm font-semibold text-ink">お取引企業一覧</p>
              <span className="text-xs text-slate-600">{clients.length} 社</span>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((c) => (
                <li
                  key={c}
                  className="flex gap-2.5 text-sm leading-snug text-slate-600"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mist" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}

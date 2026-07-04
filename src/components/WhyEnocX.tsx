import { advantages } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BackgroundArcs from "./decorative/BackgroundArcs";

export default function WhyEnocX() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 lg:py-section">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #c4e0e8, transparent 70%)" }}
      />
      <BackgroundArcs variant="dark" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Why EnocX"
          title="翻訳ではなく、両国の商習慣を理解した伴走を。"
          lead="言語・制度・商習慣のギャップを埋め、意思決定に必要な情報を、日本の現地目線で提供します。"
          invert
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <Reveal
              key={a.no}
              delay={i * 90}
              className="group relative flex flex-col border-t border-white/15 pt-6 transition-colors hover:border-accent"
            >
              <span className="font-latin text-sm font-semibold tracking-widest text-accent">
                {a.no}
              </span>
              <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-white/65">
                {a.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

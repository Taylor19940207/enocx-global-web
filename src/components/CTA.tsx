import Link from "next/link";
import Reveal from "./Reveal";
import BackgroundArcs from "./decorative/BackgroundArcs";

export default function CTA() {
  return (
    <section id="contact" className="bg-paper px-6 pb-24 md:px-10 lg:pb-section">
      <Reveal className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 md:px-16 md:py-24">
          <div
            className="pointer-events-none absolute -left-20 -bottom-24 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "radial-gradient(circle, #58656b, transparent 70%)",
            }}
          />
          <BackgroundArcs variant="dark" />
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow text-mist">Contact</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              日本進出の第一歩を、
              <br />
              まずは相談から。
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              先行相談料はいただきません。日本語・中国語・英語のいずれでも、御社の状況に合わせてご相談いただけます。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="link-arrow rounded-full bg-white px-8 py-4 text-sm text-ink transition hover:bg-mist"
              >
                無料相談を申し込む
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="font-latin rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

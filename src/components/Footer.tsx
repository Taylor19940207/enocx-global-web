import Image from "next/image";
import Link from "next/link";
import { footerNav, presenceCities, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-mist-line bg-paper-2">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/media/ft-logo.png"
              alt="EnocX"
              width={1338}
              height={374}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援する日中ビジネスハブ。
            </p>
          </div>

          <nav>
            <p className="font-latin mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate">Menu</p>
            <div className="mt-2 grid grid-cols-2 gap-x-6">
              {footerNav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="flex min-h-11 items-center text-sm text-ink transition hover:text-slate"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-4">
            <p className="font-latin mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate">Global Presence</p>
            <ul className="font-latin flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink">
              {presenceCities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="mt-2">
              <p className="text-sm font-semibold text-ink">本社 / Tokyo</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {site.offices.tokyo}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-mist-line pt-8">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {site.nameJp}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

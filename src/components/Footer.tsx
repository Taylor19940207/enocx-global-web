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
              src="/media/logo-b.svg"
              alt="EnocX"
              width={140}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              中国・海外企業の日本市場進出を、法人設立から会計税務・法務・事業拡大まで一気通貫で支援する日中ビジネスハブ。
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-1 text-slate">Menu</p>
            {footerNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-ink transition hover:text-slate"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="eyebrow mb-1 text-slate">Global Presence</p>
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-mist-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {site.nameJp}. All rights reserved.
          </p>
          <div className="font-latin flex items-center gap-4 text-xs font-semibold tracking-wide text-slate">
            <span>JP</span>
            <span className="opacity-40">CN</span>
            <span className="opacity-40">EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

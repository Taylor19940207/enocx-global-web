import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  mobileTitleLines?: string[];
  desktopTitleLines?: string[];
  lead?: string;
  crumbs?: Crumb[];
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  mobileTitleLines,
  desktopTitleLines,
  lead,
  crumbs,
  image = "/media/inside-city.png",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-24 md:pb-20 md:pt-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {crumbs && (
          <nav className="page-hero-enter page-hero-enter-1 font-latin mb-8 flex items-center gap-2 text-xs text-white/50">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="opacity-40">/</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="page-hero-enter page-hero-enter-2 eyebrow text-mist">{eyebrow}</p>
        <h1 className="page-hero-enter page-hero-enter-3 mt-5 max-w-[19ch] text-[clamp(2.35rem,5vw,3.75rem)] font-bold leading-[1.18] tracking-[-0.035em] text-white [text-wrap:balance] md:max-w-[14em]">
          {mobileTitleLines || desktopTitleLines ? (
            <>
              {mobileTitleLines && <span className="md:hidden">
                {mobileTitleLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>}
              <span className={mobileTitleLines ? "hidden md:block" : "block"}>
                {(desktopTitleLines ?? [title]).map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </>
          ) : title}
        </h1>
        {lead && (
          <p className="page-hero-enter page-hero-enter-4 mt-6 max-w-[44rem] text-base leading-[1.85] text-white/75 [text-wrap:pretty] sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

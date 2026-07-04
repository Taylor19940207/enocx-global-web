import Image from "next/image";
import Link from "next/link";
import BackgroundArcs from "./decorative/BackgroundArcs";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image = "/media/inside-city.png",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #c4e0e8, transparent 70%)" }}
      />
      <BackgroundArcs variant="dark" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {crumbs && (
          <nav className="font-latin mb-8 flex items-center gap-2 text-xs text-white/50">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
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
        <p className="eyebrow text-mist">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
          {title}
        </h1>
        {lead && (
          <p className="mt-7 max-w-2xl text-base leading-[1.9] text-white/75 sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

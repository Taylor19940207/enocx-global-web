import Link from "next/link";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "text" | "outline" | "solid" | "light";
  className?: string;
};

export default function ArrowLink({
  href,
  children,
  variant = "text",
  className = "",
}: Props) {
  const base = "link-arrow transition";
  const styles = {
    text: "text-sm text-ink hover:text-slate",
    outline:
      "rounded-full border border-slate/30 px-7 py-3.5 text-sm text-ink hover:bg-ink hover:text-white",
    solid:
      "rounded-full bg-ink px-7 py-3.5 text-sm text-white hover:bg-slate-dark",
    light:
      "rounded-full bg-white px-7 py-3.5 text-sm text-ink hover:bg-mist",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

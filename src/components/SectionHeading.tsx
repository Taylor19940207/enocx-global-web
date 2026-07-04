import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
}: Props) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow ${invert ? "text-mist" : "text-slate"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-6 text-[2rem] font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.9rem] lg:leading-[1.15] ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-6 text-base leading-[1.9] sm:text-[1.05rem] ${
            invert ? "text-white/70" : "text-slate-600"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

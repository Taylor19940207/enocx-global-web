// Soft curved transition between sections with different background colours.
// Sits between blocks — does not overlay content.

type Props = {
  fill: string;
  /** Flip curve direction */
  flip?: boolean;
};

export default function SectionWave({ fill, flip = false }: Props) {
  const d = flip
    ? "M0,48 C360,0 1080,64 1440,16 L1440,64 L0,64 Z"
    : "M0,16 C360,64 1080,0 1440,48 L1440,64 L0,64 Z";

  return (
    <div className="relative -mt-px h-12 w-full overflow-hidden md:h-16" aria-hidden>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}

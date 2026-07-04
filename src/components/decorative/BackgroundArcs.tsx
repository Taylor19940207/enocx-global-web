// Large background arc decorations — behind content only (z-0).
// Uses CIS palette: slate #58656b, mist #c4e0e8, accent #0e8fa8.

type Props = {
  variant?: "dark" | "light";
};

export default function BackgroundArcs({ variant = "dark" }: Props) {
  if (variant === "light") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-24 top-1/4 h-[480px] w-[480px] text-slate/[0.07]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        <svg
          className="absolute -right-16 bottom-0 h-[360px] w-[360px]"
          viewBox="0 0 360 360"
          fill="none"
        >
          <path
            d="M-20,300 Q180,80 380,280"
            stroke="#c4e0e8"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <path
            d="M40,320 Q200,120 340,300"
            stroke="#58656b"
            strokeWidth="1"
            strokeOpacity="0.12"
          />
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -right-32 -top-24 h-[560px] w-[560px] text-mist/20"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg
        className="absolute -bottom-20 -left-20 h-[420px] w-[420px]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M-40,320 Q200,40 440,300"
          stroke="#0e8fa8"
          strokeWidth="2"
          strokeOpacity="0.22"
        />
        <path
          d="M20,340 Q200,100 380,320"
          stroke="#c4e0e8"
          strokeWidth="1.25"
          strokeOpacity="0.18"
        />
      </svg>
    </div>
  );
}

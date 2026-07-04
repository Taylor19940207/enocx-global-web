// Vertical accent lines that sit in the viewport margins — outside the
// 1320px content column. Never overlaps readable content.

export default function PageMargins() {
  const edge = "max(1.5rem, calc(50% - 676px))";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden lg:block">
      <div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate/30 to-transparent"
        style={{ left: edge }}
      />
      <div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mist/50 to-transparent"
        style={{ right: edge }}
      />
      {/* outer accent — further toward viewport edge */}
      <div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent"
        style={{ left: "max(0.75rem, calc(50% - 720px))" }}
      />
      <div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        style={{ right: "max(0.75rem, calc(50% - 720px))" }}
      />
    </div>
  );
}

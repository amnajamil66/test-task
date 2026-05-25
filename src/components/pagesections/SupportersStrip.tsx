import { figma } from "@/lib/figma-tokens";

export function SupportersStrip() {
  const s = figma.space.supporters;
  const logos = Array.from({ length: 5 }, (_, i) => `Supporter-logo-${i}`);

  return (
    <section
      className="relative z-10 flex w-full flex-col items-center text-center"
      style={{
        paddingTop: s.paddingTop,
        paddingBottom: s.paddingBottom,
        gap: s.gap,
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: figma.space.supportersTopLine }}
        aria-hidden
      />
      {/* Top glow spot */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: figma.space.supportersTopGlow }}
        aria-hidden
      />

      <h2
        className="m-0 relative z-10"
        style={{
          fontSize: s.title.fontSize,
          fontWeight: s.title.fontWeight,
          lineHeight: `${s.title.lineHeight}px`,
          letterSpacing: s.title.letterSpacing,
          color: s.title.color,
        }}
      >
        Our Supporters
      </h2>

      <ul
        className="relative z-10 flex list-none flex-wrap items-center justify-center gap-0 m-0 p-0"
        style={{ maxWidth: s.logosWidth, gap: s.logosGap }}
      >
        {logos.map((id) => (
          <li
            key={id}
            className="opacity-60 hover:opacity-100 transition-opacity"
            style={{
              fontSize: s.logo.fontSize,
              fontWeight: s.logo.fontWeight,
              color: s.logo.color,
              letterSpacing: s.logo.letterSpacing,
            }}
          >
            Supporter-logo
          </li>
        ))}
      </ul>
    </section>
  );
}
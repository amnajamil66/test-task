import { PageSection } from "@/components/PageSection";
import { figma } from "@/lib/figma-tokens";

function StatCard() {
  const s = figma.stats;

  return (
    <div
      className="flex flex-col items-center text-center flex-1"
      style={{ gap: s.cardGap }}
    >
      {/* Stat value with concentric rings decoration */}
      <div className="relative flex items-center justify-center" style={{ width: 180, height: 120 }}>
        {/* Background curves decoration */}
        <svg
          className="absolute"
          width="240"
          height="150"
          viewBox="0 0 415 254"
          fill="none"
          aria-hidden
          style={{ left: -30, top: -15 }}
        >
          {[1, 0.75, 0.55, 0.38, 0.22].map((scale, i) => (
            <ellipse
              key={i}
              cx="207"
              cy="254"
              rx={207 * scale}
              ry={127 * scale}
              stroke="#343434"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>

        <p className="relative z-10 m-0 flex items-baseline">
          <span
            className="font-bold"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              background: "linear-gradient(162deg, #7E7E7E 0%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            23
          </span>
          <span
            className="font-bold"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              background: "linear-gradient(162deg, #7E7E7E 0%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            %
          </span>
        </p>
      </div>

      <p
        className="m-0 text-center text-[#ECEDEE]"
        style={{
          fontSize: s.description.fontSize,
          lineHeight: `${s.description.lineHeight}px`,
          maxWidth: 280,
        }}
      >
        Consequat netus <strong>consequat</strong> tortor vitae cursus nullam
        tincidunt urna. <strong>Tristique</strong> leo
      </p>
    </div>
  );
}

export function StatsRow() {
  const s = figma.stats;

  return (
    <PageSection width="full" pageMarginX={0} className="px-4 lg:px-0">
      <div
        className="mx-auto box-border flex w-full max-w-[1024px] flex-col items-center"
        style={{
          gap: s.rowGap,
          padding: `${s.sectionPaddingY}px 0`,
        }}
      >
        <h2
          className="m-0 max-w-[768px] text-center font-semibold"
          style={{
            fontSize: "clamp(24px, 4vw, 40px)",
            background: "linear-gradient(162deg, #7E7E7E 0%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        <div
          className="flex w-full max-w-[1024px] flex-col items-start md:flex-row md:items-start md:justify-between"
          style={{ gap: s.rowGap }}
        >
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
      </div>
    </PageSection>
  );
}
import { PentButton } from "@/components/PentButton";
import { figma } from "@/lib/figma-tokens";

const h = figma.space.hero;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 flex w-full justify-center px-4 lg:px-[80px]"
      style={{
        paddingTop: h.paddingY.top,
        paddingBottom: h.paddingY.bottom,
      }}
    >
      <div
        className="flex w-full max-w-[768px] flex-col items-center text-center"
        style={{ gap: h.stackGap }}
      >
        <div className="flex w-full flex-col items-stretch" style={{ gap: h.copyGap }}>
          <h1
            className="m-0 pb-0 font-bold leading-none"
            style={{
              fontSize: `clamp(36px, 5vw, ${h.heading.fontSize}px)`,
              letterSpacing: h.heading.letterSpacing,
              background: "linear-gradient(162deg, #7E7E7E 0%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p
            className="m-0 text-[#ECEDEE]"
            style={{
              fontSize: `clamp(16px, 2.5vw, ${h.body.fontSize}px)`,
              lineHeight: `${h.body.lineHeight}px`,
              letterSpacing: h.body.letterSpacing,
              fontWeight: h.body.fontWeight,
            }}
          >
            Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices
            est vivamus mauris fames et. Sed lacus purus in tellus.
          </p>
        </div>
        <PentButton variant="white" size="md" className="h-11 shrink-0 px-6">
          Book a demo
        </PentButton>
      </div>
    </section>
  );
}
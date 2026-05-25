import { figma } from "@/lib/figma-tokens";
import { cn } from "@/lib/utils";

type PentLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function PentLogo({ variant = "header", className }: PentLogoProps) {
  if (variant === "footer") {
    const footerLogo = figma.logo.footer;
    return (
      <div
        className={cn("relative shrink-0", className)}
        style={{ width: footerLogo.width, height: footerLogo.height }}
        aria-label="PentAi"
      >
        <span
          className="absolute font-bold leading-none text-[#ECEDEE]"
          style={{
            left: footerLogo.offsetX,
            top: footerLogo.offsetY,
            fontSize: footerLogo.fontSize,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          PentAi.
        </span>
      </div>
    );
  }

  const { logo } = figma;

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: logo.width, height: logo.height }}
      aria-label="PentAi"
    >
      <div
        className="absolute left-0 flex items-center"
        style={{ top: logo.textTop }}
      >
        <span
          className="font-bold leading-none text-white"
          style={{ fontSize: logo.fontSize, fontFamily: "'DM Sans', sans-serif" }}
        >
          Pent
        </span>
        <span
          className="font-bold leading-none"
          style={{
            fontSize: logo.fontSize,
            fontFamily: "'DM Sans', sans-serif",
            background: "linear-gradient(-37deg, #301A3A 0%, #7938B2 52%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          A
        </span>
      </div>

      {/* Dot accent — purple sparkle */}
      <span
        className="absolute rounded-full"
        style={{
          left: logo.dot.left,
          top: logo.dot.top,
          width: logo.dot.width,
          height: logo.dot.height,
          background: "radial-gradient(circle, #B77DDD 0%, #7938B2 60%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Vertical bar */}
      <span
        className="absolute rounded-[1px]"
        style={{
          left: logo.bar.left,
          top: logo.bar.top,
          width: logo.bar.width,
          height: logo.bar.height,
          background: "linear-gradient(113deg, #7938B2 0%, #301A3A 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
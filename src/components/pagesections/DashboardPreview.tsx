import Image from "next/image";
import { figma } from "@/lib/figma-tokens";

export function DashboardPreview() {
  const { dashboardIntro: copy } = figma;

  return (
    <section
      className="relative z-10 flex w-full flex-col items-center overflow-visible px-4 md:px-8 lg:px-[80px]"
      style={{
        paddingTop: figma.space.sectionY,
        paddingBottom: figma.space.sectionY,
      }}
    >
      {/* RIGHT WHITE GLOW */}
      <div
        className="pointer-events-none absolute right-[-250px] top-1/2 -translate-y-1/2 z-0"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 75%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1024px] flex flex-col items-center">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h2>

          <p className="text-[#ECEDEE] mt-4">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        {/* Dashboard Image */}
        <div
          className="relative w-full overflow-hidden rounded-[10px]"
          style={{
            maxWidth: "900px",
            border: "1px solid #2e2e2e",
            boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
          }}
        >
          <Image
            src="/images/dashboard-2e99fc.png"
            alt="Dashboard Preview"
            width={900}
            height={600}
            priority
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
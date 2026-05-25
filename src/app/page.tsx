import { SiteHeader } from "@/components/SiteHeader";
import { HeroBackground } from "@/components/pagesections/HeroBackground";
import { HeroSection } from "@/components/pagesections/HeroSection";
import { SupportersStrip } from "@/components/pagesections/SupportersStrip";
import { DashboardPreview } from "@/components/pagesections/DashboardPreview";
import { StatsRow } from "@/components/pagesections/StatsRow";
import { SecurityGrid } from "@/components/pagesections/SecurityGrid";
import { DisplayFeatures } from "@/components/pagesections/DisplayFeatures";
import { FTabs } from "@/components/pagesections/FTabs";
import { Testimonials } from "@/components/pagesections/Testimonials";
import { CtaSection } from "@/components/pagesections/CtaSection";
import { Footer } from "@/components/pagesections/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-bg-subtle">
      <div className="hero-supporters-bridge relative w-full">
        <HeroBackground priority />

        <div className="hero-content-layer w-full">
          <div className="hero-bg-frame w-full flex flex-col items-center">
            <SiteHeader />
          </div>
          <HeroSection />
          <SupportersStrip />
        </div>
      </div>

      <DashboardPreview />
      <StatsRow />
      <SecurityGrid />
      <DisplayFeatures />
      <FTabs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
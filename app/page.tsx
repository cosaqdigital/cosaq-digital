import { HeroSection } from "@/components/HeroSection";
import { WritersFeature } from "@/components/WritersFeature";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { FaqSection } from "@/components/FaqSection";
import { DigitalDiagnostic } from "@/components/DigitalDiagnostic";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <HeroSection />
      <WritersFeature />
      <ServicesSection />
      <PortfolioSection />
      <AuthoritySection />
      <DigitalDiagnostic />
      <ProcessSection />
      <FaqSection />
      <FinalCTA />
    </main>
  );
}

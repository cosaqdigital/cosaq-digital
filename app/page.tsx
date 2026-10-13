import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { DigitalDiagnostic } from "@/components/DigitalDiagnostic";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main id="conteudo">
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <DigitalDiagnostic />
      <ProcessSection />
      <FinalCTA />
    </main>
  );
}

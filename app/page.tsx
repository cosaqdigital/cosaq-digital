import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { FaqSection } from "@/components/FaqSection";
import { DigitalDiagnostic } from "@/components/DigitalDiagnostic";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main id="conteudo">
      <HeroSection />
      <PortfolioSection />
      <AuthoritySection />
      <ServicesSection />
      <DigitalDiagnostic />
      <ProcessSection />
      <FaqSection />
      <FinalCTA />
    </main>
  );
}

import type { Locale } from "@/lib/i18n/routes";
import { HeroSection } from "@/components/HeroSection";
import { WritersFeature } from "@/components/WritersFeature";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { FaqSection } from "@/components/FaqSection";
import { DigitalDiagnostic } from "@/components/DigitalDiagnostic";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home({ locale }: { locale: Locale }) {
  return (
    <main id="conteudo" tabIndex={-1}>
      <HeroSection locale={locale} />
      <WritersFeature locale={locale} />
      <ServicesSection locale={locale} />
      <PortfolioSection locale={locale} />
      <AuthoritySection locale={locale} />
      <DigitalDiagnostic locale={locale} />
      <ProcessSection locale={locale} />
      <FaqSection locale={locale} />
      <FinalCTA locale={locale} />
    </main>
  );
}

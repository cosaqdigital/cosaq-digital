import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import { siteUrl } from "@/lib/content";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "COSAQ Digital | Sites, plataformas e automações",
    template: "%s | COSAQ Digital",
  },
  description:
    "Desenvolvimento e gestão de soluções digitais: sites profissionais, plataformas, automações e blogs. Atendimento em português para empresas no Brasil e nos EUA.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "COSAQ Digital",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <AnalyticsConsent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const googleTagId = "G-JYT86CVGNS";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  weight: "300 700",
  style: "normal",
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COSAQ Digital | Sites, Plataformas e Soluções Digitais",
  description:
    "Desenvolvemos sites profissionais, plataformas digitais, sistemas e automações para sua empresa conquistar clientes, organizar processos e crescer.",
  metadataBase: new URL("https://cosaqdigital.com"),
  openGraph: {
    title: "COSAQ Digital | Sites, Plataformas e Soluções Digitais",
    description:
      "Desenvolvemos sites profissionais, plataformas digitais, sistemas e automações para sua empresa conquistar clientes, organizar processos e crescer.",
    url: "https://cosaqdigital.com",
    siteName: "COSAQ Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

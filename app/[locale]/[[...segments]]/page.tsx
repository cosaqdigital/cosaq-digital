import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translator } from "@/lib/i18n/copy";
import { isLocale, languageLinks, languages, pageIds, pagePath, resolvePage, siteOrigin, type PageId } from "@/lib/i18n/routes";
import { projects } from "@/lib/site";
import { services } from "@/lib/services";
import Home from "@/views/Home";
import Writers from "@/views/Writers";
import Solutions from "@/views/Solutions";
import Solution from "@/views/Solution";
import Project from "@/views/Project";
import PrivacyPt from "@/views/PrivacyPt";
import Privacy from "@/views/Privacy";
import Terms from "@/views/Terms";
import DataDeletion from "@/views/DataDeletion";

type Props = { params: Promise<{ locale: string; segments?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isLocale(locale)) return [];
  return pageIds.map((page) => ({ segments: pagePath(locale, page).split("/").slice(2) }));
}

async function getContext(params: Props["params"]) {
  const { locale, segments } = await params;
  if (!isLocale(locale)) notFound();
  const page = resolvePage(locale, segments);
  if (!page) notFound();
  return { locale, page };
}

const overview = {
  home: [
    "COSAQ Digital | Sites, Plataformas e Soluções Digitais",
    "Desenvolvemos sites profissionais, plataformas digitais, sistemas e automações para sua empresa conquistar clientes, organizar processos e crescer.",
  ],
  writers: [
    "Plataforma para Escritores | Sua Livraria Digital | COSAQ Digital",
    "Tenha sua própria livraria digital. Apresente suas obras, ofereça leitura no navegador e venda diretamente, com 0% de comissão da COSAQ.",
  ],
  solutions: [
    "Soluções Digitais para Empresas | COSAQ Digital",
    "Sites profissionais, plataformas, sistemas personalizados e automações. Descubra o que sua empresa pode desenvolver com a COSAQ Digital.",
  ],
  privacy: [
    "Privacy Policy | COSAQ Digital",
    "Privacy Policy for COSAQ Digital websites, business integrations and WhatsApp Business Platform solutions.",
  ],
  terms: [
    "Terms of Service | COSAQ Digital",
    "Terms governing the use of COSAQ Digital websites, software, automations and business integrations.",
  ],
  deletion: [
    "Data Deletion | COSAQ Digital",
    "Instructions for requesting deletion of personal data processed by COSAQ Digital and authorized business integrations.",
  ],
} as const satisfies Partial<Record<PageId, readonly [string, string]>>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await getContext(params);
  const t = translator(locale);
  const project = projects.find((entry) => entry.slug === page);
  const service = services.find((entry) => entry.slug === page);
  const [name, summary] = Object.hasOwn(overview, page) ? overview[page as keyof typeof overview]
    : project ? [`${project.title} | COSAQ Digital`, project.description]
    : service ? [t(service.title) + " | COSAQ Digital", service.introduction]
    : overview.home;
  const title = t(name);
  const description = t(summary);
  const canonical = siteOrigin + pagePath(locale, page);
  const image = page === "writers" ? "/writers/plataforma-hero.webp" : project?.image ?? "/brand/cosaq-digital.png";

  return {
    title,
    description,
    alternates: { canonical, languages: languageLinks(page) },
    openGraph: {
      title, description, url: canonical, siteName: "COSAQ Digital",
      locale: languages[locale].og,
      alternateLocale: Object.entries(languages).filter(([key]) => key !== locale).map(([, language]) => language.og),
      type: project ? "article" : "website",
      images: [{ url: siteOrigin + image, alt: page === "writers" ? t("Livraria digital de autor ilustrada em notebook, tablet e celular") : title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [siteOrigin + image] },
  };
}

export default async function LocalizedPage({ params }: Props) {
  const { locale, page } = await getContext(params);
  if (page === "home" || page === "writers") {
    const t = translator(locale);
    const organization = {
      "@type": "Organization",
      "@id": siteOrigin + "/#organization",
      name: "COSAQ Digital",
      url: siteOrigin + pagePath("pt"),
      logo: siteOrigin + "/brand/cosaq-digital.png",
    };
    const data = page === "writers" ? {
      "@context": "https://schema.org",
      "@type": "Service",
      name: t(overview.writers[0]),
      description: t(overview.writers[1]),
      url: siteOrigin + pagePath(locale, "writers"),
      provider: organization,
    } : { "@context": "https://schema.org", ...organization };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
        {page === "home" ? <Home locale={locale} /> : <Writers locale={locale} />}
      </>
    );
  }
  if (page === "solutions") return <Solutions locale={locale} />;
  if (page === "privacy") return locale === "pt" ? <PrivacyPt locale={locale} /> : <Privacy locale={locale} />;
  if (page === "terms") return <Terms locale={locale} />;
  if (page === "deletion") return <DataDeletion locale={locale} />;
  if (services.some((entry) => entry.slug === page)) return <Solution locale={locale} slug={page} />;
  return <Project locale={locale} slug={page} />;
}

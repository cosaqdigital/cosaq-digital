import type { MetadataRoute } from "next";
import { siteUrl, services, projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/servicos",
    "/projetos",
    "/sobre",
    "/contato",
    "/privacidade",
    ...services.map((s) => `/servicos/${s.slug}`),
    ...projects.map((p) => `/projetos/${p.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}

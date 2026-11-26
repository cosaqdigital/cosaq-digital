import type { MetadataRoute } from "next";
import { languageLinks, locales, pageIds, pagePath, siteOrigin } from "@/lib/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageIds.map((page) => ({
      url: siteOrigin + pagePath(locale, page),
      alternates: { languages: languageLinks(page) },
    })),
  );
}

import type { MetadataRoute } from "next";
import { projects } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cosaqdigital.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cosaqdigital.com/privacidade",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...projects.map((project) => ({
      url: `https://cosaqdigital.com/projetos/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

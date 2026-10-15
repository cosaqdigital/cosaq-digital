import type { MetadataRoute } from "next";
import { projects } from "@/lib/site";
import { services } from "@/lib/services";

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
    {
      url: "https://cosaqdigital.com/solucoes",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: "https://cosaqdigital.com/solucoes/" + service.slug,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `https://cosaqdigital.com/projetos/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

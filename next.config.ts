import type { NextConfig } from "next";
import { legacyRedirects, localeCookie, locales, pagePath } from "./lib/i18n/routes";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...locales.filter((locale) => locale !== "pt").map((locale) => ({
        source: "/",
        destination: pagePath(locale),
        has: [{ type: "cookie" as const, key: localeCookie, value: locale }],
        permanent: false,
      })),
      { source: "/", destination: pagePath("pt"), permanent: false },
      ...legacyRedirects,
    ];
  },
  async headers() {
    return [{ source: "/", headers: [
      { key: "Vary", value: "Cookie" },
      { key: "Cache-Control", value: "private, no-store" },
    ] }];
  },
};

export default nextConfig;

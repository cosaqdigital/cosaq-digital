import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/i18n/routes";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;

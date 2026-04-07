import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/AJ-oud",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);

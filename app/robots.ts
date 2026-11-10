import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://nikosiskis.gr/sitemap.xml",
    host: "https://nikosiskis.gr",
  };
}

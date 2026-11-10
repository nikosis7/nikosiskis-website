
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.nikosiskis.gr/sitemap.xml",
    host: "https://www.nikosiskis.gr",
  };
}

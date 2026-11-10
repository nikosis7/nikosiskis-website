
import type { MetadataRoute } from "next";

const baseUrl = "https://www.nikosiskis.gr"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ypiresies/kenak",
    "/ypiresies/pyroprostasias",
    "/ypiresies/yde-ilektromixanologikes-meletes",
    "/ypiresies/systimata-asfaleias",
    "/ypiresies/ilektrologikes-ergasies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import { MetadataRoute } from "next";
import { URL_WEB } from "@/config/envVariables";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${URL_WEB}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `https://${URL_WEB}/pizzas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.99,
    },
    {
      url: `https://${URL_WEB}/empanadillas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.98,
    },
    {
      url: `https://${URL_WEB}/combos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.97,
    },
    {
      url: `https://${URL_WEB}/pasta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.96,
    },
    {
      url: `https://${URL_WEB}/ensaladas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `https://${URL_WEB}/postres`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.94,
    },
    {
      url: `https://${URL_WEB}/postres`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `https://${URL_WEB}/contactanos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `https://${URL_WEB}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
  ];
}

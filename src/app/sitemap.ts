import { MetadataRoute } from 'next';

import { URL_WEB } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${URL_WEB}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL_WEB}/pizzas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.99,
    },
    {
      url: `${URL_WEB}/empanadillas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.98,
    },
    {
      url: `${URL_WEB}/combos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.97,
    },
    {
      url: `${URL_WEB}/pasta`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.96,
    },
    {
      url: `${URL_WEB}/ensaladas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${URL_WEB}/postres`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.94,
    },
    {
      url: `${URL_WEB}/postres`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${URL_WEB}/contactanos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${URL_WEB}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ];
}

import { MetadataRoute } from 'next';

import { URL_WEB } from '@/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/img/',
      crawlDelay: 10,
    },
    sitemap: `${URL_WEB}/sitemap.xml`,
  };
}

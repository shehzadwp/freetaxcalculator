/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://freetaxcalculator.us',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/admin', '/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/tools/salary-calculator'),
    await config.transform(config, '/tools/after-tax'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/tools/salary-calculator': 0.9,
      '/tools/after-tax': 0.9,
      '/tools': 0.8,
      '/blog': 0.7,
      '/contact-us': 0.6,
      '/privacy': 0.5,
      '/terms': 0.5,
      '/widgets': 0.6,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

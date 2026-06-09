import { buildMetadata, type PageSeoConfig } from '@/lib/seo/metadata';

export const pageSeo: Record<string, PageSeoConfig> = {
  home: {
    title: 'FreeTaxCalculator.us - Free Online Tax Calculators',
    description:
      'Free, accurate USA tax calculators. Calculate your salary, after-tax income, and state taxes instantly. Updated with current federal and state tax rates.',
    path: '/',
    keywords: [
      'tax calculator',
      'salary calculator',
      'after tax calculator',
      'USA tax',
      'free tax tools',
    ],
  },
  tools: {
    title: 'All FreeTaxCalculator.us - Complete Collection',
    description:
      'Browse our complete collection of free USA tax calculators. Salary, after-tax income, state taxes, and more — all updated for current tax guidance.',
    path: '/tools',
    keywords: ['tax calculators', 'free tax tools', 'income tax calculators'],
  },
  resources: {
    title: 'Tax Resources - Articles, Guides, and Support',
    description:
      'Find free tax resources, blog articles, calculator widgets, and support from FreeTaxCalculator.us.',
    path: '/resources',
    keywords: ['tax resources', 'tax guides', 'calculator widgets', 'support'],
  },
  blog: {
    title: 'Tax Blog - Tips, Guides & Financial Insights',
    description:
      'Expert articles on US taxes, tax planning strategies, deductions, state taxes, and financial tips. Stay informed with our regularly updated tax blog.',
    path: '/blog',
    keywords: ['tax blog', 'tax tips', 'tax planning', 'tax news'],
  },
  contact: {
    title: 'Contact Us - Get Help with FreeTaxCalculator.us',
    description:
      'Contact the FreeTaxCalculator.us support team. We respond to all inquiries within 24 hours. Report bugs, request features, or ask tax calculator questions.',
    path: '/contact-us',
    keywords: ['contact', 'support', 'help', 'customer service'],
  },
  privacy: {
    title: 'Privacy Policy - FreeTaxCalculator.us',
    description:
      'Read our privacy policy covering data collection, cookies, Google Analytics, CCPA rights for California residents, and how we protect your information.',
    path: '/privacy',
    keywords: ['privacy policy', 'data protection', 'CCPA', 'cookies'],
  },
  terms: {
    title: 'Terms of Service - FreeTaxCalculator.us',
    description:
      'Terms of service for FreeTaxCalculator.us. Understand the rules, disclaimers, and limitations of using our free tax calculators and website.',
    path: '/terms',
    keywords: ['terms of service', 'terms and conditions', 'legal'],
  },
  widgets: {
    title: 'Embeddable FreeTaxCalculator.us Widgets',
    description:
      'Embed free USA tax calculator widgets on your website or blog. Easy copy-paste code for salary and after-tax calculators with responsive design.',
    path: '/widgets',
    keywords: ['tax calculator widget', 'embed calculator', 'iframe widget'],
  },
  about: {
    title: 'About Us - FreeTaxCalculator.us',
    description:
      'Learn about FreeTaxCalculator.us, our mission, and our commitment to free tax tools and privacy-first calculations.',
    path: '/about',
    keywords: ['about us', 'tax calculator site', 'privacy-first', 'free tax tools'],
  },
  stateTaxes: {
    title: 'State Tax Rates - Compare All 50 States',
    description:
      'Explore state income tax rates for all 50 US states and DC. Compare taxes across jurisdictions and find state tax friendly locations.',
    path: '/state-taxes',
    keywords: ['state tax rates', 'state income tax', 'no income tax states', 'state tax comparison'],
  },
};

export function getPageMetadata(key: keyof typeof pageSeo) {
  return buildMetadata(pageSeo[key]);
}

/**
 * Site Metadata Configuration
 * Contains all SEO and meta information
 */

export const siteConfig = {
  name: 'FreeTaxCalculator.us',
  description: 'Free USA tax calculators. Calculate your salary, after-tax income, and state taxes instantly.',
  domain: 'https://freetaxcalculator.us',
  author: 'FreeTaxCalculator.us',
  twitter: '@freetaxcalculator',
  locale: 'en-US',
  
  // Social Media
  social: {
    twitter: 'https://twitter.com/freetaxcalculator',
    facebook: 'https://facebook.com/freetaxcalculator',
    linkedin: 'https://linkedin.com/company/freetaxcalculator',
    youtube: 'https://youtube.com/freetaxcalculator',
    pinterest: 'https://pinterest.com/freetaxcalculator',
    reddit: 'https://reddit.com/r/freetaxcalculator',
  },

  // Contact
  contact: {
    email: 'support@freetaxcalculator.us',
    phone: '+1 (555) 123-4567',
    address: 'New York, NY, United States',
  },

  // SEO Keywords
  keywords: [
    'tax calculator',
    'salary calculator',
    'after tax calculator',
    'USA tax',
    'federal tax calculator',
    'income tax calculator',
    'tax estimator',
    'take home pay calculator',
    'net pay calculator',
    'tax brackets',
    'payroll calculator',
    'FICA calculator',
    'state tax calculator',
  ],

  // Colors
  colors: {
    primary: '#1e3a8a',
    accent: '#3b82f6',
    background: '#ffffff',
    darkBackground: '#0f172a',
  },

  // JSON-LD Schema
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FreeTaxCalculator.us',
    url: 'https://freetaxcalculator.us',
    logo: 'https://freetaxcalculator.us/logo.svg',
    description: 'Free USA tax calculators. Calculate your salary, after-tax income, and state taxes instantly.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@freetaxcalculator.us',
      telephone: '+1 (555) 123-4567',
    },
    sameAs: [
      'https://twitter.com/freetaxcalculator',
      'https://facebook.com/freetaxcalculator',
      'https://linkedin.com/company/freetaxcalculator',
      'https://youtube.com/freetaxcalculator',
    ],
  },
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'FreeTaxCalculator.us - Free Online Tax Calculators',
    description: 'Free, accurate USA tax calculators. Calculate your salary, after-tax income, and state taxes instantly.',
    keywords: ['tax calculator', 'salary calculator', 'after tax calculator'],
  },
  salaryCalculator: {
    title: 'Salary FreeTaxCalculator.us - Calculate Your Take-Home Pay',
    description: 'Free salary calculator to determine your take-home pay after federal, state, and payroll taxes.',
    keywords: ['salary calculator', 'take home pay', 'tax calculator'],
  },
  afterTax: {
    title: 'After-Tax Income Calculator - Break Down Your Earnings',
    description: 'Calculate your after-tax income with detailed breakdown by pay period and tax category.',
    keywords: ['after tax calculator', 'net pay calculator', 'take home pay'],
  },
  tools: {
    title: 'All FreeTaxCalculator.us - Complete Collection',
    description: 'Browse our complete collection of free tax calculators.',
    keywords: ['tax calculators', 'calculator tools', 'tax estimation'],
  },
  blog: {
    title: 'Tax Blog - Tips & Insights',
    description: 'Read our latest articles on taxes, tax planning, and financial tips.',
    keywords: ['tax tips', 'tax planning', 'tax news'],
  },
  contact: {
    title: 'Contact Us - Get Help with FreeTaxCalculator.us',
    description: 'Get in touch with our team. We respond to all inquiries within 24 hours.',
    keywords: ['contact', 'support', 'help'],
  },
};

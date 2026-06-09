import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config/siteConfig';

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

export function buildMetadata(config: PageSeoConfig): Metadata {
  const url = `${siteConfig.domain}${config.path}`;
  const ogImage =
    config.ogImage ?? `${siteConfig.domain}/api/og?title=${encodeURIComponent(config.title)}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords ?? siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    robots: config.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      type: config.ogType ?? 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      creator: siteConfig.twitter,
      images: [ogImage],
    },
  };
}

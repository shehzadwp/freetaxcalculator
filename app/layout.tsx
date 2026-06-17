import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import ServiceWorkerRegister from '@/components/ui/ServiceWorkerRegister';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { siteConfig } from '@/lib/config/siteConfig';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'FreeTaxCalculator.us - Free Online Tax Calculators',
    template: '%s | FreeTaxCalculator.us',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  robots: {
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
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.domain,
    title: 'FreeTaxCalculator.us - Free Online Tax Calculators',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'FreeTaxCalculator.us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreeTaxCalculator.us',
    description: siteConfig.description,
    creator: siteConfig.twitter,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* AdSense Identity */}
        <meta
          name="google-adsense-account"
          content="ca-pub-6274849473716814"
        />

        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6274849473716814"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Revbid Script */}
        <Script
          src="//prebid.revbid.net/15298/revbid.js"
          strategy="afterInteractive"
          async
        />

        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="lazyOnload"
            />
            <Script
              id="google-analytics"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}

        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>

      <body className={`${inter.variable} ${inter.className} flex flex-col min-h-screen font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
          <ServiceWorkerRegister />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

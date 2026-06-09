import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';

export const metadata = getPageMetadata('resources');

const breadcrumbs = [{ name: 'Resources', path: '/resources' }];

const resources = [
  {
    title: 'All FreeTaxCalculator.us',
    description: 'Browse the full suite of calculators for salary, state taxes, investments, and retirement planning.',
    href: '/tools',
  },
  {
    title: 'Tax Blog',
    description: 'Read expert guides, IRS updates, and planning tips for managing your taxes year-round.',
    href: '/blog',
  },
  {
    title: 'State Tax Rate Map',
    description: 'Compare state income tax laws across all 50 states and DC with maps, tables, and state guides.',
    href: '/state-taxes',
  },
  {
    title: 'Embeddable Widgets',
    description: 'Add free, responsive tax calculator widgets to your website or blog with simple copy/paste code.',
    href: '/widgets',
  },
  {
    title: 'Contact & Support',
    description: 'Reach our team with feature requests, questions about calculations, or privacy inquiries.',
    href: '/contact-us',
  },
  {
    title: 'Privacy & Terms',
    description: 'Review our policy and service terms for safe, privacy-first calculator usage.',
    href: '/privacy',
  },
];

export default function ResourcesPage() {
  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="RESOURCES"
        title="Helpful Tax Resources for Every Calculator User"
        description="Access prioritized tools, updates, developer widgets, and support resources in one place. Save time and make smarter tax decisions."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                {resources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 p-6 transition hover:border-accent hover:bg-white dark:hover:bg-slate-800"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {resource.description}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Tax Resources Built for Fast Decisions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Access calculators, blog articles, and support from a single hub designed to help Americans make faster, more confident tax and budgeting choices.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Find the right calculator for salary, state taxes, or investment planning.</li>
                  <li>• Compare state tax burdens and no-income-tax states in one place.</li>
                  <li>• Read practical tips and guides from our tax blog.</li>
                  <li>• Embed our tools in your website securely and easily.</li>
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  {resources.map((resource) => (
                    <li key={resource.href}>
                      <Link href={resource.href} className="hover:text-accent transition-colors">
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Need faster help?</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Our support page is the fastest way to get help with calculator questions, privacy inquiries, or feature requests.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  Contact Support
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

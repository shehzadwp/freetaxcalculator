import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/siteConfig';
import EmbedWidgets from '@/components/ui/EmbedWidgets';

export const metadata = getPageMetadata('widgets');

const breadcrumbs = [{ name: 'Widgets', path: '/widgets' }];

export default function WidgetsPage() {
  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="EMBED ON YOUR SITE"
        title="FreeTaxCalculator.us Widgets"
        description="Add our free tax calculators to your website. Increase engagement and provide value to your visitors."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 items-stretch mb-12">
            {[
              {
                title: 'Easy Integration',
                description: 'Copy and paste a single line of code to embed any calculator.',
              },
              {
                title: 'Free Forever',
                description: 'All widgets are completely free. No hidden charges or licensing fees.',
              },
              {
                title: 'Increase Engagement',
                description: 'Provide value to your users and keep them on your site longer.',
              },
              {
                title: 'Mobile Responsive',
                description: 'All widgets automatically adapt to mobile and desktop screens.',
              },
              {
                title: 'Always Updated',
                description: 'Our widgets are updated annually with the latest tax rates.',
              },
              {
                title: 'No Maintenance',
                description: 'We handle all updates and maintenance. You just embed and forget.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg text-center flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Available Widgets
          </h2>

          <div className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Add our calculators to your website to help visitors instantly understand
              their net pay, after-tax income, and state tax impact. Embedded widgets
              are lightweight, responsive, and fully maintained by FreeTaxCalculator.us.
            </p>
            <p>
              Each widget loads quickly and gives your audience reliable financial
              insight without requiring custom development. Use these tools to keep
              visitors engaged, increase time on page, and offer a helpful resource that
              drives repeat traffic.
            </p>
          </div>

          <div className="mb-12 mx-auto max-w-6xl">
            <EmbedWidgets
              widgets={[
                {
                  title: 'Salary Calculator',
                  description: 'Let your visitors calculate their take-home pay from their salary.',
                  code: `<iframe src="${siteConfig.domain}/tools/salary-calculator" width="100%" height="500" frameborder="0"></iframe>`,
                },
                {
                  title: 'After-Tax Income Calculator',
                  description: 'Show after-tax income broken down by pay period.',
                  code: `<iframe src="${siteConfig.domain}/tools/after-tax" width="100%" height="500" frameborder="0"></iframe>`,
                },
              ]}
            />
          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              How to Embed a Widget
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              <p>
                Embedding a FreeTaxCalculator.us widget on your website is simple. Copy
                the iframe code for the calculator you want, paste it into your HTML or
                CMS editor, and publish. The widget loads directly from our servers and is
                automatically updated when we release new tax rates each year.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { step: '1', title: 'Choose a Widget', description: 'Select the calculator widget you want to embed.' },
                { step: '2', title: 'Copy the Code', description: 'Copy the iframe embed code from the widget card.' },
                { step: '3', title: 'Paste on Your Site', description: 'Paste the code where you want the widget to appear.' },
                { step: '4', title: 'Save & Publish', description: 'Save your changes and publish. The widget appears immediately.' },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-accent">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Need Help?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Contact our support team for embedding assistance.
              </p>
              <Link
                href="/contact-us"
                className="inline-block px-4 py-2 bg-accent text-white font-semibold rounded hover:bg-blue-700 transition-colors"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

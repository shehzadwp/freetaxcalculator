import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';
import Link from 'next/link';

export const metadata = getPageMetadata('about');

const breadcrumbs = [{ name: 'About', path: '/about' }];

export default function AboutPage() {
  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="ABOUT US"
        title="FreeTaxCalculator.us — Trusted, Free, and Easy"
        description="FreeTaxCalculator.us provides free federal and state tax calculators, updated for 2026 IRS rules. Everything is designed to be easy, accurate, and privacy-first."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid gap-12 lg:grid-cols-[1fr_420px] items-start">
            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                FreeTaxCalculator.us is built for Americans who want quick and reliable tax estimates without signing up or paying anything. Our tools cover salary, after-tax income, state taxes, payroll deductions, and more — all using the latest federal and state tax rates.
              </p>
              <p>
                We are not a tax firm. Our calculators are designed for estimates and planning. They are updated annually to reflect changes to IRS brackets, FICA contributions, and state income tax policies. For personalized tax advice, please consult a licensed tax professional.
              </p>
              <p>
                Our mission is to make tax planning accessible. We prioritize privacy, ease of use, and clear explanations so every visitor can understand their paychecks, compare state tax burdens, and make smarter financial decisions.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: 'No registration required',
                    description: 'Use any calculator instantly without creating an account.',
                  },
                  {
                    title: 'Updated for 2026',
                    description: 'All tools reflect the latest federal and state tax rates.',
                  },
                  {
                    title: 'Designed for every American',
                    description: 'From employees to business owners, our calculators help you estimate taxes faster.',
                  },
                  {
                    title: 'Privacy-first approach',
                    description: 'All calculations happen locally in your browser. We do not store personal income data.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-700 dark:text-blue-200 mb-2">Disclaimer</p>
                <p className="text-gray-900 dark:text-white leading-relaxed">
                  Our calculators are for estimation only. They do not replace professional tax, legal, or financial advice. Always verify your results with a certified professional before making major decisions.
                </p>
              </div>
              <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Need help?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Reach out with questions about the calculators, requests for new features, or privacy concerns.
                </p>
                <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

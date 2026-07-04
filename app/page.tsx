import Link from 'next/link';
import CalculatorCard from '@/components/ui/CalculatorCard';
import QuickTaxWidget from '@/components/ui/QuickTaxWidget';
import ToolTabs from '@/components/ui/ToolTabs';
import StateTaxMap from '@/components/ui/StateTaxMap';
import EmbedWidgets from '@/components/ui/EmbedWidgets';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import FaqSection from '@/components/ui/FaqSection';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { organizationSchema, siteLinksSearchBoxSchema } from '@/lib/seo/schema';
import { blogPosts } from '@/lib/blog/posts';
import {
  DollarSign,
  TrendingUp,
  Calculator,
  PieChart,
  Percent,
  Briefcase,
  Gift,
  Zap,
} from 'lucide-react';

export const metadata = getPageMetadata('home');

const popularCalculators = [
  {
    title: 'Salary Calculator',
    description: 'Calculate your take-home pay after federal, state, and payroll taxes.',
    icon: DollarSign,
    href: '/tools/salary-calculator',
    badge: 'Popular',
  },
  {
    title: 'After-FreeTaxCalculator.us',
    description: 'See your after-tax income broken down by pay period and tax category.',
    icon: TrendingUp,
    href: '/tools/after-tax',
    badge: 'New',
  },
  {
    title: 'Tax Brackets 2026',
    description: 'View the latest federal and state tax bracket thresholds.',
    icon: Calculator,
    href: '/tools',
    badge: 'Updated 2026',
  },
  {
    title: 'Payroll Calculator',
    description: 'Estimate payroll deductions including Social Security and Medicare.',
    icon: Briefcase,
    href: '/tools',
  },
  {
    title: 'Effective Tax Rate',
    description: 'Calculate your total tax percentage for smarter budgeting.',
    icon: Percent,
    href: '/tools',
  },
  {
    title: 'Capital Gains Estimator',
    description: 'Estimate tax rates for investments and capital gains.',
    icon: PieChart,
    href: '/tools',
  },
  {
    title: 'Estate Tax Guide',
    description: 'Quick estimates for estate and gift tax planning.',
    icon: Gift,
    href: '/tools',
  },
  {
    title: 'FICA FreeTaxCalculator.us',
    description: 'Calculate Social Security and Medicare contributions for your pay.',
    icon: Zap,
    href: '/tools',
  },
];

const homeFaqs = [
  {
    question: 'How much tax do I pay on $50000?',
    answer:
      'Your tax depends on filing status, state, and deductions, but our calculators estimate federal, FICA, and state taxes for a $50,000 salary using 2026 rules.',
  },
  {
    question: 'What is FICA tax?',
    answer:
      'FICA tax includes Social Security and Medicare. In 2026, employees pay 6.2% for Social Security and 1.45% for Medicare on most wages.',
  },
  {
    question: 'How to reduce taxable income?',
    answer:
      'Common strategies include retirement contributions, health savings accounts, and eligible deductions. Our tax planning guides explain the most impactful options.',
  },
  {
    question: 'Are these calculators IRS compliant?',
    answer:
      'Yes, our tools use official IRS bracket thresholds and standard deduction values for 2026. They are designed for estimation and planning only.',
  },
  {
    question: 'Do I need to register to use the calculators?',
    answer:
      'No registration is required. All calculators are free and available instantly without creating an account.',
  },
  {
    question: 'Can I save my previous calculations?',
    answer:
      'Yes. Calculator pages store your last 5 calculations locally in your browser so you can review them later.',
  },
  {
    question: 'Can I share my result via URL?',
    answer:
      'Yes. Calculator pages encode your inputs in the URL so you can share your results quickly.',
  },
  {
    question: 'Do you support dark mode?',
    answer:
      'Yes. A dark mode toggle is available in the site header and your preference is saved locally.',
  },
  {
    question: 'Is the site mobile accessible?',
    answer:
      'Absolutely. The calculators and all pages are fully keyboard accessible and responsive across mobile, tablet, and desktop.',
  },
  {
    question: 'Can I embed a calculator on my site?',
    answer:
      'Yes. We provide embed widget code snippets for the salary calculator, income tax calculator, and tax bracket calculator.',
  },
];

const toolSteps = [
  {
    title: 'Enter Your Info',
    description: 'Provide your salary, filing status, and location in our intuitive calculators.',
  },
  {
    title: 'See Instant Results',
    description: 'Get immediate take-home pay estimates, tax breakdowns, and effective rates for planning.',
  },
  {
    title: 'Plan Your Finances',
    description: 'Use the results to budget, compare job offers, and make smarter tax decisions.',
  },
];

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="safe-area">
      <JsonLd data={[organizationSchema(), siteLinksSearchBoxSchema()]} />

     {
===========================================================
REVBID ADS SECTION (DISABLED)
Remove this comment block to enable all RevBid ads again.
===========================================================

<section className="py-6 bg-white dark:bg-slate-950">
  <div className="container-max container-px flex flex-col items-center gap-4">

    <!-- BIG LEADERBOARD AD (970x90) -->
    <div
      data-placement-id="revbid-big-leaderboard"
      id="revbid-big-leaderboard-5168"
      style={{
        minWidth: '468px',
        minHeight: '60px',
        textAlign: 'center',
      }}
    />

    <!-- LEADERBOARD AD (728x90) -->
    <div
      data-placement-id="revbid-leaderboard"
      id="revbid-leaderboard-8632"
      style={{
        minWidth: '468px',
        minHeight: '60px',
        textAlign: 'center',
      }}
    />

    <!-- MEDIUM RECTANGLE AD (300x250) -->
    <div
      data-placement-id="revbid-square"
      id="revbid-square-13372"
      style={{
        minWidth: '300px',
        minHeight: '250px',
        textAlign: 'center',
      }}
    />

  </div>
</section>

}

      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 md:py-24">
        <div className="container-max container-px grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-sm md:text-base font-semibold text-accent uppercase tracking-[0.24em]">
              Free tax calculators for every American
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              FreeTaxCalculator.us — Made Simple
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Calculate your take-home pay, federal income tax, capital gains, and more. Updated for 2026 IRS tax rates. Free, instant, no registration.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/tools" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                Explore All Calculators
              </Link>
              <Link href="/tools/salary-calculator" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800">
                Salary Calculator
              </Link>
            </div>
          </div>

          <QuickTaxWidget />
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm md:text-base">
            {[
              '✓ IRS Compliant',
              '✓ Instant Results',
              '✓ No Registration',
              '✓ Free Forever',
            ].map((badge) => (
              <div key={badge} className="rounded-3xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-slate-900 py-6 px-4 text-gray-700 dark:text-gray-200 shadow-sm">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Most Popular Calculators</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse the tools Americans use most often. Each calculator is optimized for fast, accurate tax planning.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {popularCalculators.map((calc) => (
              <CalculatorCard key={calc.title} {...calc} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Complete Tool Suite</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Explore every calculator category and find the tool that matches your tax planning goals.
            </p>
          </div>

          <ToolTabs />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <div className="grid gap-10 xl:grid-cols-[1.5fr_1fr] items-start">
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">State Income Tax Rates</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Click a state on the interactive tax map to view its income tax rate and planning details.
                </p>
              </div>

              <StateTaxMap />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">No Income Tax States</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  States with no general income tax are highlighted in green on our map and are great candidates for financial planning if you are comparing take-home pay across locations.
                </p>
                <div className="mt-4 grid gap-3 text-sm">
                  {['FL', 'TX', 'NV', 'WA', 'WY', 'SD', 'AK', 'NH', 'TN'].map((abbr) => (
                    <span key={abbr} className="inline-flex items-center justify-between rounded-2xl bg-emerald-50 dark:bg-emerald-950 px-4 py-3 text-emerald-700 dark:text-emerald-200">
                      {abbr}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Compare all states</h3>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                  Visit the full state taxes section for an alphabetized table of every state and DC, plus detailed state-specific guidance.
                </p>
                <Link href="/state-taxes" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                  Explore State Taxes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Use our calculators in three simple steps to estimate your tax burden and plan ahead.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {toolSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Embeddable Widgets</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Add free tax calculators to your own website with a few lines of embed code.
            </p>
          </div>

          <EmbedWidgets />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Latest from the Blog</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-3">{post.category}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-accent font-semibold">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <FaqSection faqs={homeFaqs} />
        </div>
      </section>
    </div>
  );
}

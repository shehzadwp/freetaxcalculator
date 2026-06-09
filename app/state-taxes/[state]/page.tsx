import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { getStateInfo } from '@/lib/taxData/stateTax';

interface PageProps {
  params: { state: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const state = getStateInfo(params.state);
  if (!state) return {};

  return {
    title: `${state.name} State Tax Rate - ${state.abbreviation}`,
    description: `Learn the income tax rate and policy details for ${state.name}.`,
    openGraph: {
      title: `${state.name} State Tax Rate`,
      description: `Income tax details for ${state.name}.`,
      url: `https://freetaxcalculator.us/state-taxes/${state.abbreviation}`,
    },
  };
}

export default function StateTaxDetailPage({ params }: PageProps) {
  const state = getStateInfo(params.state);
  if (!state) notFound();

  const breadcrumbs = [
    { name: 'State Taxes', path: '/state-taxes' },
    { name: state.name, path: `/state-taxes/${state.abbreviation}` },
  ];

  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="STATE TAX RATE"
        title={`${state.name} Income Tax Overview`}
        description={`View ${state.name}'s state income tax rate and quick planning tips. Use this information with our salary calculators to estimate your net pay.`}
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{state.name} State Tax Rate</h2>
                <p className="text-xl text-gray-900 dark:text-white font-semibold mb-4">
                  {state.hasStateTax ? `${(state.taxRate * 100).toFixed(1)}%` : 'No state income tax'}
                </p>
                <p>{state.notes ?? 'This state collects income tax based on your earned income.'}</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What this means for you</h3>
                  <p>
                    {state.hasStateTax
                      ? `${state.name} taxes wage income at this rate in addition to federal income tax and payroll taxes. Use our salary calculator to estimate how much you keep after all deductions.`
                      : `${state.name} does not impose a general state income tax on wages, which can raise your take-home pay compared to other states.`}
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Planning tip</h3>
                  <p>
                    {state.hasStateTax
                      ? 'Compare your current pay with our salary calculator using this state rate to understand your net earnings after state tax.'
                      : 'If you live or work in this state, your salary may stretch further after taxes. Compare it against a state with income tax to see the difference.'}
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Use the calculator</h3>
                <p className="text-gray-700 dark:text-blue-100 mb-4">
                  Apply this state rate in our Salary Calculator for a complete net income estimate.
                </p>
                <Link href="/tools/salary-calculator" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                  Salary Calculator
                </Link>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Jump to other states</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Browse state tax rates for other states, or compare your current location with tax-free states.
                </p>
                <Link href="/state-taxes" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition dark:bg-slate-900 dark:text-white dark:border-gray-700 dark:hover:bg-slate-800">
                  State Tax List
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

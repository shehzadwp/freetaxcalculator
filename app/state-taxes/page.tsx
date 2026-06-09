import HeroSection from '@/components/ui/HeroSection';
import StateTaxMap from '@/components/ui/StateTaxMap';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { stateInfoData } from '@/lib/taxData/stateTax';
import Link from 'next/link';

export const metadata = getPageMetadata('stateTaxes');

const breadcrumbs = [{ name: 'State Taxes', path: '/state-taxes' }];

export default function StateTaxesPage() {
  const states = Object.values(stateInfoData).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="STATE TAXES"
        title="Compare State Income Tax Rates Across the US"
        description="Explore state-by-state income tax rates and discover which states have no income tax. Use our interactive map and detailed state guides for planning."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <StateTaxMap />

              <div className="rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">State Tax Rate Table</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm text-gray-700 dark:text-gray-300">
                    <thead className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100">
                      <tr>
                        <th className="px-4 py-3">State</th>
                        <th className="px-4 py-3">Income Tax Rate</th>
                        <th className="px-4 py-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {states.map((state) => (
                        <tr key={state.abbreviation} className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                            <Link href={`/state-taxes/${state.abbreviation}`} className="hover:text-accent transition-colors">
                              {state.name}
                            </Link>
                          </td>
                          <td className={`px-4 py-3 font-semibold ${state.hasStateTax ? 'text-gray-900 dark:text-white' : 'text-emerald-700 dark:text-emerald-300'}`}>
                            {state.hasStateTax ? `${(state.taxRate * 100).toFixed(1)}%` : 'No income tax'}
                          </td>
                          <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{state.notes ?? 'Standard rate applied.'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">No Income Tax States</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The following states do not collect a general income tax on wages and salaries.
                </p>
                <div className="grid gap-2">
                  {['FL', 'TX', 'NV', 'WA', 'WY', 'SD', 'AK', 'NH', 'TN'].map((abbr) => (
                    <Link
                      key={abbr}
                      href={`/state-taxes/${abbr}`}
                      className="rounded-2xl bg-white dark:bg-slate-800 px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-900 transition"
                    >
                      {stateInfoData[abbr].name} ({abbr})
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Use the State Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Select any state above to review its rate and plan your paycheck by state. For detailed calculations, visit the state-specific calculator tools.
                </p>
                <Link href="/tools" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                  Explore Tools
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

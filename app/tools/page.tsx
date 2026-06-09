import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import CalculatorCard from '@/components/ui/CalculatorCard';
import CalculatorSearch from '@/components/tools/CalculatorSearch';
import { CreditCard } from 'lucide-react';
import { getPageMetadata } from '@/lib/seo/pages';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { getAllCalculators, type CalculatorConfig } from '@/lib/seo/calculators';

export const metadata = getPageMetadata('tools');

type LucideIconName = keyof typeof import('lucide-react');

const breadcrumbs = [{ name: 'Calculators', path: '/tools' }];

type SearchCalculator = Omit<CalculatorConfig, 'icon'> & {
  icon: LucideIconName;
};

export default function ToolsPage() {
  const calculators: SearchCalculator[] = getAllCalculators().map((calculator) => {
    const rawIcon = calculator.icon as unknown as { displayName?: string; name?: string };
    const iconName = (rawIcon.displayName || rawIcon.name || 'Calculator') as LucideIconName;

    return {
      ...calculator,
      icon: iconName,
    };
  });

  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="ALL CALCULATORS"
        title="Complete FreeTaxCalculator.us Suite"
        description="Explore our comprehensive collection of free tax calculators. Find the perfect tool for salary, state, investment, and retirement planning."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-10">
            <CalculatorSearch calculators={calculators} />
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Featured Calculator</h2>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <CalculatorCard
                title="HSA Calculator"
                description="Estimate HSA contribution limits and tax savings for Self or Family coverage."
                icon={CreditCard}
                href="/tools/hsa-calculator"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How to Choose the Right Calculator</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Select the tool that matches your goal and use our search filters to narrow the suite by tax type or use case.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Define Your Need',
                text: 'Identify whether you are calculating salary, state tax, investments, or deductions.',
              },
              {
                step: '2',
                title: 'Choose a Calculator',
                text: 'Select a tool from the filtered results and open the full interactive calculator page.',
              },
              {
                step: '3',
                title: 'Use the Results',
                text: 'Apply the output to budgeting, relocation decisions, or tax planning with confidence.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

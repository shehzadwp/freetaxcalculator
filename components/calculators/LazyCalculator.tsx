'use client';

import dynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';

const SalaryCalculator = dynamic(
  () => import('@/components/calculators/SalaryCalculator'),
  { loading: () => <CalculatorSkeleton /> }
);

const AfterTaxCalculator = dynamic(
  () => import('@/components/calculators/AfterTaxCalculator'),
  { loading: () => <CalculatorSkeleton /> }
);

const ToolCalculator = dynamic(
  () => import('@/components/calculators/ToolCalculator'),
  { loading: () => <CalculatorSkeleton /> }
);

interface LazyCalculatorProps {
  type: 'salary' | 'after-tax' | 'generic';
  slug?: string;
}

export default function LazyCalculator({ type, slug }: LazyCalculatorProps) {
  if (type === 'salary') return <SalaryCalculator />;
  if (type === 'after-tax') return <AfterTaxCalculator />;
  if (slug) return <ToolCalculator slug={slug} />;

  return (
    <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center bg-white dark:bg-slate-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Calculator Coming Soon
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        This tool is not yet available as an interactive calculator. Please check back soon for more financial tools, or use our salary and after-tax calculators today.
      </p>
    </div>
  );
}

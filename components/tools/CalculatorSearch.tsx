'use client';

import { useMemo, useState } from 'react';
import CalculatorCard from '@/components/ui/CalculatorCard';
import type { CalculatorConfig } from '@/lib/seo/calculators';

type SearchCalculatorConfig = Omit<CalculatorConfig, 'icon'> & {
  icon: keyof typeof import('lucide-react');
};

interface CalculatorSearchProps {
  calculators: SearchCalculatorConfig[];
}

const categories = [
  'All',
  'Income Tax',
  'Investment Tax',
  'Estate Tax',
  'Property',
  'Retirement',
  'Credits & Deductions',
  'Payroll & Benefits',
];

export default function CalculatorSearch({ calculators }: CalculatorSearchProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCalculators = useMemo(() => {
    return calculators.filter((calculator) => {
      const matchesCategory =
        activeCategory === 'All' || calculator.category === activeCategory;
      const matchesQuery =
        calculator.name.toLowerCase().includes(query.toLowerCase()) ||
        calculator.description.toLowerCase().includes(query.toLowerCase()) ||
        calculator.keywords.some((keyword) => keyword.includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, calculators, query]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_320px] items-start">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            Search calculators
          </label>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, tax type, or use case"
            className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="rounded-3xl bg-gray-50 dark:bg-slate-900 p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredCalculators.length > 0 ? (
          filteredCalculators.map((calculator) => (
            <CalculatorCard
              key={calculator.slug}
              title={calculator.name}
              description={calculator.description}
              icon={calculator.icon}
              href={`/tools/${calculator.slug}`}
              badge={calculator.badge}
            />
          ))
        ) : (
          <div className="rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-8 text-center">
            <p className="text-gray-700 dark:text-gray-300">No calculators matched your search. Try a broader keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
}

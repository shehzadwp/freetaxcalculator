'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const frequencies = [
  { value: 'annual', label: 'Annual' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'hourly', label: 'Hourly' },
];

const filingStatuses = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married Filing Jointly' },
  { value: 'head', label: 'Head of Household' },
];

const frequencyMultipliers: Record<string, number> = {
  annual: 1,
  monthly: 12,
  weekly: 52,
  hourly: 2080,
};

const stateRates: Record<string, number> = {
  CA: 0.093,
  NY: 0.0685,
  TX: 0,
  FL: 0,
  default: 0.05,
};

export default function QuickTaxWidget() {
  const [gross, setGross] = useState(60000);
  const [frequency, setFrequency] = useState('annual');
  const [filingStatus, setFilingStatus] = useState('single');
  const [submitted, setSubmitted] = useState(false);

  const annualIncome = useMemo(() => {
    return gross * frequencyMultipliers[frequency];
  }, [frequency, gross]);

  const results = useMemo(() => {
    const taxableIncome = Math.max(0, annualIncome - 13850);
    const federal = taxableIncome * 0.18;
    const fica = annualIncome * 0.0765;
    const state = annualIncome * stateRates.CA;
    const total = federal + fica + state;
    const takeHome = Math.max(0, annualIncome - total);
    return {
      annualIncome,
      federal: Math.round(federal),
      fica: Math.round(fica),
      state: Math.round(state),
      total: Math.round(total),
      takeHome: Math.round(takeHome),
    };
  }, [annualIncome]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US')}`;

  return (
    <section className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Tax Preview</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Get an instant estimate of your after-tax income before using the full calculator.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          Gross Salary
          <input
            type="number"
            min="0"
            value={gross}
            onChange={(event) => setGross(Number(event.target.value))}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </label>

        <label className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          Income Frequency
          <select
            value={frequency}
            onChange={(event) => setFrequency(event.target.value)}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {frequencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          Filing Status
          <select
            value={filingStatus}
            onChange={(event) => setFilingStatus(event.target.value)}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {filingStatuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Calculate My Tax
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Your Quick Result</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white dark:bg-slate-950 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Annual Income</p>
              <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(results.annualIncome)}</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-950 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Estimated Take Home</p>
              <p className="mt-2 text-xl font-bold text-green-600 dark:text-green-400">{formatCurrency(results.takeHome)}</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-950 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Total Estimated Tax</p>
              <p className="mt-2 text-xl font-bold text-red-600 dark:text-red-400">{formatCurrency(results.total)}</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-950 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Federal + FICA + State</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Federal: {formatCurrency(results.federal)}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">FICA: {formatCurrency(results.fica)}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">State (CA average): {formatCurrency(results.state)}</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Estimate based on a simplified 2026 rate model. For a full, state-specific breakdown, use the Salary Calculator.
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tools/salary-calculator"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Open full Salary Calculator
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition dark:bg-slate-900 dark:text-white dark:border-gray-700"
            >
              Explore all calculators
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';

const maxContribution = {
  Self: 4150,
  Family: 8300,
};

const stateTaxRates: Record<string, number> = {
  CA: 0.093,
  NY: 0.0685,
  TX: 0,
  FL: 0,
  IL: 0.0495,
  PA: 0.0307,
  OH: 0.05,
  GA: 0.055,
  NC: 0.0495,
  MI: 0.0425,
  Default: 0.05,
};

const bracketOptions = [10, 12, 22, 24, 32, 35, 37];
const states = ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'];

type CoverageType = 'Self' | 'Family';

type HsaResults = {
  contributionAllowed: number;
  contribution: number;
  federalSavings: number;
  ficaSavings: number;
  stateSavings: number;
  totalSavings: number;
  outOfPocket: number;
  effectiveCost: number;
  stateTaxRate: number;
};

export default function HsaCalculator() {
  const [coverage, setCoverage] = useState<CoverageType>('Self');
  const [age55Plus, setAge55Plus] = useState(false);
  const [contribution, setContribution] = useState(3000);
  const [taxBracket, setTaxBracket] = useState(24);
  const [state, setState] = useState('CA');

  const result = useMemo<HsaResults>(() => {
    const allowed = maxContribution[coverage] + (age55Plus ? 1000 : 0);
    const safeContribution = Math.min(Math.max(Number(contribution) || 0, 0), allowed);
    const bracketRate = typeof taxBracket === 'number' && isFinite(taxBracket) ? taxBracket : 0;
    const federalSavings = Math.round(safeContribution * (bracketRate / 100)) || 0;
    const ficaSavings = Math.round(safeContribution * 0.0765) || 0;
    const stateRate = stateTaxRates[state] ?? stateTaxRates.Default;
    const stateSavings = Math.round(safeContribution * stateRate) || 0;
    const totalSavings = federalSavings + ficaSavings + stateSavings;
    const outOfPocket = Math.max(0, safeContribution - totalSavings);
    const effectiveCost = safeContribution > 0 ? Math.round((outOfPocket / safeContribution) * 100) : 0;

    return {
      contributionAllowed: allowed,
      contribution: safeContribution,
      federalSavings,
      ficaSavings,
      stateSavings,
      totalSavings,
      outOfPocket,
      effectiveCost,
      stateTaxRate: stateRate,
    };
  }, [coverage, age55Plus, contribution, taxBracket, state]);

  useEffect(() => {
    if (contribution > result.contributionAllowed) {
      setContribution(result.contributionAllowed);
    }
  }, [result.contributionAllowed, contribution]);

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US')}`;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Annual HSA Contribution</label>
              <input
                type="number"
                min="0"
                max={result.contributionAllowed}
                value={contribution}
                onChange={(event) => {
                  const raw = parseInt(event.target.value, 10);
                  const safe = Number.isFinite(raw) ? Math.min(Math.max(raw, 0), result.contributionAllowed) : 0;
                  setContribution(safe);
                }}
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Max allowed: {formatCurrency(result.contributionAllowed)}</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Coverage Type</label>
              <select
                value={coverage}
                onChange={(event) => setCoverage(event.target.value as CoverageType)}
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="Self">Self</option>
                <option value="Family">Family</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Federal Tax Bracket</label>
              <select
                value={taxBracket}
                onChange={(event) => setTaxBracket(Number(event.target.value) || 0)}
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {bracketOptions.map((rate) => (
                  <option key={rate} value={rate}>{rate}%</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">State</label>
              <select
                value={state}
                onChange={(event) => setState(event.target.value)}
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {states.map((code) => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 flex items-center gap-3 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 p-4">
              <input
                id="catchup"
                type="checkbox"
                checked={age55Plus}
                onChange={(event) => setAge55Plus(event.target.checked)}
                className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-accent focus:ring-accent"
              />
              <label htmlFor="catchup" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Age 55+ catch-up contribution (+$1,000)
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results Summary</h3>
          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Contribution Allowed</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{formatCurrency(result.contributionAllowed)}</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Total Estimated Tax Savings</p>
              <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">{formatCurrency(result.totalSavings)}</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Effective Cost After Savings</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{result.effectiveCost}%</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Out-of-Pocket Cost</p>
              <p className="mt-2 text-3xl font-bold text-red-600 dark:text-red-400">{formatCurrency(result.outOfPocket)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
        <div className="bg-gray-100 dark:bg-slate-900 px-6 py-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Savings Breakdown</h4>
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-2">
          {[
            { label: 'Federal Tax Savings', value: formatCurrency(result.federalSavings) },
            { label: 'FICA Tax Savings (7.65%)', value: formatCurrency(result.ficaSavings) },
            { label: 'State Tax Savings', value: formatCurrency(result.stateSavings) },
            { label: 'Total Contribution', value: formatCurrency(result.contribution) },
            { label: 'State Tax Rate', value: `${(result.stateTaxRate * 100).toFixed(2)}%` },
            { label: 'Contribution Allowed', value: formatCurrency(result.contributionAllowed) },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-gray-50 dark:bg-slate-900 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

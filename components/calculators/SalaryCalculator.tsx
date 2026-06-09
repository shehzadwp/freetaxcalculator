'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { DollarSign } from 'lucide-react';

interface HistoryEntry {
  salary: number;
  state: string;
  afterTax: number;
  date: string;
}

const stateTaxRates: { [key: string]: number } = {
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

export default function SalaryCalculator() {
  const [salary, setSalary] = useState(50000);
  const [state, setState] = useState('CA');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const mounted = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const searchParams = new URLSearchParams(window.location.search);
    const querySalary = Number(searchParams.get('salary')) || 50000;
    const queryState = searchParams.get('state') || 'CA';

    setSalary(querySalary);
    setState(queryState);

    const stored = window.localStorage.getItem('salaryCalculatorHistory');
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  const calculations = useMemo(() => {
    const federalBrackets = [
      { min: 0, max: 11000, rate: 0.1 },
      { min: 11000, max: 44725, rate: 0.12 },
      { min: 44725, max: 95375, rate: 0.22 },
      { min: 95375, max: 182100, rate: 0.24 },
      { min: 182100, max: 231250, rate: 0.32 },
      { min: 231250, max: 578125, rate: 0.35 },
      { min: 578125, max: Infinity, rate: 0.37 },
    ];

    const standardDeduction = 13850;
    const taxableIncome = Math.max(0, salary - standardDeduction);

    let federalTax = 0;
    for (let i = 0; i < federalBrackets.length; i++) {
      const bracket = federalBrackets[i];
      if (taxableIncome > bracket.min) {
        const incomeInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
        federalTax += incomeInBracket * bracket.rate;
      }
    }

    const socialSecurityWage = Math.min(salary, 168600);
    const socialSecurity = socialSecurityWage * 0.062;
    const medicare = salary * 0.0145;

    const stateTaxRate = stateTaxRates[state] || stateTaxRates.Default;
    const stateTax = salary * stateTaxRate;

    const totalTax = federalTax + socialSecurity + medicare + stateTax;
    const afterTax = salary - totalTax;

    return {
      gross: salary,
      federalTax: Math.round(federalTax),
      socialSecurity: Math.round(socialSecurity),
      medicare: Math.round(medicare),
      stateTax: Math.round(stateTax),
      totalTax: Math.round(totalTax),
      afterTax: Math.round(afterTax),
      effectiveTaxRate: salary ? ((totalTax / salary) * 100).toFixed(2) : '0.00',
    };
  }, [salary, state]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    if (typeof window === 'undefined') return;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('salary', String(salary));
    searchParams.set('state', state);
    window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);

    const nextHistory = [
      {
        salary,
        state,
        afterTax: calculations.afterTax,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      },
      ...history,
    ].slice(0, 5);

    setHistory(nextHistory);
    window.localStorage.setItem('salaryCalculatorHistory', JSON.stringify(nextHistory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salary, state, calculations.afterTax]);

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US')}`;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-accent" />
        Salary Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Annual Salary: {formatCurrency(salary)}
          </label>
          <input
            type="range"
            min="0"
            max="500000"
            step="1000"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent"
          />
          <input
            type="number"
            min="0"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="mt-2 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            State
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-slate-700 dark:text-white"
          >
            <option value="CA">California (CA)</option>
            <option value="NY">New York (NY)</option>
            <option value="TX">Texas (TX)</option>
            <option value="FL">Florida (FL)</option>
            <option value="IL">Illinois (IL)</option>
            <option value="PA">Pennsylvania (PA)</option>
            <option value="OH">Ohio (OH)</option>
            <option value="GA">Georgia (GA)</option>
            <option value="NC">North Carolina (NC)</option>
            <option value="MI">Michigan (MI)</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">Gross Income</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(calculations.gross)}</p>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">Federal Tax</p>
            <p className="text-xl font-bold text-red-600 dark:text-red-400">{formatCurrency(calculations.federalTax)}</p>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">Social Security (6.2%)</p>
            <p className="text-xl font-bold text-red-600 dark:text-red-400">{formatCurrency(calculations.socialSecurity)}</p>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">Medicare (1.45%)</p>
            <p className="text-xl font-bold text-red-600 dark:text-red-400">{formatCurrency(calculations.medicare)}</p>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">State Tax</p>
            <p className="text-xl font-bold text-red-600 dark:text-red-400">{formatCurrency(calculations.stateTax)}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-2 border-accent">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Taxes</p>
            <p className="text-2xl font-bold text-accent mb-2">{formatCurrency(calculations.totalTax)}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Effective Rate: {calculations.effectiveTaxRate}%</p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
            <p className="text-sm text-gray-600 dark:text-gray-400">After-Tax Income</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(calculations.afterTax)}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Monthly: {formatCurrency(Math.round(calculations.afterTax / 12))}</p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Tax Breakdown</p>
            <div className="space-y-2">
              {[
                { label: 'Federal', value: calculations.federalTax, color: 'bg-red-500' },
                { label: 'Social Sec.', value: calculations.socialSecurity, color: 'bg-orange-500' },
                { label: 'Medicare', value: calculations.medicare, color: 'bg-yellow-500' },
                { label: 'State', value: calculations.stateTax, color: 'bg-pink-500' },
              ].map((item) => {
                const percentage = calculations.totalTax
                  ? ((item.value / calculations.totalTax) * 100).toFixed(1)
                  : '0.0';
                return (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold">{item.label}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-xs text-yellow-800 dark:text-yellow-200">
          <strong>Disclaimer:</strong> This calculator provides estimates based on 2026 tax rates and standard deductions. Actual tax liability may vary based on deductions, credits, and other factors. Please consult a tax professional for personalized advice.
        </p>
      </div>

      {history.length > 0 && (
        <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Calculations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your last five salary and state combinations are saved locally.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setHistory([]);
                window.localStorage.removeItem('salaryCalculatorHistory');
              }}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-slate-700"
            >
              Clear history
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {history.map((entry, index) => (
              <div key={`${entry.state}-${index}`} className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{entry.date}</span>
                  <span>{entry.state}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Salary: {formatCurrency(entry.salary)}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">After-Tax: {formatCurrency(entry.afterTax)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface HistoryEntry {
  salary: number;
  state: string;
  afterTax: number;
  date: string;
}

interface AfterTaxResults {
  gross: number;
  afterTax: number;
  totalTax: number;
  effectiveTaxRate: string;
  monthly: number;
  biweekly: number;
  weekly: number;
  daily: number;
  hourly: number;
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

export default function AfterTaxCalculator() {
  const [salary, setSalary] = useState(50000);
  const [state, setState] = useState('CA');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [results, setResults] = useState<AfterTaxResults | null>(null);
  const mounted = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US')}`;

  const calculateTax = useCallback((income: number, selectedState: string) => {
    try {
      if (typeof income !== 'number' || !Number.isFinite(income) || income <= 0) {
        setResults(null);
        return;
      }

      const sanitizedIncome = Math.min(Math.max(income, 0), 2000000);
      const federalBrackets = [
        { min: 0, max: 11000, rate: 0.1 },
        { min: 11000, max: 44725, rate: 0.12 },
        { min: 44725, max: 95375, rate: 0.22 },
        { min: 95375, max: 182100, rate: 0.24 },
        { min: 182100, max: 231250, rate: 0.32 },
        { min: 231250, max: 578125, rate: 0.35 },
        { min: 578125, max: Infinity, rate: 0.37 },
      ];

      let federalTax = 0;
      const taxableIncome = Math.max(0, sanitizedIncome - 13850);
      for (let i = 0; i < federalBrackets.length; i += 1) {
        const bracket = federalBrackets[i];
        if (taxableIncome > bracket.min) {
          const incomeInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
          federalTax += incomeInBracket * bracket.rate;
        }
      }

      const socialSecurityWage = Math.min(sanitizedIncome, 168600);
      const socialSecurity = socialSecurityWage * 0.062 || 0;
      const medicare = sanitizedIncome * 0.0145 || 0;
      const stateTaxRate = stateTaxRates[selectedState] ?? stateTaxRates.Default;
      const stateTax = sanitizedIncome * stateTaxRate || 0;
      const totalTax = Math.round(federalTax + socialSecurity + medicare + stateTax);
      const afterTax = Math.round(Math.max(0, sanitizedIncome - totalTax));

      const effectiveTaxRate = sanitizedIncome > 0 ? ((totalTax / sanitizedIncome) * 100).toFixed(2) : '0.00';
      const monthly = Math.round(afterTax / 12) || 0;
      const biweekly = Math.round(afterTax / 26) || 0;
      const weekly = Math.round(afterTax / 52) || 0;
      const daily = Math.round(afterTax / 260) || 0;
      const hourly = Math.round((afterTax / 260 / 8)) || 0;

      setResults({
        gross: sanitizedIncome,
        afterTax,
        totalTax,
        effectiveTaxRate,
        monthly,
        biweekly,
        weekly,
        daily,
        hourly,
      });
    } catch (error) {
      console.error('Calculation error:', error);
      setResults(null);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const querySalary = Number(params.get('salary')) || 50000;
    const queryState = params.get('state') || 'CA';

    setSalary(querySalary);
    setState(queryState);
    calculateTax(querySalary, queryState);

    const stored = window.localStorage.getItem('afterTaxCalculatorHistory');
    if (stored) {
      try {
        setHistory(JSON.parse(stored) as HistoryEntry[]);
      } catch {
        setHistory([]);
      }
    }
  }, [calculateTax]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    if (typeof window === 'undefined') return;
    if (!results) return;

    const params = new URLSearchParams(window.location.search);
    params.set('salary', String(salary));
    params.set('state', state);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);

    const entry: HistoryEntry = {
      salary,
      state,
      afterTax: results.afterTax,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };
    const nextHistory = [entry, ...history].slice(0, 5);
    setHistory(nextHistory);
    window.localStorage.setItem('afterTaxCalculatorHistory', JSON.stringify(nextHistory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salary, state, results]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseInt(e.target.value, 10);
    const val = Number.isNaN(raw) ? 0 : Math.min(Math.max(raw, 0), 2000000);
    setSalary(val);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      calculateTax(val, state);
    }, 150);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseInt(e.target.value, 10);
    const val = Number.isNaN(raw) ? 0 : Math.min(Math.max(raw, 0), 2000000);
    setSalary(val);
    calculateTax(val, state);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextState = e.target.value;
    setState(nextState);
    calculateTax(salary, nextState);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-accent" />
        After-Tax Income Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Annual Gross Income: {formatCurrency(salary)}
          </label>
          <input
            type="range"
            min="0"
            max="500000"
            step="1000"
            value={salary}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent"
          />
          <input
            type="number"
            min="0"
            value={salary}
            onChange={handleSalaryChange}
            className="mt-2 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            State
          </label>
          <select
            value={state}
            onChange={handleStateChange}
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

      {results ? (
        <>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
              <p className="text-sm text-gray-600 dark:text-gray-400">After-Tax Annual</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(results.afterTax)}</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-2 border-red-500">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Tax</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">{formatCurrency(results.totalTax)}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Effective Rate: {results.effectiveTaxRate}%</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-2 border-blue-500">
              <p className="text-sm text-gray-600 dark:text-gray-400">Gross Income</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(results.gross)}</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Income Breakdown</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Monthly', value: results.monthly },
                { label: 'Bi-weekly', value: results.biweekly },
                { label: 'Weekly', value: results.weekly },
                { label: 'Daily', value: results.daily },
                { label: 'Hourly (8hrs/day)', value: results.hourly },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">{item.label}</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(item.value)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Comparison</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>Gross Income</span>
                  <span>{formatCurrency(results.gross)}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>Total Tax ({results.effectiveTaxRate}%)</span>
                  <span>{formatCurrency(results.totalTax)}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{ width: `${results.gross > 0 ? (results.totalTax / results.gross) * 100 : 0}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>After-Tax Income</span>
                  <span>{formatCurrency(results.afterTax)}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${results.gross > 0 ? (results.afterTax / results.gross) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center bg-gray-50 dark:bg-slate-900">
          <p className="text-gray-700 dark:text-gray-300">Enter a valid salary to view after-tax calculations.</p>
        </div>
      )}

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
                window.localStorage.removeItem('afterTaxCalculatorHistory');
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

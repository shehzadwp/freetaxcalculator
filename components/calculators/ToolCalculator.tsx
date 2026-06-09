'use client';

import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import { getCalculator } from '@/lib/seo/calculators';
import {
  calculateFederalTax,
  calculateMedicareTax,
  calculateStateTax,
  calculateSocialSecurityTax,
  formatCurrency,
  getMarginalTaxRate,
  getStateTaxRate,
} from '@/lib/utils/calculators';

const stateOptions = [
  'CA',
  'NY',
  'TX',
  'FL',
  'IL',
  'PA',
  'OH',
  'GA',
  'NC',
  'MI',
];

const filingStatuses = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married Filing Jointly' },
  { value: 'head', label: 'Head of Household' },
];

const standardDeductionAmounts: Record<string, number> = {
  single: 13850,
  married: 27700,
  head: 20800,
};

const abbreviationToStateName: Record<string, string> = {
  CA: 'California',
  NY: 'New York',
  TX: 'Texas',
  FL: 'Florida',
  IL: 'Illinois',
  PA: 'Pennsylvania',
  OH: 'Ohio',
  GA: 'Georgia',
  NC: 'North Carolina',
  MI: 'Michigan',
};

const formatPercent = (value: number) => `${(value * 100).toFixed(1)}%`;

const numberInput = (
  label: string,
  value: number,
  setValue: Dispatch<SetStateAction<number>>,
  min: number,
  max: number,
  step: number,
  suffix = '',
  description?: string
) => (
  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">{label}</label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg accent-accent"
    />
    <div className="mt-3 flex items-center gap-2 justify-between text-sm text-gray-600 dark:text-gray-300">
      <span>{formatCurrency(value)}</span>
      <span>{suffix}</span>
    </div>
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => {
        const next = Number(event.target.value);
        setValue(Number.isNaN(next) ? min : next);
      }}
      className="mt-3 w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
    />
    {description ? <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{description}</p> : null}
  </div>
);

const percentageInput = (
  label: string,
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
) => (
  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">{label}</label>
    <input
      type="range"
      min={0}
      max={1}
      step={0.001}
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg accent-accent"
    />
    <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">{formatPercent(value)}</div>
  </div>
);

export default function ToolCalculator({ slug }: { slug: string }) {
  const calculator = getCalculator(slug);

  const [annualIncome, setAnnualIncome] = useState(60000);
  const [state, setState] = useState('CA');
  const [filingStatus, setFilingStatus] = useState<'single' | 'married' | 'head'>('single');
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(0.06);
  const [longTerm, setLongTerm] = useState(false);
  const [dependents, setDependents] = useState(1);
  const [withholding, setWithholding] = useState(9000);
  const [compareState, setCompareState] = useState('TX');
  const [compareIncome, setCompareIncome] = useState(60000);
  const [bonusAmount, setBonusAmount] = useState(10000);
  const [propertyValue, setPropertyValue] = useState(350000);
  const [propertyRate, setPropertyRate] = useState(0.0125);
  const [mortgageInterest, setMortgageInterest] = useState(15000);
  const [hsaContribution, setHsaContribution] = useState(3600);
  const [itemizedAmount, setItemizedAmount] = useState(28000);

  const summary = useMemo(() => {
    const deduction = standardDeductionAmounts[filingStatus] ?? 13850;
    const taxableIncome = Math.max(0, annualIncome - deduction);
    const federalTax = calculateFederalTax(taxableIncome);
    const socialSecurity = calculateSocialSecurityTax(annualIncome);
    const medicare = calculateMedicareTax(annualIncome);
    const stateTax = calculateStateTax(annualIncome, state);
    const totalTax = federalTax + socialSecurity + medicare + stateTax;
    const afterTax = Math.max(0, annualIncome - totalTax);
    const stateA = calculateStateTax(annualIncome, state);
    const stateB = calculateStateTax(compareIncome, compareState);
    const stateRateA = getStateTaxRate(state);
    const stateRateB = getStateTaxRate(compareState);
    const creditAmount = dependents * 2000;
    const bonusTax = Math.round(bonusAmount * 0.22 + calculateSocialSecurityTax(bonusAmount) + calculateMedicareTax(bonusAmount));
    const mortgageSavings = Math.round(mortgageInterest * 0.22);
    const hsaSavings = Math.round(hsaContribution * 0.22);
    const bonusAfterTax = Math.max(0, bonusAmount - bonusTax);
    const estateTaxBase = Math.max(0, amount - 12800000);
    const estateTax = Math.round(estateTaxBase * 0.4);
    const propertyTax = Math.round(propertyValue * propertyRate);
    const refundEstimate = withholding - totalTax;
    const stateComparison = {
      current: { state, rate: stateRateA, tax: stateA },
      compare: { state: compareState, rate: stateRateB, tax: stateB },
    };

    switch (slug) {
      case 'federal-tax-estimator':
        return {
          inputs: (
            <>
              {numberInput('Estimated Taxable Income', annualIncome, setAnnualIncome, 0, 1000000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Filing Status</label>
                <select
                  value={filingStatus}
                  onChange={(event) => setFilingStatus(event.target.value as 'single' | 'married' | 'head')}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {filingStatuses.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ),
          rows: [
            { label: 'Taxable Income', value: formatCurrency(Math.max(0, annualIncome - deduction)) },
            { label: 'Estimated Federal Tax', value: formatCurrency(federalTax) },
            { label: 'Effective Rate', value: `${getMarginalTaxRate(Math.max(0, annualIncome - deduction))}% bracket` },
          ],
          note: 'This estimator shows federal income tax on taxable income after the standard deduction.',
        };
      case 'state-income-tax':
        return {
          inputs: (
            <>
              <div className="grid gap-4">
                {numberInput('Annual Income', annualIncome, setAnnualIncome, 0, 1000000, 1000)}
                <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">State</label>
                  <select
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                  >
                    {stateOptions.map((stateOption) => (
                      <option key={stateOption} value={stateOption}>
                        {abbreviationToStateName[stateOption]} ({stateOption})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          ),
          rows: [
            { label: 'State Tax Rate', value: formatPercent(stateRateA) },
            { label: 'Estimated State Tax', value: formatCurrency(stateA) },
            { label: 'Income After State Tax', value: formatCurrency(annualIncome - stateA) },
          ],
          note: 'This calculator estimates state income tax only. Use the full salary calculator for federal and payroll tax details.',
        };
      case 'capital-gains-tax':
        return {
          inputs: (
            <>
              {numberInput('Capital Gain Amount', amount, setAmount, 0, 1000000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Holding Period</label>
                <div className="flex gap-3">
                  {[
                    { label: 'Short-Term', value: false },
                    { label: 'Long-Term', value: true },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setLongTerm(option.value)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        longTerm === option.value
                          ? 'bg-accent text-white'
                          : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ),
          rows: [
            { label: 'Long-Term Capital Gain', value: longTerm ? 'Yes' : 'No' },
            { label: 'Applicable Rate', value: longTerm ? '15%' : '35%' },
            { label: 'Estimated Capital Gains Tax', value: formatCurrency(Math.round(amount * (longTerm ? 0.15 : 0.35))) },
          ],
          note: 'Long-term gains are taxed at lower rates than short-term gains, which are taxed as ordinary income.',
        };
      case 'self-employment-tax':
        return {
          inputs: (
            <>
              {numberInput('Net Self-Employment Earnings', amount, setAmount, 0, 500000, 1000)}
            </>
          ),
          rows: [
            { label: 'Self-Employment Tax (15.3%)', value: formatCurrency(Math.round(amount * 0.153)) },
            { label: 'After SE Tax', value: formatCurrency(Math.round(amount - amount * 0.153)) },
            { label: 'Tax Deduction Available', value: formatCurrency(Math.round(amount * 0.0765)) },
          ],
          note: 'Self-employed workers pay both the employee and employer share of Social Security and Medicare taxes.',
        };
      case 'payroll-tax':
        return {
          inputs: (
            <>
              {numberInput('Annual Payroll Income', amount, setAmount, 0, 500000, 1000)}
            </>
          ),
          rows: [
            { label: 'Social Security Tax (6.2%)', value: formatCurrency(Math.round(Math.min(amount, 168600) * 0.062)) },
            { label: 'Medicare Tax (1.45%)', value: formatCurrency(Math.round(amount * 0.0145)) },
            { label: 'Total Payroll Tax', value: formatCurrency(Math.round(Math.min(amount, 168600) * 0.062 + amount * 0.0145)) },
          ],
          note: 'Payroll tax is the combined Social Security and Medicare tax withheld from wages.',
        };
      case 'tax-bracket-lookup':
        return {
          inputs: (
            <>
              {numberInput('Taxable Income', annualIncome, setAnnualIncome, 0, 1000000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Filing Status</label>
                <select
                  value={filingStatus}
                  onChange={(event) => setFilingStatus(event.target.value as 'single' | 'married' | 'head')}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {filingStatuses.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ),
          rows: [
            { label: 'Estimated Bracket', value: `${getMarginalTaxRate(annualIncome)}%` },
            { label: 'Standard Deduction', value: formatCurrency(deduction) },
            { label: 'Taxable Income After Deduction', value: formatCurrency(Math.max(0, annualIncome - deduction)) },
          ],
          note: 'This calculator helps identify your marginal federal tax rate based on taxable income.',
        };
      case 'estate-tax-estimator':
        return {
          inputs: (
            <>
              {numberInput('Estate Value', amount, setAmount, 0, 50000000, 10000)}
            </>
          ),
          rows: [
            { label: 'Estate Tax Exemption', value: formatCurrency(12800000) },
            { label: 'Taxable Estate', value: formatCurrency(estateTaxBase) },
            { label: 'Estimated Estate Tax', value: formatCurrency(estateTax) },
          ],
          note: 'Federal estate tax only applies to estates above the exemption level.',
        };
      case 'property-tax':
        return {
          inputs: (
            <>
              {numberInput('Property Value', propertyValue, setPropertyValue, 0, 5000000, 1000)}
              {percentageInput('Property Tax Rate', propertyRate, setPropertyRate)}
            </>
          ),
          rows: [
            { label: 'Annual Property Tax', value: formatCurrency(propertyTax) },
            { label: 'Monthly Equivalent', value: formatCurrency(Math.round(propertyTax / 12)) },
            { label: 'Effective Rate', value: formatPercent(propertyRate) },
          ],
          note: 'Property tax varies by local assessment ratio and tax rate.',
        };
      case 'retirement-withdrawal':
        return {
          inputs: (
            <>
              {numberInput('Annual Retirement Withdrawal', amount, setAmount, 0, 500000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Estimated Tax Bracket</label>
                {percentageInput('Withdrawal Tax Rate', rate, setRate)}
              </div>
            </>
          ),
          rows: [
            { label: 'Estimated Tax Owed', value: formatCurrency(Math.round(amount * rate)) },
            { label: 'Net Income After Tax', value: formatCurrency(Math.round(amount * (1 - rate))) },
            { label: 'Monthly Net', value: formatCurrency(Math.round(amount * (1 - rate) / 12)) },
          ],
          note: 'Retirement withdrawals are typically taxed as ordinary income unless they come from a Roth account.',
        };
      case 'tax-credit-calculator':
        return {
          inputs: (
            <>
              {numberInput('Number of Dependents', dependents, setDependents, 0, 10, 1)}
              {numberInput('Other Credits Value', amount, setAmount, 0, 20000, 100)}
            </>
          ),
          rows: [
            { label: 'Child Tax Credit Estimate', value: formatCurrency(dependents * 2000) },
            { label: 'Other Credits', value: formatCurrency(amount) },
            { label: 'Total Tax Credits', value: formatCurrency(creditAmount + amount) },
          ],
          note: 'Tax credits reduce your tax liability dollar-for-dollar.',
        };
      case 'mortgage-interest-deduction':
        return {
          inputs: (
            <>
              {numberInput('Annual Mortgage Interest', mortgageInterest, setMortgageInterest, 0, 100000, 100)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Approximate Marginal Tax Rate</label>
                {percentageInput('Tax Rate', rate, setRate)}
              </div>
            </>
          ),
          rows: [
            { label: 'Estimated Deduction Value', value: formatCurrency(mortgageSavings) },
            { label: 'Mortgage Interest Paid', value: formatCurrency(mortgageInterest) },
            { label: 'Tax Savings Estimate', value: formatCurrency(mortgageSavings) },
          ],
          note: 'Mortgage interest deductions reduce taxable income when you itemize.',
        };
      case 'hsa-savings':
        return {
          inputs: (
            <>
              {numberInput('HSA Contribution', hsaContribution, setHsaContribution, 0, 8000, 100)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Marginal Tax Rate</label>
                {percentageInput('Tax Rate', rate, setRate)}
              </div>
            </>
          ),
          rows: [
            { label: 'Estimated Tax Savings', value: formatCurrency(hsaSavings) },
            { label: 'Contribution Amount', value: formatCurrency(hsaContribution) },
            { label: 'Remaining Taxable Income', value: formatCurrency(Math.max(0, annualIncome - hsaSavings)) },
          ],
          note: 'HSA contributions are tax-advantaged and can lower your taxable income.',
        };
      case 'sales-tax-calculator':
        return {
          inputs: (
            <>
              {numberInput('Purchase Amount', amount, setAmount, 0, 100000, 10)}
              {percentageInput('Sales Tax Rate', rate, setRate)}
            </>
          ),
          rows: [
            { label: 'Sales Tax Owed', value: formatCurrency(Math.round(amount * rate)) },
            { label: 'Total Purchase Cost', value: formatCurrency(Math.round(amount * (1 + rate))) },
            { label: 'Tax Rate', value: formatPercent(rate) },
          ],
          note: 'Sales tax applies to purchases and varies by state and locality.',
        };
      case 'bonus-tax-calculator':
        return {
          inputs: (
            <>
              {numberInput('Bonus Payment', bonusAmount, setBonusAmount, 0, 200000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Supplemental Rate</label>
                {percentageInput('Tax Rate', rate, setRate)}
              </div>
            </>
          ),
          rows: [
            { label: 'Supplemental Tax', value: formatCurrency(Math.round(bonusAmount * rate)) },
            { label: 'Payroll Tax', value: formatCurrency(Math.round(calculateSocialSecurityTax(bonusAmount) + calculateMedicareTax(bonusAmount))) },
            { label: 'Net Bonus After Tax', value: formatCurrency(bonusAfterTax) },
          ],
          note: 'Bonuses are often withheld at a supplemental rate and taxed along with regular payroll taxes.',
        };
      case 'hourly-wage-calculator':
        return {
          inputs: (
            <>
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Hourly Wage</label>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(event) => setAmount(Number(event.target.value))}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                />
              </div>
            </>
          ),
          rows: [
            { label: 'Annual Equivalent', value: formatCurrency(Math.round(amount * 2080)) },
            { label: 'Monthly Equivalent', value: formatCurrency(Math.round((amount * 2080) / 12)) },
            { label: 'Weekly Equivalent', value: formatCurrency(Math.round((amount * 2080) / 52)) },
          ],
          note: 'Hourly wages are converted using 2,080 work hours per year.',
        };
      case 'effective-tax-rate':
        return {
          inputs: (
            <>
              {numberInput('Annual Income', annualIncome, setAnnualIncome, 0, 1000000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">State</label>
                <select
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {stateOptions.map((stateOption) => (
                    <option key={stateOption} value={stateOption}>
                      {abbreviationToStateName[stateOption]} ({stateOption})
                    </option>
                  ))}
                </select>
              </div>
            </>
          ),
          rows: [
            { label: 'Total Estimated Tax', value: formatCurrency(totalTax) },
            { label: 'After-Tax Income', value: formatCurrency(afterTax) },
            { label: 'Effective Tax Rate', value: `${((totalTax / Math.max(1, annualIncome)) * 100).toFixed(2)}%` },
          ],
          note: 'Effective tax rate shows your total taxes as a share of gross income.',
        };
      case 'pay-frequency-converter':
        return {
          inputs: (
            <>
              {numberInput('Annual Income', annualIncome, setAnnualIncome, 0, 500000, 1000)}
            </>
          ),
          rows: [
            { label: 'Monthly', value: formatCurrency(Math.round(annualIncome / 12)) },
            { label: 'Bi-weekly', value: formatCurrency(Math.round(annualIncome / 26)) },
            { label: 'Weekly', value: formatCurrency(Math.round(annualIncome / 52)) },
          ],
          note: 'Convert income amounts between common pay frequencies.',
        };
      case 'business-expense-calculator':
        return {
          inputs: (
            <>
              {numberInput('Business Expenses', amount, setAmount, 0, 200000, 1000)}
              {numberInput('Annual Income', annualIncome, setAnnualIncome, 0, 1000000, 1000)}
            </>
          ),
          rows: [
            { label: 'Estimated Tax Savings', value: formatCurrency(Math.round(amount * 0.22)) },
            { label: 'After Expense Income', value: formatCurrency(Math.max(0, annualIncome - amount)) },
            { label: 'Deductible Expense Rate', value: 'Approx. 22%' },
          ],
          note: 'Deductible business expenses lower your taxable income but must be ordinary and necessary.',
        };
      case 'estate-inheritance-tax':
        return {
          inputs: (
            <>
              {numberInput('Inherited Value', amount, setAmount, 0, 50000000, 10000)}
            </>
          ),
          rows: [
            { label: 'Estate Taxable Amount', value: formatCurrency(estateTaxBase) },
            { label: 'Estimated Inheritance Tax', value: formatCurrency(estateTax) },
            { label: 'Remaining Value After Tax', value: formatCurrency(Math.max(0, amount - estateTax)) },
          ],
          note: 'Inheritance and estate taxes vary by state and can depend on the estate value above federal exemptions.',
        };
      case 'standard-vs-itemized':
        return {
          inputs: (
            <>
              {numberInput('Itemized Deductions Total', itemizedAmount, setItemizedAmount, 0, 100000, 500)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Filing Status</label>
                <select
                  value={filingStatus}
                  onChange={(event) => setFilingStatus(event.target.value as 'single' | 'married' | 'head')}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {filingStatuses.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ),
          rows: [
            { label: 'Standard Deduction', value: formatCurrency(deduction) },
            { label: 'Itemized Total', value: formatCurrency(itemizedAmount) },
            { label: 'Best Option', value: itemizedAmount > deduction ? 'Itemize' : 'Standard Deduction' },
          ],
          note: 'Compare your itemized deductions to the standard deduction to choose the most tax-efficient option.',
        };
      case 'tax-refund-estimate':
        return {
          inputs: (
            <>
              {numberInput('Annual Income', annualIncome, setAnnualIncome, 0, 1000000, 1000)}
              {numberInput('Annual Withholding', withholding, setWithholding, 0, 100000, 100)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Filing Status</label>
                <select
                  value={filingStatus}
                  onChange={(event) => setFilingStatus(event.target.value as 'single' | 'married' | 'head')}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {filingStatuses.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ),
          rows: [
            { label: 'Estimated Tax Liability', value: formatCurrency(totalTax) },
            { label: 'Withholding', value: formatCurrency(withholding) },
            { label: withholding >= totalTax ? 'Estimated Refund' : 'Estimated Amount Due', value: formatCurrency(refundEstimate) },
          ],
          note: 'A refund estimate compares your tax liability to the wages already withheld by your employer.',
        };
      case 'state-tax-comparison':
        return {
          inputs: (
            <>
              {numberInput('Annual Income', compareIncome, setCompareIncome, 0, 1000000, 1000)}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">State A</label>
                <select
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {stateOptions.map((stateOption) => (
                    <option key={stateOption} value={stateOption}>
                      {abbreviationToStateName[stateOption]} ({stateOption})
                    </option>
                  ))}
                </select>
              </div>
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">State B</label>
                <select
                  value={compareState}
                  onChange={(event) => setCompareState(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
                >
                  {stateOptions.map((stateOption) => (
                    <option key={stateOption} value={stateOption}>
                      {abbreviationToStateName[stateOption]} ({stateOption})
                    </option>
                  ))}
                </select>
              </div>
            </>
          ),
          rows: [
            { label: `${abbreviationToStateName[state]} Tax Rate`, value: formatPercent(stateComparison.current.rate) },
            { label: `${abbreviationToStateName[compareState]} Tax Rate`, value: formatPercent(stateComparison.compare.rate) },
            { label: 'Tax Difference', value: formatCurrency(Math.abs(stateComparison.current.tax - stateComparison.compare.tax)) },
          ],
          note: 'Use this comparison to see how much state income tax changes between two locations.',
        };
      default:
        return {
          inputs: (
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-6 text-center">
              <p className="text-gray-700 dark:text-gray-300">This tool is ready. Enter inputs above to see calculated results.</p>
            </div>
          ),
          rows: [
            { label: 'Estimated Value', value: formatCurrency(0) },
          ],
          note: 'Please select a calculator to get started.',
        };
    }
  }, [slug, annualIncome, amount, state, filingStatus, rate, longTerm, dependents, withholding, compareState, compareIncome, bonusAmount, propertyValue, propertyRate, mortgageInterest, hsaContribution, itemizedAmount]);

  if (!calculator) {
    return (
      <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 p-10 text-center bg-white dark:bg-slate-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Calculator not found</h2>
        <p className="text-gray-600 dark:text-gray-400">The requested calculator could not be loaded. Please return to the calculator list and choose a different tool.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{calculator.name}</h2>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{calculator.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] p-6">
        <div className="space-y-6">{summary.inputs}</div>

        <aside className="space-y-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-700 p-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
            <div className="space-y-4">
              {summary.rows.map((row) => (
                <div key={row.label} className="rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{row.label}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">{summary.note}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

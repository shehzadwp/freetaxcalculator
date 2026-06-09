import type { LucideIcon } from 'lucide-react';
import {
  DollarSign,
  TrendingUp,
  Calculator,
  Percent,
  Briefcase,
  Gift,
  Home,
  Zap,
  ShieldCheck,
  BarChart3,
  Shield,
  Sparkles,
  CreditCard,
  Star,
  ShieldAlert,
  Wallet,
  Globe,
  ShoppingCart,
} from 'lucide-react';

export interface CalculatorConfig {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: string;
  subtitle: string;
  heroTitle: string;
  heroDescription: string;
  keywords: string[];
  component: 'salary' | 'after-tax' | 'generic';
  contentSections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  badge?: string;
  icon: LucideIcon;
}

export const calculators: Record<string, CalculatorConfig> = {
  'salary-calculator': {
    slug: 'salary-calculator',
    name: 'Salary FreeTaxCalculator.us',
    title: 'Salary FreeTaxCalculator.us - Calculate Your Take-Home Pay',
    description:
      'Free salary calculator to determine your take-home pay after federal, state, and payroll taxes. Updated with 2026 tax brackets and FICA rates.',
    category: 'Income Tax',
    subtitle: 'SALARY CALCULATOR',
    heroTitle: 'Calculate Your Take-Home Pay',
    heroDescription:
      'Enter your annual salary to see exactly how much you will take home after taxes. Includes federal, state, Social Security, and Medicare taxes.',
    keywords: [
      'salary calculator',
      'take home pay calculator',
      'net pay calculator',
      'paycheck calculator',
      'federal tax calculator',
    ],
    component: 'salary',
    icon: DollarSign,
    badge: 'Popular',
    contentSections: [
      {
        heading: 'How the Salary FreeTaxCalculator.us Works',
        body: 'Our salary tax calculator estimates your net pay by applying current federal income tax brackets, FICA payroll taxes, and state income tax rates to your gross annual salary. Enter your salary, select your state, and choose your filing status to receive an instant breakdown of federal tax, Social Security, Medicare, state tax, and your estimated take-home pay. All calculations run locally in your browser — your financial data is never sent to our servers.',
      },
      {
        heading: 'Federal Income Tax',
        body: 'Federal income tax is calculated using the 2026 IRS tax brackets for your filing status. Your taxable income is reduced by the standard deduction before brackets are applied. Tax is computed progressively — each portion of your income is taxed at the rate for its bracket, not your entire salary at the top rate.',
      },
      {
        heading: 'FICA Payroll Taxes',
        body: 'FICA taxes fund Social Security and Medicare. Social Security tax is 6.2% on wages up to the 2026 wage base of $168,600. Medicare tax is 1.45% on all wages with no cap. These payroll taxes are withheld from every paycheck and directly affect your take-home pay.',
      },
    ],
    faqs: [
      {
        question: 'How accurate is this salary tax calculator?',
        answer:
          'Our calculator uses official 2026 federal tax brackets, FICA rates, and estimated state tax rates. Results are reliable estimates for budgeting, but your actual withholding may differ based on W-4 settings, pre-tax deductions, tax credits, and other factors.',
      },
      {
        question: 'Does this calculator account for the standard deduction?',
        answer:
          'Yes. Federal income tax is calculated on taxable income after subtracting the 2026 standard deduction for your filing status. Single filers receive a $14,600 deduction; married filing jointly receives $29,200.',
      },
      {
        question: 'Is my salary data stored or shared?',
        answer:
          'No. All calculations run entirely in your browser. We do not collect, store, or transmit any financial information you enter into the calculator.',
      },
    ],
  },
  'after-tax': {
    slug: 'after-tax',
    name: 'After-Tax Income Calculator',
    title: 'After-Tax Income Calculator - Break Down Your Earnings',
    description:
      'Calculate your after-tax income with detailed breakdown by pay period. See monthly, bi-weekly, weekly, daily, and hourly take-home pay after all taxes.',
    category: 'Income Tax',
    subtitle: 'AFTER-TAX CALCULATOR',
    heroTitle: 'See Your Earnings by Pay Period',
    heroDescription:
      'Calculate your after-tax income and see exactly how much you earn monthly, bi-weekly, weekly, or hourly after all federal, state, and payroll taxes.',
    keywords: [
      'after tax calculator',
      'net pay calculator',
      'take home pay',
      'pay period calculator',
      'hourly after tax',
    ],
    component: 'after-tax',
    icon: TrendingUp,
    badge: 'Updated 2026',
    contentSections: [
      {
        heading: 'Understanding Your After-Tax Income',
        body: 'After-tax income — also called net pay or take-home pay — is the amount you actually receive in your bank account after all taxes are deducted from your gross salary. This figure is the most important number for personal budgeting because it represents what you can actually spend, save, or invest each month.',
      },
      {
        heading: 'Pay Period Breakdowns Explained',
        body: 'Most American workers receive paychecks on a bi-weekly schedule (26 pay periods per year), but pay frequency varies by employer. Monthly pay divides annual net income by 12. Bi-weekly divides by 26. Weekly divides by 52. Daily pay assumes 260 working days per year. Hourly pay assumes an 8-hour workday over 260 working days.',
      },
      {
        heading: 'Why After-Tax Income Matters',
        body: 'Many people budget based on their gross salary and are surprised when their bank balance does not match expectations. Using after-tax figures prevents overcommitting to rent, car payments, or subscriptions.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between gross and after-tax income?',
        answer:
          'Gross income is your total earnings before any deductions. After-tax income (net pay) is what remains after federal, state, and payroll taxes are subtracted.',
      },
      {
        question: 'Does this include 401(k) or health insurance deductions?',
        answer:
          'This calculator shows after-tax pay based on tax withholdings only. Pre-tax deductions like 401(k) contributions and health insurance premiums are not included.',
      },
      {
        question: 'Are these calculations suitable for tax filing?',
        answer:
          'No. This tool provides estimates for budgeting and planning. Consult a qualified tax professional for filing advice.',
      },
    ],
  },
  'federal-tax-estimator': {
    slug: 'federal-tax-estimator',
    name: 'Federal Tax Estimator',
    title: 'Federal Tax Estimator - Estimate Your Federal Income Tax',
    description:
      'Quickly estimate your federal income tax liability for 2026 using standard deductions and bracket ranges.',
    category: 'Income Tax',
    subtitle: 'FEDERAL TAX ESTIMATOR',
    heroTitle: 'Estimate Your Federal Tax',
    heroDescription:
      'Use our federal tax estimator to see how much you may owe to the IRS based on your taxable income and filing status.',
    keywords: ['federal tax estimator', 'IRS estimator', 'income tax estimate'],
    component: 'generic',
    icon: Calculator,
    badge: 'Popular',
    contentSections: [
      {
        heading: 'Estimate Federal Liability',
        body: 'Enter your estimated taxable income and filing status to quickly see your federal tax estimate. This tool uses the 2026 tax brackets and standard deduction to provide a fast, easy estimate.',
      },
    ],
    faqs: [
      {
        question: 'Can I use this estimator for planning?',
        answer:
          'Yes. The estimator helps with planning, but it is not a substitute for a full tax return or advice from a CPA.',
      },
    ],
  },
  'state-income-tax': {
    slug: 'state-income-tax',
    name: 'State Income FreeTaxCalculator.us',
    title: 'State Income FreeTaxCalculator.us - Compare State Tax Rates',
    description:
      'Compare state income taxes across all 50 states and DC to see how location affects your take-home pay.',
    category: 'Income Tax',
    subtitle: 'STATE TAX CALCULATOR',
    heroTitle: 'Compare State Income Taxes',
    heroDescription:
      'Find which states have no income tax and estimate how your net pay changes when you move across state lines.',
    keywords: ['state income tax', 'state tax calculator', 'no income tax states'],
    component: 'generic',
    icon: Home,
    contentSections: [
      {
        heading: 'State Tax Comparison',
        body: 'Use this calculator to compare state tax burdens and see how much of your salary is subject to state income tax in each state.',
      },
    ],
    faqs: [
      {
        question: 'Which states have no income tax?',
        answer:
          'Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming do not tax wage income.',
      },
    ],
  },
  'capital-gains-tax': {
    slug: 'capital-gains-tax',
    name: 'Capital Gains FreeTaxCalculator.us',
    title: 'Capital Gains FreeTaxCalculator.us - Estimate Investment Taxes',
    description:
      'Estimate how much tax you owe on capital gains for short-term and long-term investments in 2026.',
    category: 'Investment Tax',
    subtitle: 'CAPITAL GAINS TAX',
    heroTitle: 'Calculate Investment Tax',
    heroDescription:
      'Estimate capital gains tax on stock sales, investment real estate, or asset sales in 2026.',
    keywords: ['capital gains tax', 'investment tax', 'long term gains'],
    component: 'generic',
    icon: BarChart3,
    contentSections: [
      {
        heading: 'Short-Term vs Long-Term',
        body: 'Short-term gains are taxed at ordinary income rates, while long-term gains receive lower rates if you hold the investment for more than one year.',
      },
    ],
    faqs: [
      {
        question: 'How are capital gains taxed?',
        answer:
          'Short-term gains are taxed like ordinary income, while long-term gains are taxed at preferential rates depending on your income bracket.',
      },
    ],
  },
  'self-employment-tax': {
    slug: 'self-employment-tax',
    name: 'Self-Employment FreeTaxCalculator.us',
    title: 'Self-Employment FreeTaxCalculator.us - Estimate SE Tax',
    description:
      'Calculate self-employment tax for freelancers, contractors, and small business owners using 2026 rates.',
    category: 'Income Tax',
    subtitle: 'SELF-EMPLOYMENT TAX',
    heroTitle: 'Estimate Your SE Tax',
    heroDescription:
      'Figure your self-employment tax liability and compare it to payroll taxes for W-2 employment.',
    keywords: ['self employment tax', 'SE tax', 'freelancer tax'],
    component: 'generic',
    icon: ShieldCheck,
    contentSections: [
      {
        heading: 'Self-Employment Tax Basics',
        body: 'Self-employment tax covers Social Security and Medicare contributions for independent workers. This calculator helps you estimate the combined tax rate on your business income.',
      },
    ],
    faqs: [
      {
        question: 'What is self-employment tax?',
        answer:
          'Self-employment tax is the combined Social Security and Medicare tax paid by self-employed individuals on their net earnings.',
      },
    ],
  },
  'payroll-tax': {
    slug: 'payroll-tax',
    name: 'Payroll FreeTaxCalculator.us',
    title: 'Payroll FreeTaxCalculator.us - Estimate Social Security & Medicare',
    description:
      'Calculate payroll taxes including Social Security and Medicare for employees and employers.',
    category: 'Payroll & Benefits',
    subtitle: 'PAYROLL TAX',
    heroTitle: 'Estimate Payroll Taxes',
    heroDescription:
      'See how Social Security and Medicare taxes affect both employee take-home pay and employer payroll costs.',
    keywords: ['payroll tax', 'FICA calculator', 'Social Security tax'],
    component: 'generic',
    icon: CreditCard,
    contentSections: [
      {
        heading: 'Payroll Taxes Explained',
        body: 'Payroll taxes include Social Security and Medicare contributions. This calculator shows the payroll tax burden for a single employee salary amount.',
      },
    ],
    faqs: [
      {
        question: 'What is FICA tax?',
        answer:
          'FICA tax includes Social Security and Medicare taxes that are withheld from wages and matched by employers.',
      },
    ],
  },
  'tax-bracket-lookup': {
    slug: 'tax-bracket-lookup',
    name: 'Tax Bracket Lookup',
    title: 'Tax Bracket Lookup - Find Your 2026 Tax Bracket',
    description:
      'Look up the 2026 federal tax bracket for your filing status and taxable income.',
    category: 'Income Tax',
    subtitle: 'TAX BRACKET LOOKUP',
    heroTitle: 'Find Your Tax Bracket',
    heroDescription:
      'Discover which federal income tax bracket applies to your taxable income in 2026.',
    keywords: ['tax bracket lookup', '2026 tax bracket', 'income tax bracket'],
    component: 'generic',
    icon: Percent,
    contentSections: [
      {
        heading: 'Use Your Tax Bracket',
        body: 'Knowing your tax bracket helps you understand how much of your income is taxed at each rate and how a raise impacts your overall liability.',
      },
    ],
    faqs: [
      {
        question: 'How is a tax bracket determined?',
        answer:
          'Your tax bracket is based on taxable income after deductions and filing status, and progressively applies different rates to portions of your income.',
      },
    ],
  },
  'estate-tax-estimator': {
    slug: 'estate-tax-estimator',
    name: 'Estate Tax Estimator',
    title: 'Estate Tax Estimator - Plan Your Inheritance Tax',
    description:
      'Estimate federal estate tax exposure for large inheritances and estate values.',
    category: 'Estate Tax',
    subtitle: 'ESTATE TAX ESTIMATOR',
    heroTitle: 'Estimate Estate Tax',
    heroDescription:
      'Calculate your federal estate tax exposure for high-value assets and transfers to heirs.',
    keywords: ['estate tax estimator', 'inheritance tax', 'estate planning'],
    component: 'generic',
    icon: ShieldAlert,
    contentSections: [
      {
        heading: 'Estate Tax Planning',
        body: 'Use this estimator to understand whether your estate may owe federal estate tax based on current exemption levels and tax rates.',
      },
    ],
    faqs: [
      {
        question: 'Who pays estate tax?',
        answer:
          'Estate tax is typically paid by the estate itself before assets are distributed to heirs, depending on the estate value and current exemptions.',
      },
    ],
  },
  'property-tax': {
    slug: 'property-tax',
    name: 'Property FreeTaxCalculator.us',
    title: 'Property FreeTaxCalculator.us - Estimate Your Annual Property Taxes',
    description:
      'Estimate property tax bills for homes or commercial properties based on assessed value and local rates.',
    category: 'Property',
    subtitle: 'PROPERTY TAX',
    heroTitle: 'Estimate Property Tax',
    heroDescription:
      'Quickly estimate annual property tax costs using your property value and local tax rate.',
    keywords: ['property tax calculator', 'real estate tax', 'home tax'],
    component: 'generic',
    icon: Home,
    contentSections: [
      {
        heading: 'Property Tax Estimates',
        body: 'Property taxes vary by state and county. This calculator gives a fast estimate to help you budget for homeownership costs.',
      },
    ],
    faqs: [
      {
        question: 'What determines property tax?',
        answer:
          'Property tax is based on the assessed value of the property and the local tax rate applied by the county or municipality.',
      },
    ],
  },
  'retirement-withdrawal': {
    slug: 'retirement-withdrawal',
    name: 'Retirement Withdrawal Calculator',
    title: 'Retirement Withdrawal Calculator - Plan Your Income',
    description:
      'Estimate retirement withdrawals and the tax impact on your yearly income.',
    category: 'Retirement',
    subtitle: 'RETIREMENT WITHDRAWAL',
    heroTitle: 'Plan Retirement Withdrawals',
    heroDescription:
      'Estimate retirement income and tax consequences based on your savings and withdrawal schedule.',
    keywords: ['retirement withdrawal calculator', 'retirement income', 'RMD estimate'],
    component: 'generic',
    icon: Wallet,
    contentSections: [
      {
        heading: 'Retirement Income Planning',
        body: 'Use this calculator to model retirement withdrawals and understand how much income remains after taxes and required minimum distributions.',
      },
    ],
    faqs: [
      {
        question: 'Should I withdraw from a Roth or traditional account?',
        answer:
          'Roth withdrawals are typically tax-free if qualified, while traditional distributions are taxed as ordinary income.',
      },
    ],
  },
  'tax-credit-calculator': {
    slug: 'tax-credit-calculator',
    name: 'Tax Credit Calculator',
    title: 'Tax Credit Calculator - Estimate Your Savings',
    description:
      'Estimate how tax credits like the child tax credit and education credits reduce your tax bill.',
    category: 'Credits & Deductions',
    subtitle: 'TAX CREDIT CALCULATOR',
    heroTitle: 'Estimate Tax Credits',
    heroDescription:
      'Calculate the impact of common tax credits on your tax liability and take-home pay.',
    keywords: ['tax credit calculator', 'child tax credit', 'education credit'],
    component: 'generic',
    icon: Sparkles,
    contentSections: [
      {
        heading: 'Using Tax Credits',
        body: 'Tax credits directly reduce your tax bill dollar-for-dollar. This calculator helps you estimate how credits can lower your overall tax liability.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between a deduction and a credit?',
        answer:
          'A deduction lowers taxable income, while a credit reduces your tax liability directly.',
    },
    ],
  },
  'mortgage-interest-deduction': {
    slug: 'mortgage-interest-deduction',
    name: 'Mortgage Interest Deduction Calculator',
    title: 'Mortgage Interest Deduction Calculator - Estimate Savings',
    description:
      'Estimate the tax savings from mortgage interest deductions on your home loan.',
    category: 'Credits & Deductions',
    subtitle: 'MORTGAGE DEDUCTION',
    heroTitle: 'Estimate Mortgage Interest Savings',
    heroDescription:
      'Calculate how much you can save on taxes from mortgage interest deductions.',
    keywords: ['mortgage interest deduction', 'home tax savings', 'itemized deduction'],
    component: 'generic',
    icon: Gift,
    contentSections: [
      {
        heading: 'Mortgage Tax Savings',
        body: 'Mortgage interest may be deductible when you itemize. This tool helps you estimate the value of that deduction based on your loan interest.',
      },
    ],
    faqs: [
      {
        question: 'Can I deduct mortgage interest?',
        answer:
          'You may deduct mortgage interest if you itemize deductions and your mortgage qualifies under IRS rules.',
      },
    ],
  },
  'hsasavings-calculator': {
    slug: 'hsa-savings',
    name: 'HSA Savings Calculator',
    title: 'HSA Savings Calculator - Tax-Advantaged Healthcare Savings',
    description:
      'Estimate how a Health Savings Account can reduce your taxable income and grow your savings.',
    category: 'Retirement',
    subtitle: 'HSA SAVINGS',
    heroTitle: 'Estimate HSA Tax Benefits',
    heroDescription:
      'Find out how much you can save using a health savings account and reduce taxable income in the process.',
    keywords: ['HSA savings', 'health savings account', 'tax advantaged savings'],
    component: 'generic',
    icon: CreditCard,
    contentSections: [
      {
        heading: 'HSA Tax Advantages',
        body: 'Health Savings Accounts offer pre-tax contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.',
      },
    ],
    faqs: [
      {
        question: 'Are HSA contributions tax deductible?',
        answer:
          'Yes, HSA contributions reduce your taxable income when made with pre-tax dollars.',
      },
    ],
  },
  'sales-tax-calculator': {
    slug: 'sales-tax-calculator',
    name: 'Sales FreeTaxCalculator.us',
    title: 'Sales FreeTaxCalculator.us - Estimate Purchase Tax',
    description:
      'Calculate sales tax on purchases across states and compare total costs with tax included.',
    category: 'Property',
    subtitle: 'SALES TAX',
    heroTitle: 'Estimate Sales Tax',
    heroDescription:
      'Quickly calculate how much sales tax you will pay on a purchase in your state.',
    keywords: ['sales tax calculator', 'purchase tax', 'state sales tax'],
    component: 'generic',
    icon: ShoppingCart,
    contentSections: [
      {
        heading: 'Sales Tax Estimates',
        body: 'Sales tax varies by state and locality. Use this calculator to estimate the total amount you will pay at checkout.',
      },
    ],
    faqs: [
      {
        question: 'How is sales tax calculated?',
        answer:
          'Sales tax is applied to the purchase price at the rate charged by the state or local jurisdiction.',
      },
    ],
  },
  'bonus-tax-calculator': {
    slug: 'bonus-tax-calculator',
    name: 'Bonus FreeTaxCalculator.us',
    title: 'Bonus FreeTaxCalculator.us - Estimate Tax on Bonus Income',
    description:
      'Estimate how much tax your year-end bonus will cost after federal, state, and payroll taxes.',
    category: 'Income Tax',
    subtitle: 'BONUS TAX',
    heroTitle: 'Calculate Bonus Tax',
    heroDescription:
      'Estimate what your next bonus will be worth after taxes so you can plan your net pay.',
    keywords: ['bonus tax calculator', 'bonus withholding', 'bonus take-home pay'],
    component: 'generic',
    icon: Gift,
    contentSections: [
      {
        heading: 'Bonus Tax Planning',
        body: 'Bonuses are often taxed at a higher supplemental rate. This calculator helps you estimate the net amount you receive after tax withholding.',
      },
    ],
    faqs: [
      {
        question: 'Are bonuses taxed differently?',
        answer:
          'Often yes. Employers may withhold bonuses at supplemental rates, and the final tax liability depends on your total annual income.',
      },
    ],
  },
  'hourly-wage-calculator': {
    slug: 'hourly-wage-calculator',
    name: 'Hourly Wage Calculator',
    title: 'Hourly Wage Calculator - Convert Hourly Rate to Annual Income',
    description:
      'Convert your hourly wage to annual salary and estimate take-home pay after taxes.',
    category: 'Income Tax',
    subtitle: 'HOURLY WAGE',
    heroTitle: 'Convert Hourly Wage',
    heroDescription:
      'Enter your hourly rate to see your annual equivalent and after-tax take-home income.',
    keywords: ['hourly wage calculator', 'hourly to salary', 'paycheck conversion'],
    component: 'generic',
    icon: Briefcase,
    contentSections: [
      {
        heading: 'Hourly Wage Conversion',
        body: 'Estimate your annual salary by entering your hourly rate and typical work hours. This calculator is useful for hourly employees comparing job offers.',
      },
    ],
    faqs: [
      {
        question: 'How do you calculate annual income from hourly pay?',
        answer:
          'Multiply your hourly rate by the number of hours you work per week and then by 52 weeks.',
      },
    ],
  },
  'effective-tax-rate': {
    slug: 'effective-tax-rate',
    name: 'Effective Tax Rate Calculator',
    title: 'Effective Tax Rate Calculator - See Your True Tax Burden',
    description:
      'Calculate your effective tax rate based on total taxes paid and gross income.',
    category: 'Income Tax',
    subtitle: 'EFFECTIVE TAX RATE',
    heroTitle: 'Measure Your Effective Tax Rate',
    heroDescription:
      'Understand how much of your income goes to taxes after accounting for federal, state, and payroll taxes.',
    keywords: ['effective tax rate', 'tax burden', 'average tax rate'],
    component: 'generic',
    icon: BarChart3,
    contentSections: [
      {
        heading: 'What is Effective Tax Rate?',
        body: 'Effective tax rate is the percentage of your gross income that you pay in total taxes. It is useful for comparing tax burden across income levels.',
      },
    ],
    faqs: [
      {
        question: 'How is effective tax rate different from marginal rate?',
        answer:
          'Marginal rate applies to your last dollar of income, while effective rate measures your total taxes divided by your total income.',
      },
    ],
  },
  'pay-frequency-converter': {
    slug: 'pay-frequency-converter',
    name: 'Pay Frequency Converter',
    title: 'Pay Frequency Converter - Monthly, Weekly, Bi-Weekly',
    description:
      'Convert pay frequency amounts between annual, monthly, weekly, and hourly values.',
    category: 'Payroll & Benefits',
    subtitle: 'PAY FREQUENCY',
    heroTitle: 'Convert Pay Frequencies',
    heroDescription:
      'Use this calculator to compare monthly, weekly, bi-weekly, and hourly earnings side-by-side.',
    keywords: ['pay frequency converter', 'salary frequency', 'monthly to weekly pay'],
    component: 'generic',
    icon: Zap,
    contentSections: [
      {
        heading: 'Pay Period Conversion',
        body: 'Convert income between different pay periods to understand your effective earnings on any schedule.',
      },
    ],
    faqs: [
      {
        question: 'How many bi-weekly pay periods are in a year?',
        answer:
          'There are 26 bi-weekly pay periods in a year.',
      },
    ],
  },
  'business-expense-calculator': {
    slug: 'business-expense-calculator',
    name: 'Business Expense Calculator',
    title: 'Business Expense Calculator - Track Deductible Costs',
    description:
      'Estimate business expenses and tax deductions for freelancers, contractors, and small businesses.',
    category: 'Credits & Deductions',
    subtitle: 'BUSINESS EXPENSES',
    heroTitle: 'Calculate Deductible Business Expenses',
    heroDescription:
      'Estimate how business expenses reduce your taxable income and improve your net profit.',
    keywords: ['business expense calculator', 'deductible expenses', 'self employment deductions'],
    component: 'generic',
    icon: Briefcase,
    contentSections: [
      {
        heading: 'Track Deductible Expenses',
        body: 'Keep a close eye on deductible expenses, including equipment, travel, and home office costs, to lower your taxable income.',
      },
    ],
    faqs: [
      {
        question: 'Can business expenses reduce tax liability?',
        answer:
          'Yes. Qualifying business expenses reduce your net profit, which lowers your taxable income for self-employment tax and income tax.',
      },
    ],
  },
  'estate-inheritance-tax': {
    slug: 'estate-inheritance-tax',
    name: 'Inheritance & Estate FreeTaxCalculator.us',
    title: 'Inheritance & Estate FreeTaxCalculator.us - Estimate Tax on Inheritance',
    description:
      'Estimate federal inheritance and estate tax obligations for beneficiaries and estate executors.',
    category: 'Estate Tax',
    subtitle: 'INHERITANCE TAX',
    heroTitle: 'Estimate Inheritance Tax',
    heroDescription:
      'Use this calculator to understand how estate tax and inheritance tax may affect your beneficiaries.',
    keywords: ['inheritance tax', 'estate tax calculator', 'inheritance calculator'],
    component: 'generic',
    icon: Shield,
    contentSections: [
      {
        heading: 'Inheritance Tax Considerations',
        body: 'This estimator shows the potential tax liability on inherited assets based on current federal exemption rules.',
      },
    ],
    faqs: [
      {
        question: 'Is inherited property taxable?',
        answer:
          'Inheritance itself is not usually taxed at the federal level, but estate tax and state inheritance taxes may apply depending on the situation.',
      },
    ],
  },
  'standard-vs-itemized': {
    slug: 'standard-vs-itemized',
    name: 'Standard vs Itemized Deduction Calculator',
    title: 'Standard vs Itemized Deduction Calculator - Choose Your Tax Strategy',
    description:
      'Compare the standard deduction to common itemized deductions and choose the best path for 2026.',
    category: 'Credits & Deductions',
    subtitle: 'DEDUCTION COMPARISON',
    heroTitle: 'Choose Standard or Itemized',
    heroDescription:
      'Compare deductions to determine whether itemizing saves more money than taking the standard deduction.',
    keywords: ['standard deduction', 'itemized deductions', 'deduction comparison'],
    component: 'generic',
    icon: Star,
    contentSections: [
      {
        heading: 'Deduction Strategies',
        body: 'Compare common itemized deductions like mortgage interest, state taxes, and charitable gifts against the standard deduction.',
      },
    ],
    faqs: [
      {
        question: 'Should I itemize deductions?',
        answer:
          'Itemize if your eligible deductions exceed the standard deduction for your filing status.',
      },
    ],
  },
  'tax-refund-estimate': {
    slug: 'tax-refund-estimate',
    name: 'Tax Refund Estimate',
    title: 'Tax Refund Estimate - Predict Your Refund',
    description:
      'Estimate whether you are likely to receive a federal tax refund or owe taxes when you file.',
    category: 'Income Tax',
    subtitle: 'REFUND ESTIMATE',
    heroTitle: 'Estimate Your Tax Refund',
    heroDescription:
      'Get an estimate of your federal refund or balance due before you file your tax return.',
    keywords: ['tax refund estimate', 'refund calculator', 'tax owed estimate'],
    component: 'generic',
    icon: Sparkles,
    contentSections: [
      {
        heading: 'Refund or Owe?',
        body: 'Use your income, withholding, and credits to estimate whether you will receive a refund or owe money to the IRS.',
      },
    ],
    faqs: [
      {
        question: 'What affects my tax refund?',
        answer:
          'Your refund depends on income, tax withholding, credits, deductions, and whether you overpaid taxes during the year.',
      },
    ],
  },
  'state-tax-comparison': {
    slug: 'state-tax-comparison',
    name: 'State Tax Comparison',
    title: 'State Tax Comparison - Compare State Tax Rates Side-by-Side',
    description:
      'Compare state income tax, sales tax, and property tax estimates across states.',
    category: 'State Taxes',
    subtitle: 'STATE TAX COMPARISON',
    heroTitle: 'Compare State Tax Burdens',
    heroDescription:
      'See how state taxes change your overall tax burden and take-home income when comparing across states.',
    keywords: ['state tax comparison', 'state tax calculator', 'state tax rates'],
    component: 'generic',
    icon: Globe,
    contentSections: [
      {
        heading: 'Compare State Taxes',
        body: 'Comparing state taxes can help you evaluate relocation decisions and understand total tax exposure on income and purchases.',
      },
    ],
    faqs: [
      {
        question: 'How do state taxes affect take-home pay?',
        answer:
          'State taxes reduce your net income in addition to federal taxes. Comparing state rates helps reveal the full tax picture.',
      },
    ],
  },
};

export function getCalculator(slug: string): CalculatorConfig | undefined {
  return Object.values(calculators).find((calculator) => calculator.slug === slug) ?? calculators[slug];
}

export function getAllCalculatorSlugs(): string[] {
  return Object.values(calculators).map((calculator) => calculator.slug);
}

export function getAllCalculators(): CalculatorConfig[] {
  return Object.values(calculators);
}

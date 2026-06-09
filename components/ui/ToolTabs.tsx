'use client';

import CalculatorCard from '@/components/ui/CalculatorCard';
import {
  DollarSign,
  TrendingUp,
  Calculator,
  PieChart,
  Percent,
  Briefcase,
  Gift,
  Home,
  GraduationCap,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const toolSections = [
  {
    name: 'Income Tax',
    calculators: [
      {
        title: 'Salary Calculator',
        description: 'Calculate your take-home pay after taxes.',
        icon: DollarSign,
        href: '/tools/salary-calculator',
      },
      {
        title: 'After-FreeTaxCalculator.us',
        description: 'Estimate your net income by pay period.',
        icon: TrendingUp,
        href: '/tools/after-tax',
      },
      {
        title: 'Tax Brackets',
        description: 'Review 2026 federal and state tax brackets.',
        icon: Calculator,
        href: '/tools',
      },
    ],
  },
  {
    name: 'Investment Tax',
    calculators: [
      {
        title: 'Capital Gains',
        description: 'Estimate long-term and short-term gains taxes.',
        icon: PieChart,
        href: '/tools',
      },
      {
        title: 'Effective Tax Rate',
        description: 'See how your total tax compares to income.',
        icon: Percent,
        href: '/tools',
      },
      {
        title: 'Tax Estimator',
        description: 'Forecast your annual tax liability.',
        icon: Calculator,
        href: '/tools',
      },
    ],
  },
  {
    name: 'Estate Tax',
    calculators: [
      {
        title: 'Estate Planning Tool',
        description: 'Estimate tax exposure for estate transfers.',
        icon: Gift,
        href: '/tools',
      },
      {
        title: 'Inheritance Calculator',
        description: 'Compare tax treatment for beneficiaries.',
        icon: Briefcase,
        href: '/tools',
      },
      {
        title: 'Gift Tax Estimator',
        description: 'Estimate gift tax liability for large transfers.',
        icon: Zap,
        href: '/tools',
      },
    ],
  },
  {
    name: 'Property',
    calculators: [
      {
        title: 'Property FreeTaxCalculator.us',
        description: 'Estimate annual property tax costs.',
        icon: Home,
        href: '/tools',
      },
      {
        title: 'Mortgage Tax Savings',
        description: 'See how deductions affect your monthly payment.',
        icon: Briefcase,
        href: '/tools',
      },
    ],
  },
  {
    name: 'Retirement',
    calculators: [
      {
        title: 'Retirement Income',
        description: 'Project take-home pay in retirement.',
        icon: GraduationCap,
        href: '/tools',
      },
      {
        title: '401(k) Contribution',
        description: 'Estimate tax savings from retirement contributions.',
        icon: DollarSign,
        href: '/tools',
      },
    ],
  },
  {
    name: 'Credits & Deductions',
    calculators: [
      {
        title: 'Tax Deductions Guide',
        description: 'Learn which deductions may lower your bill.',
        icon: Calculator,
        href: '/tools',
      },
      {
        title: 'Tax Credit Calculator',
        description: 'Estimate savings from federal credits.',
        icon: Gift,
        href: '/tools',
      },
    ],
  },
];

export default function ToolTabs() {
  const [active, setActive] = useState(toolSections[0].name);
  const activeSection = useMemo(
    () => toolSections.find((section) => section.name === active) ?? toolSections[0],
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        {toolSections.map((section) => (
          <button
            key={section.name}
            type="button"
            onClick={() => setActive(section.name)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === section.name
                ? 'bg-accent text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {activeSection.calculators.map((calc) => (
          <CalculatorCard key={calc.title} {...calc} />
        ))}
      </div>
    </div>
  );
}

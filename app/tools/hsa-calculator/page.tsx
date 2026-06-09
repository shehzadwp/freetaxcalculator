import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FaqSection from '@/components/ui/FaqSection';
import JsonLd from '@/components/seo/JsonLd';
import HsaCalculator from '@/components/calculators/HsaCalculator';
import { breadcrumbSchema, faqPageSchema, webApplicationSchema } from '@/lib/seo/schema';

export const metadata = {
  title: 'HSA Calculator - Health Savings Account Tax Savings',
  description:
    'Use the HSA calculator to estimate annual contribution limits, federal, FICA, and state tax savings and discover your effective cost after savings.',
};

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Calculators', path: '/tools' },
  { name: 'HSA Calculator', path: '/tools/hsa-calculator' },
];

const faqs = [
  {
    question: 'What is the annual HSA contribution limit?',
    answer: 'For 2026, the annual limit is $4,150 for Self coverage, $8,300 for Family coverage, and an additional $1,000 catch-up contribution if you are age 55 or older.',
  },
  {
    question: 'How does an HSA reduce my taxes?',
    answer: 'Contributions are made pre-tax or deductible, reducing your federal taxable income, lowering FICA taxes, and often reducing state income tax as well.',
  },
  {
    question: 'Can I contribute more if I am over 55?',
    answer: 'Yes, if you are age 55 or older you can add a catch-up contribution of up to $1,000 on top of the regular HSA limit.',
  },
  {
    question: 'What expenses are allowed from an HSA?',
    answer: 'Qualified medical expenses, including prescriptions, doctor visits, dental, vision, and some over-the-counter health products, can be paid tax-free from an HSA.',
  },
  {
    question: 'Does my state always allow the same HSA tax treatment as federal rules?',
    answer: 'Most states follow federal HSA treatment, but a few states may tax contributions or earnings differently. Use the state selector to estimate savings for your location.',
  },
];

const schema = [
  breadcrumbSchema(breadcrumbs),
  webApplicationSchema({
    name: 'HSA Calculator',
    description:
      'Calculate HSA contribution limits and estimate federal, FICA, and state tax savings for Self or Family coverage.',
    slug: 'hsa-calculator',
  }),
  faqPageSchema(faqs),
];

export default function HsaCalculatorPage() {
  return (
    <div className="safe-area">
      <JsonLd data={schema} />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-10">
            <HsaCalculator />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">HSA Calculator FAQs</h2>
            <FaqSection faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

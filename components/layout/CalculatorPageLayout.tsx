import { ReactNode } from 'react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CalculatorActions from '@/components/ui/CalculatorActions';
import type { BreadcrumbItem } from '@/lib/seo/schema';

interface CalculatorPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  calculator: ReactNode;
  content: ReactNode;
  faq: ReactNode;
  related?: ReactNode;
}

export default function CalculatorPageLayout({
  breadcrumbs,
  calculator,
  content,
  faq,
  related,
}: CalculatorPageLayoutProps) {
  return (
    <>
      <section className="py-8 md:py-12 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div>
              <CalculatorActions />
              {calculator}
            </div>

            <aside className="hidden lg:block sticky top-24 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Calculator Tips
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Compare different filing statuses and state selections to see how your net pay changes. Run the calculator for multiple scenarios to optimize your tax planning.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>• Review federal and state tax impacts together.</li>
                <li>• Use the calculator for budget planning and pay comparisons.</li>
                <li>• Save your results locally for up to 5 recent calculations.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {content}
      {related}
      {faq}
    </>
  );
}

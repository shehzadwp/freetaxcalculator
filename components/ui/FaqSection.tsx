import type { FaqItem } from '@/lib/seo/schema';

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
}

export default function FaqSection({
  title = 'Frequently Asked Questions',
  faqs,
}: FaqSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900" aria-labelledby="faq-heading">
      <div className="container-max container-px">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white bg-white dark:bg-slate-800 group-open:bg-accent group-open:text-white transition-colors flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-xl group-open:rotate-180 transition-transform" aria-hidden="true">
                  ▼
                </span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

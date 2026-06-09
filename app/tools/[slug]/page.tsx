import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/ui/HeroSection';
import CalculatorPageLayout from '@/components/layout/CalculatorPageLayout';
import CalculatorCard from '@/components/ui/CalculatorCard';
import FaqSection from '@/components/ui/FaqSection';
import JsonLd from '@/components/seo/JsonLd';
import LazyCalculator from '@/components/calculators/LazyCalculator';
import { buildMetadata } from '@/lib/seo/metadata';
import { getAllCalculators, getCalculator, getAllCalculatorSlugs } from '@/lib/seo/calculators';
import { siteConfig } from '@/lib/config/siteConfig';
import {
  breadcrumbSchema,
  webApplicationSchema,
  faqPageSchema,
} from '@/lib/seo/schema';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCalculatorSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const calc = getCalculator(params.slug);
  if (!calc) return {};

  return buildMetadata({
    title: calc.title,
    description: calc.description,
    path: `/tools/${calc.slug}`,
    keywords: calc.keywords,
    ogImage: `${siteConfig.domain}/api/og?title=${encodeURIComponent(calc.name)}&subtitle=${encodeURIComponent(calc.description.slice(0, 80))}`,
  });
}

export default function CalculatorPage({ params }: PageProps) {
  const calc = getCalculator(params.slug);
  if (!calc) notFound();

  const related = getAllCalculators()
    .filter((item) => item.category === calc.category && item.slug !== calc.slug)
    .slice(0, 3);

  const breadcrumbs = [
    { name: 'Calculators', path: '/tools' },
    { name: calc.name, path: `/tools/${calc.slug}` },
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbs),
    webApplicationSchema({
      name: calc.name,
      description: calc.description,
      slug: calc.slug,
    }),
    faqPageSchema(calc.faqs),
  ];

  return (
    <div className="safe-area">
      <JsonLd data={schemas} />

      <HeroSection
        subtitle={calc.subtitle}
        title={calc.heroTitle}
        description={calc.heroDescription}
      />

      <CalculatorPageLayout
        breadcrumbs={breadcrumbs}
        calculator={<LazyCalculator type={calc.component} slug={calc.slug} />}
        content={
          <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
            <div className="container-max container-px">
              <div className="max-w-3xl mx-auto space-y-8">
                {calc.contentSections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
        related={
          related.length > 0 ? (
            <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
              <div className="container-max container-px">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8 text-center">
                    <p className="text-sm uppercase tracking-[0.24em] text-accent font-semibold mb-2">Related Tools</p>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Explore Similar Calculators</h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {related.map((item) => (
                      <CalculatorCard
                        key={item.slug}
                        title={item.name}
                        description={item.description}
                        icon={item.icon}
                        href={`/tools/${item.slug}`}
                        badge={item.badge}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null
        }
        faq={<FaqSection faqs={calc.faqs} />}
      />
    </div>
  );
}

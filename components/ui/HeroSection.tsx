import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  description: string;
  cta?: {
    text: string;
    href: string;
  };
  subtitle?: string;
}

export default function HeroSection({
  title,
  description,
  cta,
  subtitle,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-16 md:py-24">
      <div className="container-max container-px">
        <div className="text-center max-w-3xl mx-auto">
          {subtitle && (
            <p className="text-sm md:text-base font-semibold text-accent mb-2 md:mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed">
            {description}
          </p>

          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 bg-accent hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all hover:gap-3"
            >
              {cta.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

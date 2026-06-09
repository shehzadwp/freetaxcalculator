import Link from 'next/link';
import * as Icons from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons | LucideIcon;
  href: string;
  badge?: string;
}

export default function CalculatorCard({
  title,
  description,
  icon,
  href,
  badge,
}: CalculatorCardProps) {
  const Icon = (typeof icon === 'string' ? Icons[icon] ?? Icons.Calculator : icon) as LucideIcon;

  return (
    <Link href={href}>
      <div className="h-full p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-accent dark:hover:border-accent transition-all cursor-pointer group">
        {/* Badge */}
        {badge && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-accent dark:text-blue-200 text-xs font-semibold rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="mb-4 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent transition-all">
          <Icon className="w-6 h-6 text-accent group-hover:text-white dark:group-hover:text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-semibold">Get Started →</span>
        </div>
      </div>
    </Link>
  );
}

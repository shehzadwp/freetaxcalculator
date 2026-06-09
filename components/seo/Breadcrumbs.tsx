import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '@/lib/seo/schema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-900 dark:text-white" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-accent transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config/siteConfig';

const widgetHost = siteConfig.domain.replace(/\/$/, '');

interface WidgetItem {
  title: string;
  description: string;
  code: string;
}

const defaultWidgets: WidgetItem[] = [
  {
    title: 'Salary Calculator',
    description: 'Embed a salary tax calculator directly on any page.',
    code: `<iframe src="${widgetHost}/tools/salary-calculator" width="100%" height="560" frameborder="0" loading="lazy"></iframe>`,
  },
  {
    title: 'Income FreeTaxCalculator.us',
    description: 'Add an embedded income tax calculator for quick federal estimates.',
    code: `<iframe src="${widgetHost}/tools/after-tax" width="100%" height="560" frameborder="0" loading="lazy"></iframe>`,
  },
  {
    title: 'Tax Bracket Calculator',
    description: 'Provide a quick tax bracket reference for visitors of your site.',
    code: `<iframe src="${widgetHost}/tools" width="100%" height="560" frameborder="0" loading="lazy"></iframe>`,
  },
];

interface EmbedWidgetsProps {
  widgets?: WidgetItem[];
}

export default function EmbedWidgets({ widgets = defaultWidgets }: EmbedWidgetsProps) {
  const [copied, setCopied] = useState('');

  const handleCopy = async (code: string, title: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(title);
      setTimeout(() => setCopied(''), 3000);
    } catch (error) {
      setCopied('failed');
      setTimeout(() => setCopied(''), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-6xl grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center justify-center">
      {widgets.map((widget) => (
        <div key={widget.title} className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{widget.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{widget.description}</p>
          <pre className="rounded-2xl bg-gray-50 dark:bg-slate-900 p-4 overflow-x-auto text-xs text-gray-700 dark:text-gray-300 mb-4">
            <code>{widget.code}</code>
          </pre>
          <button
            type="button"
            onClick={() => handleCopy(widget.code, widget.title)}
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Copy embed code
          </button>
          {copied === widget.title && (
            <p className="mt-3 text-sm text-green-600 dark:text-green-400">Code copied to clipboard!</p>
          )}
          {copied === 'failed' && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">Copy failed. Please try again.</p>
          )}
        </div>
      ))}
    </div>
  );
}

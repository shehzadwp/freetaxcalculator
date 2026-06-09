'use client';

import { useState } from 'react';
import { Clipboard, Printer, Share2 } from 'lucide-react';

interface CalculatorActionsProps {
  shareText?: string;
}

export default function CalculatorActions({ shareText = 'Share this calculator' }: CalculatorActionsProps) {
  const [status, setStatus] = useState<string>('');

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus('Link copied to clipboard.');
    } catch (error) {
      setStatus('Unable to copy link automatically.');
    }

    window.setTimeout(() => setStatus(''), 3000);
  };

  const printPage = () => {
    window.print();
  };

  const sharePage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: shareText,
          url: window.location.href,
        });
      } catch {
        setStatus('Sharing cancelled.');
      }
    } else {
      copyLink();
    }
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">Save and share your results</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Copy a link, print your summary, or share your calculator results with anyone.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition"
        >
          <Clipboard className="w-4 h-4" /> Copy link
        </button>
        <button
          type="button"
          onClick={sharePage}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition"
        >
          <Share2 className="w-4 h-4" /> Share
        </button>
        <button
          type="button"
          onClick={printPage}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition"
        >
          <Printer className="w-4 h-4" /> Print
        </button>
      </div>

      {status && <div className="w-full text-sm text-green-600 dark:text-green-400">{status}</div>}
    </div>
  );
}

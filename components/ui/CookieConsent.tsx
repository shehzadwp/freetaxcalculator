'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'usatax_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCcpa, setShowCcpa] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isCalifornia =
      timezone.includes('Los_Angeles') ||
      timezone.includes('America/Los_Angeles') ||
      navigator.language.includes('en-US');
    setShowCcpa(isCalifornia);
  }, []);

  const saveConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
    >
      <div className="container-max mx-auto max-w-4xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Cookie &amp; Privacy Notice
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          We use cookies and similar technologies to analyze traffic with Google Analytics
          and improve your experience. By clicking &quot;Accept,&quot; you consent to the use
          of analytics cookies. See our{' '}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>

        {showCcpa && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed border-l-4 border-accent pl-4">
            <strong>California residents (CCPA):</strong> You have the right to opt out of
            the sale or sharing of personal information. Click &quot;Do Not Sell My Info&quot;
            to block analytics cookies, or email{' '}
            <a href="mailto:privacy@freetaxcalculator.us" className="text-accent hover:underline">
              privacy@freetaxcalculator.us
            </a>{' '}
            to exercise your rights.
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => saveConsent('accepted')}
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Accept All Cookies
          </button>
          <button
            onClick={() => saveConsent('declined')}
            className="px-5 py-2.5 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-sm"
          >
            {showCcpa ? 'Do Not Sell My Info' : 'Decline'}
          </button>
        </div>
      </div>
    </div>
  );
}

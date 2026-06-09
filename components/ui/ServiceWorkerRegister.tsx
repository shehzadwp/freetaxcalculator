'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          console.log('Service worker registered.');
        })
        .catch(() => {
          console.warn('Service worker registration failed.');
        });
    }
  }, []);

  return null;
}

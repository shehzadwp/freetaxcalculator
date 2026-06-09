const cacheName = 'freetaxcalculator-v1';

const assetsToCache = [
  '/',
  '/manifest.json',
  '/logo.svg',
  '/favicon.ico',
  '/tools',
  '/blog',
  '/privacy',
  '/terms',
  '/contact-us',
  '/about',
  '/widgets',
  '/state-taxes',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request)
          .then((fetchResponse) => {
            return caches.open(cacheName).then((cache) => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          })
          .catch(() => caches.match('/'))
      );
    })
  );
});

const CACHE = 'aroma-v3';
const BASE = '/aroma-recipe';
const ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/recipe.html',
  BASE + '/favorites.html',
  BASE + '/admin.html',
  BASE + '/css/style.css',
  BASE + '/js/recipes.js',
  BASE + '/js/db.js',
  BASE + '/js/main.js',
  BASE + '/js/recipe.js',
  BASE + '/js/favorites.js',
  BASE + '/js/admin.js',
  BASE + '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request)
        .then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() => cached);
      return cached || net;
    })
  );
});

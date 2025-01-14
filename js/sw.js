self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('miapp-store').then((cache) => cache.addAll([
        '/index.html',
        '/styles.css',
        '/js/sw.js',
        '/manifest.json?v=3'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
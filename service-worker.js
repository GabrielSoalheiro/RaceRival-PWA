// service-worker.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('lista-carros-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/cadastrar_carro.html',
        '/lista_carros.html',
        '/apagar_carros.html',
        '/style.css',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png',
        // Adicione aqui outros arquivos estáticos que devem ser cacheados
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

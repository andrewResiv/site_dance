self.addEventListener('install', (e) => {
      e.waitUntil(
        caches.open('cache-v1').then((cache) => {
          return cache.addAll([
            '/',
            '/IMG_2945.png',
            '/IMG_2944.png',
            '/IMG_2947.png',
            // Добавьте другие ресурсы
          ]);
        })
      );
    });

    self.addEventListener('fetch', (e) => {
      e.respondWith(
        caches.match(e.request).then((response) => {
          return response || fetch(e.request);
        })
      );
    });

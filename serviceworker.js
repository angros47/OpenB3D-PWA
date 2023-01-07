var cacheName = "Flightsim-pwa";
var filesToCache = [
  './',
  './index.html',
  './OpenB3D.wasm',
  './OpenB3D.js',
  './OpenB3DJS.js',
  './joy.js',
  './lmap_256.bmp',
  './hmap_1024.bmp',
  './FIGHTER.JPG',
  './fighter.3ds',
  './coolgrass2.bmp',
  './cloud_2.bmp',
  './water-2_mip.bmp'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

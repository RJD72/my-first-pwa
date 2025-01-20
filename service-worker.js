const CACHE_NAME = "to-do-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/my-first-pwa",
  "/my-first-pwa/index.html",
  "/my-first-pwa/style.css",
  "/my-first-pwa/app.js",
  "/my-first-pwa/manifest.json",
  "/my-first-pwa/icons/icon-128.png",
  "/my-first-pwa/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

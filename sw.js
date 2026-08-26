const CACHE_NAME = "control-poda-brecha-v27";
const APP_SHELL = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/brecha-data.js",
  "/manifest.webmanifest",
  "/icon.svg",
  "/assets/cfe-logo.png",
  "/vendor/leaflet.css",
  "/vendor/leaflet.js",
  "/vendor/xlsx.full.min.js",
  "/vendor/jszip.min.js",
  "/vendor/chart.umd.min.js",
  "/vendor/jspdf.umd.min.js",
  "/vendor/images/marker-icon.png",
  "/vendor/images/marker-icon-2x.png",
  "/vendor/images/marker-shadow.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;
  if (new URL(request.url).pathname.startsWith("/api/")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => (
        caches.match(request).then((cached) => cached || caches.match("/index.html"))
      ))
  );
});


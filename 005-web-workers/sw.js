console.log("Hello from service worker");

const urlsToCache = ["workers", "workers/"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("my-site-cache-v1").then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("V1 now ready to handle fetches!");
});

self.addEventListener("fetch", function (event) {
  console.log("fetch", event);
  event.respondWith(new Response(null, { status: 200, statusText: "OK" }));
});

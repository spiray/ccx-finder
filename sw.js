self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("ccx").then(cache => cache.addAll([ "/", "/index.html", "/style.css", "/helpers.js", "/main.js", "/manifest.json" ])));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});

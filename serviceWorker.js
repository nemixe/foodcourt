const CACHE_NAME = 'food-court-site-v1';

const assets = [
  "/",
  "/index.html",
  "/detail.html",
  "/css/tailwind.min.css",
  "/js/app.js",
  "/js/index.js",
  "/js/detail.js",
  "/js/component/card.js",
  "/js/component/header.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  var freshResource = fetch(fetchEvent.request).then(function (response) {
    var clonedResponse = response.clone();
    // Don't update the cache with error pages!
    if (response.ok) {
        // All good? Update the cache with the network response
        caches.open(CACHE_NAME).then(function (cache) {
            cache.put(fetchEvent.request, clonedResponse);
        });
    }
    return response;
  });

  var cachedResource = caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(fetchEvent.request).then(function(response) {
          return response || freshResource;
      });
  }).catch(function (e) {
      return freshResource;
  });
  fetchEvent.respondWith(cachedResource);
})

const versionApp = "berryonmars-v1";
const assets = [
    "/",
    "/index.html",
    "/step2.html",
    "/step3.html",
    "/step4.html",
    "/assets/css/main.css",
    "/assets/css/setup.css",
    "/assets/css/component/button/button.css",
    "/assets/css/pages/initial.css",
    "/assets/img/Logo.svg",
    "/assets/img/form-bg.svg",
    "/assets/img/bg.svg",
    "/assets/img/completed-bg.svg",

];

self.addEventListener('install' , (installEvent) => {
    installEvent.waitUntil(
        caches.open(versionApp).then(cache => {
           return cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }        
            var responseToCache = response.clone();

            caches.open(versionApp)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('activate', function(event) {

  var cacheAllowlist = versionApp;

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
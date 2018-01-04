// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAME = 'ignitech-pwa-v5';

// Delete old caches that are not our current one!
// self.addEventListener('activate', event => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys()
//       .then(keyList =>
//         Promise.all(keyList.map(key => {
//           if (!cacheWhitelist.includes(key)) {
//             console.log('Deleting cache: ' + key)
//             return caches.delete(key);
//           }
//         }))
//       )
//   );
// });

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          // Get the assets manifest so we can see what our js file is named
          // This is because webpack hashes it
          const urlsToCache = [
            '/',
            '/home',
            '/index.html',
            '/app.bundle.js',
            '/css/style.css',
            '/font/MuseoSans-100.otf',
            '/font/MuseoSans-300.otf',
            '/font/MuseoSans-500.otf',
            '/font/MuseoSans-700.otf',
            '/font/MuseoSans-900.otf',
            '/img/background-diagonal.png',
            '/img/ignitech1-logo_glass_shadow.png',
            '/img/ignitech1-logo.png',
            '/img/ignitech1.png'
          ]

          cache.addAll(urlsToCache)
          console.log('cached');
        })
    );
  }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function (event) {
  if (doCache) {
    console.log('Opening URL: ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function (response) {
        console.log('it\'s match')
        return response || fetch(event.request);
      })
      .catch(err => {
        console.log('Error happened: ', err)
        return caches.match('/img/ignitech1.png')
      })
    );
  }
});
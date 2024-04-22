'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fed60ecc5f51d3efabb2d56f93ebfb37",
"index.html": "2122a5d9fb4008af9d9d6a02f3cdccf8",
"/": "2122a5d9fb4008af9d9d6a02f3cdccf8",
"main.dart.js": "d694e75e70de1444d0cc1c70d251d253",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9807d1da453a2fa39cde7dda5a494844",
".git/config": "0fd278f947f9fc925959eb7f1ac5e7e8",
".git/objects/95/073c4f3963e943e7c9ccc05c27e3c42d91af5e": "486a1c7cf758119b8d029f3d98bfd1d9",
".git/objects/6f/e358e4eff5c4d1ff49493140dc054846609c77": "35d0ca9c71cd22cc2fdfb8037e03ba7c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9b/797b95b1a46ccbec7ff77f25282b0f72b7e25f": "7d28ce03af785dc5aac72b8186a295aa",
".git/objects/9e/29f3d25252edb5649a340470d9eee9ac057078": "239cc72e19af57f6ed08db0c277052c6",
".git/objects/51/9cb0a25a6589aba5a36326702fa00a2a8d4d94": "6dcc972d905c4e49372c81d97f2b9cd0",
".git/objects/3d/b117ce923f3005e6796e6e273070dda3cc3847": "2f295ee00c25101a3027dda980e27813",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a4/a4ad16a7788ebbfc44da33dab0ea7b93e3d197": "5f77d53ad2065c5aca4737df8172db17",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bb/884d37ccd48dacc55a4ad475cd05b59d52d8c7": "3fdc74e1d4f3a44ee3561164edf05ae5",
".git/objects/df/bc0742c00f68dea9f10f4fdb3c6d26d5b0cc61": "e7b1797d52da6603d6893f78014edade",
".git/objects/a5/9003cb32d5ff5dbc96ec5ac9dee35bc3801367": "4b3720b57f902966e1a35137ec26a0c1",
".git/objects/bd/9ada6fd1b0d7b828588792a355c7c30e7e95c5": "b3bc75d278fadfb1e2c9527f3fdc7f4b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/ab/52b8953f848e73bb97b6a99cf4a5b6c0aa4f65": "f4febaa832addf6dcf0adb85ae84f1dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/f1167d5aad3e461db207d2d33dd6caf70e6da8": "8e6eb46af17af42653e28ec37469a92f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/84d545399e09d6ff29a412ed2e4caad2a9becd": "9c77c1abe22100a1bb3d94eb21c6d444",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/08b3341cd1fffa4279b96e117dd38be3128055": "954f28fddfe35a2990c510890fe5d23b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/f8600b886a02555324030a2764c4919682da8d": "e1ba703b71accef9fe82993e1281f1b1",
".git/objects/72/9e00efbf3011d814420848221e396dd00d3b34": "d9dbe7c9fb13137cb2a4f5a369c87f4e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/239eca85c7589d437adc4b097c4cf35db7235e": "b7723019a30f310ad3d387247b6c84f3",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/91/be7a5688fb1df414af6529d5a80f8b8a9e5ec2": "360abf92dde680d8151790f70065b5c3",
".git/objects/53/5fc6ed45876ec80463c997820bfee5b03e8271": "89267f28daf7f7d524fefc4c15e6d512",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dc/a803da6d39ede32aa35a263cfca005b0c98cc8": "f0fee3f3f71eb058963542c6a0c95598",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/92b6b096b62618e730b9cf5549d6a355d3e2c4": "80901ab3842ecbee92abbf4a4951920f",
".git/objects/a6/421c37cc86fb7d8f643d9851fcbfe4e2d48cb8": "3c91aaace58a65851e6536c69b7aac36",
".git/objects/a6/8a129b33a3c761c2f04616889810f3691cb222": "5284dddaa449c5defe48af16f1eff88e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/2db9e1b027434caefc8901b35e7a3237b6c62f": "699a24773d1ed93937fc28292a26186f",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/87cfb79b23a5ee98fd760f5a5263ffd281d524": "50c20405732e2b7ba7b720decb3f0ec5",
".git/objects/46/b0acb676adc02d548a9d05acaa839ddb13c09e": "279381cc056fca11bd415c402217e58c",
".git/objects/1e/bc9434475ea2a78a0249d5c57f02595293c083": "5dacd46f659097124ddb50be43aca297",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/458d18bbb8ad3cbf00fabe0568cbfb1631f4b2": "bc7bb5e126f22769380efea307a47dba",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/40/774562c3659f10e040c15da03276a2094280f0": "eb68f5146f598585e8fd20b212ab7769",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5aa96a8c5221d991fa9f56a9914683e3",
".git/logs/refs/heads/main": "138fd97fafea78da5b503a43260cc8ae",
".git/logs/refs/remotes/origin/main": "220f0562ac6f0e248583a3958a82626c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "74804680bb224f678300922851f8f81f",
".git/refs/remotes/origin/main": "74804680bb224f678300922851f8f81f",
".git/index": "87f6c82f4e15633f7a5bdb1df6cb59ce",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "8e52d04e34f5b16a468b18a8ec370476",
"assets/NOTICES": "79c96cfe869f4f8e8bccd000a2512ecd",
"assets/FontManifest.json": "818f5c35099d012b9bb2e1d358b8296d",
"assets/AssetManifest.bin.json": "bc97119ed04dee97c62b226886ed3eed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fee254e62ac0dc6a549ebeb5eb772f43",
"assets/fonts/MaterialIcons-Regular.otf": "aa7357f6bf0979277ebe2d2fb0cf4895",
"assets/assets/login.png": "f2c17fe09f5d4f6f050cdfe714890293",
"assets/assets/background1.jpg": "c077821ad2feebbb43fc82719448a92a",
"assets/assets/order.png": "aabeb9167dd538ab2fbb7ca3418e001e",
"assets/assets/instagram.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/background.jpg": "00d50ddba5802cfe7cb7a41b2b29f616",
"assets/assets/search.png": "22c977814849bfabf6aa1e600193cf82",
"assets/assets/logo.png": "657e1056c23b04c6f9f1c1c32cf1fbce",
"assets/assets/logo2.png": "6485d467e4bbffa0d6aede3caf0f0373",
"assets/assets/line.png": "b222dbc287cbf2b0100bddb6e5991a08",
"assets/assets/more.png": "c89416cbc8a1ee9fb748f7bacc8e1720",
"assets/assets/fonts/SourceHanSansRegular.ttf": "240ac510b0453fbce34b5cdcc0262fa2",
"assets/assets/facebook.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/message.png": "4580bf028e148a2f375e584e52c1dd76",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

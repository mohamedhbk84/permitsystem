'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9e8609114918e7f1bbeedd45ce3eb4bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d9f6962f704f15f6f4a06c7dd21dda92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/70e72864b2d989ee830fbd33b692990f9d957a": "b7a38423c1e4894f5aff8f518f0ca610",
".git/objects/07/1ece7be106ffb670509fb356a1d02415ea87ae": "d36f4f71cde40bdd02a427414c1da2e4",
".git/objects/10/852e957846fe63ce2087f4f00613687fd8d496": "3d44e84e130fe808e696b600ef2b2e44",
".git/objects/12/270f1749b9b7933669eeb9c51209d864015b00": "0283c87f91d98e2958cb0b3b14a885a2",
".git/objects/19/a43d2b0994857d70ca7cdd8cf267d0e4535fe2": "7e98a591950053affcc99a1695f01024",
".git/objects/1d/0557fb2a8583c0134e8b6ccb6cb7eb8e0ffa0f": "ea7d321ddcc64e96346dac873e7db435",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/8f4264c8250c6ef90e2948f054123f913c6ce0": "180321f2ee073d0c26c1a62931232ee6",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/46/b25c794a0d1630d741a095c04f66827c7e2b28": "77c615e602ab5f87f02b04631bb4d9e2",
".git/objects/47/3463c61d95a5e631adf5faf74917036380b806": "755335f05532e28a266befa0d4623bc3",
".git/objects/47/383997c60f7dcd7b6125f391bbf10bba705be0": "5af8649fd4ec393eec8b5704fd766f24",
".git/objects/48/93922232352aab27d81d32c652b41a44cf4d02": "b78203d444b920d6102df39fd85aecdd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4c/e425ffcadf8c1f87ced9085a2178809e4ec47f": "0cb92cda1fd4ad1da6581fa22ab698c9",
".git/objects/4f/16b4c2bf6224f62f7eef85f3a3a4db8a3af50c": "7c7c3582d6eea5d9ebff3b04e31c8788",
".git/objects/50/90fdf49765eef3073f515da70c6ba17f4c3e3b": "3258a4764431f4fe0853760fc7baf671",
".git/objects/50/a0e40582a194f78e78a42523b1e85cd217a9b6": "a9391c5a4ffea753fe7e10fe9c74ce4d",
".git/objects/55/c0e64ea7e648ebac1ba8b5cd09465200a82464": "149ca7cbb312789d14882beb6b492d2a",
".git/objects/58/09aae9056876f1eaa4db7a352a3a7cebb8bf01": "fb23135cecf4d2042ed660398ab76c9b",
".git/objects/58/834c986ef7505611da2005a2c7612b004edd1e": "f03eaf218c4c26cc3ce64092d5f09046",
".git/objects/60/c3db06a3b759caf584a8a20c000dc62705b380": "603ea0db316d7b7ecc61aa11bf7ad4a4",
".git/objects/69/b7a9233a419e5772cb9631125035033577ceed": "18b05437093877b3f55c97b23461db0d",
".git/objects/6a/940e910146c65078e13a8df082f8050fe9d311": "bb72cc60b4adbb72709384e615a9d814",
".git/objects/6e/80f2cb7c7cd626a8e96639a0bc60c317f7540c": "b0ffd05c2b2353cc0726dbc477417260",
".git/objects/6f/86f5c245b9571507817b3563e328093f84cfc8": "2a467717719700a60856348061c5b992",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/fe51fdf267e2a8b2ee84a1365587d3cc182d96": "77a3dad2da52668b63192de0db193395",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/531ed7542496132543b6113299c961f9c1af29": "01bfa31e4f5f2d30fb537527e2001778",
".git/objects/91/3087ae82b70f9608b4a534fbaa41d293099c5d": "fef7fc4a1471a2fff256864f101978f2",
".git/objects/91/70db60bd35521de655464999efe47a8e74d8d4": "e58c7e25efd623c37574510f61c42f95",
".git/objects/96/56681e9991e08e72c858bc738c9a587871a6f5": "60ab196cd64ee850a52de11b1a3fd3ed",
".git/objects/97/6d7228ce2731b363d37f1773ad3fffac4f9339": "a582b34d21611f296e178dccd77efff4",
".git/objects/a4/7b18adfdbc49cf82cdf94e40dc751bea41469b": "6ccf1db837e4fd12b217cc0fc67a9181",
".git/objects/a4/9bc134df36117a421c0424d9d6829f528976ba": "0fea291c6987c20d3364d6393a3d993e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/70a225ec68d4e284f4c35ea354094cd17a8017": "e3b6d1abcb2966a1a16e41404499c13c",
".git/objects/a8/7f52089c0b45e6d1fa683eb8a659f3d53c9a9e": "002dcd31886b8328c3c184d64f445252",
".git/objects/aa/b9bd09b7e140c425a22510239463d907fa583e": "99ebd0b8f328314cb1b4d7f59fd22cb9",
".git/objects/ac/6cff17650eda2b31bab170c4976d1b89208a82": "b8a03a57219aa4d544195cfffe28f00e",
".git/objects/ae/a0c2230811f01fa024459a5d0cd9c931ae3acc": "c4ddce14211b3f5d9191e10a0ce85302",
".git/objects/b4/0f2ec0f76dfadc20ec0665dac15a3fb328b66b": "70bb1afeb877e6f28d03c1eb4ef86dbf",
".git/objects/b4/b12dbbaf187cb4dfc7535eb37eda69d7bc677e": "f933925795a802220f3077c32038ab8e",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/23697a69386ecfece9fbe0f37dc5b58c319bdd": "a17b6fa3608ffa148fcb4295d282fef8",
".git/objects/cc/df4993d18680d09bc981e6c5c5a3d1b193e987": "9ed58c83761c0165862d266a7e5186b4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/6642a207f25acfbf40be36e391be238acee672": "1c317f00982d8e4624339bd8d3ea6a9b",
".git/objects/e1/f317b0b9aee79fa56905f72ad035c19179bf3b": "4e4e767a0b0820ba14685819c1c372ff",
".git/objects/e6/9f55e1980e42040f34b4f6ebf4a165ad82d240": "7aa49f6397d7149c8ae2852aeebe2a5f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f7/e603b1079801ac419aa9aa6743669cfc237c2c": "6af373416d0df863d4d9da483ed3a6ae",
".git/objects/fa/b19ae9054622f591019231771c638982bdc9b4": "800eb595de57a44c5937333ab3350a0f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/1044ea287926197b87bc4ec2f2ceb6785ad8ed": "b360c9297f5bae5bff5ee699e35b4902",
"assets/AssetManifest.bin": "767ac6becf0727c19c473bfa8c6d6524",
"assets/AssetManifest.json": "a655d08608f6aa89453f0a708c46f4c2",
"assets/assets/fonts/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/Almarai-ExtraBold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/assets/fonts/Almarai-Light.ttf": "5b0dec05feae02fef51afd517af94d4c",
"assets/assets/fonts/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/images/alandaluscover.png": "23361b2f01d59fbee4ef266298d54a07",
"assets/assets/images/alandaluscover_1.png": "223c800ab4e63fc033468dd0dfec57fe",
"assets/assets/images/alandalusmalllogo.png": "e32d5373bfabcabc3cc71dd1debde9d9",
"assets/assets/images/ellipse1.png": "a8ba7a91b196dc00977237815f1b906c",
"assets/assets/images/min.png": "2e26c13f92eb2ff810d9f6a660724359",
"assets/assets/images/plus.png": "933724d664d6297ca32dbc0266496b2c",
"assets/assets/language/ar.json": "d5128b62c38a5a53033a055e8629cc68",
"assets/assets/language/en.json": "f5970e3e857588ae2e00f47ae4a94f60",
"assets/assets/svg/andallos.svg": "46c4020933a7b66cc4cd588bb4c80cf3",
"assets/assets/svg/exclude.svg": "ba0d2c165b530be5eb31734922c4e997",
"assets/assets/svg/iconoir_scan-qr-code-1.svg": "e47d7d744f129c285bf781e64313558c",
"assets/assets/svg/iconoir_scan-qr-code.svg": "b202cc9a2e8d299100c96708a3b232e9",
"assets/assets/svg/material-symbols_order-approve-outline-rounded.svg": "24c8e4de96c769cd6a0b7bfadf349096",
"assets/assets/svg/propertyvariant2.svg": "b2e0c3d520adbb5aec33d7f89d3550be",
"assets/assets/svg/reject_vector.svg": "b289634c6a16b861168b4ee14ddf2522",
"assets/assets/svg/Scan%2520box.svg": "da59d71dcd12e0d36264e3466a1743ad",
"assets/assets/svg/solar_gallery-wide-outline.svg": "b3712fb08f927a1b4bd392a75a725f30",
"assets/assets/svg/tabler_progress-check.svg": "015a96f0372e86966df2b02c531a4a62",
"assets/assets/svg/tabler_progress.svg": "d9f8bd61424852641fe9bbe3e19a0bb4",
"assets/assets/svg/Vector%25201.svg": "f5811f9561a0b71b763a26476fd9b330",
"assets/assets/svg/Vector%25202.svg": "508edfd763e3b95e25a2f514a9dd599c",
"assets/assets/toggle_button/frame104.svg": "29215876585ee8b06a65979b6b29c83c",
"assets/assets/toggle_button/frame105.svg": "5a6e4cf3b0f39b65fed20e98fae0a7f0",
"assets/assets/toggle_button/frame_103.svg": "32c9499baadd1e90a03ae17bfb02fcd0",
"assets/assets/toggle_button/heroicons-outline_view-grid.svg": "2a1895a7a953766c9b129494b95679b7",
"assets/assets/toggle_button/iconamoon_frame.svg": "45c989f63dd63e7fcc2742b7658c5add",
"assets/assets/toggle_button/solar_graph-up-linear.svg": "649c714f66a9f50844dbd7cf6ca55788",
"assets/assets/toggle_button/tabBar-Permits%2520list-add.svg": "f1ce87eb27b3dc8732fa2b18e969f053",
"assets/assets/toggle_button/tabBar-Permits%2520list-excel.svg": "46faa03d3b2ed4d7b92ab50c2d343798",
"assets/assets/toggle_button/tabBar-Permits%2520list-pdf.svg": "3e33cff6d3349df6392a35b3bc1f0d0b",
"assets/assets/toggle_button/tabBar-Permits%2520list-refresh.svg": "f97545da1d4e98d109846168b269c369",
"assets/assets/toggle_button/tabBar-Permits%2520list-settings.svg": "50dffbf7e16b32ac9d0ab367417ba02c",
"assets/FontManifest.json": "a83ffeb97a5e8e3865e4f0b4a421cccf",
"assets/fonts/MaterialIcons-Regular.otf": "ec20f31409cc8dc19cd846027fda6a5e",
"assets/NOTICES": "4fe6e9940a0b820ab747177996641920",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3a90324543083ea3eed24d3e4817fe80",
"/": "3a90324543083ea3eed24d3e4817fe80",
"main.dart.js": "40c6e8356c5f60c7947e73e4b6d01a45",
"manifest.json": "4608644e2566b2c2d0344f8c8a7f285e",
"version.json": "009b6b4ee386d054619b68df3c5f0d1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

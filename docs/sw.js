// Workbox injectManifest
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.1/workbox-sw.js')
workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.5d46af2f.css",
    "revision": "056dc2ac5532dbb8d0f7f8c65b80f8a5"
  },
  {
    "url": "icon/ic_restaurant_48px.png",
    "revision": "55d3fb04213d25c60eaea0eb652e9c9e"
  },
  {
    "url": "icon/ic_restaurant_48px@1.5x.png",
    "revision": "e579bd0d43e4a361a6d669de2c0a7b03"
  },
  {
    "url": "icon/ic_restaurant_48px@3x.png",
    "revision": "b802dec1a5a0e1b5c39a85ec372ebc5d"
  },
  {
    "url": "icon/ic_restaurant_48px@4x.png",
    "revision": "a73343f915a9fd5842fe401f0672a94f"
  },
  {
    "url": "icon/ic_restaurant_512px.png",
    "revision": "a5d27a70d5b16d967c75bdf1eb1e39a9"
  },
  {
    "url": "icon/ios/ic_restaurant_48px@1.5x.png",
    "revision": "45c139eb0da080d331389eb204905312"
  },
  {
    "url": "icon/ios/ic_restaurant_48px@3x.png",
    "revision": "adc68112ad51b96d13f9ab704aa0c732"
  },
  {
    "url": "img/add-black.60ef3f6b.svg",
    "revision": "60ef3f6b0b01a76996668c4b4acb1bb7"
  },
  {
    "url": "img/add-btn.8c9f27d0.svg",
    "revision": "8c9f27d0e3bf7634990cf4281964ab8a"
  },
  {
    "url": "img/add-check.8829dc35.svg",
    "revision": "8829dc35eef3c2531b5fc5a00cdf9d69"
  },
  {
    "url": "img/add-close.39aae6a0.svg",
    "revision": "39aae6a0f43550b19f0402379af82a47"
  },
  {
    "url": "img/cancel.9f6e4b13.svg",
    "revision": "9f6e4b13e51a18473307fbe67c894a6a"
  },
  {
    "url": "img/change-order.7196b2c1.svg",
    "revision": "7196b2c12af4c7ccac508012a9d0f514"
  },
  {
    "url": "img/checked.d6fe7e26.svg",
    "revision": "d6fe7e26f9ac9f2b9984aff1fa1be770"
  },
  {
    "url": "img/confirm.85985594.svg",
    "revision": "8598559496a33d43760da7334966c334"
  },
  {
    "url": "img/edit.aa956612.svg",
    "revision": "aa9566124b248ca9f36d547283abed7f"
  },
  {
    "url": "img/left-arrow.b65e23ed.svg",
    "revision": "b65e23ed1a47da48fedb17b44fbcb5ff"
  },
  {
    "url": "img/send.7b43232c.svg",
    "revision": "7b43232c96bf2acc5bc940e9c05217a9"
  },
  {
    "url": "img/settings.231eca81.svg",
    "revision": "231eca8120151559431050eb19e4323e"
  },
  {
    "url": "img/trash.f6604ad7.svg",
    "revision": "f6604ad769b1bb7e156a3f98bd23944b"
  },
  {
    "url": "img/unchecked.0b18d7fc.svg",
    "revision": "0b18d7fc3438a519a51cc9f870e9e819"
  },
  {
    "url": "index.html",
    "revision": "d2d919f0198e4f7d48064011a5da1998"
  },
  {
    "url": "js/app.b7de5799.js",
    "revision": "625acfbb561f4b602786e57425cfec6e"
  },
  {
    "url": "js/chunk-vendors.aa3ecb21.js",
    "revision": "7f9223efc11293d0cb5d03376644e361"
  },
  {
    "url": "manifest.json",
    "revision": "ca6a322c5bccf926ab30816abc8946b6"
  },
  {
    "url": "serviceworker.js",
    "revision": "eec98f5d3efc66d21420fd15beda2a6f"
  }
])
// Workbox injectManifest End

self.addEventListener('install', event => {
  console.log('install')
  self.skipWaiting()
})

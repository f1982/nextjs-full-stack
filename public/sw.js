if(!self.define){let e,a={};const c=(c,s)=>(c=new URL(c+".js",s).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let i={};const t=e=>c(e,n),r={module:{uri:n},exports:i,require:t};a[n]=Promise.all(s.map((e=>r[e]||t(e)))).then((e=>(d(...e),i)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/05421101cdfb4e7bb2a61adead3e1139.txt",revision:"0105f764f1e564d230b33cafab1380ce"},{url:"/8c05cc82b6bf4c1ea8ae6406974adcfa.txt",revision:"ef231981f25d76c4a93da4f9d71c78f3"},{url:"/_next/static/TDXkqjdDQKcwSxO18dxdh/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/TDXkqjdDQKcwSxO18dxdh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1126-5b0cccbd1184a683.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/1272-2eb2d62e1a3b24df.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/1749-3bcb107f32c689e3.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/1790-181c6d1254623992.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/2097-b2b56ca158019171.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/2387-3b1c51b9240c2046.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/2465-f8bf02888fbfc9c4.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/3819-c0e2a0d1b32b86c7.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/3950-29bea0be80ba0803.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/4637-3e42cfe2f61a8c93.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/502-b92168a7510c4aca.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/5250-bc8cb80471145990.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/5468-c6bc4646107ae2fd.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/7320-fa63873332f96b37.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/7372-1b937622230466ce.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/7735-7ee5050c888d4e0b.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/7924-08b8d237cb376f46.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/8094-95b0f7d270598f96.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/8812adcb-d98b97f9a7797cac.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/9119-b478fb24b7babbdc.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/9856-3bb4fc8cfae134d1.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/about/page-69c06c72e9a7c948.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/beats/page-834faddce7b9a023.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/beats/pizzicato/page-2790f68c370a875c.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/beats/web-audio/page-912d9641d5547565.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/%5Bid%5D/page-bd005de496503f33.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/create/page-62094a5271dcb0ab.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/drafts/page-8df577bbc3d79f59.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/layout-f48f317d51277fbd.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/loading-a07afae7a3782560.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/page-07f6987a418ca83a.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/blog/post/%5Bid%5D/page-d88efe6551cda2c6.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/bubble/page-f20ad771cacefeeb.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/doc/page-96edaa1289455206.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/layout-541509563d340388.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/(default)/page-92a4e5988bbcb4bf.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel-list/page-0c53c5d49597a8fc.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel-new/page-d6939bf73678a6f2.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/layout-6e3fbb1629070a54.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/loading-17f8e92e61f7f319.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/page-d69656638bb222cb.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/prompt/page-015d4ca30066509c.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/settings/page-0634f2e4376d2634.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/video-list/page-a538515be3ac65e6.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/channel/%5BchannelId%5D/video-new/page-946f215054602c3f.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/layout-6dccb727665a59a5.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/loading-56eb237f040aad45.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/page-c175df6bbcbecdf2.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/test/page-ae7f92ad26c3ca0b.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/error-a9c7eea87c3ead19.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/layout-183794c23d697dfa.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/loading-3ca20746172afe33.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/metadata/page-2a9653d5daf7f164.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/page-ea60f061150e75ae.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/script/page-4ca7655e34a86bef.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/video/%5Bid%5D/topic/page-206eb41cc8f3caac.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-2a89bd5aba14065e.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/app/_not-found-c2d66b4e979b07f5.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/fd9d1056-5f34ee894a4b0e85.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/main-02b45d4262643a3c.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/main-app-f63e7672a48d73d3.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-46c18f3b24fc2ca0.js",revision:"TDXkqjdDQKcwSxO18dxdh"},{url:"/_next/static/css/28471d58e44085fc.css",revision:"28471d58e44085fc"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/18-Architect.b27daea6.svg",revision:"2c10605a6ea8a6ab1fe6989005b06da0"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/ads.txt",revision:"40321fd70643c87cbba09a6ff10729a7"},{url:"/android-chrome-192x192.png",revision:"e6294bce1425eb8ee9aacdeeb1b7bbe5"},{url:"/apple-icon.png",revision:"cd964013fefc1533c76e5cfd8dd21ac4"},{url:"/emoji-quiz-backup.png",revision:"f792e30659e0b9ecf45ea429743bc755"},{url:"/emoji-quiz.png",revision:"0e870d4c034d8b6fd177e2010438b385"},{url:"/emoji-quiz.svg",revision:"c14e78452cf72f51f40faca994213a98"},{url:"/favicon.ico",revision:"b537d47382bf15b4770f7593d902df33"},{url:"/favicon.png",revision:"c58df93f4a5fe39fcb33437f148506bb"},{url:"/icon.png",revision:"c58df93f4a5fe39fcb33437f148506bb"},{url:"/logo.png",revision:"affa071af32f178ae6eeff46f0f66ec2"},{url:"/og-image.png",revision:"a67efe30a4925f1c78e2a1b003b675d3"},{url:"/robots.txt",revision:"ffc5436fb034bfab382fa960dbb77692"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
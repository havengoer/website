"use strict";var precacheConfig=[["/index.html","542d6d32a49b9102ee8443b41e9f742c"],["/static/css/main.56893768.css","b290965a4163c5e66c1ec670f3ac42df"],["/static/js/main.79973b1e.js","8ef30f08b60b9f7fbe993519305b7e30"],["/static/media/bundle-bee-step1.71889b5f.png","71889b5ff3f841226d36f7b83f559469"],["/static/media/bundle-bee-step2.dcc33501.png","dcc3350179400fb8054eaeddc52cc976"],["/static/media/bundle-bee-step3.0b0c2932.png","0b0c2932e22af5c519f9dad80e152331"],["/static/media/bundle-bee-step4.f46d1f97.png","f46d1f97ddac827cec19f479dea8b472"],["/static/media/bundle-bee-step5.b24f01d6.png","b24f01d6d3cdc74e312a28d18e85b228"],["/static/media/git.1c25e027.svg","1c25e0279118b88f9c46d7e6c9bda9ba"],["/static/media/logo.5f48e817.svg","5f48e817a5afd4f9de0b2ba4c679ca59"],["/static/media/npm.3f0fd7e7.svg","3f0fd7e7fd7ef3ee19190944727f9b27"],["/static/media/parcel-example-config.0aea0093.png","0aea00938b796cb092fc70dd42ed653a"],["/static/media/parcel.e7dfb9ee.svg","e7dfb9ee60e5f4d0b7cfc1a9553bda22"],["/static/media/rollup-example-config.9c35ac31.png","9c35ac311967101245a6a5f33c09e8de"],["/static/media/rollup.44591abb.svg","44591abb0a0b2a34ee5d3fb2940a9083"],["/static/media/webpack-example-config.6a7bc38d.png","6a7bc38da77ffde0cc32cf0f7a03c558"],["/static/media/webpack.3e5f15ad.svg","3e5f15ad8d2651d4692cd22f698f68f1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
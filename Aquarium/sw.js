/* Aquarium V1R4 : ne jamais intercepter ni sur-cacher les tuiles externes.
   Les caches v1r2 contenant des tuiles CARTO filigranées sont purgés. */
const SHELL='aquarium-v1r4-shell';
const CORE=['./','./index.html','./aquarium.css?v=V1R4','./sia-manifest.json','./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest'];
for(let i=1;i<=14;i++)CORE.push('./sia-'+String(i).padStart(2,'0')+'.json');
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(SHELL);
  await Promise.allSettled(CORE.map(resource=>cache.add(resource)));
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('aquarium-')&&k!==SHELL).map(k=>caches.delete(k)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 // Les serveurs OSM, IGN et Esri gèrent directement leur propre cache HTTP.
 // Laisser le navigateur les requêter (aucun préchargement ni cache offline artificiel).
 if(url.origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(SHELL);
  try{
   const response=await fetch(request);
   if(response.ok)cache.put(request,response.clone()).catch(()=>{});
   return response;
  }catch(err){
   const cached=await cache.match(request,{ignoreSearch:true});
   if(cached)return cached;
   throw err;
  }
 })());
});

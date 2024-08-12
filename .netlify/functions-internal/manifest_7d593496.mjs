import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_b14c6678.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"polityka-prywatnosci/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/polityka-prywatnosci","type":"page","pattern":"^\\/polityka-prywatnosci\\/?$","segments":[[{"content":"polityka-prywatnosci","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/polityka-prywatnosci.astro","pathname":"/polityka-prywatnosci","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","type":"endpoint","pattern":"^\\/robots\\.txt$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"prices/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/prices","type":"page","pattern":"^\\/prices\\/?$","segments":[[{"content":"prices","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/prices.astro","pathname":"/prices","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"shop/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shop","type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop.astro","pathname":"/shop","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"team/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/team","type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://alohabeautylogic.pl","base":"/","compressHTML":true,"componentMetadata":[["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/polityka-prywatnosci.astro",{"propagation":"none","containsHead":true}],["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/prices.astro",{"propagation":"none","containsHead":true}],["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/shop.astro",{"propagation":"none","containsHead":true}],["C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/pages/team.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-manifest":"manifest_7d593496.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_369323e4.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_26de784a.mjs","\u0000@astro-page:src/pages/polityka-prywatnosci@_@astro":"chunks/polityka-prywatnosci_27c681bf.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"chunks/robots_1b14daec.mjs","\u0000@astro-page:src/pages/prices@_@astro":"chunks/prices_d9d52927.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__a05261c4.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_8925f8cd.mjs","\u0000@astro-page:src/pages/shop@_@astro":"chunks/shop_3ba74438.mjs","\u0000@astro-page:src/pages/team@_@astro":"chunks/team_fbffbcd2.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-01.md?astroContentCollectionEntry=true":"chunks/post-01_02dcb3e1.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-02.md?astroContentCollectionEntry=true":"chunks/post-02_86f8146d.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-03.md?astroContentCollectionEntry=true":"chunks/post-03_52ffef90.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-04.md?astroContentCollectionEntry=true":"chunks/post-04_bf63ae82.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-05.md?astroContentCollectionEntry=true":"chunks/post-05_49330b94.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-01.md?astroPropagatedAssets":"chunks/post-01_277f459f.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-02.md?astroPropagatedAssets":"chunks/post-02_410bae24.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-03.md?astroPropagatedAssets":"chunks/post-03_9be45254.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-04.md?astroPropagatedAssets":"chunks/post-04_08d75889.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-05.md?astroPropagatedAssets":"chunks/post-05_53c9a49c.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-01.md":"chunks/post-01_1951553b.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-02.md":"chunks/post-02_e4792b32.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-03.md":"chunks/post-03_a5fb7b5d.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-04.md":"chunks/post-04_e87788c8.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-05.md":"chunks/post-05_567e7a3d.mjs","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/components/TeamSection/TeamCard":"_astro/TeamCard.3db02e0c.js","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/components/GallerySection/Gallery":"_astro/Gallery.2e44eeb5.js","@astrojs/react/client.js":"_astro/client.4ae814ea.js","C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/components/Navigation/Header":"_astro/Header.6b9f2508.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/team2.88868f0a.webp","/_astro/flower.c8b0ce9b.png","/_astro/flower2.36d36cbd.png","/_astro/flower4.94d3c324.png","/_astro/worker4.9ec56b60.webp","/_astro/worker1.5d3faba4.webp","/_astro/worker2.f5cb99a4.webp","/_astro/worker5.97233aac.webp","/_astro/welcome2.db3f7be5.png","/_astro/base-logo-wh.7e6b7867.webp","/_astro/star.bfeb84fe.png","/_astro/kosmetyka_biala.c7a319f2.png","/_astro/depilation.249f14bd.png","/_astro/makijaz_perm.6eb51292.png","/_astro/kosmetyka_este.ea70cdc6.png","/_astro/radio.e31165d3.png","/_astro/makeup-course.64ba82c3.png","/_astro/podology.135a8efd.png","/_astro/forman.e4f806a5.webp","/_astro/entrance-beauty.93fd67b0.webp","/_astro/logo-img.4bbc62f6.webp","/_astro/blog-img5.0f7c3c20.webp","/_astro/men-offer.a5849ee1.webp","/_astro/blog-image2.0c61acca.png","/_astro/blog.c64846ec.css","/_astro/index.1dd56a41.css","/_astro/prices.e4602360.css","/_astro/team.81311f65.css","/base-logo-wh-dt.webp","/base-logo-wh-dt3.webp","/base-logo.png","/bg-prices.webp","/bg-prices2.webp","/bg-prices3.webp","/bg-team4.webp","/blog-bg.webp","/blog-bg2-mb.webp","/blog-bg2.webp","/blog-bg3.webp","/cennik.pdf","/favicon.svg","/gallery-img.webp","/gallery-img10.webp","/gallery-img11.webp","/gallery-img12.webp","/gallery-img13.webp","/gallery-img14.webp","/gallery-img15.webp","/gallery-img16.webp","/gallery-img17.webp","/gallery-img2.webp","/gallery-img3.webp","/gallery-img4.webp","/gallery-img5.webp","/gallery-img6.webp","/gallery-img7.webp","/gallery-img8.webp","/gallery-img9.webp","/logo-icon.webp","/model3.webp","/monstera-leaf.webp","/monstera-leaf2.webp","/monstera-leaf3.webp","/palm_leaf.webp","/palm_leaf2.webp","/palm_leaf3.webp","/palm_leaf4.webp","/person-small1.webp","/person-small2.webp","/person-small3.webp","/person-small4.webp","/person-small5.webp","/person-small6.webp","/tropic-mobile.webp","/tropic.webp","/fonts/dancing-script-v25-latin_latin-ext-500-webfont.woff","/fonts/dancing-script-v25-latin_latin-ext-500-webfont.woff2","/fonts/dancing-script-v25-latin_latin-ext-regular-webfont.woff","/fonts/dancing-script-v25-latin_latin-ext-regular-webfont.woff2","/fonts/Fontaine Regular.otf","/fonts/fontaine_regular-webfont.woff","/fonts/fontaine_regular-webfont.woff2","/fonts/NotoSans-Regular.woff","/fonts/NotoSans-Regular.woff2","/_astro/client.4ae814ea.js","/_astro/Gallery.2e44eeb5.js","/_astro/Gallery.ab15a661.css","/_astro/Header.6b9f2508.js","/_astro/index.03be2d59.js","/_astro/jsx-runtime.b9e88e07.js","/_astro/TeamCard.3db02e0c.js","/index.html","/polityka-prywatnosci/index.html","/robots.txt","/prices/index.html","/blog/index.html","/shop/index.html","/team/index.html"]});

export { manifest };

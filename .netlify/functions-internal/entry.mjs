import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_f2282225.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_b14c6678.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_369323e4.mjs');
const _page1  = () => import('./chunks/index_223a9a74.mjs');
const _page2  = () => import('./chunks/robots_216e4bdd.mjs');
const _page3  = () => import('./chunks/prices_4fbeaf63.mjs');
const _page4  = () => import('./chunks/_slug__8ce1f095.mjs');
const _page5  = () => import('./chunks/blog_dd32bd94.mjs');
const _page6  = () => import('./chunks/shop_d72e48c3.mjs');
const _page7  = () => import('./chunks/team_ccc71b8f.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/robots.txt.ts", _page2],["src/pages/prices.astro", _page3],["src/pages/blog/[slug].astro", _page4],["src/pages/blog.astro", _page5],["src/pages/shop.astro", _page6],["src/pages/team.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

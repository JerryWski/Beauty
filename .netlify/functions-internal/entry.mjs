import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6ee1ab21.mjs';
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
const _page1  = () => import('./chunks/index_5349dd78.mjs');
const _page2  = () => import('./chunks/robots_8a29865c.mjs');
const _page3  = () => import('./chunks/prices_1a52b34b.mjs');
const _page4  = () => import('./chunks/_slug__3dd9fda3.mjs');
const _page5  = () => import('./chunks/blog_29c19d05.mjs');
const _page6  = () => import('./chunks/shop_bf9257c4.mjs');
const _page7  = () => import('./chunks/team_1b9079af.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/robots.txt.ts", _page2],["src/pages/prices.astro", _page3],["src/pages/blog/[slug].astro", _page4],["src/pages/blog.astro", _page5],["src/pages/shop.astro", _page6],["src/pages/team.astro", _page7]]);
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

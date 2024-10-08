import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7e4f72a1.mjs';
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
const _page1  = () => import('./chunks/index_f37833f9.mjs');
const _page2  = () => import('./chunks/polityka-prywatnosci_47ee6f0f.mjs');
const _page3  = () => import('./chunks/robots_7da19262.mjs');
const _page4  = () => import('./chunks/prices_5bd297e5.mjs');
const _page5  = () => import('./chunks/_slug__6d000162.mjs');
const _page6  = () => import('./chunks/blog_5fe1076f.mjs');
const _page7  = () => import('./chunks/shop_45d3e5dd.mjs');
const _page8  = () => import('./chunks/team_c6b4220a.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/polityka-prywatnosci.astro", _page2],["src/pages/robots.txt.ts", _page3],["src/pages/prices.astro", _page4],["src/pages/blog/[slug].astro", _page5],["src/pages/blog.astro", _page6],["src/pages/shop.astro", _page7],["src/pages/team.astro", _page8]]);
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

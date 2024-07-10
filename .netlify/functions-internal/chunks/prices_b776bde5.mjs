export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender_5a0b8195.mjs').then(n => n.a);

export { page };

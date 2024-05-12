export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender_9874f1bd.mjs').then(n => n.i);

export { page };

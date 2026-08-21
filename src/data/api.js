// ─────────────────────────────────────────────────────────────────────────
// DATA ACCESS LAYER — the seam between UI and product data.
// ─────────────────────────────────────────────────────────────────────────
// Every component imports products through THIS file, never straight from
// products.js. Today it resolves instantly from local mock data. When a
// real backend exists, replace the bodies below with fetch() calls to your
// API (e.g. `fetch('/api/products')`) — every function keeps the same
// name and return shape, so no component needs to change.
//
//   GET  /api/products              -> fetchProducts()
//   GET  /api/products/:id          -> fetchProductById(id)
//   POST /api/orders                -> placeOrder(orderPayload)
// ─────────────────────────────────────────────────────────────────────────

import { products, getProductById } from './products';

export async function fetchProducts() {
  return Promise.resolve(products);
}

export async function fetchProductById(id) {
  return Promise.resolve(getProductById(id));
}

export async function placeOrder(orderPayload) {
  // Mock order placement. A real backend would POST this payload and
  // return a persisted order with a server-generated id.
  const order = {
    id: `JK${Date.now().toString().slice(-8)}`,
    placedAt: new Date().toISOString(),
    status: 'confirmed',
    ...orderPayload,
  };
  return Promise.resolve(order);
}

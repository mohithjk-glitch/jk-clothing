# J&K — Premium Clothing E-Commerce Website

A complete, responsive clothing e-commerce storefront built with **React + Vite**.
No backend required — the product catalogue, cart, wishlist and checkout all run
against local data, but the code is structured so a real backend/database can be
dropped in later without rewriting the frontend (see `src/data/api.js`).

## Run it in VS Code

**Requirements:** [Node.js](https://nodejs.org) 18 or newer.

1. Open this folder (`jk-clothing`) in VS Code.
2. Open a terminal (`` Ctrl+` `` / `` Cmd+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the storefront:
   ```bash
  npm run dev
   ```
5. Open the printed storefront URL (usually **http://localhost:5173**) in your browser.
   The site hot-reloads as you edit files.

To build a production bundle: `npm run build` (output goes to `dist/`).
To preview that production build locally: `npm run preview`.

## Deploying to Vercel

1. Push this project to GitHub, or install the Vercel CLI and run `vercel` from
  the project folder.
2. Deploy with the default Vite settings: build command `npm run build`, output
  directory `dist`.

The included `vercel.json` keeps React Router pages working when users refresh
or open a nested URL directly.

## Project structure

```
src/
  data/
    products.js       ← the entire product catalogue (single source of truth)
    api.js             ← data-access seam — swap for real API calls later
  context/
    CartContext.jsx    ← cart state, persisted to localStorage
    WishlistContext.jsx← wishlist state, persisted to localStorage
  components/          ← reusable UI: Navbar, Footer, ProductCard, ProductGrid,
                          ProductFilters, SearchOverlay, WhatsAppButton, Toast…
  pages/                ← one file per route (Home, Shop, ProductDetails, Cart,
                          Checkout, OrderConfirmation, About, Contact, Wishlist,
                          SearchResults, NotFound)
  styles/               ← index.css (design tokens), layout.css, product.css,
                          pages.css
```

## Growing the catalogue

Add a new product by copying an object in `src/data/products.js` and giving it
a unique `id` and `sku` — it will automatically appear in the shop grid,
filters, search and its own product page. No UI code needs to change.

## Connecting a real backend later

`src/data/api.js` is the seam between the UI and the data. Today its functions
resolve instantly from the local array in `products.js`. Point them at real
endpoints (e.g. `fetch('/api/products')`) when a Node/Express + MongoDB (or
similar) backend exists, and every page keeps working unchanged.

## Payments

Checkout currently supports Cash on Delivery. The current `placeOrder()`
function simulates persistence; replace it with your database order endpoint
before launch.

## WhatsApp button

The floating "Chat with us" button and all WhatsApp links open a real
click-to-chat conversation with **+91 99940 12589** — update the number in
`src/components/WhatsAppButton.jsx`, `src/components/Footer.jsx`,
`src/pages/Contact.jsx` and `src/pages/OrderConfirmation.jsx` if it ever
changes.

## Notes

- Product photography uses placeholder images (picsum.photos) — swap the
  `images` arrays in `products.js` for real product photography before launch.
- Cart and wishlist persist in the browser's localStorage, so they survive a
  page refresh.
- Orders are simulated client-side in `api.js`'s `placeOrder()`; wire this to
  a real order-creation endpoint when a backend is ready.

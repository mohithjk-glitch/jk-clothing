// ─────────────────────────────────────────────────────────────────────────
// J&K PRODUCT CATALOGUE
// ─────────────────────────────────────────────────────────────────────────
// This file is the single source of truth for every product on the site.
// The entire storefront (grids, filters, search, product pages, cart)
// reads from this array — nothing about a product is hard-coded into UI.
//
// TO ADD A PRODUCT: copy an object below, give it a new unique `id` and
// `sku`, fill in the fields, and it will automatically appear in the shop,
// filters, search and category pages. No other file needs to change.
//
// WHEN A REAL BACKEND EXISTS: replace the contents of `products` with a
// fetch() call to your API (e.g. GET /api/products) that resolves to the
// same shape. Every component below consumes this shape, so nothing else
// in the app needs to be rewritten — see src/data/api.js for the seam.
// ─────────────────────────────────────────────────────────────────────────

function img(seed, w = 900, h = 1125) {
  // Deterministic placeholder "editorial" imagery per product/angle.
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export const CATEGORIES = [
  { id: 'men', label: "Men" },
  { id: 'women', label: "Women" },
];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const products = [
  {
    id: 'jk-001',
    sku: 'JK-MTS-001',
    name: "J&K Premium Oversized T-Shirt",
    category: 'men',
    subCategory: 'T-Shirts',
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    images: [
      'https://i.pinimg.com/736x/0d/8d/a2/0d8da20ef998b35844a2f5951619d482.jpg',
      'https://i.pinimg.com/736x/a4/37/a2/a437a2e9095895ca451cadd061b6bbb3.jpg',
      'https://i.pinimg.com/736x/c2/17/db/c217db68333f7272f8f2e78b537892b7.jpg',
    ],
    description:
      "Cut from heavyweight 240gsm combed cotton, the Premium Oversized Tee is built with a dropped shoulder and a boxy, relaxed silhouette. Garment-washed for a lived-in softness that only gets better with every wear.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#16150f' },
      { name: 'White', hex: '#f0ac0e' },
      { name: 'Beige', hex: '#cbbfa1' },
    ],
    stock: 24,
    rating: 4.6,
    reviews: 128,
    featured: true,
    newArrival: false,
    bestseller: true,
    tags: ['tshirt', 'oversized', 'cotton', 'essentials'],
  },
  {
    id: 'jk-002',
    sku: 'JK-MSH-002',
    name: "J&K Classic Cotton Shirt",
    category: 'men',
    subCategory: 'Shirts',
    price: 1799,
    originalPrice: 2199,
    discount: 18,
    images: [img('jk-msh-002-a'), img('jk-msh-002-b'), img('jk-msh-002-c')],
    images: [
      'https://i.pinimg.com/736x/1a/81/12/1a8112a55105cf0a636eea0f16bee1d4.jpg',
      'https://i.pinimg.com/736x/ac/2b/68/ac2b684728a23f5406850010e83932b6.jpg',
      'https://i.pinimg.com/1200x/31/be/f3/31bef33a9e4377e96d918bdbac6615d3.jpg',
    ],
    description:
      "A tailored-fit shirt in breathable pure cotton poplin. Mother-of-pearl buttons, a clean spread collar and a single chest pocket keep it sharp from desk to dinner.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#faf7f0' },
      { name: 'Sky Blue', hex: '#a9c1cf' },
      { name: 'Black', hex: '#16150f' },
    ],
    stock: 16,
    rating: 4.4,
    reviews: 76,
    featured: true,
    newArrival: false,
    bestseller: false,
    tags: ['shirt', 'formal', 'cotton', 'office'],
  },
  {
    id: 'jk-003',
    sku: 'JK-MCG-003',
    name: "J&K Relaxed Fit Cargo",
    category: 'men',
    subCategory: 'Trousers',
    price: 2299,
    originalPrice: 2699,
    discount: 15,
    images: [img('jk-mcg-003-a'), img('jk-mcg-003-b'), img('jk-mcg-003-c')],
    images: [
      'https://i.pinimg.com/1200x/29/7a/15/297a159a374f5792c5b2375f50f001ff.jpg',
      'https://i.pinimg.com/1200x/15/05/0f/15050f14842b170498ec1ae7d320489e.jpg',
      'https://i.pinimg.com/736x/78/8f/6f/788f6fe36083cbc36d4a852007634028.jpg',
    ],
    description:
      "Six-pocket utility cargos in a durable cotton-twill, finished with a relaxed taper and an adjustable drawcord waist. Reinforced stitching at every stress point for daily wear.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Olive', hex: '#5b5a44' },
      { name: 'Black', hex: '#16150f' },
      { name: 'Stone', hex: '#c7bea9' },
    ],
    stock: 10,
    rating: 4.5,
    reviews: 54,
    featured: false,
    newArrival: true,
    bestseller: false,
    tags: ['cargo', 'trousers', 'streetwear'],
  },
  {
    id: 'jk-004',
    sku: 'JK-MHD-004',
    name: "J&K Essential Hoodie",
    category: 'men',
    subCategory: 'Hoodies',
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    images: [img('jk-mhd-004-a'), img('jk-mhd-004-b'), img('jk-mhd-004-c')],
    images: [
      'https://i.pinimg.com/736x/09/49/a3/0949a3757008088d45d4b7a39e861b36.jpg',
      'https://i.pinimg.com/736x/65/b7/e3/65b7e30b9d7db4f5cc73a6a32c7fc323.jpg',
      'https://i.pinimg.com/1200x/b9/dc/00/b9dc00ee0b1e4835cca1c2e63696deb6.jpg',
    ],
    description:
      "A brushed-fleece hoodie with a substantial 380gsm hand-feel, ribbed cuffs and a kangaroo pocket. Pre-shrunk so the fit stays true wash after wash.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Charcoal', hex: '#302f2b' },
      { name: 'Beige', hex: '#cbbfa1' },
    ],
    stock: 30,
    rating: 4.8,
    reviews: 201,
    featured: true,
    newArrival: false,
    bestseller: true,
    tags: ['hoodie', 'winter', 'essentials'],
  },
  {
    id: 'jk-005',
    sku: 'JK-WSH-005',
    name: "J&K Elegant Oversized Shirt",
    category: 'women',
    subCategory: 'Shirts',
    price: 1899,
    originalPrice: 2299,
    discount: 17,
    images: [img('jk-wsh-005-a'), img('jk-wsh-005-b'), img('jk-wsh-005-c')],
    images: [
      'https://i.pinimg.com/736x/f8/5b/2e/f85b2e2fa62bcf4aefc04f1e20e84c5a.jpg',
      'https://i.pinimg.com/736x/e4/43/32/e443320135d78e911a9d0c7d3fd6848d.jpg',
      'https://i.pinimg.com/736x/83/f9/8e/83f98e33da30b9f645992edec60555ad.jpg',
    ],
    description:
      "An easy, oversized shirt in fluid crepe with dropped shoulders and a curved hem. Layers effortlessly over camis or worn open over the Co-ord Set.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory', hex: '#efe7d6' },
      { name: 'Black', hex: '#16150f' },
    ],
    stock: 18,
    rating: 4.7,
    reviews: 92,
    featured: true,
    newArrival: false,
    bestseller: false,
    tags: ['shirt', 'oversized', 'women'],
  },
  {
    id: 'jk-006',
    sku: 'JK-WDR-006',
    name: "J&K Premium Casual Dress",
    category: 'women',
    subCategory: 'Dresses',
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    images: [img('jk-wdr-006-a'), img('jk-wdr-006-b'), img('jk-wdr-006-c')],
    images: [
      'https://i.pinimg.com/736x/4f/2c/f3/4f2cf349b9a46086ed85a4f503c552e7.jpg',
      'https://i.pinimg.com/736x/1a/c8/5a/1ac85ad6f65ee40169328991dc8be382.jpg',
      'https://i.pinimg.com/736x/63/fa/4d/63fa4d282f44667f8aaf35fca7b49e0e.jpg',

    ],
    description:
      "A midi-length dress in soft viscose with a self-tie waist and a fluid A-line skirt. Finished with a hidden side-zip and a fully lined bodice.",
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Terracotta', hex: '#8a6a52' },
      { name: 'Black', hex: '#16150f' },
      { name: 'Sage', hex: '#7c8a71' },
    ],
    stock: 12,
    rating: 4.6,
    reviews: 64,
    featured: true,
    newArrival: true,
    bestseller: false,
    tags: ['dress', 'casual', 'women'],
  },
  {
    id: 'jk-007',
    sku: 'JK-WCO-007',
    name: "J&K Everyday Co-ord Set",
    category: 'women',
    subCategory: 'Co-ords',
    price: 2799,
    originalPrice: 3299,
    discount: 15,
    images: [img('jk-wco-007-a'), img('jk-wco-007-b'), img('jk-wco-007-c')],
    images: [
      'https://i.pinimg.com/736x/21/ce/20/21ce20f6467ab168b7d02bc1d6b138bc.jpg',
      'https://i.pinimg.com/736x/bb/df/3d/bbdf3dd0e95cba8d2bf1561eb44d87e3.jpg',
      'https://i.pinimg.com/736x/43/db/03/43db036bd63a3973c853ded60bdd1001.jpg',
    ],
    description:
      "A relaxed cropped top and wide-leg trouser set in matching ribbed cotton. Designed to be worn together or split across your everyday rotation.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand', hex: '#cbbfa1' },
      { name: 'Charcoal', hex: '#302f2b' },
    ],
    stock: 20,
    rating: 4.5,
    reviews: 47,
    featured: false,
    newArrival: true,
    bestseller: false,
    tags: ['coord', 'set', 'women', 'new'],
  },
  {
    id: 'jk-008',
    sku: 'JK-WWP-008',
    name: "J&K Classic Wide-Leg Pants",
    category: 'women',
    subCategory: 'Trousers',
    price: 2199,
    originalPrice: 2599,
    discount: 15,
    images: [img('jk-wwp-008-a'), img('jk-wwp-008-b'), img('jk-wwp-008-c')],
    images: [
      'https://i.pinimg.com/736x/9e/6c/4d/9e6c4d3524b5adcfe35aed989d84f5d2.jpg',
      'https://i.pinimg.com/736x/f7/bb/27/f7bb270758b9225758661a8baeafc79a.jpg',
      'https://i.pinimg.com/736x/19/76/a4/1976a4bbee929a860d66e981432f25b8.jpg',
    ],
    description:
      "High-rise, wide-leg tailoring in a soft structured twill that drapes rather than clings. A pressed centre-crease keeps the line clean from desk to dinner.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#16150f' },
      { name: 'Ivory', hex: '#efe7d6' },
    ],
    stock: 22,
    rating: 4.3,
    reviews: 39,
    featured: false,
    newArrival: false,
    bestseller: true,
    tags: ['trousers', 'formal', 'women'],
  },
  {
    id: 'jk-009',
    sku: 'JK-MPO-009',
    name: "J&K Polo Classic",
    category: 'men',
    subCategory: 'T-Shirts',
    price: 1699,
    originalPrice: 1999,
    discount: 15,
    images: [img('jk-mpo-009-a'), img('jk-mpo-009-b'), img('jk-mpo-009-c')],
    images: [
      'https://i.pinimg.com/736x/ba/4f/84/ba4f8460bcf0dc5578aba16687ff0690.jpg',
      'https://i.pinimg.com/1200x/78/68/ee/7868eedcea73b0d4d1f60b2a587c3f5d.jpg',
      'https://i.pinimg.com/1200x/b2/d4/5d/b2d45d20e6da8f2ebfd4ffdf69e60152.jpg',
    ],
    description:
      "A pique-cotton polo with a structured collar and mother-of-pearl buttons. Tailored through the body for a polished, not boxy, fit.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Navy', hex: '#2b3542' },
      { name: 'White', hex: '#faf7f0' },
      { name: 'Olive', hex: '#5b5a44' },
    ],
    stock: 26,
    rating: 4.4,
    reviews: 58,
    featured: false,
    newArrival: true,
    bestseller: false,
    tags: ['polo', 'tshirt', 'men'],
  },
  {
    id: 'jk-010',
    sku: 'JK-MJK-010',
    name: "J&K Overshirt Jacket",
    category: 'men',
    subCategory: 'Jackets',
    price: 3199,
    originalPrice: 3799,
    discount: 16,
    images: [img('jk-mjk-010-a'), img('jk-mjk-010-b'), img('jk-mjk-010-c')],
    images: [
      'https://i.pinimg.com/1200x/2d/75/23/2d7523acb2faf33a5e38af0a61b474c7.jpg',
      'https://i.pinimg.com/736x/55/11/af/5511af3031933537fa4cceb06e12ef8c.jpg',
      'https://i.pinimg.com/736x/77/90/0a/77900ac0156261792fe55895dd502a05.jpg',
    ],
    description:
      "A brushed-twill overshirt that works as a light jacket. Corozo buttons, dual chest pockets and a boxy body built for layering.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal', hex: '#302f2b' },
      { name: 'Beige', hex: '#cbbfa1' },
    ],
    stock: 9,
    rating: 4.7,
    reviews: 33,
    featured: true,
    newArrival: true,
    bestseller: false,
    tags: ['jacket', 'overshirt', 'layering'],
  },
  {
    id: 'jk-011',
    sku: 'JK-WSK-011',
    name: "J&K Pleated Midi Skirt",
    category: 'women',
    subCategory: 'Skirts',
    price: 1999,
    originalPrice: 2399,
    discount: 17,
    images: [img('jk-wsk-011-a'), img('jk-wsk-011-b'), img('jk-wsk-011-c')],
    images: [
      'https://i.pinimg.com/1200x/32/13/f0/3213f0223432d3e38a98a4d617349ac9.jpg',
      'https://i.pinimg.com/1200x/8e/b0/b1/8eb0b1bfc55d628f65a3169d93833d1a.jpg',
      'https://i.pinimg.com/736x/59/a6/9d/59a69d787f3a49bb22c016b2170d2f29.jpg',
    ],
    description:
      "Fine knife-pleats in a fluid satin-back crepe that hold their shape through movement. An elasticated back waistband keeps it comfortable all day.",
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#16150f' },
      { name: 'Terracotta', hex: '#8a6a52' },
    ],
    stock: 14,
    rating: 4.5,
    reviews: 41,
    featured: false,
    newArrival: false,
    bestseller: false,
    tags: ['skirt', 'women', 'formal'],
  },
  {
    id: 'jk-012',
    sku: 'JK-WKN-012',
    name: "J&K Ribbed Knit Top",
    category: 'women',
    subCategory: 'Tops',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    images: [img('jk-wkn-012-a'), img('jk-wkn-012-b'), img('jk-wkn-012-c')],
    images: [
      'https://i.pinimg.com/1200x/bb/11/15/bb111569315d4042b869291a44e2fd1a.jpg',
      'https://i.pinimg.com/1200x/3e/9d/77/3e9d77ef03d14f96ea20fb007848be0a.jpg',
      'https://i.pinimg.com/1200x/4c/99/bb/4c99bb3722f8ad4f954546b374770344.jpg',
    ],
    description:
      "A second-skin ribbed knit top with a fitted silhouette and a boat neckline. The everyday layering piece built to pair with everything.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#16150f' },
      { name: 'Ivory', hex: '#efe7d6' },
      { name: 'Sage', hex: '#7c8a71' },
    ],
    stock: 10,
    rating: 4.2,
    reviews: 22,
    featured: false,
    newArrival: false,
    bestseller: false,
    tags: ['top', 'knit', 'women'],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count);
}

export function slugify(product) {
  return product.id;
}

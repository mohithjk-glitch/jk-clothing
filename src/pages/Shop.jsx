import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products.js';
import ProductGrid from '../components/ProductGrid.jsx';
import ProductFilters from '../components/ProductFilters.jsx';
import { CloseIcon } from '../components/Icons.jsx';

const MAX_PRICE = Math.max(...products.map((p) => p.price)) + 200;

const TITLES = {
  men: { title: 'Men', eyebrow: 'For Him', sub: 'Modern essentials and statement pieces for men.' },
  women: { title: 'Women', eyebrow: 'For Her', sub: 'Elegant and contemporary fashion for women.' },
  newArrival: { title: 'New Arrivals', eyebrow: 'Just In', sub: 'Fresh styles added to the J&K collection.' },
  bestseller: { title: 'Best Sellers', eyebrow: 'Most Loved', sub: 'The pieces our customers keep coming back for.' },
  all: { title: 'Shop All', eyebrow: 'Full Collection', sub: 'Every J&K piece, in one place.' },
};

export default function Shop({ presetCategory, presetFilter }) {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: presetCategory || 'all',
    sizes: [],
    colors: [],
    priceMax: MAX_PRICE,
    inStockOnly: false,
    minRating: 0,
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setFilters((f) => ({ ...f, category: presetCategory || 'all' }));
  }, [presetCategory]);

  const headKey = presetFilter || presetCategory || 'all';
  const head = TITLES[headKey];

  useEffect(() => {
    document.title = `${head.title} — J&K`;
  }, [head.title]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (presetFilter) list = list.filter((p) => p[presetFilter]);
    if (filters.category !== 'all') list = list.filter((p) => p.category === filters.category);
    if (filters.sizes.length) list = list.filter((p) => p.sizes.some((s) => filters.sizes.includes(s)));
    if (filters.colors.length)
      list = list.filter((p) => p.colors.some((c) => filters.colors.includes(c.name)));
    list = list.filter((p) => p.price <= filters.priceMax);
    if (filters.inStockOnly) list = list.filter((p) => p.stock > 0);
    if (filters.minRating) list = list.filter((p) => p.rating >= filters.minRating);

    switch (sort) {
      case 'newest':
        list.sort((a, b) => (b.newArrival === a.newArrival ? 0 : b.newArrival ? 1 : -1));
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        list.sort((a, b) => (b.bestseller === a.bestseller ? b.reviews - a.reviews : b.bestseller ? 1 : -1));
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
    }
    return list;
  }, [filters, sort, presetFilter]);

  const filterPanel = (
    <ProductFilters filters={filters} setFilters={setFilters} resultCount={filtered.length} maxPrice={MAX_PRICE} />
  );

  return (
    <div className="container section-tight">
      <div className="page-banner" style={{ paddingTop: 0 }}>
        <span className="eyebrow">{head.eyebrow}</span>
        <h1>{head.title}</h1>
        <p>{head.sub}</p>
      </div>

      <div className="shop-layout" style={{ marginTop: 40 }}>
        <div className="desktop-filters">{filterPanel}</div>

        <div>
          <div className="shop-toolbar">
            <span className="result-count">{filtered.length} {filtered.length === 1 ? 'style' : 'styles'}</span>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button className="btn btn-outline btn-sm mobile-filter-btn" onClick={() => setMobileFiltersOpen(true)}>
                Filter
              </button>
              <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest</option>
                <option value="price-asc">Sort: Price Low to High</option>
                <option value="price-desc">Sort: Price High to Low</option>
                <option value="bestselling">Sort: Best Selling</option>
                <option value="rating">Sort: Top Rated</option>
              </select>
            </div>
          </div>

          <ProductGrid
            products={filtered}
            emptyTitle="No styles found for your filters."
            emptySub="Try adjusting or clearing a few filters."
            emptyCta="View All Products"
            emptyTo="/shop"
          />
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="mobile-filter-drawer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: 18 }}>Filters</h3>
            <button className="icon-btn" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <CloseIcon />
            </button>
          </div>
          {filterPanel}
          <button className="btn btn-primary btn-block" style={{ marginTop: 24 }} onClick={() => setMobileFiltersOpen(false)}>
            Show {filtered.length} Results
          </button>
        </div>
      )}
    </div>
  );
}

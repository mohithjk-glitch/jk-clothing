import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products.js';
import ProductGrid from '../components/ProductGrid.jsx';
import { SearchIcon } from '../components/Icons.jsx';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => { document.title = `Search — J&K`; }, []);
  useEffect(() => { setQuery(initialQuery); }, [initialQuery]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    setSearchParams(query.trim() ? { q: query.trim() } : {});
  }

  return (
    <div className="container section-tight">
      <div className="search-results-head">
        <span className="eyebrow">Search</span>
        <h1 style={{ marginTop: 10 }}>
          {query ? <>Results for <span className="sr-query">"{query}"</span></> : 'Search J&K'}
        </h1>

        <form onSubmit={onSubmit} style={{ marginTop: 22, maxWidth: 460 }}>
          <div className="search-input-row" style={{ borderBottom: '1px solid var(--line)' }}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for products, categories, SKU…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div style={{ marginTop: 30 }}>
        {query.trim() === '' ? (
          <p className="result-count">Start typing to search the J&amp;K collection.</p>
        ) : (
          <>
            <p className="result-count" style={{ marginBottom: 26 }}>{results.length} results found</p>
            <ProductGrid
              products={results}
              emptyTitle="No styles found for your search."
              emptyCta="View All Products"
              emptyTo="/shop"
            />
          </>
        )}
      </div>
    </div>
  );
}

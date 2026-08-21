import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products.js';
import { SearchIcon, CloseIcon } from './Icons.jsx';

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [query]);

  function submitSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    onClose();
  }

  return (
    <div className="search-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="search-panel">
        <form className="search-input-row" onSubmit={submitSearch}>
          <SearchIcon />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products, categories, SKU…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" onClick={onClose} aria-label="Close search">
            <CloseIcon width="18" height="18" />
          </button>
        </form>

        {query.trim() && (
          <>
            {results.length > 0 ? (
              <div className="search-suggestions">
                {results.map((p) => (
                  <div
                    key={p.id}
                    className="search-suggestion-item"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      navigate(`/product/${p.id}`);
                      onClose();
                    }}
                  >
                    <img src={p.images[0]} alt="" />
                    <div>
                      <div className="ssi-name">{p.name}</div>
                      <div className="ssi-cat">
                        {p.category} · {p.subCategory}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="search-hint">No styles found for "{query}"</p>
            )}
            <p className="search-hint" style={{ marginTop: 14 }}>
              Press Enter to see all results
            </p>
          </>
        )}
      </div>
    </div>
  );
}

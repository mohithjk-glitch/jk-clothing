import { SIZES } from '../data/products.js';

const ALL_COLORS = [
  { name: 'Black', hex: '#16150f' },
  { name: 'White', hex: '#faf7f0' },
  { name: 'Beige', hex: '#cbbfa1' },
  { name: 'Olive', hex: '#5b5a44' },
  { name: 'Navy', hex: '#2b3542' },
  { name: 'Ivory', hex: '#efe7d6' },
  { name: 'Charcoal', hex: '#302f2b' },
  { name: 'Sage', hex: '#7c8a71' },
  { name: 'Terracotta', hex: '#8a6a52' },
  { name: 'Sand', hex: '#cbbfa1' },
  { name: 'Sky Blue', hex: '#a9c1cf' },
  { name: 'Stone', hex: '#c7bea9' },
];

export default function ProductFilters({ filters, setFilters, resultCount, maxPrice = 4000 }) {
  const { category, sizes, colors, priceMax, inStockOnly, minRating } = filters;

  function toggleArrayValue(key, value) {
    setFilters((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }));
  }

  function clearAll() {
    setFilters({ category: 'all', sizes: [], colors: [], priceMax: maxPrice, inStockOnly: false, minRating: 0 });
  }

  return (
    <aside className="filters" aria-label="Product filters">
      <div className="filter-group">
        <h5>Gender</h5>
        {['all', 'men', 'women'].map((c) => (
          <label className="filter-option" key={c}>
            <input
              type="radio"
              name="category"
              checked={category === c}
              onChange={() => setFilters((f) => ({ ...f, category: c }))}
            />
            {c === 'all' ? 'All' : c[0].toUpperCase() + c.slice(1)}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h5>Size</h5>
        <div className="size-pill-row">
          {SIZES.map((s) => (
            <span
              key={s}
              className={`size-pill${sizes.includes(s) ? ' active' : ''}`}
              onClick={() => toggleArrayValue('sizes', s)}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h5>Color</h5>
        <div className="swatch-row">
          {ALL_COLORS.map((c) => (
            <span
              key={c.name}
              className={`swatch${colors.includes(c.name) ? ' active' : ''}`}
              style={{ background: c.hex }}
              title={c.name}
              onClick={() => toggleArrayValue('colors', c.name)}
            />
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h5>Price</h5>
        <div className="price-slider-row">
          <span>₹0</span>
          <span>₹{priceMax.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="500"
          max={maxPrice}
          step="100"
          value={priceMax}
          onChange={(e) => setFilters((f) => ({ ...f, priceMax: Number(e.target.value) }))}
        />
      </div>

      <div className="filter-group">
        <h5>Availability</h5>
        <label className="filter-option">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setFilters((f) => ({ ...f, inStockOnly: e.target.checked }))}
          />
          In Stock Only
        </label>
      </div>

      <div className="filter-group" style={{ borderBottom: 'none' }}>
        <h5>Rating</h5>
        {[4, 3, 0].map((r) => (
          <label className="filter-option" key={r}>
            <input
              type="radio"
              name="rating"
              checked={minRating === r}
              onChange={() => setFilters((f) => ({ ...f, minRating: r }))}
            />
            {r === 0 ? 'Any rating' : `${r}★ & above`}
          </label>
        ))}
      </div>

      <button className="clear-filters" onClick={clearAll}>
        Clear all filters ({resultCount} results)
      </button>
    </aside>
  );
}

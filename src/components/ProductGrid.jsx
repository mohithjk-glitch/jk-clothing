import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import Reveal from './Reveal.jsx';

export default function ProductGrid({ products, emptyTitle = 'No styles found', emptySub, emptyCta = 'View All Products', emptyTo = '/shop' }) {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-glyph">J&amp;K</div>
        <h3>{emptyTitle}</h3>
        {emptySub && <p>{emptySub}</p>}
        <Link to={emptyTo} className="btn btn-primary">{emptyCta}</Link>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <Reveal key={p.id} delay={(i % 4) * 60}>
          <ProductCard product={p} />
        </Reveal>
      ))}
    </div>
  );
}

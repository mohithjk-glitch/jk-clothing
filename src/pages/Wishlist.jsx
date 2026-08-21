import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import { getProductById } from '../data/products.js';
import ProductGrid from '../components/ProductGrid.jsx';

export default function Wishlist() {
  const { ids } = useWishlist();
  useEffect(() => { document.title = 'Wishlist — J&K'; }, []);

  const items = ids.map(getProductById).filter(Boolean);

  return (
    <div className="container section-tight">
      <div className="page-banner" style={{ paddingTop: 0 }}>
        <span className="eyebrow">Saved for Later</span>
        <h1>Your Wishlist</h1>
      </div>
      <div style={{ marginTop: 40 }}>
        {items.length === 0 ? (
          <div className="empty-state">
            <div className="empty-glyph">J&amp;K</div>
            <h3>Nothing saved yet.</h3>
            <p>Tap the heart on any product to save it here for later.</p>
            <Link to="/shop" className="btn btn-primary">Explore Collection</Link>
          </div>
        ) : (
          <ProductGrid products={items} />
        )}
      </div>
    </div>
  );
}

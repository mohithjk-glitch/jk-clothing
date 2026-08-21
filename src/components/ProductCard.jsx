import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { useToast } from './Toast.jsx';
import Rating from './Rating.jsx';
import { HeartIcon } from './Icons.jsx';

export default function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const showToast = useToast();
  const navigate = useNavigate();
  const wishlisted = isWishlisted(product.id);
  const inStock = product.stock > 0;

  function handleWishlist(e) {
    e.preventDefault();
    toggleWishlist(product.id);
    showToast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  }

  function handleQuickAdd(e) {
    e.preventDefault();
    if (!inStock) return;
    addToCart(product, { size: product.sizes[0], color: product.colors[0].name, quantity: 1 });
    showToast('Added to bag');
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="pc-media">
        <img className="pc-img-a" src={product.images[0]} alt={product.name} loading="lazy" />
        {product.images[1] && (
          <img className="pc-img-b" src={product.images[1]} alt="" aria-hidden="true" loading="lazy" />
        )}

        <div className="pc-badges">
          {product.newArrival && <span className="tag-badge tag-new">New</span>}
          {product.discount > 0 && <span className="tag-badge tag-sale">-{product.discount}%</span>}
        </div>

        <button
          className={`pc-wishlist${wishlisted ? ' active' : ''}`}
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon />
        </button>

        {!inStock && (
          <div className="pc-oos">
            <span>OUT OF STOCK</span>
          </div>
        )}

        <div className="pc-quick-add">
          <button onClick={handleQuickAdd} disabled={!inStock}>
            {inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>

      <div className="pc-body">
        <div className="pc-cat">{product.category} · {product.subCategory}</div>
        <div className="pc-name">{product.name}</div>
        <div className="price-row">
          <span className="price-now">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice > product.price && (
            <span className="price-was">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
        <Rating rating={product.rating} reviews={product.reviews} />
      </div>
    </Link>
  );
}

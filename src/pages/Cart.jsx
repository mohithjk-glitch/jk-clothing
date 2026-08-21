import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useToast } from '../components/Toast.jsx';
import { getProductById } from '../data/products.js';

export default function Cart() {
  const { lines, updateQuantity, removeFromCart, subtotal, discount, delivery, total } = useCart();
  const { toggleWishlist } = useWishlist();
  const showToast = useToast();
  const navigate = useNavigate();

  useEffect(() => { document.title = 'Your Bag — J&K'; }, []);

  if (lines.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <div className="empty-glyph">J&amp;K</div>
          <h3>Your bag is waiting for something special.</h3>
          <p>Browse the collection and find pieces that define your style.</p>
          <Link to="/shop" className="btn btn-primary">Explore Collection</Link>
        </div>
      </div>
    );
  }

  function moveToWishlist(line) {
    const product = getProductById(line.productId);
    if (product) toggleWishlist(product.id);
    removeFromCart(line.key);
    showToast('Moved to wishlist');
  }

  return (
    <div className="container section-tight">
      <div className="page-banner" style={{ paddingTop: 0 }}>
        <span className="eyebrow">Your Bag</span>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout" style={{ marginTop: 40 }}>
        <div>
          {lines.map((line) => (
            <div className="cart-item" key={line.key}>
              <img src={line.image} alt={line.name} />
              <div>
                <div className="ci-name">{line.name}</div>
                <div className="ci-meta">
                  <span>Size: {line.size}</span>
                  <span>Color: {line.color}</span>
                </div>
                <div className="ci-price">₹{line.price.toLocaleString('en-IN')}</div>
                <div className="qty-stepper" style={{ marginTop: 12 }}>
                  <button onClick={() => updateQuantity(line.key, line.quantity - 1)} aria-label="Decrease quantity">−</button>
                  <span>{line.quantity}</span>
                  <button
                    onClick={() => updateQuantity(line.key, line.quantity + 1)}
                    disabled={line.quantity >= line.stock}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="ci-actions">
                <button className="ci-remove" onClick={() => removeFromCart(line.key)}>Remove</button>
                <button className="ci-remove" onClick={() => moveToWishlist(line)}>Move to Wishlist</button>
              </div>
            </div>
          ))}
          <Link to="/shop" className="btn btn-outline" style={{ marginTop: 26 }}>Continue Shopping</Link>
        </div>

        <div className="summary-card">
          <h4>Order Summary</h4>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="val">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span className="val">− ₹{discount.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="val">{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="val">₹{total.toLocaleString('en-IN')}</span>
          </div>
          {delivery > 0 && (
            <p className="summary-note">Add ₹{(2999 - subtotal).toLocaleString('en-IN')} more for free delivery.</p>
          )}
          <button className="btn btn-primary btn-block" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

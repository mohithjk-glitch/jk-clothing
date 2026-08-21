import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useToast } from '../components/Toast.jsx';
import Rating from '../components/Rating.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { HeartIcon } from '../components/Icons.jsx';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const showToast = useToast();

  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(product?.sizes[0] ?? null);
  const [color, setColor] = useState(product?.colors[0]?.name ?? null);
  const [qty, setQty] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    if (product) document.title = `${product.name} — J&K`;
  }, [product]);

  useEffect(() => {
    setActiveImg(0);
    setSize(product?.sizes[0] ?? null);
    setColor(product?.colors[0]?.name ?? null);
    setQty(1);
  }, [id]);

  if (!product) {
    return (
      <div className="container empty-state">
        <div className="empty-glyph">J&amp;K</div>
        <h3>This style couldn't be found.</h3>
        <p>It may have sold out or been retired from the collection.</p>
        <Link to="/shop" className="btn btn-primary">View All Products</Link>
      </div>
    );
  }

  const inStock = product.stock > 0;
  const lowStock = inStock && product.stock <= 5;
  const wishlisted = isWishlisted(product.id);
  const related = getRelatedProducts(product);

  function requireSize() {
    if (!size) {
      setSizeError(true);
      return false;
    }
    return true;
  }

  function handleAddToCart() {
    if (!requireSize()) return;
    addToCart(product, { size, color, quantity: qty });
    showToast('Added to bag');
  }

  function handleBuyNow() {
    if (!requireSize()) return;
    addToCart(product, { size, color, quantity: qty });
    navigate('/checkout');
  }

  return (
    <div className="container section-tight">
      <div className="breadcrumb" style={{ marginBottom: 26 }}>
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <Link to={`/shop/${product.category}`}>{product.category === 'men' ? 'Men' : 'Women'}</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>{product.name}</span>
      </div>

      <div className="pdp">
        <div>
          <div
            className={`pdp-gallery-main${zoomed ? ' zoomed' : ''}`}
            onClick={() => setZoomed((z) => !z)}
          >
            <img src={product.images[activeImg]} alt={product.name} />
          </div>
          <div className="pdp-thumbs">
            {product.images.map((img, i) => (
              <button
                key={img}
                className={`pdp-thumb${i === activeImg ? ' active' : ''}`}
                onClick={() => { setActiveImg(i); setZoomed(false); }}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="pdp-info">
          <span className="eyebrow">{product.category} · {product.subCategory}</span>
          <h1>{product.name}</h1>
          <Rating rating={product.rating} reviews={product.reviews} />

          <div className="price-row">
            <span className="price-now">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="price-was">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="price-off">{product.discount}% OFF</span>
              </>
            )}
          </div>

          <p className="pdp-desc">{product.description}</p>
          <div className="pdp-sku">SKU: {product.sku}</div>

          <div className="pdp-section">
            <div className="pdp-section-label"><span>Color — {color}</span></div>
            <div className="swatch-row">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className={`swatch${color === c.name ? ' active' : ''}`}
                  style={{ background: c.hex }}
                  title={c.name}
                  onClick={() => setColor(c.name)}
                />
              ))}
            </div>
          </div>

          <div className="pdp-section">
            <div className="pdp-section-label">
              <span>Size {size ? `— ${size}` : ''}</span>
              <button type="button">Size Guide</button>
            </div>
            <div className="size-pill-row">
              {product.sizes.map((s) => (
                <span
                  key={s}
                  className={`size-pill${size === s ? ' active' : ''}`}
                  onClick={() => { setSize(s); setSizeError(false); }}
                >
                  {s}
                </span>
              ))}
            </div>
            {sizeError && <p className="field-error" style={{ marginTop: 8 }}>Please select a size to continue.</p>}
          </div>

          <div className="pdp-section">
            <div className="pdp-section-label"><span>Quantity</span></div>
            <div className="qty-stepper">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                aria-label="Increase quantity"
                disabled={!inStock}
              >
                +
              </button>
            </div>
            <div className={`stock-status${!inStock ? ' out' : lowStock ? ' low' : ''}`}>
              <span className="dot" />
              {!inStock ? 'Out of stock' : lowStock ? `Only ${product.stock} left in stock` : 'In stock, ready to ship'}
            </div>
          </div>

          <div className="pdp-actions">
            <button className="btn btn-outline" onClick={handleAddToCart} disabled={!inStock}>
              Add to Cart
            </button>
            <button className="btn btn-primary" onClick={handleBuyNow} disabled={!inStock}>
              Buy Now
            </button>
            <button
              className={`pdp-wishlist-btn${wishlisted ? ' active' : ''}`}
              onClick={() => { toggleWishlist(product.id); showToast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist'); }}
              aria-label="Add to wishlist"
            >
              <HeartIcon />
            </button>
          </div>

          <div className="pdp-meta-list">
            <details open>
              <summary>Fabric &amp; Care</summary>
              <div className="pdp-meta-body">
                Machine wash cold with like colors. Do not bleach. Tumble dry low. Warm iron if needed.
                Fabric composition and care may vary by colorway — check the garment label before washing.
              </div>
            </details>
            <details>
              <summary>Shipping &amp; Returns</summary>
              <div className="pdp-meta-body">
                Free delivery on orders above ₹2,999. Standard delivery in 3–6 business days. Easy 7-day
                returns on unworn items with tags attached.
              </div>
            </details>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-rail">
          <div className="section-head">
            <div>
              <span className="eyebrow">You May Also Like</span>
              <h2>Complete the Look</h2>
            </div>
          </div>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}

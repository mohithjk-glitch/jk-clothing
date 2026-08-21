import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { products } from '../data/products.js';
import ProductGrid from '../components/ProductGrid.jsx';
import Reveal from '../components/Reveal.jsx';
import { TruckIcon, ShieldIcon, RefreshIcon, TagIcon, ChevronIcon } from '../components/Icons.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'J&K — Style That Defines You';
  }, []);

  const featured = products.filter((p) => p.featured).slice(0, 8);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img
          src="https://img.magnific.com/premium-photo/abstract-background-dark-color-luxury-silk-fabric_161299-742.jpg?semt=ais_test_b&w=740&q=80"
          alt="J&K editorial campaign"
        />
        <div className="hero-content">
          <span className="eyebrow">J&amp;K — Autumn Collection</span>
          <h1>Style That Defines You.</h1>
          <p className="hero-sub">
            Explore the latest collection from J&amp;K — crafted for confidence, comfort and everyday style.
          </p>
          <div className="hero-actions">
            <Link to="/shop/men" className="btn btn-primary">Shop Men</Link>
            <Link to="/shop/women" className="btn btn-ghost">Shop Women</Link>
            <Link to="/shop/kids" className="btn btn-ghost">Shop Kids</Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-item">
          <TruckIcon />
          <h6>Free Delivery</h6>
          <p>On orders above ₹2,999</p>
        </div>
        <div className="trust-item">
          <RefreshIcon />
          <h6>Easy Returns</h6>
          <p>7-day return policy</p>
        </div>
        <div className="trust-item">
          <ShieldIcon />
          <h6>Secure Checkout</h6>
          <p>Your details stay protected</p>
        </div>
        <div className="trust-item">
          <TagIcon />
          <h6>Premium Fabric</h6>
          <p>Crafted to last</p>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section container">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">Collections</span>
            <h2>Shop by Category</h2>
          </div>
        </Reveal>
        <div className="category-grid">
          <Reveal delay={0}>
            <Link to="/shop/men" className="category-card">
              <img src="https://i.pinimg.com/736x/ca/de/bf/cadebf4f281d838268fd43ad5bbe57ce.jpg" alt="Men's collection" />
              <div className="category-card-copy">
                <span className="eyebrow">For Him</span>
                <h3>Men</h3>
                <p>Modern essentials and statement pieces for men.</p>
                <span className="cc-arrow">Shop Men <ChevronIcon width="13" height="13" /></span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/shop/women" className="category-card">
              <img src="https://i.pinimg.com/736x/e0/a3/fd/e0a3fd6d51866f23d652140d59c63882.jpg" alt="Women's collection" />
              <div className="category-card-copy">
                <span className="eyebrow">For Her</span>
                <h3>Women</h3>
                <p>Elegant and contemporary fashion for women.</p>
                <span className="cc-arrow">Shop Women <ChevronIcon width="13" height="13" /></span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/new-arrivals" className="category-card">
              <img src="https://i.pinimg.com/1200x/0e/89/91/0e89918f5e0a0bdf1cc743afed838c98.jpg" alt="New arrivals" />
              <div className="category-card-copy">
                <span className="eyebrow">Just In</span>
                <h3>New Arrivals</h3>
                <p>Fresh styles added to the J&amp;K collection.</p>
                <span className="cc-arrow">Discover <ChevronIcon width="13" height="13" /></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section container">
        <Reveal as="div" className="section-head">
          <div>
            <span className="eyebrow">Curated</span>
            <h2>Featured This Week</h2>
          </div>
          <Link to="/shop" className="btn btn-outline">View All</Link>
        </Reveal>
        <ProductGrid products={featured} />
      </section>

      {/* EDITORIAL STRIP */}
      <section className="section container">
        <div className="editorial-strip">
          <Reveal>
            <img src="https://images.pexels.com/photos/7676340/pexels-photo-7676340.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7676340.jpg&fm=jpg" alt="J&K craftsmanship" />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our Craft</span>
            <h2>Fabric first. Fit always.</h2>
            <p>
              Every J&amp;K piece begins with the material — heavyweight cottons, fluid crepes and
              brushed fleece sourced for how they feel, not just how they photograph. We obsess over
              drape, stitch density and a fit that holds its shape from the first wear to the fiftieth.
            </p>
            <Link to="/about" className="btn btn-outline">Our Story</Link>
          </Reveal>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      {newArrivals.length > 0 && (
        <section className="section container">
          <Reveal as="div" className="section-head">
            <div>
              <span className="eyebrow">Just Landed</span>
              <h2>New Arrivals</h2>
            </div>
            <Link to="/new-arrivals" className="btn btn-outline">View All</Link>
          </Reveal>
          <ProductGrid products={newArrivals} />
        </section>
      )}
    </>
  );
}

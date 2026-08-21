import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-logo">J&amp;K</span>
            <p>"Style That Defines You."</p>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop/men">Men</Link></li>
              <li><Link to="/shop/women">Women</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/best-sellers">Best Sellers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Shipping</Link></li>
              <li><Link to="/contact">Returns</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
              <li><Link to="/contact">Size Guide</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:9994012589">9994012589</a></li>
              <li><a href="mailto:mohithjk.2031@gmail.com">mohithjk.2031@gmail.com</a></li>
              <li>
                <a
                  href="https://wa.me/919994012589?text=Hi%20J%26K%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: Chat with us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 J&amp;K. All Rights Reserved.</span>
          <span>Designed for those who define their own style.</span>
        </div>
      </div>
    </footer>
  );
}

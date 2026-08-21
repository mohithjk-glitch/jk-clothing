import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import SearchOverlay from './SearchOverlay.jsx';
import { SearchIcon, HeartIcon, UserIcon, BagIcon, MenuIcon, CloseIcon } from './Icons.jsx';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/shop/men', label: 'Men' },
  { to: '/shop/women', label: 'Women' },
  { to: '/new-arrivals', label: 'New Arrivals' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { count: wishCount } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <button className="nav-burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>

          <NavLink to="/" className="nav-logo" aria-label="J&K home">
            J<span>&amp;</span>K
          </NavLink>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <SearchIcon />
            </button>
            <button className="icon-btn hide-mobile" onClick={() => navigate('/wishlist')} aria-label="Wishlist">
              <HeartIcon />
              {wishCount > 0 && <span className="icon-badge">{wishCount}</span>}
            </button>
            <button className="icon-btn hide-mobile" onClick={() => navigate('/contact')} aria-label="Account">
              <UserIcon />
            </button>
            <button className="icon-btn" onClick={() => navigate('/cart')} aria-label="Shopping bag">
              <BagIcon />
              {itemCount > 0 && <span className="icon-badge">{itemCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-head">
            <span className="nav-logo">J&amp;K</span>
            <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>
          <nav>
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setMenuOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </nav>
          <div className="mobile-menu-foot">
            <span>9994012589</span>
            <span>mohithjk.2031@gmail.com</span>
          </div>
        </div>
      )}
    </>
  );
}

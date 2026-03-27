import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/siteData';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useScrollDirection } from '../../hooks/useAnimations';
import './Navbar.css';

// Map nav labels to routes for standalone pages
const pageRoutes = {
  About: '/about',
  Careers: '/careers',
  Blog: '/blog',
  Contact: '/contact',
};

export default function Navbar() {
  const scrolled = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeout = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleMouseEnter = (label) => {
    clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const activeLinkData = navLinks.find(l => l.label === activeMenu);

  const renderNavLink = (link) => {
    if (pageRoutes[link.label]) {
      return (
        <Link
          to={pageRoutes[link.label]}
          className={`navbar__link ${location.pathname === pageRoutes[link.label] ? 'navbar__link--active' : ''}`}
          onClick={() => setMobileOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    // Home section anchor links
    const href = isHome ? link.href : `/${link.href}`;
    return (
      <a href={href} className="navbar__link">
        {link.label}
        {link.megaMenu && <FiChevronDown className="navbar__chevron" />}
      </a>
    );
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Cosmonet AI" className="navbar__logo-icon" />
          <span className="navbar__logo-text">
            COSMONET <span className="navbar__logo-accent">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`navbar__link-item ${activeMenu === link.label ? 'mega-active' : ''}`}
                onMouseEnter={() => link.megaMenu ? handleMouseEnter(link.label) : setActiveMenu(null)}
              >
                {renderNavLink(link)}
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="navbar__cta">Contact us</Link>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ── Mega Menu ── */}
      {activeMenu && activeLinkData?.megaMenu && (
        <div
          className="mega-menu__inner"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
        >
          {activeLinkData.megaMenu.categories.map((cat) => (
            <div key={cat.title} className="mega-menu__category">
              <h4 className="mega-menu__cat-title">{cat.title}</h4>
              <ul className="mega-menu__items">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <a href={activeLinkData.href} className="mega-menu__link">
                      <span className="mega-menu__item-name">{item.name}</span>
                      <span className="mega-menu__item-desc">{item.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {pageRoutes[link.label] ? (
                <Link
                  to={pageRoutes[link.label]}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={isHome ? link.href : `/${link.href}`}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary mobile-menu__cta" onClick={() => setMobileOpen(false)}>
          Contact us
        </Link>
      </div>
    </header>
  );
}

import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../../data/siteData';
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { useScrollDirection } from '../../hooks/useAnimations';
import './Navbar.css';

export default function Navbar() {
  const scrolled = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeout = useRef(null);

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

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <img src="/logo.png" alt="Cosmonet AI" className="navbar__logo-icon" />
          <span className="navbar__logo-text">
            COSMONET <span className="navbar__logo-accent">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`navbar__link-item ${activeMenu === link.label ? 'mega-active' : ''}`}
                onMouseEnter={() => link.megaMenu ? handleMouseEnter(link.label) : setActiveMenu(null)}
              >
                <a href={link.href} className="navbar__link">
                  {link.label}
                  {link.megaMenu && <FiChevronDown className="navbar__chevron" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="navbar__cta">Contact us</a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ── Mega Menu: Full-width compact panel ── */}
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
              <a
                href={link.href}
                className="mobile-menu__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary mobile-menu__cta" onClick={() => setMobileOpen(false)}>
          Contact us
        </a>
      </div>
    </header>
  );
}

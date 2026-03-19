import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../../data/siteData';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
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
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <img src="/logo.png" alt="Cosmonet AI Logo" className="navbar__logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
          <span className="navbar__logo-text">
            COSMONET <span className="navbar__logo-accent">AI</span>
          </span>
        </a>

        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`navbar__link-item ${link.megaMenu ? 'has-mega' : ''}`}
                onMouseEnter={() => link.megaMenu && handleMouseEnter(link.label)}
                onMouseLeave={() => link.megaMenu && handleMouseLeave()}
              >
                <a href={link.href} className="navbar__link">
                  {link.label}
                  {link.megaMenu && <FiChevronDown className="navbar__chevron" />}
                </a>

                {link.megaMenu && activeMenu === link.label && (
                  <div
                    className="mega-menu"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="mega-menu__inner container">
                      {link.megaMenu.categories.map((cat) => (
                        <div key={cat.title} className="mega-menu__category">
                          <h4 className="mega-menu__cat-title">{cat.title}</h4>
                          <ul className="mega-menu__items">
                            {cat.items.map((item) => (
                              <li key={item.name} className="mega-menu__item">
                                <a href={link.href} className="mega-menu__link">
                                  <span className="mega-menu__item-name">{item.name}</span>
                                  <span className="mega-menu__item-desc">{item.desc}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-secondary navbar__cta">Get Started</a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

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
        <a href="#contact" className="btn btn-secondary mobile-menu__cta" onClick={() => setMobileOpen(false)}>
          Get Started
        </a>
      </div>
    </header>
  );
}

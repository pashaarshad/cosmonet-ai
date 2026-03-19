import { footerLinks } from '../../data/siteData';
import { FiLinkedin, FiTwitter, FiYoutube, FiGithub, FiSend } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <img src="/logo-icon.png" alt="Cosmonet AI" className="footer__logo-icon" />
              <span className="footer__logo-text">COSMONET <span className="footer__logo-accent">AI</span></span>
            </a>
            <p className="footer__desc">
              Cosmonet AI is a technology and artificial intelligence solutions company focused on building AI-driven
              products, digital platforms, and intelligent automation systems for modern enterprises.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" className="footer__social" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className="footer__social" aria-label="YouTube"><FiYoutube /></a>
              <a href="#" className="footer__social" aria-label="GitHub"><FiGithub /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="footer__link">→ {link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              {footerLinks.services.map((s, i) => (
                <li key={i}><a href="#services" className="footer__link">→ {s}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h4 className="footer__col-title">Newsletter</h4>
            <p className="footer__newsletter-desc">Stay updated with the latest in AI innovation.</p>
            <form className="footer__newsletter" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input type="email" placeholder="Enter email" className="footer__newsletter-input" required />
              <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe"><FiSend /></button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Cosmonet AI. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

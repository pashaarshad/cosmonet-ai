import { FiLinkedin, FiTwitter, FiYoutube, FiGithub } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand" data-aos="fade-up">
            <div className="footer__logo">
              <img src="/logo.png" alt="Cosmonet AI" className="footer__logo-icon" />
              <span className="footer__logo-text">Cosmonet <span className="footer__logo-accent">AI</span></span>
            </div>
            <p className="footer__desc" style={{ fontSize: '15px' }}>
              Cosmonet AI is a technology and artificial intelligence solutions company focused on building AI-driven products, digital platforms, and intelligent automation systems for modern enterprises. We combine AI engineering, data intelligence, and cloud technologies to help organizations innovate faster and scale smarter.
            </p>
            <div className="footer__social">
              <a href="https://linkedin.com" className="footer__social-link"><FiLinkedin /></a>
              <a href="https://twitter.com" className="footer__social-link"><FiTwitter /></a>
              <a href="https://youtube.com" className="footer__social-link"><FiYoutube /></a>
              <a href="https://github.com" className="footer__social-link"><FiGithub /></a>
            </div>
          </div>

          <div className="footer__links-col" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer__title">Quick Links</h4>
            <nav className="footer__links">
              <a href="#hero" className="footer__link">Home</a>
              <a href="#about" className="footer__link">About</a>
              <a href="#tech-stack" className="footer__link">Tech Stack</a>
              <a href="#industries" className="footer__link">Industries</a>
              <a href="#blog" className="footer__link">Blogs</a>
              <a href="#careers" className="footer__link">Careers</a>
              <a href="#contact" className="footer__link">Contact</a>
            </nav>
          </div>

          <div className="footer__links-col" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer__title">Services</h4>
            <nav className="footer__links">
               {['AI & Data', 'Application Development', 'Cyber Security', 'Digital Transformation', 'MVP Services', 'Software Engineering', 'Staff Augmentation', 'Support Services'].map(service => (
                  <a href="#services" key={service} className="footer__link">{service}</a>
               ))}
            </nav>
          </div>

          <div className="footer__newsletter" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer__title">Newsletter</h4>
            <p className="footer__newsletter-desc">
              Stay updated with the latest in AI innovation, emerging models, and digital transformation.
            </p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="footer__input" required />
              <button type="submit" className="footer__submit">→</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Cosmonet AI. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { heroContent } from '../../data/siteData';
import heroImage from '../../assets/hero-v6.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background AI Face Image — ensuring it loads and scales properly */}
      <div className="hero__bg">
        <img 
          src={heroImage} 
          alt="" 
          className="hero__bg-image" 
          aria-hidden="true"
          onLoad={() => console.log('Hero image loaded successfully')}
          onError={(e) => console.error('Hero image failed to load:', e.target.src)}
        />
        <div className="hero__bg-overlay"></div>
        <div className="hero__bg-particles"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title">
            {heroContent.title}
          </h1>
          <p className="hero__subtitle">
            {heroContent.subtitle}
          </p>
          <div className="hero__ctas">
            <a href="#expertise" className="hero__btn-yellow">
              {heroContent.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Corporate news ticker strip */}
      <div className="hero__ticker">
        <div className="hero__ticker-nav hero__ticker-nav--left">‹</div>
        <div className="hero__ticker-inner">
          <div className="hero__ticker-item">
            <span className="hero__ticker-date">MAR 24, 2026</span>
            <span className="hero__ticker-title">Unveiling Custom Generative AI Solutions for Enterprise</span>
          </div>
          <div className="hero__ticker-item">
            <span className="hero__ticker-date">MAR 18, 2026</span>
            <span className="hero__ticker-title">Accelerating Cloud-Native Architectures on GCP</span>
          </div>
          <div className="hero__ticker-item">
            <span className="hero__ticker-date">MAR 10, 2026</span>
            <span className="hero__ticker-title">The Future of AI & Intelligent Data Ecosystems</span>
          </div>
        </div>
        <div className="hero__ticker-nav hero__ticker-nav--right">›</div>
      </div>
    </section>
  );
}

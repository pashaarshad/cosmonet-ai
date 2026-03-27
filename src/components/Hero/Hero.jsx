import { heroContent } from '../../data/siteData';
import heroImage from '../../assets/hero-v6.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background AI Face Image — correctly loaded */}
      <div className="hero__bg">
        <img 
          src={heroImage} 
          alt="" 
          className="hero__bg-image" 
          aria-hidden="true"
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
            <a href="#contact" className="hero__btn-yellow">
              {heroContent.cta}
            </a>
          </div>
        </div>
      </div>

      {/* News ticker */}
      <div className="hero__ticker">
        <div className="hero__ticker-nav hero__ticker-nav--left">‹</div>
        <div className="hero__ticker-inner">
          <div className="hero__ticker-item">
            <span className="hero__ticker-date">MAR 15, 2026</span>
            <span className="hero__ticker-title">How Generative AI is Redefining Enterprise Software</span>
          </div>
          <div className="hero__ticker-item">
            <span className="hero__ticker-date">MAR 08, 2026</span>
            <span className="hero__ticker-title">Building Scalable Data Pipelines with AWS</span>
          </div>
          <div className="hero__ticker-item">
            <span className="hero__ticker-date">FEB 28, 2026</span>
            <span className="hero__ticker-title">The CTO's Guide to Intelligent Automation</span>
          </div>
        </div>
        <div className="hero__ticker-nav hero__ticker-nav--right">›</div>
      </div>
    </section>
  );
}

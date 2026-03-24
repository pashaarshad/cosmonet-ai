import { heroContent } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
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

      <div className="hero__ticker">
        <div className="hero__ticker-nav hero__ticker-nav--left">‹</div>
        <div className="hero__ticker-inner container">
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
            <span className="hero!!ticker-title">The CTO's Guide to Intelligent Automation</span>
          </div>
        </div>
        <div className="hero__ticker-nav hero__ticker-nav--right">›</div>
      </div>
    </section>
  );
}

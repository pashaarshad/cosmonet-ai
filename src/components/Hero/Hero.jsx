import heroImage from '../../assets/hero-v7.png';
import { FiChevronRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Premium V7 Background image and overlays */}
      <div className="hero__bg">
        <img src={heroImage} alt="Premium Abstract Art" className="hero__bg-image" draggable="false" />
        <div className="hero__bg-vignette"></div>
        <div className="hero__bg-blur"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text-center">
          <div className="hero__badge">
            <span className="hero__badge-pulse"></span>
            Cosmonet AI — Engineering the Future
          </div>
          
          <h1 className="hero__title">
            Intelligent Solutions.<br />
            <span className="hero__title-gradient">Infinite Possibilities.</span>
          </h1>
          
          <p className="hero__subtitle">
            We architect and deploy enterprise-grade AI, scalable data
            infrastructure, and breakthrough digital products crafted for the modern age.
          </p>
          
          <div className="hero__ctas">
            <a href="#contact" className="hero__cta-primary">
              Start your project
            </a>
            <a href="#services" className="hero__cta-secondary">
              Explore capabilities <FiChevronRight />
            </a>
          </div>
        </div>
      </div>

      {/* Clean elegant bottom ticker/trust bar */}
      <div className="hero__trust">
        <p className="hero__trust-label">Pioneering AI infrastructure for global innovators</p>
        <div className="hero__trust-lines">
          {/* Subtle animated horizontal lines */}
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

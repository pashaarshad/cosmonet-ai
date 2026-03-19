import heroImage from '../../assets/hero-v7.png';
import { FiChevronRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <img src={heroImage} alt="Premium Abstract Art" className="hero__bg-image" draggable="false" />
        <div className="hero__bg-vignette"></div>
        <div className="hero__bg-blur"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text-center">
          <h1 className="hero__title">
            Engineering the Future with AI<br />
            <span className="hero__title-gradient" style={{ display: 'block', fontSize: '0.65em', marginTop: '16px' }}>
              Your Data. Our Intelligent Technology.
            </span>
          </h1>
          
          <p className="hero__subtitle" style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 600, marginBottom: '16px' }}>
            Build. Automate. Transform.
          </p>

          <p className="hero__subtitle">
            Where technology evolves at breakneck speed, Cosmonet AI stands at the forefront.
          </p>
          
          <div className="hero__ctas">
            <a href="#services" className="hero__cta-primary">
              Explore Our Services
            </a>
            <a href="#contact" className="hero__cta-secondary">
              Start Your AI Journey <FiChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

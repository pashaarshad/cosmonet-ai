import heroIllustration from '../../assets/hero-illustration.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-effects">
        <div className="hero__code-overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title">
            Engineering the{' '}
            <span className="accent-white">Future</span> with{' '}
            <span className="accent-white">AI</span>
          </h1>
          <p className="hero__subtitle">Fostering Innovation and Creativity</p>
          <p className="hero__desc">
            Cosmonet AI stands at the forefront of Artificial Intelligence Solutions,
            delivering enterprise-grade Machine Learning, Custom Software Development,
            and Generative AI solutions that transform businesses globally.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn hero__btn-primary">
              Let's discuss your project
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={heroIllustration}
            alt="AI technology team illustration"
            className="hero__illustration"
          />
        </div>
      </div>

      {/* News ticker strip at bottom */}
      <div className="hero__ticker">
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
            <span className="hero__ticker-title">The CTO's Guide to Intelligent Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

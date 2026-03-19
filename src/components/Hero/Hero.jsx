import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-effects">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__grid-lines"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__badge">Next-Gen AI Solutions</span>
          <h1 className="hero__title">
            Engineering the{' '}
            <span className="accent-orange">Future</span> with{' '}
            <span className="accent-teal">AI</span>
          </h1>
          <p className="hero__subtitle">Your Data — Our Intelligent Technology</p>
          <p className="hero__tagline">
            <span>Build.</span> <span>Automate.</span> <span>Transform.</span>
          </p>
          <p className="hero__desc">
            Where technology evolves at breakneck speed, Cosmonet AI stands at the forefront,
            delivering Artificial Intelligence Solutions and enterprise-grade Machine Learning Solutions.
          </p>
          <div className="hero__ctas">
            <a href="#services" className="btn btn-primary">
              Explore Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Start Your AI Journey
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__orbit">
            <div className="hero__orbit-ring hero__orbit-ring--1"></div>
            <div className="hero__orbit-ring hero__orbit-ring--2"></div>
            <div className="hero__orbit-ring hero__orbit-ring--3"></div>
            <div className="hero__orbit-dot hero__orbit-dot--1"></div>
            <div className="hero__orbit-dot hero__orbit-dot--2"></div>
            <div className="hero__orbit-dot hero__orbit-dot--3"></div>
            <div className="hero__logo-circle">
              <img src="/logo.png" alt="Cosmonet AI" className="hero__logo-img" onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="hero__logo-fallback">C<span style="color:var(--accent-orange)">AI</span></span>';
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

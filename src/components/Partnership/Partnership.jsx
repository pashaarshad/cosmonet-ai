import { partnerTypes } from '../../data/siteData';
import { FiCheckCircle } from 'react-icons/fi';
import './Partnership.css';

export default function Partnership() {
  return (
    <section id="partnership" className="partnership section-padding">
      <div className="container">
        <div className="partnership__content" data-aos="fade-up">
          <span className="section-label section-label--light">Partnerships</span>
          <h2 className="section-heading section-heading--light partnership__title">
            Partnering with <span className="accent-orange">Cosmonet AI</span>
          </h2>
          <p className="section-body section-body--light">
            Your Strategic AI & Technology Partner. Partnering with Cosmonet AI means gaining access to
            deep technical expertise in Generative AI Development and a collaborative innovation ecosystem.
          </p>
          <h3 className="partnership__subtitle">We work with:</h3>
          <ul className="partnership__list">
            {partnerTypes.map((type, i) => (
              <li key={i} className="partnership__list-item" data-aos="fade-up" data-aos-delay={i * 80}>
                <FiCheckCircle className="partnership__check" />
                <span>{type}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-secondary partnership__cta">
            Become a Partner
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

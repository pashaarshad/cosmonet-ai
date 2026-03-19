import { partnerTypes } from '../../data/siteData';
import { FiCheckCircle } from 'react-icons/fi';
import partnerIllustration from '../../assets/partnership-illustration.png';
import './Partnership.css';

export default function Partnership() {
  return (
    <section id="partnership" className="partnership section-padding">
      <div className="container">
        <div className="partnership__layout">
          <div className="partnership__content" data-aos="fade-up">
            <span className="section-label">Partnerships</span>
            <h2 className="section-heading partnership__title">
              Partnering with <span className="accent-orange">Cosmonet AI</span>
            </h2>
            <p className="section-body">
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
            <a href="#contact" className="btn partnership__cta">
              Become a Partner →
            </a>
          </div>
          <div className="partnership__visual" data-aos="fade-up" data-aos-delay="150">
            <img src={partnerIllustration} alt="Partnership illustration" className="partnership__illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

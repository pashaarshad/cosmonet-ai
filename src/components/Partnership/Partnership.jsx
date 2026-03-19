import { FiCheck } from 'react-icons/fi';
import './Partnership.css';

const partners = [
  "Startups building AI products",
  "Enterprises modernizing legacy platforms",
  "Technology companies scaling digital platforms",
  "Organizations adopting AI and automation"
];

export default function Partnership() {
  return (
    <section id="partnership" className="partnership section-padding">
      <div className="container">
        <span className="section-label">Partnering with Cosmonet AI</span>
        <h2 className="section-heading partnership__title" data-aos="fade-up">
          Your Strategic AI & Technology Partner
        </h2>

        <div className="partnership__layout">
          <div className="partnership__content" data-aos="fade-right">
            <p className="section-body" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '32px' }}>
              Partnering with Cosmonet AI means gaining access to deep technical expertise and a collaborative innovation ecosystem.
            </p>
            
            <h3 className="partnership__subtitle">We work with:</h3>
            <ul className="partnership__list">
              {partners.map((p, i) => (
                <li key={i} className="partnership__list-item" data-aos="fade-up" data-aos-delay={i * 100}>
                  <FiCheck className="partnership__check" /> {p}
                </li>
              ))}
            </ul>

            <a href="#contact" className="partnership__cta">
               Schedule a Consultation
            </a>
          </div>

          <div className="partnership__visual" data-aos="fade-left">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="partnership__illustration" 
                  loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

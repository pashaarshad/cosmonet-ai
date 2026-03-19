import { expertiseItems } from '../../data/siteData';
import { FiCheck } from 'react-icons/fi';
import './Expertise.css';

export default function Expertise() {
  return (
    <section id="expertise" className="expertise section-padding">
      <div className="container">
        <span className="section-label">What's Our Expertise</span>
        <h2 className="section-heading section-heading--light expertise__title" data-aos="fade-up">
          Core Technology <span className="accent-teal">Stack</span>
        </h2>
        <p className="section-body section-body--light" data-aos="fade-up" data-aos-delay="100">
          From Artificial Intelligence and Machine Learning solutions to cloud-native software development,
          our team transforms complex ideas into high-performance digital products. We bridge the gap between
          visionary concepts and production-ready reality through deep technical expertise.
        </p>
        <div className="expertise__grid" data-aos="fade-up" data-aos-delay="200">
          {expertiseItems.map((item, i) => (
            <div key={i} className="expertise__item">
              <span className="expertise__icon"><FiCheck /></span>
              <span className="expertise__text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

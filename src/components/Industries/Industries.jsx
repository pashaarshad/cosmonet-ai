import { industriesData } from '../../data/siteData';
import { FiCpu, FiDollarSign, FiHeart, FiFileText, FiSun, FiShoppingCart } from 'react-icons/fi';
import './Industries.css';

const iconMap = {
  cpu: FiCpu, dollar: FiDollarSign, heart: FiHeart,
  fileCheck: FiFileText, lightbulb: FiSun, shoppingCart: FiShoppingCart,
};

export default function Industries() {
  return (
    <section id="industries" className="industries section-padding">
      <div className="container">
        <span className="section-label">Industries We Serve</span>
        <h2 className="section-heading industries__title" data-aos="fade-up">
          Driving <span className="accent-teal">Innovation</span> Across Sectors
        </h2>
        <p className="section-body" data-aos="fade-up" data-aos-delay="100">
          From fintech enterprises leveraging AI for real-time fraud detection, to healthcare providers deploying
          machine learning for predictive patient outcomes, Cosmonet AI delivers both the strategic vision and
          advanced technical execution required to succeed.
        </p>
        <div className="industries__grid">
          {industriesData.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <div key={i} className="industry-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="industry-card__icon"><Icon /></div>
                <span className="industry-card__name">{ind.name}</span>
              </div>
            );
          })}
        </div>
        <p className="industries__footer" data-aos="fade-up">
          By combining enterprise-grade AI architectures, scalable data platforms, and agile product engineering,
          we go beyond traditional development — building intelligent, self-evolving systems powered by
          Artificial Intelligence, Machine Learning, and Data Intelligence.
        </p>
      </div>
    </section>
  );
}

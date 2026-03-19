import { FiCpu, FiDollarSign, FiHeart, FiShield, FiSun, FiShoppingCart } from 'react-icons/fi';
import './Industries.css';

const industriesData = [
  { icon: <FiCpu />, name: 'Automation' },
  { icon: <FiDollarSign />, name: 'Fintech' },
  { icon: <FiHeart />, name: 'Healthcare' },
  { icon: <FiShield />, name: 'Insurance' },
  { icon: <FiSun />, name: 'Digital Innovation' },
  { icon: <FiShoppingCart />, name: 'E-Commerce' } // Added logical 6th
];

export default function Industries() {
  return (
    <section id="industries" className="industries section-padding">
      <div className="container">
        <span className="section-label">Where We Apply It</span>
        <h2 className="section-heading industries__title" data-aos="fade-up">
          Industries we serve
        </h2>

        <p className="section-body" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          From a fintech enterprise leveraging AI for real-time fraud detection, to a healthcare provider deploying machine learning for predictive patient outcomes, or a legacy organization transforming with intelligent automation and cloud-native AI platforms, Cosmonet AI delivers both the strategic vision and advanced technical execution required to succeed.
        </p>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '40px', color: 'var(--text-primary)' }} data-aos="fade-up">A snapshot of the industries we serve</h3>

        <div className="industries__grid">
          {industriesData.map((ind, i) => (
            <div className="industry-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="industry-card__icon">{ind.icon}</div>
              <h4 className="industry-card__name">{ind.name}</h4>
            </div>
          ))}
        </div>

        <p className="industries__footer" data-aos="fade-up">
          By combining enterprise-grade AI architectures, scalable data platforms, and agile product engineering, we go beyond traditional development. We build intelligent, self-evolving systems powered by Artificial Intelligence, Machine Learning, and Data Intelligence, creating the digital backbone for next-generation enterprises.
        </p>
      </div>
    </section>
  );
}

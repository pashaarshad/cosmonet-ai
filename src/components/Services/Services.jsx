import { servicesData } from '../../data/siteData';
import { FiBriefcase, FiCode, FiShield, FiRefreshCw, FiZap, FiSettings, FiUsers, FiHeadphones } from 'react-icons/fi';
import './Services.css';

const iconMap = {
  brain: FiBriefcase,
  code: FiCode,
  shield: FiShield,
  transform: FiRefreshCw,
  rocket: FiZap,
  gear: FiSettings,
  users: FiUsers,
  support: FiHeadphones,
};

export default function Services() {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services__header" data-aos="fade-up">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading services__title">
            Our <span className="accent-teal">Services</span>
          </h2>
          <p className="section-body">
            Empower your business with Artificial Intelligence Solutions from a leading AI Development Company
            delivering AI Product Development and Machine Learning Solutions. We bring together Custom Software
            Development, Generative AI Development, and Enterprise AI Solutions to create smart, scalable systems.
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={i} className="service-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <a href="#contact" className="service-card__link">
                  Learn More <span>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

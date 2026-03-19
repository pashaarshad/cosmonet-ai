import { FiDatabase, FiSmartphone, FiShield, FiTrendingUp, FiTarget, FiCode, FiUsers, FiLifeBuoy, FiArrowRight } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  { icon: <FiDatabase />, title: 'AI & Data', desc: 'Leverage artificial intelligence, machine learning, and data engineering to unlock actionable insights and build smart systems.' },
  { icon: <FiSmartphone />, title: 'Application Development', desc: 'Build scalable, enterprise-grade web and mobile applications tailored to your business needs.' },
  { icon: <FiShield />, title: 'Cyber Security', desc: 'Protect your digital assets with comprehensive threat detection, compliance, and penetration testing.' },
  { icon: <FiTrendingUp />, title: 'Digital Transformation', desc: 'Modernize legacy systems and accelerate business growth through intelligent cloud migration and automation.' },
  { icon: <FiTarget />, title: 'MVP Services', desc: 'Quickly prototype and launch market-ready Minimum Viable Products to validate concepts efficiently.' },
  { icon: <FiCode />, title: 'Software Engineering', desc: 'End-to-end custom software architecture and development utilizing modern frameworks and best practices.' },
  { icon: <FiUsers />, title: 'Staff Augmentation', desc: 'Scale your technical team on-demand with our vetted, elite software engineers and data scientists.' },
  { icon: <FiLifeBuoy />, title: 'Support Services', desc: 'Continuous maintenance, optimization, and dedicated support to keep your systems running flawlessly.' }
];

export default function Services() {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <span className="section-label">What We Do</span>
        <h2 className="section-heading services__title" data-aos="fade-up">Our services</h2>
        <p className="section-body" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '800px', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Empower your business with Artificial Intelligence Solutions from a leading AI Development Company delivering AI Product Development and Machine Learning Solutions. We bring together Custom Software Development, Generative AI Development, and Enterprise AI Solutions to create smart, scalable systems that feel practical and easy to use ensuring that businesses innovate faster, automate everyday processes, and see real, measurable results.
        </p>

        <div className="services__grid">
          {servicesData.map((s, i) => (
            <div className="service-card" key={i} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <a href="#contact" className="service-card__link">
                Learn More <FiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

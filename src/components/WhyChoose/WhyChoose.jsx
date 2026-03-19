import { whyChooseData } from '../../data/siteData';
import { FiZap, FiAward, FiLayers, FiTarget, FiTrendingUp } from 'react-icons/fi';
import './WhyChoose.css';

const iconMap = { zap: FiZap, award: FiAward, layers: FiLayers, target: FiTarget, trendUp: FiTrendingUp };

export default function WhyChoose() {
  return (
    <section id="why-us" className="why-choose section-padding">
      <div className="container">
        <span className="section-label">Why Choose Cosmonet AI</span>
        <h2 className="section-heading why-choose__title" data-aos="fade-up">
          Technology Expertise That Drives <span className="accent-teal">Real Results</span>
        </h2>
        <div className="why-choose__grid">
          {whyChooseData.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={i} className="why-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="why-card__icon"><Icon /></div>
                <div className="why-card__content">
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

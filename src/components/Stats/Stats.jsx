import { statsData } from '../../data/siteData';
import { useCountUp } from '../../hooks/useAnimations';
import './Stats.css';

function StatCard({ number, suffix, label }) {
  const { count, ref } = useCountUp(number);
  return (
    <div className="stat-card" ref={ref} data-aos="fade-up">
      <span className="stat-card__number">{count}{suffix}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="stats section-padding">
      <div className="container">
        <span className="section-label">Our Impact</span>
        <h2 className="section-heading stats__title" data-aos="fade-up">
          Successfully Working With
        </h2>
        <div className="stats__grid">
          {statsData.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

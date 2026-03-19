import './Stats.css';

const statData = [
  { number: '50+', label: 'Years of combined technology leadership' },
  { number: '150+', label: 'AI & digital transformation projects delivered' },
  { number: '25+', label: 'Technology specialists and engineers' },
  { number: '100%', label: 'Commitment to scalable, secure architecture' },
];

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats__header">
          <h2 className="section-heading stats__title" data-aos="fade-up">
            Successfully working with
          </h2>
        </div>
        <div className="stats__grid">
          {statData.map((stat, i) => (
            <div className="stat-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="stat-card__number">{stat.number}</span>
              <p className="stat-card__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

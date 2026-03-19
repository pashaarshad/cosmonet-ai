import { FiZap, FiSettings, FiLayers, FiTarget, FiBox } from 'react-icons/fi';
import './WhyChoose.css';

const reasons = [
  { icon: <FiZap />, title: 'AI-First Innovation', desc: 'We build solutions around Artificial Intelligence, Machine Learning, and advanced data models.' },
  { icon: <FiSettings />, title: 'Engineering Excellence', desc: 'Our team applies modern software engineering frameworks, agile methodologies, and DevOps pipelines.' },
  { icon: <FiLayers />, title: 'Scalable Architecture', desc: 'We design systems that are secure, cloud-ready, and built for enterprise scale.' },
  { icon: <FiTarget />, title: 'Business-Focused Technology', desc: 'Every solution is designed to solve real business challenges and deliver measurable impact.' },
  { icon: <FiBox />, title: 'Future-Ready Solutions', desc: 'We develop products that evolve with AI, automation, and next-generation technologies.' }
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="why-choose section-padding">
      <div className="container">
        <span className="section-label">Why Choose Cosmonet AI</span>
        <h2 className="section-heading why-choose__title" data-aos="fade-up">
          Technology Expertise That Drives <span className="accent-teal">Real Results</span>
        </h2>

        <div className="why-choose__grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
               <div className="why-card__icon">{r.icon}</div>
               <div>
                 <h3 className="why-card__title">{r.title}</h3>
                 <p className="why-card__desc">{r.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

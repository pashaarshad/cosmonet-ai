import { FiCheckCircle } from 'react-icons/fi';
import './Expertise.css';

const techStack = [
  "Artificial Intelligence & Machine Learning",
  "Generative AI & Large Language Models",
  "Agentic AI Systems",
  "AI-Powered Data Analytics",
  "Cloud Architecture (AWS, Azure, GCP)",
  "Full-stack Software Engineering",
  "API Engineering & Microservices",
  "DevOps & CI/CD automation",
  "Enterprise Integrations"
];

export default function Expertise() {
  return (
    <section id="tech-stack" className="expertise section-padding">
      <div className="container">
        <span className="section-label">Core Capabilities</span>
        <h2 className="section-heading expertise__title" data-aos="fade-up">
          What’s our Expertise
        </h2>
        
        <p className="section-body expertise__description" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '900px', marginBottom: '40px', fontSize: '1.2rem', lineHeight: 1.7 }}>
          From Artificial Intelligence and Machine Learning solutions to cloud-native software development, our team transforms complex ideas into high-performance digital products. We bridge the gap between visionary concepts and production-ready reality through a unique combination of deep technical expertise and industry-specific mastery.
        </p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }} data-aos="fade-up" data-aos-delay="150">
          Core Technology Stack
        </h3>

        <div className="expertise__grid">
          {techStack.map((tech, i) => (
            <div className="expertise__item" key={i} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="expertise__icon">
                <FiCheckCircle />
              </div>
              <span className="expertise__text">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

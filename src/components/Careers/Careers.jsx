import { FiMapPin } from 'react-icons/fi';
import './Careers.css';

const jobs = [
  { title: "Senior AI Engineer (LLM & GenAI)", type: "Full-Time", location: "San Francisco / Remote" },
  { title: "Machine Learning Solutions Architect", type: "Full-Time", location: "Remote" },
  { title: "Enterprise Database Engineer", type: "Full-Time", location: "New York / Remote" }
];

export default function Careers() {
  return (
    <section id="careers" className="careers section-padding">
      <div className="container">
        <span className="section-label">Careers</span>
        <h2 className="section-heading careers__title" data-aos="fade-up">
          Build the Future with Cosmonet AI
        </h2>

        <div className="careers__layout">
          <div className="careers__content" data-aos="fade-right">
            <p className="section-body" style={{ fontSize: '1.2rem' }}>
              We are always looking for curious minds, innovative thinkers, and passionate engineers to join our growing team. 
              Join us and help shape the future of AI-powered technology.
            </p>
            
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
              View Open Positions
            </a>
          </div>

          <div className="careers__jobs" data-aos="fade-left">
            {jobs.map((job, i) => (
              <div className="job-card" key={i}>
                <div>
                  <h3 className="job-card__title">{job.title}</h3>
                  <div className="job-card__meta">
                    <span className="job-card__location"><FiMapPin /> {job.location}</span>
                    <span className="job-card__type">{job.type}</span>
                  </div>
                </div>
                <button className="job-card__apply">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

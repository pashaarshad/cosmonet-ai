import { jobOpenings } from '../../data/siteData';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import './Careers.css';

export default function Careers() {
  return (
    <section id="careers" className="careers section-padding">
      <div className="container">
        <div className="careers__layout">
          <div className="careers__text" data-aos="fade-up">
            <span className="section-label section-label--dark">Join Our Team</span>
            <h2 className="section-heading section-heading--dark careers__title">
              Build the <span className="accent-teal">Future</span> with Cosmonet AI
            </h2>
            <p className="section-body section-body--dark">
              We are always looking for curious minds, innovative thinkers, and passionate engineers
              to join our growing team. Join us and help shape the future of AI-powered technology.
            </p>
            <a href="#contact" className="btn btn-primary careers__cta">
              View Open Positions <FiArrowRight />
            </a>
          </div>

          <div className="careers__jobs" data-aos="fade-up" data-aos-delay="150">
            {jobOpenings.map((job, i) => (
              <div key={i} className="job-card">
                <div className="job-card__info">
                  <h3 className="job-card__title">{job.title}</h3>
                  <div className="job-card__meta">
                    <span className="job-card__location"><FiMapPin /> {job.location}</span>
                    <span className="job-card__type">{job.type}</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-outline job-card__apply">Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

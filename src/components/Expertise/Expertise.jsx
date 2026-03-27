import { expertiseSections } from '../../data/siteData';
import { FiCheckCircle } from 'react-icons/fi';
import './Expertise.css';

export default function Expertise() {
  return (
    <section id="expertise" className="expertise section-padding">
      <div className="container">
        {/* Banner Section provided by user */}
        <header className="expertise__header">
          <span className="section-label">Banner</span>
          <h1 className="section-heading section-heading--light">
            Powering Innovation with a <span className="brand-orange-text">Future-Ready Core Tech Stack</span>
          </h1>
          <p className="section-body section-body--light">
            Build smarter, scale faster, and innovate confidently with our AI-driven technology ecosystem. 
            From Artificial Intelligence Solutions to cloud-native architectures, our stack is engineered 
            to deliver performance, flexibility, and intelligence at every layer.
          </p>
          <div className="expertise__header-cta">
            <a href="#contact" className="btn btn-primary">
              Explore Our Capabilities
            </a>
          </div>
        </header>

        {/* Technical Ecosystem Cards */}
        <div className="expertise__grid" data-aos="fade-up">
          {expertiseSections.map((section, idx) => (
            <div key={idx} className="expertise__card">
              <div className="expertise__card-content">
                <h3 className="expertise__card-title">{section.title}</h3>
                <p className="expertise__card-text">{section.content}</p>
                <ul className="expertise__bullets">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="expertise__bullet">
                      <FiCheckCircle className="expertise__bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

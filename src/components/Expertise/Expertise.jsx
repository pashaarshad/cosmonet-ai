import { expertiseSections } from '../../data/siteData';
import { FiCheckCircle } from 'react-icons/fi';
import './Expertise.css';

export default function Expertise() {
  return (
    <section id="expertise" className="expertise section-padding">
      <div className="container">
        <header className="expertise__header">
          <span className="section-label">Core Technology Stack</span>
          <h2 className="section-heading section-heading--light">
            Powering Innovation with a <span className="accent-teal">Future-Ready Core</span>
          </h2>
          <p className="section-body section-body--light">
            Build smarter, scale faster, and innovate confidently with our AI-driven technology ecosystem. 
            From Artificial Intelligence Solutions to cloud-native architectures, our stack is engineered 
            to deliver performance and intelligence at every layer.
          </p>
        </header>

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

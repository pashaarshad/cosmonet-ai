import aboutImage from '../../assets/about-v7.png';
import { FiArrowRight } from 'react-icons/fi';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about__layout">
          {/* Left: Text Content */}
          <div className="about__content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading about__title" data-aos="fade-up">
              Intelligent Solutions for the <br />
              <span className="about__title-gradient">Next Generation</span> of Digital Enterprises.
            </h2>
            <p className="section-body about__body" data-aos="fade-up" data-aos-delay="100">
              At Cosmonet AI, we design and develop AI-powered platforms, intelligent software products, and enterprise technology solutions
              that help businesses scale faster and innovate smarter. We understand that true transformation is not just about adopting new
              tools, but about fundamentally reshaping how businesses operate to drive measurable, long-term outcomes. Our mission is to
              propel your enterprise forward by delivering bespoke AI solutions that address your most complex challenges while ensuring
              you remain competitive in an increasingly AI-first global economy.
            </p>
            
            <div className="about__cta" data-aos="fade-up" data-aos-delay="200">
               <a href="#contact" className="btn btn-primary">
                 Discover our methodology <FiArrowRight />
               </a>
            </div>
          </div>
          
          {/* Right: Premium Logo-colored Image & Floating Tech Card */}
          <div className="about__visual" data-aos="fade-left" data-aos-delay="300">
            <div className="about__image-wrapper">
               <img src={aboutImage} alt="Cosmonet AI Composition" className="about__image" draggable="false" />
               <div className="about__floating-card">
                 <div className="about__floating-icon"></div>
                 <div className="about__floating-text">
                   <strong>AI Engineering</strong>
                   <span>Precision at Scale</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

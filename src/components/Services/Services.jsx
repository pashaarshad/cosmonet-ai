import { useState, useEffect, useCallback } from 'react';
import { FiBriefcase, FiCode, FiShield, FiRefreshCw, FiZap, FiBox, FiLayers, FiUsers, FiHeadphones, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Services.css';
import heroImg from '../../assets/hero-illustration.png'; // Using as fallback for all images

const services = [
  { icon: FiBriefcase, title: "AI & Data", desc: "Leverage artificial intelligence, machine learning, and data engineering to unlock actionable insights and build smart systems.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", tags: ["Machine Learning", "NLP", "Data Engineering"] },
  { icon: FiCode, title: "Application Development", desc: "Build scalable, enterprise-grade web and mobile applications tailored to your business needs.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", tags: ["Web Apps", "Mobile", "Enterprise"] },
  { icon: FiShield, title: "Cyber Security", desc: "Protect your digital assets with comprehensive threat detection, compliance, and penetration testing.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", tags: ["Threat Detection", "Compliance", "Pen Testing"] },
  { icon: FiRefreshCw, title: "Digital Transformation", desc: "Modernize legacy systems and accelerate business growth through intelligent cloud migration and automation.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", tags: ["Cloud Migration", "Automation", "Modernization"] },
  { icon: FiBox, title: "MVP Services", desc: "Rapidly prototype, validate, and launch minimum viable products to test market fit.", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop", tags: ["Prototyping", "Validation", "Launch"] },
  { icon: FiLayers, title: "Software Engineering", desc: "End-to-end full-stack engineering with modern frameworks, APIs, and microservices architecture.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", tags: ["Full-Stack", "APIs", "Microservices"] },
  { icon: FiUsers, title: "Staff Augmentation", desc: "Scale your engineering teams with dedicated specialists in AI, cloud, and software development.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", tags: ["Dedicated Teams", "Scaling", "Specialists"] },
  { icon: FiHeadphones, title: "Support Services", desc: "Continuous DevOps, CI/CD automation, maintenance, and operational support for your platforms.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", tags: ["DevOps", "CI/CD", "Maintenance"] },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % services.length);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + services.length) % services.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    // Smooth progress bar logic natively
    const duration = 5000;
    const interval = 50; 
    const step = (interval / duration) * 100;
    
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + step;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, next, activeIndex]);

  const active = services[activeIndex];
  const Icon = active.icon;

  return (
    <section id="services" className="services-v2">
      <div className="container">
        {/* Header */}
        <div className="services-v2__header" data-aos="fade-up">
          <span className="services-v2__header-label">What We Do</span>
          <h2 className="services-v2__title">Our Services</h2>
          <p className="services-v2__desc">
            Empower your business with cutting-edge technology solutions from a leading AI development company.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="slider-main" data-aos="fade-up" data-aos-delay="100">
          <div 
            className="slider-box"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="slider-wrapper">
              <div className="slider-image-cont">
                <img key={`img-${activeIndex}`} src={active.image} alt={active.title} style={{ animation: 'fadeIn 0.5s ease-out' }} />
                <div className="slider-image-overlay"></div>
                <div className="slider-badge">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
              </div>

              <div key={`content-${activeIndex}`} className="slider-content" style={{ animation: 'slideIn 0.5s ease-out' }}>
                <div className="slider-icon-box">
                  <Icon />
                </div>
                <h3 className="slider-title">{active.title}</h3>
                <p className="slider-desc">{active.desc}</p>
                <div className="slider-tags">
                  {active.tags.map((tag, idx) => (
                    <span key={idx} className="slider-tag">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="slider-link">
                  Get Started <FiChevronRight />
                </a>
              </div>
            </div>

            <button onClick={prev} className="slider-arrow slider-arrow--left" aria-label="Previous">
              <FiChevronLeft />
            </button>
            <button onClick={next} className="slider-arrow slider-arrow--right" aria-label="Next">
              <FiChevronRight />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="slider-progress">
            {services.map((_, i) => (
              <button 
                key={i} 
                className="progress-dot"
                style={{ width: i === activeIndex ? '40px' : '16px' }}
                onClick={() => goTo(i)}
                aria-label={`Go to service ${i + 1}`}
              >
                {i === activeIndex && (
                  <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="services-thumbs" data-aos="fade-up" data-aos-delay="200">
          {services.map((svc, i) => {
            const TIcon = svc.icon;
            return (
              <button 
                key={i} 
                className={`thumb-btn ${i === activeIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
              >
                <TIcon className="thumb-icon" />
                <span className="thumb-label">{svc.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
      `}} />
    </section>
  );
}

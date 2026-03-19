import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact__header" data-aos="fade-up">
          <span className="section-label">Contact Us</span>
          <h2 className="contact__main-title">
            Let's Build Something Intelligent
          </h2>
          <p className="contact__subtitle">
            Have an idea, product vision, or digital transformation initiative? Connect with our experts to explore how Cosmonet AI can help build scalable, AI-powered technology solutions.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__info" data-aos="fade-right" data-aos-delay="100">
            <h3 className="contact__info-title">Global Headquarters</h3>
            <p className="contact__info-desc">
              Reach out to our AI engineering team directly to begin mapping out your next-generation technology platform.
            </p>
            
            <div className="contact__details">
              <div className="contact__detail-item">
                 <div className="contact__detail-icon"><FiMail /></div>
                 <div>
                   <span className="contact__detail-label">Email Us</span>
                   <span className="contact__detail-value">hello@cosmonet.ai</span>
                 </div>
              </div>
              <div className="contact__detail-item">
                 <div className="contact__detail-icon"><FiPhone /></div>
                 <div>
                   <span className="contact__detail-label">Call Us</span>
                   <span className="contact__detail-value">+1 (555) 987-6543</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper" data-aos="fade-left" data-aos-delay="200">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="contact__field">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="contact__field">
                <label>Company</label>
                <input type="text" placeholder="Your enterprise" required />
              </div>
              <div className="contact__field">
                <label>Initiative</label>
                <textarea placeholder="Tell us about your project or challenges..." required></textarea>
              </div>
              <button type="submit" className="contact__submit btn">
                 Schedule a Consultation <FiSend style={{marginLeft: '8px'}}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

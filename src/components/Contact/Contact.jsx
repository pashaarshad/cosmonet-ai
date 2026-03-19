import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact__header" data-aos="fade-up">
          <span className="section-label section-label--dark">Get in Touch</span>
          <h2 className="contact__main-title">Contact Us</h2>
          <p className="section-body section-body--dark contact__subtitle">
            Ready to transform your business with AI? Let's start a conversation.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__info" data-aos="fade-up">
            <h3 className="contact__info-title">Let's Build Something Intelligent</h3>
            <p className="contact__info-desc">
              Have an idea, product vision, or digital transformation initiative?
              Connect with our experts to explore how Cosmonet AI can help build scalable,
              AI-powered technology solutions.
            </p>
            <div className="contact__details">
              <div className="contact__detail-item">
                <div className="contact__detail-icon"><FiMail /></div>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">hello@cosmonet.ai</span>
                </div>
              </div>
              <div className="contact__detail-item">
                <div className="contact__detail-icon"><FiPhone /></div>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span className="contact__detail-value">+1 (555) 987-6543</span>
                </div>
              </div>
              <div className="contact__detail-item">
                <div className="contact__detail-icon"><FiMapPin /></div>
                <div>
                  <span className="contact__detail-label">Headquarters</span>
                  <span className="contact__detail-value">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="150">
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" placeholder="Tell us about your project..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              Schedule a Consultation <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

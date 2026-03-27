import { useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './ContactPage.css';

const contactDetails = [
  { icon: <FiMail />, label: 'Email', value: 'Info@cosmonet.ai', href: 'mailto:Info@cosmonet.ai' },
  { icon: <FiPhone />, label: 'Phone', value: 'Contact us for details', href: '#' },
  { icon: <FiMapPin />, label: 'Headquarters', value: 'Global Presence', href: '#' },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | Cosmonet AI';
  }, []);

  return (
    <>
      <Navbar />
      <main className="contact-page">

        {/* ── BANNER ── */}
        <section className="contact-banner">
          <div className="contact-banner__bg"></div>
          <div className="container contact-banner__content">
            <span className="contact-banner__label">Get In Touch</span>
            <h1 className="contact-banner__title">
              Every Big Solution Starts<br />
              with a <span className="contact-banner__accent">Small Conversation.</span>
            </h1>
            <p className="contact-banner__sub">What's holding you back from sharing your idea?</p>
            <div className="contact-banner__ctas">
              <a href="tel:+1555987654" className="contact-banner__cta contact-banner__cta--primary">Request a Call Back</a>
              <a href="mailto:Info@cosmonet.ai" className="contact-banner__cta contact-banner__cta--outline">Email Us Directly</a>
            </div>
          </div>
        </section>

        {/* ── CONTACT BODY ── */}
        <section className="contact-body">
          <div className="container">

            <div className="contact-intro">
              <span className="section-label">Connect With Us</span>
              <h2 className="contact-intro__heading">
                Connect with Cosmonet AI and explore how our <strong>AI Development Company</strong> can help you build impactful, future-ready solutions.
              </h2>
              <p className="contact-intro__sub">We ensure to assist you from concept to execution.</p>
            </div>

            <div className="contact-layout">

              {/* Left: Details */}
              <aside className="contact-details">
                <h3 className="contact-details__heading">Reach Us Directly</h3>
                <div className="contact-details__list">
                  {contactDetails.map((d, i) => (
                    <a key={i} href={d.href} className="contact-details__item">
                      <span className="contact-details__icon">{d.icon}</span>
                      <div>
                        <span className="contact-details__label">{d.label}</span>
                        <span className="contact-details__val">{d.value}</span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="contact-details__why">
                  <h4>Why Cosmonet AI?</h4>
                  <ul>
                    <li>✓ AI-first engineering approach</li>
                    <li>✓ End-to-end product development</li>
                    <li>✓ Global delivery, local insights</li>
                    <li>✓ Enterprise-grade security & scalability</li>
                  </ul>
                </div>
              </aside>

              {/* Right: Form */}
              <div className="contact-form-wrap">
                <h3 className="contact-form__heading">Send Us a Message</h3>
                <p className="contact-form__sub">Fill out the form and we'll connect with you shortly.</p>
                <form className="contact-form">
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Name *</label>
                      <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="contact-form__field">
                      <label>Email *</label>
                      <input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label>Subject</label>
                    <input type="text" placeholder="Project inquiry" />
                  </div>
                  <div className="contact-form__field">
                    <label>Message *</label>
                    <textarea rows={6} placeholder="Tell us about your project..." required></textarea>
                  </div>
                  <button type="submit" className="contact-form__submit">
                    <FiSend /> Schedule a Consultation
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft, FiMail, FiSend } from 'react-icons/fi';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

const coreValues = [
  { title: 'Innovation First', desc: 'We\'re always pushing the envelope with Artificial Intelligence Solutions and emerging technologies.' },
  { title: 'Engineering Excellence', desc: 'Precision, performance, and scalability are the hallmarks of our Custom Software Development.' },
  { title: 'Customer-Centric Thinking', desc: 'Every solution is built to address real-world business problems.' },
  { title: 'Integrity & Transparency', desc: 'We foster trust by communicating openly and adhering to ethical standards.' },
  { title: 'Continuous Learning', desc: 'We\'re always on top of the newest advancements in machine learning and the wider world of AI.' },
];

const impactStats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '20+', label: 'Global Clients' },
  { number: '10+', label: 'Industries Served' },
  { number: '25+', label: 'Technology Experts' },
  { number: '100%', label: 'Focus on Scalable AI Solutions' },
];

const globalImpact = [
  { icon: '🌍', label: 'Global clients across continents' },
  { icon: '🏭', label: 'Multi-industry technology expertise' },
  { icon: '🤖', label: 'Scalable AI-driven solutions' },
  { icon: '🚀', label: 'Proven enterprise delivery models' },
  { icon: '🤝', label: 'Cross-border collaboration excellence' },
  { icon: '📈', label: 'Consistent measurable business outcomes' },
];

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We begin by understanding business requirements and mapping out the plan.' },
  { step: '02', title: 'Design & Architecture', desc: 'We create scalable system designs and AI frameworks.' },
  { step: '03', title: 'Development & Integration', desc: 'We build & execute AI Product Development and cloud-native solutions.' },
  { step: '04', title: 'Testing & Optimization', desc: 'We ensure performance, security, and scalability.' },
  { step: '05', title: 'Deployment & Support', desc: 'Continuous monitoring and improvement.' },
];

const capabilities = [
  { num: '01', title: 'AI & Data', desc: 'Advanced Machine Learning Solutions, predictive analytics, and AI model development.' },
  { num: '02', title: 'Application Development', desc: 'Custom Software Development and SaaS product engineering.' },
  { num: '03', title: 'Cloud Engineering', desc: 'Robust cloud-native application development and cloud migration services.' },
  { num: '04', title: 'Automation', desc: 'Intelligent automation powered by AI-driven business solutions.' },
  { num: '05', title: 'Data Engineering', desc: 'End-to-end data pipeline development and analytics platforms.' },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Cosmonet AI';
  }, []);

  return (
    <>
      <Navbar />
      <main className="about-page">

        {/* ── BANNER ── */}
        <section className="about-banner">
          <div className="about-banner__overlay"></div>
          <div className="container about-banner__content">
            <span className="about-banner__label">Who We Are</span>
            <h1 className="about-banner__title">
              Redefining Opportunities<br />
              with <span className="about-banner__accent">Smart Technology</span>
            </h1>
            <p className="about-banner__subtitle">
              Engineering the future through Artificial Intelligence, data, and expansive digital ecosystems.
            </p>
            <a href="#about-story" className="about-banner__cta">
              Discover Our Story
            </a>
          </div>
          <div className="about-banner__scroll-hint">↓</div>
        </section>

        {/* ── WHO ARE WE ── */}
        <section id="about-story" className="about-section about-section--white">
          <div className="container">
            <span className="section-label">Who Are We?</span>
            <div className="about-who__grid">
              <div className="about-who__text">
                <p>Cosmonet AI stands at the forefront of innovation, delivering cutting-edge <strong>Artificial Intelligence Solutions</strong> powered by sophisticated algorithms, scalable architectures, and intuitive data-driven intelligence. We combine cutting-edge machine learning solutions with novel engineering to create agile, future-ready digital ecosystems.</p>
                <p>Our journey is rooted in solving complex challenges using <strong>Machine Learning Solutions</strong>, <strong>Generative AI Development</strong>, and cloud-native engineering—transforming ideas into real-world digital success stories.</p>
                <p>At Cosmonet AI, we don't just imagine revolution, but we engineer outcomes. We're an <strong>AI Development Company</strong> dedicated to crafting powerful Artificial Intelligence Solutions, bespoke software platforms, and data-driven environments. Our goal? To fuel growth, enhance performance, and ensure tangible business success.</p>
              </div>
              <div className="about-who__tagline">
                <div className="about-who__tagline-card">
                  <span className="about-who__tagline-icon">🧠</span>
                  <p>"We don't just imagine revolution — we engineer outcomes."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="about-section about-section--dark">
          <div className="container">
            <div className="about-vm__grid">
              <div className="about-vm__card">
                <div className="about-vm__icon">🎯</div>
                <h2 className="about-vm__label">Vision</h2>
                <h3 className="about-vm__title">To Become a Global Leader in Intelligent Technology</h3>
                <p>Our goal is to redefine the landscape of <strong>Enterprise AI Solutions</strong>. We do this by building smart systems that effortlessly blend into the daily workings of a business. The goal is to make organizations smarter, faster, and more agile.</p>
              </div>
              <div className="about-vm__card">
                <div className="about-vm__icon">🚀</div>
                <h2 className="about-vm__label">Mission</h2>
                <h3 className="about-vm__title">Transforming Businesses Through AI and Innovation</h3>
                <p>We empower organizations with <strong>AI Product Development</strong>, Generative AI Development, and data-driven platforms that drive innovation, automation, and measurable growth. We connect complex technology with practical business results through future-ready solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="about-section about-section--white">
          <div className="container">
            <span className="section-label">Our Core Values</span>
            <h2 className="section-heading about-section-heading">What Drives Us Forward</h2>
            <div className="about-values__grid">
              {coreValues.map((v, i) => (
                <div key={i} className="about-values__card">
                  <div className="about-values__num">{String(i+1).padStart(2,'0')}</div>
                  <h3 className="about-values__title">{v.title}</h3>
                  <p className="about-values__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACT STATS ── */}
        <section className="about-section about-section--dark about-stats">
          <div className="container">
            <span className="section-label about-section-label--light">Our Impact in Numbers</span>
            <h2 className="section-heading about-section-heading--light">Numbers That Speak for Themselves</h2>
            <div className="about-stats__grid">
              {impactStats.map((s, i) => (
                <div key={i} className="about-stats__item">
                  <span className="about-stats__number">{s.number}</span>
                  <span className="about-stats__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GLOBAL IMPACT ── */}
        <section className="about-section about-section--white">
          <div className="container">
            <span className="section-label">Our Global Impact</span>
            <h2 className="section-heading about-section-heading">Engineering Intelligence Without Boundaries</h2>
            <p className="about-global__sub">We are a Global Enterprise — Delivering Intelligent Solutions Across Industries and Geographies</p>
            <p className="about-global__body">
              At Cosmonet AI, our footprint extends far beyond borders. We have partnered with companies across the globe, delivering high-impact <strong>Artificial Intelligence Solutions</strong>, Machine Learning Solutions, and Custom Software Development services tailored to diverse industry needs. Our global delivery model enables us to build Enterprise AI Solutions that are adaptable, future-ready, and designed to create measurable impact—no matter where our clients operate.
            </p>
            <div className="about-global__grid">
              {globalImpact.map((item, i) => (
                <div key={i} className="about-global__card">
                  <span className="about-global__icon">{item.icon}</span>
                  <p className="about-global__label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="about-section about-section--dark">
          <div className="container">
            <span className="section-label about-section-label--light">Team at Work</span>
            <h2 className="section-heading about-section-heading--light">People Behind the Innovation</h2>
            <div className="about-team__intro">
              <p>At Cosmonet AI, our strength lies in a team that brings together distinct expertise and rich industry experience across AI, data engineering, and advanced software development. Our experts are not just skilled — they are problem-solvers, system thinkers, and innovative drivers who translate complex ideas into scalable, real-world solutions.</p>
              <p>What sets our team apart is their capability to combine technical depth with business context. They don't just build technology — our team works to architect intelligent ecosystems that deliver quantifiable impact.</p>
              <p>It is this collective passion, curiosity, and commitment to excellence that makes Cosmonet AI what it is today and what it aspires to become tomorrow: a leader in <strong>Artificial Intelligence Solutions</strong> and next-generation digital innovation.</p>
            </div>
            <div className="about-team__placeholder">
              <div className="about-team__avatar">👤</div>
              <div className="about-team__avatar">👤</div>
              <div className="about-team__avatar">👤</div>
              <div className="about-team__avatar">👤</div>
            </div>
            <p className="about-team__note">Interested in featuring your team? Share photos and designations with us to showcase your leadership here, including LinkedIn profiles for enhanced SEO impact.</p>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="about-section about-section--white">
          <div className="container">
            <span className="section-label">How We Work</span>
            <h2 className="section-heading about-section-heading">Our Collaborative Approach</h2>
            <p className="about-process__intro">We use a structured, flexible approach to provide <strong>Artificial Intelligence Solutions</strong> and Custom Software Development services.</p>
            <div className="about-process__steps">
              {processSteps.map((step, i) => (
                <div key={i} className="about-process__step">
                  <div className="about-process__step-num">{step.step}</div>
                  <div className="about-process__step-content">
                    <h3 className="about-process__step-title">{step.title}</h3>
                    <p className="about-process__step-desc">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && <div className="about-process__connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="about-section about-section--dark">
          <div className="container">
            <span className="section-label about-section-label--light">Capabilities & Expertise</span>
            <h2 className="section-heading about-section-heading--light">What We Excel At</h2>
            <div className="about-caps__grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="about-caps__card">
                  <span className="about-caps__num">{cap.num}</span>
                  <h3 className="about-caps__title">{cap.title}</h3>
                  <p className="about-caps__desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INQUIRY FORM ── */}
        <section className="about-section about-section--white about-inquiry">
          <div className="container">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-heading about-section-heading">Let's Build Something Intelligent Together</h2>
            <p className="about-inquiry__sub">Have an idea or looking to implement Artificial Intelligence Solutions? Fill out the form with your details, we will connect with you shortly.</p>
            <form className="about-inquiry__form">
              <div className="about-inquiry__row">
                <div className="about-inquiry__field">
                  <label>Name *</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="about-inquiry__field">
                  <label>Email *</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="about-inquiry__field">
                <label>Subject</label>
                <input type="text" placeholder="Project inquiry" />
              </div>
              <div className="about-inquiry__field">
                <label>Message *</label>
                <textarea rows={5} placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="about-inquiry__submit">
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

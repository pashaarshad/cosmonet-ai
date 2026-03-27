import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CareersPage.css';

const roles = [
  { num: '01', title: 'AI / Machine Learning Engineer', icon: '🤖', tags: ['PyTorch', 'LLMs', 'MLOps'] },
  { num: '02', title: 'Full-Stack Developer', icon: '💻', tags: ['React', 'Node.js', 'TypeScript'] },
  { num: '03', title: 'Data Engineer', icon: '📊', tags: ['Spark', 'Kafka', 'Python'] },
  { num: '04', title: 'Cloud & DevOps Specialist', icon: '☁️', tags: ['AWS', 'Kubernetes', 'Terraform'] },
  { num: '05', title: 'Product Engineer', icon: '🚀', tags: ['Architecture', 'APIs', 'Microservices'] },
];

const perks = [
  { icon: '🏠', label: 'Collaborative Workspaces' },
  { icon: '⚡', label: 'Hackathons & Innovation Sprints' },
  { icon: '🧳', label: 'Team Offsites & Tech Meetups' },
  { icon: '📚', label: 'Learning Sessions on Emerging Technologies' },
];

const workWith = [
  'Create cutting-edge AI & data-driven products',
  'Explore Generative AI Development and real-world use cases',
  'Join Agile teams with end-to-end ownership',
  'Discover a culture of continuous learning and experimentation',
  'Grab opportunities to contribute to Enterprise AI Solutions',
];

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers | Cosmonet AI';
  }, []);

  return (
    <>
      <Navbar />
      <main className="careers-page">

        {/* ── BANNER ── */}
        <section className="careers-banner">
          <div className="careers-banner__bg"></div>
          <div className="container careers-banner__content">
            <span className="careers-banner__label">Join Our Team</span>
            <h1 className="careers-banner__title">
              Want to build something on<br />
              <span className="careers-banner__accent">What Future Runs On?</span>
            </h1>
            <p className="careers-banner__sub">Not just a Job. A chance to use your creativity and intelligence.</p>
            <p className="careers-banner__desc">Join the enthusiastic team that enjoys ownership. Join, learn and lead the team where every code contributes to success.</p>
            <a href="#open-roles" className="careers-banner__cta">Explore Your Space Here</a>
          </div>
          <div className="careers-banner__scroll">↓</div>
        </section>

        {/* ── BODY INTRO ── */}
        <section className="careers-section careers-section--white">
          <div className="container">
            <div className="careers-intro">
              <div className="careers-intro__text">
                <span className="section-label">Why Cosmonet AI?</span>
                <p>True Talent is scarce and so are opportunities. At Cosmonet AI we are not just hiring talent, but we are building a team of forward thinkers, builders and innovators who are working towards shaping the digital future. We are all set to make our global footprints — are you?</p>
              </div>
              <div className="careers-intro__work">
                <h2 className="careers-intro__work-title">Work with us to</h2>
                <ul className="careers-work__list">
                  {workWith.map((item, i) => (
                    <li key={i} className="careers-work__item">
                      <span className="careers-work__check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── LIFE AT COSMONET ── */}
        <section className="careers-section careers-section--dark">
          <div className="container">
            <span className="section-label careers-label--light">Life at Cosmonet AI</span>
            <h2 className="careers-section-heading--light">Life at Cosmonet AI is More<br />Than Just Work</h2>
            <div className="careers-perks__grid">
              {perks.map((p, i) => (
                <div key={i} className="careers-perk__card">
                  <span className="careers-perk__icon">{p.icon}</span>
                  <span className="careers-perk__label">{p.label}</span>
                </div>
              ))}
            </div>
            <div className="careers-carousel__placeholder">
              <p className="careers-carousel__note">📸 Team photos carousel — Share your team images to feature here for a vibrant, authentic workplace showcase.</p>
            </div>
          </div>
        </section>

        {/* ── OPEN ROLES ── */}
        <section id="open-roles" className="careers-section careers-section--white">
          <div className="container">
            <span className="section-label">Open Positions</span>
            <h2 className="careers-section-heading">
              Find Your Fit
            </h2>
            <p className="careers-roles__intro">Because Rome Was Not Built In A Day — and neither are great careers. Find your calling and make your mark.</p>
            <div className="careers-roles__grid">
              {roles.map((role, i) => (
                <div key={i} className="careers-role__card">
                  <div className="careers-role__top">
                    <span className="careers-role__num">{role.num}</span>
                    <span className="careers-role__icon">{role.icon}</span>
                  </div>
                  <h3 className="careers-role__title">{role.title}</h3>
                  <div className="careers-role__tags">
                    {role.tags.map((tag) => (
                      <span key={tag} className="careers-role__tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#apply" className="careers-role__btn">View JD & Apply →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="careers-cta" id="apply">
          <div className="container">
            <div className="careers-cta__card">
              <h2 className="careers-cta__title">Ready to Make a Real Impact?</h2>
              <p className="careers-cta__sub">If you're ready to work on Artificial Intelligence Solutions that make a real impact, we're ready to meet you.</p>
              <a href="mailto:hello@cosmonet.ai" className="careers-cta__btn">Send Your Application →</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

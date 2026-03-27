import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { blogData } from '../data/siteData';
import './BlogPage.css';

const categories = ['All', 'AI Strategy', 'Cloud', 'Automation', 'Data Engineering', 'Generative AI'];

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Insights | Cosmonet AI';
  }, []);

  return (
    <>
      <Navbar />
      <main className="blog-page">

        {/* ── BANNER ── */}
        <section className="blog-banner">
          <div className="blog-banner__bg"></div>
          <div className="container blog-banner__content">
            <span className="blog-banner__eyebrow">Ideas &nbsp;———&nbsp; Insights &nbsp;———&nbsp; Intelligence</span>
            <h1 className="blog-banner__title">Learning Technology?<br />Here's Where It All Begins.</h1>
            <p className="blog-banner__sub">Explore thought leadership, deep dives, and practical insights from experts at Cosmonet AI. Here's where technology intersects perspective. From Generative AI Development trends to Enterprise AI Solutions strategies, our content is designed to help you understand, adapt, and lead.</p>
            <a href="#insights" className="blog-banner__cta">Explore Insights</a>
          </div>
          <div className="blog-banner__scroll">↓</div>
        </section>

        {/* ── CATEGORY FILTER ── */}
        <section className="blog-filter">
          <div className="container">
            <div className="blog-filter__pills">
              {categories.map((cat) => (
                <button key={cat} className={`blog-filter__pill ${cat === 'All' ? 'blog-filter__pill--active' : ''}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED / BLOG GRID ── */}
        <section id="insights" className="blog-section">
          <div className="container">
            <span className="section-label">Featured Insights</span>
            <h2 className="blog-section__heading">Thought Leadership & Expert Perspectives</h2>
            <div className="blog-grid">
              {blogData.map((post, i) => (
                <article key={i} className={`blog-card ${i === 0 ? 'blog-card--featured' : ''}`}>
                  <div className="blog-card__img-wrap">
                    <div className="blog-card__img-placeholder">
                      <span>{post.category === 'AI Strategy' ? '🤖' : post.category === 'Cloud' ? '☁️' : '⚡'}</span>
                    </div>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span className="blog-card__cat">{post.category}</span>
                      <span className="blog-card__date">{post.date}</span>
                    </div>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <a href="#" className="blog-card__read">Read More →</a>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter */}
            <div className="blog-newsletter">
              <div className="blog-newsletter__content">
                <h3 className="blog-newsletter__title">Stay ahead of the curve.</h3>
                <p className="blog-newsletter__sub">Get the latest AI insights and industry updates delivered straight to your inbox.</p>
              </div>
              <form className="blog-newsletter__form">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">Subscribe →</button>
              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

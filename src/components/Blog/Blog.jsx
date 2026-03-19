import { blogData } from '../../data/siteData';
import { FiArrowRight } from 'react-icons/fi';
import './Blog.css';

export default function Blog() {
  return (
    <section id="blog" className="blog section-padding">
      <div className="container">
        <span className="section-label section-label--dark">Insights</span>
        <h2 className="section-heading section-heading--dark blog__title" data-aos="fade-up">
          Insights <span className="accent-teal">Here!</span>
        </h2>
        <p className="section-body section-body--dark" data-aos="fade-up" data-aos-delay="100">
          Looking to explore Artificial Intelligence Solutions and insights from a leading AI Development Company?
          Dive into our expert perspectives on AI Product Development, Machine Learning Solutions, and Enterprise AI Solutions.
        </p>

        <div className="blog__carousel">
          {blogData.map((post, i) => (
            <article key={i} className="blog-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="blog-card__image">
                <div className="blog-card__placeholder">
                  <span>{post.category}</span>
                </div>
              </div>
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">{post.date}</span>
                  <a href="#" className="blog-card__link">Read More <FiArrowRight /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

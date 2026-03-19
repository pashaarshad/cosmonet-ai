import { FiArrowRight } from 'react-icons/fi';
import './Blog.css';

const blogPosts = [
  { img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop', category: 'Generative AI', title: 'AI Product Development: Building Intelligent Solutions', desc: 'Dive into our expert perspectives on scaling AI products from initial architecture to global enterprise deployment.' },
  { img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop', category: 'Machine Learning', title: 'Machine Learning Solutions for Fintech Data', desc: 'How financial enterprises are leveraging sophisticated ML models for real-time threat analysis and prediction.' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', category: 'Enterprise AI', title: 'Scaling Enterprise AI Solutions', desc: 'A roadmap for organizations looking to adopt AI and automation into their core technology stack securely.' }
];

export default function Blog() {
  return (
    <section id="blog" className="blog section-padding">
      <div className="container">
        <span className="section-label">Insights Here!</span>
        <h2 className="section-heading blog__title" data-aos="fade-up">
          Looking to explore Artificial Intelligence Solutions?
        </h2>
        <p className="section-body" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: '40px' }}>
          Dive into our expert perspectives on AI Product Development, Machine Learning Solutions, and Enterprise AI Solutions from a leading AI Development Company.
        </p>

        <div className="blog__carousel">
          {blogPosts.map((post, i) => (
            <div className="blog-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="blog-card__image">
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.desc}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">Read Article</span>
                  <a href="#" className="blog-card__link">
                    Explore <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

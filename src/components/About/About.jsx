import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <span className="section-label section-label--dark">Who We Are</span>
        <h2 className="section-heading section-heading--dark about__title" data-aos="fade-up">
          Cosmonet <span className="accent-teal">AI</span> – Intelligent Technology Solutions for the Next Generation of Digital Enterprises
        </h2>
        <p className="section-body section-body--dark about__body" data-aos="fade-up" data-aos-delay="100">
          At Cosmonet AI, we design and develop AI-powered platforms, intelligent software products, and enterprise technology solutions
          that help businesses scale faster and innovate smarter. We understand that true transformation is not just about adopting new
          tools, but about fundamentally reshaping how businesses operate to drive measurable, long-term outcomes. Our mission is to
          propel your enterprise forward by delivering bespoke AI solutions that address your most complex challenges while ensuring
          you remain competitive in an increasingly AI-first global economy.
        </p>
      </div>
    </section>
  );
}

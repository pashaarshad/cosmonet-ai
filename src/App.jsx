import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';

// Home page sections
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Expertise from './components/Expertise/Expertise';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Partnership from './components/Partnership/Partnership';
import Blog from './components/Blog/Blog';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { FiArrowUp } from 'react-icons/fi';

// Full pages
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Expertise />
        <Services />
        <Industries />
        <WhyChoose />
        <Partnership />
        <Blog />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/insights" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

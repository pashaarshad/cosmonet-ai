import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';

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

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

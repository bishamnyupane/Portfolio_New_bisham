import React, { useEffect } from 'react';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/projects.css';
import './styles/animations.css';
import './styles/responsive.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
// import Research from './components/Research';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll progress bar update
    const progressBar = document.getElementById('scroll-progress');
    const handleScroll = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${percent}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Draw-on-scroll curved arrows
    const drawArrows = document.querySelectorAll('.draw-arrow');
    const arrowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('drawn');
            arrowObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    drawArrows.forEach((arrow) => arrowObserver.observe(arrow));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      arrowObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Expertise />
        {/* <Research /> */}
        <Connect />
      </main>
      <Footer />
    </>
  );
}

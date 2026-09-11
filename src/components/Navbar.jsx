import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, User, FolderGit2, Briefcase, Cpu, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Initial theme detection
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.className = initialTheme;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', initialTheme === 'dark' ? '#0a0a0a' : '#fafaf8');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.className = nextTheme;
    localStorage.setItem('theme', nextTheme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', nextTheme === 'dark' ? '#0a0a0a' : '#fafaf8');
    }
  };

  useEffect(() => {
    const sections = ['about', 'work', 'experience', 'expertise', 'experiments', 'connect'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'about', href: '#about', id: 'about' },
    { label: 'work', href: '#work', id: 'work' },
    { label: 'experience', href: '#experience', id: 'experience' },
    { label: 'expertise', href: '#expertise', id: 'expertise' },
    // { label: 'experiments', href: '#experiments', id: 'experiments' },
    { label: 'connect', href: '#connect', id: 'connect' }
  ];

  return (
    <>
      {/* Scroll Progress Shimmer Bar */}
      <div id="scroll-progress" aria-hidden="true"></div>

      {/* Desktop Top Navbar */}
      <header className="navbar" role="banner">
        <nav className="navbar-inner" aria-label="Primary navigation">
          <a
            href="#main"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="nav-name"
          >
            {personalInfo.firstName}
            <span className="nav-name-dot"></span>
          </a>

          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}

            {personalInfo.resume && (
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume-link"
                title="View Resume / CV"
              >
                resume
                <ArrowUpRight size={13} />
              </a>
            )}

            <span className="nav-sep" aria-hidden="true"></span>

            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Floating Bottom Dock */}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <div className="mobile-nav-inner">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            <User size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
            <span>about</span>
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className={activeSection === 'work' ? 'active' : ''}
          >
            <FolderGit2 size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
            <span>work</span>
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            <Briefcase size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
            <span>exp</span>
          </a>
          <a
            href="#expertise"
            onClick={(e) => scrollToSection(e, 'expertise')}
            className={activeSection === 'expertise' ? 'active' : ''}
          >
            <Cpu size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
            <span>skills</span>
          </a>
          <a
            href="#connect"
            onClick={(e) => scrollToSection(e, 'connect')}
            className={activeSection === 'connect' ? 'active' : ''}
          >
            <Send size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
            <span>connect</span>
          </a>

          <span className="nav-sep" aria-hidden="true"></span>

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>
      </nav>
    </>
  );
}

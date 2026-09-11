import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="container footer-inner">
        <span className="footer-copy">
          &copy; {currentYear} {personalInfo.name.toLowerCase()} · kathmandu, nepal
        </span>

        <span className="footer-signoff">
          built with react + caffeine
        </span>

        <div className="footer-links">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <Github size={13} />
            <span>github</span>
          </a>
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <Linkedin size={13} />
              <span>linkedin</span>
            </a>
          )}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <Mail size={13} />
            <span>email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

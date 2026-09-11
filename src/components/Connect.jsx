import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks, quote } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Connect() {
  return (
    <>
      {/* Section connector */}
      <div className="section-connector" aria-hidden="true">
        <svg viewBox="0 0 24 48" fill="none">
          <path
            d="M12 0 Q 8 12, 12 24 Q 16 36, 12 48"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      {/* ── QUOTE BANNER ── */}
      <section className="quote-section" aria-label="Personal motto">
        <div className="container">
          <motion.div
            className="quote-inner"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="quote-text">
              {quote.text} <span className="quote-highlight">{quote.highlight}</span>
              <br />
              {quote.suffix}
              <span className="quote-cursor" aria-hidden="true"></span>
            </p>
            <p className="quote-attribution">{quote.attribution}</p>
          </motion.div>
        </div>
      </section>

      {/* Section connector */}
      <div className="section-connector" aria-hidden="true">
        <svg viewBox="0 0 24 48" fill="none">
          <path
            d="M12 0 Q 16 12, 12 24 Q 8 36, 12 48"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      {/* ── CONNECT SECTION ── */}
      <section id="connect" className="connect-section" aria-label="Connect and contact links">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="connect"
              title="let's connect."
            />
          </motion.div>

          <p className="connect-lead">
            Have an idea, project, opportunity, or just want to talk about software?
          </p>

          <motion.div
            className="connect-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="connect-link"
              aria-label="Send email to Bisham Neupane"
            >
              <span className="connect-icon">
                <Mail />
              </span>
              <span className="connect-info">
                <span className="connect-label">Email</span>
                <span className="connect-handle">{personalInfo.email}</span>
              </span>
              <ArrowUpRight className="connect-arrow" size={18} />
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
              aria-label="GitHub profile of Bisham Neupane"
            >
              <span className="connect-icon">
                <Github />
              </span>
              <span className="connect-info">
                <span className="connect-label">GitHub</span>
                <span className="connect-handle">bishamnyupane</span>
              </span>
              <ArrowUpRight className="connect-arrow" size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
              aria-label="LinkedIn profile of Bisham Neupane"
            >
              <span className="connect-icon">
                <Linkedin />
              </span>
              <span className="connect-info">
                <span className="connect-label">LinkedIn</span>
                <span className="connect-handle">bisham-neupane</span>
              </span>
              <ArrowUpRight className="connect-arrow" size={18} />
            </a>

            {/* Resume / CV */}
            {personalInfo.resume && (
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
                aria-label="Download or view Bisham Neupane's Resume"
              >
                <span className="connect-icon">
                  <FileText />
                </span>
                <span className="connect-info">
                  <span className="connect-label">Resume / CV</span>
                  <span className="connect-handle">Bisham-Neupane-CV.pdf</span>
                </span>
                <ArrowUpRight className="connect-arrow" size={18} />
              </a>
            )}
          </motion.div>

          {/* Annotation "don't be shy — say hi!" */}
          <div className="connect-annotation" aria-hidden="true">
            <svg viewBox="0 0 64 56" className="draw-arrow">
              <path
                d="M60 22 C 44 10, 26 12, 8 26 M8 26 l 11 -7 M8 26 l 12 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
              />
            </svg>
            <span>don't be shy — say hi!</span>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { experiments } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Research() {
  return (
    <>
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

      {/* <section id="experiments" className="experiments-section" aria-label="Experiments and research">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="experiments"
              title="explorations &amp; lab"
              annotationText="beyond standard crud"
              arrowPath="M32 6 C 24 6, 14 10, 8 22 M8 22 l 6 -4 M8 22 l 0 -8"
            />
          </motion.div>

          <div className="experiments-container">
            {experiments.map((exp, idx) => (
              <motion.div
                key={idx}
                className="experiments-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <div className="experiments-header">
                  <h3 className="experiments-title">{exp.title}</h3>
                  <span className="experiments-badge">Research Experiment</span>
                </div>

                <div className="experiments-microcopy">{exp.microcopy}</div>

                <p className="experiments-desc">{exp.description}</p>

                <div className="experiments-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="experiments-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Globe,
  GraduationCap,
  CheckCircle2,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const expLogoMap = {
  janaki: Briefcase,
  animweb: Globe,
  ncit: GraduationCap,
  '💼': Briefcase,
  '🌐': Globe,
  '🏫': GraduationCap
};

export default function Experience() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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

      <section id="experience" className="experience-section" aria-label="Experience and education">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="experience"
              title="the path so far"
              annotationText="the journey ✨"
              arrowPath="M4 4 C 12 10, 22 8, 32 16 M32 16 l -8 -3 M32 16 l -5 6"
            />
          </motion.div>

          <ol className="experience-list" role="list">
            {experience.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.id} className={`exp-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="exp-header"
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-desc-${item.id}`}
                  >
                    <span className="exp-logo" aria-hidden="true">
                      {(() => {
                        const IconComponent = expLogoMap[item.id] || expLogoMap[item.logo];
                        return IconComponent ? (
                          <IconComponent size={20} style={{ color: 'var(--accent)' }} />
                        ) : (
                          item.logo
                        );
                      })()}
                      {item.current && (
                        <span className="exp-current-dot" title="Current role"></span>
                      )}
                    </span>

                    <span className="exp-info">
                      <span className="exp-company">{item.company}</span>
                      <span className="exp-role">{item.role}</span>
                    </span>

                    <span className="exp-dates">
                      <Calendar size={11} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px', opacity: 0.7 }} />
                      {item.period}
                    </span>

                    <ChevronDown className="exp-chevron" />
                  </button>

                  <div
                    id={`exp-desc-${item.id}`}
                    className="exp-details"
                    style={{
                      maxHeight: isOpen ? '400px' : '0',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="exp-details-inner">
                      <p className="exp-desc">{item.description}</p>

                      {item.bullets && item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="exp-bullet">
                          <CheckCircle2 size={13} className="exp-bullet-icon" />
                          <span>{bullet}</span>
                        </div>
                      ))}

                      <p className="exp-dates-mobile">
                        <Calendar size={11} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px', opacity: 0.7 }} />
                        {item.period}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}

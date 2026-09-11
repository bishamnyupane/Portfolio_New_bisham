import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, GraduationCap, Cpu, Sparkles } from 'lucide-react';
import { stats, bentoItems } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const bentoIconMap = {
  '💼': Briefcase,
  '📍': MapPin,
  '🎓': GraduationCap,
  '🧠': Cpu,
  briefcase: Briefcase,
  mapPin: MapPin,
  graduationCap: GraduationCap,
  cpu: Cpu
};

export default function About() {
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

      {/* ── STATS SECTION ── */}
      <section className="stats-section" aria-label="Key highlights">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                {stat.sparkle && <Sparkles size={13} className="stat-sparkle" aria-hidden="true" />}
                <div className="stat-value">
                  {stat.value}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}

            {/* Stats annotation */}
            <div className="stats-annotation" aria-hidden="true">
              <span>pretty cool, right?</span>
              <svg viewBox="0 0 40 32" className="draw-arrow">
                <path
                  d="M4 28 C 8 12, 20 8, 36 6 M36 6 l -8 1 M36 6 l -3 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                />
              </svg>
            </div>
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

      {/* ── BENTO ABOUT ME ── */}
      <section id="about" className="bento-section" aria-label="About Bisham">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="about"
              title="the short version"
              annotationText="psst — keep reading"
              arrowPath="M32 4 C 24 8, 16 6, 4 14 M4 14 l 7 -5 M4 14 l 8 2"
            />
          </motion.div>

          <div className="bento-grid">
            {bentoItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`bento-card ${item.span === 2 ? 'span-2' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="bento-icon-tag" aria-hidden="true">
                  {(() => {
                    const IconComponent = bentoIconMap[item.icon];
                    return IconComponent ? (
                      <IconComponent size={22} style={{ color: 'var(--accent)' }} />
                    ) : (
                      item.icon
                    );
                  })()}
                </div>
                <div className="bento-card-label">{item.label}</div>
                <div className="bento-card-value">{item.value}</div>
                <div className="bento-card-desc">{item.description}</div>
                {item.funFact && (
                  <div className="bento-fun-fact">{item.funFact}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

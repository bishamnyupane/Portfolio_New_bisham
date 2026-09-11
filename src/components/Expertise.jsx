import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database } from 'lucide-react';
import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const skillCategoryIconMap = {
  programming: Code2,
  frontend: Layout,
  backend: Server,
  databasesAndEngineering: Database
};

export default function Expertise() {
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

      <section id="expertise" className="expertise-section" aria-label="Technical stack and skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="expertise"
              title="what i work with"
              annotationText="always learning more"
              arrowPath="M4 8 C 12 4, 22 6, 32 12 M32 12 l -9 -1 M32 12 l -4 7"
            />
          </motion.div>

          <div className="expertise-grid">
            {Object.entries(skills).map(([key, group], idx) => (
              <motion.div
                key={key}
                className="expertise-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="expertise-group-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {(() => {
                    const IconComp = skillCategoryIconMap[key];
                    return IconComp && <IconComp size={13} style={{ color: 'var(--accent)' }} />;
                  })()}
                  <span>{group.title}</span>
                </div>
                <div className="expertise-pills">
                  {group.items.map((skill, sIdx) => (
                    <span key={sIdx} className="expertise-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

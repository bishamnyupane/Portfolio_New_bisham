import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import ProjectItem from './ProjectItem';
import SectionHeading from './SectionHeading';

export default function Projects() {
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

      <section id="work" className="projects-section" aria-label="Selected projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="selected work"
              title="work"
              annotationText="crafted with care ✦"
              arrowPath="M4 8 C 14 4, 24 6, 32 14 M32 14 l -8 -2 M32 14 l -3 8"
            />
          </motion.div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

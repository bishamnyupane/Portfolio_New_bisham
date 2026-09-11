import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';

export default function ProjectItem({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      className="project-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className="project-layout">
        {/* Project Information */}
        <div className="project-info">
          <div className="project-meta-top">
            <span className="project-number">{project.number}</span>
            <span className="project-category">{project.category}</span>
          </div>

          <h3 className="project-title">{project.title}</h3>

          {project.subtitle && (
            <div className="project-subtitle">{project.subtitle}</div>
          )}

          <p className="project-description">{project.description}</p>

          {/* Feature highlights */}
          {project.features && project.features.length > 0 && (
            <ul className="project-features">
              {project.features.map((feature, fIdx) => (
                <li key={fIdx} className="project-feature">
                  <Sparkles size={12} className="project-feature-bullet" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technology stack */}
          <div className="project-tech-list">
            {project.technologies.map((tech, tIdx) => (
              <span key={tIdx} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="project-links">
            {project.demo && project.demo.trim() !== '' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={14} style={{ opacity: 0.8 }} />
                <span>Live Demo</span>
                <ArrowUpRight size={14} className="project-link-arrow" />
              </a>
            )}

            {project.github && project.github.trim() !== '' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={14} style={{ opacity: 0.8 }} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="project-link-arrow" />
              </a>
            )}
          </div>
        </div>

        {/* Project Visual / Screenshot Preview */}
        <div className="project-visual">
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              className="project-img"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="project-visual-fallback" aria-label={`${project.title} concept mockup`}>
              <div className="visual-fallback-header">
                <div className="visual-mock-dots">
                  <span className="visual-mock-dot"></span>
                  <span className="visual-mock-dot"></span>
                  <span className="visual-mock-dot"></span>
                </div>
                <span className="visual-mock-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <FolderGit2 size={12} style={{ color: 'var(--accent)', marginRight: '4px' }} />
                  preview · {project.id}
                </span>
              </div>

              <div className="visual-fallback-body">
                <div className="visual-mock-title">{project.title}</div>
                <div className="visual-mock-subtitle">
                  {project.technologies.slice(0, 3).join(" · ")}
                </div>
              </div>

              <div className="visual-fallback-footer">
                <span>{project.category}</span>
                <span>{project.number} / 04</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

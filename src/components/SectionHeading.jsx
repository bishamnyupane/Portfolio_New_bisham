import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable SectionHeading with optional handwritten annotation and curved arrow
 */
export default function SectionHeading({
  label,
  title,
  annotationText,
  arrowPath = "M4 4 C 12 10, 22 8, 32 16 M32 16 l -8 -3 M32 16 l -5 6"
}) {
  return (
    <div style={{ marginBottom: '8px' }}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">
        {title}
        {annotationText && (
          <span className="section-title-annotation" aria-hidden="true">
            <svg viewBox="0 0 36 30" className="draw-arrow">
              <path
                d={arrowPath}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
              />
            </svg>
            <span>{annotationText}</span>
          </span>
        )}
      </h2>
    </div>
  );
}

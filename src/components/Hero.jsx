import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Send,
  Atom,
  Server,
  Globe,
  Cpu,
  Database,
  Code2,
  GitBranch
} from 'lucide-react';
import { personalInfo, heroStack } from '../data/portfolio';
import { useLocalTime } from '../hooks/useLocalTime';
import AnimatedText from './AnimatedText';

const stackIconMap = {
  atom: Atom,
  server: Server,
  globe: Globe,
  cpu: Cpu,
  database: Database,
  code: Code2,
  'git-branch': GitBranch
};

export default function Hero() {
  const localTime = useLocalTime();
  const [imgError, setImgError] = useState(false);
  const ctaRef = useRef(null);

  // Magnetic hover effect for CTA button
  const handleMouseMove = (e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const strength = 0.22;
    ctaRef.current.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ctaRef.current) return;
    ctaRef.current.style.transform = '';
  };

  return (
    <section className="hero" aria-label="Introduction">
      {/* Ambient gradient orbs */}
      <div className="hero-orbs" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {/* Status Line */}
            {personalInfo.statusText && (
              <motion.div
                className="status-line"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="status-dot"></span>
                <span>{personalInfo.statusText}</span>
              </motion.div>
            )}

            {/* Greeting annotation "hello, i'm 👋" */}
            <motion.div
              className="hero-greeting-annotation"
              aria-hidden="true"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span>hello, i'm 👋</span>
              <svg viewBox="0 0 36 24" className="draw-arrow">
                <path
                  d="M4 6 C 14 6, 24 10, 28 20 M28 20 l -7 -2 M28 20 l -2 -7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                />
              </svg>
            </motion.div>

            {/* Single H1 on the site */}
            <h1 className="hero-name" aria-label={personalInfo.name}>
              <AnimatedText text={personalInfo.name.toLowerCase()} />

              {/* Floating role annotation top-right of name */}
              <span className="hero-name-annotation" aria-hidden="true">
                <span>full stack dev</span>
                <svg viewBox="0 0 36 36" className="draw-arrow">
                  <path
                    d="M30 6 C 24 6, 14 10, 8 22 M8 22 l 6 -4 M8 22 l 0 -8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                  />
                </svg>
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              {personalInfo.tagline || personalInfo.role}
            </motion.p>

            {/* Short Bio: just below the tagline */}
            {personalInfo.shortBio && (
              <motion.p
                className="hero-short-bio"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.42 }}
              >
                {personalInfo.shortBio}
              </motion.p>
            )}

            {/* Location + Live Clock */}
            <motion.p
              className="hero-meta"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={13} style={{ color: 'var(--accent)' }} />
                <span>kathmandu, nepal</span>
              </span>
              <span className="hero-meta-dot">·</span>
              <span id="nepalClock" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={13} style={{ color: 'var(--accent)' }} />
                <span>{localTime}</span>
              </span>
            </motion.p>

            {/* CTA Row */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
            >
              <div
                className="btn-magnetic"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                  ref={ctaRef}
                >
                  <Send size={14} />
                  <span>say hello 👋</span>
                </a>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-email"
                aria-label={`Send email to ${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>

              {/* Annotation "i actually reply" */}
              <span className="hero-annotation" aria-hidden="true">
                <span>i actually reply</span>
                <svg viewBox="0 0 64 56" className="draw-arrow">
                  <path
                    d="M58 6 C 54 30, 30 34, 12 46 M12 46 l 10 -2 M12 46 l 1 -10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                  />
                </svg>
              </span>
            </motion.div>

            {/* Tech Stack Row */}
            <motion.div
              className="stack-row"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
            >
              <span className="stack-label">my stack</span>
              {heroStack.map((item, idx) => {
                const IconComponent = stackIconMap[item.icon];
                return (
                  <span key={idx} className="stack-icon" title={item.name}>
                    {IconComponent && <IconComponent size={14} />}
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* Profile Photo Area */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Floating doodles around photo */}
            <div className="photo-doodles" aria-hidden="true">
              <span className="doodle doodle-star">✦</span>
              <span className="doodle doodle-dot"></span>
              <span className="doodle doodle-circle"></span>
              <span className="doodle doodle-plus">+</span>
              <svg className="doodle doodle-squiggle" width="20" height="10" viewBox="0 0 20 10">
                <path
                  d="M1 5 Q 5 1, 10 5 Q 15 9, 19 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Annotation "that's me" pointing to photo */}
            <div className="hero-photo-annotation" aria-hidden="true">
              <svg viewBox="0 0 36 36" className="draw-arrow">
                <path
                  d="M4 8 C 16 6, 26 12, 28 28 M28 28 l -7 -2 M28 28 l -2 -7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                />
              </svg>
              <span>that's me</span>
            </div>

            {/* Profile Avatar / Image */}
            <div className="hero-photo">
              {!imgError ? (
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} — Full Stack Software Developer`}
                  width="200"
                  height="200"
                  onError={() => setImgError(true)}
                  loading="eager"
                />
              ) : (
                <div className="profile-fallback" aria-label="BN initials avatar">
                  <span>bn</span>
                  <div className="profile-fallback-dot"></div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

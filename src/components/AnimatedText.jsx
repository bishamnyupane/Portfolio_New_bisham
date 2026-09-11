import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText for the hero name:
 * - Staggers letter entrances
 * - Allows each letter to lift up and change color on hover
 */
export default function AnimatedText({ text, className = "" }) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="letter"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

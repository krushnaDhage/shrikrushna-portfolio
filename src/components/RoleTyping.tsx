import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'Java Backend Developer',
  'Spring Boot Architect',
  'Full-Stack Developer',
  'Problem Solver & Builder',
  'Cloud & DevOps Explorer',
  'AI / ML Enthusiast'
];

export const RoleTyping: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center min-h-[36px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="font-mono text-base sm:text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 flex items-center"
        >
          {roles[index]}
          <span className="inline-block w-1.5 h-4 ml-1.5 bg-cyan-400 animate-pulse rounded-sm" />
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

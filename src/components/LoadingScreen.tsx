import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onLoadingComplete, 400);
          }, 200);
          return 100;
        }
        // Smooth progressive increments
        const step = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + step, 100);
      });
    }, 55);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07080d] text-slate-100 selection:bg-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          {/* Monogram & Title */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Shield */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-purple-900/30"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30 blur-sm" />
              <span className="relative font-mono font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                SD
              </span>
            </motion.div>

            {/* Professional Name */}
            <motion.h2
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase mb-2"
            >
              ER. SHRIKRUSHNA DHAGE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs font-mono text-purple-400/80 tracking-widest uppercase mb-8"
            >
              Java Backend & Full-Stack Developer
            </motion.p>

            {/* Progress bar container */}
            <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Percentage & status */}
            <div className="mt-3 flex items-center justify-between w-56 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Initializing
              </span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

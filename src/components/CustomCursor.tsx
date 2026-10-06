import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device is touch-based or has coarse pointer
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch || isCoarse);
    };

    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.interactive-element') ||
          target.getAttribute('role') === 'button'
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render custom cursor on touch devices to ensure optimal usability
  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer subtle follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-purple-500/50 dark:border-purple-400/50 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 24 : 16),
          y: mousePosition.y - (isHoveringInteractive ? 24 : 16),
          width: isHoveringInteractive ? 48 : 32,
          height: isHoveringInteractive ? 48 : 32,
          scale: isHoveringInteractive ? 1.15 : 1,
          backgroundColor: isHoveringInteractive
            ? 'rgba(139, 92, 246, 0.12)'
            : 'rgba(139, 92, 246, 0.04)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      />
      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHoveringInteractive ? 0.6 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 800,
        }}
      />
    </>
  );
};

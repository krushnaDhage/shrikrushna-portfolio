import { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 transition-[width] duration-75"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profile';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#07080d]/85 dark:bg-[#07080d]/85 light:bg-white/85 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200/80 shadow-lg shadow-black/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400 transition-colors">
                <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  SD
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-purple-400 transition-colors">
                  ER. SHRIKRUSHNA DHAGE
                </span>
                <span className="text-[10px] font-mono text-purple-400/80 hidden sm:inline-block">
                  Java & Full-Stack Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-white dark:text-white light:text-slate-950 font-semibold'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 border border-purple-500/40 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs: Theme Switcher & Resume Button */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light theme"
                className="p-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 border border-white/10 dark:border-white/10 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>

              {/* Resume Button */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/30 hover:shadow-purple-700/50 transition-all duration-200 border border-purple-400/30 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 group-hover:rotate-6 transition-transform" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open navigation menu"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 p-4 bg-[#07080d]/95 dark:bg-[#07080d]/95 light:bg-white/95 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-2 pt-2 pb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

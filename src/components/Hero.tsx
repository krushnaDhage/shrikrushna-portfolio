import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Code2, Terminal, Sparkles, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';
import { RoleTyping } from './RoleTyping';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/10 via-indigo-600/10 to-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase">
                SOFTWARE DEVELOPER • PROBLEM SOLVER • BUILDER
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-950 leading-[1.1] mb-4"
            >
              Engineering scalable software.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 block mt-1">
                Building intelligent solutions.
              </span>
            </motion.h1>

            {/* Subheading / Rotating Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 flex flex-wrap items-center gap-x-3 text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium"
            >
              <span className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
                Specializing in:
              </span>
              <RoleTyping />
            </motion.div>

            {/* Professional Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mb-8"
            >
              {profileData.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto"
            >
              {/* Primary: View My Work */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/30 hover:shadow-purple-600/40 transition-all duration-200 border border-purple-400/30 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 border border-white/10 dark:border-white/10 light:border-slate-300 transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              {/* Third subtle option: Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Social Icons Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline-block">
                Profiles:
              </span>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.codechef}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About Section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-slate-500 hover:text-purple-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};

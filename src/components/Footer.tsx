import { Code2, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-[#06070a] dark:bg-[#06070a] light:bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-sm tracking-[0.16em] uppercase text-white dark:text-white light:text-slate-900">
              ER. SHRIKRUSHNA DHAGE
            </span>
            <p className="text-xs font-mono text-purple-400 mt-1">
              Java Backend & Full-Stack Developer
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <a href="#home" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">Experience</a>
            <a href="#achievements" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={profileData.social.codechef}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-orange-400 transition-colors"
            >
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-white/5 dark:border-white/5 light:border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} Er. Shrikrushna Dhage. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Built with passion & code</span>
            <span className="text-purple-400">•</span>
            <span>React + Vite + Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

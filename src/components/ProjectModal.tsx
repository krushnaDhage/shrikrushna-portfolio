import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Server, CheckCircle2, Shield, Layers, HelpCircle, Lightbulb } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d0f19] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 text-slate-100"
        >
          {/* Top Bar with Category, Status, and Close Button */}
          <div className="flex items-start justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  {project.category}
                </span>
                <span
                  className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                    project.status === 'Completed'
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                      : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-purple-400/90 mt-1">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 text-sm text-slate-300">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Project Overview
              </h3>
              <p className="leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-red-300 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-red-400" />
                  Problem Addressed
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                  Engineered Solution
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                Architecture & System Design
              </h3>
              <div className="p-4 rounded-2xl bg-cyan-950/15 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architecture}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-400" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Key Architectural Features
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="px-4 py-2 rounded-xl text-xs font-mono bg-white/5 text-slate-400 border border-white/10">
                  Repo Coming Soon
                </span>
              )}

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-[11px] font-mono text-slate-500">
                  Demo deployed internally / in staging
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

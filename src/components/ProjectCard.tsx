import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between rounded-2xl p-6 bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/20 backdrop-blur-md overflow-hidden"
    >
      {/* Subtle hover gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap relative z-10">
          <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-purple-400">
            {project.category}
          </span>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              project.status === 'Completed'
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 transition-colors tracking-tight mb-1.5 relative z-10">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyan-400/90 mb-3 relative z-10">
          {project.tagline}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4 line-clamp-3 relative z-10">
          {project.description}
        </p>

        {/* Problem Solved Snippet */}
        <div className="mb-4 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200/80 text-xs text-slate-400 relative z-10">
          <strong className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-semibold block mb-0.5">
            Problem Solved:
          </strong>
          <span className="line-clamp-2">{project.problem}</span>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 group-hover:border-purple-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-1 text-slate-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between gap-2 relative z-10">
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[10px] font-mono text-slate-500">Soon</span>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Demo"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

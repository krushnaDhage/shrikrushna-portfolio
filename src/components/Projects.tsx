import { useState } from 'react';
import { Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'All' | 'Backend' | 'Full-Stack' | 'In Progress'>('All');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'In Progress') return project.status === 'In Progress';
    if (filter === 'Backend')
      return (
        project.technologies.includes('Spring Boot') ||
        project.technologies.includes('Java') ||
        project.category.includes('Backend')
      );
    if (filter === 'Full-Stack')
      return project.technologies.includes('React') || project.category.includes('Full-Stack');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Production & System Implementations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Concrete software systems demonstrating Spring Boot backend engineering, transactional integrity, and scalable full-stack applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
            {(['All', 'Backend', 'Full-Stack', 'In Progress'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

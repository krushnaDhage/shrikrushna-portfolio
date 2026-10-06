import { motion } from 'framer-motion';
import { ExternalLink, Code2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useGitHubData } from '../hooks/useGitHubData';

export const GitHubActivity: React.FC = () => {
  const { repos, isUsingFallback } = useGitHubData('krushnaDhage');

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <GithubIcon className="w-3.5 h-3.5" />
              Open Source & Version Control
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
              GitHub Repositories
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Code repositories exploring Java Spring Boot services, database implementations, and full-stack systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isUsingFallback && (
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                Verified Snapshot View
              </span>
            )}

            <a
              href="https://github.com/krushnaDhage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@krushnaDhage on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group rounded-2xl p-6 bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 text-slate-400">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                  {repo.description || 'Repository maintained by Er. Shrikrushna Dhage.'}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-purple-400">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  {repo.language || 'Java'}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors font-medium"
                >
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

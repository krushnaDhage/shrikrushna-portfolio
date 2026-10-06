import { motion } from 'framer-motion';
import { Code2, Terminal, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { codingProfilesData } from '../data/codingProfiles';

const iconComponentMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Terminal,
  Github: GithubIcon
};

export const CodingProfiles: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Competitive Coding & Problem Solving
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            Code. Solve. Improve.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Continuous algorithmic training and system architecture problem solving across industry platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfilesData.map((profile, index) => {
            const IconComponent = iconComponentMap[profile.icon] || Code2;

            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/20 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 flex items-center justify-center text-purple-400 group-hover:text-cyan-400 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-purple-400 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10">
                      @{profile.username}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight mb-1">
                    {profile.platform}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-4">
                    {profile.subtitle}
                  </p>

                  <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200/80 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Problem Areas & Focus
                    </span>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                      {profile.focus}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified Handle
                  </span>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

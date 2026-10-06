import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Impact & Responsibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            Leadership & Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            A demonstrated history of executive departmental leadership, institutional student governance, and competitive technical symposia.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => {
            const isLeadership = item.type === 'Leadership';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Point */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#07080d] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-md shadow-purple-900/40">
                  <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-cyan-400 transition-colors" />
                </div>

                {/* Card Container */}
                <div className="rounded-2xl p-6 bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl hover:border-purple-500/40 transition-all">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-purple-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 text-slate-400">
                        {item.period}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isLeadership
                            ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                            : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2 pt-2 border-t border-white/5 dark:border-white/5 light:border-slate-100">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

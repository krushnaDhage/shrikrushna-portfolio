import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Rigorous engineering coursework covering computer science fundamentals, algorithms, distributed systems, and software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="rounded-2xl p-6 bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    {item.status}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight mb-1">
                  {item.degree}
                </h3>
                <h4 className="text-sm font-semibold text-purple-400 mb-3">
                  {item.institution}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100 space-y-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

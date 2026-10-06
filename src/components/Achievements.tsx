import { motion } from 'framer-motion';
import { Award, Trophy, ShieldCheck, CheckCircle2, Cloud } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { certificationsData } from '../data/certifications';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Milestones & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Verified institutional accomplishments, competitive symposia presentations, and certified enterprise technologies.
          </p>
        </div>

        {/* Featured Certification Banner */}
        <div className="mb-14">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
            <Cloud className="w-4 h-4 text-cyan-400" />
            Verified Enterprise Certification
          </h3>

          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#111322] to-[#0c0e17] border border-cyan-500/30 shadow-xl shadow-cyan-950/20 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                    {cert.issuer} Verified
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Credential Verified
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-red-700 flex items-center justify-center text-white mb-2 shadow-md">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-white">Red Hat OpenShift</span>
                <span className="text-[10px] font-mono text-slate-400">Enterprise Cloud</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-6 flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-400" />
          Key Achievements & Honors
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    {item.category}
                  </span>
                  <Award className="w-4 h-4 text-purple-400" />
                </div>

                <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-cyan-400 mb-3">
                  {item.roleOrContext}
                </p>

                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

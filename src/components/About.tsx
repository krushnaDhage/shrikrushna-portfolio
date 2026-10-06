import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code2, Cpu, Cloud, Sparkles, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Designing resilient software architectures, mastering the Java ecosystem, and bridging systems with intelligent algorithms.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
              {profileData.fullBio.map((paragraph, idx) => (
                <p key={idx} className="tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competency Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5 text-purple-400 font-semibold text-sm">
                  <Server className="w-4 h-4" />
                  <span>Backend Engineering</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                  Architecting robust Spring Boot microservices, Spring Security, and transaction-safe PostgreSQL pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5 text-blue-400 font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack Versatility</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                  Building responsive React interfaces, deterministic client state management, and unified REST contracts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5 text-cyan-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Decision AI & Algorithms</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                  Investigating Multi-Criteria Decision Making (MCDM) algorithms and applied machine learning models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5 text-emerald-400 font-semibold text-sm">
                  <Cloud className="w-4 h-4" />
                  <span>Leadership & Growth</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                  Elected SAIT Secretary and Program Director, fostering teamwork, campus mentorship, and tech symposia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Developer Profile Card */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 bg-[#0c0e17]/90 dark:bg-[#0c0e17]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div>
                  <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    Developer Profile
                  </h3>
                  <p className="text-xs font-mono text-purple-400">Verified Technical Profile</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>

              {/* Core Domains & Competencies Grid */}
              <div className="space-y-3.5 mb-6">
                {profileData.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200/80 transition-all hover:border-purple-500/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                        {area.label}
                      </span>
                      <span className="text-[10px] font-mono text-purple-400 px-2 py-0.5 rounded-md bg-purple-500/10">
                        {area.sublabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-snug">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Institutional Metadata */}
              <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-col space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Walchand College of Engineering, Sangli</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Truthful & Verified Portfolio Information</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

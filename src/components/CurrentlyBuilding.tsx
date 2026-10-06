import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Zap, Server, ShieldCheck, ArrowRight } from 'lucide-react';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container with high-end glassmorphic border and radial glow */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#121422]/90 to-[#090b14]/90 dark:from-[#121422]/90 dark:to-[#090b14]/90 light:from-purple-50/70 light:to-white border border-purple-500/30 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl overflow-hidden">
          
          {/* Ambient inner gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Details & Philosophy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Animated BUILDING Status Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wider uppercase font-semibold">CURRENTLY BUILDING • ACTIVE DEVELOPMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight leading-tight mb-2">
                DevFlow AI
              </h2>
              <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                Enterprise Developer Productivity & Workflow Intelligence Platform
              </p>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-8 max-w-xl">
                A specialized software engineering platform engineered to streamline developer workflows, automate repetitive code lifecycle routines, and synthesize multi-agent intelligence directly into development and review pipelines.
              </p>

              {/* 4 Architectural Highlight Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 w-full mb-8">
                <div className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-1">
                    <Server className="w-4 h-4" />
                    <span>Spring Boot Backend</span>
                  </div>
                  <p className="text-[11px] text-slate-400">High-throughput event streaming & resilient microservices.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>Applied AI Workflows</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Contextual code intelligence, review assistance & automation.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
                    <Workflow className="w-4 h-4" />
                    <span>Pipeline Orchestration</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Deterministic workflow graphs with rollback integrity.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Productivity Core</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Measurably compressing cycle times from commit to verify.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-900/40 transition-colors"
                >
                  <span>Discuss DevFlow AI Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Code & Architecture Simulation Window */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[#090b13] border border-white/10 shadow-2xl p-5 font-mono text-xs text-slate-300"
              >
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-slate-300 font-sans font-medium">devflow-pipeline-worker</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">RUNNING</span>
                </div>

                <div className="space-y-2 leading-relaxed text-[11px]">
                  <div className="text-slate-400">
                    <span className="text-purple-400">$</span> devflow-cli workflow init --model=adaptive
                  </div>
                  <div className="text-slate-500">&gt; Loading Spring Boot event processor...</div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>[OK] Context vector indexing ready (PostgreSQL pgvector)</span>
                  </div>
                  <div className="text-slate-400">
                    <span className="text-cyan-400">&gt; Target:</span> Automated Unit Tests &amp; Edge-Case Synthesizer
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 my-2">
                    <span className="text-purple-300 font-semibold">Workflow Status:</span>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Ast Analysis: 100%</span>
                      <span>Contract Validation: Passed</span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    <span className="text-purple-400">&gt; Pipeline telemetry:</span> Zero latency anomalies recorded.
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-sans">
                  <span>Stack: Java 21 • Spring Boot • AI</span>
                  <span className="text-purple-400 font-mono">v0.4.0-alpha</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

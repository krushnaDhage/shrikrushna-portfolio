import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Container, Shield, Cpu, Activity, GitBranch } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background radial ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Futuristic Concentric Orbit Rings */}
      <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/20 animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-16 rounded-full border border-purple-500/10" />
      <div className="absolute inset-28 rounded-full border border-cyan-500/15 animate-[spin_40s_linear_infinite_reverse]" />

      {/* SVG Circuit Lines & Pulses connecting nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.2" />
          </linearGradient>
        </defs>

        {/* Lines from center to nodes */}
        <line x1="200" y1="200" x2="80" y2="100" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="320" y2="110" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="310" y2="290" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="90" y2="300" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Dynamic Animated Pulse along paths */}
        <circle r="3" fill="#a855f7">
          <animateMotion path="M200,200 L80,100" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#38bdf8">
          <animateMotion path="M200,200 L320,110" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#818cf8">
          <animateMotion path="M200,200 L310,290" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#34d399">
          <animateMotion path="M200,200 L90,300" dur="3.2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Central Core: Spring Boot Architecture Hub */}
      <motion.div
        animate={{ scale: [1, 1.03, 1], rotate: [0, 1, 0, -1, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative z-10 w-36 h-36 rounded-2xl bg-[#0d0f1a]/90 dark:bg-[#0d0f1a]/90 light:bg-white/95 border border-purple-500/40 p-4 flex flex-col items-center justify-center shadow-2xl shadow-purple-900/40 backdrop-blur-xl"
      >
        <div className="absolute -top-3 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[9px] font-mono font-semibold text-purple-300">
          CORE BACKEND
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white mb-2 shadow-inner">
          <Server className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
          Spring Boot
        </span>
        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Active: 200 OK
        </span>
      </motion.div>

      {/* Satellite Node 1: Top-Left - REST & Security */}
      <motion.div
        animate={{ y: [-4, 6, -4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-10 left-4 sm:left-10 z-10 p-2.5 rounded-xl bg-[#0f121d]/90 dark:bg-[#0f121d]/90 light:bg-white/95 border border-blue-500/30 shadow-lg shadow-blue-950/30 backdrop-blur-md flex items-center gap-2"
      >
        <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
          <Shield className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
            Spring Security
          </div>
          <div className="text-[9px] font-mono text-slate-400">JWT & RBAC</div>
        </div>
      </motion.div>

      {/* Satellite Node 2: Top-Right - PostgreSQL / Database */}
      <motion.div
        animate={{ y: [6, -5, 6] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.4 }}
        className="absolute top-12 right-2 sm:right-8 z-10 p-2.5 rounded-xl bg-[#0f121d]/90 dark:bg-[#0f121d]/90 light:bg-white/95 border border-cyan-500/30 shadow-lg shadow-cyan-950/30 backdrop-blur-md flex items-center gap-2"
      >
        <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
            PostgreSQL & JPA
          </div>
          <div className="text-[9px] font-mono text-emerald-400">ACID Transactions</div>
        </div>
      </motion.div>

      {/* Satellite Node 3: Bottom-Right - Docker & Kubernetes */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-14 right-4 sm:right-10 z-10 p-2.5 rounded-xl bg-[#0f121d]/90 dark:bg-[#0f121d]/90 light:bg-white/95 border border-purple-500/30 shadow-lg shadow-purple-950/30 backdrop-blur-md flex items-center gap-2"
      >
        <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
          <Container className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
            Docker & Cloud
          </div>
          <div className="text-[9px] font-mono text-purple-400">Microservice Pods</div>
        </div>
      </motion.div>

      {/* Satellite Node 4: Bottom-Left - AI / ML Logic */}
      <motion.div
        animate={{ y: [4, -6, 4] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.2 }}
        className="absolute bottom-16 left-2 sm:left-8 z-10 p-2.5 rounded-xl bg-[#0f121d]/90 dark:bg-[#0f121d]/90 light:bg-white/95 border border-indigo-500/30 shadow-lg shadow-indigo-950/30 backdrop-blur-md flex items-center gap-2"
      >
        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
            Decision AI / ML
          </div>
          <div className="text-[9px] font-mono text-cyan-400">MCDM Algorithms</div>
        </div>
      </motion.div>

      {/* Floating Code Snippet Card - Highlighting Java Backend Competence */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 sm:-bottom-2 z-20 w-72 sm:w-80 rounded-xl bg-[#0a0c16]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-1 text-slate-300">TransactionController.java</span>
          </div>
          <span className="text-[9px] text-purple-400">Spring Boot 3.x</span>
        </div>
        <pre className="font-mono text-[10px] text-slate-300 leading-relaxed overflow-x-hidden">
          <code>
            <span className="text-purple-400">@PostMapping</span>(
            <span className="text-emerald-300">"/process"</span>){'\n'}
            <span className="text-blue-400">public</span> ResponseEntity&lt;TxnResult&gt; execute({'\n'}
            {'  '}<span className="text-purple-400">@RequestBody</span> TxnRequest req) {'{\n'}
            {'    '}return service.<span className="text-cyan-300">processLedgerTxn</span>(req);{'\n'}
            {'}'}
          </code>
        </pre>
        <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <Activity className="w-3 h-3" /> 99.99% Uptime
          </span>
          <span className="flex items-center gap-1 text-cyan-400">
            <GitBranch className="w-3 h-3" /> main branch
          </span>
        </div>
      </motion.div>
    </div>
  );
};

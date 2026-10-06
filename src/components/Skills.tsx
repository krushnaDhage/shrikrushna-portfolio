import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  Cloud,
  Sparkles,
  Code,
  Flame,
  ShieldCheck,
  Layers,
  Network,
  Boxes,
  FileCode,
  Palette,
  Cpu,
  HardDrive,
  Container,
  Workflow,
  CloudRain,
  GitBranch,
  Brain,
  Activity
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import type { SkillItem } from '../types';

// Map icon name string to Lucide component
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Server,
  Layout,
  Database,
  Cloud,
  Sparkles,
  Code,
  Flame,
  ShieldCheck,
  Layers,
  Network,
  Boxes,
  FileCode,
  Palette,
  Cpu,
  HardDrive,
  Container,
  Workflow,
  CloudRain,
  GitBranch,
  Brain,
  Activity
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Engineering Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Specialized toolkit spanning robust Java microservice engineering, relational data integrity, containerization, and modern frontend systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Server;
            const isSelected = activeTab === idx;

            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border-purple-500 shadow-md shadow-purple-950/40'
                    : 'bg-white/5 dark:bg-white/5 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border-white/10 dark:border-white/10 light:border-slate-200 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-purple-400' : 'text-slate-400'}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="mb-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
          <p className="text-xs sm:text-sm text-purple-300">
            {skillCategories[activeTab].description}
          </p>
          <span className="hidden sm:inline-block text-[11px] font-mono text-purple-400 font-semibold px-2.5 py-1 rounded-md bg-purple-500/10">
            {skillCategories[activeTab].skills.length} Core Technologies
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories[activeTab].skills.map((skill) => {
            const IconComponent = (skill.iconName && iconMap[skill.iconName]) || Code;

            return (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group relative p-5 rounded-2xl bg-[#0c0e17]/80 dark:bg-[#0c0e17]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/20 transition-all cursor-pointer backdrop-blur-md"
              >
                {/* Subtle hover gradient glow inside card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-start justify-between mb-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-center text-purple-400 group-hover:text-cyan-400 group-hover:border-purple-500/40 transition-colors">
                    <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  {skill.tag && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 text-slate-400">
                      {skill.tag}
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 transition-colors mb-1.5">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Hover Info Footer */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-3 rounded-xl bg-white/5 border border-purple-500/30 text-xs font-mono text-slate-300 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Inspecting: <strong className="text-purple-300">{hoveredSkill.name}</strong>
            </span>
            <span className="text-slate-400">{hoveredSkill.description}</span>
          </motion.div>
        )}

      </div>
    </section>
  );
};

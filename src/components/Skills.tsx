import React, { useState } from 'react';
import { Layout, Server, Cloud, Shield } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'devops' | 'architecture'>('all');

  const categories = [
    { id: 'all', label: currentLang === 'id' ? 'Semua Keahlian' : 'All Capabilities', icon: Layout },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend & DB', icon: Server },
    { id: 'devops', label: 'DevOps & Cloud', icon: Cloud },
    { id: 'architecture', label: currentLang === 'id' ? 'Arsitektur & Praktik' : 'Architecture', icon: Shield },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="keahlian" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
              04. {currentLang === 'id' ? 'Keahlian & Ekosistem Teknologi' : 'Core Stack & Engineering Competencies'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {currentLang === 'id'
                ? 'Penguasaan Teknologi Modern Berstandar Industri'
                : 'Production-Grade Mastery Across Modern Stacks'}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {currentLang === 'id'
                ? 'Kombinasi mendalam teknologi client-side interaktif, skalabilitas server-side, dan keandalan cloud deployment.'
                : 'Balanced proficiency in fluid client-side interfaces, distributed backend architectures, and automated cloud delivery.'}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 bg-[#0c1322] border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-[#0f172a] transition-all group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-medium text-blue-400 tabular-nums">
                  {skill.level}%
                </span>
              </div>

              {/* Progress track */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Experience duration indicator (clean unboxed text) */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{currentLang === 'id' ? 'Pengalaman' : 'Experience'}</span>
                <span className="text-slate-400 tabular-nums">{skill.experience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0e1626] to-slate-900 border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              {currentLang === 'id' ? 'Selalu Mengadopsi Standar Rekayasa Terbaru' : 'Continuously Upgrading with Modern Standards'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {currentLang === 'id'
                ? 'Aktif mengikuti perkembangan React 19, TypeScript strict mode, microservices gRPC, dan serverless computing.'
                : 'Actively tracking React 19 RFCs, zero-runtime CSS, edge runtimes, and resilient distributed state sync.'}
            </p>
          </div>
          <a
            href="#kontak"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            {currentLang === 'id' ? 'Diskusikan Kebutuhan Teknis' : 'Discuss Technical Fit'}
          </a>
        </div>

      </div>
    </section>
  );
};

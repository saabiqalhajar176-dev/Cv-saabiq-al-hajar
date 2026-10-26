import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface ExperienceProps {
  currentLang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ currentLang }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="pengalaman" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            02. {currentLang === 'id' ? 'Riwayat Pengalaman Kerja' : 'Work Experience & Trajectory'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'id'
              ? 'Rekam Jejak Kepemimpinan Teknis & Solusi Produksi'
              : 'Proven Track Record in Technical Leadership & Scaled Delivery'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {currentLang === 'id'
              ? 'Pengalaman langsung membangun dan mengoperasikan produk digital berskala tinggi di berbagai fase pertumbuhan.'
              : 'Hands-on experience architecting and shipping mission-critical digital products across fast-paced environments.'}
          </p>
        </div>

        {/* Master-Detail Experience Layout for Desktop & Cards for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Navigation List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`text-left p-4 rounded-xl border transition-all text-xs sm:text-sm group flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-600/10 border-blue-500/60 shadow-md shadow-blue-900/10'
                      : 'bg-[#0d1424]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#0d1424]'
                  }`}
                >
                  <div className="flex flex-col gap-1 pr-2">
                    <span className={`font-bold transition-colors ${isSelected ? 'text-blue-400' : 'text-white group-hover:text-slate-200'}`}>
                      {exp.role[currentLang]}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {exp.company}
                    </span>
                    {/* Clean unboxed metadata (NO PILLS) */}
                    <span className="text-[11px] text-slate-500 font-mono tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Career Dossier */}
          <div className="lg:col-span-8 bg-[#0c1322] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {/* Header Lockup */}
            <div className="border-b border-slate-800 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeExp.role[currentLang]}
                </h3>
                <span className="text-xs text-blue-400 font-medium bg-blue-950/60 border border-blue-800/40 px-2.5 py-1 rounded-md shrink-0 w-fit">
                  {activeExp.employmentType[currentLang]}
                </span>
              </div>

              {/* Clean unboxed metadata with dot separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">{activeExp.company}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {activeExp.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono tabular-nums text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {activeExp.period}
                </span>
              </div>
            </div>

            {/* Executive Summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {activeExp.summary[currentLang]}
            </p>

            {/* Quantified Accomplishments */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>{currentLang === 'id' ? 'Dampak & Pencapaian Kunci' : 'Key Quantified Impact'}</span>
              </h4>
              <ul className="space-y-2.5">
                {activeExp.achievements[currentLang].map((ach, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daily Responsibilities */}
            <div className="mb-6 pt-5 border-t border-slate-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {currentLang === 'id' ? 'Tanggung Jawab Utama' : 'Core Responsibilities'}
              </h4>
              <ul className="space-y-2">
                {activeExp.responsibilities[currentLang].map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                    <span className="text-blue-500 mt-1">▪</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="pt-5 border-t border-slate-800/60">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                {currentLang === 'id' ? 'Teknologi Digunakan:' : 'Technologies Leveraged:'}
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 font-mono">
                {activeExp.technologies.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="text-blue-300/90">{tech}</span>
                    {i < activeExp.technologies.length - 1 && <span className="text-slate-600">/</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

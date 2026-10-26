import React from 'react';
import { ShieldCheck, Zap, Target, Terminal, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const icons = [ShieldCheck, Zap, Target];

  return (
    <section id="tentang" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            01. {currentLang === 'id' ? 'Tentang Diri & Filosofi' : 'About Me & Philosophy'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'id'
              ? 'Menghubungkan Ketajaman Teknis dengan Dampak Bisnis yang Nyata'
              : 'Bridging Technical Precision with Concrete Business Velocity'}
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              {PERSONAL_INFO.longBio[currentLang]}
            </p>

            <p>
              {currentLang === 'id' ? (
                <>
                  Bagi saya, rekayasa perangkat lunak bukan sekadar menulis baris kode yang berfungsi, melainkan membangun 
                  fondasi sistem yang <strong>tahan uji, mudah dipelihara, dan dapat beradaptasi</strong> dengan pertumbuhan pengguna yang cepat. 
                  Saya mendedikasikan waktu untuk memahami domain masalah secara mendalam sebelum memilih arsitektur atau teknologi.
                </>
              ) : (
                <>
                  To me, software engineering is not merely about writing code that compiles—it is about building foundations that are 
                  <strong>resilient, maintainable, and effortlessly adaptable</strong> to surging scale. I dedicate rigor to thoroughly grasping 
                  the underlying problem domain before prescribing tools or patterns.
                </>
              )}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full-Stack & Distributed Systems</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Web Performance & Core Vitals</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cloud & Automated CI/CD Ops</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <Target className="w-4 h-4 text-amber-400 shrink-0" />
                <span>User-Centric Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Engineering Values */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-1">
              {currentLang === 'id' ? 'Prinsip Rekayasa' : 'Engineering Principles'}
            </h3>

            {PERSONAL_INFO.coreValues.map((val, idx) => {
              const Icon = icons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0c1322] border border-slate-800 hover:border-slate-700/80 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                        {val.title[currentLang]}
                      </h4>
                      <p className="text-xs text-slate-400 leading-normal">
                        {val.description[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, FileText, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface HeroProps {
  currentLang: Language;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle ambient lighting gradients in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Natural editorial kicker (NO PILL BOX) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-4">
              <span>{currentLang === 'id' ? 'Rekayasawan Perangkat Lunak' : 'Software Engineer & Architect'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 flex items-center gap-1 font-normal lowercase">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Headline with text-wrap balance and refined clamp typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 [text-wrap:balance]">
              {currentLang === 'id' ? (
                <>
                  Membangun Solusi Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">Berkala Tinggi</span> & Berkinerja Unggul
                </>
              ) : (
                <>
                  Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">Scalable Systems</span> & Fluid Experiences
                </>
              )}
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.shortBio[currentLang]}
            </p>

            {/* Primary & Secondary Action Points */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('portofolio')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-600/25 transition-all group"
              >
                <span>{currentLang === 'id' ? 'Lihat Portofolio' : 'Explore Portfolio'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>{currentLang === 'id' ? 'Ringkasan CV' : 'View Resume'}</span>
              </button>

              <button
                onClick={() => scrollTo('kontak')}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{currentLang === 'id' ? 'Hubungi Langsung' : 'Contact Me'}</span>
              </button>
            </div>

            {/* Quick trust reassurance (unboxed text) */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'id' ? 'Tersedia untuk Pekerjaan Penuh / Konsultasi' : 'Available for Full-time / Consulting'}</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>{currentLang === 'id' ? 'Respon Dalam 24 Jam' : 'Response Within 24h'}</span>
            </div>
          </div>

          {/* Right Column: Visual Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
              
              {!imageError ? (
                <img
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                /* High-fidelity fallback container */
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-3xl font-bold text-blue-400 mb-4 font-display">
                    SA
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-slate-400">{PERSONAL_INFO.title[currentLang]}</p>
                </div>
              )}

              {/* Subtle bottom gradient overlay for editorial elegance */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#080c14]/90 via-[#080c14]/50 to-transparent">
                <p className="text-xs font-semibold text-white tracking-wide">{PERSONAL_INFO.name}</p>
                <p className="text-[11px] text-slate-300">{PERSONAL_INFO.title[currentLang]}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Metric Strip below the split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0e1626]/70 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label[currentLang]}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

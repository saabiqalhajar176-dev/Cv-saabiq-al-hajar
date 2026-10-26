import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  return (
    <section className="py-20 border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            06. {currentLang === 'id' ? 'Rekomendasi & Kolaborasi' : 'Endorsements & Peer Feedback'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'id'
              ? 'Apa Kata Rekan Kerja & Pemimpin Tim'
              : 'Endorsed by Engineering Leads & Product Partners'}
          </h2>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0c1322] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-blue-500/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote[currentLang]}"
                </p>
              </div>

              {/* Attribution (Unboxed metadata with clean typography) */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · <span className="text-blue-400">{t.company}</span>
                  </p>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  {t.context}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

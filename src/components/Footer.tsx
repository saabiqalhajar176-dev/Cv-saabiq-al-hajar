import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-slate-500">
              {PERSONAL_INFO.title[currentLang]} · {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              title="Kirim Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2"
              title="Kembali ke atas"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {currentLang === 'id' ? 'Hak cipta dilindungi undang-undang.' : 'All rights reserved.'}
          </p>

          <p className="flex items-center gap-1.5">
            <span>{currentLang === 'id' ? 'Dibangun dengan presisi menggunakan React & TypeScript' : 'Crafted with precision in React & TypeScript'}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

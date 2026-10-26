import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Language } from '../types/portfolio';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'tentang', 'pengalaman', 'portofolio', 'keahlian', 'kontak'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'tentang', label: currentLang === 'id' ? 'Tentang' : 'About' },
    { id: 'pengalaman', label: currentLang === 'id' ? 'Pengalaman' : 'Experience' },
    { id: 'portofolio', label: currentLang === 'id' ? 'Portofolio' : 'Portfolio' },
    { id: 'keahlian', label: currentLang === 'id' ? 'Keahlian' : 'Skills' },
    { id: 'kontak', label: currentLang === 'id' ? 'Kontak' : 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1, Zone 2, Zone 3 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => scrollTo('hero')}
            className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 text-left group"
          >
            <span>Saabiq Al Hajar</span>
            <span className="block text-[11px] font-normal text-slate-400 group-hover:text-blue-300 transition-colors">
              Software Engineer
            </span>
          </button>

          {/* Zone 2: 4-5 single-line text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                  activeSection === link.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary CTA + language switch */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
              title="Ganti Bahasa / Switch Language"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono uppercase">{currentLang}</span>
            </button>

            {/* Quick Resume View Button */}
            <button
              onClick={onOpenResume}
              className="hidden lg:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => scrollTo('kontak')}
              className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg shadow-sm shadow-blue-600/30 transition-all whitespace-nowrap shrink-0"
            >
              {currentLang === 'id' ? 'Hubungi Saya' : 'Get In Touch'}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0d1424] border border-slate-800 rounded-xl shadow-2xl flex flex-col gap-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-blue-400 font-medium'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 rounded-md"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Bahasa: <strong className="uppercase font-mono">{currentLang}</strong></span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 rounded-md"
              >
                {currentLang === 'id' ? 'Buka CV' : 'View CV'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

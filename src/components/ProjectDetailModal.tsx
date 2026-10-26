import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, CheckCircle, Layers, Lightbulb, TrendingUp } from 'lucide-react';
import { Project, Language } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  currentLang: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, currentLang, onClose }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto flex flex-col focus:outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Sticky Close Header */}
        <div className="sticky top-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1322]/95 backdrop-blur border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{project.categoryLabel[currentLang]}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup jendela modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Media */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-xs">
                {project.title}
              </div>
            )}

            {/* Impact Metric Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#080c14]/90 backdrop-blur border border-slate-700/80 px-4 py-2 rounded-lg flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-white tracking-wide">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-blue-300 font-medium leading-relaxed">
              {project.tagline[currentLang]}
            </p>
          </div>

          {/* Full Narrative Overview */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {currentLang === 'id' ? 'Ringkasan Proyek & Arsitektur' : 'Project Architecture & Scope'}
            </h3>
            <p>{project.fullDescription[currentLang]}</p>
          </div>

          {/* Challenges Solved */}
          <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-900/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>{currentLang === 'id' ? 'Tantangan Teknis yang Dipecahkan' : 'Technical Challenge Overcome'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challengesSolved[currentLang]}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>{currentLang === 'id' ? 'Fitur Utama yang Dibangun' : 'Core Features Delivered'}</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures[currentLang].map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="border-t border-slate-800/80 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>{currentLang === 'id' ? 'Tumpukan Teknologi (Tech Stack)' : 'Technology Stack'}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-slate-800/80 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span>{currentLang === 'id' ? 'Peran:' : 'Role:'}</span>{' '}
              <strong className="text-white">{project.role}</strong>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{currentLang === 'id' ? 'Kunjungi Demo' : 'Live Demo'}</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

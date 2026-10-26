import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, currentLang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto flex flex-col focus:outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Sticky Controls Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1322]/95 backdrop-blur border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Curriculum Vitae
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">{PERSONAL_INFO.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Cetak CV / Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{currentLang === 'id' ? 'Cetak' : 'Print'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Tutup resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 text-slate-200 space-y-8 print:p-0 print:text-black print:bg-white">
          
          {/* Header Section */}
          <div className="border-b border-slate-800 pb-6 print:border-black flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-blue-400 mb-4 print:text-blue-700">
                {PERSONAL_INFO.title[currentLang]}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 print:text-gray-600">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400">{PERSONAL_INFO.email}</a>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <img
                src={PERSONAL_INFO.avatarImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover object-[center_20%] border border-slate-700 print:border-gray-400 shadow-md"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 print:text-black">
              {currentLang === 'id' ? 'Ringkasan Profesional' : 'Professional Summary'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
              {PERSONAL_INFO.longBio[currentLang]}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 print:text-black">
              <Briefcase className="w-4 h-4 text-blue-400 print:text-black" />
              <span>{currentLang === 'id' ? 'Riwayat Pengalaman Kerja' : 'Professional Experience'}</span>
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                      {exp.role[currentLang]} <span className="font-normal text-slate-400 print:text-gray-700">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500 tabular-nums print:text-gray-600">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed print:text-gray-700">
                    {exp.summary[currentLang]}
                  </p>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-400 print:text-gray-700">
                    {exp.achievements[currentLang].map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>

                  <div className="pt-1 text-[11px] font-mono text-slate-400 print:text-gray-600">
                    <strong>Tech:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 border-t border-slate-800/80 pt-6 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 print:text-black">
              <GraduationCap className="w-4 h-4 text-blue-400 print:text-black" />
              <span>{currentLang === 'id' ? 'Pendidikan' : 'Education'}</span>
            </h2>

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    {edu.degree[currentLang]}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 tabular-nums print:text-gray-600">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-gray-700">
                  {edu.institution} · IPK: <span className="font-bold text-emerald-400 print:text-black">{edu.gpa}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-3 border-t border-slate-800/80 pt-6 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 print:text-black">
              <Award className="w-4 h-4 text-blue-400 print:text-black" />
              <span>{currentLang === 'id' ? 'Sertifikasi & Lisensi' : 'Certifications & Accreditations'}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 print:border-gray-300 print:bg-white text-xs">
                  <div className="font-bold text-white print:text-black">{cert.title}</div>
                  <div className="text-[11px] text-slate-400 print:text-gray-600">
                    {cert.issuer} ({cert.year}) · ID: {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Stacks */}
          <div className="border-t border-slate-800/80 pt-6 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 print:text-black">
              <Code2 className="w-4 h-4 text-blue-400 print:text-black" />
              <span>{currentLang === 'id' ? 'Keahlian Inti' : 'Core Proficiencies'}</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded print:border-gray-300 print:text-black"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

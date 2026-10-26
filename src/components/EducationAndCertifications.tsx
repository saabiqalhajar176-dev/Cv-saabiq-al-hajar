import React from 'react';
import { GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface EducationAndCertificationsProps {
  currentLang: Language;
}

export const EducationAndCertifications: React.FC<EducationAndCertificationsProps> = ({ currentLang }) => {
  return (
    <section className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            05. {currentLang === 'id' ? 'Pendidikan & Kredensial' : 'Education & Certifications'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'id'
              ? 'Landasan Akademis & Sertifikasi Berstandar Global'
              : 'Academic Foundations & Globally Recognized Credentials'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {currentLang === 'id'
              ? 'Pondasi ilmu komputer formal diperkuat dengan pengakuan sertifikasi industri cloud dan software engineering terkemuka.'
              : 'A formal Computer Science rigor reinforced with certified validations from global cloud providers.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>{currentLang === 'id' ? 'Pendidikan Formal' : 'Formal Education'}</span>
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0c1322] border border-slate-800 rounded-2xl space-y-4 hover:border-slate-700 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono tabular-nums text-blue-400 font-semibold block mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {edu.degree[currentLang]}
                  </h4>
                  <p className="text-xs font-medium text-slate-400">
                    {edu.institution} · {edu.location}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description[currentLang]}
                </p>

                {edu.gpa && (
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{currentLang === 'id' ? 'Indeks Prestasi Kumulatif (IPK)' : 'Grade Point Average (GPA)'}</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">{edu.gpa}</span>
                  </div>
                )}

                {edu.honors && (
                  <div className="flex items-center gap-2 text-xs text-amber-300/90 bg-amber-950/20 border border-amber-900/30 px-3 py-1.5 rounded-lg">
                    <Award className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    <span>{edu.honors[currentLang]}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>{currentLang === 'id' ? 'Sertifikasi Industri' : 'Industry Certifications'}</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 bg-[#0c1322] border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-blue-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono shrink-0">
                      <span>{cert.year}</span>
                      {cert.credentialId && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-400">{cert.credentialId}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Skills Covered */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-500 text-[11px]">{currentLang === 'id' ? 'Domain:' : 'Domains:'}</span>
                    {cert.skillsCovered.map((item, i) => (
                      <span key={item} className="text-slate-300 font-mono text-[11px]">
                        {item}{i < cert.skillsCovered.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

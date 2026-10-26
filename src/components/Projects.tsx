import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, Language } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  currentLang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: currentLang === 'id' ? 'Semua Proyek' : 'All Projects' },
    { id: 'web', label: currentLang === 'id' ? 'Web App & SaaS' : 'Web & SaaS' },
    { id: 'fullstack', label: currentLang === 'id' ? 'Full-Stack Commerce' : 'Commerce' },
    { id: 'cloud', label: currentLang === 'id' ? 'Cloud & DevOps' : 'Cloud Ops' },
    { id: 'mobile', label: currentLang === 'id' ? 'Aplikasi Mobile' : 'Mobile' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portofolio" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
              03. {currentLang === 'id' ? 'Portofolio Terpilih' : 'Selected Works & Case Studies'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {currentLang === 'id'
                ? 'Arsitektur Nyata yang Menggerakkan Bisnis'
                : 'Engineered for Performance, Reliability & High Retention'}
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented Button Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#0c1322] border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Media Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Impact metric badge overlay */}
                <div className="absolute top-4 left-4 bg-[#080c14]/90 backdrop-blur border border-slate-700/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono font-medium text-white">
                    {project.metrics}
                  </span>
                </div>

                {/* Inspect arrow button in top right */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata (NO PILLS) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-blue-400 font-medium">{project.categoryLabel[currentLang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{project.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.tagline[currentLang]}
                  </p>
                </div>

                {/* Tech stack inline tags */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 font-mono">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < Math.min(3, project.technologies.length - 1) && <span className="text-slate-700">/</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0">
                    {currentLang === 'id' ? 'Detail Kasus →' : 'Case Study →'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectDetailModal
          project={selectedProject}
          currentLang={currentLang}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

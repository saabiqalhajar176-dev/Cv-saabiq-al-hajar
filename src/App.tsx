/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationAndCertifications } from './components/EducationAndCertifications';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Language } from './types/portfolio';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleLang = () => {
    setCurrentLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200 antialiased font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenResume={() => setIsResumeOpen(true)}
          onSelectProject={(id) => {
            const el = document.getElementById('portofolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* About & Engineering Philosophy */}
        <About currentLang={currentLang} />

        {/* Professional Work Experience */}
        <Experience currentLang={currentLang} />

        {/* Selected Portfolio Projects & Case Studies */}
        <Projects currentLang={currentLang} />

        {/* Technical Competencies & Stacks */}
        <Skills currentLang={currentLang} />

        {/* Formal Education & Industry Credentials */}
        <EducationAndCertifications currentLang={currentLang} />

        {/* Peer Feedback & Endorsements */}
        <Testimonials currentLang={currentLang} />

        {/* Direct Contact Channels & Interactive Form */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Resume / CV Modal Dialog */}
      <ResumeModal
        isOpen={isResumeOpen}
        currentLang={currentLang}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

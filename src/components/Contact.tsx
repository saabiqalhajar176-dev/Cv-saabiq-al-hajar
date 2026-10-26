import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, Linkedin, Github, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types/portfolio';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'fullstack',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', projectType: 'fullstack', message: '' });
    }, 1000);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090e18] relative">
      {/* Background soft ambient blur */}
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            07. {currentLang === 'id' ? 'Kontak & Kolaborasi' : 'Initiate Conversation'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'id'
              ? 'Mari Membangun Solusi Luar Biasa Bersama'
              : 'Let’s Build Something Exceptional Together'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {currentLang === 'id'
              ? 'Terbuka untuk peluang rekayasa perangkat lunak full-time, konsultasi arsitektur sistem, maupun proyek lepas berdampak tinggi.'
              : 'Open to full-time senior engineering roles, architectural advisory, and high-impact digital ventures.'}
          </p>
        </div>

        {/* 2-Column Split: Direct Channels vs Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Reach Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 bg-[#0c1322] border border-slate-800 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                {currentLang === 'id' ? 'Email Utama' : 'Direct Email'}
              </span>
              <div className="flex items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-mono text-blue-400 hover:text-blue-300 truncate font-medium"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Salin Email ke Clipboard"
                  aria-label="Salin email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-400 font-medium animate-in fade-in">
                  ✓ {currentLang === 'id' ? 'Email berhasil disalin ke clipboard!' : 'Email copied to clipboard!'}
                </p>
              )}
            </div>

            {/* Quick Contact Points */}
            <div className="p-6 bg-[#0c1322] border border-slate-800 rounded-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                {currentLang === 'id' ? 'Kanal Profesional' : 'Direct Channels'}
              </span>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">WhatsApp Direct</span>
                    <span className="text-[11px] text-slate-400 font-mono">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="text-[11px] text-slate-400">linkedin.com/in/saabiq-al-hajar</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-300" />
                  <div>
                    <span className="text-xs font-bold text-white block">GitHub Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">github.com/saabiqalhajar</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{PERSONAL_INFO.location} · GMT+7 (WIB)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0c1322] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              {currentLang === 'id' ? 'Kirim Pesan Langsung' : 'Send an Inquiry'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {currentLang === 'id'
                ? 'Tuliskan pesan Anda dan saya akan merespon dalam waktu maksimal 1x24 jam kerja.'
                : 'Share your project vision or role inquiry and expect a thoughtful response within 24 hours.'}
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-blue-950/20 border border-blue-900/40 rounded-xl space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {currentLang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Dispatched!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {currentLang === 'id'
                    ? 'Terima kasih telah menghubungi. Notifikasi telah diterima dan saya akan segera menghubungi Anda kembali.'
                    : 'Thank you for reaching out. Your inquiry has been recorded and I will reply shortly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {currentLang === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {currentLang === 'id' ? 'Nama Lengkap' : 'Your Name'} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {currentLang === 'id' ? 'Alamat Email' : 'Email Address'} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {currentLang === 'id' ? 'Tujuan / Topik Diskusi' : 'Discussion Topic'}
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="fullstack">
                      {currentLang === 'id' ? 'Peluang Karir Penuh Waktu (Full-time Hire)' : 'Full-time Engineering Opportunity'}
                    </option>
                    <option value="project">
                      {currentLang === 'id' ? 'Pembangunan Produk Digital / SaaS Baru' : 'New Product Architecture / SaaS'}
                    </option>
                    <option value="consulting">
                      {currentLang === 'id' ? 'Konsultasi Teknis & Optimasi Performa' : 'Technical Advisory & Performance Audit'}
                    </option>
                    <option value="other">
                      {currentLang === 'id' ? 'Pertanyaan Umum / Diskusi Santai' : 'General Inquiry / Casual Coffee Chat'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {currentLang === 'id' ? 'Pesan / Deskripsi Kebutuhan' : 'Message Details'} <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      currentLang === 'id'
                        ? 'Ceritakan tentang peran, proyek, atau masalah teknis yang ingin diselesaikan...'
                        : 'Describe your requirements, timeline, or engineering goals...'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/25 transition-all disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>{currentLang === 'id' ? 'Mengirim Pesan...' : 'Transmitting...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{currentLang === 'id' ? 'Kirim Pesan Sekarang' : 'Transmit Message'}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

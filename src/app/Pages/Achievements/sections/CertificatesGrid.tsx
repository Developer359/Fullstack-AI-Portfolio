import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { achievementsData, achievementsTranslations, Achievement } from '../data/achievementsData';
import { Search, Filter, X, Award, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CertificatesGrid: React.FC = () => {
  const { lang } = usePortfolio();
  const t = achievementsTranslations[lang] || achievementsTranslations.US;

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Selected certificate for lightbox/viewer modal
  const [activeViewerCert, setActiveViewerCert] = useState<Achievement | null>(null);

  // Dynamic lists of types & categories for dropdown population
  const typeOptions = useMemo(() => {
    const list = new Set(achievementsData.map(a => a.type));
    return ['All', ...Array.from(list)];
  }, []);

  const categoryOptions = useMemo(() => {
    const list = new Set(achievementsData.map(a => a.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter computation
  const filteredAchievements = useMemo(() => {
    return achievementsData.filter(ach => {
      const titleText = (ach.title[lang] || ach.title.US).toLowerCase();
      const issuerText = ach.issuer.toLowerCase();
      const credentialText = ach.credentialId.toLowerCase();
      const query = searchQuery.toLowerCase();

      const matchesSearch = 
        titleText.includes(query) || 
        issuerText.includes(query) || 
        credentialText.includes(query);

      const matchesType = selectedType === 'All' || ach.type === selectedType;
      const matchesCategory = selectedCategory === 'All' || ach.category === selectedCategory;

      return matchesSearch && matchesType && matchesCategory;
    });
  }, [searchQuery, selectedType, selectedCategory, lang]);

  // Certificate image generator helper (Virtual Vector Certificate Designer)
  const renderCertificateArt = (ach: Achievement) => {
    const { mockStyle, credentialId } = ach;

    if (ach.imageUrl) {
      return (
        <img 
          src={ach.imageUrl} 
          alt={ach.title[lang]} 
          className="w-full h-full"
          referrerPolicy="no-referrer"
        />
      );
    }

    switch (mockStyle.logoType) {
      case 'parto':
        return (
          <div className="w-full h-full bg-[#fbfbfb] dark:bg-[#151518] relative flex overflow-hidden p-4 border-b border-neutral-100 dark:border-neutral-800">
            {/* Elegant organic leaf background art */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 rounded-l-[100px] flex items-center justify-end overflow-hidden">
              <svg className="w-full h-[150%] text-emerald-600/20 translate-x-1/4 scale-150 rotate-12" fill="currentColor" viewBox="0 0 100 100">
                <path d="M50 0 C70 30 80 70 50 100 C20 70 30 30 50 0 Z" />
                <path d="M50 20 C60 40 65 70 50 90 C35 70 40 40 50 20 Z" opacity="0.6" />
              </svg>
            </div>

            {/* Content text layout on certificate */}
            <div className="flex-1 flex flex-col justify-between z-10 text-left">
              {/* Top part: branding logo */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-serif text-[11px] font-black">
                  A
                </div>
                <span className="text-[12.5px] font-black font-sans tracking-tight text-neutral-800 dark:text-neutral-200">
                  Arswift
                </span>
              </div>

              {/* Center: "Sertifikat" Title */}
              <div className="my-auto space-y-1 py-1">
                <h3 className="text-[25px] font-black font-serif text-emerald-600 leading-none tracking-tight">
                  {lang === 'US' ? 'Certificate' : 'Sertifikat'}
                </h3>
                <div className="w-10 h-[2px] bg-amber-400" />
                <p className="text-[10px] text-neutral-400 font-sans tracking-wider font-semibold uppercase mt-1">
                  {lang === 'US' ? 'Fullstack Internship' : 'Fullstack Internship'}
                </p>
                <div className="text-[11px] font-serif font-black text-neutral-800 dark:text-neutral-100 italic mt-1.5">
                  M.subhan
                </div>
              </div>

              {/* Bottom minor signators mockup */}
              <div className="flex items-center gap-3 text-[5.5px] text-neutral-401 font-mono uppercase bg-neutral-100/60 dark:bg-neutral-800/40 p-1 rounded max-w-[170px]">
                <div>CEO Arswift Technologies (PVT) Ltd.</div>
                <div className="text-zinc-300 dark:text-zinc-650">|</div>
                <div>ID: {credentialId.slice(0, 10)}...</div>
              </div>
            </div>
          </div>
        );

      case 'bwa':
        return (
          <div className="w-full h-full bg-[#f4f7fe] dark:bg-[#111624] relative flex flex-col justify-between p-4 border-b border-neutral-100 dark:border-neutral-800 text-left">
            {/* Custom geometric blue/sky graphics for BWA */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-blue-600/10 border-l border-blue-500/5" />
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-blue-600" />

            {/* branding header */}
            <div className="flex items-center gap-1.5 pl-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-[11px] font-black tracking-tight text-blue-950 dark:text-blue-200">
                Arswift
              </span>
            </div>

            {/* Center: Awarded candidate name */}
            <div className="pl-2 space-y-1.5 my-auto">
              <span className="text-[5.5px] uppercase tracking-widest text-neutral-400 font-bold block">
                Certificate of internship
              </span>
              <h3 className="text-base sm:text-[17px] font-black font-sans text-blue-600 leading-none">
                M.subhan
              </h3>
              <p className="text-[7.5px] text-zinc-500 dark:text-zinc-400 line-clamp-1 max-w-[190px]">
                "Fullstack developer intern"
              </p>
            </div>

            {/* Verification signature seal */}
            <div className="pl-2 flex items-center justify-between">
              <div className="w-6 h-6 border-2 border-amber-400 rounded-full flex items-center justify-center p-0.5 opacity-80">
                <div className="w-full h-full bg-amber-400/20 rounded-full" />
              </div>
              <span className="text-[6px] font-mono text-zinc-400">
                VERIFIED ID: {credentialId}
              </span>
            </div>
          </div>
        );

      case 'dicoding':
      default:
        return (
          <div className="w-full h-full bg-white dark:bg-[#181d28] relative flex flex-col justify-between p-4 border-b border-neutral-105 dark:border-neutral-800 text-left">
            {/* Dicoding theme borders */}
            <div className="absolute inset-2 border border-neutral-200 dark:border-neutral-800 pointer-events-none" />
            
            {/* Top row */}
            <div className="flex justify-between items-start z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-[#2d3e50] rounded flex items-center justify-center text-white text-[9px] font-extrabold font-mono">
                  d
                </div>
                <span className="text-[11.5px] font-black tracking-tighter text-slate-800 dark:text-slate-200 font-sans">
                  dicoding
                </span>
              </div>

              {/* Dicoding Seal Badge */}
              <div className="w-10 h-10 bg-[#2d3e50] dark:bg-[#111115] text-white rounded-b-xl flex flex-col items-center justify-center border-l border-r border-b border-yellow-500/20 shadow-md">
                <Award size={13} className="text-amber-400 shrink-0" />
                <span className="text-[5px] uppercase font-bold tracking-widest text-amber-400">STAR</span>
              </div>
            </div>

            {/* Center block */}
            <div className="my-auto z-10 px-1 space-y-1 max-w-[200px]">
              <div className="text-[9px] font-bold text-neutral-800 dark:text-slate-100">
                M.subhan
              </div>
              <p className="text-[7.5px] text-zinc-400 dark:text-zinc-500 font-sans leading-relaxed line-clamp-2">
               Fullstack internship 
              </p>
            </div>

            {/* Bottom credential block */}
            <div className="flex justify-between items-center z-10 px-1">
              <span className="text-[6.5px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                ID: {credentialId}
              </span>
              <div className="w-3 h-3 bg-teal-500/10 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-[#2d3e50] dark:bg-amber-400 rounded-full" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="space-y-6" id="achievements-section-wrapper">
      {/* Search and Multi Filter controls row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3" id="achievements-filters-row">
        {/* Search Input bar */}
        <div className="relative">
          <Search size={16} className="text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 dark:bg-[#111113]/30 border border-neutral-200 dark:border-neutral-800 focus:border-amber-400 dark:focus:border-amber-450 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-xl outline-none text-sm transition-all focus:ring-1 focus:ring-amber-405 font-sans"
            id="achievements-search-input"
          />
        </div>

        {/* Dropdown 1: Type Selection */}
        <div className="relative">
          <Filter size={14} className="text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full pl-9 pr-10 py-2.5 bg-neutral-50 dark:bg-[#111113]/30 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-xl outline-none transition-colors appearance-none cursor-pointer"
            id="achievements-filter-type-dropdown"
          >
            <option value="All">{t.filterByType}</option>
            {typeOptions.filter(o => o !== 'All').map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Dropdown 2: Category Selection */}
        <div className="relative">
          <Filter size={14} className="text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full pl-9 pr-10 py-2.5 bg-neutral-50 dark:bg-[#111113]/30 border border-neutral-205 dark:border-neutral-800 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 text-sm font-medium text-neutral-800 dark:text-neutral-200 rounded-xl outline-none transition-colors appearance-none cursor-pointer"
            id="achievements-filter-category-dropdown"
          >
            <option value="All">{t.filterByCategory}</option>
            {categoryOptions.filter(o => o !== 'All').map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 font-extrabold">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Total statistics display info tag */}
      <div className="text-left py-1" id="achievements-count-display">
        <span className="text-[13px] md:text-sm font-bold text-neutral-500 dark:text-neutral-400 font-sans">
          {t.totalText.replace('{count}', String(filteredAchievements.length))}
        </span>
      </div>

      {/* Grid List matching cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="achievements-grid-display">
        <AnimatePresence mode="popLayout">
          {filteredAchievements.map((ach) => {
            const displayTitle = ach.title[lang] || ach.title.US;
            const displayDate = ach.issuedDate[lang] || ach.issuedDate.US;

            return (
              <motion.div
                layout
                key={ach.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveViewerCert(ach)}
                className="group flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-[#f8f9fa] dark:bg-[#111113]/30 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                {/* 1. TOP ASPECT IMAGE/CERTIFICATE CANVAS */}
                <div className="relative aspect-[3/2] overflow-hidden bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-205 dark:border-neutral-800">
                  {renderCertificateArt(ach)}

                  {/* Glass overlay on hover - covering full canvas container explicitly */}
                  <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveViewerCert(ach);
                      }}
                      className="px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30 active:scale-95 cursor-pointer"
                    >
                      <Eye size={12} />
                      <span>{lang === 'US' ? 'Inspect Detail' : 'Detail Dekhein'}</span>
                    </button>
                  </div>
                </div>

                {/* 2. BOTTOM DETAILS AREA */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                  <div className="space-y-1.5">
                    {/* Monospace Code tag */}
                    {ach.credentialId && (
                      <span className="text-[10px] md:text-[11px] font-mono text-neutral-400 font-bold block leading-none select-all uppercase">
                        {ach.credentialId}
                      </span>
                    )}

                    {/* Main Title */}
                    <h3 className="font-extrabold text-[15px] sm:text-[16px] text-neutral-800 dark:text-neutral-100 hover:text-amber-500 transition-colors leading-snug tracking-tight line-clamp-2 font-sans">
                      {displayTitle}
                    </h3>

                    {/* Issuer */}
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 block font-medium">
                      {ach.issuer}
                    </span>
                  </div>

                  {/* Tags area */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium rounded-full bg-white dark:bg-neutral-900/40 select-none">
                      {ach.type}
                    </span>
                    <span className="px-2.5 py-0.5 border border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium rounded-full bg-white dark:bg-neutral-900/40 select-none">
                      {ach.category}
                    </span>
                  </div>

                  {/* Issued Date, link and bottom footer elements */}
                  <div className="flex items-center justify-between border-t border-neutral-200/50 dark:border-neutral-800/50 pt-3 mt-1.5">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider font-sans select-none">
                      {displayDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* EXTRAVAGANT LIGHTBOX DIALOG MODULE FOR PORTFOLIO DETAIL DEMONSTRATIONS */}
      <AnimatePresence>
        {activeViewerCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 md:p-6 backdrop-blur-md"
            onClick={() => setActiveViewerCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 210 }}
              className="relative bg-white dark:bg-[#111113] border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl p-6 md:p-6 space-y-8 text-left max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Row Title & Dismiss */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-neutral-150 dark:bg-neutral-800 text-[10px] text-neutral-500 font-mono font-bold rounded">
                    CREDENTIAL ID: {activeViewerCert.credentialId}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 font-sans leading-snug mt-1">
                    {activeViewerCert.title[lang]}
                  </h3>
                  <p className="text-sm text-neutral-400 font-medium">
                    {activeViewerCert.issuer}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveViewerCert(null)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-200/60 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Virtual Canvas representation inside Lightbox Modal */}
              <div className="w-full h-[280px] sm:h-[390px] border border-dashed border-neutral-300 dark:border-neutral-700/80 rounded-2xl relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 shadow-inner flex items-center justify-center p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  {renderCertificateArt(activeViewerCert)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
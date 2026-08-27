import React, { useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { creatorProfile, creationsTranslations } from './data/creationsData';
import { VideoGrid } from './sections/VideoGrid';
import { motion, AnimatePresence } from 'motion/react';

export default function CreationsPage() {
  const { lang } = usePortfolio();
  const t = creationsTranslations[lang] || creationsTranslations.US;
  const profile = creatorProfile;
  const [activeTab, setActiveTab] = useState<'YouTube' | 'TikTok'>('YouTube');
  
  const stats = profile.stats[activeTab];

  // Social action URLs
  const getSocialUrl = () => {
    return activeTab === 'TikTok' ? profile.tiktokUrl : profile.youtubeUrl;
  };

  // Platform badges on the right
  const renderSocialBrandBadge = () => {
    if (activeTab === 'TikTok') {
      return (
        <div className="bg-[#121215] text-white rounded-2xl p-3 px-5 flex items-center justify-center gap-2 select-none border border-neutral-800 shadow-md h-12 w-[165px]">
          <svg viewBox="0 0 100 32" className="h-[21px] w-full" fill="currentColor">
            <path d="M7.4 6c0 4.2-2.1 6.8-5.3 7.8v3.4c6-.2 8.4-3.5 9-6.9.1-1 .1-2.1.1-3.2V0H7.4v6z" fill="#00f2fe" />
            <path d="M4.3 6.1C4.3 10.3 2.2 13 1 13.9v3.4c6-.1 8.3-3.4 9-6.8V0H4.3v6.1z" fill="#fe2c55" />
            <path d="M4.3 0v10.5C4.3 14 6.8 17 9.5 17c1.3 0 2.5-.5 3.3-1.4v3.1c-.8.6-1.8.9-3 .1V24c0 3.3-2.7 6-6 6s-6-2.7-6-6V6c0-3.3 2.7-6 6-6h.5V0z" fill="white" />
            <text x="35" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="white">TikTok</text>
          </svg>
        </div>
      );
    } else {
      return (
        <div className="bg-[#121215] text-white rounded-2xl p-3 px-5 flex items-center justify-center gap-2 select-none border border-neutral-800 shadow-md h-12 w-[165px]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-600 fill-red-600" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
          </svg>
          <span className="font-sans font-black text-sm tracking-wide">YouTube</span>
        </div>
      );
    }
  };

  return (
    <div className="space-y-10 pb-8 animate-fade-in text-neutral-900 dark:text-neutral-50" id="creations-page-view">
      {/* 1. Hero headings & dashed divider */}
      <section className="space-y-6">
        <div className="space-y-1 text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-[38px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans"
            id="creations-title"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-[14px] md:text-[15px] text-neutral-500 dark:text-neutral-400 font-normal"
            id="creations-subtitle"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Styled dashed horizontal rule */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-800"
          id="creations-separator"
        />
      </section>

      {/* 2. Platform Selector Bar & Creator Stats */}
      <div className="space-y-6">
        <div className="flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-1 shadow-inner max-w-full">
          {/* YouTube Button */}
          <button
            onClick={() => setActiveTab('YouTube')}
            className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-200 select-none cursor-pointer ${
              activeTab === 'YouTube'
                ? 'text-neutral-950 dark:text-neutral-150 font-extrabold'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-850 dark:hover:text-neutral-200'
            }`}
          >
            {activeTab === 'YouTube' && (
              <motion.span
                layoutId="creationsTabPill"
                className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-xl shadow-md z-0"
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current" stroke="none">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 0 0-2.11 2.107C0 8.046 0 12 0 12s0 3.954.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.954 24 12 24 12s0-3.954-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>{t.youtubeTab}</span>
            </span>
          </button>

          {/* TikTok Button */}
          <button
            onClick={() => setActiveTab('TikTok')}
            className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-200 select-none cursor-pointer ${
              activeTab === 'TikTok'
                ? 'text-neutral-950 dark:text-neutral-150 font-extrabold'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-850 dark:hover:text-neutral-200'
            }`}
          >
            {activeTab === 'TikTok' && (
              <motion.span
                layoutId="creationsTabPill"
                className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-xl shadow-md z-0"
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.58-3.99-1.55-.28-.25-.54-.53-.78-.83-.02 3.19-.01 6.38-.02 9.57-.08 2.06-.88 4.14-2.45 5.51-1.89 1.66-4.66 2.13-7.01 1.4-2.2-.62-4.14-2.18-5.06-4.22-1.09-2.31-.93-5.22.42-7.39 1.25-2.07 3.56-3.41 5.99-3.48.01 4.1-.01 8.2.01 12.3.06.66.45 1.3 1.09 1.51.68.25 1.48.11 2.02-.37.58-.49.8-1.32.61-2.05-.01-2.61.02-5.23-.01-7.85.01-3.32.02-6.64.01-9.96z" />
              </svg>
              <span>{t.tiktokTab}</span>
            </span>
          </button>
        </div>

        {/* Profile Card Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white/50 dark:bg-black/40 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1 min-w-0 w-full">
              {/* Avatar circular frame */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-0.5 shadow-md flex-shrink-0 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-200 select-none">
                <img
                  src={profile.avatar}
                  alt={profile.fullName}
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div>

              {/* Name titles and metrics */}
              <div className="flex-1 min-w-0 w-full space-y-4">
                <div className="text-center sm:text-left space-y-0.5">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight font-sans flex flex-wrap items-baseline justify-center sm:justify-start gap-2.5 select-all">
                    <span className="text-yellow-500 dark:text-yellow-400">{profile.username}</span>
                    <span className="text-base md:text-lg font-normal text-neutral-500 dark:text-neutral-300">
                      {profile.fullName}
                    </span>
                  </h2>
                </div>

                {/* Metrics stats block */}
                <div className="grid grid-cols-3 gap-y-3.5 gap-x-4 border-t border-b border-neutral-200/50 dark:border-neutral-800/60 py-4 text-center sm:text-left">
                  <div className="space-y-0.5">
                    <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                      {stats.followers.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-neutral-450 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {stats.followers.label[lang].charAt(0).toUpperCase() + stats.followers.label[lang].slice(1)}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                      {stats.following.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-neutral-450 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {stats.following.label[lang].charAt(0).toUpperCase() + stats.following.label[lang].slice(1)}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                      {stats.likes.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-neutral-450 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {stats.likes.label[lang].charAt(0).toUpperCase() + stats.likes.label[lang].slice(1)}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                      {stats.totalViews.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-neutral-450 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {stats.totalViews.label[lang]}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                      {stats.totalComments.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-neutral-450 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {stats.totalComments.label[lang]}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-none">
                      {stats.totalShares.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-neutral-450 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {stats.totalShares.label[lang]}
                    </div>
                  </div>
                </div>

                {/* Sub bio and email link */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-[13px] md:text-[14px] text-neutral-600 dark:text-neutral-300 font-sans font-normal leading-relaxed text-center sm:text-left">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span>💻</span>
                    <span>{profile.bio[lang][0]}</span>
                  </span>
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span>🚀</span>
                    <span>{profile.bio[lang][1]}</span>
                  </span>
                  {profile.bio[lang][2] && (
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <span>✨</span>
                      <span>{profile.bio[lang][2]}</span>
                    </span>
                  )}
                  <a 
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-1.5 text-neutral-500 hover:text-yellow-500 dark:text-neutral-400 dark:hover:text-yellow-400 transition-colors font-medium select-all"
                  >
                    <span>📩</span>
                    <span>{profile.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Platform interactive Action buttons */}
            <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-200/50 dark:border-neutral-800/60 lg:pl-6">
              <div className="transform hover:scale-[1.03] transition-transform duration-200 select-none">
                {renderSocialBrandBadge()}
              </div>

              <a
                href={getSocialUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[165px] py-2.5 px-4 bg-[#facc15] dark:bg-[#facc15] text-neutral-950 hover:bg-[#eab308] dark:hover:bg-[#eab308] transition-colors duration-200 rounded-xl font-extrabold text-[13.5px] md:text-[14px] text-center shadow-md select-none transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {t.openButton[activeTab]}
              </a>

              <a
                href={activeTab === 'TikTok' ? "https://www.tiktok.com/legal/page/row/privacy-policy/en" : "https://www.youtube.com/t/privacy"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-sans text-neutral-400 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 transition-colors cursor-pointer select-none"
              >
                {t.privacyPolicy}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Feeds/Grid Container */}
      <VideoGrid activeTab={activeTab} />
    </div>
  );
}
export { CreationsPage };

import React, { useState } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { educationData, aboutTranslations } from '../data/aboutData';
import { GraduationCap, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Education: React.FC = () => {
  const { lang } = usePortfolio();
  const t = aboutTranslations[lang];

  // Track expanded state dynamically for timeline items
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="space-y-6 pt-4">
      {/* Spacer line */}
      <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />

      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
          <GraduationCap size={19} className="text-neutral-700 dark:text-neutral-300" />
          <span>{t.educationTitle}</span>
        </h2>
        <p className="text-[14px] md:text-[15px] text-neutral-500 dark:text-neutral-400 font-normal">
          {t.educationSubtitle}
        </p>
      </div>

      {/* Timeline entries */}
      <div className="space-y-4">
        {educationData.map((item) => {
          const isExpanded = !!expandedItems[item.id];
          return (
            <motion.div
              layout="position"
              key={item.id}
              className="p-4 border rounded-2xl bg-neutral-50/50 dark:bg-[#111113]/40 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-[#111113]/70 transition-all duration-200"
            >
              <div className="flex gap-6">
                {/* Brand Logo Container */}
                <div className="w-15 h-15 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1.5 pt-0.5">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 text-[15px] md:text-base leading-snug">
                    {item.role[lang]}
                  </h3>

                  <div className="text-[13px] md:text-sm font-medium text-neutral-600 dark:text-neutral-400 flex items-center gap-1 flex-wrap">
                    <span>{item.company}</span>
                    {item.location && item.location[lang] && (
                      <>
                        <span className="text-neutral-300 dark:text-neutral-700 select-none">•</span>
                        <span className="flex items-center gap-0.5">
                          {item.location[lang]}
                          {item.countryCode && (
                            <span className="text-[9px] font-black bg-neutral-200/60 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded px-1 ml-0.5 scale-95 select-none inline-block">
                              {item.countryCode}
                            </span>
                          )}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap text-neutral-500 dark:text-neutral-500 text-[12px] md:text-[13px] font-normal leading-none select-none">
                    <span>{item.duration[lang]}</span>
                    {item.meta && item.meta[lang] && item.meta[lang].length > 0 && item.meta[lang].map((tag: string, tIdx: number) => (
                      <React.Fragment key={tIdx}>
                        <span>•</span>
                        <span>{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Toggle button */}
                  {item.bullets && item.bullets[lang] && item.bullets[lang].length > 0 && (
                    <div className="pt-2 select-none">
                      <button
                        onClick={() => toggleDetails(item.id)}
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                      >
                        <ChevronRight 
                          size={14} 
                          className={`text-neutral-400 dark:text-neutral-500 transform transition-transform duration-200 ${
                            isExpanded ? 'rotate-90' : 'rotate-0'
                          }`} 
                        />
                        <span>{isExpanded ? t.hideDetails : t.showDetails}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Expandable details panel */}
              <AnimatePresence initial={false}>
                {isExpanded && item.bullets && item.bullets[lang] && item.bullets[lang].length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 sm:pl-[72px] pr-2 pt-4 pb-1 space-y-3">
                      <div className="h-[1px] w-full bg-neutral-200/60 dark:bg-neutral-800/60 mb-2.5" />
                      <ul className="space-y-2">
                        {item.bullets[lang].map((bullet: string, bulletIdx: number) => (
                          <motion.li
                            key={bulletIdx}
                            initial={{ x: -4, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: bulletIdx * 0.05 }}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans"
                          >
                            <span className="p-0.5 mt-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0 flex items-center justify-center">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

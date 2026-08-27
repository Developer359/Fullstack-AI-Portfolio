import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { achievementsTranslations } from './data/achievementsData';
import { CertificatesGrid } from './sections/CertificatesGrid';
import { motion } from 'motion/react';

export default function AchievementsPage() {
  const { lang } = usePortfolio();
  const t = achievementsTranslations[lang] || achievementsTranslations.US;

  return (
    <div className="space-y-8 py-2 max-w-full overflow-x-hidden" id="achievements-page-layout">
      <section className="space-y-6">
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-[38px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans text-left"
            id="achievements-title"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-[14px] md:text-[15px] text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed text-left"
            id="achievements-subtitle"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Styled dashed horizontal rule directly from the screenshot */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-800"
          id="achievements-separator"
        />
      </section>

      {/* Grid container with search filter controls and achievements cards */}
      <CertificatesGrid />
    </div>
  );
}
export { AchievementsPage };

import React from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { heroTranslations } from '../data/heroData';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { lang } = usePortfolio();
  const t = heroTranslations[lang] || heroTranslations.US;

  return (
    <section id="Hero-Section" className="space-y-6 text-left">
      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-[32px] font-bold tracking-normal text-neutral-900 dark:text-neutral-50 font-sans"
        >
          {t.title}
        </motion.h1>

        {/* Location subtitle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center gap-x-2 text-[14px] md:text-[15px] text-neutral-600 dark:text-neutral-400 font-normal select-none"
        >
          <span>•</span>
          <span>{lang === 'US' ? 'Based in Fasilabad, Pakistan' : 'Fasilabd, Pakistan mein muqeem'}</span>
          <span className="text-[11px] font-sans font-bold text-neutral-500 dark:text-neutral-400 ml-[-2px] tracking-tight">PK</span>
          <span className="ml-[6px] mr-[1px]">•</span>
          <span>{lang === 'US' ? 'Onsite' : 'Onsite'}</span>
        </motion.div>
      </div>

      <div className="space-y-5 text-neutral-700 dark:text-neutral-300 text-sm md:text-[15px] leading-[1.65] font-sans font-normal">
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {t.bio1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {t.bio2}
        </motion.p>
      </div>
    </section>
  );
};


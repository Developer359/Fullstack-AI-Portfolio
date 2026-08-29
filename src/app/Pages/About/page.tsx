import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { aboutTranslations } from './data/aboutData';
import { StoryTimeline } from './sections/StoryTimeline';
import { Education } from './sections/Education';
import { motion } from 'motion/react';

export default function AboutPage() {
  const { lang } = usePortfolio();
  const t = aboutTranslations[lang];

  return (
    <div className="space-y-5 pb-4 animate-fade-in">
      <section className="space-y-6">
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-[32px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-[14px] md:text-[15px] text-neutral-500 dark:text-neutral-400 font-normal"
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
        />

        <div className="space-y-5 text-neutral-700 dark:text-neutral-300 text-sm md:text-[15px] leading-[1.65] font-sans font-normal antialiased">
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
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {t.bio2}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {t.bio3}
          </motion.p>

          {/* Regards block with cursive yellow signature */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="pt-2 space-y-1.5"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-[15px]">
              {t.regards}
            </p>
            <div className=" mt-4 select-none inline-block origin-left transform hover:scale-105 active:scale-95 transition-transform duration-150">
              <span className="font-['Caveat',_cursive] text-[48px] text-yellow-400 dark:text-yellow-400 leading-none select-none tracking-wide antialiased">
                subhan
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Story Timeline / Career timeline */}
      <StoryTimeline />

      {/* 3. Education timeline */}
      <Education />
    </div>
  );
}

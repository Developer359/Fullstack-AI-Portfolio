import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { guestbookTranslations } from './data/guestbookData';
import { SignBoard } from './sections/SignBoard';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function GuestbookPage() {
  const { lang } = usePortfolio();
  const t = guestbookTranslations[lang] || guestbookTranslations.US;

  return (
    <div className="space-y-8 py-2 max-w-full overflow-x-hidden" id="guestbook-page-wrapper">
      {/* 1. Header Hero Panel */}
      <section className="space-y-6">
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-[32px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans text-left"
            id="guestbook-head-title"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-[14px] md:text-[15px] text-neutral-500 dark:text-neutral-400 font-sans font-normal leading-relaxed text-left"
            id="guestbook-head-subtitle"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Styled dashed horizontal separation rule */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-800"
          id="guestbook-head-separator"
        />
      </section>

      {/* 2. SignBoard Chat board (Commented out) */}
      {/* <SignBoard /> */}

      {/* 3. Coming Soon Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-col items-center justify-center py-32 px-4 text-center space-y-4"
        id="guestbook-coming-soon"
      >
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/20 flex items-center justify-center text-amber-500 shadow-sm">
          <Clock className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight font-sans">
            Coming Soon
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">
            Guestbook feature is currently in production.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export { GuestbookPage };
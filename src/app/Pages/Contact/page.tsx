import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { socialCardsData, contactTranslations, SocialCard } from './data/contactData';
import { ContactForm } from './sections/ContactForm';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const { lang } = usePortfolio();
  const t = contactTranslations[lang] || contactTranslations.US;

  // Custom function to return matching SVG logo for each brand
  const renderBrandIcon = (type: SocialCard['brandType']) => {
    switch (type) {
      case 'gmail':
        return (
          <svg viewBox="0 0 500 500" className="w-14 h-14 md:w-[68px] md:h-[68px] text-white/95 shrink-0" fill="currentColor">
            <rect x="50" y="50" width="400" height="400" rx="90" fill="none" stroke="currentColor" strokeWidth="32" />
            <path d="M120 155 v190 h50 v-130 l80 65 l80 -65 v130 h50 v-190 h-40 l-90 75 l-90 -75 z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-[68px] md:h-[68px] text-white/95 shrink-0" fill="currentColor">
            <rect x="5" y="5" width="90" height="90" rx="22" fill="none" stroke="currentColor" strokeWidth="8" />
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="8" />
            <circle cx="72" cy="28" r="5" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-[68px] md:h-[68px] text-white/95 shrink-0" fill="currentColor">
            <rect x="5" y="5" width="90" height="90" rx="22" fill="none" stroke="currentColor" strokeWidth="8"/>
            <path d="M28 41 h11 v32 h-11 z" />
            <circle cx="33.5" cy="28.5" r="5.5" />
            <path d="M48 41 h11 v5.5 c2.5 -4 6.5 -6 12 -6 c11 0 13 6.5 13 15 v17.5 h-11 v-18 c0 -4.5 -1.5 -7.5 -6 -7.5 c-4 0 -7 2.5 -7 7.5 v18 h-11 z" />
          </svg>
        );
      case 'tiktok':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-[68px] md:h-[68px] text-white/95 shrink-0" fill="currentColor">
            <rect x="5" y="5" width="90" height="90" rx="22" fill="none" stroke="currentColor" strokeWidth="8"/>
            <path d="M68 25 c-5 0 -11 3 -14 7 v-17 h-11 v46 c0 7 -6 13 -13 13 s-13 -6 -13 -13 s6 -13 13 -13 c3 0 5 1 7 2 v-11 c-2 -1 -5 -1 -7 -1 c-13 0 -24 11 -24 24 s11 24 24 24 s24 -11 24 -24 v-20 c4 3 9 5 15 5 v-11 c-8 0 -15-5 -15 -13 z" />
          </svg>
        );
      case 'github':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-[68px] md:h-[68px] text-white/95 shrink-0" fill="currentColor">
            <rect x="5" y="5" width="90" height="90" rx="22" fill="none" stroke="currentColor" strokeWidth="8"/>
            <path d="M50 20C33.4 20 20 33.4 20 50c0 13.3 8.6 24.6 20.6 28.6 1.5.3 2.1-.6 2.1-1.4 0-.7 0-2.6-.1-5.1-8.3 1.8-10.1-4-10.1-4-1.4-3.5-3.3-4.4-3.3-4.4-2.7-1.8.2-1.8.2-1.8 3 2.1 4.6 5.4 4.6 5.4 2.7 4.6 7 3.3 8.7 2.5.3-2 .1-3.3-1-4.1-6.7-.8-13.7-3.3-13.3-14.9.1-3.3 1.5-6 3.9-8.1-.3-.8-1.7-3.9.3-8 0 0 2.5-.8 8.3 3.1 2.4-.7 5-1 7.6-1s5.2.3 7.6 1c5.8-3.9 8.3-3.1 8.3-3.1 2 4.1.6 7.2.3 8 2.4 2.1 3.9 4.8 3.9 8.1-.5 11.6-7.5 14.1-14.2 14.9 1 1 2 3 2 6 0 4.3-.1 7.8-.1 8.8 0 .8.6 1.8 2.1 1.4C71.4 74.6 80 63.3 80 50c0-16.6-13.4-30-30-30z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Custom button styling matches background tones and adds visual contrast
  const getButtonClass = (brandType: SocialCard['brandType']) => {
    switch (brandType) {
      case 'gmail':
        return "bg-[#ffa2a2] hover:bg-[#ffbaba] text-[#800000] focus:ring-[#ffcaca]";
      case 'instagram':
        return "bg-[#ffe3f1] hover:bg-[#fff0f7] text-[#9c1458] focus:ring-[#ffd3ea]";
      case 'linkedin':
        return "bg-[#bae6fd] hover:bg-[#e0f2fe] text-[#0369a1] focus:ring-[#bae6fd]";
      case 'tiktok':
        return "bg-[#e2e8f0]/80 hover:bg-[#f1f5f9] text-[#1e293b] dark:bg-[#334155]/80 dark:hover:bg-[#475569] dark:text-neutral-105";
      case 'github':
        return "bg-[#cbd5e1]/80 hover:bg-[#f1f5f9] text-[#0f172a] dark:bg-[#475569]/80 dark:hover:bg-[#64748b] dark:text-neutral-105";
      default:
        return "bg-white/20 text-white hover:bg-white/30";
    }
  };

  return (
    <div className="space-y-8 py-2 max-w-full overflow-x-hidden" id="contact-page-layout">
      {/* 1. Hero header */}
      <section className="space-y-6">
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-[38px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans text-left"
            id="contact-title"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-[14px] md:text-[15px] text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed text-left"
            id="contact-subtitle"
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
          id="contact-separator"
        />
      </section>

      {/* 2. Beautiful social networks Grid links */}
      <section className="space-y-4" id="social-media-channels">
        <h2 className="text-[15px] font-bold text-neutral-800 dark:text-neutral-200 tracking-tight text-left">
          {t.socialTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="social-grid-container">
          {socialCardsData.map((card, idx) => {
            const isGmail = card.brandType === 'gmail';
            const title = card.title[lang] || card.title.US;
            const subtitle = card.subtitle[lang] || card.subtitle.US;
            const buttonText = card.buttonText[lang] || card.buttonText.US;

            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                key={card.id}
                className={`relative overflow-hidden rounded-[24px] p-6 md:p-7 flex ${
                  isGmail ? 'col-span-1 md:col-span-2' : 'col-span-1'
                } ${card.gradientClass} text-white shadow-sm hover:shadow-lg transition-all duration-350 hover:scale-[1.01]`}
              >
                {/* Subtle background overlay circles */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute right-12 bottom-0 w-24 h-24 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />

                <div className="flex-1 flex flex-col justify-between h-full space-y-7 z-10 text-left">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-[22px] font-bold tracking-tight text-white leading-tight">
                      {title}
                    </h3>
                    <p className="text-xs md:text-[13px] text-white/80 max-w-sm font-normal font-sans leading-relaxed">
                      {subtitle}
                    </p>
                  </div>

                  <div>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-[13px] font-bold tracking-tight shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer ${getButtonClass(
                        card.brandType
                      )}`}
                    >
                      <span>{buttonText}</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>

                <div className="align-middle self-center ml-4 z-10">
                  {renderBrandIcon(card.brandType)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Interactive contact message form */}
      <ContactForm />
    </div>
  );
}
export { ContactPage };

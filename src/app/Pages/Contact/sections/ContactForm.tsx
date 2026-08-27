import React, { useState } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { contactTranslations } from '../data/contactData';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { lang } = usePortfolio();
  const t = contactTranslations[lang] || contactTranslations.US;

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Status feedback triggers
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(t.errorMessage);
      return;
    }

    setErrorMsg('');
    setIsSending(true);

    // Simulated email transmission
    setTimeout(() => {
      setIsSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');

      // Turn off success message after 4.5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 4500);
    }, 1200);
  };

  return (
    <section className="space-y-6 pt-5" id="form-message-inbox">
      {/* Horizontal divider rule matching the screenshot structure */}
      <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />

      <div className="space-y-4">
        <h2 className="text-[15px] font-bold text-neutral-800 dark:text-neutral-200 tracking-tight text-left">
          {t.formTitle}
        </h2>

        {/* Form alerts feedback display */}
        <AnimatePresence mode="wait">
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250 dark:border-emerald-850 text-emerald-800 dark:text-emerald-300 rounded-xl text-left flex items-start gap-3 text-[13.5px] leading-relaxed"
              id="form-success-banner"
            >
              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{t.successMessage}</span>
            </motion.div>
          )}

          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-250 dark:border-rose-850 text-rose-800 dark:text-rose-300 rounded-xl text-left flex items-start gap-3 text-[13.5px] leading-relaxed"
              id="form-error-banner"
            >
              <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleFormSubmit} className="space-y-4 text-left" id="contact-interactive-form">
          {/* Row 1: Side-By-Side Input Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                type="text"
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 font-sans shadow-sm"
                required
                disabled={isSending}
                id="form-input-name"
              />
            </div>

            <div className="space-y-1">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 font-sans shadow-sm"
                required
                disabled={isSending}
                id="form-input-email"
              />
            </div>
          </div>

          {/* Row 2: Message Text Area block */}
          <div className="space-y-1">
            <textarea
              placeholder={t.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 font-sans resize-none shadow-sm"
              required
              disabled={isSending}
              id="form-input-message"
            />
          </div>

          {/* Row 3: Full-width Send Button */}
          <div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-[#4c4c4e] hover:bg-[#3d3d3f] active:scale-[995] disabled:opacity-70 text-white font-semibold tracking-tight rounded-xl text-sm transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm select-none"
              id="form-submit-button"
            >
              {isSending ? t.sendingButton : t.sendButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

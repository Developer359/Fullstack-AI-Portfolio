import React, { useState } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { contactTranslations } from '../data/contactData';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { lang } = usePortfolio();
  const t = contactTranslations[lang] || contactTranslations.US;

  // Form field state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Status feedback state
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(t.errorMessage || 'Please fill in all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `New Portfolio Message from ${name.trim()}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Could not send message. Please email directly at m.subhan8661@gmail.com');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="space-y-6 pt-5" id="form-message-inbox">
      {/* Horizontal divider */}
      <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />

      <div className="space-y-4">
        <h2 className="text-[15px] font-bold text-neutral-800 dark:text-neutral-200 tracking-tight text-left">
          {t.formTitle || "Or send me a message"}
        </h2>

        {/* Feedback banners */}
        <AnimatePresence mode="wait">
          {success && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 rounded-xl text-left flex items-start gap-3 text-[13.5px] leading-relaxed"
              id="form-success-banner"
            >
              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{t.successMessage || "Message sent successfully!"}</span>
            </motion.div>
          )}

          {errorMsg && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 rounded-xl text-left flex items-start gap-3 text-[13.5px] leading-relaxed"
              id="form-error-banner"
            >
              <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleFormSubmit} className="space-y-4 text-left" id="contact-interactive-form">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                type="text"
                placeholder={t.namePlaceholder || "Your Name"}
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
                placeholder={t.emailPlaceholder || "Your Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 font-sans shadow-sm"
                required
                disabled={isSending}
                id="form-input-email"
              />
            </div>
          </div>

          {/* Row 2: Message */}
          <div className="space-y-1">
            <textarea
              placeholder={t.messagePlaceholder || "Your Message"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 font-sans resize-none shadow-sm"
              required
              disabled={isSending}
              id="form-input-message"
            />
          </div>

          {/* Row 3: Submit button */}
          <div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-[#4c4c4e] hover:bg-[#3d3d3f] active:scale-[0.995] disabled:opacity-70 text-white font-semibold tracking-tight rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm select-none"
              id="form-submit-button"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  {t.sendingButton || "Sending..."}
                </>
              ) : (
                <>
                  <Send size={15} strokeWidth={2} />
                  {t.sendButton || "Send Email"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
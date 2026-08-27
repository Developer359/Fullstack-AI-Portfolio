import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { 
  initialGuestbookMessages, 
  guestbookTranslations, 
  GuestbookMessage 
} from '../data/guestbookData';
import { 
  Smile, 
  LogOut, 
  Send, 
  Key,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SignBoard: React.FC = () => {
  const { lang, currentUser, setCurrentUser } = usePortfolio();
  const t = guestbookTranslations[lang] || guestbookTranslations.US;

  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [inputText, setInputText] = useState('');
  
  const [activeEmojiMenuId, setActiveEmojiMenuId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('satria_guestbook_messages_v4');
    if (stored) {
      setMessages(JSON.parse(stored));
    } else {
      setMessages(initialGuestbookMessages);
      localStorage.setItem('satria_guestbook_messages_v4', JSON.stringify(initialGuestbookMessages));
    }
  }, []);

  const saveMessages = (updated: GuestbookMessage[]) => {
    setMessages(updated);
    localStorage.setItem('satria_guestbook_messages_v4', JSON.stringify(updated));
  };

  const handleVirtualLogin = (provider: 'google' | 'github') => {
    let name = '';
    let avatarColor = '';
    
    if (provider === 'google') {
      name = 'Google Explorer';
      avatarColor = 'bg-[#4285f4]';
    } else {
      name = 'GitHub Hacker';
      avatarColor = 'bg-[#24292e]';
    }

    const payload = { name, avatarColor, provider };
    setCurrentUser(payload);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !currentUser) return;

    const formattedTime = () => {
      const now = new Date();
      const dd = String(now.getDate()).padStart(2, '0');
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const yyyy = now.getFullYear();
      const hh = String(now.getHours()).padStart(2, '0');
      const min = String(now.getMinutes()).padStart(2, '0');
      return `${dd}/${mm}/${yyyy}, ${hh}:${min}`;
    };

    const newMsg: GuestbookMessage = {
      id: `gmsg-${Date.now()}`,
      name: currentUser.name,
      avatarColor: currentUser.avatarColor,
      isAuthor: false,
      message: inputText.trim(),
      timestamp: formattedTime(),
      reactions: []
    };

    const updated = [...messages, newMsg];
    saveMessages(updated);
    setInputText('');

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleReactToMessage = (messageId: string, emoji: string) => {
    const updated = messages.map(msg => {
      if (msg.id === messageId) {
        const reactionsClone = [...(msg.reactions || [])];
        const existingIdx = reactionsClone.findIndex(r => r.emoji === emoji);

        if (existingIdx > -1) {
          const rx = reactionsClone[existingIdx];
          if (rx.userReacted) {
            const newCount = rx.count - 1;
            if (newCount <= 0) {
              reactionsClone.splice(existingIdx, 1);
            } else {
              reactionsClone[existingIdx] = {
                ...rx,
                count: newCount,
                userReacted: false
              };
            }
          } else {
            reactionsClone[existingIdx] = {
              ...rx,
              count: rx.count + 1,
              userReacted: true
            };
          }
        } else {
          reactionsClone.push({
            emoji,
            count: 1,
            userReacted: true
          });
        }
        return { ...msg, reactions: reactionsClone };
      }
      return msg;
    });

    saveMessages(updated);
    setActiveEmojiMenuId(null);
  };

  const updateProfileNameValue = (newName: string) => {
    if (!currentUser) return;
    const updatedUser = { ...currentUser, name: newName || 'Anonymous Guest' };
    setCurrentUser(updatedUser);
    localStorage.setItem('satria_guestbook_session', JSON.stringify(updatedUser));
  };

  const popularEmojis = ['👌', '👍', '😂', '🔥', '❤️', '🎉', '💡', '🚀'];

  return (
    <div className="space-y-6" id="guestbook-interface-chatwrap">
      {/* Messages viewport card */}
      <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-805 bg-[#fcfdfe] dark:bg-[#0a0a0c] overflow-hidden shadow-sm flex flex-col">
        {/* Styled grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#161b22_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />

        {/* Messaging stream scroll box */}
        <div 
          ref={scrollRef}
          className="max-h-[500px] overflow-y-auto p-5 md:p-6 space-y-6 z-10 scroll-smooth no-scrollbar"
          id="chat-messages-scroll-area"
        >
          {messages.length === 0 ? (
            <div className="text-center py-12 space-y-2 text-neutral-450">
              <Smile size={32} className="mx-auto text-neutral-300 animate-bounce" />
              <p className="text-sm font-medium">{t.noMessages}</p>
            </div>
          ) : (
            messages.map((msg) => {
              const { id, name, isAuthor, message, timestamp, avatarUrl, avatarColor, reactions } = msg;

              return (
                <motion.div 
                  key={id} 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  className={`flex items-start gap-4 max-w-[88%] ${isAuthor ? 'ml-auto flex-row-reverse text-right' : 'mr-auto text-left'}`}
                >
                  {/* Circular Avatar */}
                  <div className="relative shrink-0 select-none">
                    {avatarUrl ? (
                      <div className="w-[38px] h-[38px] rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-100">
                        <img 
                          src={avatarUrl} 
                          alt={name} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className={`w-[38px] h-[38px] rounded-full ${avatarColor || 'bg-neutral-600'} text-white flex items-center justify-center font-bold text-sm shadow-sm border border-neutral-200/40 dark:border-neutral-800/40`}>
                        {name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    {/* Star visual overlay for author verification */}
                    {isAuthor && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-neutral-900 border border-white dark:border-neutral-950 flex items-center justify-center shadow-md scale-95" title="Verified Author">
                        <span className="text-[10px] font-black leading-none -translate-y-[0.5px]">★</span>
                      </div>
                    )}
                  </div>

                  {/* Messaging metadata and content box */}
                  <div className={`space-y-1.5 ${isAuthor ? 'items-end' : 'items-start'} flex flex-col`}>
                    
                    <div className="flex items-center gap-2 text-[11px] md:text-xs text-neutral-450 dark:text-neutral-550 font-sans font-semibold">
                      {isAuthor ? (
                        <>
                          <span className="font-mono">{timestamp}</span>
                          <span className="mx-0.5">•</span>
                          <span className="inline-flex items-center gap-1 bg-amber-400 text-neutral-950 font-bold px-1.5 py-0.5 rounded-full text-[9px] scale-95 uppercase tracking-wider shadow-sm select-none">
                            <Key size={9} strokeWidth={3} />
                            <span>Author</span>
                          </span>
                          <span className="font-extrabold text-neutral-850 dark:text-neutral-250">
                            {name}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="font-extrabold text-neutral-850 dark:text-neutral-250">
                            {name}
                          </span>
                          <span className="mx-0.5">•</span>
                          <span className="font-mono">{timestamp}</span>
                        </>
                      )}
                    </div>

                    {/* Speech Bubble Card Container */}
                    <div 
                      className={`px-4.5 py-3 rounded-2xl text-[13.5px] leading-relaxed font-sans shadow-sm ${
                        isAuthor 
                          ? 'bg-amber-400 text-neutral-950 font-semibold rounded-tr-none text-left' 
                          : 'bg-neutral-100 dark:bg-[#18181b] text-neutral-800 dark:text-neutral-100 rounded-tl-none border border-neutral-200/50 dark:border-neutral-800/80 text-left'
                      }`}
                    >
                      <p className="whitespace-pre-wrap select-text">{message}</p>
                    </div>

                    {/* Reactions display cluster */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                      {reactions && reactions.map((rx, rIdx) => (
                        <button
                          key={rIdx}
                          onClick={() => handleReactToMessage(id, rx.emoji)}
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                            rx.userReacted 
                              ? 'bg-amber-400/20 text-amber-500 border-amber-500/40 font-bold scale-[1.04]' 
                              : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-[#111113] dark:hover:bg-neutral-800 text-neutral-500 border-neutral-200 dark:border-neutral-800'
                          }`}
                        >
                          <span>{rx.emoji}</span>
                          <span className="font-mono text-[10px]">{rx.count}</span>
                        </button>
                      ))}

                      {/* Unified dynamic plus reactions handle */}
                      <div className="relative">
                        <button
                          onClick={() => setActiveEmojiMenuId(activeEmojiMenuId === id ? null : id)}
                          className="w-[22px] h-[22px] rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 active:scale-90 transition-all cursor-pointer"
                        >
                          <Plus size={11} strokeWidth={2.5} />
                        </button>

                        <AnimatePresence>
                          {activeEmojiMenuId === id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9, y: 5 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9, y: 5 }}
                              className="absolute z-20 bottom-7 left-0 bg-white dark:bg-[#161619] border border-neutral-200 dark:border-neutral-800 rounded-xl p-1.5 flex gap-1 shadow-lg"
                            >
                              {popularEmojis.map((emo) => (
                                <button
                                  key={emo}
                                  onClick={() => handleReactToMessage(id, emo)}
                                  className="w-7 h-7 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-sm active:scale-125 transition-transform cursor-pointer font-sans"
                                >
                                  {emo}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Guest author signatures */}
      <div 
        className="w-full text-left p-5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0c0e] rounded-3xl transition-all duration-300 flex flex-col justify-between" 
        id="guestbook-signature-input"
      >
        <AnimatePresence mode="wait">
          {!currentUser ? (
            <motion.div
              key="auth-gate"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="space-y-4 w-full"
              id="guestbook-auth-login-gate"
            >
              <p className="text-xs md:text-[13px] text-neutral-450 dark:text-neutral-500 font-medium font-sans">
                {t.authNotice}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-3">
                {/* Virtual Google Login */}
                <button
                  type="button"
                  onClick={() => handleVirtualLogin('google')}
                  className="w-full sm:w-auto px-5 py-2.5 border border-neutral-200 dark:border-neutral-850 bg-white dark:bg-[#111113] hover:bg-neutral-100 dark:hover:bg-[#18181b] rounded-2xl text-xs md:text-sm font-extrabold text-neutral-700 dark:text-neutral-200 shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span>{t.googleSignIn}</span>
                </button>

                {/* Virtual GitHub Login */}
                <button
                  type="button"
                  onClick={() => handleVirtualLogin('github')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#09090b] text-white hover:bg-zinc-900 border border-zinc-800 rounded-2xl text-xs md:text-sm font-extrabold shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>{t.githubSignIn}</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="auth-input"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="space-y-4 w-full"
            >
              {/* Inline headers */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-extrabold ${currentUser.avatarColor}`}>
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-neutral-400 font-sans">{t.signedInAs}</span>
                    <input 
                      type="text" 
                      value={currentUser.name}
                      onChange={(e) => updateProfileNameValue(e.target.value)}
                      className="font-extrabold text-neutral-805 dark:text-neutral-100 bg-transparent px-1 border-b border-dashed border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-amber-400 max-w-[124px]"
                      placeholder="Your Name"
                    />
                    <span className="text-[10px] text-neutral-400 font-mono italic">({currentUser.provider})</span>
                  </div>
                </div>

                {/* Sign out indicator */}
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-1 text-[10.5px] font-bold text-neutral-450 hover:text-rose-500 transition-colors uppercase tracking-wider font-mono cursor-pointer"
                >
                  <LogOut size={11} />
                  <span>{t.signOutBtn}</span>
                </button>
              </div>

              {/* Message payload */}
              <form onSubmit={handleSendMessage} className="space-y-3">
                <div className="relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={t.inputPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:border-neutral-400 dark:focus:border-neutral-750 focus:outline-none transition-all text-sm text-neutral-850 dark:text-neutral-100 placeholder-neutral-400 font-sans resize-none shadow-sm"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4.5 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white font-extrabold tracking-tight rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer font-sans"
                  >
                    <span>{t.sendBtn}</span>
                    <Send size={12} strokeWidth={2.5} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};



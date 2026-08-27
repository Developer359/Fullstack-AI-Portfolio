import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { Keyboard } from 'lucide-react';

interface FooterBlockProps {
  variant: 'sidebar' | 'drawer';
}

export const FooterBlock: React.FC<FooterBlockProps> = ({ variant }) => {
  const { lang, currentUser, setCurrentUser } = usePortfolio();
  const isSidebar = variant === 'sidebar';

  const handleGoogleLogin = () => {
    setCurrentUserState();
  };

  const setCurrentUserState = () => {
    setCurrentUser({
      name: 'Google Explorer',
      avatarColor: 'bg-[#4285f4]',
      provider: 'google'
    });
  };

  return (
    <div className={isSidebar ? "space-y-2 pt-1 mt-1" : "space-y-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-850 mt-6 select-none animate-fade-in"}>
      {isSidebar && <div className="h-[1px] w-full bg-neutral-300 dark:bg-neutral-800" />}

      {currentUser ? (
        <button 
          type="button"
          onClick={() => setCurrentUser(null)}
          className={`w-full flex items-center justify-between px-3 rounded-lg text-neutral-600 dark:text-neutral-400 font-normal hover:bg-neutral-100 dark:hover:bg-neutral-900/40 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-150 group cursor-pointer ${
            isSidebar ? 'py-1.5 text-xs' : 'py-2.5 text-sm'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-extrabold select-none shrink-0 ${currentUser.avatarColor}`}>
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <span className="truncate max-w-[100px] text-left font-semibold">{currentUser.name}</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-405 group-hover:text-rose-500 font-black">Sign Out</span>
        </button>
      ) : (
        <button 
          type="button"
          onClick={() => setCurrentUser({ name: 'Google Explorer', avatarColor: 'bg-[#4285f4]', provider: 'google' })}
          className={`w-full flex items-center gap-3 px-3 rounded-lg text-neutral-600 dark:text-neutral-400 font-normal hover:bg-neutral-100 dark:hover:bg-neutral-900/40 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 group cursor-pointer ${
            isSidebar ? 'py-1 text-[13px]' : 'py-2.5 text-[14px]'
          }`}
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 25 25">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="text-left">{lang === 'US' ? 'Google Login' : 'Google Se Login'}</span>
        </button>
      )}

      {isSidebar && <div className="h-[1px] w-full bg-neutral-300 dark:bg-neutral-800 lg:mb-1" />}

    </div>
  );
};

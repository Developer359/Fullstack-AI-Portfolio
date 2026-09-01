import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { Sun, Moon } from 'lucide-react';

interface SwitchesProps {
  variant: 'sidebar' | 'drawer';
}

// Shared tooltip styles
const tooltipCls =
  'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-700 text-white text-xs font-medium rounded-md shadow-md opacity-0 pointer-events-none whitespace-nowrap z-50 transition-opacity duration-150 ease-in-out';
const caretCls =
  'absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-700';

export const Switches: React.FC<SwitchesProps> = ({ variant }) => {
  const { lang, setLang, theme, setTheme } = usePortfolio();

  const isSidebar = variant === 'sidebar';

  if (isSidebar) {
    return (
      <>
        {/* ── Language Pill ── */}
        <div className="relative flex items-center bg-neutral-100 dark:bg-[#141417] border border-neutral-200 dark:border-neutral-800 rounded-full p-1 h-10 w-[100px] shadow-inner shrink-0">

          {/* US button with its own tooltip */}
          <div className="relative flex-1 h-full group/tooltip-us flex items-center justify-center">
            <div className={`${tooltipCls} group-hover/tooltip-us:opacity-100`}>
              English
              <div className={caretCls} />
            </div>
            <button
              onClick={() => setLang('US')}
              className={`w-full h-full rounded-full text-xs font-bold transition-all flex items-center justify-center select-none cursor-pointer ${
                lang === 'US'
                  ? 'bg-yellow-400 text-neutral-950 font-extrabold shadow-sm'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100'
              }`}
            >
              US
            </button>
          </div>

          {/* PK button with its own tooltip */}
          <div className="relative flex-1 h-full group/tooltip-pk flex items-center justify-center">
            <div className={`${tooltipCls} group-hover/tooltip-pk:opacity-100`}>
              Urdu
              <div className={caretCls} />
            </div>
            <button
              onClick={() => setLang('ID')}
              className={`w-full h-full rounded-full text-xs font-bold transition-all flex items-center justify-center select-none cursor-pointer ${
                lang === 'ID'
                  ? 'bg-yellow-400 text-neutral-950 font-extrabold shadow-sm'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100'
              }`}
            >
              PK
            </button>
          </div>
        </div>

        {/* ── Theme Pill ── */}
        <div className="flex items-center bg-neutral-100 dark:bg-[#141417] border border-neutral-200 dark:border-neutral-800 rounded-full p-1 h-10 w-[100px] shadow-inner shrink-0">

          {/* Sun / Light button */}
          <div className="relative flex-1 h-full group/tooltip-sun flex items-center justify-center">
            <div className={`${tooltipCls} group-hover/tooltip-sun:opacity-100`}>
              Light
              <div className={caretCls} />
            </div>
            <button
              onClick={() => setTheme('light')}
              className={`w-full h-full rounded-full transition-all flex items-center justify-center select-none cursor-pointer ${
                theme === 'light'
                  ? 'bg-white text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'
              }`}
            >
              <Sun size={15} />
            </button>
          </div>

          {/* Moon / Dark button */}
          <div className="relative flex-1 h-full group/tooltip-moon flex items-center justify-center">
            <div className={`${tooltipCls} group-hover/tooltip-moon:opacity-100`}>
              Dark
              <div className={caretCls} />
            </div>
            <button
              onClick={() => setTheme('dark')}
              className={`w-full h-full rounded-full transition-all flex items-center justify-center select-none cursor-pointer ${
                theme === 'dark'
                  ? 'bg-neutral-800 text-neutral-100 font-bold shadow-sm'
                  : 'text-neutral-450 hover:text-neutral-300 dark:hover:text-neutral-100'
              }`}
            >
              <Moon size={15} />
            </button>
          </div>
        </div>
      </>
    );
  }

  // ── Drawer / Mobile variant ──
  return (
    <div className="flex items-center shrink-0">
      <div className="relative group/mobile-lang">
        <button
          onClick={() => setLang(lang === 'US' ? 'ID' : 'US')}
          className="px-2.5 py-1 text-[11px] font-black rounded-lg bg-yellow-400 hover:bg-yellow-500 text-neutral-950 flex items-center gap-1 active:scale-95 transition-all cursor-pointer font-mono select-none"
        >
          {lang === 'ID' ? 'PK' : 'US'}
        </button>
        <div className="absolute bottom-full right-0 mb-2 px-2.5 py-1 bg-neutral-700 text-white text-xs font-medium rounded-md opacity-0 pointer-events-none group-hover/mobile-lang:opacity-100 transition-opacity duration-150 ease-in-out shadow-md whitespace-nowrap z-50">
          {lang === 'ID' ? 'English' : 'Urdu'}
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-neutral-700" />
        </div>
      </div>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 transition-colors flex items-center justify-center cursor-pointer"
        title="Toggle Theme"
      >
        {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
      </button>
    </div>
  );
};



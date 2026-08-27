import React from 'react';
import { usePortfolio, StatusMode } from '../../../context/PortfolioContext';
// @ts-ignore
import subhanAvatar from '../../../assets/images/Profileimg.jpg';

interface ProfileBlockProps {
  variant: 'sidebar' | 'drawer';
}

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ variant }) => {
  const { lang, statusMode, toggleStatusMode } = usePortfolio();
  
  const isSidebar = variant === 'sidebar';

  const getStatusLabel = (mode: StatusMode, currentLang: 'US' | 'ID') => {
    const mapping = {
      open: { US: 'Full Stack Engineer', },
      hire: { US: 'Designer' },
      collaborate: { US: "AI Product Engineer" },
      building: { US: 'AI Engineer' }
    };
    return mapping[mode]?.[currentLang] || mapping[mode]?.US || '';
  };

  const getStatusColor = (mode: StatusMode) => {
    const mapping = {
      open: 'bg-[#22c55e]',        // Emerald/Green
      hire: 'bg-[#ff9f0a]',        // Orange/Amber
      collaborate: 'bg-[#3b82f6]', // Blue
      building: 'bg-[#eab308]'     // Yellow
    };
    return mapping[mode] || 'bg-neutral-400';
  };

  if (isSidebar) {
    return (
      <div className="flex flex-col items-center text-center space-y-2 ">
        <div className="relative group ">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 opacity-60 blur-md group-hover:opacity-100 transition-all duration-500 animate-pulse" />
          
          <div className="absolute -inset-[2.5px] rounded-full bg-[conic-gradient(from_0deg,#eab308,#f59e0b,#ef4444,#eab308)] animate-spin-slow opacity-85 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500" />
          
          <div className="relative w-21 h-21 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-xl transition-transform duration-500">
            <img 
              src={subhanAvatar} 
              alt="Subhan Logo" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-1.5">
            <h2 className="font-bold text-xl lg:ml-3 text-neutral-900 dark:text-neutral-50 tracking-tight">M.subhan</h2>
            
            <div className="relative group/tooltip flex items-center shrink-0">
              <div className="flex items-center justify-center bg-blue-500 text-white rounded-full p-0.5 w-[15px] h-[15px] cursor-help shadow-sm transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 dark:bg-neutral-800 text-white dark:text-neutral-100 text-[10px] font-bold rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none shadow-md whitespace-nowrap -translate-y-1 group-hover/tooltip:translate-y-0">
                Verified
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-800" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={toggleStatusMode}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-[#141417]/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all select-none shadow-sm cursor-pointer"
            >
              <div className={`w-2 h-2 rounded-full ${getStatusColor(statusMode)} animate-pulse`} />
              <span>{getStatusLabel(statusMode, lang)}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Drawer variant (compact mobile/tablet row structure)
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative group cursor-pointer shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 opacity-50 blur-sm group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute -inset-[2px] rounded-full bg-[conic-gradient(from_0deg,#eab308,#f59e0b,#ef4444,#eab308)] animate-spin-slow opacity-80" />
        
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-md">
          <img 
            src={subhanAvatar} 
            alt="Subhan Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-sm tracking-tight text-neutral-900 dark:text-neutral-50">Satria Bahari</span>
          <div className="relative group/tooltip flex items-center shrink-0">
            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full p-0.5 w-3.5 h-3.5 cursor-help shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-1.5 py-0.5 bg-neutral-900 dark:bg-neutral-800 text-white dark:text-neutral-100 text-[9px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none shadow-md whitespace-nowrap -translate-y-0.5 group-hover/tooltip:translate-y-0">
              Verified
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-[3px] border-transparent border-t-neutral-900 dark:border-t-neutral-800" />
            </div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 select-none block">
          {getStatusLabel(statusMode, lang)}
        </span>
      </div>
    </div>
  );
};
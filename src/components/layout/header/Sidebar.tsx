import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { ProfileBlock } from './ProfileBlock';
import { NavigationList } from './NavigationList';
import { Switches } from './Switches';
import { FooterBlock } from './FooterBlock';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = usePortfolio();

  return (
    <aside 
      id="sidebar-container" 
      className="hidden lg:flex lg:w-72 flex-col pt-5 pb-3 lg:pl-9 bg-[#fbfbfb] dark:bg-[#0c0c0d]  lg:fixed lg:left-0  lg:top-0 lg:h-screen lg:max-h-screen shrink-0 z-30 overflow-hidden"
    >
      <div className="flex-shrink-0 space-y-4 pb-4">
        <ProfileBlock variant="sidebar" />

        <div className="flex items-center justify-center gap-1.5 lg:mb-5 lg:mt-[-3px] max-w-[240px] mx-auto">
          <Switches variant="sidebar" />

          <button 
            onClick={() => setActiveTab('Dashboard')}
            className={`h-9 w-9 rounded-full bg-neutral-100 dark:bg-[#141417] border flex items-center justify-center hover:text-yellow-500 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer shrink-0 ${
              activeTab === 'Dashboard'
                ? 'border-yellow-400 text-yellow-500 bg-yellow-400/5'
                : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400'
            }`}
            title="System Dashboard"
          >
            <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
            </svg>
          </button>
        </div>

        <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />
      </div>

      <div className="flex-1 overflow-y-auto custom-sidebar-scrollbar pr-1 pb-4">
        <NavigationList variant="sidebar" />
      </div>

      <div className="flex-shrink-0">
        <FooterBlock variant="sidebar" />
      </div>
    </aside>
  );
};

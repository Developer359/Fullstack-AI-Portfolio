import React from 'react';
import { usePortfolio, PageTab } from '../../../context/PortfolioContext';
import { 
  Home, 
  User, 
  Tv, 
  Award, 
  Briefcase, 
  LayoutDashboard, 
  BookOpen, 
  Mail, 
  Link2 
} from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationListProps {
  variant: 'sidebar' | 'drawer';
  onItemClick?: () => void;
}

export const NavigationList: React.FC<NavigationListProps> = ({ variant, onItemClick }) => {
  const { activeTab, setActiveTab } = usePortfolio();

  const isSidebar = variant === 'sidebar';
  const iconSize = isSidebar ? 19 : 18;

  const navigationItems: { label: PageTab; icon: React.ReactNode }[] = [
    { label: 'Home', icon: <Home size={iconSize} /> },
    { label: 'About', icon: <User size={iconSize} /> },
    { label: 'Creations', icon: <Tv size={iconSize} /> },
    { label: 'Achievements', icon: <Award size={iconSize} /> },
    { label: 'Projects', icon: <Briefcase size={iconSize} /> },
    { label: 'Dashboard', icon: <LayoutDashboard size={iconSize} /> },
    { label: 'Guestbook', icon: <BookOpen size={iconSize} /> },
    { label: 'Contact', icon: <Mail size={iconSize} /> },
    { label: 'Links', icon: <Link2 size={iconSize} /> },
  ];

  return (
    <nav className={isSidebar ? 'space-y-2' : 'space-y-1'}>
      {navigationItems.map((item) => {
        const isActive = activeTab === item.label;
        return (
          <button
            key={item.label}
            onClick={() => {
              setActiveTab(item.label);
              if (onItemClick) {
                onItemClick();
              }
            }}
            className={`w-[calc(100%-1.5rem)] lg:ml-4 flex items-center justify-between px-3 rounded-lg text-base transition-all duration-150 group relative select-none cursor-pointer ${
              isSidebar
                ? isActive
                  ? 'bg-neutral-200/60 dark:bg-[#2a2a2c] text-neutral-900 dark:text-neutral-100 font-semibold shadow-sm py-2 px-3'
                  : 'text-neutral-600 dark:text-neutral-400 font-normal hover:bg-neutral-100 dark:hover:bg-neutral-900/40 hover:text-neutral-900 dark:hover:text-neutral-100 py-2 px-3'
                : isActive
                  ? 'bg-neutral-250/20 dark:bg-[#2a2a2c] text-neutral-900 dark:text-neutral-100 font-bold shadow-sm py-2.5 px-3.5'
                  : 'text-neutral-600 dark:text-neutral-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900/30 py-2.5 px-3.5'
            }`}
          >
            {/* Background pill spring layout transition for super premium feel */}
            {isActive && (
              <motion.span
                layoutId={`active-tab-${variant}`}
                className={`absolute inset-0 rounded-xl z-0 ${
                  isSidebar 
                    ? 'bg-neutral-200/30 dark:bg-[#2a2a2c]' 
                    : 'bg-neutral-250/10 dark:bg-[#2a2a2c]'
                }`}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}

            <div className="flex items-center gap-3.5 relative z-10">
              <span className={isActive ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-400 dark:text-neutral-500'}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>

            {isActive && (
              <span className="text-neutral-400 dark:text-neutral-500 font-normal text-md leading-none relative z-10">
                →
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
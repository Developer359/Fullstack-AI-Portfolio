import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { 
 Menu, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProfileBlock } from './ProfileBlock';
import { NavigationList } from './NavigationList';
import { Switches } from './Switches';
import { FooterBlock } from './FooterBlock';

export const Header: React.FC = () => {
  const { lang } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Sticky High-contrast Top Header bar for Mobile / Tablet  lg:hidden*/}

      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#0c0c0d]/85 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-900/65 lg:hidden px-4 py-3 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-2 px-1 select-none">
          <span className="font-black text-lg tracking-tight text-neutral-900 dark:text-neutral-50 hover:text-yellow-500 transition-colors">
            M.Subhan
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick interactive Hamburger trigger button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:outline-none transition-colors duration-155 active:scale-95 cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[3px] lg:hidden"
            />

            {/* Content Drawer Wrapper */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#fafafa] dark:bg-[#0c0c0d] border-l border-neutral-200 dark:border-neutral-900 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto no-scrollbar lg:hidden"
            >
              <div className="space-y-6 ">
                
                {/* Drawer Header Block: Profile image + Title + Swithes + Close trigger */}
                <div className="flex items-center  justify-between pb-4 border-b border-neutral-200/60 dark:border-neutral-850">
                  <ProfileBlock variant="drawer" />

                  {/* Upper switches panel */}
                  <div className="flex items-center gap-1.5">
                    <Switches variant="drawer" />

                    {/* Close Drawer Button */}
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* List of navigational elements */}
                <NavigationList variant="drawer" onItemClick={() => setMobileMenuOpen(false)} />
              </div>

              {/* Drawer Bottom Panel: Auth, Cmd Palette, Credit Info */}
              <FooterBlock variant="drawer" />

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export { Sidebar } from './Sidebar';

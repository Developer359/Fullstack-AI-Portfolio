import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { motion, AnimatePresence } from 'motion/react';

import HomePage from './Pages/Home/page';
import AboutPage from './Pages/About/page';
import AchievementsPage from './Pages/Achievements/page';
import ContactPage from './Pages/Contact/page';
import CreationsPage from './Pages/Creations/page';
import DashboardPage from './Pages/Dashboard/page';
import GuestbookPage from './Pages/Guestbook/page';
import LinksPage from './Pages/Links/page';
import ProjectsPage from './Pages/Projects/page';

export default function Page() {
  const { activeTab } = usePortfolio();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Creations':
        return <CreationsPage />;
      case 'Achievements':
        return <AchievementsPage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Dashboard':
        return <DashboardPage />;
      case 'Guestbook':
        return <GuestbookPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Links':
        return <LinksPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="max-w-4xl w-full"
      >
        {renderActivePage()}
      </motion.div>
    </AnimatePresence>
  );
}
export { Page };

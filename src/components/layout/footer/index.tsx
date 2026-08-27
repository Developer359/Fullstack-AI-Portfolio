import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { lang } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 md:pt-6 px-4 mt-6 border-t border-neutral-200 dark:border-neutral-900 text-center text-xs text-neutral-500 dark:text-neutral-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <div>
          <span>COPYRIGHT © {currentYear} • M.Subhan. </span>
          <span>{lang === 'US' ? 'All rights reserved.' : 'Tamam huqooq mehfooz hain.'}</span>
        </div>
      </div>
    </footer>
  );
};

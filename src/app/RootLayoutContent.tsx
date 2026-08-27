import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Header, Sidebar } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme } = usePortfolio();

  return (
    <div className="lg:ml-5 min-h-screen lg:h-screen lg:overflow-hidden font-sans bg-[#fafafa] dark:bg-[#0c0c0d] text-neutral-900 dark:text-neutral-50 selection:bg-amber-400 selection:text-neutral-950 transition-colors duration-300">
      <Header />

      <div className="w-full flex flex-col lg:flex-row lg:items-start relative min-h-screen lg:h-screen lg:overflow-hidden">
        <Sidebar />

        <main className="flex-1 min-w-0 px-4 md:px-28 lg:px-37 py-8 md:py-12 lg:pl-13 lg:ml-78 space-y-9 h-auto lg:h-screen lg:overflow-y-auto md:pb-4">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export { RootLayoutContent };

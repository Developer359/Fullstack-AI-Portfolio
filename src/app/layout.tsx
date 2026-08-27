import React from 'react';
import { PortfolioProvider } from '../context/PortfolioContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioProvider>
      {children}
    </PortfolioProvider>
  );
}

export { RootLayout };

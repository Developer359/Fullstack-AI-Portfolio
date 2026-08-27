import React from 'react';
import RootLayout from './app/layout';
import RootLayoutContent from './app/RootLayoutContent';
import Page from './app/page';

export default function App() {
  return (
    <RootLayout>
      <RootLayoutContent>
        <Page />
      </RootLayoutContent>
    </RootLayout>
  );
}


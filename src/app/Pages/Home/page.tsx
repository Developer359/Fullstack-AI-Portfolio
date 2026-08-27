import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { SkillsOverview } from './sections/SkillsOverview';

export default function HomePage() {
  return (
    <div className="space-y-10 pb-8 animate-fade-in font-sans" id="home-page-container">
      <HeroSection />
      <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />
      <SkillsOverview />
    </div>
  );
}

export { HomePage };

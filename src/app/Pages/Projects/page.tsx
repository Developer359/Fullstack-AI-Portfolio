import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { projectsData } from './data/projectsData';
import { ProjectFilter, ProjectGrid, ProjectDetail } from './sections/ProjectGrid';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectsPage() {
  const { lang, activeTab } = usePortfolio();
  
  // States for sub-filtering
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // State for specific active detail selection
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Filter projects by both type and category
  const filteredProjects = projectsData.filter((p) => {
    const typeMatch = selectedType === 'All' || p.type === selectedType;
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  const selectedProject = projectsData.find((p) => p.id === selectedProjectId);

  // Guarantee window is scrolled to top when detail view is opened/closed
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedProjectId]);

  // Reset detail state when tab changes
  useEffect(() => {
    setSelectedProjectId(null);
  }, [activeTab]);

  return (
    <div className="select-normal">
      <AnimatePresence mode="wait">
        {selectedProjectId && selectedProject ? (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ProjectDetail 
              project={selectedProject} 
              onBack={() => setSelectedProjectId(null)} 
            />
          </motion.div>
        ) : (
          <motion.div
            key="project-grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Exact Header matched from the Video */}
            <div className="space-y-1.5 border-b border-dashed border-neutral-200/50 dark:border-neutral-800 pb-4 select-none">
              <h2 className="text-3xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                {lang === 'US' ? 'Projects' : 'Manshoobay'}
              </h2>
              <p className="text-[14px] text-neutral-500 dark:text-neutral-400">
                {lang === 'US' 
                  ? "A showcase of both private and open-source projects I've built or contributed to." 
                  : "Mere banaye gaye ya share kiye gaye zaati aur open-source projects ka ek showcase."}
              </p>
            </div>

            {/* Dual Filters */}
            <ProjectFilter 
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />

            {/* Interactive Grid List */}
            <ProjectGrid 
              projects={filteredProjects} 
              onSelectProject={(id) => setSelectedProjectId(id)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { ProjectsPage };

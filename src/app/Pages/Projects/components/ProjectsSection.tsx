// ─────────────────────────────────────────────────────────────────
// components/ProjectsSection.tsx
// Main orchestrator: owns filter state, derives category options,
// and maps filtered projects into ProjectCard components.
// ─────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { projectsData } from '../data/projects';
import { Project, ProjectType, ProjectCategory } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from '../sections/ProjectGrid';
import type { Project as LegacyProject } from '../data/projectsData';

// ── Filter config ─────────────────────────────────────────────────

type TypeOption = 'All' | ProjectType;
type CategoryOption = 'All' | 'Featured' | ProjectCategory;

interface FilterRow {
  type: TypeOption;
  categories: CategoryOption[];
}

const TYPE_OPTIONS: TypeOption[] = ['All', 'Web+Mobile', 'Design', 'HLD'];

/** Cascading category options — derived from the selected type */
const CATEGORY_MAP: Record<TypeOption, CategoryOption[]> = {
  All: ['All', 'Featured'],
  'Web+Mobile': ['All', 'Featured', 'Web', 'Mobile'],
  Design: ['All', 'Featured', 'Web', 'Mobile'],
  HLD: ['All', 'Featured', 'Projects', 'Apps', 'Backend'],
};

// ── Animated filter pill ──────────────────────────────────────────
interface FilterPillProps {
  label: string;
  isActive: boolean;
  layoutId: string;
  onClick: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({ label, isActive, layoutId, onClick }) => (
  <button
    onClick={onClick}
    id={`filter-pill-${layoutId}-${label.replace(/[^a-zA-Z0-9]/g, '-')}`}
    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide
                whitespace-nowrap cursor-pointer transition-colors duration-200 select-none
                ${isActive
      ? 'text-neutral-950 font-extrabold'
      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 bg-neutral-100 hover:bg-neutral-200/70 dark:bg-neutral-900/60 dark:hover:bg-neutral-800/80'
    }`}
  >
    {isActive && (
      <motion.span
        layoutId={layoutId}
        className="absolute inset-0 bg-yellow-400 rounded-full z-0"
        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
      />
    )}
    <span className="relative z-10">{label}</span>
  </button>
);

// ── Empty state ───────────────────────────────────────────────────
const EmptyState: React.FC<{ lang: 'US' | 'ID' }> = ({ lang }) => (
  <div className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-4 select-none animate-fade-in col-span-2">
    <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xl shadow-sm">
      💡
    </div>
    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
      {lang === 'US' ? 'No projects match the selected filters.' : 'Filters ke mutabiq koi projects nahi mile.'}
    </p>
  </div>
);

// ── Main section ──────────────────────────────────────────────────
export const ProjectsSection: React.FC = () => {
  const { lang, activeTab } = usePortfolio();

  // Row 1 — TYPE
  const [selectedType, setSelectedType] = useState<TypeOption>('All');
  // Row 2 — CATEGORY (cascades from selectedType)
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>('All');
  // Selected project for detail view
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // When type changes, always reset category to "All"
  const handleTypeChange = (type: TypeOption) => {
    setSelectedType(type);
    setSelectedCategory('All');
  };

  // Dynamic category options for the current type
  const categoryOptions = useMemo<CategoryOption[]>(
    () => CATEGORY_MAP[selectedType],
    [selectedType]
  );

  // Derived filtered list
  const filteredProjects = useMemo<Project[]>(() => {
    return projectsData.filter(p => {
      const typeMatch =
        selectedType === 'All' || p.primaryType === selectedType;
        
      let categoryMatch = false;
      if (selectedCategory === 'All') {
        categoryMatch = true;
      } else if (selectedCategory === 'Featured') {
        categoryMatch = p.isFeatured === true;
      } else {
        categoryMatch = p.category === selectedCategory;
      }
      
      return typeMatch && categoryMatch;
    });
  }, [selectedType, selectedCategory]);

  const selectedProject = useMemo(
    () => projectsData.find(p => p.id === selectedProjectId),
    [selectedProjectId]
  );

  // Scroll to top when entering/leaving detail view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedProjectId]);

  // Clear detail when tab changes
  useEffect(() => {
    setSelectedProjectId(null);
  }, [activeTab]);

  return (
    <div className="select-normal">
      <AnimatePresence mode="wait">
        {selectedProjectId && selectedProject ? (
          /* ── Detail View ─────────────────────────────────── */
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ProjectDetail
              project={{
                // Bridge: map new Project schema → legacy ProjectDetail interface
                id: selectedProject.id,
                title: selectedProject.title,
                description: selectedProject.description,
                category: selectedProject.category as string,
                type: selectedProject.primaryType as string,
                tags: selectedProject.techStack,
                imageUrl: selectedProject.image,
                githubUrl: selectedProject.githubUrl,
                demoUrl: selectedProject.demoUrl,
                featured: selectedProject.isFeatured,
                views: selectedProject.views,
                introduction: selectedProject.introduction,
                techStackList: selectedProject.techStackList,
                featuresList: selectedProject.featuresList,
              } as LegacyProject}
              onBack={() => setSelectedProjectId(null)}
            />
          </motion.div>
        ) : (
          /* ── Grid View ───────────────────────────────────── */
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* ── Header ──────────────────────────────────── */}
            <div className="space-y-1.5 pb-4 border-b border-dashed border-neutral-200/50 dark:border-neutral-800 select-none">
              <h2 className="text-3xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                {lang === 'US' ? 'Projects' : 'Manshoobay'}
              </h2>
              <p className="text-[14px] text-neutral-500 dark:text-neutral-400">
                {lang === 'US'
                  ? "A showcase of both private and open-source projects I've built or contributed to."
                  : 'Mere banaye gaye ya share kiye gaye zaati aur open-source projects ka ek showcase.'}
              </p>
            </div>

            {/* ── Cascading Filter Rows ────────────────────── */}
            <div className="space-y-3 py-1 select-none">
              {/* Row 1 — TYPE */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                <span className="text-[10px] font-black font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase min-w-[75px] shrink-0">
                  TYPE
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {TYPE_OPTIONS.map(type => (
                    <FilterPill
                      key={type}
                      label={type}
                      isActive={selectedType === type}
                      layoutId="activeTypePill"
                      onClick={() => handleTypeChange(type)}
                    />
                  ))}
                </div>
              </div>

              {/* Row 2 — CATEGORY (cascades) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedType} // re-animate when category list changes
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3"
                >
                  <span className="text-[10px] font-black font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase min-w-[75px] shrink-0">
                    CATEGORY
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {categoryOptions.map(cat => (
                      <FilterPill
                        key={cat}
                        label={cat}
                        isActive={selectedCategory === cat}
                        layoutId="activeCategoryPill"
                        onClick={() => setSelectedCategory(cat)}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Project Cards Grid ───────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.length === 0 ? (
                  <EmptyState lang={lang} />
                ) : (
                  filteredProjects.map(project => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={id => setSelectedProjectId(id)}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// components/ProjectCard.tsx
// Isolated, fully reusable card component for a single project.
// Receives a Project object and an onSelect callback — no state.
// ─────────────────────────────────────────────────────────────────

import React from 'react';
import { Pin } from 'lucide-react';
import { motion } from 'motion/react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { Project } from '../types/project';
import { TechIcon } from '../sections/ProjectGrid';

// ── Project Card ──────────────────────────────────────────────────
export interface ProjectCardProps {
  project: Project;
  onSelect: (id: string) => void;
}

const VISIBLE_TECH = 4;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { lang } = usePortfolio();

  const visibleTech = project.techStack.slice(0, VISIBLE_TECH);
  const overflowTech = project.techStack.length - VISIBLE_TECH;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.14 } }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      className="group cursor-pointer flex"
    >
      <div
        id={`project-card-${project.id}`}
        role="article"
        aria-label={project.title}
        className="
          flex flex-col w-full overflow-hidden
          bg-white dark:bg-[#111113]
          border border-neutral-200 dark:border-neutral-800/80
          rounded-2xl shadow-sm
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700
        "
        onClick={e => {
          // Prevent card open when clicking interactive sub-elements
          const t = e.target as HTMLElement;
          if (t.closest('.reaction-button') || t.closest('.picker-container')) return;
          onSelect(project.id);
        }}
      >
        {/* ── Image area ──────────────────────────────────────── */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200/60 dark:border-neutral-800">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
            referrerPolicy="no-referrer"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 pointer-events-none">
            <span className="text-yellow-400 font-extrabold text-xs uppercase tracking-widest bg-black/90 px-5 py-2.5 rounded-xl scale-95 group-hover:scale-100 transition-transform flex items-center gap-1.5 border border-neutral-800 select-none">
              {lang === 'US' ? 'Open Details' : 'Details Dekhein'}
              <span className="font-black">›</span>
            </span>
          </div>

          {/* Featured badge — top-right with pin icon */}
          {project.isFeatured && (
            <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-yellow-400 text-neutral-950 text-[9px] font-black uppercase tracking-widest shadow-md select-none">
              <Pin size={8} className="fill-neutral-950" />
              {lang === 'US' ? 'Featured' : 'Khaas'}
            </span>
          )}

          {/* Category badge — bottom-right */}
          <span className="hidden absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white font-extrabold text-[9px] uppercase font-mono tracking-wider border border-white/5 select-none shadow">
            {project.category}
          </span>

          {/* Type badge — bottom-right */}
          <span className="hidden absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-md text-yellow-400 font-extrabold text-[9px] uppercase font-mono tracking-wider border border-neutral-700/40 select-none shadow">
            {project.primaryType}
          </span>
        </div>

        {/* ── Card body ───────────────────────────────────────── */}
        <div className="flex flex-col flex-1 p-5 gap-4">

          {/* Title + Description */}
          <div className="space-y-1.5">
            <h3 className="font-bold text-[15px] leading-tight tracking-tight text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-[12.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 select-text">
              {project.description[lang]}
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-2 flex-wrap border-t border-neutral-100 dark:border-neutral-800/60 pt-3">
            {visibleTech.map(tag => (
              <TechIcon key={tag} tag={tag} size="sm" />
            ))}
            {overflowTech > 0 && (
              <span className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 select-none">
                +{overflowTech} more
              </span>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

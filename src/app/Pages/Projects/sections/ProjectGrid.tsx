import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { Project } from '../data/projectsData';
import { Sparkles, ArrowLeft, Github, ExternalLink, Copy, Check, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Normalize tech string names to target correct high-fidelity colorful brands
const getNormalizeKey = (tag: string): string => {
  return tag.toLowerCase().trim()
    .replace(/\s+/g, '')
    .replace(/\.js$/, '')
    .replace(/\.css$/, '');
};

interface TechIconProps {
  tag: string;
  /** 'sm' renders a compact 36px icon for card rows; default is 48px for detail views */
  size?: 'sm' | 'default';
}

// Complete High Fidelity Vector Brands Maker
export const TechIcon: React.FC<TechIconProps> = ({ tag, size = 'default' }) => {
  const norm = getNormalizeKey(tag);
  // Sizing helpers — sm: 36px container / default: 48px container
  const box = size === 'sm' ? 'w-9 h-9' : 'w-12 h-12';
  const icon = size === 'sm' ? 'w-5 h-5' : 'w-8 h-8';
  const iconSm = size === 'sm' ? 'w-5 h-5' : 'w-7 h-7';

  // 1. TypeScript
  if (norm === 'typescript' || norm === 'ts') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="TypeScript">
        <svg viewBox="0 0 100 100" className={`${box} rounded-xl overflow-hidden shadow bg-[#3178c6] border border-[#235a96] hover:scale-105 transition-transform duration-200`}>
          <rect width="100" height="100" fill="#3178c6" />
          <text x="88" y="82" fill="white" fontSize="40" fontWeight="910" fontFamily="sans-serif" textAnchor="end">TS</text>
        </svg>
      </span>
    );
  }

  // 2. Tailwind CSS
  if (norm === 'tailwindcss' || norm === 'tailwind' || norm === 'tailwind css') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Tailwind CSS">
        <div className={`${box} rounded-xl bg-[#0b1329] border border-[#0f244a] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.1.1.21.2.32.3 1.05 1.05 2.17 1.88 5.4 1.88 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-.723-.734-2.084-2.114-5.058-2.114V12z" fill="#38bdf8" />
          </svg>
        </div>
      </span>
    );
  }

  // 3. React
  if (norm === 'react' || norm === 'reactjs' || norm === 'react native') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="React">
        <div className={`${box} rounded-xl bg-[#05131d] border border-[#0d2f44] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 100 100" className={`${icon} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="4.5" fill="#61dafb" />
            <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#61dafb" strokeWidth="3" transform="rotate(0 50 50)" />
            <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#61dafb" strokeWidth="3" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#61dafb" strokeWidth="3" transform="rotate(120 50 50)" />
          </svg>
        </div>
      </span>
    );
  }

  // 4. Next.js
  if (norm === 'next' || norm === 'nextjs') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Next.js">
        <div className={`${box} rounded-xl bg-black border border-neutral-800 flex items-center justify-center shadow hover:scale-105 transition-transform duration-200 overflow-hidden p-1`}>
          <svg viewBox="0 0 100 100" className={`${icon} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="black" />
            <path d="M72.5 30L34 76.5H29.5V23.5H35V61L67 23.5H72.5V30Z" fill="url(#nextjs-grad-id)" />
            <rect x="67" y="23.5" width="5.5" height="42.5" fill="white" />
            <defs>
              <linearGradient id="nextjs-grad-id" x1="45" y1="23.5" x2="68" y2="76" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="white" />
                <stop offset="0.6" stopColor="white" />
                <stop offset="1" stopColor="#888" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </span>
    );
  }

  // 5. Supabase
  if (norm === 'supabase') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Supabase">
        <div className={`${box} rounded-xl bg-[#121c16] border border-[#1b3d2b] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M21.362 9.354H12.87v-5.26a1.43 1.43 0 0 0-2.39-1.077L2.473 10.334a1.865 1.865 0 0 0 1.258 3.197h8.492v5.26a1.43 1.43 0 0 0 2.39 1.077l8.007-7.317a1.865 1.865 0 0 0-1.258-3.197z" fill="#3ecf8e" />
          </svg>
        </div>
      </span>
    );
  }

  // 6. PostgreSQL / Postgres
  if (norm === 'postgresql' || norm === 'postgres') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="PostgreSQL">
        <div className={`${box} rounded-xl bg-[#15202e] border border-[#213a52] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 64 64" className={icon}>
            <path d="M47.2 26.3c-.6-.7-1.4-1.2-2.1-1.6-.7-.4-1.4-.7-2.1-1.1-1.4-.7-2.8-1.4-4.2-2.1-1.4-.7-2.7-1.7-3.9-2.8-1.2-1.1-2.2-2.4-3-3.9-.8-1.5-1.2-3.1-1.3-4.8 0-.9-.1-1.7-.1-2.6 0-.8-.1-1.6-.5-2.2-.4-.6-.9-1.1-1.6-1.5-.7-.4-1.5-.6-2.4-.6h-.6c-.9 0-1.7.2-2.4.6-.7.4-1.2.9-1.6 1.5-.4.6-.5 1.4-.5 2.2 0 .9-.1 1.7-.1 2.6 0 1.7-.5 3.3-1.3 4.8-.8 1.5-1.8 2.8-3 3.9-1.2 1.1-2.5 2.1-3.9 2.8-1.4.7-2.8 1.4-4.2 2.1-.7.4-1.4.7-2.1 1.1-.7.4-1.5.9-2.1 1.6-1.3 1.5-2 3.4-2.1 5.3 0 .1 0 .2.1.2s.2 0 .2-.1c.3-.5.7-1.1 1.1-1.4.4-.4.9-.8 1.4-1 .9-.4 1.9-.6 2.9-.6 1.9 0 3.7.8 5 2.1 1.2 1.3 2.1 3.1 2.1 5s-.8 3.7-2.1 5c-1.3 1.2-3.1 2.1-5 2.1-1 0-2-.2-2.9-.6-.5-.2-1-.6-1.4-1-.4-.4-.8-.9-1.1-1.4 0-.1-.1-.1-.2-.1s-.1.1-.1.2c.1 1.9.8 3.8 2.1 5.3.6.7 1.4 1.2 2.1 1.6.7.4 1.4.7 2.1 1.1 1.4.7 2.8 1.4 4.2 2.1 1.4.7 2.7 1.7 3.9 2.8 1.2 1.1 2.2 2.4 3 3.9.8 1.5 1.2 3.1 1.3 4.8 0 .9.1 1.7.1 2.6 0 .8.1 1.6.5 2.2.4.6.9 1.1 1.6 1.5.7.4 1.5.6 2.4.6h.6c.9 0 1.7-.2 2.4-.6.7-.4 1.2-.9 1.6-.1.5 0 1.4-.5 1.5-.7L47.2 26.3z" fill="#336791" />
          </svg>
        </div>
      </span>
    );
  }

  // 7. Kotlin
  if (norm === 'kotlin') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Kotlin">
        <div className={`${box} rounded-xl bg-[#1d143c] border border-[#3e1f7d] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7">
            <defs>
              <linearGradient id="kotlin-grad-p" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E24429" />
                <stop offset="30%" stopColor="#AD448F" />
                <stop offset="100%" stopColor="#4A4CA6" />
              </linearGradient>
            </defs>
            <path d="M24 0H0v24h24L12 12z" fill="url(#kotlin-grad-p)" />
          </svg>
        </div>
      </span>
    );
  }

  // 8. Dart
  if (norm === 'dart') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Dart">
        <div className={`${box} rounded-xl bg-[#0c1f2e] border border-[#0d4e68] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 10l8 8 8-8-8-8z" fill="#00B4AB" />
            <path d="M4 10H12V18" stroke="#00796B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </span>
    );
  }

  // 9. Flutter
  if (norm === 'flutter') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Flutter">
        <div className={`${box} rounded-xl bg-[#06152a] border border-[#093563] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3 2.3L5 11.6l4.7 4.7 9.3-9.3z" fill="#40D0FD" />
            <path d="M14.3 16.3L9.7 20.9 5 16.3l4.7-4.7z" fill="#02569B" />
            <path d="M19 11.6L14.3 7 9.7 11.6l4.6 4.7z" fill="#02569B" />
          </svg>
        </div>
      </span>
    );
  }

  // 10. Laravel
  if (norm === 'laravel') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Laravel">
        <div className={`${box} rounded-xl bg-[#240e11] border border-[#5c131a] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12V3h-6V1h8v11h-2zM11 23V8H5v15h6zM13 19h4v-7h-4s.5-4 4-4" stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </span>
    );
  }

  // 11. Custom Firebase / Google services
  if (norm === 'firebase' || norm === 'firebasefirestore') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Firebase">
        <div className={`${box} rounded-xl bg-[#231d11] border border-[#523d1d] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path d="M3.877 18.006l8.03-14.7a.5.5 0 0 1 .893 0l2.362 4.331-1.393.74L12 4.908l-7.391 13.54a.5.5 0 0 1-.732.158zm16.246 0L12 4.908v13.54a.5.5 0 0 0 .732.442l7.391-4.043a.5.5 0 0 0 0-.885z" fill="#FFA000" />
            <path d="M12 4.908l-5.645 10.33a.5.5 0 0 1-.734.22L2 13.003V18.1a.5.5 0 0 0 .736.442l17.264-9.456a.5.5 0 0 0 0-.885L12 4.908z" fill="#F57C00" />
          </svg>
        </div>
      </span>
    );
  }

  // 12. Android SDK
  if (norm === 'android' || norm === 'androidsdk') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Android SDK">
        <div className={`${box} rounded-xl bg-[#0f1f18] border border-[#1d502f] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm}`} fill="#3DDC84">
            <path d="M17.6 9.48a1 1 0 0 0-1-.88h-1.12l-1.41-3.66a.5.5 0 0 0-.94.36L14.4 8.6H9.6L10.87 5.3a.5.5 0 0 0-.94-.36l-1.41 3.66H7.4a1 1 0 0 0-1 .88l-.4 5.2a1 1 0 0 0 1 .88h1.2v3.66a1.2 1.2 0 0 0 2.4 0V15.2h2.8v3.66a1.2 1.2 0 0 0 2.4 0V15.2h1.2a1 1 0 0 0 1-.88l-.4-5.2zM9 11.6a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zm6 0a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z" />
          </svg>
        </div>
      </span>
    );
  }

  // 13. SWR
  if (norm === 'swr') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="SWR">
        <div className={`${box} rounded-xl bg-black border border-neutral-800 flex items-center justify-center shadow font-black text-white ${size === 'sm' ? 'text-[8px]' : 'text-[10px]'} font-mono hover:scale-105 transition-transform duration-200`}>
          SWR
        </div>
      </span>
    );
  }

  // 14. Prisma
  if (norm === 'prisma') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Prisma">
        <div className={`${box} rounded-xl bg-[#081824] border border-[#0c314b] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" fill="#14a5c3" />
          </svg>
        </div>
      </span>
    );
  }

  // 15. Vite
  if (norm === 'vite') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Vite">
        <div className={`${box} rounded-xl bg-[#14122d] border border-[#2f2766] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 2.5L20 16.5H4L11.5 2.5zm0 0L13.5 9h5l-8.5 12V13h-5L12.5 2.5z" fill="#646CFF" />
            <path d="M13.5 9h5l-8.5 12V13h-5l5.5-9" fill="#FFD600" />
          </svg>
        </div>
      </span>
    );
  }

  // 16. Node.js
  if (norm === 'node' || norm === 'nodejs') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Node.js">
        <div className={`${box} rounded-xl bg-[#121c15] border border-[#234d2b] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={iconSm} fill="#339933">
            <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm-1 15.5v-5l-4-2.25v2.5l4 2.25v2.5zm5-2.25L12 17.5v-2.5l4-2.25v2.5zm0-5L12 12.5v-2.5l4-2.25v2.5z" />
          </svg>
        </div>
      </span>
    );
  }

  // 17. Livewire
  if (norm === 'livewire') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Livewire">
        <div className={`${box} rounded-xl bg-[#2e1523] border border-[#642d4a] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2L2 14h9l-1 8L19 10h-9l1-8z" fill="#FB70A9" />
          </svg>
        </div>
      </span>
    );
  }

  // 18. Alpine.js
  if (norm === 'alpine' || norm === 'alpinejs') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="Alpine.js">
        <div className={`${box} rounded-xl bg-[#16232d] border border-[#2b4c66] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={`${iconSm} fill-none`} xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L12 6l6 12H6z" stroke="#82CA9D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </span>
    );
  }

  // 19. MySQL
  if (norm === 'mysql') {
    return (
      <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title="MySQL">
        <div className={`${box} rounded-xl bg-[#081e2b] border border-[#1b4c6e] flex items-center justify-center shadow hover:scale-105 transition-transform duration-200`}>
          <svg viewBox="0 0 24 24" className={icon} fill="#00758F">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2V15h2v2.5zm0-4.25h-2v-4.5h2v4.5z" />
          </svg>
        </div>
      </span>
    );
  }

  // Default fallback for other tech tags
  return (
    <span className="group/icon relative inline-block shrink-0 select-none cursor-pointer" title={tag}>
      <div className={`${box} rounded-xl bg-neutral-800 border border-neutral-700/70 text-white font-extrabold ${size === 'sm' ? 'text-[7px]' : 'text-[9px]'} uppercase tracking-wider flex items-center justify-center font-sans px-1 hover:scale-105 transition-transform duration-200 text-center leading-none`}>
        {tag.substring(0, 3)}
      </div>
    </span>
  );
};

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (id: string) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelectProject }) => {
  const { lang } = usePortfolio();

  // Active micro state for incremental click reactions for unique projects
  const [reactions, setReactions] = useState<Record<string, { earth: number; happy: number; watermelon: number; extraList: Array<{ emoji: string; count: number }> }>>(() => {
    // Return custom initial mockup numbers per project to look exact
    const initial: Record<string, { earth: number; happy: number; watermelon: number; extraList: Array<{ emoji: string; count: number }> }> = {};
    projects.forEach(p => {
      initial[p.id] = {
        earth: p.id === 'satriabahari-my-id' ? 3 : Math.floor(Math.random() * 4) + 1,
        happy: p.id === 'satriabahari-my-id' ? 2 : Math.floor(Math.random() * 3) + 1,
        watermelon: p.id === 'satriabahari-my-id' ? 1 : Math.floor(Math.random() * 2) + 1,
        extraList: []
      };
    });
    return initial;
  });

  // Track active picker toggle id
  const [activePickerProjectId, setActivePickerProjectId] = useState<string | null>(null);

  // Helper increment
  const handleReact = (projectId: string, type: 'earth' | 'happy' | 'watermelon') => {
    setReactions(prev => {
      const current = prev[projectId] || { earth: 0, happy: 0, watermelon: 0, extraList: [] };
      return {
        ...prev,
        [projectId]: {
          ...current,
          [type]: current[type] + 1
        }
      };
    });
  };

  // Helper adding custom emojis from panel
  const handleAddEmoji = (projectId: string, emoji: string) => {
    setReactions(prev => {
      const current = prev[projectId] || { earth: 1, happy: 1, watermelon: 1, extraList: [] };
      
      // If already exists in extra list, increment
      const existingIdx = current.extraList.findIndex(item => item.emoji === emoji);
      let updatedExtra = [...current.extraList];
      if (existingIdx > -1) {
        updatedExtra[existingIdx].count += 1;
      } else {
        updatedExtra.push({ emoji, count: 1 });
      }

      return {
        ...prev,
        [projectId]: {
          ...current,
          extraList: updatedExtra
        }
      };
    });
    setActivePickerProjectId(null); // Close
  };

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-4 animate-fade-in select-none">
        <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xl shadow-sm">
          💡
        </div>
        <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          {lang === 'US' ? 'No projects match the selected filters.' : 'Filters ke mutabiq koi projects nahi mile.'}
        </p>
      </div>
    );
  }

  // List of extra reaction menu options
  const emojiSelectionPack = ['🔥', '🚀', '❤️', '👍', '💻', '⭐', '☕', '🎉'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      <AnimatePresence>
        {projects.map((project) => {
          const projectReacts = reactions[project.id] || { earth: 3, happy: 2, watermelon: 1, extraList: [] };
          // Calculate remaining tags count
          const visibleTagsCount = Math.max(0, project.tags.length - 6);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex group cursor-pointer"
            >
              <div 
                id={`project-card-${project.id}`}
                className="flex flex-col h-full border border-neutral-200 dark:border-neutral-850 p-0 overflow-hidden bg-white dark:bg-[#121214] rounded-[2.25rem] w-full transition-all duration-300 hover:shadow-2xl hover:border-neutral-300 dark:hover:border-neutral-700/80 hover:-translate-y-1 shadow-sm"
                onClick={(e) => {
                  // If clicking picker container or reactive pills, prevent details popup active
                  const target = e.target as HTMLElement;
                  if (target.closest('.reaction-button') || target.closest('.picker-container')) {
                    return;
                  }
                  onSelectProject(project.id);
                }}
              >
                
                {/* 1. Flush Top Half Aspect Ratio Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200/60 dark:border-neutral-850">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glass Hover Preview Indicator Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <span className="text-yellow-400 font-extrabold font-sans text-xs uppercase tracking-wider bg-black/90 px-5 py-2.5 rounded-xl transition-all scale-95 group-hover:scale-100 flex items-center gap-1.5 border border-neutral-800">
                      <span>{lang === 'US' ? 'Open Details' : 'Details Dekhein'}</span>
                      <span className="text-yellow-400 font-black">&gt;</span>
                    </span>
                  </div>

                  {/* Absolute Top badges */}
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-neutral-950 font-black text-[9px] uppercase tracking-widest rounded-md flex items-center gap-1 shadow-md select-none">
                      <Sparkles size={9} className="fill-neutral-950" />
                      <span>{lang === 'US' ? 'Featured' : 'Khaas'}</span>
                    </span>
                  )}
                  
                  <span className="absolute bottom-4 right-4 px-3 py-1 bg-black/75 backdrop-blur-md text-white font-extrabold text-[9px] uppercase font-mono rounded-lg tracking-wider border border-white/5 select-none shadow">
                    {project.category}
                  </span>
                </div>

                {/* 2. Down Half Detail Contact Text Content with Tech Icons */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Text Description items */}
                  <div className="space-y-2 text-left">
                    <h3 className="font-bold text-[15px] text-yellow-605 dark:text-yellow-400 leading-tight tracking-tight hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-650 dark:text-neutral-405 leading-relaxed font-sans line-clamp-3 select-text">
                      {project.description[lang]}
                    </p>
                  </div>

                  {/* Plain text name tags only (Minimal and exact, replaces large icons) */}
                  <div className="space-y-2 border-t border-neutral-200/60 dark:border-neutral-850 pt-3 text-left">
                    <div className="flex flex-wrap items-center gap-1.5 select-none">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800 text-[10px] font-mono font-medium tracking-tight"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3. Authentic Footer Reaction Row */}
                  <div className="border-t border-neutral-200/60 dark:border-neutral-850 pt-3 flex items-center justify-between gap-2 text-none relative select-none">
                    
                    {/* Active dynamic pills on the left */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      
                      {/* Pill 1: Globe/Earth connection */}
                      <button
                        onClick={() => handleReact(project.id, 'earth')}
                        className="reaction-button px-2 py-1 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 dark:bg-[#1b1b1f] dark:hover:bg-[#25252b] dark:border-neutral-850 dark:text-white text-[10px] font-bold leading-none inline-flex items-center gap-1 transition-colors transform active:scale-95 duration-100"
                        title="React Globe"
                      >
                        <span className="text-[11px] leading-none shrink-0">🌐</span>
                        <span>{projectReacts.earth}</span>
                      </button>

                      {/* Pill 2: Happy Face */}
                      <button
                        onClick={() => handleReact(project.id, 'happy')}
                        className="reaction-button px-2 py-1 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 dark:bg-[#1b1b1f] dark:hover:bg-[#25252b] dark:border-neutral-850 dark:text-white text-[10px] font-bold leading-none inline-flex items-center gap-1 transition-colors transform active:scale-95 duration-100"
                        title="React Smile"
                      >
                        <span className="text-[11px] leading-none shrink-0">😃</span>
                        <span>{projectReacts.happy}</span>
                      </button>

                      {/* Pill 3: Watermelon */}
                      <button
                        onClick={() => handleReact(project.id, 'watermelon')}
                        className="reaction-button px-2 py-1 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 dark:bg-[#1b1b1f] dark:hover:bg-[#25252b] dark:border-neutral-850 dark:text-white text-[10px] font-bold leading-none inline-flex items-center gap-1 transition-colors transform active:scale-95 duration-100"
                        title="React Watermelon"
                      >
                        <span className="text-[11px] leading-none shrink-0">🍉</span>
                        <span>{projectReacts.watermelon}</span>
                      </button>

                      {/* Render extra custom react list */}
                      {projectReacts.extraList.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            // Increment extra list counter on tap
                            setReactions(prev => {
                              const curr = prev[project.id];
                              const copy = [...curr.extraList];
                              copy[idx].count += 1;
                              return { ...prev, [project.id]: { ...curr, extraList: copy } };
                            });
                          }}
                          className="reaction-button px-2 py-1 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 dark:bg-[#1b1b1f] dark:hover:bg-[#25252b] dark:border-neutral-850 dark:text-white text-[10px] font-bold leading-none inline-flex items-center gap-1 transition-colors transform active:scale-95 duration-100"
                        >
                          <span className="text-[11px] leading-none shrink-0">{item.emoji}</span>
                          <span>{item.count}</span>
                        </button>
                      ))}
                    </div>

                    {/* Right side offset display and dashed toggle trigger */}
                    <div className="flex items-center gap-1.5 ml-auto shrink-0 relative">
                      
                      {/* +Offset badge count */}
                      {visibleTagsCount > 0 && (
                        <span className="px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-850 bg-neutral-100 dark:bg-[#161619] text-neutral-500 dark:text-neutral-400 font-bold text-[10px] select-none">
                          +{visibleTagsCount}
                        </span>
                      )}

                      {/* Dashed "+" round button triggers picker */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePickerProjectId(activePickerProjectId === project.id ? null : project.id);
                        }}
                        className="reaction-button w-6 h-6 rounded-full border border-dashed border-neutral-300 dark:border-neutral-700 text-neutral-400 dark:text-neutral-450 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white flex items-center justify-center transition-all bg-transparent focus:outline-none"
                        title="Add Custom Reaction"
                      >
                        <span className="font-bold text-[12px] leading-none translate-y-[-0.5px] font-sans">+</span>
                      </button>

                      {/* Interactive Floating Micro Emoji Picker Box popup overlay */}
                      <AnimatePresence>
                        {activePickerProjectId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="picker-container absolute right-0 bottom-full mb-3 bg-white dark:bg-[#1e1e24] border border-neutral-200 dark:border-neutral-700 rounded-2xl p-2.5 shadow-2xl flex items-center gap-2 z-30 select-none backdrop-blur-md"
                          >
                            {emojiSelectionPack.map((emoji) => (
                              <button
                                key={emoji}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAddEmoji(project.id, emoji);
                                }}
                                className="w-8 h-8 rounded-xl hover:bg-neutral-100 dark:hover:bg-[#2c2c35] flex items-center justify-center text-base hover:scale-110 active:scale-90 transition-transform duration-100"
                              >
                                {emoji}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};


interface ProjectFilterProps {
  selectedType: string;
  setSelectedType: (t: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  selectedType,
  setSelectedType,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { lang } = usePortfolio();

  const types = ['All', 'Web', 'Mobile'];
  const categories = ['All', 'Personal Project', 'Internship', 'Freelance', 'Lomba'];

  return (
    <div className="space-y-4 py-2 select-none">
      {/* TYPE Filter row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 py-0.5">
        <span className="text-[10px] font-black font-mono tracking-wider text-neutral-450 dark:text-neutral-500 uppercase min-w-[75px] shrink-0">
          TYPE
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {types.map((type) => {
            const isActive = selectedType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`relative px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200 select-none ${
                  isActive
                    ? 'text-neutral-950 font-extrabold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 bg-neutral-100 hover:bg-neutral-200/60 dark:bg-[#121215]/50 dark:hover:bg-[#18181f]/80'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTypePill"
                    className="absolute inset-0 bg-yellow-400 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CATEGORY Filter row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 py-0.5">
        <span className="text-[10px] font-black font-mono tracking-wider text-neutral-450 dark:text-neutral-500 uppercase min-w-[75px] shrink-0">
          CATEGORY
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-all duration-200 select-none ${
                  isActive
                    ? 'text-neutral-950 font-extrabold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 bg-neutral-100 hover:bg-neutral-200/60 dark:bg-[#121215]/50 dark:hover:bg-[#18181f]/80'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-yellow-400 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};


interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const { lang } = usePortfolio();
  
  // Custom states for copying terminal scripts
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const isSatriabahari = project.id === 'satriabahari-my-id';

  // Format tech names to clean abbreviations or badge names
  const renderTechLogoBadge = (tech: string) => {
    let style = "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300";
    if (tech === "TypeScript") style = "bg-[#3178c6]/10 text-[#3178c6] border border-[#3178c6]/20";
    else if (tech === "React" || tech === "React Native") style = "bg-[#61dafb]/10 text-[#00d8ff] border border-[#61dafb]/20";
    else if (tech === "Next.js") style = "bg-black text-white border border-neutral-800";
    else if (tech === "TailwindCSS" || tech === "Tailwind CSS v3") style = "bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20";
    else if (tech === "Prisma") style = "bg-[#5a67d8]/10 text-[#5a67d8] border border-[#5a67d8]/20";
    else if (tech === "Kotlin") style = "bg-[#7f52ff]/10 text-[#7f52ff] border border-[#7f52ff]/20";
    else if (tech === "Flutter") style = "bg-[#02569b]/10 text-[#02acfa] border border-[#02569b]/20";
    else if (tech === "Laravel") style = "bg-[#ff2d20]/10 text-[#ff2d20] border border-[#ff2d20]/20";

    return (
      <span key={tech} className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium ${style}`}>
        {tech}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12 select-normal">
      {/* Upper navigation area */}
      <div className="flex items-center justify-between pb-2">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:text-yellow-600 dark:hover:text-yellow-400 bg-neutral-100 hover:bg-neutral-200 dark:bg-[#121215] dark:hover:bg-[#18181f] border border-neutral-200 dark:border-neutral-850 rounded-full transition-all select-none hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>{lang === 'US' ? 'Back' : 'Wapas'}</span>
        </button>
      </div>

      {/* Title & Metadata Card Block */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight select-all">
          {project.title}
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 hover:select-all leading-relaxed">
          {project.description[lang]}
        </p>

        {/* Info row with Views statistics, horizontal Tech Logos and Action buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4 border-t border-b border-neutral-200/60 dark:border-neutral-800/65 font-sans text-xs">
          
          {/* Tech and metrics Left container */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 whitespace-nowrap bg-neutral-50 dark:bg-neutral-905 border border-neutral-200/50 dark:border-neutral-800 px-2.5 py-1 rounded-full font-medium">
              <Eye size={13} className="text-neutral-400" />
              <span>{project.views || 105} {lang === 'US' ? 'views' : 'views'}</span>
            </span>
            
            <div className="hidden sm:inline-block h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-medium text-[11px] text-neutral-450 dark:text-neutral-500 whitespace-nowrap">Tech Stack :</span>
              {project.tags.slice(0, 5).map((t) => renderTechLogoBadge(t))}
            </div>
          </div>

          {/* Action links buttons container Right */}
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black rounded-lg text-[12.5px] font-bold shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 rounded-lg text-[12.5px] font-bold shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Featured visual banner mockup */}
      <div className="w-full relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-md aspect-[16/9] bg-neutral-100 dark:bg-neutral-950 select-none">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center gap-1">
            ★ {lang === 'US' ? 'Featured' : 'Khaas'}
          </div>
        )}
      </div>

      {/* Main text content columns */}
      <div className="space-y-8 pt-4">
        
        {/* Row 1: Introduction */}
        <div className="space-y-3">
          <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-50 flex items-center gap-2 tracking-tight select-none">
            <span className="text-yellow-500 text-sm">■</span>
            <span>{lang === 'US' ? 'Introduction' : 'Taroof'}</span>
          </h3>
          <p className="text-sm md:text-[14.5px] text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal select-text">
            {project.introduction?.[lang] || project.description[lang]}
          </p>
        </div>

        {/* Row 2: Tech Stack listing */}
        {project.techStackList && project.techStackList.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-50 flex items-center gap-2 tracking-tight select-none">
              <span className="text-yellow-500">🛠</span>
              <span>Tech Stack</span>
            </h3>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 font-semibold uppercase leading-none pl-0.5">
              This project is powered by:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 font-mono">
              {project.techStackList.map((tech) => (
                <div key={tech} className="flex items-center gap-2 p-2 px-3 bg-neutral-50/50 dark:bg-[#121215]/35 border border-neutral-100 dark:border-neutral-800/60 rounded-xl hover:bg-neutral-50/80 dark:hover:bg-[#121215]/50 transition-colors">
                  <span className="text-emerald-500 font-extrabold select-none">✔</span>
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Row 3: Custom Features */}
        {project.featuresList && project.featuresList.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-50 flex items-center gap-2 tracking-tight select-none">
              <span className="text-yellow-500">🚀</span>
              <span>Features</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.featuresList.map((f, idx) => (
                <div key={idx} className="p-5 bg-neutral-50 dark:bg-[#101012]/50 border border-neutral-200/50 dark:border-neutral-850/70 rounded-2xl flex flex-col justify-start space-y-2">
                  <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 font-extrabold text-[11px] font-mono tracking-wide rounded-md">
                    ⚡ {f.title}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-350 leading-relaxed pt-1 select-text">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Row 4: Interactive copiable Getting Started sections */}
        {isSatriabahari && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-50 flex items-center gap-2 tracking-tight select-none">
              <span className="text-yellow-500">🏁</span>
              <span>Getting Started</span>
            </h3>

            {/* Step 1: Clone Clone repository */}
            <div className="space-y-2">
              <p className="text-[13px] md:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                1. Clone the Repository
              </p>
              
              {/* Copy Container Terminal 1 */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#0c0c0d] p-4 text-xs font-mono text-neutral-200">
                <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800/40 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <button
                    onClick={() => handleCopy("git clone https://github.com/satriabahari/satriabahari.my.id.git", "git")}
                    className="p-1.5 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedStates["git"] ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="pt-3 overflow-x-auto select-all no-scrollbar whitespace-nowrap">
                  <span className="text-neutral-500 select-none">$ </span>
                  git clone https://github.com/satriabahari/satriabahari.my.id.git
                </div>
              </div>

              {/* Starter templates optional tags */}
              <div className="pt-2 space-y-2">
                <p className="text-xs font-serif italic text-neutral-400 dark:text-neutral-500 pl-0.5 select-none">
                  or use a starter template:
                </p>
                
                {/* Secondary Command 1 */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg border border-neutral-200 dark:border-neutral-850 bg-neutral-50 dark:bg-[#121215]/40 text-xs font-mono select-all">
                  <span className="overflow-x-auto no-scrollbar whitespace-nowrap pr-2">
                    npx create-next-app -e https://github.com/satriabahari/satriabahari.my.id
                  </span>
                  <button
                    onClick={() => handleCopy("npx create-next-app -e https://github.com/satriabahari/satriabahari.my.id", "npx1")}
                    className="flex-shrink-0 p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded text-neutral-400 hover:text-neutral-850 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedStates["npx1"] ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  </button>
                </div>

                {/* Secondary Command 2 */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg border border-neutral-200 dark:border-neutral-850 bg-neutral-50 dark:bg-[#121215]/40 text-xs font-mono select-all">
                  <span className="overflow-x-auto no-scrollbar whitespace-nowrap pr-2">
                    npx degit satriabahari/satriabahari.my.id your-app-name
                  </span>
                  <button
                    onClick={() => handleCopy("npx degit satriabahari/satriabahari.my.id your-app-name", "npx2")}
                    className="flex-shrink-0 p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded text-neutral-400 hover:text-neutral-850 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedStates["npx2"] ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Install dependencies */}
            <div className="space-y-2">
              <p className="text-[13px] md:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                2. Install Dependencies
              </p>
              
              {/* Terminal Container 2 */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#0c0c0d] p-4 text-xs font-mono text-neutral-200">
                <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800/40 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <button
                    onClick={() => handleCopy("bun install", "buninstall")}
                    className="p-1.5 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedStates["buninstall"] ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="pt-3 overflow-x-auto select-all no-scrollbar whitespace-nowrap animate-pulse">
                  <span className="text-neutral-500 select-none">$ </span>
                  bun install
                </div>
              </div>

              {/* Bun environment warning banner */}
              <div className="p-3 bg-yellow-400/10 border border-yellow-500/20 text-yellow-800 dark:text-yellow-400 rounded-xl text-xs flex items-center gap-2 select-none">
                <span>⚠️</span>
                <span>Make sure you use <b>Bun</b> for compatibility with Husky hooks and scripts.</span>
              </div>
            </div>

            {/* Step 3: Env config */}
            <div className="space-y-2">
              <p className="text-[13px] md:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                3. Configure Environment Variables
              </p>
              
              {/* Terminal Container 3 */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#0c0c0d] p-4 text-xs font-mono text-neutral-200">
                <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800/40 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <button
                    onClick={() => handleCopy("cp .env.example .env", "cpenv")}
                    className="p-1.5 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedStates["cpenv"] ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="pt-3 overflow-x-auto select-all no-scrollbar whitespace-nowrap">
                  <span className="text-neutral-500 select-none">$ </span>
                  cp .env.example .env
                </div>
              </div>
              <p className="text-xs font-sans text-neutral-500 dark:text-neutral-400 pl-0.5 select-none">
                Then fill in the required credentials inside <code className="bg-neutral-150 dark:bg-neutral-850 px-1 py-0.5 rounded text-[10px] font-mono">.env</code> file.
              </p>
            </div>

            {/* Step 4: Run dev server */}
            <div className="space-y-2">
              <p className="text-[13px] md:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                4. Run Development Server
              </p>
              
              {/* Terminal Container 4 */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#0c0c0d] p-4 text-xs font-mono text-neutral-200">
                <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800/40 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <button
                    onClick={() => handleCopy("bun run dev", "bundev")}
                    className="p-1.5 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedStates["bundev"] ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="pt-3 overflow-x-auto select-all no-scrollbar whitespace-nowrap">
                  <span className="text-neutral-500 select-none">$ </span>
                  bun run dev
                </div>
              </div>

              {/* Address details */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs select-none">
                <span className="text-neutral-500 font-medium">Open in your browser:</span>
                <span className="px-2 py-0.5 rounded-md font-mono bg-neutral-100 dark:bg-[#121215] border border-neutral-200 dark:border-neutral-850 text-neutral-700 dark:text-neutral-300">
                  http://localhost:3000
                </span>
                <span className="text-neutral-500 font-medium">Start editing from:</span>
                <span className="px-2 py-0.5 rounded-md font-mono bg-neutral-100 dark:bg-[#121215] border border-neutral-200 dark:border-neutral-850 text-neutral-700 dark:text-neutral-300">
                  src/pages/index.tsx
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Row 5: License footer credit note */}
        <div className="space-y-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50 select-none text-center sm:text-left">
          <h3 className="text-xl font-black text-neutral-905 dark:text-neutral-50 flex items-center justify-center sm:justify-start gap-2 tracking-tight">
            <span className="text-yellow-500">📄</span>
            <span>License</span>
          </h3>
          <div className="text-xs md:text-sm text-neutral-500 dark:text-neutral-450 space-y-1">
            <p>This project is released under the MIT License.</p>
            <p>Feel free to use, modify, and distribute for personal or commercial purposes.</p>
          </div>
          
          <p className="text-xs pt-4 text-neutral-400 dark:text-neutral-500 font-serif italic text-center">
            Thanks for checking this out! Made with curiosity, love, and caffeine ☕ by Satria Bahari
          </p>
        </div>

      </div>
    </div>
  );
};

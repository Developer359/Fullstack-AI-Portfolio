import React, { useMemo, useRef, useEffect, useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { githubStats, pinnedReposData, dashboardTranslations } from './data/dashboardData';
import { Github, Star, GitFork, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function DashboardPage() {
  const { lang } = usePortfolio();
  const t = dashboardTranslations[lang] || dashboardTranslations.US;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Contribution heatmap grid (53 weeks x 7 days)
  const contributionGrid = useMemo(() => {
    const numweeks = 53;
    const numdays = 7;
    const grid: number[][] = [];
    
    for (let w = 0; w < numweeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < numdays; d++) {
        let level = 0;
        
        // Exact replication of screenshot activity clusters
        if (w === 2 && d === 4) {
          level = 1;
        } else if (w === 5 && d === 2) {
          level = 3;
        } else if (w === 9 && d === 1) {
          level = 2;
        } else if (w === 9 && d === 5) {
          level = 1;
        } else if (w === 10) { // Large August active cluster
          if (d === 2) level = 3;
          if (d === 3) level = 4;
          if (d === 4) level = 4;
          if (d === 6) level = 3;
        } else if (w === 11 && d === 3) {
          level = 2;
        } else if (w === 12 && d === 5) {
          level = 1;
        } else if (w === 15 && d === 4) {
          level = 2;
        } else if (w >= 18 && w <= 22) { // Dense Oct / Nov continuous clusters
          const seed = Math.sin(w * 13 + d * 37) * 0.5 + 0.5;
          if (seed > 0.25) {
            level = Math.floor(seed * 4) + 1;
            if (level > 4) level = 4;
          } else {
            level = 0;
          }
        } else if (w === 23 && d === 1) {
          level = 1;
        } else if (w === 25 && d === 3) {
          level = 2;
        } else if (w === 31) { // Jan peak bright neon green column
          if (d === 0) level = 3;
          if (d === 1) level = 3;
          if (d === 2) level = 4;
          if (d === 3) level = 3;
          if (d === 4) level = 2;
          if (d === 5) level = 1;
        } else if (w === 32) {
          if (d === 2) level = 1;
          if (d === 5) level = 3;
        } else if (w === 33) {
          if (d === 1) level = 2;
          if (d === 6) level = 1;
        } else if (w === 35 && d === 3) {
          level = 2;
        } else if (w === 41) { // March small scattering
          if (d === 2) level = 3;
          if (d === 5) level = 1;
        } else if (w === 45 && d === 1) {
          level = 1;
        } else {
          const rand = Math.sin(w * 29 + d * 53) * 0.5 + 0.5;
          if (rand > 0.95) {
            level = 1;
          }
        }
        
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((el.scrollLeft / maxScroll) * 100);
      }
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // Scroll to far right when mounting
      el.scrollLeft = el.scrollWidth;
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scrollLeftByVal = () => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({ left: -144, behavior: 'smooth' });
    }
  };

  const scrollRightByVal = () => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({ left: 144, behavior: 'smooth' });
    }
  };

  const getContributionColorClass = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-[#39d353]';
      case 3:
        return 'bg-[#26a641]';
      case 2:
        return 'bg-[#006d32]';
      case 1:
        return 'bg-[#0e4429]';
      case 0:
      default:
        return 'bg-[#ebedf0] dark:bg-[#161b22]';
    }
  };

  const monthPositions = [
    { name: 'Jun', col: 0 },
    { name: 'Jul', col: 4 },
    { name: 'Aug', col: 8 },
    { name: 'Sep', col: 13 },
    { name: 'Oct', col: 17 },
    { name: 'Nov', col: 22 },
    { name: 'Dec', col: 26 },
    { name: 'Jan', col: 31 },
    { name: 'Feb', col: 35 },
    { name: 'Mar', col: 39 },
    { name: 'Apr', col: 44 },
    { name: 'May', col: 48 },
  ];

  return (
    <div className="space-y-8 py-2 max-w-full overflow-x-hidden font-sans" id="dashboard-page-index-layout">
      {/* 1. Main GitHub activity section */}
      <div className="space-y-6 text-left select-none" id="github-activity">
        
        {/* Title headers */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 pb-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Github size={23} className="text-neutral-900 dark:text-neutral-100 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
                {t.title}
              </h2>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
              {t.subtitle}
            </p>
          </div>
          <div className="text-[13.5px] font-semibold text-neutral-400 dark:text-neutral-500 hover:text-amber-500 transition-colors cursor-pointer select-all font-mono md:self-end">
            {t.username}
          </div>
        </div>

        {/* Primary widgets (Followers, Following, Repos) */}
        <div className="grid grid-cols-3 gap-3 md:gap-4.5" id="github-primary-metrics">
          <div className="bg-[#fcfdfe] dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-5 px-4 flex flex-col items-center justify-center space-y-1 transition-all duration-300 hover:scale-[1.02] hover:border-[#f2bc40]/30 hover:shadow-lg hover:shadow-amber-500/5 group">
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.followers}
            </span>
            <span className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold tracking-tight text-[#f2bc40] dark:text-[#e3b341] leading-none pt-0.5 transition-transform duration-300 group-hover:scale-105">
              {githubStats.followers}
            </span>
          </div>

          <div className="bg-[#fcfdfe] dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-5 px-4 flex flex-col items-center justify-center space-y-1 transition-all duration-300 hover:scale-[1.02] hover:border-[#f2bc40]/30 hover:shadow-lg hover:shadow-amber-500/5 group">
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.following}
            </span>
            <span className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold tracking-tight text-[#f2bc40] dark:text-[#e3b341] leading-none pt-0.5 transition-transform duration-300 group-hover:scale-105">
              {githubStats.following}
            </span>
          </div>

          <div className="bg-[#fcfdfe] dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-5 px-4 flex flex-col items-center justify-center space-y-1 transition-all duration-300 hover:scale-[1.02] hover:border-[#f2bc40]/30 hover:shadow-lg hover:shadow-amber-500/5 group">
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.repositories}
            </span>
            <span className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold tracking-tight text-[#f2bc40] dark:text-[#e3b341] leading-none pt-0.5 transition-transform duration-300 group-hover:scale-105">
              {githubStats.repositories}
            </span>
          </div>
        </div>

        {/* Secondary metric blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-4 px-4 flex flex-col items-center justify-center space-y-0.5 transition-all hover:scale-[1.01] hover:border-amber-400/20 shadow-sm group">
            <span className="text-xs text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.contributions}
            </span>
            <span className="text-[24px] sm:text-[28px] font-extrabold text-[#f2bc40] dark:text-[#e3b341] tracking-tight leading-none pt-0.5 transition-transform group-hover:scale-105">
              {githubStats.contributions}
            </span>
          </div>

          <div className="bg-white dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-4 px-4 flex flex-col items-center justify-center space-y-0.5 transition-all hover:scale-[1.01] hover:border-amber-400/20 shadow-sm group">
            <span className="text-xs text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.thisWeek}
            </span>
            <span className="text-[24px] sm:text-[28px] font-extrabold text-[#f2bc40] dark:text-[#e3b341] tracking-tight leading-none pt-0.5 transition-transform group-hover:scale-105">
              {githubStats.thisWeek}
            </span>
          </div>

          <div className="bg-white dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-4 px-4 flex flex-col items-center justify-center space-y-0.5 transition-all hover:scale-[1.01] hover:border-amber-400/20 shadow-sm group">
            <span className="text-xs text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.bestDay}
            </span>
            <span className="text-[24px] sm:text-[28px] font-extrabold text-[#f2bc40] dark:text-[#e3b341] tracking-tight leading-none pt-0.5 transition-transform group-hover:scale-105">
              {githubStats.bestDay}
            </span>
          </div>

          <div className="bg-white dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl py-4 px-4 flex flex-col items-center justify-center space-y-0.5 transition-all hover:scale-[1.01] hover:border-amber-400/20 shadow-sm group">
            <span className="text-xs text-neutral-500 dark:text-[#8b949e] font-semibold">
              {t.dailyAvg}
            </span>
            <span className="text-[24px] sm:text-[28px] font-extrabold text-[#f2bc40] dark:text-[#e3b341] tracking-tight leading-none pt-0.5 flex items-baseline gap-[3.5px] transition-transform group-hover:scale-105">
              {githubStats.dailyAvg}
              <span className="text-xs sm:text-sm font-semibold text-neutral-400 dark:text-neutral-500">
                {t.dailyAvgUnit}
              </span>
            </span>
          </div>
        </div>

        {/* Heatmap calendar */}
        <div className="space-y-3 relative">
          <div className="w-full bg-white dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl p-5 relative overflow-hidden shadow-sm">
            <div 
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="overflow-x-auto select-none no-scrollbar pb-2 cursor-grab active:cursor-grabbing"
              style={{ width: '100%' }}
            >
              <div className="min-w-[775px] flex flex-col space-y-2.5 relative pt-1">
                <div className="relative h-4 w-full text-[10.5px] text-neutral-400 dark:text-[#8b949e] font-mono select-none font-bold">
                  {monthPositions.map((m, idx) => (
                    <span 
                      key={idx} 
                      className="absolute select-none transition-colors"
                      style={{ left: `${m.col * 14.4}px` }}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-[3.2px]">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3.2px]">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-[11.2px] h-[11.2px] rounded-[2.2px] transition-all duration-300 hover:scale-[1.3] hover:ring-2 hover:ring-[#f2bc40] hover:z-10 cursor-alias ${getContributionColorClass(level)}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Navigation Slider */}
            <div className="flex items-center justify-between mt-4 px-1">
              <button 
                onClick={scrollLeftByVal}
                className="w-6 h-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 active:scale-90 transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft size={13} strokeWidth={3} />
              </button>

              <div className="flex-1 mx-4 h-[5.5px] bg-[#ebedf0] dark:bg-[#161b22] rounded-full relative overflow-hidden">
                <div 
                  className="absolute top-0 bottom-0 h-full bg-[#c1c1c1] dark:bg-neutral-700 rounded-full transition-all duration-75" 
                  style={{
                    left: `${(scrollProgress / 100) * 70}%`,
                    width: '30%'
                  }}
                />
              </div>

              <button 
                onClick={scrollRightByVal}
                className="w-6 h-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 active:scale-90 transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight size={13} strokeWidth={3} />
              </button>
            </div>
          </div>

          <div className="flex justify-end items-center text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 px-1 pt-0.5 select-none">
            <div className="flex items-center gap-1.5 bg-neutral-100/30 dark:bg-[#111112]/50 border border-neutral-200/50 dark:border-[#21262d]/50 rounded-full px-3.5 py-1">
              <span>{t.less}</span>
              <div className="flex gap-[3.2px] items-center mx-[1px]">
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22] border border-black/5 dark:border-[#21262d]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]" />
              </div>
              <span>{t.more}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-dashed border-neutral-200 dark:border-neutral-800/80 pt-2" />

      {/* Pinned repos pane */}
      <div className="space-y-4 text-left select-none" id="pinned-repositories">
        <h3 className="text-[15.5px] font-black tracking-tight text-neutral-850 dark:text-neutral-100 leading-none">
          {t.pinnedTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedReposData.map((repo, idx) => {
            const description = repo.description[lang] || repo.description.US;

            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + idx * 0.04, duration: 0.35 }}
                key={repo.name}
                className="group flex flex-col justify-between p-5 bg-white dark:bg-[#111112] border border-neutral-200/80 dark:border-[#21262d] rounded-2xl hover:border-amber-400/50 dark:hover:border-[#f2bc40]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-2">
                  <h4 className="text-[14.5px] font-extrabold text-[#0969da] dark:text-[#58a6ff] hover:underline cursor-pointer leading-tight tracking-tight select-all font-sans">
                    {repo.name}
                  </h4>
                  <p className="text-[12.2px] text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed line-clamp-2">
                    {description}
                  </p>
                </div>

                <div className="flex items-center gap-5 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 font-bold pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 flex-row">
                    <span 
                      className="w-[10.5px] h-[10.5px] rounded-full inline-block shrink-0 border border-black/10 dark:border-white/10"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="text-neutral-500 dark:text-neutral-450 font-sans tracking-tight">
                      {repo.language}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer select-none">
                    <Star size={11} className="text-neutral-400 group-hover:text-amber-500 transition-colors" />
                    <span>{repo.stars}</span>
                  </div>

                  <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors cursor-pointer select-none">
                    <GitFork size={11} className="text-neutral-400 group-hover:text-blue-500 transition-colors" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

     
    </div>
  );
}
export { DashboardPage };

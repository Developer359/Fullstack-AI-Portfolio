import React, { useState } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { creationsVideos, creationsTranslations, CreationVideo } from '../data/creationsData';
import { Play, MoreVertical, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoGridProps {
  activeTab: 'YouTube' | 'TikTok';
}

export const VideoGrid: React.FC<VideoGridProps> = ({ activeTab }) => {
  const { lang } = usePortfolio();
  const t = creationsTranslations[lang] || creationsTranslations.US;

  const [sortBy, setSortBy] = useState<'popular' | 'latest'>('popular');

  // Filter video data based on selected tab (TikTok / YouTube)
  const filteredVideos = creationsVideos.filter(video => video.platform === activeTab);

  // Sort video data dynamically
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.views - a.views;
    } else {
      return a.createdDaysAgo - b.createdDaysAgo;
    }
  });

  // Generates the human-scannable list size text
  const replaceCountTokens = (stringTemplate: string, count: number, total: number) => {
    return stringTemplate.replace('{count}', String(count)).replace('{total}', String(total));
  };

  // Reusable custom Vector Mock IDE or Graphic Canvas fallback for TikTok.
  const renderFallbackVideoCover = (video: CreationVideo) => {
    const { title, coverStyle } = video;
    const { gradient, textShadowColor, codeSnippet, illustrationType } = coverStyle;

    switch (illustrationType) {
      case 'tools':
        return (
          <div className={`w-full h-full bg-gradient-to-b ${gradient} flex flex-col justify-between p-4 font-sans text-white text-left`}>
            <div className="space-y-1">
              <span className="text-[14px] font-black tracking-tight text-white/95 uppercase bg-black/30 px-1.5 py-0.5 rounded inline-block">Ini</span>
              <h4 
                className="text-[23px] font-black leading-[1.1] tracking-tight uppercase"
                style={{ textShadow: `0 0 10px ${textShadowColor}` }}
              >
                6 TOOLS <br />
                <span className="text-yellow-450 text-lg font-bold lowercase italic tracking-wide">yang bikin</span>
              </h4>
            </div>

            <div className="bg-[#1e1e1e]/90 rounded-lg p-2 border border-neutral-700/50 shadow-lg text-[9px] font-mono text-zinc-400 space-y-1 pr-6 hover:scale-[1.02] transition-transform duration-200">
              <div className="flex gap-1 mb-1">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              </div>
              <div className="text-amber-500/90 font-semibold">// Recommended Tools 2026</div>
              <div className="flex gap-1 flex-wrap text-[7.5px]">
                <span className="px-1 py-0.5 bg-neutral-800 rounded text-neutral-200">Git</span>
                <span className="px-1 py-0.5 bg-neutral-800 rounded text-neutral-200">Vercel</span>
                <span className="px-1 py-0.5 bg-neutral-800 rounded text-neutral-200">Vite</span>
                <span className="px-1 py-0.5 bg-neutral-800 rounded text-neutral-200">Docker</span>
                <span className="px-1 py-0.5 bg-neutral-800 rounded text-neutral-200">Postman</span>
              </div>
            </div>
          </div>
        );

      case 'readme':
        return (
          <div className={`w-full h-full bg-gradient-to-b ${gradient} flex flex-col justify-between p-4 font-sans text-white text-left`}>
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-tight text-white/95 uppercase bg-emerald-500 px-1 py-0.5 rounded inline-block">README.md</span>
              <h4 
                className="text-[17px] font-black leading-snug tracking-tight text-white"
                style={{ textShadow: `0 0 10px ${textShadowColor}` }}
              >
                PROJECTMU BAGUS, README-NYA BELUM!
              </h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Ini Struktur Readme Yang Bisa Kamu Pakai.</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[8px]">
              <div className="bg-neutral-800/80 rounded border border-red-500/30 p-1 text-center flex flex-col justify-center items-center">
                <span className="text-[16px] leading-none mb-0.5">❌</span>
                <span className="text-zinc-400 font-semibold uppercase tracking-tight scale-90">No Setup Tips</span>
              </div>
              <div className="bg-zinc-900 border border-emerald-500/30 rounded p-1 text-center flex flex-col justify-center items-center">
                <span className="text-[16px] leading-none mb-0.5">✅</span>
                <span className="text-emerald-400 font-bold uppercase tracking-tight scale-90">Pristine Docs</span>
              </div>
            </div>
          </div>
        );

      case 'sekelas':
        return (
          <div className={`w-full h-full bg-gradient-to-b ${gradient} flex flex-col justify-between p-4 font-sans text-white text-left`}>
            <div className="space-y-1 pt-2">
              <p className="text-[11px] font-semibold text-sky-400 py-0.5 leading-none">Ini ...</p>
              <h4 
                className="text-[20px] font-black leading-[1.1] tracking-tight uppercase text-white"
                style={{ textShadow: `0 0 10px ${textShadowColor}` }}
              >
                WEBSITE <span className="text-xs font-semibold lowercase italic tracking-wide text-zinc-400">yang bikin</span> <br />
                <span className="text-yellow-450">TAMPILAN WEBSITE</span> <br />
                KAMU KELIHATAN SEKELAS...
              </h4>
            </div>

            <div className="space-y-1 bg-black/60 rounded-xl p-2 border border-neutral-800 text-[8px] font-mono text-zinc-400">
              <div className="flex justify-between items-center bg-white/5 p-1 rounded">
                <span className="font-semibold text-white">Vercel</span>
                <span className="text-[6.5px] bg-neutral-700/60 text-emerald-400 px-1 rounded">Stellar</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-1 rounded">
                <span className="font-semibold text-white">Linear</span>
                <span className="text-[6.5px] bg-neutral-700/60 text-emerald-400 px-1 rounded">Clean</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-1 rounded">
                <span className="font-semibold text-white">Claude UI</span>
                <span className="text-[6.5px] bg-neutral-700/60 text-emerald-400 px-1 rounded">Minimal</span>
              </div>
            </div>
          </div>
        );

      case 'claude':
        return (
          <div className={`w-full h-full bg-gradient-to-b ${gradient} flex flex-col justify-between p-4 font-sans text-white text-left`}>
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-tight text-white/95 uppercase bg-[#e11d48] px-1.5 py-0.5 rounded inline-block">Pro Tips</span>
              <h4 
                className="text-[18px] font-black leading-snug tracking-tight uppercase text-yellow-450"
                style={{ textShadow: `0 0 10px ${textShadowColor}` }}
              >
                5 CARA HEMAT <br />
                TOKEN CLAUDE 80%
              </h4>
              <p className="text-[9.5px] text-zinc-400 italic">Kamu Harus Sampai...</p>
            </div>

            <div className="bg-[#161618] rounded-xl p-2 border border-rose-500/20 text-[8px] font-mono space-y-1.5">
              <div className="flex justify-between font-semibold">
                <span className="text-zinc-500 text-[7px]">Usage Limits: Pro</span>
                <span className="text-rose-400 font-bold scale-95">100% Used</span>
              </div>
              <div className="w-full bg-neutral-800 h-1 rounded overflow-hidden">
                <div className="bg-rose-500 h-full w-[100%]" />
              </div>
              <div className="flex justify-between font-semibold pt-0.5">
                <span className="text-zinc-500 text-[7px]">Smart caching enabled</span>
                <span className="text-emerald-400 font-bold scale-95">34% used</span>
              </div>
              <div className="w-full bg-neutral-800 h-1 rounded overflow-hidden">
                <div className="bg-emerald-500 h-full w-[34%]" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`w-full h-full bg-gradient-to-b ${gradient} flex flex-col justify-between p-4 font-sans text-white text-left`}>
            <div className="space-y-1.5">
              <h4 
                className="text-base font-extrabold leading-snug tracking-tight text-white/95"
                style={{ textShadow: `0 0 10px ${textShadowColor}` }}
              >
                {title}
              </h4>
            </div>

            {codeSnippet && (
              <div className="bg-black/80 rounded p-2.5 border border-white/5 overflow-hidden text-[7.5px] font-mono text-zinc-400 leading-normal max-h-[100px] select-none text-left">
                <pre className="text-neutral-300 h-full no-scrollbar overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <section className="space-y-5">
      {/* Header Counter & Sort Dropdown Row */}
      <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
        <div className="text-[13px] md:text-sm font-medium text-neutral-500 dark:text-neutral-450">
          {replaceCountTokens(t.showingCount, sortedVideos.length, filteredVideos.length)}
        </div>

        {/* Sort drop panel */}
        <div className="flex items-center gap-2 select-none">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'popular' | 'latest')}
            className="px-3.5 py-2 bg-neutral-50 dark:bg-[#111113] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-xl cursor-pointer shadow-sm outline-none transition-colors max-w-[200px]"
          >
            <option value="popular">{t.sortOptions.popular}</option>
            <option value="latest">{t.sortOptions.latest}</option>
          </select>
        </div>
      </div>

      {/* Beautiful Responsive aspect ratio Video Grid */}
      <motion.div 
        layout
        className={
          activeTab === 'YouTube'
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" // YouTube Aspect layout spacing
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" // TikTok vertical Aspect layout spacing
        }
      >
        <AnimatePresence mode="popLayout">
          {sortedVideos.map((video, idx) => {
            if (activeTab === 'YouTube' && video.youtube) {
              const yt = video.youtube;
              // RENDER AUTHENTIC HIGH-FIDELITY YOUTUBE CARD
              return (
                <motion.a
                  layout
                  key={video.id}
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.97, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -12 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 280,
                    damping: 26,
                    delay: idx * 0.04
                  }}
                  className="group flex flex-col w-full text-left cursor-pointer"
                >
                  {/* Thumbnail Wrapper (Exact 16:9 Aspect Ratio) */}
                  <div className="w-full aspect-video rounded-2xl overflow-hidden relative bg-[#1c1c1f]/50 border border-neutral-200/50 dark:border-neutral-800/80 shadow-sm transition-transform duration-300 group-hover:scale-[1.015] group-hover:shadow-md">
                    <img 
                      src={yt.thumbnailUrl} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Duration badge bottom-right */}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/85 text-white text-[11px] font-sans font-bold tracking-wide px-1.5 py-0.5 rounded-md shadow-sm">
                      {yt.durationText}
                    </span>

                    {/* Subtle hover play glass overlay */}
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-350 shadow-md">
                        <Play size={16} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* YouTube Details Info Block */}
                  <div className="flex items-start gap-3 mt-3.5 pl-1 pr-1">
                    {/* Circle Channel Avatar */}
                    <div className="w-[36px] h-[36px] rounded-full overflow-hidden flex-shrink-0 border border-neutral-200/30 shadow-inner group-hover:opacity-95 transition-opacity">
                      <img 
                        src={yt.channelAvatarUrl} 
                        alt={yt.channelName} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Right side Text items */}
                    <div className="flex-1 min-w-0 flex flex-col font-sans">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-neutral-900 dark:text-neutral-50 font-bold text-[14px] leading-snug line-clamp-2 pr-2 tracking-tight group-hover:text-amber-500 transition-colors">
                          {video.title}
                        </h4>
                        <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-0.5 self-start transition-colors">
                          <MoreVertical size={15} />
                        </button>
                      </div>

                      {/* Channel Name with verified badge option */}
                      <div className="flex items-center gap-1 text-[#606060] dark:text-neutral-400 text-[13px] font-semibold mt-1">
                        <span className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
                          {yt.channelName}
                        </span>
                        {yt.isVerified && (
                          <span 
                            className="w-[13px] h-[13px] rounded-full bg-neutral-400 dark:bg-neutral-600 text-white dark:text-neutral-900 flex items-center justify-center text-[8.5px] font-bold leading-none shrink-0" 
                            title="Verified"
                          >
                            ✓
                          </span>
                        )}
                      </div>

                      {/* Views count and relative time publishing */}
                      <div className="text-[#606060] dark:text-neutral-400 text-[13px] font-medium flex items-center gap-1.5 mt-0.5">
                        <span>{video.viewsFormatted}</span>
                        <span className="text-[10px] scale-90">•</span>
                        <span>{yt.publishedText}</span>
                      </div>

                      {/* Audio translation / Dubbed label representation */}
                      {yt.hasDubbedLabel && (
                        <div className="inline-flex items-center gap-1 bg-neutral-200/60 dark:bg-[#202020] text-neutral-700 dark:text-neutral-300 text-[11px] font-semibold px-2 py-0.5 rounded-full mt-2 self-start border border-black/5 dark:border-white/5">
                          <Headphones size={10} className="stroke-[2.5]" />
                          <span>Dubbed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.a>
              );
            }

            // RENDER AUTHENTIC TIKTOK VERTICAL ASPECT CARD
            return (
              <motion.a
                layout
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                  delay: idx * 0.05 
                }}
                className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-[#fbfbfb] dark:bg-[#111113]/30 overflow-hidden shadow-sm hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700/80 transform hover:scale-[1.03] transition-all duration-300 relative aspect-[3/4]"
              >
                <div className="w-full h-full relative overflow-hidden select-none">
                  {renderFallbackVideoCover(video)}

                  {/* Dark Hover overlay with giant glass play circle */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
                      <Play size={20} className="text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Left Play triangle & view counts display */}
                  <div className="absolute bottom-3 left-3 bg-neutral-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-xs text-white font-extrabold select-none shadow-sm font-sans tracking-wide">
                    <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                    <span>{video.viewsFormatted}</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

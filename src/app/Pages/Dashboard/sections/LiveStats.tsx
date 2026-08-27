import React from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { useServerPing } from '../useServerPing';
import { Radio, Cpu, Headphones } from 'lucide-react';

export const LiveStats: React.FC = () => {
  const { lang } = usePortfolio();
  const ping = useServerPing('/api/health', 5000);

  return (
    <div className="space-y-6 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50" id="telemetry-supplemental-view col-span-1">
      {/* Supplemental title headings */}
      <div className="space-y-1 text-left">
        <h3 className="text-[15px] font-extrabold text-neutral-850 dark:text-neutral-200 tracking-tight flex items-baseline gap-1.5 font-sans">
          <span>{lang === 'US' ? 'System Status & Telemetry' : 'System Status aur Telemetry'}</span>
        </h3>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">
          {lang === 'US' 
            ? "Live indicators representing hosting status, local time streams, and custom integrations." 
            : "Hosting status, local time aur custom integrations ke live indicators."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
        {/* Spotify jam listening block */}
        <div className="border border-neutral-200 dark:border-neutral-800 p-5 rounded-2xl bg-white dark:bg-neutral-900/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-500 font-mono tracking-wider uppercase flex items-center gap-1.5">
              <Radio size={12} className="text-emerald-500 animate-pulse" />
              <span>{lang === 'US' ? 'Current Jam' : 'Abhi Suna Ja Raha Hai'}</span>
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-bold font-mono tracking-tight">SPOTIFY LIVE</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800 shrink-0 overflow-hidden relative border border-neutral-200 dark:border-neutral-700/60 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop" 
                alt="Album Cover" 
                className="w-full h-full object-cover animate-spin-slow rotate-infinite"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <Headphones size={20} className="text-white drop-shadow-md" />
              </div>
            </div>
            <div className="space-y-1 overflow-hidden text-left">
              <div className="font-extrabold text-[14.5px] text-neutral-900 dark:text-neutral-50 truncate leading-snug">
                Lagu Santai Jambi
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                Jambi Acoustic Project
              </div>
              <div className="text-[10px] text-amber-500 font-mono font-medium truncate">
                Up next: Sunset at Sumatra
              </div>
            </div>
          </div>
        </div>

        {/* Server status monitor showing dynamic ping latency */}
        <div className="border border-neutral-200 dark:border-neutral-800 p-5 rounded-2xl bg-white dark:bg-neutral-900/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-500 font-mono tracking-wider uppercase flex items-center gap-1.5 font-sans">
              <Cpu size={12} className="text-blue-500" />
              <span>{lang === 'US' ? 'Environment Information' : 'Environment ki Maloomat'}</span>
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold font-mono tracking-tight uppercase ${
              ping.status === 'online' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
            }`}>
              {ping.status === 'online' ? 'CONNECTED' : 'STANDBY'}
            </span>
          </div>

          <div className="space-y-2.5 font-mono text-xs text-neutral-500 dark:text-neutral-400 text-left">
            <div className="flex items-center justify-between">
              <span>Location:</span>
              <span className="font-bold text-neutral-700 dark:text-neutral-200 font-sans">Jambi, Sumatra 🇮🇩</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Latency to Host:</span>
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {ping.status === 'checking' ? '...' : `${ping.rtt}ms`}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Stack:</span>
              <span className="font-bold text-[#f2bc40] dark:text-[#e3b341]">Vite / React / Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

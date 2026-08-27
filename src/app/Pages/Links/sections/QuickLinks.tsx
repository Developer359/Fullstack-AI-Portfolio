import React from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { Card } from '../../../../components/ui/Card';
import { bioLinksList } from '../data/linksData';
import { ArrowUpRight, Youtube, Video, Github, Heart } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  const { lang } = usePortfolio();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video size={16} className="text-[#ec4899]" />;
      case 'Github':
        return <Github size={16} className="text-neutral-900 dark:text-white" />;
      case 'Youtube':
        return <Youtube size={16} className="text-red-500" />;
      case 'Heart':
        return <Heart size={16} className="text-pink-500" />;
      default:
        return <Github size={16} className="text-neutral-900" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-left">
      {bioLinksList.map((ln, idx) => {
        const descText = ln.desc[lang] || ln.desc.US;
        return (
          <a key={idx} href={ln.url} target="_blank" rel="noreferrer" className="block group select-none">
            <Card variant="outline" className="h-full p-4 flex items-center justify-between border-neutral-250 dark:border-neutral-805 bg-white dark:bg-[#111113]/30 hover:bg-[#111113]/5 group-hover:border-amber-400 dark:group-hover:border-amber-500/50 transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#1a1a1e] border border-neutral-250 dark:border-neutral-800">
                  {renderIcon(ln.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-50 flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                    <span>{ln.title}</span>
                  </h3>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">{descText}</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Card>
          </a>
        );
      })}
    </div>
  );
};


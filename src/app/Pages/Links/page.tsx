import React from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { Card } from '../../../components/ui/Card';
import { ArrowUpRight, Youtube, Video, Github, Linkedin } from 'lucide-react';

export default function LinksPage() {
  const { lang } = usePortfolio();

  const usefulLinks = [
    { 
      title: "GitHub Profile", 
      url: "https://github.com/Developer359", 
      desc: "Explore my open source repositories & code", 
      icon: <Github size={16} className="text-neutral-900 dark:text-white" /> 
    },
    { 
      title: "LinkedIn Professional", 
      url: "https://www.linkedin.com/in/muhammad-subhan-05b895331/", 
      desc: "Connect with me professionally & view my career", 
      icon: <Linkedin size={16} className="text-[#0a66c2]" /> 
    },
    { 
      title: "TikTok Content", 
      url: "https://tiktok.com", 
      desc: "Short programming tips & setups", 
      icon: <Video size={16} className="text-[#ec4899]" /> 
    },
    { 
      title: "YouTube Channel", 
      url: "https://youtube.com", 
      desc: "Long-form full-stack development tutorials", 
      icon: <Youtube size={16} className="text-red-500" /> 
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in font-sans">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 flex items-center">
          <span>{lang === 'US' ? 'Bio Links Directory' : 'Bio Links Directory'}</span>
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {lang === 'US' 
            ? "Unified link directory to my code repositories, sponsor logs, and social platforms." 
            : "Mere code repositories, sponsor logs aur social platforms ke liye ek unified directory."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {usefulLinks.map((ln, idx) => (
          <a key={idx} href={ln.url} target="_blank" rel="noreferrer" className="block group">
            <Card variant="outline" className="h-full p-4 flex items-center justify-between border-neutral-250 dark:border-neutral-850 hover:bg-neutral-500/5 group-hover:border-amber-400 dark:group-hover:border-amber-500 transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#1a1a1e] border border-neutral-200 dark:border-neutral-800">
                  {ln.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-50 flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                    <span>{ln.title}</span>
                  </h3>
                   <p className="text-xs text-neutral-400 dark:text-neutral-500">{ln.desc}</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

export { LinksPage };
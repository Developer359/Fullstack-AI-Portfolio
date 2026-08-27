import React, { useState } from 'react';
import { usePortfolio } from '../../../../context/PortfolioContext';
import { skillsData } from '../data/skillsData';
import { motion } from 'framer-motion'; // Clean standard import
import * as Lucide from 'lucide-react';

export const SkillsOverview: React.FC = () => {
  const { lang } = usePortfolio();
  
  // Specific to Skills Filter state
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const skillCategories = ['All', 'Main', 'Frontend', 'Backend', 'Design', 'Database', 'Tools'];

  // Dynamically count category items
  const getCategoryCount = (category: string) => {
    if (category === 'All') return skillsData.length;
    return skillsData.filter(s => s.category === category).length;
  };

  // Filtered skills
  const filteredSkills = selectedSkillCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedSkillCategory);

  // Helper to resolve string icon name to Lucide Icon
  const renderSkillIcon = (iconName: string) => {
    const IconComponent = (Lucide as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={14} className="flex-shrink-0" />;
    }
    return <Lucide.Terminal size={14} className="flex-shrink-0" />;
  };

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 6 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="space-y-5 text-left font-sans">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
          <span className="text-neutral-900 dark:text-neutral-100 font-mono text-lg font-semibold">{"</>"}</span>
          <span>{lang === 'US' ? 'Skills' : 'Maharat'}</span>
        </h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 font-normal">
          {lang === 'US' ? 'My professional skill set.' : 'Meri professional maharatein.'}
        </p>
      </div>

      {/* Skill category selectors */}
      <div className="flex flex-wrap gap-2 pb-1 overflow-x-auto no-scrollbar scroll-smooth">
        {skillCategories.map((category) => {
          const isActive = selectedSkillCategory === category;
          const count = getCategoryCount(category);
          return (
            <button
              key={category}
              onClick={() => setSelectedSkillCategory(category)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer select-none ${
                isActive
                  ? 'bg-yellow-400 text-neutral-950 border-yellow-400 font-bold shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              <span>{category}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[9px] transition-colors ${
                isActive ? 'bg-neutral-950 text-yellow-400' : 'bg-neutral-200 dark:bg-neutral-800'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Tag Cloud */}
      <motion.div 
        key={selectedSkillCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2.5 p-1"
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.02 }} // Subtly scales cleanly without font-blur
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border select-none ${skill.color} ${skill.textColor}`}
          >
            {renderSkillIcon(skill.iconName)}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
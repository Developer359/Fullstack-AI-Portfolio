import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'yellowBorder' | 'slate';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-xl overflow-hidden p-6 transition-all duration-200';
  
  const variants = {
    default: 'bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100',
    outline: 'border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-neutral-100',
    yellowBorder: 'bg-white dark:bg-[#121214] border-2 border-yellow-400 dark:border-yellow-500 text-neutral-900 dark:text-neutral-100 shadow-lg shadow-yellow-500/5',
    slate: 'bg-neutral-50 dark:bg-[#1a1a1e] border border-neutral-200 dark:border-neutral-800/60 text-neutral-900 dark:text-neutral-100',
  };

  const hoverStyles = hoverEffect 
    ? 'hover:-translate-y-1 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700' 
    : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

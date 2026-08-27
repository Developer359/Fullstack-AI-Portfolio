import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'US' | 'ID';
export type Theme = 'light' | 'dark';
export type PageTab = 'Home' | 'About' | 'Creations' | 'Achievements' | 'Projects' | 'Dashboard' | 'Guestbook' | 'Contact' | 'Links';

export type StatusMode = 'open' | 'hire' | 'collaborate' | 'building';

export interface UserSession {
  name: string;
  avatarColor: string;
  provider: 'google' | 'github';
}

interface PortfolioContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Language;
  setLang: (l: Language) => void;
  statusMode: StatusMode;
  toggleStatusMode: () => void;
  activeTab: PageTab;
  setActiveTab: (t: PageTab) => void;
  currentUser: UserSession | null;
  setCurrentUser: (u: UserSession | null) => void;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('satria_portfolio_theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    }
    return 'dark';
  });
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('satria_portfolio_lang');
      if (stored === 'US' || stored === 'ID') {
        return stored;
      }
    }
    return 'ID'; // Default to 'PK' ('ID' in our code representation)
  });
  const [statusMode, setStatusMode] = useState<StatusMode>('open');
  const [activeTab, setActiveTabState] = useState<PageTab>('Home');

  // Persist language setting
  const setLang = (l: Language) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('satria_portfolio_lang', l);
    }
  };

  // Persist theme setting
  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (typeof window !== 'undefined') {
      localStorage.setItem('satria_portfolio_theme', t);
      const root = window.document.documentElement;
      if (t === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  // Align document root with initial stored theme on mount or when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);
  const [currentUser, setCurrentUserState] = useState<UserSession | null>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('satria_guestbook_session');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (_) {
          return null;
        }
      }
    }
    return null;
  });

  const setCurrentUser = (user: UserSession | null) => {
    setCurrentUserState(user);
    if (user) {
      localStorage.setItem('satria_guestbook_session', JSON.stringify(user));
    } else {
      localStorage.removeItem('satria_guestbook_session');
    }
  };

  // Automatically cycle statusMode every 3 seconds (3000ms)
  useEffect(() => {
    const statuses: StatusMode[] = ['open', 'hire', 'collaborate', 'building'];
    const interval = setInterval(() => {
      setStatusMode(prev => {
        const idx = statuses.indexOf(prev);
        return statuses[(idx + 1) % statuses.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Sync activeTab with URL hash for "dynamic routing" experience!
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (isValidTab(hash)) {
        setActiveTabState((prev) => {
          if (prev !== hash) {
            return hash as PageTab;
          }
          return prev;
        });
      } else if (!hash) {
        setActiveTabState((prev) => {
          if (prev !== 'Home') {
            return 'Home';
          }
          return prev;
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Guarantee scroll reset to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeTab]);

  const setActiveTab = (t: PageTab) => {
    setActiveTabState(t);
    window.location.hash = t;
  };

  const toggleStatusMode = () => {
    const statuses: StatusMode[] = ['open', 'hire', 'collaborate', 'building'];
    setStatusMode(prev => {
      const idx = statuses.indexOf(prev);
      return statuses[(idx + 1) % statuses.length];
    });
  };

  const isValidTab = (hash: string): hash is PageTab => {
    return ['Home', 'About', 'Creations', 'Achievements', 'Projects', 'Dashboard', 'Guestbook', 'Contact', 'Links'].includes(hash);
  };

  return (
    <PortfolioContext.Provider value={{
      theme,
      setTheme,
      lang,
      setLang,
      statusMode,
      toggleStatusMode,
      activeTab,
      setActiveTab,
      currentUser,
      setCurrentUser,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

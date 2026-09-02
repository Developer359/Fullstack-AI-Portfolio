export interface PinnedRepo {
  name: string;
  description: Record<'US' | 'ID', string>;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}

export interface DashboardTranslations {
  title: string;
  subtitle: string;
  username: string;
  followers: string;
  following: string;
  repositories: string;
  contributions: string;
  thisWeek: string;
  bestDay: string;
  dailyAvg: string;
  dailyAvgUnit: string;
  pinnedTitle: string;
  less: string;
  more: string;
}

export const githubStats = {
  followers: 2,
  following: 18,
  repositories: 8,
  contributions: 20,
  thisWeek: 15,
  bestDay: 12,
  dailyAvg: "2"
};

export const pinnedReposData: PinnedRepo[] = [
  {
    name: "Fullstack-AI-Portfolio",
    description: {
      US: "⚡ An elite full-stack portfolio showcasing end-to-end AI products, robust LLM orchestration, vector databases, and real-time streaming infrastructure.",
      ID: "⚡ Aik behtareen full-stack portfolio jo end-to-end AI products, robust LLM orchestration aur vector databases ke sath display karta hai."
    },
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 3,
    forks: 1,
    url: "https://github.com/Developer359/Fullstack-AI-Portfolio"
  },
  {
    name: "AuraGallery",
    description: {
      US: "📱 A privacy-first, serverless mobile image organizer that runs entirely offline using on-device machine learning for semantic vector searches.",
      ID: "📱 Aik privacy-first mobile image organizer jo mukammal offline chalta hai on-device machine learning aur vector searches ke sath."
    },
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    forks: 0,
    url: "https://github.com/Developer359/AuraGallery"
  },
  {
    name: "Donate-WebSlte",
    description: {
      US: "🌍 A high-performance Next.js platform built for social impact, connecting donors with meaningful causes and disaster relief.",
      ID: "🌍 Aik high-performance Next.js platform jo social impact ke liye banaya gaya hai, donors ko meaningful causes se jortay hue."
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    forks: 1,
    url: "https://github.com/Developer359/Donate-WebSIte"
  },
  {
    name: "Resume-Checker",
    description: {
      US: "📄 Smart resume checker that gives instant feedback, scoring, and tips to boost your career opportunities.",
      ID: "📄 Smart resume checker jo fori feedback aur tips deta hai aapke career ke opportunities barhanay ke liye."
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 2,
    forks: 0,
    url: "https://github.com/Developer359/Resume-Checker"
  },
  {
    name: "AirSwift-landingPage",
    description: {
      US: "🚀 High-performance modern landing page built with Next.js and Tailwind CSS for corporate web applications.",
      ID: "🚀 Next.js aur Tailwind CSS ke sath banaya gaya aik modern aur fast landing page web application."
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 1,
    forks: 0,
    url: "https://github.com/Developer359/AirSwift-landingPage"
  }
];

export const dashboardTranslations: Record<'US' | 'ID', DashboardTranslations> = {
  US: {
    title: "GitHub Activity",
    subtitle: "Open source contributions, repositories, and coding activity over the past year.",
    username: "@Developer359",
    followers: "Followers",
    following: "Following",
    repositories: "Repositories",
    contributions: "Contributions",
    thisWeek: "This Week",
    bestDay: "Best Day",
    dailyAvg: "Daily Avg",
    dailyAvgUnit: "/ day",
    pinnedTitle: "Pinned Repositories",
    less: "Less",
    more: "More"
  },
  ID: {
    title: "GitHub Ki Sargarmi",
    subtitle: "Guzashta saal ki open source contributions, repositories aur coding activity.",
    username: "@Developer359",
    followers: "Followers",
    following: "Following",
    repositories: "Repositories",
    contributions: "Contributions",
    thisWeek: "Is Hafta",
    bestDay: "Behtareen Din",
    dailyAvg: "Avg Rozana",
    dailyAvgUnit: "/ din",
    pinnedTitle: "Pinned Repositories",
    less: "Kam",
    more: "Zyada"
  }
};
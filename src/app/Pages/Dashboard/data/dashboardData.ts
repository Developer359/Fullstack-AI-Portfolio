export interface PinnedRepo {
  name: string;
  description: Record<'US' | 'ID', string>;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
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
  followers: 116,
  following: 18,
  repositories: 19,
  contributions: 470,
  thisWeek: 0,
  bestDay: 50,
  dailyAvg: "1"
};

export const pinnedReposData: PinnedRepo[] = [
  {
    name: "satriabahari.my.id",
    description: {
      US: "🔥 Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind CSS, SWR and Prisma.",
      ID: "🔥 Zaati website aur portfolio, Next.js, TypeScript, Tailwind CSS, SWR aur Prisma ke sath shuru se banaya gaya."
    },
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 97,
    forks: 28
  },
  {
    name: "portfolio",
    description: {
      US: "⚡ Personal website & portfolio, built from scratch using Next.js, TypeScript, and Tailwind CSS",
      ID: "⚡ Zaati website aur portfolio, Next.js, TypeScript aur Tailwind CSS ke sath shuru se banaya gaya."
    },
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 3,
    forks: 3
  },
  {
    name: "inventory-smart",
    description: {
      US: "📜 Web Smart Inventory adalah web menyajikan informasi visual dan data terkait product secara terpusat. Dashboard i...",
      ID: "📜 Web Smart Inventory aik aisi web hai jo product ki visual maloomat aur data ko aik jagah pesh karti hai."
    },
    language: "SCSS",
    languageColor: "#c6538c",
    stars: 3,
    forks: 1
  },
  {
    name: "astronesia",
    description: {
      US: "🚀 The Astronesia school website, as a final project for a software engineering course, was created from scratch usin...",
      ID: "🚀 Astronesia school ki website, software engineering course ke aakhri project ke taur par shuru se banayi gayi..."
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 1,
    forks: 0
  },
  {
    name: "himapres",
    description: {
      US: "🎓 Academic achievement and organization information system platform for student association.",
      ID: "🎓 Student association ke liye academic achievement aur organization ki maloomat ka system platform."
    },
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 1,
    forks: 1
  }
];

export const dashboardTranslations: Record<'US' | 'ID', DashboardTranslations> = {
  US: {
    title: "GitHub Activity",
    subtitle: "Open source contributions, repositories, and coding activity over the past year.",
    username: "@satriabahari",
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
    username: "@satriabahari",
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

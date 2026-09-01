export interface CreatorStats {
  followers: { value: string; label: { US: string; ID: string } };
  following: { value: string; label: { US: string; ID: string } };
  likes: { value: string; label: { US: string; ID: string } };
  totalViews: { value: string; label: { US: string; ID: string } };
  totalComments: { value: string; label: { US: string; ID: string } };
  totalShares: { value: string; label: { US: string; ID: string } };
}

export interface CreatorProfile {
  username: string;
  fullName: string;
  avatar: string;
  bio: {
    US: string[];
    ID: string[];
  };
  email: string;
  tiktokUrl: string;
  youtubeUrl: string;
  stats: {
    TikTok: CreatorStats;
    YouTube: CreatorStats;
  };
}

export interface CreationVideo {
  id: string;
  title: string;
  coverStyle: {
    gradient: string;
    textShadowColor: string;
    codeSnippet?: string;
    illustrationType: 'tools' | 'readme' | 'sekelas' | 'claude' | 'generic';
  };
  views: number;
  viewsFormatted: string;
  platform: 'TikTok' | 'YouTube';
  videoUrl: string;
  createdDaysAgo: number;
  youtube?: {
    channelName: string;
    channelAvatarUrl: string;
    publishedText: string;
    durationText: string;
    thumbnailUrl: string;
    isVerified?: boolean;
    hasDubbedLabel?: boolean;
  };
}

export interface CreationsTranslations {
  title: string;
  subtitle: string;
  tiktokTab: string;
  youtubeTab: string;
  openButton: {
    TikTok: string;
    YouTube: string;
  };
  privacyPolicy: string;
  showingCount: string;
  sortBy: string;
  sortOptions: {
    popular: string;
    latest: string;
  };
}

export const creatorProfile: CreatorProfile = {
  username: "M.subhan",
  fullName: "Muhammad Subhan",
  avatar: "/src/assets/images/Profileimg.jpg",
  email: "m.subhan8661@gmail.com",
  tiktokUrl: "",
  youtubeUrl: "",
  bio: {
    US: [
      "AI Engineer",
      "Building scalable apps",
      "Sharing daily tech tips & tricks"
    ],
    ID: [
      "AI Engineer",
      "Scalable apps bana rha hun",
      "Rozana tech tips aur tricks share karna"
    ]
  },
  stats: {
    TikTok: {
      followers: { value: "Null", label: { US: "Followers", ID: "Followers" } },
      following: { value: "Null", label: { US: "Following", ID: "Following" } },
      likes: { value: "Null", label: { US: "Likes", ID: "Likes" } },
      totalViews: { value: "Null", label: { US: "Total Views", ID: "Total Views" } },
      totalComments: { value: "Null", label: { US: "Total Comments", ID: "Total Comments" } },
      totalShares: { value: "Null", label: { US: "Total Shares", ID: "Total Shares" } }
    },
    YouTube: {
      followers: { value: "Null", label: { US: "Subscribers", ID: "Subscribers" } },
      following: { value: "Null", label: { US: "Videos", ID: "Videos" } },
      likes: { value: "Null", label: { US: "Likes", ID: "Likes" } },
      totalViews: { value: "Null", label: { US: "Total Views", ID: "Total Views" } },
      totalComments: { value: "Null", label: { US: "Total Comments", ID: "Total Comments" } },
      totalShares: { value: "Null", label: { US: "Total Shares", ID: "Total Shares" } }
    }
  }
};

export const creationsVideos: CreationVideo[] = [
  // TIKTOK VIDEOS
  {
    id: "v1",
    title: "Ini 6 TOOLS Yang Bikin",
    coverStyle: {
      gradient: "from-amber-500/10 via-neutral-900 to-black",
      textShadowColor: "rgba(245, 158, 11, 0.5)",
      codeSnippet: "const tools = ['Git', 'Vercel', 'Vite', 'Docker', 'Postman', 'Claude'];",
      illustrationType: "tools"
    },
    views: 7145,
    viewsFormatted: "7.1k",
    platform: "TikTok",
    videoUrl: "https://www.tiktok.com/@satriaabaharii",
    createdDaysAgo: 5
  },
  {
    id: "v2",
    title: "PROJECTMU BAGUS, README-NYA BELUM!",
    coverStyle: {
      gradient: "from-teal-600/20 via-neutral-900 to-black",
      textShadowColor: "rgba(13, 148, 136, 0.5)",
      codeSnippet: "# My Amazing Project\n## Getting Started\n```bash\nnpm install\n```",
      illustrationType: "readme"
    },
    views: 3566,
    viewsFormatted: "3.5k",
    platform: "TikTok",
    videoUrl: "https://www.tiktok.com/@satriaabaharii",
    createdDaysAgo: 12
  },
  {
    id: "v3",
    title: "Ini WEBSITE Yang Bikin TAMPILAN WEBSITE KAMU KELIHATAN SEKELAS...",
    coverStyle: {
      gradient: "from-indigo-600/20 via-neutral-900 to-black",
      textShadowColor: "rgba(79, 70, 229, 0.5)",
      codeSnippet: "import { motion } from 'framer-motion';\nexport const BentoGrid = () => {}",
      illustrationType: "sekelas"
    },
    views: 24600,
    viewsFormatted: "24.6k",
    platform: "TikTok",
    videoUrl: "https://www.tiktok.com/@satriaabaharii",
    createdDaysAgo: 2
  },
  {
    id: "v4",
    title: "5 CARA HEMAT TOKEN CLAUDE 80%",
    coverStyle: {
      gradient: "from-rose-600/20 via-neutral-900 to-black",
      textShadowColor: "rgba(225, 29, 72, 0.5)",
      codeSnippet: "Usage limits: Pro\n- Current Session: 20%\n- System Prompt Optimization",
      illustrationType: "claude"
    },
    views: 2568,
    viewsFormatted: "2.5k",
    platform: "TikTok",
    videoUrl: "https://www.tiktok.com/@satriaabaharii",
    createdDaysAgo: 18
  },
  {
    id: "v5",
    title: "Setup Neovim Sederhana Untun Pemula",
    coverStyle: {
      gradient: "from-emerald-600/10 via-neutral-900 to-black",
      textShadowColor: "rgba(16, 185, 129, 0.5)",
      codeSnippet: "require('lazy').setup({\n  'nvim-treesitter/nvim-treesitter',\n  'neovim/nvim-lspconfig'\n})",
      illustrationType: "generic"
    },
    views: 1845,
    viewsFormatted: "1.8k",
    platform: "TikTok",
    videoUrl: "https://www.tiktok.com/@satriaabaharii",
    createdDaysAgo: 25
  },
  {
    id: "v6",
    title: "Tips Customizing Terminal MacOS & WSL",
    coverStyle: {
      gradient: "from-cyan-600/10 via-neutral-900 to-black",
      textShadowColor: "rgba(6, 182, 212, 0.5)",
      codeSnippet: "export ZSH_THEME='powerlevel10k/powerlevel10k'",
      illustrationType: "generic"
    },
    views: 4120,
    viewsFormatted: "4.1k",
    platform: "TikTok",
    videoUrl: "https://www.tiktok.com/@satriaabaharii",
    createdDaysAgo: 8
  },

  // YOUTUBE VIDEOS (Real mock matching user picture with detailed stats)
  {
    id: "yt1",
    title: "Web Scraping for Beginners – Extract Data with an API",
    coverStyle: {
      gradient: "from-neutral-900 to-black",
      textShadowColor: "rgba(0,0,0,0.5)",
      illustrationType: "generic"
    },
    views: 39000,
    viewsFormatted: "39k views",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=mock1",
    createdDaysAgo: 2,
    youtube: {
      channelName: "freeCodeCamp.org",
      channelAvatarUrl: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=120&auto=format&fit=crop&q=80",
      publishedText: "2 days ago",
      durationText: "1:01:45",
      thumbnailUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=80",
      isVerified: true
    }
  },
  {
    id: "yt2",
    title: "I Cooked The Original 1952 KFC Menu",
    coverStyle: {
      gradient: "from-neutral-900 to-black",
      textShadowColor: "rgba(0,0,0,0.5)",
      illustrationType: "generic"
    },
    views: 345000,
    viewsFormatted: "345k views",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=mock2",
    createdDaysAgo: 3,
    youtube: {
      channelName: "Patrick Zeinali",
      channelAvatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      publishedText: "3 days ago",
      durationText: "26:45",
      thumbnailUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=80",
      isVerified: true
    }
  },
  {
    id: "yt3",
    title: "Mark Rober's $60 Million Science Experiment | TED",
    coverStyle: {
      gradient: "from-neutral-900 to-black",
      textShadowColor: "rgba(0,0,0,0.5)",
      illustrationType: "generic"
    },
    views: 1900000,
    viewsFormatted: "1.9m views",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=mock3",
    createdDaysAgo: 14,
    youtube: {
      channelName: "TED and Mark Rober",
      channelAvatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=120&auto=format&fit=crop&q=80",
      publishedText: "2 weeks ago",
      durationText: "14:21",
      thumbnailUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
      isVerified: true,
      hasDubbedLabel: true
    }
  },
  {
    id: "yt4",
    title: "Can I Survive 100 Days on Minecraft's Deadliest Server?",
    coverStyle: {
      gradient: "from-neutral-900 to-black",
      textShadowColor: "rgba(0,0,0,0.5)",
      illustrationType: "generic"
    },
    views: 410000,
    viewsFormatted: "410k views",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=mock4",
    createdDaysAgo: 4,
    youtube: {
      channelName: "GamerPro",
      channelAvatarUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=120&auto=format&fit=crop&q=80",
      publishedText: "4 days ago",
      durationText: "19:28",
      thumbnailUrl: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=800&auto=format&fit=crop&q=80",
      isVerified: false
    }
  },
  {
    id: "yt5",
    title: "Stop Using OpenClaw – Hermes Desktop App Just Released!",
    coverStyle: {
      gradient: "from-neutral-950 to-black",
      textShadowColor: "rgba(0,0,0,0.5)",
      illustrationType: "generic"
    },
    views: 180000,
    viewsFormatted: "180k views",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=mock5",
    createdDaysAgo: 5,
    youtube: {
      channelName: "TechCritique",
      channelAvatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80",
      publishedText: "5 days ago",
      durationText: "14:24",
      thumbnailUrl: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=800&auto=format&fit=crop&q=80",
      isVerified: true
    }
  },
  {
    id: "yt6",
    title: "Australia vs India | WTC23 FINAL MATCH HIGHLIGHTS",
    coverStyle: {
      gradient: "from-neutral-900 to-black",
      textShadowColor: "rgba(0,0,0,0.5)",
      illustrationType: "generic"
    },
    views: 2400000,
    viewsFormatted: "2.4m views",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=mock6",
    createdDaysAgo: 30,
    youtube: {
      channelName: "ICC Cricket Highlights",
      channelAvatarUrl: "https://images.unsplash.com/photo-1540747737956-378724044432?w=120&auto=format&fit=crop&q=80",
      publishedText: "1 month ago",
      durationText: "12:02",
      thumbnailUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=80",
      isVerified: true
    }
  }
];

export const creationsTranslations: Record<'US' | 'ID', CreationsTranslations> = {
  US: {
    title: "Creations",
    subtitle: "A collection of my coding content and creative works.",
    tiktokTab: "TikTok",
    youtubeTab: "YouTube",
    openButton: {
      TikTok: "Open TikTok",
      YouTube: "Open YouTube"
    },
    privacyPolicy: "View Privacy Policy",
    showingCount: "Showing {count} of {total} videos",
    sortBy: "Sort by...",
    sortOptions: {
      popular: "Most Popular",
      latest: "Latest Uploads"
    }
  },
  ID: {
    title: "Takhleeqat",
    subtitle: "Meri coding aur creative contents ka majmua.",
    tiktokTab: "TikTok",
    youtubeTab: "YouTube",
    openButton: {
      TikTok: "TikTok Kholein",
      YouTube: "YouTube Kholein"
    },
    privacyPolicy: "Privacy Policy Dekhein",
    showingCount: "{total} mein se {count} videos dikha rahe hain",
    sortBy: "Tarteeb dein...",
    sortOptions: {
      popular: "Sabse Zyada Popular",
      latest: "Sabse Nayi"
    }
  }
};

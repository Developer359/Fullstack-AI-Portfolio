export interface Achievement {
  id: string;
  credentialId: string;
  title: Record<'US' | 'ID', string>;
  issuer: string;
  type: string; // e.g. "Professional", "Course"
  category: string; // e.g. "Backend", "Freelance", "Mobile"
  issuedDate: Record<'US' | 'ID', string>; // e.g. "ISSUED ON JULY 2025" or "DITERBITKAN PADA JULI 2025"
  certificateUrl: string;
  imageUrl?: string; // Optional raw image if it comes from database/backend
  mockStyle: {
    themeColor: string; // Tailwind color class or hex string
    gradientFrom: string;
    gradientTo: string;
    logoType: 'parto' | 'bwa' | 'dicoding' | 'generic';
    layoutPattern: 'leaf' | 'minimal' | 'badge';
  };
}

export interface AchievementsTranslations {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  filterByType: string;
  filterByCategory: string;
  totalText: string;
  allTypes: string;
  allCategories: string;
  certifiedTo: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    credentialId: "196/EKS/HCLGA/ATI/VIII/2025",
    title: {
      US: "Backend Developer Internship - Parto.id",
      ID: "Backend Developer Internship - Parto.id"
    },
    issuer: "Affan Technology Indonesia",
    type: "Professional",
    category: "Backend",
    issuedDate: {
      US: "ISSUED ON JULY 2025",
      ID: "Jari Kiya Gaya July 2025"
    },
    certificateUrl: "https://parto.id",
    mockStyle: {
      themeColor: "#15803d", // Green-700
      gradientFrom: "from-emerald-500/10",
      gradientTo: "to-emerald-100/30",
      logoType: "parto",
      layoutPattern: "leaf"
    }
  },
  {
    id: "ach-2",
    credentialId: "BWA-FWD-9921D",
    title: {
      US: "E-book Petunjuk Pro: Freelance Web Developer & Kerja Remote",
      ID: "E-book Petunjuk Pro: Freelance Web Developer & Kerja Remote"
    },
    issuer: "Build With Angga",
    type: "Course",
    category: "Freelance",
    issuedDate: {
      US: "ISSUED ON SEPTEMBER 2025",
      ID: "Jari Kiya Gaya September 2025"
    },
    certificateUrl: "https://buildwithangga.com",
    mockStyle: {
      themeColor: "#0252e3", // BWA Blue
      gradientFrom: "from-blue-600/10",
      gradientTo: "to-blue-100/25",
      logoType: "bwa",
      layoutPattern: "minimal"
    }
  },
  {
    id: "ach-3",
    credentialId: "81P2LGL38ZOY",
    title: {
      US: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
      ID: "Jetpack Compose ke sath Android App Banana Seekhein"
    },
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Mobile",
    issuedDate: {
      US: "ISSUED ON JANUARY 2025",
      ID: "Jari Kiya Gaya January 2025"
    },
    certificateUrl: "https://dicoding.com",
    mockStyle: {
      themeColor: "#1a1e29", // Dicoding Dark
      gradientFrom: "from-neutral-800/10",
      gradientTo: "to-neutral-100/30",
      logoType: "dicoding",
      layoutPattern: "badge"
    }
  },
  {
    id: "ach-4",
    credentialId: "102/CLOUD-ARCH/GCP-VIII/2025",
    title: {
      US: "Google Cloud Associate Engineer Course",
      ID: "Google Cloud Associate Engineer Course"
    },
    issuer: "Dicoding Indonesia",
    type: "Course",
    category: "Cloud",
    issuedDate: {
      US: "ISSUED ON MARCH 2025",
      ID: "Jari Kiya Gaya March 2025"
    },
    certificateUrl: "https://dicoding.com",
    mockStyle: {
      themeColor: "#4285F4", // GCP Blue
      gradientFrom: "from-sky-500/10",
      gradientTo: "to-sky-100/30",
      logoType: "dicoding",
      layoutPattern: "badge"
    }
  },
  {
    id: "ach-5",
    credentialId: "FT-FS-REACT-2025",
    title: {
      US: "Fullstack Web Development with React and Node.js",
      ID: "React aur Node.js ke sath Fullstack Web Development"
    },
    issuer: "Affan Technology Indonesia",
    type: "Professional",
    category: "Fullstack",
    issuedDate: {
      US: "ISSUED ON NOVEMBER 2025",
      ID: "Jari Kiya Gaya November 2025"
    },
    certificateUrl: "https://parto.id",
    mockStyle: {
      themeColor: "#61dafb", // React Cyan
      gradientFrom: "from-cyan-500/10",
      gradientTo: "to-cyan-100/30",
      logoType: "parto",
      layoutPattern: "leaf"
    }
  },
  {
    id: "ach-6",
    credentialId: "NDH-2025-X89",
    title: {
      US: "Top 50 Nusantara Developer Hackathon",
      ID: "Nusantara Developer Hackathon ke Top 50"
    },
    issuer: "Nusantara Dev",
    type: "Medal",
    category: "Fullstack",
    issuedDate: {
      US: "ISSUED ON JUNE 2025",
      ID: "Jari Kiya Gaya June 2025"
    },
    certificateUrl: "https://hackathon.nusantara.dev",
    mockStyle: {
      themeColor: "#eab308", // Amber
      gradientFrom: "from-amber-500/10",
      gradientTo: "to-amber-100/30",
      logoType: "generic",
      layoutPattern: "badge"
    }
  },
  {
    id: "ach-7",
    credentialId: "GACP-2024-C32",
    title: {
      US: "Google Android Cloud Associate Certification",
      ID: "Google Android Cloud Associate Certification"
    },
    issuer: "Google",
    type: "Award",
    category: "Mobile",
    issuedDate: {
      US: "ISSUED ON DECEMBER 2024",
      ID: "Jari Kiya Gaya December 2024"
    },
    certificateUrl: "https://cloud.google.com",
    mockStyle: {
      themeColor: "#3b82f6", // Blue
      gradientFrom: "from-blue-500/10",
      gradientTo: "to-blue-100/30",
      logoType: "generic",
      layoutPattern: "badge"
    }
  },
  {
    id: "ach-8",
    credentialId: "GCA-2023-Z15",
    title: {
      US: "10k+ Developer Community Growth Award",
      ID: "10k+ Developer Community Growth Award"
    },
    issuer: "Community",
    type: "Sparkles",
    category: "Freelance",
    issuedDate: {
      US: "ISSUED ON OCTOBER 2023",
      ID: "Jari Kiya Gaya October 2023"
    },
    certificateUrl: "https://community.dev",
    mockStyle: {
      themeColor: "#ec4899", // Pink
      gradientFrom: "from-pink-500/10",
      gradientTo: "to-pink-100/30",
      logoType: "generic",
      layoutPattern: "minimal"
    }
  }
];

export const achievementsTranslations: Record<'US' | 'ID', AchievementsTranslations> = {
  US: {
    title: "Achievements",
    subtitle: "A curated collection of certificates and badges I've earned throughout my professional and academic journey.",
    searchPlaceholder: "Search...",
    filterByType: "Filter by Type",
    filterByCategory: "Filter by Category",
    totalText: "Total: {count}",
    allTypes: "All Types",
    allCategories: "All Categories",
    certifiedTo: "Certificate of Completion"
  },
  ID: {
    title: "Kamyabiyan",
    subtitle: "Mere academic aur professional safar ke certificates aur badges ka majmua.",
    searchPlaceholder: "Talaash karein...",
    filterByType: "Type ke mutabiq filter karein",
    filterByCategory: "Category ke mutabiq filter karein",
    totalText: "Total: {count}",
    allTypes: "Tamam Types",
    allCategories: "Tamam Categories",
    certifiedTo: "Certificate of Completion"
  }
};

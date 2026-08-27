export interface ProjectFeatures {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  description: Record<'US' | 'ID', string>;
  category: 'Personal Project' | 'Internship' | 'Freelance' | 'Lomba';
  type: 'Web' | 'Mobile';
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  views?: number;
  introduction?: Record<'US' | 'ID', string>;
  techStackList?: string[];
  featuresList?: ProjectFeatures[];
}

export const projectsData: Project[] = [
  {
    id: "satriabahari-my-id",
    title: "satriabahari.my.id",
    description: {
      US: "Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind CSS, SWR and Prisma.",
      ID: "Zaati website aur portfolio, Next.js, TypeScript, Tailwind CSS, SWR aur Prisma ke sath shuru se banaya gaya."
    },
    category: "Personal Project",
    type: "Web",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "SWR", "Prisma", "Supabase"],
    imageUrl: "https://images.unsplash.com/photo-1547119944-472561227e16?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/satriabahari/satriabahari.my.id",
    demoUrl: "https://satriabahari.my.id",
    featured: true,
    views: 685,
    introduction: {
      US: "A personal developer portfolio and dashboard built with Next.js and TypeScript, aggregating live coding statistics from GitHub, WakaTime, Codewars, and Monkeytype via serverless API routes. Project data is persisted in Supabase PostgreSQL and served with ISR revalidation, with full bilingual support (en/id) via next-intl.",
      ID: "Next.js aur TypeScript se bana developer portfolio aur dashboard, jo GitHub, WakaTime aur Codewars ke coding stats ko live fetch karta hai."
    },
    techStackList: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS v3",
      "Zustand",
      "SWR",
      "Framer Motion",
      "React Icons",
      "Next-Intl (i18n)",
      "Absolute Imports & Path Alias",
      "ESLint & Prettier",
      "Conventional Commit Lint"
    ],
    featuresList: [
      {
        title: "Wakatime Stats",
        desc: "Displays live coding stats from Wakatime via serverless API routes using api/wakatime."
      },
      {
        title: "Project Showcase",
        desc: "Project data is stored in Supabase PostgreSQL, and displayed using: ISR (1s revalidation) or SSR for fast access."
      },
      {
        title: "Internationalization",
        desc: "Multi-language support with next-intl. Currently includes Bahasa Indonesia and English."
      },
      {
        title: "Developer Dashboard",
        desc: "Interactive dashboard showing: GitHub contributions, Wakatime coding hours, Codewars challenges, and Monkeytype typing speeds. All stats fetched from public APIs and rendered dynamically."
      }
    ]
  },
  {
    id: "tnks-gunung-kerinci",
    title: "TNKS Gunung Kerinci",
    description: {
      US: "A mobile application for Mount Kerinci climbing guide and reporting in TNKS National Park.",
      ID: "TNKS National Park mein Kerinci pahar charhne walon aur reporting ke liye mobile application."
    },
    category: "Personal Project",
    type: "Mobile",
    tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Mapbox", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/satriabahari/tnks-kerinci",
    demoUrl: "#",
    featured: true,
    views: 420,
    introduction: {
      US: "An offline-first Android navigation guide development for hikers climbing Mount Kerinci, featuring emergency checkpoint mapping and real-time coordinator alerts.",
      ID: "Kerinci pahar charhne walon ke liye offline-first Android navigation guide, jis mein emergency check points aur signals shamil hain."
    },
    techStackList: [
      "Kotlin",
      "Jetpack Compose",
      "Mapbox SDK",
      "Firebase Firestore",
      "Room Database",
      "Retrofit"
    ],
    featuresList: [
      {
        title: "Offline Topography Maps",
        desc: "Access maps without active internet connectivity using cached map vector tiles."
      },
      {
        title: "Distress SOS Signal",
        desc: "Local geofence-based emergency SMS triggering to mountain rangers in offline scenarios."
      }
    ]
  },
  {
    id: "presensi-internal-system",
    title: "Presensi Internal System",
    description: {
      US: "The Presence Internal System is a custom-built attendance tracking backend developer client app.",
      ID: "Presensi Internal System aik kustom attendance tracking backend developer client app hai."
    },
    category: "Internship",
    type: "Mobile",
    tags: ["Flutter", "Dart", "REST API", "Geofencing", "Biometrics"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
    featured: false,
    views: 312,
    introduction: {
      US: "A comprehensive biometric check-in helper for enterprise internal tracking configured with active coordinates checking.",
      ID: "Enterprise internal tracking ke liye biometric check-in helper jo active coordinates checking ke sath chalta hai."
    },
    techStackList: [
      "Flutter & Dart",
      "Local Authentication (Biometrics)",
      "Google Geofencing API",
      "Provider state management",
      "Node.js Express backend API"
    ],
    featuresList: [
      {
        title: "Frictionless Authentication",
        desc: "FaceID and fingerprint biometric authorization directly tied to active enterprise accounts."
      },
      {
        title: "Geolocated Attendance Validation",
        desc: "Restricts check-in capabilities to exact company building perimeter grids via custom radius check."
      }
    ]
  },
  {
    id: "berbagi-link",
    title: "Berbagi.link",
    description: {
      US: "Berbagi.link is a mini-website platform for online businesses but lacks mobile first designs.",
      ID: "Berbagi.link online businesses ke liye aik mini-website platform hai jis mein mobile designs shamil hain."
    },
    category: "Personal Project",
    type: "Mobile",
    tags: ["React Native", "TailwindCSS", "Redux Toolkit", "SWR"],
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/satriabahari/berbagi-link",
    demoUrl: "#",
    featured: false,
    views: 195,
    introduction: {
      US: "Mobile adaptation platform to wrap multiple bio-links, digital billing codes, and merchant catalogues cleanly for local enterprises.",
      ID: "Local businesses ke liye bio-links, digital bills aur catalogs ko clean tareeqay se manage karne ka mobile platform."
    },
    techStackList: [
      "React Native",
      "Expo CLI",
      "Tailwind CSS (NativeWind)",
      "Redux Toolkit",
      "SWR integrations"
    ],
    featuresList: [
      {
        title: "QR Code Card Generator",
        desc: "Generates beautiful business QR codes directly printable or shareable through chat apps."
      },
      {
        title: "Interactive Analytics Dashboard",
        desc: "Graphically visualizes link tap histories, referral sources, and geo-distributions."
      }
    ]
  },
  {
    id: "robust-fitness",
    title: "Robust",
    description: {
      US: "Robust Fitness is a platform designed to help users achieve their fitness goals by tracking workouts.",
      ID: "Robust Fitness aik aisa platform hai jo workout tracks ke zariye fitness goals hasil karne mein madad karta hai."
    },
    category: "Personal Project",
    type: "Web",
    tags: ["React", "Vite", "Node.js", "Express", "TailwindCSS", "Recharts"],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/satriabahari/robust-fitness",
    demoUrl: "#",
    featured: false,
    views: 280,
    introduction: {
      US: "A sleek, dark-themed fitness planner and gym dashboard allowing users to log custom daily workout splits, monitor calorie intakes, and build dynamic progress charts.",
      ID: "Dark-themed sleek fitness planner aur gym dashboard jo rooz ka workout log karne, calories track karne aur graphs dekhne ki ijazat deta hai."
    },
    techStackList: [
      "React (Vite)",
      "Express.js Server",
      "Tailwind CSS theme engine",
      "Recharts visual graphs",
      "MongoDB database"
    ],
    featuresList: [
      {
        title: "Workout Log Grid",
        desc: "Custom exercise matrices with set metrics, weight progression counters, and warmups lists."
      },
      {
        title: "Interactive Body Progress Charts",
        desc: "Smooth bezier visual curves tracking skeletal weight changes, fat ratios, and hydration curves."
      }
    ]
  },
  {
    id: "digital-business",
    title: "Digital Business",
    description: {
      US: "Revolutionize your business with our digital solutions, offering innovative services for local firms.",
      ID: "Humares digital solutions ke sath apne business ko behtar banayein aur local enterprises ko digitalized karein."
    },
    category: "Freelance",
    type: "Web",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    demoUrl: "#",
    featured: false,
    views: 145,
    introduction: {
      US: "A stylized corporate presentation landing pack and internal portfolio showcasing automated business analytics products.",
      ID: "Sleek corporate presentation landing page aur digital analytics products dikhane ke liye internal portfolio."
    },
    techStackList: [
      "React",
      "Tailwind CSS typography preset",
      "Framer Motion transitions",
      "Lucide icon assets"
    ],
    featuresList: [
      {
        title: "Staggered Micro-Animations",
        desc: "Polished entrance animations triggering upon scrolls to draw visual interest to call-to-action blocks."
      },
      {
        title: "Dynamic Cost Estimate Calculator",
        desc: "Frictionless interactive pricing model selector returning dynamic monthly bill estimations."
      }
    ]
  },
  {
    id: "inventory-smart",
    title: "Inventory Smart",
    description: {
      US: "Inventory Smart is an advanced inventory management solution designed to streamline warehousing.",
      ID: "Inventory Smart warehousing ko behtar aur asaan banane ke liye aik advanced inventory management system hai."
    },
    category: "Freelance",
    type: "Web",
    tags: ["Laravel", "Livewire", "Alpine.js", "TailwindCSS", "MySQL"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    demoUrl: "#",
    featured: false,
    views: 210,
    introduction: {
      US: "An enterprise warehousing tracker suite designed to coordinate massive supplier logs, item barcode scans, real-time restock warnings, and PDF generation.",
      ID: "Enterprise warehousing system jo supplier logs, barcode scans, real-time alerts aur reports produce karta hai."
    },
    techStackList: [
      "Laravel",
      "Livewire reactive controller",
      "Alpine.js state handlers",
      "Tailwind CSS structures",
      "MySQL relational schema"
    ],
    featuresList: [
      {
        title: "Real-time Low Stock Warning",
        desc: "Dynamic background watcher returning warning bells to store operators when threshold levels fall."
      },
      {
        title: "Automated Invoice Generator",
        desc: "Generate and export customized PDF documents with business letterheads in a single click."
      }
    ]
  }
];

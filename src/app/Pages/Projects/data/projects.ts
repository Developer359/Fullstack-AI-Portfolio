// ─────────────────────────────────────────────────────────────────
// data/projects.ts
// Single source of truth for all portfolio project data.
// To add a new project: append a new object here.
// The UI, filters, and cards update automatically.
// ─────────────────────────────────────────────────────────────────

import { Project } from '../types/project';

export const projectsData: Project[] = [
  // ── Web+Mobile ─────────────────────────────────────────────────
  {
    id: 'satriabahari-my-id',
    title: 'satriabahari.my.id',
    description: {
      US: 'Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind CSS, SWR and Prisma.',
      ID: 'Zaati website aur portfolio, Next.js, TypeScript, Tailwind CSS, SWR aur Prisma ke sath shuru se banaya gaya.',
    },
    introduction: {
      US: 'A personal developer portfolio and dashboard built with Next.js and TypeScript, aggregating live coding statistics from GitHub, WakaTime, Codewars, and Monkeytype via serverless API routes. Project data is persisted in Supabase PostgreSQL and served with ISR revalidation, with full bilingual support (en/id) via next-intl.',
      ID: 'Next.js aur TypeScript se bana developer portfolio aur dashboard, jo GitHub, WakaTime aur Codewars ke coding stats ko live fetch karta hai.',
    },
    image: 'https://images.unsplash.com/photo-1547119944-472561227e16?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'SWR', 'Prisma', 'Supabase'],
    stats: [
      { emoji: '⭐', value: 48, label: 'GitHub Stars' },
      { emoji: '🔀', value: 120, label: 'Commits' },
      { emoji: '👁️', value: 685, label: 'Views' },
      { emoji: '🌐', value: 3, label: 'Globe Reacts' },
      { emoji: '😃', value: 2, label: 'Happy Reacts' },
    ],
    techStackList: [
      'Next.js 14 (App Router)',
      'TypeScript',
      'Tailwind CSS v3',
      'Zustand',
      'SWR',
      'Framer Motion',
      'Next-Intl (i18n)',
      'Prisma ORM',
      'Supabase PostgreSQL',
      'ESLint & Prettier',
    ],
    featuresList: [
      {
        title: 'WakaTime Stats',
        desc: 'Displays live coding stats from WakaTime via serverless API routes using api/wakatime.',
      },
      {
        title: 'Project Showcase',
        desc: 'Project data is stored in Supabase PostgreSQL, and displayed using ISR (1s revalidation) for fast access.',
      },
      {
        title: 'Internationalization',
        desc: 'Multi-language support with next-intl. Currently includes Bahasa Indonesia and English.',
      },
      {
        title: 'Developer Dashboard',
        desc: 'Interactive dashboard showing GitHub contributions, WakaTime coding hours, Codewars challenges, and Monkeytype typing speeds.',
      },
    ],
    githubUrl: 'https://github.com/satriabahari/satriabahari.my.id',
    demoUrl: 'https://satriabahari.my.id',
    views: 685,
  },
  {
    id: 'robust-fitness',
    title: 'Robust Fitness',
    description: {
      US: 'Robust Fitness is a platform designed to help users achieve their fitness goals by tracking workouts and calories.',
      ID: 'Robust Fitness aik aisa platform hai jo workout tracks ke zariye fitness goals hasil karne mein madad karta hai.',
    },
    introduction: {
      US: 'A sleek, dark-themed fitness planner and gym dashboard allowing users to log custom daily workout splits, monitor calorie intakes, and build dynamic progress charts.',
      ID: 'Dark-themed sleek fitness planner aur gym dashboard jo rooz ka workout log karne, calories track karne aur graphs dekhne ki ijazat deta hai.',
    },
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['React', 'Vite', 'Node.js', 'TailwindCSS'],
    stats: [
      { emoji: '⭐', value: 22, label: 'GitHub Stars' },
      { emoji: '🔀', value: 76, label: 'Commits' },
      { emoji: '👁️', value: 280, label: 'Views' },
    ],
    techStackList: [
      'React (Vite)',
      'Express.js Server',
      'Tailwind CSS theme engine',
      'Recharts visual graphs',
      'MongoDB database',
    ],
    featuresList: [
      {
        title: 'Workout Log Grid',
        desc: 'Custom exercise matrices with set metrics, weight progression counters, and warmups lists.',
      },
      {
        title: 'Interactive Body Progress Charts',
        desc: 'Smooth bezier visual curves tracking skeletal weight changes, fat ratios, and hydration curves.',
      },
    ],
    githubUrl: 'https://github.com/satriabahari/robust-fitness',
    views: 280,
  },
  {
    id: 'tnks-gunung-kerinci',
    title: 'TNKS Gunung Kerinci',
    description: {
      US: 'A mobile application for Mount Kerinci climbing guide and emergency reporting in TNKS National Park.',
      ID: 'TNKS National Park mein Kerinci pahar charhne walon aur reporting ke liye mobile application.',
    },
    introduction: {
      US: 'An offline-first Android navigation guide development for hikers climbing Mount Kerinci, featuring emergency checkpoint mapping and real-time coordinator alerts.',
      ID: 'Kerinci pahar charhne walon ke liye offline-first Android navigation guide, jis mein emergency check points aur signals shamil hain.',
    },
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Mobile',
    techStack: ['Kotlin', 'Android SDK', 'Firebase', 'Dart'],
    stats: [
      { emoji: '⭐', value: 15, label: 'GitHub Stars' },
      { emoji: '🔀', value: 94, label: 'Commits' },
      { emoji: '👁️', value: 420, label: 'Views' },
      { emoji: '🚀', value: 5, label: 'Rocket Reacts' },
    ],
    techStackList: [
      'Kotlin',
      'Jetpack Compose',
      'Mapbox SDK',
      'Firebase Firestore',
      'Room Database',
      'Retrofit',
    ],
    featuresList: [
      {
        title: 'Offline Topography Maps',
        desc: 'Access maps without active internet connectivity using cached map vector tiles.',
      },
      {
        title: 'Distress SOS Signal',
        desc: 'Local geofence-based emergency SMS triggering to mountain rangers in offline scenarios.',
      },
    ],
    githubUrl: 'https://github.com/satriabahari/tnks-kerinci',
    views: 420,
  },
  {
    id: 'presensi-internal-system',
    title: 'Presensi Internal System',
    description: {
      US: 'A custom-built attendance tracking system with biometric authentication and geofenced check-in.',
      ID: 'Presensi Internal System aik kustom attendance tracking backend developer client app hai.',
    },
    introduction: {
      US: 'A comprehensive biometric check-in helper for enterprise internal tracking configured with active coordinates checking.',
      ID: 'Enterprise internal tracking ke liye biometric check-in helper jo active coordinates checking ke sath chalta hai.',
    },
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
    isFeatured: false,
    primaryType: 'Web+Mobile',
    category: 'Mobile',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    stats: [
      { emoji: '🔀', value: 61, label: 'Commits' },
      { emoji: '👁️', value: 312, label: 'Views' },
      { emoji: '🌐', value: 2, label: 'Globe Reacts' },
    ],
    techStackList: [
      'Flutter & Dart',
      'Local Authentication (Biometrics)',
      'Google Geofencing API',
      'Provider state management',
      'Node.js Express backend API',
    ],
    featuresList: [
      {
        title: 'Frictionless Authentication',
        desc: 'FaceID and fingerprint biometric authorization directly tied to active enterprise accounts.',
      },
      {
        title: 'Geolocated Attendance Validation',
        desc: 'Restricts check-in capabilities to exact company building perimeter grids via custom radius check.',
      },
    ],
    views: 312,
  },
  {
    id: 'berbagi-link',
    title: 'Berbagi.link',
    description: {
      US: 'Berbagi.link is a mini-website platform for online businesses, enhanced with mobile-first design.',
      ID: 'Berbagi.link online businesses ke liye aik mini-website platform hai jis mein mobile designs shamil hain.',
    },
    introduction: {
      US: 'Mobile adaptation platform to wrap multiple bio-links, digital billing codes, and merchant catalogues cleanly for local enterprises.',
      ID: 'Local businesses ke liye bio-links, digital bills aur catalogs ko clean tareeqay se manage karne ka mobile platform.',
    },
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
    isFeatured: false,
    primaryType: 'Web+Mobile',
    category: 'Mobile',
    techStack: ['React Native', 'TailwindCSS', 'Redux Toolkit', 'SWR'],
    stats: [
      { emoji: '⭐', value: 9, label: 'GitHub Stars' },
      { emoji: '🔀', value: 44, label: 'Commits' },
      { emoji: '👁️', value: 195, label: 'Views' },
    ],
    techStackList: [
      'React Native',
      'Expo CLI',
      'Tailwind CSS (NativeWind)',
      'Redux Toolkit',
      'SWR integrations',
    ],
    featuresList: [
      {
        title: 'QR Code Card Generator',
        desc: 'Generates beautiful business QR codes directly printable or shareable through chat apps.',
      },
      {
        title: 'Interactive Analytics Dashboard',
        desc: 'Graphically visualizes link tap histories, referral sources, and geo-distributions.',
      },
    ],
    githubUrl: 'https://github.com/satriabahari/berbagi-link',
    views: 195,
  },

  // ── Design ─────────────────────────────────────────────────────
  {
    id: 'digital-business-landing',
    title: 'Digital Business Landing',
    description: {
      US: 'Revolutionize your business with our digital solutions — a fully animated corporate landing page.',
      ID: 'Humares digital solutions ke sath apne business ko behtar banayein aur local enterprises ko digitalized karein.',
    },
    introduction: {
      US: 'A stylized corporate presentation landing pack and internal portfolio showcasing automated business analytics products with staggered micro-animations.',
      ID: 'Sleek corporate presentation landing page aur digital analytics products dikhane ke liye internal portfolio.',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'Design',
    category: 'Web',
    techStack: ['React', 'Vite', 'TailwindCSS'],
    stats: [
      { emoji: '🎨', value: 6, label: 'Design Screens' },
      { emoji: '✨', value: 18, label: 'Animations' },
      { emoji: '👁️', value: 145, label: 'Views' },
    ],
    techStackList: [
      'React',
      'Tailwind CSS typography preset',
      'Framer Motion transitions',
      'Lucide icon assets',
    ],
    featuresList: [
      {
        title: 'Staggered Micro-Animations',
        desc: 'Polished entrance animations triggering upon scrolls to draw visual interest to call-to-action blocks.',
      },
      {
        title: 'Dynamic Cost Estimate Calculator',
        desc: 'Frictionless interactive pricing model selector returning dynamic monthly bill estimations.',
      },
    ],
    views: 145,
  },
  {
    id: 'mobile-ui-kit',
    title: 'Mobile UI Kit',
    description: {
      US: 'A comprehensive set of reusable mobile UI components designed for React Native applications.',
      ID: 'React Native applications ke liye reusable mobile UI components ka aik comprehensive set.',
    },
    introduction: {
      US: 'A fully documented design system and component library for mobile-first product teams, covering 50+ components with dark mode and accessibility support.',
      ID: '50+ components ke sath mobile-first product teams ke liye fully documented design system aur component library.',
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    isFeatured: false,
    primaryType: 'Design',
    category: 'Mobile',
    techStack: ['React Native', 'TailwindCSS', 'TypeScript'],
    stats: [
      { emoji: '🎨', value: 50, label: 'Components' },
      { emoji: '🌙', value: 'Dark', label: 'Dark Mode' },
      { emoji: '♿', value: 'A11y', label: 'Accessible' },
    ],
    techStackList: [
      'React Native',
      'NativeWind (Tailwind for RN)',
      'TypeScript strict mode',
      'Storybook docs',
    ],
    featuresList: [
      {
        title: '50+ Component Library',
        desc: 'Button, Input, Card, Modal, Toast, Tab, and many more fully tested components.',
      },
      {
        title: 'Dark & Light Themes',
        desc: 'Seamless theming system with CSS variables and NativeWind token propagation.',
      },
    ],
    views: 203,
  },

  // ── HLD ────────────────────────────────────────────────────────
  {
    id: 'inventory-smart',
    title: 'Inventory Smart',
    description: {
      US: 'An advanced inventory management solution designed to streamline warehousing with real-time restock alerts.',
      ID: 'Inventory Smart warehousing ko behtar aur asaan banane ke liye aik advanced inventory management system hai.',
    },
    introduction: {
      US: 'An enterprise warehousing tracker suite designed to coordinate massive supplier logs, item barcode scans, real-time restock warnings, and PDF generation.',
      ID: 'Enterprise warehousing system jo supplier logs, barcode scans, real-time alerts aur reports produce karta hai.',
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Projects',
    techStack: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL'],
    stats: [
      { emoji: '📦', value: '10K+', label: 'Items Tracked' },
      { emoji: '🔔', value: 99, label: 'Alert Events' },
      { emoji: '📄', value: 47, label: 'PDFs Generated' },
      { emoji: '👁️', value: 210, label: 'Views' },
    ],
    techStackList: [
      'Laravel',
      'Livewire reactive controller',
      'Alpine.js state handlers',
      'Tailwind CSS structures',
      'MySQL relational schema',
    ],
    featuresList: [
      {
        title: 'Real-time Low Stock Warning',
        desc: 'Dynamic background watcher returning warning bells to store operators when threshold levels fall.',
      },
      {
        title: 'Automated Invoice Generator',
        desc: 'Generate and export customized PDF documents with business letterheads in a single click.',
      },
    ],
    views: 210,
  },
  {
    id: 'cloud-chat-app',
    title: 'Cloud Chat App',
    description: {
      US: 'A scalable real-time chat application with WebSocket support, designed as a high-level architecture demo.',
      ID: 'WebSocket support ke sath scalable real-time chat application, high-level architecture demo ke taur par design kiya gaya.',
    },
    introduction: {
      US: 'A high-level design document and reference implementation of a distributed chat system with horizontal scaling, Redis pub/sub, and WebSocket clusters.',
      ID: 'Distributed chat system ka high-level design document aur reference implementation, jis mein horizontal scaling, Redis pub/sub, aur WebSocket clusters shamil hain.',
    },
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop',
    isFeatured: false,
    primaryType: 'HLD',
    category: 'Apps',
    techStack: ['Node.js', 'React', 'TypeScript'],
    stats: [
      { emoji: '⚡', value: '<50ms', label: 'Latency' },
      { emoji: '🔗', value: '1K+', label: 'Connections' },
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
    ],
    techStackList: [
      'Node.js WebSocket Server',
      'Redis Pub/Sub',
      'React client app',
      'PostgreSQL message store',
      'Nginx load balancer',
    ],
    featuresList: [
      {
        title: 'Horizontal Scaling Design',
        desc: 'Documented approach for scaling WebSocket servers behind a shared Redis pub/sub bus.',
      },
      {
        title: 'Message Persistence Layer',
        desc: 'Async write-through pattern for storing chat history without blocking the real-time path.',
      },
    ],
    views: 178,
  },
  {
    id: 'microservices-ecommerce',
    title: 'Microservices E-Commerce',
    description: {
      US: 'A backend architecture blueprint for a microservices-based e-commerce platform with event-driven design.',
      ID: 'Event-driven design ke sath microservices-based e-commerce platform ke liye backend architecture blueprint.',
    },
    introduction: {
      US: 'A comprehensive HLD document covering service decomposition, API gateway patterns, Kafka event streams, and distributed transaction management for a production-grade e-commerce backend.',
      ID: 'Production-grade e-commerce backend ke liye service decomposition, API gateway patterns, Kafka event streams, aur distributed transaction management cover karne wala HLD document.',
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Backend',
    techStack: ['Node.js', 'TypeScript', 'Prisma'],
    stats: [
      { emoji: '🏗️', value: 8, label: 'Services' },
      { emoji: '📨', value: 'Kafka', label: 'Event Bus' },
      { emoji: '🛡️', value: 'JWT', label: 'Auth Layer' },
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
    ],
    techStackList: [
      'API Gateway (Kong)',
      'Order Service (Node.js)',
      'Product Service (Go)',
      'Kafka event streams',
      'PostgreSQL + Redis cache',
      'Docker Compose orchestration',
    ],
    featuresList: [
      {
        title: 'Event-Driven Architecture',
        desc: 'Fully decoupled services communicating through Kafka topics with guaranteed delivery.',
      },
      {
        title: 'Distributed Transaction (SAGA)',
        desc: 'Choreography-based SAGA pattern for handling multi-step checkout flows without a central coordinator.',
      },
    ],
    views: 256,
  },
];

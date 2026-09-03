// ─────────────────────────────────────────────────────────────────
// data/projects.ts
// Single source of truth for all portfolio project data.
// To add a new project: append a new object here.
// The UI, filters, and cards update automatically.
// ─────────────────────────────────────────────────────────────────

import { Project } from '../types/project';

import portfolioImg from '../../../../assets/Project/Web/Portfolio.png';
import goalManagementImg from '../../../../assets/Project/Web/GoalManagement.png';
import landingPageImg from '../../../../assets/Project/Web/LandingPage.png';
import donateWebImg from '../../../../assets/Project/Web/DonateWeb.png';
import resumeCheckerImg from '../../../../assets/Project/Web/ResumeChecker.png';
import auraGalleryImg from '../../../../assets/Project/App/AuraGallery.png';

export const projectsData: Project[] = [
  // ── Web+Mobile ─────────────────────────────────────────────────
  {
    id: 'satriabahari-my-id',
    title: 'Developer Portfolio',
    description: {
      US: 'Personal website & portfolio, built with React, Framer Motion, Tailwind CSS, and Supabase backend.',
      ID: 'Zaati website aur portfolio, React, Framer Motion, Tailwind CSS aur Supabase ke sath banaya gaya.',
    },
    introduction: {
      US: 'A personal developer portfolio and interactive dashboard built with React and TypeScript, aggregating live stats and project showcases stored with Supabase PostgreSQL.',
      ID: 'React aur TypeScript se bana developer portfolio aur dashboard, jo coding stats ko live fetch karta hai.',
    },
    image: portfolioImg,
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['React', 'Framer Motion', 'TailwindCSS', 'Supabase'],
    stats: [
      { emoji: '⭐', value: 48, label: 'GitHub Stars' },
      { emoji: '🔀', value: 120, label: 'Commits' },
      { emoji: '👁️', value: 685, label: 'Views' },
      { emoji: '🌐', value: 3, label: 'Globe Reacts' },
      { emoji: '😃', value: 2, label: 'Happy Reacts' },
    ],
    techStackList: [
      'React 18',
      'Framer Motion',
      'Tailwind CSS v3',
      'Supabase PostgreSQL',
      'TypeScript',
      'Zustand',
    ],
    featuresList: [
      {
        title: 'Interactive Motion UI',
        desc: 'Smooth page transitions and micro-interactions powered by Framer Motion.',
      },
      {
        title: 'Project Showcase',
        desc: 'Dynamic project storage and stats tracking powered by Supabase.',
      },
    ],
    githubUrl: 'https://github.com/Developer359/portfolio',
    demoUrl: 'https://satriabahari.my.id',
    views: 685,
  },
  {
    id: 'goal-management',
    title: 'Goal Management',
    description: {
      US: 'Goal Management is a platform built with Next.js and Tailwind CSS to track fitness goals, workouts, and progress.',
      ID: 'Goal Management Next.js aur Tailwind CSS se bana platform hai jo workouts track karne mein madad karta hai.',
    },
    introduction: {
      US: 'A modern fitness planner and goal dashboard allowing users to set daily milestones, monitor calorie targets, and track long-term progress with real-time feedback.',
      ID: 'Sleek dark-themed goal manager aur fitness planner jo rooz ka targets set karne aur stats dekhne ki ijazat deta hai.',
    },
    image: goalManagementImg,
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['Next.js', 'TailwindCSS'],
    stats: [
      { emoji: '⭐', value: 22, label: 'GitHub Stars' },
      { emoji: '🔀', value: 76, label: 'Commits' },
      { emoji: '👁️', value: 280, label: 'Views' },
    ],
    techStackList: [
      'Next.js 14 (App Router)',
      'Tailwind CSS v3',
      'TypeScript',
      'Recharts visual graphs',
    ],
    featuresList: [
      {
        title: 'Workout & Goal Log',
        desc: 'Custom exercise matrix with target set metrics and milestone counters.',
      },
      {
        title: 'Progress Analytics',
        desc: 'Visual data curves tracking weekly completion rates and daily streaks.',
      },
    ],
    githubUrl: 'https://github.com/Developer359/goal-management',
    views: 280,
  },
  {
    id: 'donate-web-app',
    title: 'Donate Web Platform',
    description: {
      US: 'A secure crowdfunding and donation platform built using Next.js, Tailwind CSS, and Framer Motion.',
      ID: 'Next.js, Tailwind CSS aur Framer Motion se bana secure charity donation platform.',
    },
    introduction: {
      US: 'A responsive donation web application featuring interactive cause campaigns, smooth UI animations, and transparent goal tracking.',
      ID: 'Interactive campaign tracking aur smooth animations ke sath aik comprehensive donation platform.',
    },
    image: donateWebImg,
    isFeatured: false,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    stats: [
      { emoji: '💖', value: '500+', label: 'Donors' },
      { emoji: '🚀', value: 12, label: 'Campaigns' },
      { emoji: '👁️', value: 340, label: 'Views' },
    ],
    techStackList: [
      'Next.js 14',
      'Tailwind CSS v3',
      'Framer Motion',
      'TypeScript',
    ],
    featuresList: [
      {
        title: 'Animated Campaign Cards',
        desc: 'Staggered card entrances and progress bars built with Framer Motion.',
      },
      {
        title: 'Seamless Checkout Flow',
        desc: 'Fast, mobile-optimized payment modal interface for instant donations.',
      },
    ],
    views: 340,
  },
  {
    id: 'resume-checker',
    title: 'AI Resume Checker',
    description: {
      US: 'An AI-powered web app built with React and Tailwind CSS that analyzes resumes and provides actionable feedback.',
      ID: 'React aur Tailwind CSS se bana AI tool jo resumes ko analyze karta hai aur job seekers ko feedback deta hai.',
    },
    introduction: {
      US: 'An intelligent web application that uses artificial intelligence to score resumes against target job descriptions and suggest immediate ATS improvements.',
      ID: 'AI-driven web application jo resumes ko job descriptions ke mutabiq score aur evaluate karta hai.',
    },
    image: resumeCheckerImg,
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['React', 'TailwindCSS', 'AI'],
    stats: [
      { emoji: '📄', value: '1K+', label: 'Resumes Checked' },
      { emoji: '✨', value: 95, label: 'Accuracy Score' },
      { emoji: '👁️', value: 520, label: 'Views' },
    ],
    techStackList: [
      'React 18',
      'Tailwind CSS v3',
      'AI / LLM Integration',
      'TypeScript',
    ],
    featuresList: [
      {
        title: 'ATS AI Scoring',
        desc: 'Simulates Applicant Tracking Systems using AI algorithms to compute keyword match scores.',
      },
      {
        title: 'Real-time Analysis',
        desc: 'Instant visual breakdown of weak bullet points, action verbs, and formatting suggestions.',
      },
    ],
    views: 520,
  },
  {
    id: 'aura-gallery',
    title: 'Aura Gallery',
    description: {
      US: 'Privacy first AI image organizer.',
      ID: 'Privacy first AI image organizer.',
    },
    introduction: {
      US: 'Privacy first AI image organizer designed to keep your data local and secure.',
      ID: 'Privacy first AI image organizer jo apka data local aur secure rakhta hai.',
    },
    image: auraGalleryImg,
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Mobile',
    techStack: ['Google Stitch'],
    stats: [
      { emoji: '👁️', value: 420, label: 'Views' },
    ],
    techStackList: ['Google Stitch'],
    featuresList: [
      {
        title: 'Privacy First',
        desc: 'AI image organizer that does not do any other thing but organize securely.',
      },
    ],
    githubUrl: 'https://github.com/Developer359/aura-gallery',
    views: 420,
  },

  // ── Design ─────────────────────────────────────────────────────
  {
    id: 'digital-business-landing',
    title: 'Digital Business Landing',
    description: {
      US: 'A fully animated corporate landing page built with Next.js, Tailwind CSS, and Framer Motion.',
      ID: 'Next.js, Tailwind CSS aur Framer Motion ke sath bani sleek corporate landing page.',
    },
    introduction: {
      US: 'A stylized landing page design showcasing digital analytics products with smooth staggered micro-animations and clean UI blocks.',
      ID: 'Sleek corporate presentation landing page aur digital analytics products dikhane ke liye design.',
    },
    image: landingPageImg,
    isFeatured: true,
    primaryType: 'Web+Mobile',
    category: 'Web',
    techStack: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    stats: [
      { emoji: '🎨', value: 6, label: 'Design Screens' },
      { emoji: '✨', value: 18, label: 'Animations' },
      { emoji: '👁️', value: 145, label: 'Views' },
    ],
    techStackList: [
      'Next.js 14',
      'Tailwind CSS v3',
      'Framer Motion',
      'Lucide React',
    ],
    featuresList: [
      {
        title: 'Staggered Entrance Motion',
        desc: 'Polished scroll-triggered animations highlighting conversion blocks.',
      },
      {
        title: 'Responsive Grid Layout',
        desc: 'Pixel-perfect UI layout supporting ultra-wide to mobile screen sizes.',
      },
    ],
    views: 145,
  },
  {
    id: 'aura-gallery-design',
    title: 'Aura Gallery',
    description: {
      US: 'Privacy first AI image organizer.',
      ID: 'Privacy first AI image organizer.',
    },
    introduction: {
      US: 'Privacy first AI image organizer design and UI layout.',
      ID: 'Privacy first AI image organizer design aur UI layout.',
    },
    image: auraGalleryImg,
    isFeatured: false,
    primaryType: 'Design',
    category: 'Mobile',
    techStack: ['Google Stitch'],
    stats: [
      { emoji: '👁️', value: 203, label: 'Views' },
    ],
    techStackList: ['Google Stitch'],
    featuresList: [
      {
        title: 'Privacy First',
        desc: 'AI image organizer that does not do any other thing but organize securely.',
      },
    ],
    views: 203,
  },

  // ── HLD ────────────────────────────────────────────────────────
  {
    id: 'inventory-smart',
    title: 'Inventory Smart Architecture',
    description: {
      US: 'High-level system design for an advanced enterprise inventory management platform.',
      ID: 'Advanced inventory management system ka High-Level System Architecture.',
    },
    introduction: {
      US: 'An enterprise system architecture designed to coordinate massive supplier logs, barcode scans, and automated restock workflows.',
      ID: 'Enterprise warehousing system jo supplier logs aur real-time alerts ko manage karta hai.',
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Projects',
    techStack: ['Laravel', 'MySQL', 'System Design'],
    stats: [
      { emoji: '📦', value: '10K+', label: 'Items Tracked' },
      { emoji: '👁️', value: 210, label: 'Views' },
    ],
    techStackList: ['Laravel', 'MySQL', 'System Architecture', 'Redis Cache'],
    featuresList: [
      {
        title: 'Real-time Low Stock System',
        desc: 'Background queue processor sending alerts when stock levels fall.',
      },
    ],
    views: 210,
  },
  {
    id: 'cloud-chat-app',
    title: 'Cloud Chat Architecture',
    description: {
      US: 'High-Level Design (HLD) blueprint for a scalable real-time chat application with WebSocket clusters.',
      ID: 'WebSocket clusters ke sath scalable real-time chat app ka HLD architecture.',
    },
    introduction: {
      US: 'A system architecture covering horizontal scaling, Redis Pub/Sub event broadcasting, and persistent message store patterns.',
      ID: 'Distributed chat system ka high-level design document aur reference implementation.',
    },
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop',
    isFeatured: false,
    primaryType: 'HLD',
    category: 'Apps',
    techStack: ['Node.js', 'WebSocket', 'Redis'],
    stats: [
      { emoji: '⚡', value: '<50ms', label: 'Latency' },
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
    ],
    techStackList: ['Node.js', 'Redis Pub/Sub', 'WebSocket Server', 'PostgreSQL'],
    featuresList: [
      {
        title: 'Horizontal Scaling Design',
        desc: 'Scaling WebSocket connections behind a shared Redis Pub/Sub layer.',
      },
    ],
    views: 178,
  },
  {
    id: 'microservices-ecommerce',
    title: 'Microservices E-Commerce HLD',
    description: {
      US: 'System architecture design for an event-driven microservices e-commerce platform.',
      ID: 'Event-driven microservices e-commerce platform ke liye system design blueprint.',
    },
    introduction: {
      US: 'Comprehensive HLD covering API gateway routing, Kafka event streams, and SAGA distributed transaction management.',
      ID: 'Service decomposition aur Kafka event streams cover karne wala architecture document.',
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Backend',
    techStack: ['Node.js', 'Kafka', 'System Design'],
    stats: [
      { emoji: '🏗️', value: 8, label: 'Services' },
      { emoji: '📨', value: 'Kafka', label: 'Event Bus' },
    ],
    techStackList: ['API Gateway (Kong)', 'Kafka Events', 'PostgreSQL', 'Docker'],
    featuresList: [
      {
        title: 'Event-Driven SAGA Flow',
        desc: 'Decoupled services using Kafka topics for eventual consistency.',
      },
    ],
    views: 256,
  },
];
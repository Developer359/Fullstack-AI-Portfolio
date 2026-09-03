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

import portfolioHldImg from '../../../../assets/Project/Hld/PortfolioHld.png';
import webAutomationHldImg from '../../../../assets/Project/Hld/WebAutomationHld.png';
import whatsappHldImg from '../../../../assets/Project/Hld/Whattsapphld.png';
import youtubeHldImg from '../../../../assets/Project/Hld/YoutbeHld.png';

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
    id: 'portfolio-hld',
    title: 'Portfolio System Design',
    description: {
      US: 'High-level system design for a full-stack developer portfolio with dashboard, creation page, and real-time chat backed by Supabase.',
      ID: 'Full-stack developer portfolio ka high-level system design jis mein dashboard, creation page aur Supabase chat shamil hai.',
    },
    introduction: {
      US: 'System architecture diagram covering user flows across Dashboard, Creation Page, and Chat — each persisted via Supabase. Includes a YouTube stat pipeline that fetches video views, channel data, and thumbnails every 12 hours via API keys and stores results back in Supabase.',
      ID: 'Dashboard, Creation Page aur Chat ke user flows ka system design, Supabase ke sath, aur YouTube stats pipeline jo har 12 ghante API se data fetch karta hai.',
    },
    image: portfolioHldImg,
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Projects',
    techStack: ['Eraser.io'],
    stats: [
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
      { emoji: '👁️', value: 210, label: 'Views' },
    ],
    techStackList: ['Eraser.io'],
    featuresList: [
      {
        title: 'Multi-Page User Flow',
        desc: 'User flows across Dashboard, Creation Page, and Chatting Page all connected to Supabase.',
      },
      {
        title: 'YouTube Stats Pipeline',
        desc: 'Scheduled 12-hour API pipeline that fetches video stats and thumbnails into Supabase.',
      },
    ],
    views: 210,
  },
  {
    id: 'youtube-automation-hld',
    title: 'YouTube Automation HLD',
    description: {
      US: 'System design for a vision-based browser automation engine that interacts with YouTube via surface automation and coordinate guessing.',
      ID: 'Vision-based browser automation engine ka system design jo surface automation aur coordinate guessing ke zariye YouTube ke sath interact karta hai.',
    },
    introduction: {
      US: 'Architecture for an AI-driven automation loop: checks local storage, triggers Surface Automation, performs Vision Check, guesses UI coordinates, retries on failure via DOM scanning, and loops back. On coordinate guess failure (2x), falls back to DOM scanning to re-locate elements.',
      ID: 'AI-driven automation loop ka architecture jo storage check se start hoke vision check, coordinate guess, DOM scan aur retry loop perform karta hai.',
    },
    image: webAutomationHldImg,
    isFeatured: false,
    primaryType: 'HLD',
    category: 'Apps',
    techStack: ['Eraser.io'],
    stats: [
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
      { emoji: '👁️', value: 178, label: 'Views' },
    ],
    techStackList: ['Eraser.io'],
    featuresList: [
      {
        title: 'Vision-Based Automation',
        desc: 'Surface automation driven by vision checks and coordinate guessing with retry logic.',
      },
      {
        title: 'DOM Fallback Scanning',
        desc: 'Falls back to DOM scanning when coordinate guess fails twice to re-locate UI elements.',
      },
    ],
    views: 178,
  },
  {
    id: 'whatsapp-system-design',
    title: 'WhatsApp System Design',
    description: {
      US: 'End-to-end encrypted messaging system design covering client-side encryption, load balancing, presence detection, and offline push notifications.',
      ID: 'End-to-end encrypted messaging system design jis mein client-side encryption, load balancing, presence detection aur offline push notifications shamil hain.',
    },
    introduction: {
      US: 'Full system design of WhatsApp-style messaging: Client encrypts messages, splits them, stores in SQLite, routes through Load Balancer to Chat Gateway. Server side handles Auth, Presence Service (online/offline), Redis for offline queuing, and Push Notifications. Receiver side decrypts and assembles messages.',
      ID: 'WhatsApp-style messaging ka complete system design: encryption, load balancer, chat gateway, presence service, Redis aur offline push notifications.',
    },
    image: whatsappHldImg,
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Backend',
    techStack: ['Eraser.io'],
    stats: [
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
      { emoji: '👁️', value: 256, label: 'Views' },
    ],
    techStackList: ['Eraser.io'],
    featuresList: [
      {
        title: 'E2E Encryption Flow',
        desc: 'Client-side message encryption, division, and SQLite storage before routing through Load Balancer.',
      },
      {
        title: 'Presence & Offline Delivery',
        desc: 'Presence Service detects online/offline state; Redis queues push notifications for offline users.',
      },
    ],
    views: 256,
  },
  {
    id: 'youtube-system-design',
    title: 'YouTube System Design',
    description: {
      US: 'Comprehensive high-level architecture of a YouTube-scale video upload, processing, storage, and CDN delivery system.',
      ID: 'YouTube-scale video upload, processing, storage aur CDN delivery system ka comprehensive high-level architecture.',
    },
    introduction: {
      US: 'Full system design spanning: API Gateway + Load Balancer ingestion, User Account System (IAM, quotas, analytics), Upload System (resumable chunked upload, real-time status), Storage & Assets S3 (raw bucket, H.264/DASH/HLS transcoding, adaptive bitrate), MetaData System, Video Processing queue, Redis caching, CDN & Playback edge nodes, and analytics dashboard notifications.',
      ID: 'Complete YouTube system design: API Gateway, upload pipeline, S3 storage, video transcoding, metadata, CDN playback aur analytics notifications.',
    },
    image: youtubeHldImg,
    isFeatured: true,
    primaryType: 'HLD',
    category: 'Projects',
    techStack: ['Eraser.io'],
    stats: [
      { emoji: '📐', value: 'HLD', label: 'Diagram' },
      { emoji: '👁️', value: 320, label: 'Views' },
    ],
    techStackList: ['Eraser.io'],
    featuresList: [
      {
        title: 'Video Upload & Transcoding Pipeline',
        desc: 'Resumable chunked upload into S3, transcoded to H.264/DASH/HLS with adaptive bitrate streams.',
      },
      {
        title: 'CDN & Playback Delivery',
        desc: 'Edge cache nodes serve video streams to user players with analytics logging.',
      },
    ],
    views: 320,
  },
];
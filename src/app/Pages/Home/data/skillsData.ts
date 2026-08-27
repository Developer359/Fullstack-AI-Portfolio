export interface Skill {
  name: string;
  category: 'Main' | 'Frontend' | 'Backend' | 'Design' | 'Database' | 'Tools';
  color: string;
  textColor: string;
  iconName: string;
}

export const skillsData: Skill[] = [
  // ================= 1. FRONTEND (First in "All" Category) =================
  { name: "HTML", category: "Frontend", color: "bg-[#e34f26]/10 border-[#e34f26]/30", textColor: "text-[#c2410c] dark:text-[#fb923c]", iconName: "FileCode" },
  { name: "CSS", category: "Frontend", color: "bg-[#1572b6]/10 border-[#1572b6]/30", textColor: "text-[#1d4ed8] dark:text-[#60a5fa]", iconName: "Paintbrush" },
  { name: "JavaScript", category: "Frontend", color: "bg-[#f7df1e]/10 border-[#f7df1e]/30", textColor: "text-[#a16207] dark:text-[#fde047]", iconName: "FileJson" },
  { name: "TypeScript", category: "Frontend", color: "bg-[#3178c6]/10 border-[#3178c6]/30", textColor: "text-[#3178c6] dark:text-[#60a5fa]", iconName: "Code2" },
  { name: "React.js", category: "Frontend", color: "bg-[#61dafb]/10 border-[#61dafb]/30", textColor: "text-[#0c8ba8] dark:text-[#61dafb]", iconName: "Atom" },
  { name: "Next.js", category: "Frontend", color: "bg-[#171717]/5 dark:bg-[#ffffff]/10 border-neutral-200 dark:border-neutral-700", textColor: "text-neutral-800 dark:text-neutral-100", iconName: "Triangle" },
  { name: "TailwindCSS", category: "Frontend", color: "bg-[#38bdf8]/10 border-[#38bdf8]/30", textColor: "text-[#0369a1] dark:text-[#38bdf8]", iconName: "Wind" },
  { name: "Bootstrap", category: "Frontend", color: "bg-[#7952b3]/10 border-[#7952b3]/30", textColor: "text-[#6d28d9] dark:text-[#a855f7]", iconName: "Hexagon" },
  { name: "Vite", category: "Frontend", color: "bg-[#646cff]/10 border-[#646cff]/30", textColor: "text-[#4f46e5] dark:text-[#818cf8]", iconName: "Zap" },
  { name: "Astro", category: "Frontend", color: "bg-[#ff5a03]/10 border-[#ff5a03]/30", textColor: "text-[#c2410c] dark:text-[#ff7e33]", iconName: "Rocket" },
  { name: "React Native", category: "Frontend", color: "bg-[#61dafb]/10 border-[#61dafb]/30", textColor: "text-[#0c8ba8] dark:text-[#61dafb]", iconName: "Smartphone" },
  { name: "Android SDK", category: "Frontend", color: "bg-[#3ddc84]/10 border-[#3ddc84]/30", textColor: "text-[#166534] dark:text-[#3ddc84]", iconName: "AppWindow" },
  { name: "Shadcn UI", category: "Frontend", color: "bg-neutral-200/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700", textColor: "text-neutral-900 dark:text-neutral-100", iconName: "Component" },
  { name: "Framer Motion", category: "Frontend", color: "bg-[#0055ff]/10 border-[#0055ff]/30", textColor: "text-[#1d4ed8] dark:text-[#60a5fa]", iconName: "Framer" },
  { name: "Redux", category: "Frontend", color: "bg-[#764abc]/10 border-[#764abc]/30", textColor: "text-[#6d28d9] dark:text-[#a855f7]", iconName: "Database" },
  { name: "Frontend Architecture", category: "Frontend", color: "bg-[#14b8a6]/10 border-[#14b8a6]/30", textColor: "text-[#0f766e] dark:text-[#5eead4]", iconName: "LayoutTemplate" },

  // ================= 2. BACKEND =================
  { name: "Node.js", category: "Backend", color: "bg-[#339933]/10 border-[#339933]/30", textColor: "text-[#166534] dark:text-[#4ade80]", iconName: "Hexagon" },
  { name: "Express.js", category: "Backend", color: "bg-neutral-200/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700", textColor: "text-neutral-900 dark:text-neutral-100", iconName: "Server" },
  { name: "NextAuth.js", category: "Backend", color: "bg-[#000000]/5 dark:bg-[#ffffff]/10 border-neutral-300 dark:border-neutral-700", textColor: "text-neutral-900 dark:text-neutral-100", iconName: "ShieldCheck" },
  { name: "Axios", category: "Backend", color: "bg-[#5a29e4]/10 border-[#5a29e4]/30", textColor: "text-[#4338ca] dark:text-[#818cf8]", iconName: "Link" },
  { name: "Zod", category: "Backend", color: "bg-[#3e67b1]/10 border-[#3e67b1]/30", textColor: "text-[#1d4ed8] dark:text-[#60a5fa]", iconName: "Gem" },
  { name: "Backend Architecture", category: "Backend", color: "bg-[#8b5cf6]/10 border-[#8b5cf6]/30", textColor: "text-[#6d28d9] dark:text-[#a855f7]", iconName: "Network" },

  // ================= 3. DESIGN =================
  { name: "System Design", category: "Design", color: "bg-[#0ea5e9]/10 border-[#0ea5e9]/30", textColor: "text-[#0369a1] dark:text-[#38bdf8]", iconName: "Workflow" },
  { name: "HLD", category: "Design", color: "bg-[#f59e0b]/10 border-[#f59e0b]/30", textColor: "text-[#b45309] dark:text-[#fbbf24]", iconName: "Share2" },
  { name: "UI Design", category: "Design", color: "bg-[#ec4899]/10 border-[#ec4899]/30", textColor: "text-[#be185d] dark:text-[#f472b6]", iconName: "Figma" },
  { name: "Prompt Engineering", category: "Design", color: "bg-[#10b981]/10 border-[#10b981]/30", textColor: "text-[#047857] dark:text-[#34d399]", iconName: "TerminalSquare" },
  { name: "DB Design", category: "Design", color: "bg-[#6366f1]/10 border-[#6366f1]/30", textColor: "text-[#4338ca] dark:text-[#818cf8]", iconName: "DatabaseZap" },
  { name: "API Design", category: "Design", color: "bg-[#f43f5e]/10 border-[#f43f5e]/30", textColor: "text-[#be123c] dark:text-[#fb7185]", iconName: "Webhook" },

  // ================= 4. DATABASE =================
  { name: "MongoDB", category: "Database", color: "bg-[#47a248]/10 border-[#47a248]/30", textColor: "text-[#166534] dark:text-[#4ade80]", iconName: "Leaf" },
  { name: "PostgreSQL", category: "Database", color: "bg-[#336791]/10 border-[#336791]/30", textColor: "text-[#1d4ed8] dark:text-[#60a5fa]", iconName: "Database" },
  { name: "MySQL", category: "Database", color: "bg-[#4479a1]/10 border-[#4479a1]/30", textColor: "text-[#0369a1] dark:text-[#38bdf8]", iconName: "DatabaseBackup" },
  { name: "Firebase", category: "Database", color: "bg-[#ffca28]/10 border-[#ffca28]/30", textColor: "text-[#b45309] dark:text-[#fde047]", iconName: "Flame" },
  { name: "Supabase", category: "Database", color: "bg-[#3ecf8e]/10 border-[#3ecf8e]/30", textColor: "text-[#047857] dark:text-[#34d399]", iconName: "Droplet" },
  { name: "Prisma", category: "Database", color: "bg-neutral-200/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700", textColor: "text-neutral-900 dark:text-neutral-100", iconName: "Triangle" },

  // ================= 5. TOOLS =================
  { name: "Git", category: "Tools", color: "bg-[#f14e32]/10 border-[#f14e32]/30", textColor: "text-[#c2410c] dark:text-[#fb923c]", iconName: "GitBranch" },
  { name: "Github", category: "Tools", color: "bg-neutral-200/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700", textColor: "text-neutral-900 dark:text-neutral-100", iconName: "Github" },
  { name: "Docker", category: "Tools", color: "bg-[#2496ed]/10 border-[#2496ed]/30", textColor: "text-[#1d4ed8] dark:text-[#60a5fa]", iconName: "Container" },
  { name: "Cursor", category: "Tools", color: "bg-neutral-200/50 dark:bg-[#ffffff]/10 border-neutral-300 dark:border-neutral-700", textColor: "text-neutral-900 dark:text-neutral-100", iconName: "MousePointer2" },
  { name: "Google AI Studio", category: "Tools", color: "bg-[#4285f4]/10 border-[#4285f4]/30", textColor: "text-[#1d4ed8] dark:text-[#60a5fa]", iconName: "Sparkles" },
  { name: "Google Stitch", category: "Tools", color: "bg-[#ea4335]/10 border-[#ea4335]/30", textColor: "text-[#b91c1c] dark:text-[#f87171]", iconName: "Blocks" },
  { name: "Antigravity", category: "Tools", color: "bg-[#8b5cf6]/10 border-[#8b5cf6]/30", textColor: "text-[#6d28d9] dark:text-[#a855f7]", iconName: "Rocket" },
  { name: "Npm", category: "Tools", color: "bg-[#cb3837]/10 border-[#cb3837]/30", textColor: "text-[#be123c] dark:text-[#fb7185]", iconName: "Package" },

  // ================= 6. MAIN (Specific highlights, also present above) =================
  { name: "Next.js", category: "Main", color: "bg-[#171717]/5 dark:bg-[#ffffff]/10 border-neutral-200 dark:border-neutral-700", textColor: "text-neutral-800 dark:text-neutral-100", iconName: "Triangle" },
  { name: "System Design", category: "Main", color: "bg-[#0ea5e9]/10 border-[#0ea5e9]/30", textColor: "text-[#0369a1] dark:text-[#38bdf8]", iconName: "Workflow" },
  { name: "UI Design", category: "Main", color: "bg-[#ec4899]/10 border-[#ec4899]/30", textColor: "text-[#be185d] dark:text-[#f472b6]", iconName: "Figma" },
  { name: "Supabase", category: "Main", color: "bg-[#3ecf8e]/10 border-[#3ecf8e]/30", textColor: "text-[#047857] dark:text-[#34d399]", iconName: "Droplet" }
];
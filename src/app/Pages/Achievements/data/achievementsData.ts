import corvitCert from '/src/assets/Certificate/Corvit.jpg';

export interface Achievement {
  id: string;
  credentialId: string;
  title: Record<'US' | 'ID', string>;
  issuer: string;
  type: string; 
  category: string; 
  issuedDate: Record<'US' | 'ID', string>; 
  certificateUrl: string;
  imageUrl?: string; 
  mockStyle: {
    themeColor: string; 
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
    credentialId: "ARSWIFT-INT-2026",
    title: {
      US: "Full-Stack Developer Internship",
      ID: "Full-Stack Developer Internship"
    },
    issuer: "Arswift Technologies",
    type: "Internship",
    category: "Full Stack",
    issuedDate: {
      US: "ISSUED ON MAY 2026",
      ID: "Jari Kiya Gaya May 2026"
    },
    certificateUrl: "#",
    mockStyle: {
      themeColor: "#15803d",
      gradientFrom: "from-emerald-500/10",
      gradientTo: "to-emerald-100/30",
      logoType: "parto",
      layoutPattern: "leaf"
    }
  },
  {
    id: "ach-2",
    credentialId: "CORVIT-FS-2025",
    title: {
      US: "Full-Stack Web Development Course",
      ID: "Full-Stack Web Development Course"
    },
    issuer: "Corvit Systems",
    type: "Course",
    category: "Full Stack",
    issuedDate: {
      US: "ISSUED ON DEC 20, 2025",
      ID: "Jari Kiya Gaya 20 Dec 2025"
    },
    certificateUrl: "#",
    imageUrl: corvitCert,
    mockStyle: {
      themeColor: "#0252e3", 
      gradientFrom: "from-blue-600/10",
      gradientTo: "to-blue-100/25",
      logoType: "bwa",
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
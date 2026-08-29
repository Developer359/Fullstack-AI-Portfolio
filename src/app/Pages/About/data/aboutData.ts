import ArswiftLogo from '../../../../assets/images/Arswift.png';
import CorvitLogo from '../../../../assets/images/Corvit.png';
import VuLogo from '../../../../assets/images/Vu.jpg';
import PunjabCollegeLogo from '../../../../assets/images/Punjabcollge.png';

export const aboutTranslations: Record<string, any> = {
  US: {
    title: 'About Me',
    subtitle: 'A brief look into my journey and passion for building technology.',
    bio1: 'I\'m M. Subhan, a Faisalabad-based Full-Stack AI Product Engineer and tech content creator. I specialize in building highly scalable web and mobile applications using modern tech stacks like Next.js, TypeScript, and Native Android (React Native), while continuously advancing my expertise in AI engineering to build smarter digital ecosystems.',
    bio2: 'My core focus lies at the intersection of robust full-stack architecture and intelligent automation. I don\'t just write code that works; I design maintainable, clean, and production-ready software systems engineered to solve real-world problems and adapt to emerging AI capabilities.',
    bio3: 'I combine technical execution with proactive communication, critical thinking, and leadership. Driven by growth and continuous learning, I excel in collaborative environments where I can build intelligent products that deliver genuine value and impact.',
    regards: 'Best regards,',
    careerTitle: 'Career',
    careerSubtitle: 'My professional journey.',
    educationTitle: 'Education',
    educationSubtitle: 'My academic journey.',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
  },
  ID: {
    title: 'Mere bare mein',
    subtitle: 'Mere safar aur technology banane ke shauq par ek mukhtasar nazar.',
    bio1: 'Main Muhammad Subhan hoon, Faisalabad mein muqeem ek Full-Stack AI Product Engineer aur tech content creator. Main Next.js, TypeScript, aur Native Android jaisi jadeed technologies ka istemal karte hue behtareen web aur mobile applications banane mein maharat rakhta hoon, aur sath hi smart digital ecosystem ke liye AI engineering mein apni maharat ko bhi barha raha hoon.',
    bio2: 'Meri bunyadi tawajah mazboot full-stack architecture aur zaheen automation ke imtizaj par hai. Main sirf kaam karne wala code nahi likhta, balke main haqeeqi duniya ke masail hal karne aur ubharti hui AI salahiyaton ko apnane ke liye saaf aur production-ready software systems design karta hoon.',
    bio3: 'Main takneeki maharat ko muassar muwaslat, tanqeedi soch, aur qiyadat ke sath jorta hoon. Musalsal seekhne ke jazbe se sarshar, main team ke sath mil kar kaam karne mein behtareen hoon jahan main aise zaheen products bana sakun jo haqeeqi qadar aur asar faraham karein.',
    regards: 'Naik tamannaon ke sath,',
    careerTitle: 'Career',
    careerSubtitle: 'Mera peshawarana safar.',
    educationTitle: 'Taleem',
    educationSubtitle: 'Mera taleemi safar.',
    showDetails: 'Tafseelat dikhayen',
    hideDetails: 'Tafseelat chupayen',
  },
};

export const careerData = [
  {
    id: 'arswift',
    company: 'Arswift Technologies',
    logo: ArswiftLogo,
    countryCode: 'PK',
    role: {
      US: 'Software Engineering Intern',
      ID: 'Software Engineering Intern',
    },
    location: {
      US: 'Faisalabad, Pakistan',
    },
    duration: {
      US: 'Jun 2026 - Apr 2026',
      ID: 'June 2026 - April 2026',
    },
    meta: {
      US: ['3 Mos', 'Internship', 'Onsite/Hybrid'],
      ID: ['3 Mahinay', 'Internship', 'Onsite/Hybrid'],
    },
    bullets: {
      US: [
        'Developed scalable web and mobile user interfaces using React, Next.js, and React Native.',
        'Engineered responsive UI components integrated with backend APIs and state management pipelines.',
        'Collaborated with senior engineers to write clean, maintainable code following modern frontend architecture patterns.',
      ],
      ID: [
        'React, Next.js, aur React Native ka istemal karte hue scalable web aur mobile user interfaces tayyar kiye.',
        'Backend APIs aur state management ke sath marboot responsive UI ajza banaye.',
        'Jadeed frontend architecture patterns ke mutabiq saaf suthra code likhne ke liye senior engineers ke sath mil kar kaam kiya.',
      ],
    },
  },
  {
    id: 'corvit',
    company: 'Corvit Systems',
    logo: CorvitLogo,
    countryCode: 'PK',
    role: {
      US: 'Full-Stack Web Development Trainee',
      ID: 'Full-Stack Web Development Trainee',
    },
    location: {
      US: 'Faisalabad, Pakistan',
      ID: 'Faisalabad, Pakistan',
    },
    duration: {
      US: 'Sep 2025 - Dec 2025',
      ID: 'September 2025 - December 2025',
    },
    meta: {
      US: ['4 Mos', 'Training', 'Onsite'],
      ID: ['4 Mahinay', 'Training', 'Onsite'],
    },
    bullets: {
      US: [
        'Completed specialized training in modern Frontend Development (Sep 2025 - Nov 2025) covering React and Tailwind CSS.',
        'Mastered Backend Development fundamentals (Nov 2025 - Dec 2025) including Node.js, Express, and database integrations.',
        'Built full-stack application modules demonstrating end-to-end API integration and client-server communication.',
      ],
      ID: [
        'Jadeed frontend development (September 2025 - November 2025) mein khusoosi tarbiyat mukammal ki jis mein React aur Tailwind CSS shamil hain.',
        'Backend development ki bunyadi baaton (November 2025 - December 2025) mein maharat hasil ki jin mein Node.js, Express, aur database inzimam shamil hain.',
        'Client-server muwaslat aur end-to-end API inzimam ko zahir karne wale full-stack application modules banaye.',
      ],
    },
  },
];

export const educationData = [
  {
    id: 'vu',
    company: 'Virtual University Of Pakistan',
    logo: VuLogo,
    countryCode: '',
    role: {
      US: 'Bachelors of computer science',
      ID: 'Bachelors of computer science',
    },
    location: {
      US: '',
      ID: '',
    },
    duration: {
      US: '2024-2028',
      ID: '2024-2028',
    },
    meta: {
      US: [],
      ID: [],
    },
    bullets: {
      US: [],
      ID: [],
    },
  },
  {
    id: 'pgc',
    company: 'Punjab Group of colleges',
    logo: PunjabCollegeLogo,
    countryCode: '',
    role: {
      US: 'ICS',
      ID: 'ICS',
    },
    location: {
      US: '',
      ID: '',
    },
    duration: {
      US: '2022-2024',
      ID: '2022-2024',
    },
    meta: {
      US: [],
      ID: [],
    },
    bullets: {
      US: [],
      ID: [],
    },
  }
];
export interface HeroTranslations {
  title: string;
  location: string;
  bio1: string;
  bio2: string;
}

export const heroTranslations: Record<'US' | 'ID', HeroTranslations> = {
 US: { 
  title: "Hi, I'm M.Subhan", 
  location: "Based in Faisalabad, Pakistan • Onsite", 
  bio1: "A Full-Stack AI Product Engineer and content creator dedicated to building intelligent, high-impact digital solutions. I specialize in developing scalable web platforms and mobile apps, currently diving deep into AI engineering to integrate smart automation and machine learning into real-world applications.", 
  bio2: "My focus is on bridging the gap between robust software architecture and cutting-edge AI. I combine technical execution with clean coding practices and proactive leadership, ensuring every product is not just functional, but genuinely smart and user-centric." 
     },
 ID: { 
  title: "Salam, Main M.Subhan Hoon", 
  location: "Faisalabad, Pakistan se talluq hai • Onsite", 
  bio1: "Main ek Full-Stack AI Product Engineer aur coding content creator hoon jo smart aur high-impact digital solutions banane ke liye kaam karta hoon. Aaj kal main AI engineering seekh raha hoon taake modern web platforms aur mobile apps mein intelligent automation ko seamlessly integrate kar sakoon.", 
  bio2: "Mera focus aisi software architecture par hai jo robust ho aur AI capabilities ke mutabiq scale kar sake. Main technical execution ke sath sath real-world problem solving par yaqeen rakhta hoon, taake har product users ke liye waqai useful aur effective ho." 
}
};

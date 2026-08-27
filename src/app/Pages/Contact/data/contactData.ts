export interface SocialCard {
  id: string;
  title: Record<'US' | 'ID', string>;
  subtitle: Record<'US' | 'ID', string>;
  buttonText: Record<'US' | 'ID', string>;
  url: string;
  brandType: 'gmail' | 'instagram' | 'linkedin' | 'tiktok' | 'github';
  gradientClass: string;
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  socialTitle: string;
  formTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendButton: string;
  sendingButton: string;
  successMessage: string;
  errorMessage: string;
}

export const socialCardsData: SocialCard[] = [
  {
    id: "sc-gmail",
    title: {
      US: "Stay in Touch",
      ID: "Rabte Mein Rahein"
    },
    subtitle: {
      US: "Reach out via email for inquiries or collaborations.",
      ID: "Kisi bhi behes ya sawalat ke liye email ke zariye rabta karein."
    },
    buttonText: {
      US: "Go to Gmail",
      ID: "Gmail Kholein"
    },
    url: "mailto:m.subhan8661@gmail.com",
    brandType: "gmail",
    gradientClass: "bg-gradient-to-r from-[#990000] via-[#c00000] to-[#e61a1a]"
  },
  {
    id: "sc-instagram",
    title: {
      US: "Follow My Journey",
      ID: "Mera Safar Follow Karein"
    },
    subtitle: {
      US: "Follow my creative journey.",
      ID: "Mera creative safar follow karein."
    },
    buttonText: {
      US: "Go to Instagram",
      ID: "Instagram Kholein"
    },
    url: "https://instagram.com/satriabahari",
    brandType: "instagram",
    gradientClass: "bg-gradient-to-br from-[#8a3ab9] via-[#e95950] to-[#fccc63]"
  },
  {
    id: "sc-linkedin",
    title: {
      US: "Let's Connect",
      ID: "Aein Connect Karein"
    },
    subtitle: {
      US: "Connect with me professionally.",
      ID: "Sath kaam ya professional networking ke liye connect karein."
    },
    buttonText: {
      US: "Go to Linkedin",
      ID: "LinkedIn Kholein"
    },
    url: "https://linkedin.com/in/satria-bahari",
    brandType: "linkedin",
    gradientClass: "bg-gradient-to-br from-[#0a66c2] via-[#005c99] to-[#003d66]"
  },
  {
    id: "sc-tiktok",
    title: {
      US: "Join the Fun",
      ID: "Fun Mein Shamil Hoon"
    },
    subtitle: {
      US: "Watch engaging and fun content.",
      ID: "Mazedar aur dilchasp videos dekhein."
    },
    buttonText: {
      US: "Go to Tiktok",
      ID: "TikTok Kholein"
    },
    url: "https://tiktok.com/@satriabahari",
    brandType: "tiktok",
    gradientClass: "bg-gradient-to-br from-[#252528] via-[#151516] to-[#09090a]"
  },
  {
    id: "sc-github",
    title: {
      US: "Explore the Code",
      ID: "Code Explore Karein"
    },
    subtitle: {
      US: "Explore my open-source work.",
      ID: "Mera open-source kaam dekhein."
    },
    buttonText: {
      US: "Go to Github",
      ID: "GitHub Kholein"
    },
    url: "https://github.com/satriabahari",
    brandType: "github",
    gradientClass: "bg-gradient-to-br from-[#0c1222] via-[#111827] to-[#1e1b4b]"
  }
];

export const contactTranslations: Record<'US' | 'ID', ContactTranslations> = {
  US: {
    title: "Contact",
    subtitle: "Let's get in touch.",
    socialTitle: "Find me on social media",
    formTitle: "Or send me a message",
    nameLabel: "Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendButton: "Send Email",
    sendingButton: "Sending...",
    successMessage: "Message Sent! Thank you for reaching out.",
    errorMessage: "Please fill in all required fields."
  },
  ID: {
    title: "Rabta",
    subtitle: "Aein rabte mein rahein.",
    socialTitle: "Mujhe social media par talaash karein",
    formTitle: "Ya mujhe paigham bhejein",
    nameLabel: "Pura Naam",
    emailLabel: "Email Address",
    messageLabel: "Paigham",
    namePlaceholder: "Naam",
    emailPlaceholder: "Email",
    messagePlaceholder: "Paigham",
    sendButton: "Email Bhejein",
    sendingButton: "Bhej raha hai...",
    successMessage: "Paigham Bhej Diya Gaya! Rabta karne ka shukriya.",
    errorMessage: "Sare laazmi fields ko fill karein."
  }
};

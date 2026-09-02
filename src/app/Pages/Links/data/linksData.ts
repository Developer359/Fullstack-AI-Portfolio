export interface BioLink {
  title: string;
  url: string;
  desc: {
    US: string;
    ID: string;
  };
  iconName: 'Video' | 'Github' | 'Youtube' | 'Heart' | 'Linkedin';
}

export const bioLinksList: BioLink[] = [
  { 
    title: "GitHub Profile", 
    url: "https://github.com/Developer359", 
    desc: {
      US: "Open source repositories & full-stack code",
      ID: "Open source code aur repositories"
    }, 
    iconName: "Github" 
  },
  { 
    title: "LinkedIn Professional", 
    url: "https://www.linkedin.com/in/muhammad-subhan-05b895331/", 
    desc: {
      US: "Professional network & career journey",
      ID: "Professional network aur career details"
    }, 
    iconName: "Linkedin" 
  },
  { 
    title: "Personal Channel (TikTok)", 
    url: "https://tiktok.com", 
    desc: {
      US: "Short programming tips & tech setups",
      ID: "Chotay programming tips aur setup videos"
    }, 
    iconName: "Video"
  },
  { 
    title: "YouTube Coding Series", 
    url: "https://youtube.com", 
    desc: {
      US: "Long-form full-stack development tutorials",
      ID: "Full-stack development ke long tutorials"
    }, 
    iconName: "Youtube" 
  }
];
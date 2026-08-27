export interface BioLink {
  title: string;
  url: string;
  desc: {
    US: string;
    ID: string;
  };
  iconName: 'Video' | 'Github' | 'Youtube' | 'Heart';
}

export const bioLinksList: BioLink[] = [
  { 
    title: "Personal Channel (TikTok)", 
    url: "https://tiktok.com/@satriabahari", 
    desc: {
      US: "Short programming tips & setups",
      ID: "Tips & setup pemrograman video singkat"
    }, 
    iconName: "Video"
  },
  { 
    title: "Nusantara Team GitHub Core", 
    url: "https://github.com/satriabahari", 
    desc: {
      US: "Open source Android modules",
      ID: "Modul Android sumber terbuka"
    }, 
    iconName: "Github" 
  },
  { 
    title: "YouTube Coding Series", 
    url: "https://youtube.com", 
    desc: {
      US: "Long-form full-stack development tutorials",
      ID: "Tutorial pengembangan full-stack video panjang"
    }, 
    iconName: "Youtube" 
  },
  { 
    title: "Support My Stream (SocioBuzz)", 
    url: "https://sociobuzz.com", 
    desc: {
      US: "Help fund educational content!",
      ID: "Bantu membiayai konten pendidikan kustom!"
    }, 
    iconName: "Heart" 
  }
];

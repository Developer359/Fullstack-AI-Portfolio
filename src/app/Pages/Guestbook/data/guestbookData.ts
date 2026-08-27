export interface GuestbookReaction {
  emoji: string;
  count: number;
  userReacted?: boolean;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  avatarUrl?: string;
  avatarColor?: string;
  message: string;
  timestamp: string;
  isAuthor: boolean;
  reactions: GuestbookReaction[];
}

export interface GuestTranslation {
  title: string;
  subtitle: string;
  authNotice: string;
  googleSignIn: string;
  githubSignIn: string;
  inputPlaceholder: string;
  sendBtn: string;
  sendingBtn: string;
  signOutBtn: string;
  signedInAs: string;
  noMessages: string;
  systemRestoreNote: string;
}

export const initialGuestbookMessages: GuestbookMessage[] = [
  {
    id: "gmsg-1",
    name: "Satria Bahari",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop",
    isAuthor: true,
    message: "Halo guys, aku minta maaf buat yang udah pernah kirim pesan di Guestbook sebelumnya, soalnya data-datanya hilang semua dan sayangnya nggak bisa di-restore 😟. Aku belum tau pasti kenapa bisa hilang, entah karena kesalahan sistem atau human error, tapi ini bakal jadi pelajaran buat aku ke depanya. Tapi it's okay, fitur ini masih berjalan dengan lancar kok 😊. Jadi buat kalian yang mau kasih masukan, saran, atau sekedar nanya-nanya, boleh banget tinggalin pesan di sini, nanti aku bales satu-satu. Terima kasih guys 🪄",
    timestamp: "18/04/2026, 12:22",
    reactions: [
      { emoji: "👌", count: 2, userReacted: false }
    ]
  },
  {
    id: "gmsg-2",
    name: "Satria Bahari",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop",
    isAuthor: true,
    message: "@Fadly Makasih banyak mas hehe",
    timestamp: "18/04/2026, 12:22",
    reactions: []
  },
  {
    id: "gmsg-3",
    name: "Natanael Sulan",
    avatarColor: "bg-[#0f766e]",
    isAuthor: false,
    message: "Hallo bang",
    timestamp: "19/04/2026, 12:25",
    reactions: [
      { emoji: "😂", count: 1, userReacted: false }
    ]
  }
];

export const guestbookTranslations: Record<'US' | 'ID', GuestTranslation> = {
  US: {
    title: "Guestbook",
    subtitle: "Feel free to share your thoughts, suggestions, questions, or anything else!",
    authNotice: "Please sign in to join the conversation. Don't worry, your data is safe with us.",
    googleSignIn: "Sign in with google",
    githubSignIn: "Sign in with github",
    inputPlaceholder: "Write a message...",
    sendBtn: "Send Message",
    sendingBtn: "Sending...",
    signOutBtn: "Sign out",
    signedInAs: "Signed in as",
    noMessages: "No comments yet. Start the conversation!",
    systemRestoreNote: "Halo guys, aku minta maaf buat yang udah pernah kirim pesan di Guestbook sebelumnya..."
  },
  ID: {
    title: "Mehmanon Ki Kitab",
    subtitle: "Apne khayalat, mashwaray, sawalat ya kuch bhi share karne mein bilkul hichkichahat mehsoos na karein!",
    authNotice: "Guftagu mein shamil hone ke liye please sign in karein. Fikar mat karein, aapka data bilkul mehfooz hai.",
    googleSignIn: "Google ke sath sign in karein",
    githubSignIn: "GitHub ke sath sign in karein",
    inputPlaceholder: "Apna paigham likhein...",
    sendBtn: "Paigham Bhejein",
    sendingBtn: "Bhej raha hai...",
    signOutBtn: "Sign Out",
    signedInAs: "Sign In kiya gaya hai ba-haisyat",
    noMessages: "Abhi tak koi comment nahi hai. Chalein guftagu ka aagaz karein!",
    systemRestoreNote: "Slam dosto, purana data system update ki wajah se remove hogaya hai, iske liye maazrat..."
  }
};

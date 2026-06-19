export interface Program {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  beneficiaries: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string; // e.g. "Pantry Client", "Volunteer", "Donor"
  location: string;
}

export interface BlogItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: "Success Stories" | "News & Alerts" | "Community Events";
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DonationOption {
  amount: number;
  label: string;
  impactText: string;
}

export interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

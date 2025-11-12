
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  tags: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  longBio: string;
  email: string;
  phoneNumber?: string; // Added phone number
  linkedin: string;
  github: string;
  resumeUrl?: string; // Optional URL to a resume PDF
  profileImageUrl?: string; // Optional URL for a profile picture
}

export interface Skill {
  id: string;
  name: string;
  // level?: number; // Example: for a progress bar, 0-100
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  descriptionPoints: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
}

export interface DonationInfo {
  id: string;
  methodName: string; // e.g., "GCash"
  qrCodeImageUrl: string; // URL to the QR code image
  receiverName: string;
  accountNumber: string;
  details?: string; // Optional details like "Scan to donate"
}

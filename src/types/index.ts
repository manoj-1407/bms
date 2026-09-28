export interface Program {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  image?: string;
  icon?: string;
  category?: string;
  duration?: string;
  whoItsFor?: string[];
  whatToExpect?: string[];
  benefits?: string[];
}

export interface Testimonial {
  id: string;
  name?: string;
  quote?: string;
  role?: string;
  location?: string;
  program?: string;
  image?: string;
  rating?: number;
}

export interface TeamMember {
  id: string;
  name?: string;
  role?: string;
  bio?: string;
  image?: string;
  specialties?: string[];
}

export interface Location {
  id: string;
  name?: string;
  address?: string;
  landmark?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  openingHours?: string;
  mapUrl?: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface WhyBMS {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface HowItWorksStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export interface Milestone {
  id: string;
  label: string;
  value?: string;
  suffix?: string;
}

export interface GalleryItem {
  id: string;
  title?: string;
  image?: string;
  category:
    | "all"
    | "programs"
    | "events"
    | "team"
    | "community"
    | "locations"
    | "founder"
    | "videos";
  isVideo?: boolean;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
}

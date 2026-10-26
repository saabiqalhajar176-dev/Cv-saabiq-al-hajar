export type Language = 'id' | 'en';

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'cloud' | 'fullstack';
  categoryLabel: { id: string; en: string };
  tagline: { id: string; en: string };
  description: { id: string; en: string };
  fullDescription: { id: string; en: string };
  role: string;
  year: string;
  image: string;
  metrics: string;
  technologies: string[];
  keyFeatures: { id: string[]; en: string[] };
  challengesSolved: { id: string; en: string };
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: { id: string; en: string };
  company: string;
  location: string;
  period: string;
  employmentType: { id: string; en: string };
  summary: { id: string; en: string };
  responsibilities: { id: string[]; en: string[] };
  achievements: { id: string[]; en: string[] };
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  experience: string;
  category: 'frontend' | 'backend' | 'devops' | 'architecture';
}

export interface EducationItem {
  degree: { id: string; en: string };
  institution: string;
  location: string;
  period: string;
  description: { id: string; en: string };
  gpa?: string;
  honors?: { id: string; en: string };
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  skillsCovered: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: { id: string; en: string };
  context: string;
}

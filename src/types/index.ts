export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  codechef: string;
  email: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  supportingLine: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  location: string;
  resumeUrl: string;
  social: SocialLinks;
  focusAreas: {
    label: string;
    sublabel: string;
    description: string;
  }[];
}

export interface SkillItem {
  name: string;
  description: string;
  iconName?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: 'Completed' | 'In Progress';
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Competition' | 'Academic';
  description: string;
  keyPoints: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  roleOrContext: string;
  category: 'Leadership' | 'Technical' | 'Certification';
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Verified' | 'Completed';
  description: string;
  skillsGained: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  icon: string;
  subtitle: string;
  accentColor: string;
  focus: string;
}

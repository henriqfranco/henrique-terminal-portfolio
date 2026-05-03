export type SectionKey =
  | "about"
  | "experience"
  | "education"
  | "projects"
  | "skills"
  | "contact";

export type PortfolioSection = {
  key: SectionKey;
  label: string;
  heading: string;
  command: string;
  file: string;
  meta: string;
};

export type Profile = {
  name: string;
  title: string;
  availability: string;
  photoUrl?: string;
};

export type PortfolioMeta = {
  lastUpdated: string;
};

export type TextSegment = {
  text: string;
  emphasis?: boolean;
};

export type AboutInfo = {
  label: string;
  value: string;
  isSuccess?: boolean;
};

export type Entry = {
  title: string;
  date: string;
  organization: string;
  bullets: string[];
};

export type Project = {
  name: string;
  badge?: string;
  date?: string;
  organization?: string;
  description: string;
  stack: string[];
};

export type SkillsGroup = {
  label: string;
  primary: string[];
  secondary: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

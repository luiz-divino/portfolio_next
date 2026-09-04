// src/types/about.ts

export interface Skill {
  name: string;
  icon: string; // Ex: "SiTypescript", "FaReact" - para mapear no componente visual
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: Skill[];
}

export interface AboutData {
  paragraphs: string[];
  skills: SkillCategory[];
}
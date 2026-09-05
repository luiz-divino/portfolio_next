// src/types/projects.ts

import { IconType } from "react-icons";

export interface TechIcon {
  name: string;
  icon: IconType; // Ex: "SiReact", "SiTailwindcss", "SiGithub"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: TechIcon[];
  imageUrl: string;
  imageAlt: string;
  projectUrl: string; // Link para o "Check it out!"
  githubUrl?: string; // Link opcional direto para o repositório
}
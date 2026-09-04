// src/types/home.ts

export interface Profile {
  name: string;
  roles: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string; 
  href: string;
}

export interface PageLink {
  id: string;
  label: string;
  href: string;
}
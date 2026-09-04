import { IconType } from "react-icons";

export interface Profile {
  name: string;
  roles: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  icon: IconType; 
  href: string;
}

export interface PageLink {
  id: string;
  label: string;
  href: string;
}
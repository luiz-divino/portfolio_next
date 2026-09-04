// src/data/homeData.ts
import { Profile, SocialLink, PageLink } from "@/types/home";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export const profileData: Profile[] = [
  {
    name: "Luiz Fernando Divino",
    roles: ["Desenvolvedor Full Stack"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/luizsdivino",
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/luiz-divino",
  },
  {
    id: "resume",
    name: "Currículo",
    icon: FaFileAlt,
    href: "/atualizado_luiz.pdf",
  },
  {
    id: "email",
    name: "E-mail",
    icon: FaEnvelope,
    href: "mailto:nandodivinodev@gmail.com",
  },
];

export const pageNavigation: PageLink[] = [
  {
    id: "about",
    label: "Sobre mim",
    href: "/sobre",
  },
  {
    id: "projects",
    label: "Projetos",
    href: "/projetos",
  },
];

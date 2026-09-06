// src/data/projectsData.ts
import { Project } from "@/types/project";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCss } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiVite,
  SiStyledcomponents,
  SiTailwindcss,
  SiShadcnui,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

export const featuredProjects: Project[] = [
  {
    id: "sistema-financeiro",
    title: "Sistema Financeiro & Admin",
    description:
      "Plataforma de gestão administrativa e financeira construída com foco em segurança e usabilidade. Conta com sistema completo de registro, autenticação de usuários, controle de permissões e dashboards dinâmicos para acompanhamento de despesas e depósitos.",
    technologies: [
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    imageUrl: "/projects/personal_management.png",
    imageAlt: "Dashboard interativo do sistema financeiro",
    projectUrl: "https://personalsystem.vercel.app",
    githubUrl: "https://github.com/seu-usuario/sistema-financeiro",
  },
  {
    id: "acbrasil-redesign",
    title: "ACBrasil Redesign",
    description:
      "Refatoração completa do site institucional da ACBrasil. O projeto resolveu problemas críticos de responsividade e links quebrados, migrando layouts antigos para uma abordagem moderna utilizando Flexbox, resultando em uma interface mais limpa, rápida e de fácil manutenção.",

    technologies: [
      { name: "React", icon: FaReact },
      { name: "CSS", icon: FaCss },
      { name: "JavaScript", icon: SiJavascript },
    ],
    imageUrl: "/projects/acb.png",
    imageAlt: "Demonstração da nova interface responsiva do site ACBrasil",
    projectUrl: "https://grupo3-pfe-web-2026-1.vercel.app/",
    githubUrl: "https://github.com/luiz-divino/grupo3_PFE.2026-1.react",
  },
  {
    id: "nutri",
    title: "Advanced Nutri",
    description:
      "Landing page estática otimizada para máxima performance e SEO. Desenvolvida com Next.js e Tailwind, possui uma arquitetura modular com dados totalmente desacoplados da UI, permitindo escalabilidade e manutenção de conteúdo sem atrito.",

    technologies: [
      { name: "Next.js", icon: RiNextjsLine },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Motion", icon: TbBrandFramerMotion },
      { name: "Shadcn/ui", icon: SiShadcnui },
    ],
    imageUrl: "/projects/nutri.jpg",
    imageAlt: "Página inicial do projeto automotivo ShowRoom",
    projectUrl: "https://nutriadvanced.vercel.app/",
    githubUrl: "https://github.com/luiz-divino/nutrition",
  },
  {
    id: "showroom",
    title: "Showroom",
    description:
      "Landing page para serviços automotivos desenvolvida com React e TypeScript. Utiliza Styled Components para isolamento completo de escopo visual e CSS-in-JS, combinando animações fluidas com Framer Motion e design 100% responsivo.",

    technologies: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Styled-components", icon: SiStyledcomponents },
      { name: "Motion", icon: TbBrandFramerMotion },
      { name: "TypeScript", icon: SiTypescript },
    ],
    imageUrl: "/projects/showroom.png",
    imageAlt: "Página inicial do projeto automotivo ShowRoom",
    projectUrl: "https://showroomautomotive.vercel.app/",
    githubUrl: "https://github.com/luiz-divino/showroom_shine_react",
  },
  {
    id: "pokedex-challenge",
    title: "Pokédex Web App",
    description:
      "Aplicação front-end desenvolvida como desafio técnico. O projeto consome uma API externa para listar personagens em tempo real, utilizando cartões de interface dinâmicos e gerenciamento de estado global otimizado para garantir uma navegação fluida.",

    technologies: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
    ],
    imageUrl: "/projects/pokedex.png",
    imageAlt: "Interface da Pokédex listando personagens em cartões",
    projectUrl: "https://pokedex-blond-five.vercel.app/",
    githubUrl: "https://github.com/luiz-divino/pokedex",
  },
];

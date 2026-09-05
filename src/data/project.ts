// src/data/projectsData.ts
import { Project } from "@/types/project";

export const featuredProjects: Project[] = [
  {
    id: "acbrasil-redesign",
    title: "ACBrasil Redesign",
    description:
      "Refatoração completa do site institucional da ACBrasil. O projeto resolveu problemas críticos de responsividade e links quebrados, migrando layouts antigos para uma abordagem moderna utilizando Flexbox, resultando em uma interface mais limpa, rápida e de fácil manutenção.",
    technologies: [
      { name: "React", icon: "react-icon" },
      { name: "Tailwind CSS", icon: "tailwind-icon" },
      { name: "TypeScript", icon: "typescript-icon" },
    ],
    imageUrl: "/projects/acb.png",
    imageAlt: "Demonstração da nova interface responsiva do site ACBrasil",
    projectUrl: "https://link-do-projeto.com",
    githubUrl: "https://github.com/seu-usuario/acbrasil-redesign",
  },
  {
    id: "sistema-financeiro",
    title: "Sistema Financeiro & Admin",
    description:
      "Plataforma de gestão administrativa e financeira construída com foco em segurança e usabilidade. Conta com sistema completo de registro, autenticação de usuários, controle de permissões e dashboards dinâmicos para acompanhamento de despesas e depósitos.",
    technologies: [
      { name: "Next.js", icon: "nextjs-icon" },
      { name: "Node.js", icon: "nodejs-icon" },
      { name: "PostgreSQL", icon: "postgres-icon" },
    ],
    imageUrl: "/projects/personal_management.png",
    imageAlt: "Dashboard interativo do sistema financeiro",
    projectUrl: "https://link-do-projeto.com",
    githubUrl: "https://github.com/seu-usuario/sistema-financeiro",
  },
  {
    id: "pokedex-challenge",
    title: "Pokédex Web App",
    description:
      "Aplicação front-end desenvolvida como desafio técnico. O projeto consome uma API externa para listar personagens em tempo real, utilizando cartões de interface dinâmicos e gerenciamento de estado global otimizado para garantir uma navegação fluida.",
    technologies: [
      { name: "React", icon: "react-icon" },
      { name: "Vite", icon: "vite-icon" },
      { name: "TypeScript", icon: "typescript-icon" },
    ],
    imageUrl: "/projects/pokedex.png",
    imageAlt: "Interface da Pokédex listando personagens em cartões",
    projectUrl: "https://link-do-projeto.com",
    githubUrl: "https://github.com/seu-usuario/pokedex",
  },
  {
    id: "showroom",
    title: "showroom",
    description:
      "Aplicação web voltada para o setor automotivo desenvolvida como projeto acadêmico. O foco principal foi a estruturação de uma semântica HTML impecável aliada a uma estilização responsiva baseada em componentes visuais customizados.",
    technologies: [
      { name: "HTML5", icon: "html-icon" },
      { name: "CSS3", icon: "css-icon" },
      { name: "JavaScript", icon: "javascript-icon" },
    ],
    imageUrl: "/projects/showroom.png",
    imageAlt: "Página inicial do projeto automotivo StackCar",
    projectUrl: "https://link-do-projeto.com",
    githubUrl: "https://github.com/seu-usuario/stackcar",
  },
];

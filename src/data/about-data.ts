import { AboutData } from "../types/about";
import { FaReact, FaDatabase, FaHtml5, FaNodeJs, FaGitAlt, FaGithub }
from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { 
  SiTypescript, SiJavascript, SiPython, SiTailwindcss, SiShadcnui, SiExpress, SiPrisma, SiPostgresql, SiInsomnia, SiPostman 
} from "react-icons/si";

export const aboutData: AboutData = {
  paragraphs: [
    "Sou estudante de Engenharia de Software no Ibmec-RJ e atuo como Desenvolvedor Full Stack Júnior, focado em criar soluções digitais que equilibram design responsivo e robustez técnica. No front-end, construo interfaces performáticas utilizando React, Next.js e TypeScript; no back-end, estruturo APIs escaláveis com Node.js, Express e PostgreSQL.",
    "Tenho me aprofundado intensamente em Arquitetura de Software (Clean Architecture e SOLID) para garantir códigos de fácil manutenção. Além do desenvolvimento web, dedico meus estudos à área de dados explorando Python e SQL, buscando sempre aplicar uma visão integrada na resolução de desafios complexos.",
  ],
  skills: [
    {
      id: "languages",
      title: "Linguagens",
      description:
        "Minhas linguagens base para desenvolvimento de sistemas, web e análise de dados.",
      items: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: FaDatabase },
      ],
    },
    {
      id: "frontend",
      title: "Front-End",
      description:
        "Tecnologias preferidas para construção de interfaces e componentização.",
      items: [
        { name: "Next.js", icon: RiNextjsLine },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/ui", icon: SiShadcnui },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss },
      ],
    },
    {
      id: "backend",
      title: "Back-End",
      description:
        "Ferramentas que utilizo para criar regras de negócio e arquitetura de dados.",
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "Prisma ORM", icon: SiPrisma },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      id: "tools",
      title: "Ferramentas",
      description:
        "Utilitários essenciais para versionamento, testes de API e fluxo de trabalho.",
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Insomnia", icon: SiInsomnia },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ],
};
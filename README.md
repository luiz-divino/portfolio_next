<div align="center">

# Luiz Fernando | Portfolio

Portfolio profissional desenvolvido para apresentar projetos, competências técnicas e experiência em desenvolvimento Full Stack.

[Tecnologias](#tecnologias) · [Arquitetura](#arquitetura) · [Estrutura-de-dados](#estrutura-de-dados) · [Como-executar](#como-executar)

</div>

## Visão geral

Este projeto é uma aplicação web construída com Next.js e TypeScript. A interface organiza a apresentação profissional em três áreas principais:

- **Início:** identidade profissional, navegação e links de contato.
- **Sobre:** resumo de trajetória e categorias de competências técnicas.
- **Projetos:** seleção de trabalhos com descrição, tecnologias utilizadas, imagem, deploy e repositório.

O projeto prioriza componentização, tipagem estática, reutilização de UI e separação entre conteúdo e apresentação. Essa organização facilita a manutenção e permite atualizar informações do portfólio sem alterar a lógica dos componentes visuais.

## Tecnologias

- **Framework:** Next.js 16 com App Router
- **Linguagem:** TypeScript
- **UI:** React 19, Tailwind CSS 4 e componentes baseados em shadcn/ui
- **Ícones:** Lucide React
- **Performance:** Vercel Speed Insights
- **Tooling:** PostCSS, TypeScript e React Compiler

## Arquitetura

```text
portfolio/
├── public/
│   └── projects/                 # Imagens utilizadas nos projetos
├── src/
│   ├── app/
│   │   ├── sections/             # Seções que compõem a página principal
│   │   │   ├── about-section/
│   │   │   ├── home-section/
│   │   │   └── projects-section/
│   │   ├── globals.css            # Estilos globais e tokens visuais
│   │   ├── layout.tsx             # Layout raiz, fontes, metadados e providers
│   │   └── page.tsx               # Composição da página inicial
│   ├── components/
│   │   ├── about-components/      # Componentes da seção Sobre
│   │   ├── home-components/       # Componentes da seção inicial
│   │   ├── projects-components/   # Componentes da seção de projetos
│   │   ├── ui/                    # Componentes de interface reutilizáveis
│   │   └── utilities/             # Elementos transversais, como footer e títulos
│   ├── data/                      # Conteúdo da aplicação, separado da UI
│   ├── fonts/                     # Configuração das fontes do projeto
│   ├── lib/                       # Utilitários compartilhados
│   └── types/                     # Contratos TypeScript dos dados
├── next.config.ts                 # Configuração do Next.js
├── postcss.config.mjs             # Integração do PostCSS com Tailwind
├── tsconfig.json                  # Configuração e aliases do TypeScript
└── package.json                   # Dependências e scripts do projeto
```

### Fluxo de composição

```text
src/app/page.tsx
├── HomeSection
│   └── componentes da apresentação e navegação
├── About
│   └── GridSkills ← aboutData + AboutData
└── Projects
	└── GridProjects ← featuredProjects + Project
```

O `layout.tsx` fornece a estrutura global da aplicação, incluindo fontes, metadados, estilos globais, rodapé e monitoramento de performance. A página principal atua como ponto de composição, enquanto cada seção delega a renderização aos seus componentes especializados.

## Estrutura de dados

O conteúdo editável do portfólio fica centralizado em `src/data`, evitando que textos, links e listas de tecnologias sejam misturados ao markup dos componentes.

| Arquivo                  | Responsabilidade                                       | Contrato principal                    |
| ------------------------ | ------------------------------------------------------ | ------------------------------------- |
| `src/data/home-data.ts`  | Perfil, redes sociais, currículo, e-mail e navegação   | `Profile`, `SocialLink`, `PageLink`   |
| `src/data/about-data.ts` | Parágrafos de apresentação e categorias de habilidades | `AboutData`, `SkillCategory`, `Skill` |
| `src/data/project.ts`    | Projetos em destaque, tecnologias, imagens e links     | `Project`, `TechIcon`                 |

### Práticas adotadas

- **Dados tipados:** cada conjunto de conteúdo declara seu contrato em `src/types`, reduzindo inconsistências durante o desenvolvimento.
- **Separação de responsabilidades:** os arquivos em `src/data` descrevem o conteúdo; os componentes decidem como apresentá-lo.
- **Renderização orientada a listas:** habilidades, links e projetos são renderizados a partir de arrays, evitando duplicação de markup.
- **Identificadores estáveis:** entidades possuem `id` para uso como chave de renderização e referência interna.
- **Recursos desacoplados:** imagens, URLs, textos alternativos e tecnologias são propriedades do projeto, permitindo evolução do conteúdo sem refatorar a interface.
- **Acessibilidade:** projetos possuem `imageAlt` e links são mantidos como dados explícitos para facilitar revisão e manutenção.

Esse modelo permite adicionar um novo projeto, habilidade ou link alterando principalmente o arquivo de dados correspondente, preservando os componentes de apresentação.

## Como executar

### Pré-requisitos

- Node.js 20 ou superior
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
npm run start
```

## Scripts disponíveis

| Comando         | Descrição                                           |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera e valida a build de produção                   |
| `npm run start` | Executa a aplicação em modo de produção             |

## Objetivos técnicos

- Apresentar projetos de forma clara, responsiva e orientada a resultados.
- Manter conteúdo e apresentação independentes para acelerar a manutenção.
- Aplicar TypeScript como contrato entre dados e componentes.
- Utilizar uma estrutura modular que possa crescer com novas seções e projetos.
- Demonstrar domínio prático de React, Next.js, arquitetura de componentes e boas práticas de front-end.

## Autor

**Luiz Fernando Divino**  
Desenvolvedor Full Stack

- [LinkedIn](https://www.linkedin.com/in/luizsdivino)
- [GitHub](https://github.com/luiz-divino)
- [E-mail](mailto:nandodivinodev@gmail.com)

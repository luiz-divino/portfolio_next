import { featuredProjects } from "@/data/project";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

const technologyColors: Record<string, string> = {
  React: "#61DAFB",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  "Next.js": "#000000",
  "Node.js": "#339933",
  PostgreSQL: "#4169E1",
  Vite: "#646CFF",
  TypeScript: "#3178C6",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Tailwind CSS": "#3178C6",
};

const Grid = () => {
  return (
    <section className="space-y-8 pb-5 px-2">
      {featuredProjects.map((project) => {
        const qntdProjects = project.technologies.length;
        return (
          <div
            key={project.id}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 py-0.5 space-y-4 md:space-y-0 rounded-sm md:gap-5 flex-col max-w-7xl shadow-[0_0_10px_0_#00000073_inset]",
            )}
          >
            <section className={cn("max-w-xl flex-1")}>
              <div className="px-0.5">
                <Image
                  unoptimized
                  src={project.imageUrl}
                  priority
                  quality={100}
                  alt={project.imageAlt}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            </section>
            <section className="flex-1 flex flex-col text-center space-y-3 max-w-xl">
              <div className="max-w-xl mx-auto">
                <h2 className="text-[24px] font-semibold lg:text-[40px] font-nunito text-[#333333]">
                  {project.title}
                </h2>
              </div>

              <div
                className="grid mx-auto space-x-5"
                style={{
                  gridTemplateColumns: `repeat(${qntdProjects}, minmax(0, 1fr))`,
                }}
              >
                {project.technologies.map((Tech) => (
                  <span key={Tech.name}>
                    <Tech.icon size={30} color={technologyColors[Tech.name]} />
                  </span>
                ))}
              </div>

              <article className="text-[16px] font-normal text-center flex justify-center w-full font-nunito text-[#333333]">
                <p>{project.description}</p>
              </article>

              <section className="flex max-w-md mx-auto gap-10">
                <Link
                  href={project.projectUrl}
                  className="p-3 md:p-1 rounded-xl font-nunito text-[19px] border-2 bg-emerald-600 text-white border-green-500 max-w-40 mx-auto mb-6 md:mb-0 hover:bg-emerald-700 font-semibold"
                >
                  Deploy
                </Link>
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="p-3 md:p-1 rounded-xl font-nunito text-[19px] border-2 bg-zinc-900 text-white hover:bg-zinc-800 max-w-40 mx-auto mb-6 md:mb-0 font-semibold"
                  >
                    GitHub
                  </Link>
                )}
              </section>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Grid;

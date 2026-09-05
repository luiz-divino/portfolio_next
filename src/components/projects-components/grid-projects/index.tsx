import { featuredProjects } from "@/data/project";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

const Grid = () => {
  return (
    <section className="space-y-8 pb-5 px-2">
      {featuredProjects.map((project, index) => {
        return (
          <div
            key={project.id}
            className={cn("flex border-2 space-y-4 md:space-y-0 rounded-sm border-green-500 md:gap-5 flex-col md:flex-row items-center max-w-7xl shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)]", index % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row")}
          >
            <section className={cn("max-w-xl flex-1")}>
              <div className="">
                <Image
                  unoptimized
                  src={project.imageUrl}
                  priority
                  quality={100}
                  alt={project.imageAlt}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover shadow-xl rounded-sm"
                />
              </div>
            </section>
            <section className="flex-1 flex flex-col text-center space-y-5 max-w-xl">
              <div className="max-w-xl mx-auto">
                <h2 className="text-[24px] font-semibold lg:text-[40px] font-nunito text-[#333333]">{project.title}</h2>
                <div>
                  {project.technologies.map((Tech) => (
                    <span key={Tech.name}>
                      <Tech.icon />
                    </span>
                  ))}
                </div>
              </div>

              <article className="text-[16px] font-normal text-center flex justify-center w-full font-nunito text-[#333333]">
                <p>{project.description}</p>
              </article>

              <Link href={project.projectUrl} className="p-3 md:p-1 rounded-xl font-nunito text-[19px] border-2 border-green-500 max-w-40 mx-auto mb-6 md:mb-0 text-green-800 font-semibold">Ver Mais</Link>
            </section>

          </div>
        );
      })}
    </section>
  );
};

export default Grid;

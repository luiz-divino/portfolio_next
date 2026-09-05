import { CardContent, CardDescription } from "@/components/ui/card";
import { SkillCategory } from "@/types/about";
import { cn } from "cn";

const Grid = ({ skills }: { skills: SkillCategory[] }) => {
  return (
    <section className="grid grid-cols-1 gap-5 pt-12 lg:grid-cols-4 lg:space-x-10">
      {skills.map((Skill) => {
        return (
          <div
            key={Skill.id}
            className="border-2 p-3 rounded-sm border-green-500 max-w-5xl w-full h-3xl flex flex-col shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)]"
          >
            <div>
              <h1 className="text-[32px] text-center font-bold text-[#333333]">
                {Skill.title}
              </h1>
            </div>
            <CardContent className="flex flex-col items-center justify-center">
              <div
                className={cn(
                  "grid text-center gap-5 py-4 ",
                  Skill.items.length >= 6
                    ? "grid-cols-6 lg:grid-cols-3"
                    : "grid-cols-4 space-x-3 lg:grid-cols-2",
                )}
              >
                {Skill.items.map((Item) => (
                  <span key={Item.name}>
                    <Item.icon size={40} />
                  </span>
                ))}
              </div>
              <CardDescription className="max-w-xs text-[16px] text-center text-[#333333]">
                {Skill.description}
              </CardDescription>
            </CardContent>
          </div>
        );
      })}
    </section>
  );
};

export default Grid;

import { CardContent, CardDescription } from "@/components/ui/card";
import { SkillCategory } from "@/types/about";
import { cn } from "cn";

const skillColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  SQL: "#336791",
  "Next.js": "#000000",
  React: "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "Shadcn/ui": "#000000",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Node.js": "#339933",
  Express: "#000000",
  "Prisma ORM": "#2D3748",
  PostgreSQL: "#4169E1",
  Git: "#F05032",
  GitHub: "#181717",
  Insomnia: "#4000BF",
  Postman: "#FF6C37",
};

const Grid = ({ skills }: { skills: SkillCategory[] }) => {
  return (
    <section className="grid grid-cols-1 gap-5 pt-12 lg:grid-cols-4 lg:space-x-10">
      {skills.map((Skill) => {
        return (
          <div
            key={Skill.id}
            className="p-3 rounded-sm max-w-5xl w-full h-3xl flex flex-col shadow-[0_0_10px_0_#00000073_inset]"
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
                    <Item.icon size={40} color={skillColors[Item.name]} />
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

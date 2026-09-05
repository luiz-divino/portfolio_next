import Title from "@/components/utilities/section-title";
import Image from "next/image";
import me from "../../../../public/eu.png";
import { aboutData } from "@/data/about-data";
import Grid from "@/components/about-components/grid-skills";

const About = () => {
  const { paragraphs, skills } = aboutData;

  return (
    <section id="about" className="flex h-full pb-10 flex-col items-center max-w-5xl mx-auto lg:space-y-4">
      <Title title="Sobre mim" />
      <div className="max-w-40 mx-auto">
        <Image
          src={me}
          priority
          alt="Foto do desenvolvedor Luiz Fernando"
          width={400}
          height={400}
          className="w-full h-auto aspect-square object-cover rounded-full shadow-xl bg-linear-to-r from-emerald-500 to-emerald-900"
        />
      </div>
      <article className="space-y-1 text-[#424142] text-center pt-6 px-3">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </article>
      <section className="max-w-7xl mx-auto">
        <Grid skills={skills} />
      </section>
    </section>
  );
};

export default About;

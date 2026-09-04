import Hero from "@/components/home-components/hero-section";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { Floating3DParticles } from "@/components/ui/floating-3d-particles";

const HomeSection = () => {
  return (
    <section className="h-dvh flex flex-col w-full items-center justify-center relative overflow-hidden bg-linear-to-r from-emerald-500 to-emerald-900">
      <Hero />
      <TbArrowBigDownLinesFilled size={40} color="white" className="mb-4 animate-bounce"/>
      <Floating3DParticles color="#66bf40" />
    </section>
  );
};

export default HomeSection;

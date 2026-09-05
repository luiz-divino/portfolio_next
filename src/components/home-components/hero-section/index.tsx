import { pageNavigation, profileData, socialLinks } from "@/data/home-data";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden ">
      {profileData.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-col z-10 font-rubik font-semibold text-center pt-9 gap-4"
          >
            <h1 className="text-5xl lg:text-[100px] text-white">{item.name}</h1>
            <p className="text-[20px] lg:text-[40px] text-white">
              {item.roles}
            </p>
            <div className="z-10 grid grid-cols-4 gap-3 lg:gap-10 max-w-md mx-auto">
              {socialLinks.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white p-2 flex items-center justify-center text-2xl lg:text-4xl hover:bg-white"
                >
                  <Link href={skill.href}>
                    <skill.icon className="text-white hover:text-emerald-900" />
                  </Link>
                </span>
              ))}
            </div>

            <div className="space-x-6 text-center max-w-md mx-auto text-xl text-white">
              {pageNavigation.map((link) => (
                <span key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;

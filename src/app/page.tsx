import About from "./sections/about-section";
import { Certifications } from "./sections/certifications-section";
import HomeSection from "./sections/home-section";
import Projects from "./sections/projects-section";

 const Home = () => {
  return(
    <main className="min-h-dvh w-full">
     <HomeSection/>
     <About/>
     <Projects/>
     <Certifications/>
    </main>
  )
}

export default Home;
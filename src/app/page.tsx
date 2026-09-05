import About from "./sections/about-section";
import HomeSection from "./sections/home-section";
import Projects from "./sections/projects-section";

 const Home = () => {
  return(
    <main className="min-h-dvh w-full">
     <HomeSection/>
     <About/>
     <Projects/>
    </main>
  )
}

export default Home;
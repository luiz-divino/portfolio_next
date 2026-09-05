import About from "./sections/about-section";
import HomeSection from "./sections/home-section";

 const Home = () => {
  return(
    <main className="min-h-dvh w-full">
     <HomeSection/>
     <About/>
    </main>
  )
}

export default Home;
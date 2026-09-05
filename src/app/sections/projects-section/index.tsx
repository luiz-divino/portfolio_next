import Grid from "@/components/projects-components/grid-projects";
import Title from "@/components/utilities/section-title";

const Projects = () => {
    return(
        <section id="projects" className="flex flex-col max-w-7xl mx-auto">
            <Title title="Projetos em Destaque"/>
            <section>
                <Grid/>
            </section>
        </section>
    )
}

export default Projects;
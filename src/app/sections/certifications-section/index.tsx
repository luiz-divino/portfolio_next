import { Grid } from "@/components/certifications-components/grid";
import Title from "@/components/utilities/section-title";


export const Certifications = () => {
    return(
        <section className="max-w-7xl mx-auto pb:5 lg:pb-10">
            <Title title="Certificações" />
            <main className="w-full">
                <Grid />
            </main>
        </section>
    )
}
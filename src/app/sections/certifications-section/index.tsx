import { Grid } from "@/components/certifications-components/grid";
import Title from "@/components/utilities/section-title";


export const Certifications = () => {
    return(
        <section className="max-w-7xl pb-10 mx-auto lg:pb-10">
            <Title title="Certificações" />
            <main className="w-full">
                <Grid />
            </main>
        </section>
    )
}
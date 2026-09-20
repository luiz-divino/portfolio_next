import { certifications } from "@/data/certifications-data"
import { CardCertificate } from "../card-certificate"


export const Grid = () => {
    return(
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-3 lg:px-0">
            {
                certifications && certifications.map(certificate => {
                    return (
                        <div className="max-w-7xl mx-auto" key={certificate.id}>
                            <CardCertificate certificate={certificate}/>
                        </div>
                    )
                })
            }
        </section>
    )
}
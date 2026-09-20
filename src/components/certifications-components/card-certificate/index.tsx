import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export type CertificateType = {
    id: number,
    title:string,
    instituicao: string,
    code: string | null,
    img: string
}

export interface CertificateProps {
    certificate:  CertificateType;
}

export const CardCertificate = ({certificate}: CertificateProps) => {
  return (
    <div className="min-h-full min-w-full">
      <div className="relative overflow-hidden">
        <Image
          unoptimized
          src={certificate.img}
          priority
          quality={100}
          alt={''}
          width={500}
          height={500}
          className="w-full object-cover brightness-75 transition duration-300  max-h-72 ease-in-out hover:brightness-100 hover:scale-105"
        />
      </div>
      <CardContent className="bg-emerald-700 rounded-b-2xl">
        <CardHeader>
            <CardTitle>
                <h1 className="w-full flex justify-center font-nunito text-white">
                {certificate.title}
                </h1>
            </CardTitle>
        </CardHeader>
      </CardContent>
    </div>
  );
};

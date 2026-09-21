import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export type CertificateType = {
  id: number;
  title: string;
  instituicao: string;
  code: string | null;
  img: string;
  projetos: {
    url: string;
    nome: string;
  }[];
};

export interface CertificateProps {
  certificate: CertificateType;
}

export const CardCertificate = ({ certificate }: CertificateProps) => {
  return (
    <div className="min-h-full min-w-full">
      <div className="relative overflow-hidden">
        <Image
          unoptimized
          src={certificate.img}
          priority
          quality={100}
          alt={""}
          width={500}
          height={500}
          className="object-cover brightness-75 transition duration-300  max-h-72 ease-in-out hover:brightness-100 hover:scale-105"
        />
      </div>
      <CardContent className="bg-emerald-700 rounded-b-2xl h-24">
        <CardHeader>
          <CardTitle className="px-3 max-w-xl text-center">
            <h1 className="w-full flex justify-center font-nunito text-white text-md">
              Utilizei os conhecimentos desse curso no(s) seguinte(s) projetos:
            </h1>
          </CardTitle>
        </CardHeader>
        <CardDescription>
          <div className="flex flex-wrap  gap-3 w-full lg:whitespace-nowrap items-center justify-center text-white">
            {certificate.projetos.map((item) => (
              <span key={item.url} className="py-3">
                <Link href={item.url} className="font-bold outline-1 p-1 rounded-2xl">{item.nome}</Link>
              </span>
            ))}
          </div>
        </CardDescription>
      </CardContent>
    </div>
  );
};

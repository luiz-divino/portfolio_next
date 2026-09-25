import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="w-[360px] lg:w-96 max-w-96 ">
      <CardContent>
        <CardHeader className="bg-emerald-200 h-20 lg:h-17 text-center flex flex-col items-center justify-center">
          <CardTitle className="px-3 font-rubik font-semibold">
            {certificate.title}
          </CardTitle>
            <p className="font-rubik">{certificate.instituicao}</p>
        </CardHeader>
        <CardDescription className="bg-emerald-700">
          <h1 className="flex justify-center font-normal text-white text-lg">
            Projetos relacionados:
          </h1>
          <div className="flex flex-wrap gap-3 w-full lg:whitespace-nowrap items-center justify-center text-white">
            {certificate.projetos.map((item) => (
              <span key={item.url} className="py-3">
                <Link
                  href={item.url}
                  className="font-bold outline-1 p-1 rounded-2xl"
                >
                  {item.nome}
                </Link>
              </span>
            ))}
          </div>
        </CardDescription>
      </CardContent>
    </div>
  );
};

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { nunito, rubik } from "@/fonts/portfolio";
import Footer from "@/components/utilities/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Luiz Fernando | Desenvolvedor Full Stack',
  description: 'Portfólio de Desenvolvedor Full Stack Júnior focado em React, Next.js, Node.js e TypeScript. Projetos construídos com Clean Architecture e alta performance.',
  keywords:["Full Stack", "TypeScript", "Next.js", "BackEnd", "FrontEnd"],
  
  openGraph: {
    title: 'Luiz Fernando | Desenvolvedor Full Stack',
    description: 'Portfólio de Desenvolvedor Full Stack Júnior focado em React, Next.js, Node.js e TypeScript.',
    url: "https://divinodev.vercel.app/", // Substitua pelo domínio real do seu deploy
    siteName: 'Portfólio de Luiz Fernando',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Preview do Portfólio de Desenvolvedor Full Stack',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luiz Fernando | Desenvolvedor Full Stack',
    description: 'Portfólio de Desenvolvedor Full Stack Júnior focado em React, Next.js, Node.js e TypeScript.',
    images: ['/og-image.jpeg'],
  },
}


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${nunito.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
      <SpeedInsights />
    </html>
  );
}

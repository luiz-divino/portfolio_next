import { Rubik, Nunito_Sans } from "next/font/google";

export const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-rubik', 
  display: 'swap',
});


export const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});
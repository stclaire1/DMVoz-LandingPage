import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "DMVoz Produções - Locução profissional",
  description: "Locução profissional para vídeos, anúncios e conteúdos digitais, com mais de 20 anos de experiência. Especialista em jingles para rádio, produção de programas de rádio, entrevistas e soluções completas em comunicação para marcas, eventos e mídia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={montserrat.className}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

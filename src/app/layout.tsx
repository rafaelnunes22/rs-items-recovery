import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import cn from "clsx";
import "./globals.css";
import PrelineScript from "./components/Preline/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recupera RS",
  description:
    "Informações centralizadas para recuperação de pertences atingidos pela enchente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(inter.className, "flex flex-row justify-center")}>
        {children}
        <PrelineScript />
        <SpeedInsights />
      </body>
    </html>
  );
}

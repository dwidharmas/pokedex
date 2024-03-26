import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex - Alola",
  description: "List Pokemon on Alola Region",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

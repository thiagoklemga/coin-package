import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Cassino",
  description: "The best is yet to come",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={cn("pt-16")}>{children}</main>
      </body>
    </html>
  );
}
